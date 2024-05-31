---
title: "Well Euled Machine"
date: 2024-05-30
---

Today I spent all day working on problems 4 and 5 of Project Euler. Problem 4 was having to find
the largest palindrome product of n digit numbers. I first had to come up with a way to check if a number was a 
palindrome. I first converted the number into a string, reversed it, and then converted it back into a number.
I then checked if that number was the same forwards as backwards to see if it was a palindrome or not. 

The next step was to find a way to find the largest n digit number. The way I did this was to create function that
returned 10 to the nth power, and decrease that number by 1. I had to do the same with finding the lowest n digit 
number. To do that I made a function to calculate 10^(n - 1). 

I then created a recursion loop that found every product of every combination of n digit numbers. It then sorted the
list in descending order, and selected the first (largest) one.

Euler 4 has had me a little more stumped, I worked on it for around 3 and a half hours today. I try to give each of these
issues a fair amount on time of playing around with solutions, because I feel that helps me get a firmer grasp of
Clojure, but if it takes me much longer I'll probably reach out for help.