---
title: "First Month Survived"
date: 2024-06-20
---

I have now been in this apprenticeship program for a month. Every week seems harder than the last but every time
something feels impossible I seem to overcome. I'm sure there will be even harder hurdles to come, and I'll be able to
take them as they come. Hopefully I'm getting a little better at estimating my jobs. The work is challenging, but it's
my bad job at estimating jobs that is making me work so much overtime. I hope that doesn't come off as complaining, 
I'm enjoying every minute of it! (well maybe not the late nights rushing before IPMs)!

Now on to today's lesson.

### Lazy Sequences

Lazy sequences are one of my favorite things about clojure. A lot of solutions that aren't feasible in Javascript are
simple because of lazy sequences.

<ul>
<li><b>On-Demand Computation:</b> Lazy sequences compute their elements only as needed. This means that when you create 
a lazy sequence, the elements are not computed immediately but rather as they are accessed. This can lead to significant
performance improvements, especially with large or infinite sequences.</li>

<li><b>Memory Efficient:</b> Because elements are computed only when accessed, lazy sequences can represent very large 
or even infinite sequences without consuming a lot of memory. Only the necessary parts of the sequence are held in 
memory at any given time.</li>

<li><b>Infinite Sequences:</b> Clojure allows the creation and manipulation of infinite sequences due to their lazy 
nature. For example, you can generate an infinite sequence of numbers and safely operate on it without running out of 
memory.</li>
</ul>

