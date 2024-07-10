---
title: "Factory Method"
date: 2024-07-09
---

The Factory Method is the third design pattern in the Creational Patterns section of
[Design Patterns](https://scoopsies.github.io/finding-clojure/2024/07/03/UML-Diagrams.html). Why did I start with the
third instead of the first? To be honest, I just chose one at random, and Factory pattern sounded cool.

### What is Factory Method?

The Factory Method Pattern defines an interface for creating an object but allows subclasses to alter the type of 
objects that will be created. This pattern encapsulates the instantiation logic, promoting loose coupling and adherence 
to the Single Responsibility Principle.

#### Made up of four main parts:
- **Creator:** Declares the factory method that returns an object of type product.
- **Concrete Creator:** The object created by the factory method.
- **Concrete Product:** Implements the factory method to create and return a Concrete Product.
- **Product:** A specific implementation of the Product interface.

Concrete Creators and Products are specific implementations of these components. Concrete Creators override the factory 
method to create different types of Concrete Products.

#### Benefits:
- **Decoupling:** The Factory Method Pattern helps decouple code by separating object creation from usage.
- **Single Responsibility Principle:** It centralizes object creation, aligning with the Single Responsibility Principle.
- **Extensibility:** Adding new product types is straightforward and doesn't require modifying existing code.

#### Draw-backs:
- **Complexity:** It can introduce additional complexity, especially in simple applications.
- **Overhead:** There might be performance overhead due to the indirection of object creation.

#### When to use:

Use the Factory Method Pattern in scenarios where a class cannot anticipate the type of objects it needs to create or 
wants its subclasses to specify the objects it creates.

#### When not to use:
Avoid using it in simple applications where the overhead might not be justified.
