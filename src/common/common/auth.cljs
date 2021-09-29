(ns common.auth
  (:require
   ["firebase/auth" :refer (getAuth setPersistence onAuthStateChanged signInWithEmailAndPassword signOut browserSessionPersistence)]))

(defn get-current-user
  []
  (.-currentUser (getAuth)))

(defn is-signedin?
  []
  (not (nil? (get-current-user))))

(defn initOnAuthStateChanged
  []
  (onAuthStateChanged (getAuth) (fn [user] (js/console.log (if user "User logged in" "User logged out")))))

(defn login
  [auth email password]
  (signInWithEmailAndPassword auth email password))

(defn logout []
  (signOut (getAuth)))

(defn with-catch
  ([auth do-login]
   (with-catch auth do-login nil))
  ([auth do-login do-catch]
   (let [when-do #(when do-catch (.catch % do-catch))]
     (-> (do-login auth)
         (when-do)))))

(defn with-persistance
  [auth persist do-login do-catch]
  (-> auth
      (setPersistence persist)
      (.then do-login)
      (.catch do-catch)))

(defn login-with-remember
  [email pass rem]
  (let [auth (getAuth)
        with-remember (if rem (partial with-persistance auth browserSessionPersistence) (partial with-catch auth))]
    (with-remember #(login auth email pass) #(js/console.log (.-message %)))))