(ns common.hooks
  (:require
   ["react" :refer (useContext createContext useState)]
   [common.auth :as a]))

(def auth-context (createContext))
(def auth-provider (.-Provider auth-context))
(def auth-consumer (.-consumer auth-context))

(defn useAuth
  []
  (useContext auth-context))

(defn useProvideAuth
  []
  (let [[is-signedin? set-signedin] (useState (a/is-signedin?))]
    #js {:is-signedin is-signedin?
         :login (fn [email pass rem]
                  (a/login-with-remember email pass rem)
                  (set-signedin true))
         :logout (fn []
                   (a/logout)
                   (set-signedin false))
         :update (fn []
                   (set-signedin (a/is-signedin?)))}))