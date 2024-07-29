---
title: "Polymorphism in Clojure"
date: 2024-07-29
---

Today I recorded my [Wa-Tor Kata](https://www.youtube.com/watch?v=rew8lvhwhFE&t=8s) video after noticing some mistakes
in my last screen recording. I spent a majority of the day editing it and am happy with how it turned out. I then spent 
some time doing more refactoring of Tic-Tac-Toe. It's looking much less like a scrambled mess. While I'm not 100 percent
happy with its state, I'm much happier with it than I was before. I'm sure my opinion will change in another month after
I've learned more. That seems to be the pattern.

After doing those two tasks, I finally started to put together my presentation on polymorphism. So that leads us to
today's lesson!

### What is polymorphism?

Polymorphism enables a single interface to be used for different data types. This allows for more flexible and reusable 
code. To illustrate, think of everyday appliances like a toaster, coffee maker, and blender. Each of these appliances 
has a different way to turn on, but they all perform the same basic action: turning on.

### Why is polymorphism useful?

- Code can be re-used across different data types without modification.
- Changes can be made in one place, making the code easier to update and maintain.

### Ways to achieve polymorphism in Clojure.

#### Protocols

Protocols in Clojure define a set of functions that different types can implement.

```clojure
(defprotocol Appliance
  (turn-on [this]))

(defrecord Toaster []
  Appliance
  (turn-on [this] (println "Toaster is on!")))

(defrecord CoffeeMaker []
  Appliance
  (turn-on [this] (println "Coffee Maker is on!")))
```
#### Multimethods

Multi-methods dispatch functions based on the value of one or more arguments.

```clojure
(defmulti turn-on (fn [appliance] (:type appliance)))

(defmethod turn-on :toaster [appliance]
  (println "Toaster is on!"))

(defmethod turn-on :coffee-maker [appliance]
  (println "Coffee Maker is on!"))
```
#### Higher-order Functions

Higher-order functions take functions as arguments or return them.

```clojure
(defn turn-on [appliance]
  ((:turn-on appliance)))

(def toaster {:turn-on (fn [] (println "Toaster is on!"))})
(def coffee-maker {:turn-on (fn [] (println "Coffee Maker is on!"))})
```