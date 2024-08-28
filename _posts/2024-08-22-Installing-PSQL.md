---
title: "Installing PostgreSQL"
date: 2024-08-22
---

I spent a lot of time yesterday playing around with PostgreSQL, and figured I'd share some tips on getting it set up.

### What is PostgreSQL?

PostgreSQL (or PSQL) is a powerful, open-source relational database management system that’s popular for its advanced 
features and stability. If you’re a Mac user looking to get PostgreSQL set up on your machine, this guide will walk you 
through the process step by step.

### Step 1: Install PSQL

There are several ways to install PostgreSQL on a Mac, but one of the easiest methods is using Homebrew, a popular 
package manager for macOS. If you don’t have Homebrew installed, you can install it by running the following 
command in your terminal:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once Homebrew is installed, you can install PostgreSQL with this simple command:

```
brew install postgresql
```

### Step 2: Start PSQL

After the installation is complete, you need to start the PostgreSQL service. You can do this with the following 
command:

```
brew services start postgresql
```

### Step 3: Verify the Installation

To verify that PostgreSQL is running correctly, you can use the following command to check the version:

```
psql --version
```

### Step 4: Create a New Database

Now that PostgreSQL is up and running, you can create a new database. At the PostgreSQL prompt, type:

```
CREATE DATABASE mydb;
```

You can call `mydb` anything you want.


And that's the basics of setting up PostgreSQL!