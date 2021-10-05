(ns common.hooks
  (:require
   ["react" :refer (useContext createContext useState)]
   [reagent.core :as r]
   [common.auth :as a]))

(def auth-context (createContext))
(def auth-provider (.-Provider auth-context))
;;(def auth-consumer (.-consumer auth-context))

(defn useAuth
  []
  (useContext auth-context))

(defn useProvideAuth
  []
  (let [[is-signedin? set-signedin] (useState (a/is-signedin?))]
    #js {:is-signedin is-signedin?
         :login (fn [email pass rem redir]
                  (let [then-fn (fn [_] (set-signedin true) (redir nil))
                        login (fn [] (a/with-email-password email pass then-fn))]
                    (if rem
                      (a/with-persistance login)
                      (login))))
         :logout (fn []
                   (a/logout
                    #(set-signedin false)))
         :update (fn []
                   (set-signedin (a/is-signedin?)))}))

(defn ProvideAuth
  [options]
  (let [auth (useProvideAuth)
        this (r/current-component)]
    (js/console.log this)
    [:f> auth-provider {:value auth}
     [(.-children options)]]))