---
title: "Defrecord"
date: 2024-07-29
---

When working on my polymorphism presentation I learned that I did not have a firm grasp on records in clojure, which
was effecting my ability to learn protocols. 

### What are records?

Records in Clojure are a type of data structure that allow you to define a blueprint for objects with named fields. 
They are similar to structs in other languages and provide a way to define a fixed schema for your data. Unlike maps, 
which can have any number of key-value pairs, records have a predefined set of fields.

### Benefits of using records

- Accessing fields in a record is generally faster than accessing keys in a map. This is because records are implemented
as Java classes under teh hood, providing efficient field access.
- Records enforce a fixed schema, which can help catch errors early by ensuring that only valid fields are accessed or
modified.
- Using records can make your code more readable and self-documenting by explicitly defining the structure of your data.

### Using records
You can define records by using the `defrecord` macro.

```clojure
(defrecord car [make model color])
```

To create an instance of a record you can use one of the records constructor functions (that clojure generates
automatically under the hood when you define a record).

```clojure
(def miata (->car "Mazda" "Miata" "Blue"))
```

```clojure
(def miata (map->car {:make "Mazda" :model "Miata" :color "Blue"}))
```

Both do the same thing, but the `->"record-name"` function is a little less verbose. 

Any function that works with a map will also work with a record, although a few of the functions behave a little
differently. `dissoc` will return a map, not another record. `conj` will also return a map when adding new key-value
pairs.