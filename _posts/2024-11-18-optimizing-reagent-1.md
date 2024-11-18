---
title: "Optimizing Reagent Part 1"
date: 2024-11-18
---

Reagent is an excellent choice for building reactive UIs in ClojureScript. It’s fast, functional, and beautifully 
expressive. However, as your application grows in complexity, it’s easy to run into performance bottlenecks. Luckily, 
Reagent offers several tools and techniques to optimize performance without compromising simplicity.

I've decided to do some research on ways to improve Reagents performance and figured I'd share a few tips here. 

### Use `r/with-let` for Resource Cleanup

When working with subscriptions, event listeners, or any setup-teardown patterns, with-let ensures that resources are 
properly managed. It prevents unnecessary re-renders by memoizing values and cleaning up when a component is unmounted.

```clojure
(defn timer []
  (reagent/with-let [time (reagent/atom (js/Date.))]
    (js/setInterval #(reset! time (js/Date.)) 1000)
    [:div "Current time: " @time]
    (finally
      (js/clearInterval time))))
```

##### Why does this help?

Without with-let, you might create multiple intervals or forget to clean them up, leading to memory leaks.

### Leverage `r/cursor` for Nested State

If you’re dealing with deeply nested data, cursor can localize updates to specific parts of your state atom, reducing 
unnecessary renders.

```clojure
(def app-state (reagent/atom {:user {:name "Frodo" :age 50}}))

(defn user-name []
  (let [name-cursor (reagent/cursor app-state [:user :name])]
    [:input {:value @name-cursor
             :on-change #(reset! name-cursor (-> % .-target .-value))}]))
```

##### Why does this help?

Without cursor, changing a single nested value could trigger re-renders across components subscribing to the parent atom.

### Use `r/track` for Derived State

Avoid recalculating derived state inside render functions. track creates a reactive atom that recalculates only when its 
dependencies change.

```clojure
(def app-state (reagent/atom {:numbers [1 2 3 4]}))

(def total (reagent/track #(reduce + (:numbers @app-state))))

(defn display-total []
  [:div "Total: " @total])
```

##### Why does this help?

Reagent will re-render display-total only when the :numbers vector changes, avoiding unnecessary recomputations.