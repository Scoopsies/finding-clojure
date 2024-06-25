---
title: "Memoize"
date: 2024-06-21
---

Fridays means one thing. Plenty of meetings. They are fun meetings, but it seems I don't get as much work done as I'd
like to. I did learn about a new function today though, so that leads us to today's lesson!

### memoize

The clojure.core documentation says:

(memoize f)

Returns a memoized version of a referentially transparent function. The
memoized version of the function keeps a cache of the mapping from arguments
to results and, when calls with the same arguments are repeated often, has
higher performance at the expense of higher memory use. 


<br/>


This function comes in handy when you have a function that takes a long time to run and/or gets called a lot of times.
Memoize will cache the result of all inputs put into the function. If that input comes up again later, memoize already
has the answer cached, so it does not need to compute it all over again, and it returns the result near instantaneously.

My mini-max algorithm has to check every possible move in a game of tic-tac-toe to return the best possible move. I
created a function to test if it is truly the best move, so it runs every single on of those moves against every
possible move. This takes over an hour to complete without memoize. With memoize it takes 7 seconds. The downfall of
this function is that it uses more memory. I personally would rather use more memory than to wait around waiting for 
my program to finish computing to get results. Memory is cheap, time is valuable.



