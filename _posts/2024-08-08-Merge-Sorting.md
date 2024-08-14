---
title: "Merge Sort"
date: 2024-08-08
---

I managed to implement bubble sort relatively painlessly, but I'm still working on merge sort. Thought I would share
what I've learned on my quest to implementing it.

### Merge Sort

Merge Sort is a comparison-based sorting algorithm that follows the divide-and-conquer paradigm. The core idea is to 
divide the unsorted list into smaller sublists, sort those sublists, and then merge them back together to form the final
sorted list. This approach results in a consistently efficient algorithm with a time complexity of O(n log n), making it 
significantly faster than simpler algorithms like Bubble Sort for large datasets.

### How does it work?

Merge sort has two main phases: splitting the list into smaller sublists and **merging** those sublists back together in
sorted order.

1. Splitting the List.
    - Start by dividing the list into two halves.
    - Recursively split each half until you have sublists that only contain one element.
2. Merging the sublists:
    - Begin merging the sublists two at a time, ensuring that each merge results in a sorted list.
    - Continue merging until all sublists have been combined into a single sorted list.

### Advantages
- Merge sort is highly efficient, especially for large data sets.
- Merge sort preserves the order of equal elements, making it stable.
- Unlike other algorithms, merge sort has a consistent time complexity regardless of the input data's initial order.

### Disadvantages
- Merge sort requires additional memory proportional to the size of the list for the temporary arrays used in the
merging process.
- For small datasets, the overhead of recursive calls and merging might make Merge Sort slower than simpler algorithms
like insertion sort.

### When to use

Merge Sort is a powerful and efficient sorting algorithm that plays a crucial role in the toolkit of any programmer or 
computer scientist. Its ability to handle large datasets with consistent performance makes it invaluable in many 
real-world applications. Understanding Merge Sort not only helps you sort data efficiently but also provides a solid 
foundation for learning other advanced algorithms.