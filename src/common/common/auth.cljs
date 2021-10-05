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
  ([]
   (initOnAuthStateChanged nil))
  ([handler]
   (onAuthStateChanged
    (getAuth)
    (if handler
      handler
      (fn [user] (js/console.log (if user "User logged in" "User logged out")))))))

(defn with-email-password
  ([email password]
   (signInWithEmailAndPassword (getAuth) email password))
  ([email password then-fn]
   (.then (with-email-password email password) then-fn))
  ([auth email password then-fn]
   (.then (signInWithEmailAndPassword auth email password) then-fn))
  ([auth email password then-fn catch-fn]
   (-> (signInWithEmailAndPassword auth email password)
       (.then then-fn)
       (.catch catch-fn))))

(defn with-persistance
  ([then-fn]
   (with-persistance (getAuth) browserSessionPersistence then-fn))
  ([persist then-fn]
   (with-persistance (getAuth) persist then-fn))
  ([auth persist then-fn]
   (.then (setPersistence auth persist) then-fn))
  ([auth persist then-fn catch-fn]
   (-> (setPersistence auth persist)
       (.then then-fn)
       (.catch catch-fn))))

(defn logout
  ([]
   (signOut (getAuth)))
  ([then-fn]
   (.then (signOut (getAuth)) then-fn))
  ([then-fn catch-fn]
   (-> (signOut (getAuth))
       (.then then-fn)
       (.catch catch-fn))))