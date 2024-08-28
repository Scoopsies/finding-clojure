---
title: "Testing System Out"
date: 2024-08-21
---

My Ipm today went great! Hopefully I stick to this recent pattern of actually getting all my story points done with
minimal changes needing to be made to my code!

There was something new I had to learn for my FizzBuzz Kata in java that I think warranted it's own blog post. When
testing that FizzBuzz was printing, I had to find a way to "capture" the system out, since `System.out.Println()` does
not produce a concrete result to test against. It technically returns null. So how do we got about testing what doesn't
exist?

We change it up of course!

### What is a ByteArrayOutputStream?

ByteArrayOutputStream works by maintaining an internal buffer (a byte array) that stores the data as it is written. The 
buffer automatically expands as needed, so you don’t need to worry about specifying the size of the byte array upfront.

### What is a PrintStream?

A PrintStream in Java is a class that provides a convenient way to output data to a stream, such as the console or a 
file. It’s part of the java.io package and is typically used for producing formatted output, making it easier to print 
text, numbers, and other data types in a human-readable format.

### System.SetOut()

System.out by default prints to the terminal in the specific way your terminal wants to be printed to. But you can
change this up by using System.setOut(new PrintStream(new byteArrayOutputStream)). Now everything will be stored to the 
byteArray that you created. This makes it so you have a concrete array of what was printed, meaning you can actually
test it!