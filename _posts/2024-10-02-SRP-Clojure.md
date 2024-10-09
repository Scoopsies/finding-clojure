---
title: "Single Responsibility Principle in Clojure"
date: 2024-10-02
---

I'm actually shocked that I have not done blog posts on the Solid Principles and how they relate to Clojure yet, but 
going back through my archive it appears I haven't. So I think I'll go over all 5 principles this week starting with 
Single Responsibility Principle. 

### What is Single Responsibility Principle?

Single responsibility Principle (which will be referred to as SRP from here) states "Each function, class, or module
should have **only one reason to change**". In other words, it should have a single responsibility. It makes code 
easier to understand, test, and maintain by making sure each function is only having to do one task and do it well.

### Benefits of SRP

- **Improves Readability**: Functions are easier to understand when they focus on a single task.
- **Easier to Test**: Testing a function that has one responsibility means fewer dependencies and edge cases.
- **Flexible Code**: Refactoring or changing one part of your code won’t force you to rewrite other parts.

### SRP in Clojure

Unlike object-oriented languages where classes and methods can become bloated, Clojure encourages smaller, more focused
functions. But even in Clojure, it's easy to write functions that handle more than one task, which can lead to tightly
coupled and reusable code. Take this `fetch-and-parse-data` function for example.

```clojure
(defn fetch-and-process-data [url]
  (let [response (http/get url)
        data (parse-json (:body response))]
    (filter-data data)))
```

This function violates SRP by doing two things, fetching data, and processing it. If we make a change in how the data is
parsed (say we want to parse an .edn file instead), we'd break the entire function in the process so there would be no
way to get the response.

```clojure
(defn fetch-data [url]
  (parse-json (:body (http/get url))))

(defn process-data [data]
  (filter-data data))
```

By turning this into to separate functions, we reduce the chances of breaking everything to make a change or debug one
thing.

It's easy to confuse SRP with the intention to make every function as tiny as possible. While this may be an added benefit,
it's important to note that SRP isn't less about size, and more about making sure that each part of your app is doing
once job, and doing that job very well.