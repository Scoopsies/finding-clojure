---
title: "Command Pattern"
date: 2024-09-30
---

One of the key challenges in how software development is finding ways to decouple components so that they can evolve
independently. The Command Pattern provides a clear solution to this problem by turning requests into stand-alone objects.

### What is the Command Pattern?

The Command Pattern is a behavioral pattern tha encapsulates requests as objects. This means that the invoker of the
action does not need to know the specifics of how the action is performed, it issues the **command** and lets the system
handle the details.

### How it works

The Command Pattern is based on four main components:

1. **Command**: This si the interface or abstract class that defines the contract for executing an action.
2. **ConcreteCommand**: These classes implement the Command interface and define the specific actions that need to be
executed.
3. **Invoker**: This is the object that triggers the command, usually without knowing the details of how it is performed.
4. **Receiver**: The object that knows how to perform the actual work when the command is executed.

### Use cases of the Command Pattern

The command pattern is particularly useful in situations where you want to:

1. **Queue or log requests:** By turning commands into objects, you can easily queue them or store them for later execution.
Think of a task scheduler that executes jobs at specific times.
2. **Implement undo/redo**: Since commands encapsulate all the information needed to perform an action, it's easy to
implement undo and redo functionality by simply storing the executed commands.
3. **Macro Commands**: The Command Pattern can also be used to create complex macros, where multiple commands are executed
in sequence.

### Advantages:

- **Decoupling**: It decouples the invoker of an action from the action itself, making your system more flexible and extensible.
- **Undo/Redo**: Implementing undo/redo functionality becomes straightforward.
- **Queuing** and Logging: Requests can easily be queued or logged, making the pattern useful in command-processing systems like job schedulers or messaging queues.

### Disadvantages:

- **Increased Complexity**: The Command Pattern introduces more classes and objects into the system, which could add complexity if not managed carefully.
- **Memory Overhead**: Since each command is an object, you may end up with many small objects in memory, especially in systems with heavy use of commands.


### Solid Principles it aligns with the most:

- **Single Responsibility Principle**: Each command class has only one responsibility—to encapsulate an action.
- **Open/Closed Principle**: You can add new commands without modifying existing invokers.
- **Dependency Inversion Principle**: The invoker depends on an abstraction (the Command interface) rather than a specific implementation.