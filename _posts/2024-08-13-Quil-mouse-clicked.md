---
title: "def-sketch :mouse-clicked"
date: 2024-08-13
---

It's definitely crunch time trying to get all my story points before my IPM in the morning so this post is going to be
a little shorter than usual, but it is something that I could not find explained anywhere online.

Last month I wrote a post about [the basics of Quil](https://scoopsies.github.io/finding-clojure/2024/07/05/Quil.html).
I talked about the def-sketch function which is how you define different functions to be used in Quil's constantly
looping flow. I went over a few of the basic ones, but I just learned of a new one.

### :mouse-clicked

The `:mouse-clicked` keyword in defsketch allows you to define an action to be performed when the mouse is clicked. The
function to define must take it two parameters. The first one being the state in your game, and the second one being the
quil defined map. The map gives you some useful information about the click that was performed that you can use to
manipulate the state with, and the mouse click function passes that state to the `:update` function you defined in 
`def-sketch`.

### Keys-Values 

- `:x` returns an integer of which pixel of the window the user clicked.
- `:y` returns an integer of which pixel of the window the user clicked.
- `:button` returns a keyword of which value was clicked. (`:left`, `:center`, `:right`)