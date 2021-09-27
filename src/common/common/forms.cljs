(ns common.forms
  (:require [goog.dom.forms :as gf]))

(defn get-val-from-event
  [event]
  (gf/getValue (.-target event)))