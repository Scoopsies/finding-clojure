---
title: "Gleaming the Cube"
date: 2024-07-20
---

In my tic-tac-toe this week Alex challenged me to handle my checking for win conditions differently. Instead of how I
was handling columns and wins on the side of a 3x3x3 (cube) board. To do columns (on any board now) I just repeat the
same way I checked for rows, but rotate the board 90 degrees on the y-axis. Rows are now columns!

To check all the win conditions from every angle of the board I check for wins facing forwards. I then check for wins
facing the side (rotated 90 degrees on the X axis). Finally, to check from the top, I first rotate the board 90 degrees
on the y-axis (making the top the side) and then rotate 90 degrees on the x-axis.

```clojure
(defn count-rows [board]
  (int (Math/sqrt (count board))))

(defn rotate-plane-y [board]
  (let [row-size (count-rows board)
        get-nth-row (fn [n board] (map #(nth % n) (map reverse (partition row-size board))))]
    (mapcat #(get-nth-row % board) (range row-size))))

(defn rotate-cube-y [board]
  (mapcat rotate-plane-y (partition 9 board)))

(defn rotate-plane-x [board plane]
  (let [get-nth-rotated-row (fn [n board plane] (map #(nth % (+ (* 3 n) plane)) (partition 9 board)))]
    (reverse (mapcat #(get-nth-rotated-row % board plane) (range 3)))))

(defn rotate-cube-x [board]
  (reverse (mapcat #(rotate-plane-x board %) (range 3))))
```