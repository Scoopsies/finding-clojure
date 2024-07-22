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

