---
title: "Optimizing mini-max's proof"
date: 2024-07-08
---

This week has been harder than the rest. I definitely over extended myself. Proving that my mini-max function works on 
a 4x4 board has proven to be quite the task. On a 3x3 board there are 255,168 possible games. The number of possible
games for a 4x4 board is estimated to be in the billions. 

The function I had created to test all possible games on a 3x3 board had taken 15 seconds to complete. If my simple math
is correct, and we rounded the possible games of tic-tac-toe down to a billion, I'd only have to wait 16.78 years for
my proof to calculate.

I'm not so sure my boss would be very happy if I was still apprenticing in 15 years, so I had to do some optimizations to
my code today.

### The Old Way

To prove my 3x3 game originally, I had used a library called 
[combinatorics](https://github.com/clojure/math.combinatorics). Specifically its `permutations` function. The function
takes a sequence of numbers and finds every possible combination of those numbers (or any value really). It just so 
happens that my board(and available moves on the board) are a sequence of numbers! I then took that sequence and used
`(map #(drop 3 %) all-permutations)` to make all possible move sets for a person playing against mini-max if they were
to go first (as X). I did the same thing and dropped 4 for my proof for if the person played as O. 

I then created a function that played each game. After every move it checked if it was game over, or if the next move
in the move-set wasn't available. If the game was game over, it checked if mini-max had lost the game. This worked, but
did take a whole 15 seconds.

### Optimizing

This was never going to fly for a 4x4 board. Finding all the permutations made the test hang up. That's before trying to
calculate all the permutations. So how could we cut down this amount of calculation before even doing calculations? 


The solution was instead of creating the move sequences before we've even started calculating, we could start with just
our board. We then take that board, do all possible moves to it, check for end game states, and then filter out any
games that weren't won. This made it, so we didn't keep playing games that we're not valid from the start, saving a lot of 
computation power, and lots of time.

```clojure
defn get-next-moves [player-token board ai-fn]
  (let [available-moves (core/get-available-moves board)]
    (if (= (core/find-active-player board) player-token)
      (map #(core/update-board % board) available-moves)
      [(ai-fn board)])))

(def get-next-moves (memoize get-next-moves))

(defn get-finished-games [player-token board ai-fn]
  (loop [finished-games []
         in-progress-games [board]]
    (if (empty? in-progress-games)
      finished-games
      (recur
        (concat (filter board/game-over? in-progress-games) finished-games)
        (apply concat (map #(get-next-moves player-token % ai-fn) (remove board/game-over? in-progress-games)))))))

(def get-finished-games (memoize get-finished-games))

(defn get-ai-losses [player-token board ai-fn]
  (empty? (filter #(board/win? player-token %) (get-finished-games player-token board ai-fn))))
```

This brought our time for 3x3 down to .18 seconds. A much-needed improvement!




