---
title: "Fixing the “Broken Pipe” Error in SSH Connections"
date: 2024-12-02
---

Lately I've been working with some of our internal tools deployed to a server. I have to regularly SSH into them to 
check logs, or throw print statements in a sandbox environment to get more information to write tests with. The most
annoying thing is returning to a terminal I have had active and trying to use it only to be faced with 
`client_loop: send disconnect: Broken pipe`.

It seemed to happen every time I did not interact with the terminal for a few minutes, and it annoyed me so much I decided
to research a fix today, and that means you get to learn how to solve it yourself if it ever happens to occur to you!

#### What Causes the “Broken Pipe” Error?

- **Idle Timeout**: Many servers automatically disconnect idle clients after a specific time.
- **Network Issues**: Unstable networks can drop the connection unexpectedly.
- **SSH Configuration**: Default settings might not send keep-alive packets to maintain the connection.

#### The Quick Fix

The easiest way to resolve this issue is by modifying your SSH configuration to keep the connection alive.
###### 1.	Locate Your SSH Configuration File

Open the SSH configuration file on your local machine. It’s usually found at ~/.ssh/config. If it doesn’t exist, create it:
```
touch ~/.ssh/config
```

###### 	2.	Add Keep-Alive Settings
Add the following lines to your ~/.ssh/config file:
```
Host *
  ServerAliveInterval 60
  ServerAliveCountMax 3
```

Here’s what each setting does:
- `ServerAliveInterval`: Sends a keep-alive packet every 60 seconds.
- `ServerAliveCountMax`: Disconnects after three missed responses from the server (180 seconds of no response).

#### Example Configuration

Here’s an example of what an ssh config may look like when you are done ~/.ssh/config file:
```
Host github.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/<maybe a reference to your github ssh-key>
  
Host *
  ServerAliveInterval 60
  ServerAliveCountMax 3
```
