---
title: "clojure.set/intersection"
date: 2024-07-11
---

Today I finally got wa-tor done for the first time. I am no where close to having it commited to muscle memory
though. That will just take practice to get to. So that's my plan after finishing my tic-tac-toe add on this week.

In figuring out Wa-tor, I encountered a problem with a simple solution that I'd like to share. I had a list of adjacent
positions to my shark. I needed to make sure that the shark prioritized going to an adjacent square with a fish in it
if available. So I created a list of all fish (the fish maps I created have their position as a key value pairing). I
then mapped over the list with the position keyword to give me a list of all fish positions.

```clojure
(def fish-positions (map :position list-of-fish))
```

This left me with a problem. I had a list of `adjacent-positions` and a list of `fish-positions`, but I needed to get
only items that the two lists had in common. I could create a whole loop, that checks each one individually to see if it
is in the other list and return a result, but that doesn't sound like something that could be typed up fast enough to be
done every time I do the kata, while trying to keep the kata within 15 minutes. Also, performing that check on every 
creature every time the board updates sounds very taxing on computing power.

After some quick google-fu, I found an ideal solution. Required `Clojure.set` in my namespace `:as set`. I then converted
both of my lists into sets and used a set method called intersection on them.

```clojure
(def adjacent-positions '([0 0] [0 1] [0 2])) ; Shortened for example.
(def fish-positions '([0 1] [22 31] [30 20] [5 15]))

(def adjacent-fish-positions
  (set/intersection (set adjacent-positions) (set fish-positions)))
;=> #{[0 1]}
```

I then can turn that set into a vector or list with either `set` or `vec` and pull the first available to get my new
position. If the set is empty I can move on to my method of choosing a spot at random!
