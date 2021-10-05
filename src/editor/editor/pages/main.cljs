(ns editor.pages.main
  (:require
   ["react-router-dom" :refer (Switch Route Redirect useLocation useHistory) :rename {BrowserRouter Router}]
   [common.auth :refer (logout)]
   [common.hooks :as h]
   [editor.pages.login :as login]
   [editor.pages.stories :as stories]))

(defn protected-route
  [children]
  (let [location (useLocation)]
    (if false
      children
      [:> Redirect {:push true
                    :to (clj->js {:pathname "/login"
                                  :state {:from (.-pathname location)}})}])))

;;  [:> Redirect {:to {:pathname "/login"}}]
(defn logout-page
  []
  (let [history (useHistory)]
    (logout (fn [] (.replace history "/login")))
    [:h1 "Loggin out..."]))

(defn show
  []
  [:> h/ProvideAuth
   [:> Router
    [:> Switch
     [:> Route {:exact true :path "/"}
      [:f> protected-route
       [:h1 "Hello world"]]]
     [:> Route {:path "/stories"}
      [:f> stories/show]]
     [:> Route {:path "/login"}
      [:f> login/show]]
     [:> Route {:path "/logout"}
      [:f> logout-page]]
     [:> Route {:path "*"}
      [:h1 "ooops"]]]]])