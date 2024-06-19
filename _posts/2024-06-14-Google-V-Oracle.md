---
title: "Google vs Oracle"
date: 2024-06-14
---

I made a lot more progress on tic-tac-toe today. The best move function now checks for a win if one is available, takes it
if there is, but checks for a block if not. If there is no block available, I want it to look out trying to avoid 
getting forked which I have not implemented yet. Fridays are always short blocks of time to work on things between lunch
and learn two hours after standup, and then book club an hour after that which usually make friday one of my least 
productive days, but I feel like I was locked in today and made some good progress before the weekend.

Enough about my day. I promised yesterday I'd talk about the Google vs Oracle lawsuit today.

In August 2010 Oracle sued Google claiming that Google's Android operating system infringed on Oracles copyrights
related to Java APIs and patents. Oracle alleged that Google copied 37 Java API packages, which amounted to over 11,000
lines of code. 

The case went to trial in 2012. The jury found that Google had copied the Java API packages but could not agree on whether 
this constituted fair use. The judge ended up ruling that the structure, sequence, and organization of the APIs were not 
copyrightable. This was a victory for Google.

In 2014 Oracle appealed the decision, and the U.S. Court of Appeals for the Federal Circuit overturned the district
court's ruling stating that the Java APIs were indeed copyrightable. The case was sent back to the lower courts to
determine if Google's use of the APIs was fair use.

The second trial took place in 2016, and ruled in favor of Google, concluding that Java's APIs were protected under the
doctrine of fair use. This was also appealed by Oracle in 2017, in which the Federal Circuit once again reversed the
Jury's verdict.

Google petitioned the Supreme Court to review the case, and they agreed to in 2019. Oral arguments were held in
October 2020. The case drew significant attention from the tech industry, with many companies filing amicus briefs
(basically letters of support towards the supreme court towards Google). In April 2021, the Supreme Court ruled in favor
of Google in a 6-2 decision. Their reasoning emphasised that Google reimplemented to Java API to create a new platform 
for a new set of users (smartphone users). 

This ruling set an important precedent for software development, particularly concerning the use of APIs which as it 
provided greater certainty around the use of APIs which are fundamental building blocks for software development. 
