---
title: "Linked Lists"
date: 2024-08-05
---

Over the weekend I did more Java crash course cramming and now feel like I have enough of a grasp on it to fake it 
until I make it. Now that I think about it, isn't that a great analogy for being a human adult in general?

The project I had to do was creating an ArrayList class and a LinkedList class. Both are already created things in the 
Java language, but I was tasked with recreating them from scratch to become more familiar with them. ArrayList is what
I started with. It really just involves creating arrays, and making copies of those arrays into arrays that have more
data allocated when necessary. It was a bit frustrating but doable. Most of the frustration came from still being fresh
with Java instead of the task its self.

But then came Linked list. BOY OH BOY is this one fun!

### What is a Linked List?

At its core, a linked list is a collection of nodes where each node contains data and a reference (or pointer) to the 
next node in the sequence. This allows the list to be easily modified, with nodes being added or removed without having
to shift elements around as you would in an array.

### Components of a Linked List.

1. **Node:** The basic unit of a linked list. Each node contains:
   - **Data:** The value you are storing (in my case, an integer).
   - **Next:** A pointer (or reference) to the next node in the list.
   - **Previous (optional):** A pointer to the previous node in the list.
2. **Head:** The first node in the list. It serves as the entry point to the list and allows traversal from the start.
3. **Tail (optional):** The last node in the list. It optimizes when paired with previous so that if an index is on the 
second half of the list, you can start searching sequentially from the back.

### Types of Linked Lists

1. **Singly Linked Lists:** Each node only has a reference to the next (excludes previous). This means you can only
traverse forwards through the list.
2. **Doubly Linked Lists:** Each node has a next and previous. This allows you to move both directions.
3. **Circular Linked Lists:** In this type, the last node points back to the head of the list, forming a circle. It can
be singly or doubly linked.