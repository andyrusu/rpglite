(ns rpglite.index
  (:require [reagent.dom :as rdom]
            [rpglite.scenes.menu :refer (show)]))

(def root (.getElementById js/document "app"))

(defn init []
  (rdom/render [show] root))

(defn start []
  (js/console.log "Initializing app...")
  (init))

(defn stop []
  (js/console.log "Unmounting app...")
  (rdom/unmount-component-at-node root))