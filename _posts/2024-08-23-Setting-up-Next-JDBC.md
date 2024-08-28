---
title: "Setting Up next.jdbc in an Existing Leiningen Project"
date: 2024-08-23
---

Clojure developers looking to interact with SQL databases often turn to next.jdbc, a modern, low-level Clojure wrapper 
for JDBC that is both efficient and easy to use. If you have an existing Leiningen project and want to integrate 
next.jdbc, this guide will walk you through the setup process.

### Step 1: Add next.jdbc Dependency

First, you’ll need to add next.jdbc as a dependency in your project. Open your project.clj file and add the following 
dependency:

```clojure
:dependencies [[org.clojure/clojure "1.11.1"]
               [seancorfield/next.jdbc "1.3.886"]]
```

Make sure to sync your project to download the new dependencies by running:

```
lein deps
```

### Step 2: Configure Database Connection

In your source code, you’ll need to set up a database connection. Typically, this is done by creating a map that 
contains the necessary connection details, such as the database URL, username, and password.

```clojure
(ns your-project.db
  (:require [next.jdbc :as jdbc]))

(def db-spec
  {:dbtype "postgresql"
   :dbname "your-database-name"
   :host "localhost"
   :user "your-username"
   :password "your-password"})
```

### Step 3: Create a Database Connection

With next.jdbc, establishing a connection is straightforward. You can create a connection using the get-datasource 
function:

```clojure
(def ds (jdbc/get-datasource db-spec))
```

This ds variable will be your datasource that you can reuse throughout your project to interact with the database.