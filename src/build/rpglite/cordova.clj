(ns rpglite.cordova
  (:require [clojure.java.shell :refer [sh]]))

(defn build
  {:shadow.build/stage :flush}
  [build-state]
  (prn "Compiling cordova...")
  (sh "cordova" "build")
  build-state)