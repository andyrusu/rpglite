(ns editor.pages.main
  (:require
   ["react-router-dom" :refer (Switch Route Redirect useLocation useHistory) :rename {BrowserRouter Router}]
   [reagent.core :as r]
   [common.auth :refer (get-current-user logout initOnAuthStateChanged)]
   [editor.pages.login :as login]
   [editor.pages.stories :as stories]))

(defn protected-route
  [options children]
  (js/console.log (:user options))
  (if (:user options)
    children
    (let [location (useLocation)]
      [:> Redirect {:to {:pathname "/login"
                         :state (.-state location)}}])))

;;  [:> Redirect {:to {:pathname "/login"}}]
(defn logout-page
  []
  (let [history (useHistory)]
    (logout (fn [] (.replace history "/login")))
    [:h1 "Loggin out..."]))

(defn show
  []
  (let [user (r/atom (get-current-user))]
    (js/console.log @user)
    (r/create-class
     {:component-did-mount (fn [_this] (initOnAuthStateChanged (fn [new-user] (reset! user new-user))))
      ;;:component-did-mount (fn [] (set! unsub (initOnAuthStateChanged (fn [new-user] (auth-state-handler new-user user)))))
      ;;:component-wil-unmount (fn [] (unsub))
      :reagent-render (fn []
                        [:> Router
                         [:> Switch
                          [:> Route {:exact true :path "/"}
                           [:f> protected-route {:user @user}
                            [:h1 "Hello world"]]]
                          [:> Route {:path "/stories"}
                           [:f> stories/show]]
                          [:> Route {:path "/login"}
                           [:f> login/show]]
                          [:> Route {:path "/logout"}
                           [:f> logout-page]]
                          [:> Route {:path "*"}
                           [:h1 "ooops"]]]])})))