---
title: "Basic UML symbols"
date: 2024-09-23
---

Yesterday's post about [UML diagrams](https://scoopsies.github.io/finding-clojure/2024/09/23/What-is-a-UML.html) introduced us to why UML diagrams are useful, but knowing how something is useful
doesn't really help us use it to well. I decided today's post will be a breakdown of some of the most commonly used
symbols in UML.

### 1. Class

The class symbol is represented as a rectangle divided into three sections: the top section contains the class name, the 
middle section holds attributes (variables), and the bottom section lists methods (functions). It’s commonly used in 
Class Diagrams to define the structure of a system.

![Class Symbol]({{ site.baseurl }}/images/UML-Class.png)

### 2. Object

Similar to the class symbol but with underlined text, the object symbol is used in object diagrams to represent an
instance of a class, showing real-world examples of how objects interact.

![Object Symbol](/images/UML-object.png)

### 3. Use Case

A use case symbol is depicted as an oval or ellipse and is used in Use Case Diagrams to describe a functionality or a 
scenario where users interact with the system. Actors (stick figures) are connected to these ovals to represent who 
performs each action.

![Use Case Symbol](/images/UML-use-case.png)

### 4. Actor

In Use Case Diagrams, an actor symbol is typically a stick figure that represents users or external systems interacting 
with the system. Actors are linked to use cases to depict who initiates an action.

![Actor Symbol](/images/UML-actor.png)

### 5. Package

The package symbol resembles a folder and is used in Package Diagrams to group related classes, components, or elements 
into namespaces. It helps organize complex diagrams by showing how components are logically grouped.

![Package Symbol](/images/UML-Package.png)

### 6. Component

A component symbol is drawn as a rectangle with two small rectangles on the side and is used in Component Diagrams to 
represent a physical, replaceable part of a system, such as a service or database.

![Component Symbol](/images/UML-component.png)

### 7. Activity

The activity symbol, represented by a rounded rectangle, is used in Activity Diagrams to represent an action or task 
that needs to be performed. These diagrams show the flow of control between activities.

![Activity Symbol](/images/UML-Activity.png)

### 8. State

A state symbol is a rounded rectangle used in State Diagrams to represent different states an object can be in. 
Transitions between these states are shown using arrows.

![State Symbol](/images/UML-State.png)

These symbols form the backbone of UML, allowing system architects and developers to design, communicate, and understand 
systems more effectively. Each symbol serves a distinct purpose, and mastering them helps in creating clear and 
functional diagrams. Whether you’re working on high-level designs or detailed architecture, knowing these common UML 
symbols is essential!