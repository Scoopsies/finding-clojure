---
title: "Bubble Sort"
date: 2024-08-07
---

Today was another IPM, and I passed. Barely, but I made it. I do have to do some major refactoring to do to my
tic-tac-toe which is going to be a pain, but it wasn't a failed week, so I'll call that a win! My tasks for this week are
a little intimidating though. I have to create 3 sorting algorithms to be used with my data structures from last week.

The first of which will be the subject of today!

### Bubble Sort

Bubble Sort is a comparison-based algorithm that works by repeatedly stepping through the list, comparing adjacent 
elements, and swapping them if they are in the wrong order. The process repeats until the entire list is sorted. 
It’s called “Bubble Sort” because smaller elements “bubble” to the top of the list while larger elements sink to the 
bottom.

### How does it work?

1. Start at the beginning of the list and compare each pair of adjacent elements.
2. If the current element is greater than the next one, swap them.
3. Move to the next pair of adjacent elements and repeat the comparison swap process.
4. By the end of the first pass, the largest element has "bubbled up" to the end of the list.
5. On the next pass, you can ignore the last element (since it's already sorted) and continue with the remaining
unsorted elements
6. Repeat the process until no more swaps are needed.

### Advantages
- Straight-forward and easy to learn. A great introductory sorting algorithm.
- Very Easy to implement.

### Disadvantages
- Bubble sorts performance deteriorates quickly as the size of the list increases.
- Even when the list is already sorted, Bubble sort will continue to make passes, make it less efficient than other
algorithms.


### Real World Uses
There really aren't many times this method gets used in real world applications, but it is a great algorithm to learn
for educational purposes.