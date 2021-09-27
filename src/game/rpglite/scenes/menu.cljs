(ns rpglite.scenes.menu
  (:require [reagent.core :as r]))

(defn show
  []
  [:div
   [:h1 "Apache Cordova"]
   [:div {:id "deviceready" :class "blink"}
    [:p {:class "event listening"} "Connecting to Device"]
    [:p {:class "event listening"} "Device is Ready"]]])