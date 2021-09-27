(ns editor.pages.layout)

(defn hero []
  [:section.hero.is-primary
   [:div.hero-body
    [:h1.title "RPGLite Story Editor"]
    [:p.subtitle "This tool is used to create new stories that can be shown in the game."]]])

(defn body-tmp []
  [:section.section
   [:div.content
    [:h1.title "Page title"]
    [:p.subtitle "This is the page that will be shows during navigation."]]])

(defn footer []
  [:footer.footer
   [:div.content.has-text-centered
    [:p
     [:strong "RPGlite by Andi Rusu"]]]])

(defn menu []
  [:section.section
   [:aside.menu
    [:p.menu-label
     "General"]
    [:ul.menu-list
     [:li [:a "New Story"]]
     [:li [:a "My Stories"]]
     [:li [:a "Profile"]]
     [:li [:a "Logout"]]]
    [:p.menu-label
     "Story"]
    [:ul.menu-list
     [:li [:a "Story Cards"]]
     [:li [:a "Characters & Enemies"]]
     [:li [:a "Locations"]]
     [:li [:a "Dialogs"]]]]])

(defn one-column [body]
  [:<>
   [hero]
   body
   [footer]])

(defn two-column []
  [one-column
   [:div.columns.is-gapless
    [:div.column.is-1
     [menu]]
    [:div.column.is-11
     [body-tmp]]]])