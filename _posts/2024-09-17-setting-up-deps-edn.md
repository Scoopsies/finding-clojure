---
title: "Key parts of deps.edn"
date: 2024-09-17
---

Clojure’s deps.edn file is the heart of dependency management when using tools.deps. It defines your project’s 
dependencies, paths, and configuration in a clear, flexible format. Let’s take a look at some of the key parts of a 
typical deps.edn file.

### :deps

This section lists your project’s dependencies. Each dependency is specified by a library name and version. It’s similar 
to what you might find in project.clj for Leiningen.

```clojure
:deps {org.clojure/clojure {:mvn/version "1.11.0"}}
```

### :paths

The :paths section tells Clojure where to find source code, resources, or any other files necessary for your project.
```clojure
:paths ["src" "lib"]
```

These are the directory names directly below the root of the project that you need access to.

### :aliases

Aliases are a powerful feature that allows you to define additional dependencies, paths, or settings that can be 
activated on demand. They’re great for managing development tooling, test setups, or specific environments.

```clojure
 :aliases {:test {:extra-deps  {speclj/speclj {:mvn/version "3.5.0"}}
                  :extra-paths ["spec"]}
           :spec {:main-opts ["-m" "speclj.main" "-c" "-t" "~slow"]}
           :run  {:main-opts ["-m" "clojure-server.main"]}}
```