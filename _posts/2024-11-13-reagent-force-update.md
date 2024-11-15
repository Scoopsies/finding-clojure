---
title: "reagent/force-update"
date: 2024-11-13
---

When building dynamic applications with Reagent, you rely on reactive atoms (ratoms) to automatically trigger UI updates. 
However, there are edge cases where automatic reactivity isn’t enough, and you need to manually nudge a component to 
update. That’s where reagent.core/force-update comes in.

Let’s explore what force-update does, why you’d use it, and how to wield this tool without falling into pitfalls.

What is force-update?

reagent.core/force-update is a function that forces a Reagent component to re-render, regardless of whether its reactive 
dependencies have changed. It’s like giving your component a tap on the shoulder and saying, “Hey, time to redraw!”

Here’s the basic syntax:

```clojure
(reagent.core/force-update component & [deep])
```

- **component**: The component you want to update.
- **deep**: (Optional) If true, will recursively update child components as well.

### When Reactivity Isn’t Enough

Consider a scenario where you update a DOM element outside Reagent’s normal reactive flow. For instance, a third-party 
library modifies the DOM directly. Reagent won’t automatically re-render in response.

```clojure
(ns example.core
  (:require [reagent.core :as r]))

(defn external-lib-update [el]
  ;; Simulate a third-party library modifying the DOM
  (set! (.-innerHTML el) "Modified by external library"))

(defn my-component []
  (let [ref (r/atom nil)]
    (fn []
      [:div
       [:button {:on-click #(when-let [el @ref]
                              (external-lib-update el)
                              (r/force-update this))}
        "Update with Force"]
       [:div {:ref #(reset! ref %)}
        "Original content"]])))
```

In this example:
1.	The external-lib-update function modifies the DOM directly.
2.	r/force-update ensures the Reagent component re-renders to stay in sync.

### When Should You Use force-update?

While force-update is powerful, it should be used sparingly. Here are some valid scenarios:

1.	**Third-Party Library Interference**: When a library modifies the DOM or application state outside Reagent’s 
reactive model.
2.	**Manual Optimizations**: When you need to skip reactive overhead for performance-critical updates.
3.	**Debugging Render Issues**: Forcing updates can help diagnose whether a component’s rendering logic is working 
correctly.

### Caveats and Pitfalls

1.	**Overuse Can Be a Code Smell**: If you find yourself using force-update frequently, it may indicate a design issue. 
Reactive state should usually be sufficient.
2.	**Performance Concerns**: Forcing updates bypasses Reagent’s optimized diffing. Use it only when absolutely necessary.
3.	**Breaks Predictability**: `force-update` sidesteps Reagent’s reactive model, making the code harder to reason about.

### Best Practices

Best Practices

**Minimize Usage**: Use force-update only as a last resort. Wherever possible, rely on reactive atoms for updates.
**Document Intent**: Clearly explain why force-update is needed when you use it, so future maintainers understand the context.