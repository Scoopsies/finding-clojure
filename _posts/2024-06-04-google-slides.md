---
title: "Presentations and not Reversing sequences as Often."
date: 2024-06-04
---

Today I spent my day working on my OCP presentation. It has opened my eyes to how bad I am at making Google Slides.
As soon as I'm done with this one, I plan on researching how to improve the work flow of presentations because I have
a feeling presentations will be a big part of this job.

To break up some of the monontony of my presentation I went back and refactored my Euler code. It was taking 7 seconds
to run all my tests, majority of that being on Euler 5. I had a loop that was reversing a collection 3 times in it, so 
i destructured it so it only had to do it once. What I hadn't realized before is that reverse is not a Lazy Sequence, so
the program was having to realize every one of those values multiple times just to get the 3 values I was looking for.

By destructuring the collection and reversing it before the loop, I have now brought my testing time down by over 50%.
I'm sure there is something I can do to refactor the code even more, but that can come after finishing my presentation.