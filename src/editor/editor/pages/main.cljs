(ns editor.pages.main
  (:require
   ["react-router-dom" :refer (Switch Route Redirect) :rename {BrowserRouter router}]
   [reagent.core :as r]
   [common.auth :refer (is-signedin?)]
   [editor.pages.login :as login]
   [editor.pages.stories :as stories]))

(defn protected-route
  [options children]
  [:> Route (assoc options :render (fn [params]
                                     (if (is-signedin?)
                                       children
                                       [:> Redirect {:pathname "/login" :state {:from (.-location params)}}])))])

(defn show
  []
  [:> router
   [:> Switch
    [protected-route {:exact true :path "/"}
     [:h1 "Hello world"]]
    [:> Route {:path "/login"}
     [:f> login/show]]
    [protected-route {:path "/stories"}
     [:f> stories/show]]
    [:> Route
     [:h1 "oops..."]]]])