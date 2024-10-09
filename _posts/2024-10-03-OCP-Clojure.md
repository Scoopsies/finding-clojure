---
title: "Open/Closed Principle in Clojure"
date: 2024-10-03
---

The Open Closed Principle is the second of the 5 SOLID principles. It's all about creating code that is easy to add on
to, without modifying code you've already written. Being able to easily write new code without altering the existing
code can reduce your risk of breaking fully functioning code.

### What is the Open/Closed Principle?

OCP states "A module, class, or function should be **open for extension but closed for modification**". This means that
you should be able to add new code making any changes to your existing code. This keeps your code stable, maintainable,
and easy to expand. 

### Benefits of OCP

- **Code Stability**: Existing code remains untouched when adding new functionality, reducing the risk of introducing bugs.
- **Scalability**: As your application grows, adding new behavior becomes easier and less risky.
- **Flexibility**: With multimethods or higher-order functions, you can inject new behavior without changing core logic.

### OCP in Clojure

Functional programming languages like Clojure emphasize immutability and small functions, which can naturally support OCP.
However, it still requires some thought to ensure that new features don't force changes to existing functions. In Clojure
we achieve OCP through functions, protocols, multimethods, and even higher-order-functions.

```clojure
(defn calculate-discount [user-type amount]
      (cond
        (= user-type :regular) (* amount 0.95)
        (= user-type :vip) (* amount 0.90)
        (= user-type :student) (* amount 0.85)
        :else amount))
```

This function is not open for extension. Every time you want to add a new user type, you have to modify this function and 
risk breaking the existing behavior in the process.

A simple way to apply OCP is to use a map to store the discount rates.

```clojure
(def discount-rates
  {:regular 0.95
   :vip 0.90
   :student 0.85})

(defn calculate-discount [user-type amount]
  (* amount (get discount-rates user-type 1)))
```

Now adding a new user type like `:teacher` only requires adding a new key-value-pair.

Another common way is through the use of multi-methods.

```clojure
(defmulti calculate-discount (fn [user-type _] user-type))

(defmethod calculate-discount :regular [_ amount] (* amount 0.95))
(defmethod calculate-discount :vip [_ amount] (* amount 0.90))
(defmethod calculate-discount :student [_ amount] (* amount 0.85))
(defmethod calculate-discount :default [_ amount] amount)
```