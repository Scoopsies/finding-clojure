---
title: "Multi Arity Multi Methods"
date: 2024-07-15
---

I keep singing the title to this blog post to the tune of Teenage Mutant Ninja Turtles.

In looking for a way to speed up Wa-tor, I researched and discovered that multi-methods can have multiple arities.
I had a multi-method for creating things. I created a shark object with `(create :shark [0 0])` or fish with
`(create :fish [0 0])`. But when it came time to create an entire board I needed three arguments. (The keyword, `:board`,
the number of sharks, and number of fish to be created). This led me to the discovery that the function the `defmulti`
argument took in could have a variable arity just like any other function with the use of an `&`.


```clojure
(defmulti create (fn [key & _] key))

(defmethod create :fish
  ([_ position]
   {:species  :fish
    :breeding settings/fish-breeding
    :position position}))

(defmethod create :shark [_ position]
  {:species :shark
   :breeding settings/shark-breeding
   :position position
   :energy settings/shark-energy})

(defmethod create :board [_ num-shark num-fish]
  (let [sharks-list (repeat-creature :shark num-shark)
        fish-list (repeat-creature :fish num-fish)]
    (concat sharks-list fish-list)))
```

And just like that, I could continue using the create function to create a variety of things depending on the keyword I
put in.