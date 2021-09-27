(ns editor.config
  (:require ["firebase/remote-config" :refer (getRemoteConfig getValue fetchAndActivate)]))

(def config (atom nil))

(defn init
  [do-then]
  (reset! config (getRemoteConfig))

  (set! (.. @config -settings -minimumFetchIntervalMillis) 3600000)

  (set! (.. @config -settings -defaultConfig) (clj->js {}))
  (-> @config
      (fetchAndActivate)
      (.then (fn []
               (js/console.log "Initialized config...")
               (when do-then (do-then))))
      (.catch #(js/console.log %))))

(defn normalize-key
  [key]
  (if (keyword? key)
    (-> key
        (name)
        (.replace "-" "_"))
    key))

(defn value->json
  [^js/Value value]
  (-> value
      (.asString)
      (js/JSON.parse)))

(defn get-value
  [key]
  (getValue @config (normalize-key key)))

(defn get-routes
  []
  (value->json (get-value "editor_routes")))


(defn get-router
  []
  (value->json (get-value "editor_router")))