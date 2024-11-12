---
title: "reagent/flush"
date: 2024-11-12
---

In Reagent, `reagent.core/flush` is a helpful function that can force updates to your component tree when necessary. 
Reactivity is at the core of Reagent’s design, where components automatically re-render in response to changes in atoms 
or other reactive data sources. However, sometimes you might want more control over when updates are applied. This is 
where `flush` comes in.

### What Does flush Do?

`flush` triggers all pending updates in Reagent’s rendering queue. Normally, Reagent batches updates for efficiency, but 
in certain cases, like animations or chained updates, you may need to flush changes immediately to ensure everything is 
up-to-date.

### When to Use flush

Here are some scenarios where flush can be particularly useful:
1.	**Immediate UI Feedback**: If you’re handling user interactions and want immediate feedback before a callback 
completes, flushing can ensure updates are visible right away.
2.	**Chained State Updates**: When multiple atoms are updated in a sequence, the changes might not show in the correct 
order without flushing.
3.	**Animation Frames**: When working with animations or frame-by-frame updates, flush ensures your component stays in 
sync with changes in state or props.

### Example of Using flush

```clojure
(ns my-app.core
  (:require [reagent.core :as r]))

(def count (r/atom 0))

(defn counter-component []
  (fn []
    [:div
     [:p "Counter: " @count]
     [:button {:on-click (fn []
                           (swap! count inc)
                           (r/flush))} ; force immediate update
      "Increment Immediately"]]))

(defn app []
  [:div
   [counter-component]])
```

In this example:
- Clicking the button increments the count atom.
- By calling `r/flush` right after `swap!`, you ensure that Reagent immediately renders the incremented value.

### Caution with flush

While `flush` can be useful, overusing it can reduce the efficiency of your app. Since Reagent is designed to batch 
updates for performance, calling `flush` too frequently can disrupt this optimization. Only use it when you have a specific 
need for immediate updates.

### Key Takeaways

- **Instant Feedback**: Use flush for immediate updates in scenarios like user feedback or animations.
- **Control Rendering**: It’s a tool for advanced scenarios where precise control of rendering is necessary.
- **Use Sparingly**: Reagent’s batching is usually sufficient for performance; only flush when you truly need it.