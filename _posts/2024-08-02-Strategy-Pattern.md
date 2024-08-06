---
title: "The strategy Pattern"
date: 2024-08-02
---

I'm still pretty deep into java tutorials and a little bit confused. So I decided to take a break and do some research
on my presentation this week. The Strategy design pattern.

### What is the Strategy Design Pattern?

The Strategy Design Pattern is a behavioral design pattern that enables selecting an algorithm’s behavior at runtime. 
It involves defining a family of algorithms, encapsulating each one, and making them interchangeable. This pattern 
allows algorithms to vary independently of the clients that use them.

### What are the advantages?

1. **Flexibility:** You can easily switch between different algorithms at runtime.
2. **Maintainability** Adding new techniques doesn't require changes to existing code.
3. **Encapsulation** Each cooking technique is encapsulated in its own class or record.

### Disadvantages

1. **Increased Number of Classes/Records:** Requires creating a separate class or record for each cooking technique.
2. **Complexity:** Can increase the overall complexity of the codebase due to the additional abstraction layer.

### Relation to SOLID
- Single Responsibility Principle: Each technique class/record has a single responsibility.
- Open/Closed Principle: The system can be extended with new techniques without modifying existing code.
- Liskov Substitution Principle: Techniques can be used interchangeably as they implement the same interface.
- Interface Segregation Principle: Techniques focus on specific interfaces.
- Dependency Inversion Principle: High-level modules depend on abstractions (Technique interface), not on concrete 
implementations.