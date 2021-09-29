(ns common.hooks
  (:require
   ["react" :refer (useContext createContext useState)]
   [common.auth :as a]))

(def auth-context (createContext))

(defn useAuth
  []
  (useContext auth-context))

(defn useProvideAuth
  []
  (let [[is-signedin? set-signedin] (useState (a/is-signedin?))]
    {:is-signedin? is-signedin?
     :update (fn []
               (set-signedin (a/is-signedin?)))}))


(defn provide-auth
  [children]
  (let [auth (useProvideAuth)]
    [:> (.-Provider auth-context) {:value auth} children]))