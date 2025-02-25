---
layout: post
title: Using sqlite3 to Query Databases from the Command Line
author: Edwin Choate
date: 2025-02-25
categories: terminal
---

When modifying or maintaining a SQL database, you'll be using a bonafide interface like SQL Server Management Studio on your system, but what if you're on another system, like a server? It might be advantageous to pop into the database from the command line for something quick. Maybe you're just trying to make sure the DB is on the system and there's data in it. 

This is where using a lower-profile command line tool might be handy. 

In this post, I will describe the basics of what you need to use `sqlite3.exe`.

**sqlite3** is the name of the executable that you can use to interact with SQLite databases from the command line. 

### Installing sqlite3

sqlite3 comes bundled with many dev toolkits, so you might have it on your system already without realizing it. 

If you don't already have sqlite3, you can get it on Windows by installing the MSYS2 toolkit from [msys2.org](https://www.msys2.org)

Download and run the installer. Then, add `C:\msys64\mingw64\bin` to your Path environmental variable.

To edit your Path env variable, go to Settings app > _Advanced system settings_ > _Environmental variables..._ > double-click on _Path_. Add a line that includes the value `C:\msys64\mingw64\bin`, or wherever you installed it. Check to make sure that path is actually what's on disk and that you see the `sqlite3.exe` executable in there.

To check to make sure it was added to your Path successfully, just run the `PATH` command in Command Prompt and it should print out all the paths for you. You should see the new path in there. 

```terminal
C:\> PATH
PATH=...C:\msys64\mingw64\bin;...
```

To confirm it was installed successfully, launch a terminal and type the `sqlite3` command. It should launch a shell that looks like this: 

```terminal
C:\> sqlite3
-- Loading resources from C:\Users\XXXX/.sqliterc
SQLite version 3.44.2 2023-11-24 11:41:44 (UTF-16 console I/O)
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite> 
```

But say you want to be scrappier than actually installing it and putting it in PATH. You can also just download the `sqlite3` executable from [sqlite.org/download](https://www.sqlite.org/download.html), copy the program into the same directory as the db you want to access, and run it in there.

### Create or open a database

To create or access a database, you simply pass the database filename (.db) as an argument when lauching the sqlite shell:

```terminal
C:\> sqlite3 mydatabase.db
-- Loading resources from C:\Users\XXXX/.sqliterc
SQLite version 3.44.2 2023-11-24 11:41:44 (UTF-16 console I/O)
Enter ".help" for usage hints.
sqlite> 
```

### Query the database with SQL 

Once you run the `sqlite3` command you're met with a prompt that looks like this: 

```terminal
sqlite> 
```

To use it, write out the beginning of a SQL statement. Since there's likely nothing in `mydatabase.db` at this point, we can test out creating a table. 

Write the first line of your CREATE TABLE statement into the shell and press enter:

```terminal
sqlite> CREATE TABLE people
   ...> 
```

You'll see that the prompt has changed from `sqlite>` to `...>`. This means the shell is waiting for the rest of the query and it will continue to accept lines until it sees the terminating semicolon. 

Continue to write the rest of the query line by line until you get to the end, terminate it with a semicolon, and press enter. 

```terminal
sqlite> CREATE TABLE people
   ...> (
   ...> id INT PRIMARY KEY,
   ...> first_name NVARCHAR(50),
   ...> last_name (NVARCHAR(50),
   ...> age INT
   ...> );
sqlite>    
```

Notice, after you terminate your SQL statement with a semicolon and hit enter, it returns to the `sqlite>` prompt.

Now that you have a table, you can use the `.tables` command to view a list of your tables:

```terminal
sqlite> .tables
people
sqlite>
```

Start by adding some data into the table:

```terminal
sqlite> INSERT INTO people
   ...> (first_name, last_name)
   ...> VALUES
   ...> ('Bob', 'Smith'),
   ...> ('Mary', 'McMichaels'),
   ...> ('Reggie', 'Oswald')
   ...> ;
```

sqlite3 will also display data from your SELECT queries inline in the terminal (in a simplistic way).

```terminal
sqlite> SELECT * FROM people;
id|first_name|last_name|age
|Bob|Smith|
|Mary|McMichaels|
|Reggie|Oswald|
sqlite>
```

### Exiting the sqlite shell

To get out of the sqlite shell just use the `.quit` command. Also, at any point you can use the conventional `^C` (CTRL+C) shortcut to abandon the shell.

```terminal
sqlite> .quit
C:\>
```

### See more .help

You can also run the `.help` command to see a lot more information on how to use the shell.

```terminal
sqlite> .help
.archive ...             Manage SQL archives
.auth ON|OFF             Show authorizer callbacks
.backup ?DB? FILE        Backup DB (default "main") to FILE
.bail on|off             Stop after hitting an error.  Default OFF
.cd DIRECTORY            Change the working directory to DIRECTORY
.changes on|off          Show number of rows changed by SQL
.check GLOB              Fail if output since .testcase does not match
.clone NEWDB             Clone data into NEWDB from the existing database
.connection [close] [#]  Open or close an auxiliary database connection
.crnl on|off             Translate \n to \r\n.  Default ON
.databases               List names and files of attached databases
.dbconfig ?op? ?val?     List or change sqlite3_db_config() options
.dbinfo ?DB?             Show status information about the database
.dump ?OBJECTS?          Render database content as SQL
.echo on|off             Turn command echo on or off
.eqp on|off|full|...     Enable or disable automatic EXPLAIN QUERY PLAN
.excel                   Display the output of next command in spreadsheet
...
sqlite> 
```

## In sum

I hope this post has been a helpful guide for using `sqlite3.exe` to access a SQLite database and view its tables and data. This command line utility can be a good way to check databases on an environment like a server where there aren't as many applications installed. 
