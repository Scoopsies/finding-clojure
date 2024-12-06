---
title: "Slightly more advanced Bash Scripting"
date: 2024-12-05
---

Yesterday I wrote a post about [Bash Scripting Basics](https://scoopsies.github.io/finding-clojure/2024/12/04/bash-scripting-basics.html)
which gives you the very basics of setting up your first bash script. Today I wanted to expand on it and show you a little
more of what Bash can do. If you ever find yourself having to type out a series of commands one after another multiple
times in your work flow, why not create a Bash script that does it for you?

### Variables

Variables store data that you can reuse:

```
#!/bin/bash
name="Bash"
echo "Hello, $name!"
```

### Conditional Statements

Make decisions with if statements:

```
#!/bin/bash
if [ "$1" == "hello" ]; then
    echo "Hello to you too!"
else
    echo "Goodbye!"
fi
```

### Loops

Automate repetitive tasks with loops:

```
#!/bin/bash
for i in {1..5}; do
    echo "Looping... number $i"
done
```

### Functions

Group commands into reusable chunks:

```
#!/bin/bash
greet() {
    echo "Hello, $1!"
}

greet "Bash"
```

