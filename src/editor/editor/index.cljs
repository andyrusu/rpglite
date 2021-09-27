(ns editor.index
  (:require
   [reagent.dom :as rdom]
   ["firebase/app" :refer (initializeApp)]
   [common.auth :refer (initOnAuthStateChanged)]
   [editor.pages.main :as view]))

(defonce fb-config #js {:apiKey "AIzaSyAD7Eq6hUEVGuKMRTUWH5CYyisyqP-aQ64"
                        :authDomain "rpglite-3fc46.firebaseapp.com"
                        :projectId "rpglite-3fc46"
                        :storageBucket "rpglite-3fc46.appspot.com"
                        :messagingSenderId "767985415267"
                        :appId "1:767985415267:web:7f599cee190f8e8e953456"
                        :measurementId "G-EJ8B18N0P1"})

(def root (.getElementById js/document "app"))

(defn init []
  (rdom/render [:f> view/show] root))

(defn init-once []
  (js/console.group "Init once...")
  (initializeApp fb-config)
  (initOnAuthStateChanged)
  (init)
  (js/console.groupEnd))

(defn start []
  (js/console.group "Initializing app...")
  ;;(init)
  (js/console.groupEnd))

(defn stop []
  (js/console.group "Unmounting app...")
  ;;(rdom/unmount-component-at-node root)
  (js/console.groupEnd))
