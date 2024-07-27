---
title: "Making 3-D Tic-Tac-Toe Unbeatable"
date: 2024-07-24
---

Finally, a good IPM this week. After the last few weeks I was starting to get worried about my performance after the
past two failed IPMs, but it's starting to look back up again. I showed my changes to Tic-Tac-Toe to make it 3-D and my
[cube turning method](https://scoopsies.github.io/finding-clojure/2024/07/19/gleaming-the-cube.html) was loved. My
presentation on source control felt concise, and punchy. I finally passed my Wa-tor kata presentation. There were a
a couple of minor critiques to change up before making a video, but all in all I was told I did a wonderful job.

This week I'll be creating a presentation on Polymorphism in Clojure, a Wa-tor Kata video, and computer ai functionality
in 3-D Tic-Tac-Toe. Which leads me today's subject.

### How to never lose in 3-D Tic-Tac-Toe

It's actually quite simple to always win in tic-tac-toe. First make sure you go first, and choose the center square. It 
turns out, that if you pick the center square, then after O's first turn, every turn they make has to be a block from
you winning because there are 3 dimensions to win in.

It is actually even easier to win on a 3x3x3 board than it is on a 3x3 board. If player-O actually knows what they are
doing they can guarantee a draw every single time. In a 3x3x3 game there is 
[no way for a game to end in a draw](https://pi.math.cornell.edu/~mec/2003-2004/graphtheory/tictactoe/tttanswer2.html).

### Is Unbeatable Tic-Tac-Toe possible?

It would appear that never losing under any condition in 3-D Tic-Tac-Toe is impossible. I sent my research to my mentor
Alex today, and he took it into consideration and asked what the best I could offer is. What I did come up with, is that
the AI would be unbeatable any time it was presented the opportunity to take the center square on its first turn. He
agreed to those terms.

Now that we've come to these terms, I'll update my program to play it out tomorrow.