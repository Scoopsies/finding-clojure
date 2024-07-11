---
title: "Clojure Multi-Methods"
date: 2024-07-11
---

It has been a much better day today. I put last week behind me and moved on to the future this week! This morning I got
my movement and update function working for wa-tor So now you can see fish moving (only randomly for now) on the board.
I have an idea in mind for getting the rest of the functionality working, so that shouldn't be the hardest thing in the
world to implement!

Right before lunch Alex Jensen (software craftsman extraordinaire, and also my mentor) met up to talk about
multi-methods with me. We went over it a little bit 3 or four weeks ago and the concept did not click what-so-ever. But 
this time it clicked pretty fast, and I'm excited to start using them!

### What are Multi-methods

Clojure multi-methods provide a way to achieve polymorphism, similar to object-oriented languages but in a more flexible 
and functional manner. They allow you to define a single method name with multiple implementations, which can be 
selected based on arbitrary criteria (dispatching logic) rather than just the type of the first argument.

### Creating Multi-methods:

1. **Define the dispatch function:** This function determines how to select which method implementation to use based on
the input arguments.
2. **Create the multi-method:** Use `defmulti` to define a multi-method, specifying the dispatch function.
3. **Provide method implementations:** Use `defmethod` to define different implementations of the multi-method for
various dispatch values.

```clojure
(defn shape-type [shape] ;;takes the shape you put in, and applies :type to it
  (:type shape))

(defmulti area shape-type) ;; Creates the multi-method
;; You could also just do (defmulti area :type) in this case because keywords are functions in themselves.

(defmethod area :circle [shape] ;;Defines a method for calculating area if the shape's :type is :circle
           (* Math/PI (:radius shape) (:radius shape)))

(defmethod area :rectangle [shape] ;;Defines a method for calculating area if the shape's :type is :rectangle
           (* (:length shape) (:width shape)))

(defmethod area :triangle [shape] ;;Defines a method for calculating area if the shape's :type is :triangle
           (/ (* (:base shape) (:height shape)) 2))
```

### Using Multi-methods:

```clojure
(area {:type :circle :radius 5})
;; => 78.53981633974483

(area {:type :rectangle :length 4 :width 6})
;; => 24

(area {:type :triangle :base 3 :height 4})
;; => 6.0
```