---
title: "Optimizing Reagent Part 2"
date: 2024-11-19
---

Yesterday I made a post outlining a few things you can do to ensure your Reagent code is optimized. It seems that it was
barely scratching the surface so I decided to make a part 2!

### Avoid Overuse of Deref in Render Functions

Frequent dereferencing inside render functions can trigger unnecessary re-renders. Minimize derefs or lift them out of 
the render body where possible.

```clojure
(defn counter [count]
  (let [val @count]
    [:div
     [:span "Count: " val]
     [:button {:on-click #(swap! count inc)} "Increment"]]))
```

###### Why this helps:

Dereferencing in multiple places in the render function could lead to redundant updates.

### Use shouldComponentUpdate with `r/create-class`

For components with static or rarely changing props, you can prevent re-renders by implementing a shouldComponentUpdate 
method using create-class.

```clojure
(defn static-component []
  (reagent/create-class
    {:reagent-render (fn [] [:div "I rarely update!"])
     :should-component-update (fn [_ _] false)}))
```

###### Why this helps:
This is especially useful for large components or components with expensive render logic.

### Batch Updates with `r/run!`

Reagent automatically batches DOM updates, but for custom async updates, you can use run! to group state changes 
efficiently.

```clojure
(defn batch-example []
  (let [state (reagent/atom 0)]
    (reagent/run! (reset! state 1) (reset! state 2))
    [:div "State: " @state]))
```

###### Why this helps:
Batching prevents intermediate states from triggering unnecessary renders.

### Optimize Collections with key Props

When rendering lists, always provide a key prop to help Reagent identify which items changed, improving rendering 
efficiency.

```clojure
(defn item-list [items]
  [:ul (for [item items]
         ^{:key (:id item)}
         [:li (:name item)])])
```

###### Why this helps:
Without a key, Reagent will re-render the entire list instead of reusing existing DOM nodes.


### Avoid Over-Normalizing Small Apps

In simple apps, over-normalizing state (splitting every field into its own atom) can lead to complexity and unnecessary 
renders. Strike a balance between granularity and simplicity.

Instead of multiple atoms:
```clojure
(def name (reagent/atom "Sam"))
(def age (reagent/atom 25))
```

Use a single atom for fields:
```clojure
(def app-state (reagent/atom {:name "Sam" :age 25}))
```

