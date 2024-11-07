---
title: "Creating Reactive Components With Reagent"
date: 2024-11-06
---

When it comes to creating dynamic, responsive web applications, Reagent is a fantastic library that leverages 
ClojureScript and React to make building reactive components straightforward and functional. In this post, we’ll explore 
the essentials of creating reactive components in Reagent, focusing on state management and component reactivity.

### What is Reagent?

Reagent is a ClojureScript interface to React, meaning it allows you to build React components using ClojureScript 
syntax. Reagent handles React components as functions that return hiccup-style markup. If you’re familiar with the 
simplicity of functional programming in Clojure, using Reagent for component development will feel natural.

### Why Reactive Components?

Reactive components automatically update when their underlying data changes. This approach streamlines development, as 
components stay in sync with the data they depend on, leading to more consistent and dynamic UIs.

###  Building Reactive Components with Atoms

Reagent relies on atoms for local state. An atom is a reference type in ClojureScript that allows you to manage state 
in a way that’s simple, readable, and reactive.

### Step 1: Setting Up a Component with an Atom

Let’s say we want to build a simple component that shows a counter and a button to increment it. First, we’ll create an 
atom to store the counter state:

```clojure
(ns my-app.core
  (:require [reagent.core :as r]))

(def counter (r/atom 0))
```




### Step 2: Creating the Counter Component

Next, we’ll define a component function that reads the counter value from the atom and displays it:

```clojure
(defn counter-component []
  [:div
   [:h2 "Counter Value: " @counter]
   [:button {:on-click #(swap! counter inc)} "Increment"]])
```


In this code:
- @counter dereferences the counter atom to get its current value.
- The button’s on-click event handler uses swap! to increment the counter’s value. Reagent’s reactivity will 
automatically re-render the component when counter changes.

### Step 3: Rendering the Component

To render the component in the DOM, wrap it in a reagent/render function:

```clojure
(defn mount-root []
  (r/render [counter-component]
            (.getElementById js/document "app")))

(mount-root)
```



With this, the counter will re-render every time its state changes, thanks to Reagent’s efficient reactivity!

Adding More Interactivity with Reactions

Reactions in Reagent allow us to compute derived data from atoms, similar to computed properties in other frameworks. 
Reactions can help manage complex component interactions while minimizing direct state dependencies.

### Example: Derived State with Reactions

Let’s extend the counter component to display whether the counter is even or odd, using a reaction:

```clojure
(def even-odd (r/atom ""))

(defn update-even-odd []
  (reset! even-odd (if (even? @counter) "Even" "Odd")))

(add-watch counter :even-odd-watch
           (fn [_ _ _ _] (update-even-odd)))

(defn counter-component []
  [:div
   [:h2 "Counter Value: " @counter]
   [:p "Counter is " @even-odd]
   [:button {:on-click #(swap! counter inc)} "Increment"]])
```


Here:
- even-odd is an atom storing whether the counter value is “Even” or “Odd.”
- add-watch listens for changes on counter and updates even-odd using update-even-odd.

Reagent’s reactivity ensures that both the counter and even-odd displays update seamlessly.

### Tips for Creating Reactive Components

1. Leverage Atoms for State: Atoms keep state local, clear, and reactive. Keep each component’s state minimal and 
focused on what it needs.
2. Use Reactions for Derived Data: Reactions avoid unnecessary re-renders and make it easier to handle dependencies 
between state values.
3. Manage Side Effects: In complex applications, Reagent’s reactivity makes it tempting to store everything in atoms. 
However, manage side effects and consider Re-frame or other state management tools for larger projects.