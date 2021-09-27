(ns common.fb
  (:require ["firebase/app" :default fb]))

(defn init-app
  [config]
  (.initializeApp fb config))

(defn get-auth
  []
  (.auth fb))