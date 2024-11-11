---
title: "reagent/with-let"
date: 2024-11-11
---

In Reagent, managing state is typically handled through atoms. But what if you want to create temporary state that only 
exists while a component is rendered? That’s where `reagent/with-let` comes in handy. This function allows you to define 
local state that initializes only once, is cleaned up automatically when the component is removed, and makes your 
component logic more concise.

In this post, we’ll explore how to use reagent/with-let to manage component-specific state effectively.

### What is reagent/with-let?

`reagent/with-let` is a macro that behaves similarly to Clojure’s let, but with added lifecycle awareness. Any bindings 
defined with reagent/with-let will only initialize once when the component mounts, and Reagent will automatically clean 
up when the component unmounts. This can be especially useful for local state that doesn’t need to be shared outside of 
a specific component instance.

### Basic Usage

Let’s start with a simple example of reagent/with-let:

```clojure
(ns my-app.core
  (:require [reagent.core :as r]))

(defn counter-component []
  (r/with-let [counter (r/atom 0)]
    [:div
     [:p "Counter: " @counter]
     [:button {:on-click #(swap! counter inc)} "Increment"]]))
```

In this example:
1.	Local State Initialization: The counter atom is defined within r/with-let, so it only initializes once when the component mounts.
2.	Using the Counter: The component displays @counter and provides a button to increment it.
3.	Automatic Cleanup: If the component is removed from the DOM, Reagent automatically cleans up counter, freeing up resources.

This approach is particularly useful for cases where you need local, temporary state that won’t be used outside of this component.

### Using reagent/with-let for Timers and Effects

reagent/with-let can also help with setting up and cleaning up side effects, like timers or event listeners, making it a 
great alternative to React’s useEffect.

Here’s an example of a component with a timer:

```clojure
(defn timer-component []
  (r/with-let [timer (r/atom 0)
               interval-id (js/setInterval #(swap! timer inc) 1000)]
    [:div
     [:p "Timer: " @timer]]
    (finally
      (js/clearInterval interval-id))))
```

In this example:
1.	**Timer State**: timer keeps track of seconds elapsed since the component was mounted.
2.	**Interval Setup**: interval-id holds a reference to the interval created by js/setInterval, which updates timer every second.
3.	**Cleanup with finally**: finally is a special clause in r/with-let that Reagent runs when the component unmounts. Here, 
we clear the interval using js/clearInterval, ensuring there’s no memory leak.

### When to Use reagent/with-let

Consider using reagent/with-let when:
- **Local State**: You need temporary state within a single component instance that doesn’t need to persist or be shared.
- **Side Effects**: You want to set up a side effect, like an event listener or timer, and automatically clean it up.
- **One-time Initialization**: The initial setup logic only needs to run once when the component mounts, making 
`reagent/with-let` an efficient choice.

### Caveats and Best Practices

While reagent/with-let is a handy tool, there are a few things to keep in mind:
- **Only One finally Block**: You can only use one finally block per `reagent/with-let`. If you need multiple cleanup 
actions, place them inside the same finally.
- **Avoid Complex Logic**: For highly complex state management, consider using Reagent atoms or more advanced state 
libraries to avoid cluttering the component.
- **Readability**: If a with-let block becomes too large, consider splitting the component into smaller functions for 
better readability.