(ns editor.pages.main
  (:require
   ["react-router-dom" :refer (Switch Route Redirect useLocation useHistory) :rename {BrowserRouter Router}]
   [reagent.core :as r]
   [common.auth :refer (logout)]
   [common.hooks :refer (auth-context)]
   [editor.pages.login :as login]
   [editor.pages.stories :as stories]))

(defn error-boundary [children]
  (let [error (r/atom nil)]
    (r/create-class
     {:component-did-catch (fn [this e info]
                             (js/console.log this e info))
      :get-derived-state-from-error (fn [e]
                                      (reset! error e)
                                      #js {})
      :reagent-render (fn [children]
                        (if @error
                          [:div
                           "Ooops, idiot!"
                           [:button {:on-click #(reset! error nil)} "Try again"]]
                          children))})))

(defn protected-route
  [children]
  (r/create-class
   {:context-type auth-context
    :reagent-render (fn [children]
                      (let [auth (.-context (r/current-component))]
                        (js/console.log auth)
                        (if false
                          children
                          [:> Redirect {:push true
                                        :to {:pathname "/login"
                                             :state {:from "/"}}}])))}))

(defn logout-page
  []
  (let [history (useHistory)]
    (logout (fn [] (.replace history "/login")))
    [:h1 "Loggin out..."]))

(defn show
  []
  [:> Router
   [:> Switch
    [:> Route {:exact true :path "/"}
     [:> protected-route
      [:h1 "Hello world"]]]
    [:> Route {:path "/stories"}
     [:f> stories/show]]
    [:> Route {:path "/login"}
     [:f> login/show]]
    [:> Route {:path "/logout"}
     [:f> logout-page]]
    [:> Route {:path "*"}
     [:h1 "ooops"]]]])