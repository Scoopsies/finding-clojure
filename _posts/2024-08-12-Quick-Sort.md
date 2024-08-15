---
title: "Quick Sort"
date: 2024-08-12
---

Quick sort has been intimidating me, so I figured before I implement it, it wouldn't be a bad idea to write all the
things I've learned about it into a blog post.

### Quick Sort

QuickSort is a highly efficient, comparison-based sorting algorithm that also follows the divide-and-conquer paradigm. 
Unlike Merge Sort, which splits the list in the middle, QuickSort chooses a “pivot” element and partitions the 
surrounding array . This leads to a more space-efficient algorithm with an average time complexity of  O(n \log n) , 
though it can degrade to  O(n^2)  in the worst case.

### How does it work?

Quick sort consists of three main steps.

1. Choosing a pivot:
    - Selecting an element from the array as the pivot. The pivot can be first, last, middle, or even a random element.
2. Partitioning:
    - Rearrange the array so that all elements less than the pivot are on its left, and all elements greater are on its 
right.
3. Recursion:
    - Recursively apply quick sort to the left and right sub-arrays created by the partitioning step.

### Advantages
- Quick sort is very efficient with an average case time complexity of O(n log n).
- It typically requires less space than merge sort since it sorts in place.
- It can be faster than other algorithms like merge sort with good pivot selection.

### Disadvantages
- The worst case time complexity is O(n^2), typically occurring when the smallest or largest element is consistently chosen
as the pivot.
- Quick sort is not a stable sort, meaning it does not preserve the order of equal elements.
- It can be sensitive to the choice of pivot, which affects its performance.

### When to use

QuickSort is a great choice when you need a fast, general-purpose sorting algorithm with low memory overhead. However, 
if you need stability or are working with small datasets, another algorithm might be better suited. Understanding 
QuickSort is essential for any programmer, as it’s not only widely used but also introduces important concepts in 
algorithm design.