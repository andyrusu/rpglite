(ns editor.pages.login
  (:require
   [react :refer (useState)]
   ["react-router-dom" :refer (useHistory useLocation)]
   [common.auth :refer (with-email-password with-persistance)]
   [common.hooks :refer (auth-context useAuth)]
   [common.forms :refer (get-val-from-event)]))

(defn show
  ^{:context-type auth-context}
  []
  (let [[email set-email] (useState nil)
        [pass set-pass] (useState nil)
        [rem set-rem] (useState false)
        history (useHistory)
        location (useLocation)
        from (.-from (or (.-state location) #js {:from {:pathname "/"}}))]
    (js/console.log (.-state location))
    [:section {:class "hero is-primary is-fullheight"}
     [:div.hero-body
      [:div.container
       [:div.columns.is-centered
        [:div {:class "column is-5-tablet is-4-desktop is-3-widescreen"}
         [:form {:class "box"}
          [:div.field
           [:label {:class "label" :for ""} "Email"]
           [:div {:class "control has-icons-left"}
            [:input {:class "input"
                     :type "email"
                     :placeholder "e.g. bobsmith@gmail.com"
                     :required ""
                     :on-change #(set-email (get-val-from-event %))
                     :value email}]
            [:span {:class "icon is-small is-left"}
             [:i {:class "fa fa-envelope"}]]]]
          [:div.field
           [:label {:class "label" :for ""} "Password"]
           [:div {:class "control has-icons-left"}
            [:input {:class "input"
                     :type "password"
                     :placeholder "*******"
                     :required true
                     :on-change #(set-pass (get-val-from-event %))}]
            [:span {:class "icon is-small is-left"}
             [:i {:class "fa fa-lock"}]]]]
          [:div.field
           [:label {:class "checkbox" :for "remember-me"}
            [:input {:id "remember-me"
                     :type "checkbox"
                     :checked rem
                     :on-change #(set-rem (not rem))}]
            "Remember me"]]
          [:div.field
           [:button {:class "button is-success"
                     :on-click (fn [e]
                                 (let [redir (fn [_] (.replace history from))
                                       login (fn [] (with-email-password email pass redir))]
                                   (if rem
                                     (with-persistance login)
                                     (login)))
                                 (.preventDefault e))}
            "Login"]]]]]]]]))