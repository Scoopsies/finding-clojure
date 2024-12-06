---
title: "Bash Scripting Basics"
date: 2024-12-04
---

Have you ever stared at your terminal, wondering if there’s a faster way to automate repetitive tasks? Bash scripting is 
the key to unlocking your inner command-line wizard. Let’s take a dive into the basics of bash scripting and why it’s a 
skill worth learning.

### What is Bash?

Bash (Bourne Again SHell) is a command-line interpreter used on Unix-like systems. It lets you interact with your system, 
execute commands, and create scripts to automate tasks. Bash scripting is writing a sequence of commands in a file and 
running it as a program.

### Getting Started with a Bash Script

##### 1.	Create a File

Create a new file with the .sh extension:
```
touch my_script.sh
```

##### 2.	Add the Shebang
The first line of a bash script is the shebang, which tells your system which interpreter to use, in this case we are
using bash:
```
#!/bin/bash
```

##### 3.	Write Your Commands
Add the commands you’d usually type into the terminal:
```
#!/bin/bash
echo "Hello, World!"
```

##### 	4.	Make It Executable
Give your script execution permissions (this is done in the terminal, not the .sh file):
```
chmod +x my_script.sh
```

##### 	5.	Run the Script
Execute your script like this:
```clojure
./my_script.sh
```