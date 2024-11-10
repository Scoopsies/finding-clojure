---
title: "reagent/track"
date: 2024-11-07
---

In ClojureScript’s Reagent library, reagent/track is a powerful tool for creating reactive functions that automatically 
update components when their dependencies change. Think of it as a clever assistant that listens to specific data sources 
and only recalculates or re-renders when necessary—making it efficient and elegant for managing derived state.

Let’s dive into what makes reagent/track unique and see how it can help simplify our reactive code.

### What is reagent/track?

Reagent uses atoms to handle state, allowing components to re-render when the atom’s value changes. However, sometimes 
we want a value to be derived from multiple atoms or to depend on specific function calls—without re-calculating every 
time the component renders.

That’s where reagent/track shines. It lets us create “tracked” functions that automatically keep an eye on specific 
atoms, functions, or computations. When the watched items change, the tracked function recomputes and re-renders any 
dependent components. This prevents unnecessary calculations and gives us a convenient way to derive state dynamically.

### Basic Usage

Using reagent/track is straightforward. Here’s a quick example:

```clojure
(ns my-app.core
  (:require [reagent.core :as r]))

(def counter (r/atom 0))

(defn increment-counter []
  (swap! counter inc))

(def tracked-value
  (r/track (fn []
             (* 2 @counter))))

(defn my-component []
  [:div
   [:p "Counter: " @counter]
   [:p "Tracked Value (Counter * 2): " @tracked-value]
   [:button {:on-click increment-counter} "Increment Counter"]])
```

In this example:
1.	We define a counter atom to hold our base state.
2.	We create a tracked-value that watches counter and computes (* 2 @counter). Every time counter changes, tracked-value 
automatically updates.
3.	In my-component, @tracked-value is used as if it were an atom. When counter changes, the tracked function recalculates, 
and the component re-renders with the new value.


### When to Use reagent/track

Here are some scenarios where reagent/track is especially useful:
- **Derived State**: When you need to calculate a value based on one or more atoms and want to keep that value updated 
automatically without manual recalculation.
- **Performance Optimization**: In cases where recalculating or re-rendering is costly, reagent/track only re-runs its 
function when dependencies change.
- **Multiple Dependencies**: When you want to keep track of multiple atoms or even the result of a function, and update 
only when those specific dependencies change.

### track vs. reaction

You might wonder how reagent/track compares to reaction, another Reagent function for reactive computations. track is 
typically simpler to use when you want to store a computed value that acts like an atom. However, reaction provides a 
lower-level API for creating reactive computations without automatically creating a dereferenceable reference like track 
does. In short, use track when you want an “atom-like” reactive value.

Tips and Best Practices

- Avoid Complex Logic: Keep the functions used with track lightweight. Complex logic can lead to performance bottlenecks.
- Readability: If the tracked function becomes complex, consider extracting the logic into a separate function to 
maintain readability.
- Debugging: Use prn or a logging function within the tracked function to track changes and better understand how 
dependencies trigger recalculations.