---
title: "reagent/dispose!"
date: 2024-11-14
---

Reagent’s reactive nature makes managing state and rendering remarkably simple. However, there are times when you need 
to clean up resources, stop a subscription, or manage lifecycle events explicitly. For these cases, `reagent.core/dispose!` 
is a tool you might overlook but shouldn’t.

In this post, we’ll explore how `dispose!` works, why it’s useful, and how you can use it effectively in your Reagent 
projects.

### What is reagent/dispose!?

`reagent/dispose!` is used to clean up a reaction or stop a subscription created via `reagent/track` or 
`reagent/make-reaction`. When you call `dispose!`, the reaction stops automatically updating when its dependencies change, 
helping you manage resources efficiently.

Why Use dispose!?

1. **Avoid Memory Leaks**: Reactions tied to no-longer-used UI elements will continue consuming memory unless explicitly 
stopped. `dispose!` ensures these resources are released.
2.	**Manual Lifecycle Management**: In cases where you need to control the lifecycle of a component or reactive 
computation, `dispose!` lets you stop it on your terms.
3.	**Complex Data Streams**: When working with subscriptions to external data sources (e.g., WebSockets or database 
queries), disposing of reactions ensures you don’t keep listening unnecessarily.

## Stopping a Custom Reaction

Imagine you’re building a component that tracks a timer, but you only want it to update while the component is mounted. 
Using **dispose!**, you can cleanly stop the reaction when it’s no longer needed.

```clojure
(ns example.core
  (:require [reagent.core :as r]))

(defn timer-component []
  (let [time (r/atom 0)
        reaction (atom nil)]
    (r/create-class
     {:component-did-mount
      (fn []
        (reset! reaction
                (r/track!
                 (fn []
                   (swap! time inc)
                   (js/setTimeout #(reset! time @time) 1000)))))

      :component-will-unmount
      (fn []
        (when @reaction
          (r/dispose! @reaction)))

      :reagent-render
      (fn []
        [:div "Elapsed time: " @time])})))
```

- The reaction tracks time updates.
- **dispose!** stops the reaction when the component is unmounted, preventing unnecessary updates and memory usage.

### When to Use dispose!

- **Temporary Reactions**: When a reaction is tied to a specific component lifecycle.
- **External Data Sources**: Cleaning up subscriptions to APIs, WebSockets, or other external resources.
- **Debugging:** Manually stopping reactions can help debug issues related to unintended updates.