---
title: "reagent/cursor"
date: 2024-11-08
---
Managing deeply nested data can be tricky, especially in reactive applications. Luckily, Reagent’s reagent/cursor 
function provides a streamlined way to access and update nested state, helping you avoid tedious destructuring and 
boilerplate code.

In this post, we’ll explore reagent/cursor and see how it simplifies working with nested data structures in Reagent.

### What is reagent/cursor?

In Reagent, cursor creates a focused view of a nested part of an atom. It lets you “zoom in” on a specific path in your 
data structure, giving you a mini-atom that holds only the nested data. This mini-atom is fully reactive, so changes to 
it automatically update the parent atom—and vice versa.

Here’s an example of how cursor can be used:

```clojure
(ns my-app.core
  (:require [reagent.core :as r]))

(def app-state (r/atom {:user {:name "Alice" :age 30} :settings {:theme "dark"}}))

(def user-cursor (r/cursor app-state [:user]))

(defn user-component []
  (let [{:keys [name age]} @user-cursor]
    [:div
     [:p "User: " name]
     [:p "Age: " age]
     [:button {:on-click #(swap! user-cursor update :age inc)} "Increase Age"]]))
```

In this example:
1.	Parent Atom: app-state is the top-level atom, containing nested data under the :user key.
2.	Cursor Creation: We create a user-cursor by pointing to the :user path in app-state. Now user-cursor is a mini-atom that specifically tracks the :user map.
3.	Component Binding: In user-component, we dereference user-cursor to access :name and :age without worrying about the surrounding structure of app-state.
4.	Updating Nested State: The button triggers an update to :age via user-cursor, and Reagent takes care of updating app-state and re-rendering the component.

### Why Use reagent/cursor?

Reagent’s cursor function provides a few key benefits:
- **Clarity**: cursor allows you to write components that focus only on the relevant part of your data structure, without having to reference the entire nested path.
- **Reactivity**: The mini-atom created by cursor keeps its relationship with the parent atom, meaning updates are automatically propagated in both directions.
- **Simplified Updates**: With cursor, you can update deeply nested parts of your state with swap! or reset! directly, without having to manage the entire atom.

When to Use reagent/cursor

Cursors are especially useful in the following scenarios:
- **Component-Specific State**: When a component only needs access to part of the app state, a cursor keeps it isolated from unrelated data.
- **Large and Nested Data Structures**: For apps with complex state trees, cursor can simplify code and make it more readable by avoiding deeply nested updates.
- **Modular Components**: If you’re building reusable components, a cursor can help isolate and focus on the state that matters, improving modularity.

Pitfalls to Watch For

While reagent/cursor is a handy tool, here are a few considerations:
- **Overuse of Cursors**: Avoid creating too many cursors for frequently changing data, as each cursor introduces a new subscription to the parent atom.
- **Performance in Large State Trees**: In very large state trees, excessive cursor usage can potentially lead to performance issues. Use with awareness of your state structure’s complexity.

