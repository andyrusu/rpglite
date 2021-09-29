(ns editor.pages.main
  (:require
   ["react-router-dom" :refer (Switch Route Redirect) :rename {BrowserRouter router}]
   [common.hooks :as hooks]
   [editor.pages.login :as login]
   [editor.pages.stories :as stories]))

(defn protected-route
  [options children]
  (let [auth (hooks/useAuth)
        make-route (partial conj [:> Route options])]
    (make-route
     (if (:is-signedin? auth)
       children
       [:> Redirect {:to {:pathname (:redirect-to options) :state {:from (:path options)}}}]))))

(defn show
  []
  [:f> hooks/provide-auth
   [:> router {:forceRefresh true}
    [:> Switch
     [:> Route {:path "/login"}
      [:f> login/show]]
     [:f> protected-route {:exact true :path "/" :redirect-to "/login"}
      [:h1 "Hello world"]]
     [:f> protected-route {:path "/stories" :redirect-to "/login"}
      [:f> stories/show]]
     [:> Route {:path "/logout"}
      [:f> login/show]]
     [:> Route {:path "*"}
      [:h1 "oops..."]]]]])