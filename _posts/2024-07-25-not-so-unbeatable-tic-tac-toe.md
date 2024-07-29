---
title: "\"Unbeatable\" Tic-Tac-Toe Implementation"
date: 2024-07-24
---

I spent a majority of my morning today trying to figure out how to implement my mini-max algorithm into 3x3x3
Tic-Tac-Toe. It takes way to long to decide a move with so many options. According to [this YouTube video](https://www.youtube.com/watch?v=iojdLg7eVXc&t=14s) there 
are 8,401,905,440,137,617,408,000,000 possible games of 3-D tic-tac-toe. That number is so large I had to google
how to say it when I told my wife about it. Eight Septillion, Four Hundred One Sextillion, Nine Hundred Five Quintillion, 
Four Hundred Forty Quadrillion, One Hundred Thirty-Seven Trillion, Six Hundred Seventeen Billion, Four Hundred Eight 
Million. 

Of course I could put a depth limit on mini-max like I did with the 4x4 game, but that did not seem to be the ideal
solution to this problem. After some time to think about it, I realized that maybe we didn't need to use mini-max at all
to win tic-tac-toe. If you make sure that the game picks the center first, takes a win if presented, or takes a block if 
it's about to lose. It can play randomly and win every time if it gets the center first. 

```clojure
(defmethod pick-move 27 [board]
  (let [player (core/find-active-player board)
        available-moves (core/get-available-moves board)]
    (cond
      (move-core/win-next-turn? player board) (move-core/take-win player board)
      (move-core/lose-next-turn? player board) (move-core/take-block player board)
      (some #{13} available-moves) 13
      :else (rand-nth available-moves))))
```

Sometimes the simplest solution is the best solution.