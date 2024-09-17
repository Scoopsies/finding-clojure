---
title: "How to Add a Local JAR File to Your Clojure Project"
date: 2024-09-16
---

Sometimes, you need to use a custom JAR file in your Clojure project that isn’t available from public repositories. 
Here’s a quick guide on how to add a local JAR file to your project using Leiningen.

Steps to Add a Local JAR File:

### 1. Create a lib Directory:
Inside your project’s root directory, create a folder called lib (or any other name you prefer) to hold the local JAR.

### 2. Place the Jar File:
Copy your local JAR file into the lib directory.

### 3. Update  `project.clj`
In your `project.clj` add the path to the local Jar in the :dependencies section like this.

```clojure
:dependencies [[your-library "version" :local/root "lib/your-library.jar"]]
```

### 4. Run Leiningen:
Run `lein deps` to ensure the JAR is included in your project. Leiningen will now treat the local JAR as part of your
dependencies.

Your project is now set up to use the local JAR, and you can start using it in your code. This is particularly useful 
for using custom libraries or testing local builds without deploying them to a remote repository.