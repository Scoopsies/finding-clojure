---
title: "Recur, a better way to loop"
date: 2024-06-11
---

Today was my second day facilitating the stand-up meeting. Today my subject was on Trappist monks. Still not sure what
I should do for Wednesday, but I'm sure I'll figure it out. 

Today I decided to refactor all the Eulers I have done this week. I have always seemed to be too reliant on Loops. But 
Clojure actually has a better way to do them! Instead of writing a loop every time, you can just use a recur call at the 
tail of your function. It looks less jumbled, and is actually more efficient when possible to use (most of the time
it is).

Getting in the habit of doing this, actually saves me quite a bit of time when doing the final refactor of my Roman
Numeral Kata. This led to me shaving off a full minute and a half.