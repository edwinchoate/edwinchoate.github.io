---
layout: post
title: Querying SQL Databases from the Command Line
author: Edwin Choate
date: 2025-02-25
categories: terminal
---

When modifying or maintaining a SQL database, you'll be using a bonafide interface like SQL Server Managament Studio on your system, but what if you're on another system, like a server? It might be advantageous to pop into the database from the command line for something quick. Maybe you're just trying to make sure the DB is on the system and there's data in it. 

This is where using a lower-profile command line tool might be handy. 

In this post, I will describe the basics of what you need to launch, and use two specific CLI tools for SQL: sqlite3, which is for SQLite databases, and sqlcmd, for SQL Server databases. 

I will be writing this post assuming you're on a Windows machine, but most of the concepts should carry over to other platforms as well. 

## SQLite - sqlite3

**sqlite3** is the name of the executable that you can use to interact with SQLite databases from the command line. Think of it as a SQLite client, for the command line. sqlite3 is a funny thing, because it comes bundled with many dev toolkits, so you might have it on your system already without realizing it. 

### Installing sqlite3

If you don't already have sqlite3, you can get it on Windows by installing the MSYS2 toolkit from [msys2.org](https://www.msys2.org)

Download and run the installer. Then, add `C:\msys64\mingw64\bin` to your Path environmental variable.

To edit your Path env variable, go to Settings app > _Advanced system settings_ > _Environmental variables..._ > double-click on _Path_. Add a line that includes the value `C:\msys64\mingw64\bin`, or whatever you installed it. Check to make sure that path is actually what's on disk and that you see the `sqlite3.exe` executable in there.

To check to make sure it was added to your Path successfully, just run the `PATH` command in Command Prompt and it should print out all the paths for you. You should see the new path in there. 

{% shell %}
C:\> PATH
PATH=...C:\msys64\mingw64\bin;...
{% endhighlight %}

To confirm it was installed successfully, run a Command Prompt and type the `sqlite3` command. It should launch a shell that looks like this: 

{% shell %}
C:\> sqlite3
-- Loading resources from C:\Users\XXXX/.sqliterc
SQLite version 3.44.2 2023-11-24 11:41:44 (UTF-16 console I/O)
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite> 
{% endhighlight %}

But say you want to be scrappier than actually installing it and putting it in PATH. You can also just download the `sqlite3` executable from [sqlite.org/download](https://www.sqlite.org/download.html), copy the program into the same directory as the db you want to access, and run it in there.

### Create or open a database

To create or access a database, you simply pass the database filename (.db) as an argument when lauching the sqlite shell:

{% shell %}
C:\> sqlite3 mydatabase.db
-- Loading resources from C:\Users\XXXX/.sqliterc
SQLite version 3.44.2 2023-11-24 11:41:44 (UTF-16 console I/O)
Enter ".help" for usage hints.
sqlite> 
{% endhighlight %}

### Query the database with SQL 

Once you run the `sqlite3` command you're met with a prompt that looks like this: 

{% shell %}
sqlite> 
{% endhighlight %}

To use it, write out the beginning of a SQL statement. Since there's likely nothing in `mydatabase.db` at this point, we can test out creating a table. 

Write the first line of your CREATE TABLE statment into the shell and press enter:

{% shell %}
sqlite> CREATE TABLE people
   ...> 
{% endhighlight %}

You'll see that the prompt has changed from `sqlite>` to `...>`. This means the shell is waiting for the rest of the query and it will continue to accept lines until it sees the terminating semicolon. 

Continue to write the rest of the query line by line until you get to the end, terminate it with a semicolon, and press enter. 

{% shell %}
sqlite> CREATE TABLE people
   ...> (
   ...> id INT PRIMARY KEY,
   ...> first_name NVARCHAR(50),
   ...> last_name (NVARCHAR(50),
   ...> age INT
   ...> );
sqlite>    
{% endhighlight %}

Notice, after you terminal your SQL statement with a semicolon and hit enter, it returns to the `sqlite>` prompt.

Now that you have a table, you can use the `.tables` command to view a list of your tables:

{% shell %}
sqlite> .tables
people
sqlite>
{% endhighlight %}

Start by adding some data into the table:

{% shell %}
sqlite> INSERT INTO people
   ...> (first_name, last_name)
   ...> VALUES
   ...> ('Bob', 'Smith'),
   ...> ('Mary', 'McMichaels'),
   ...> ('Reggie', 'Oswald')
   ...> ;
{% endhighlight %}

sqlite3 will also display data from your SELECT queries inline in the terminal (in a simplistic way). I find this works best if you're on a larger monitor that has enough space to display many columns. Otherwise, the formatting can get messy. Not impossible to read, but certainly messy. 

{% shell %}
sqlite> SELECT * FROM people;
id|first_name|last_name|age
|Bob|Smith|
|Mary|McMichaels|
|Reggie|Oswald|
sqlite>
{% endhighlight %}

### Exiting the sqlite shell

To get out of the sqlite shell just use the `.quit` command. Also, at any point you can use the conventional `^C` (CTRL+C) shortcut to abandon the shell.

{% shell %}
sqlite> .quit
C:\>
{% endhighlight %}

### See more .help

You can also run the `.help` command to see a lot more information on how to use the shell.

{% shell %}
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
{% endhighlight %}

### SQL Server - sqlcmd

**sqlcmd** is an executable that allows you to interact with SQL Server databases from the Command Prompt without having to have a dedicated user interface installed. 

### Installing sqlcmd

There are a number of ways to get `sqlcmd` onto your Windows machine. It may be worth just trying to run the `sqlcmd -?` command from the command line just in case you already have it on your system. It comes with [SQL Server's full installation](https://www.microsoft.com/en-us/sql-server/sql-server-downloads). 

Another way to install it is to install the [Microsoft Command Line Utilities for SQL Server](https://www.microsoft.com/en-us/download/details.aspx?id=53591)

You can also install it with a package manager. 

If you have Windows Package Manager:

{% shell %}
C:\> winget install sqlcmd
{% endhighlight %}

If you have Chocolatey:

{% shell %}
C:\> choco install sqlcmd
{% endhighlight %}

### Verify it's installed 

If the `sqlcmd` command is successfully installed, you ought to be able to run the `sqlcmd -?` command in Command Prompt. If it's installed correctly, it should look something like this:

{% shell %}
C:\> sqlcmd -?
Microsoft (R) SQL Server Command Line Tool
Version 16.0.1000.6 NT
Copyright (C) 2022 Microsoft Corporation. All rights reserved.

usage: Sqlcmd            [-U login id]          [-P password]
  [-S server]            [-H hostname]          [-E trusted connection]
  [-N Encrypt Connection][-C Trust Server Certificate]
  [-d use database name] [-l login timeout]     [-t query timeout]
  [-h headers]           [-s colseparator]      [-w screen width]
  [-a packetsize]        [-e echo input]        [-I Enable Quoted Identifiers]
  [-c cmdend]            [-L[c] list servers[clean output]]
  [-q "cmdline query"]   [-Q "cmdline query" and exit]
  [-m errorlevel]        [-V severitylevel]     [-W remove trailing spaces]
  [-u unicode output]    [-r[0|1] msgs to stderr]
...
{% endhighlight %}

### Launch the sqlcmd shell

I will assume you're on a Windows machine for the rest of this post. 

In order for sqlcmd to work, the SQL Server service needs to be running. You can check it by lauching the Services app (or Run (Win+R) > services.msc). The service should be called something like _SQL Server (MSSQLSERVER)_. Its status should be _Running_. If not, right-click on the service and click _Start_. (If you've got SQL Server Configuration Manager installed on your system, you can also use that to start the service.)

Once the SQL Server service is running, to launch the sqlcmd shell, just type in the `sqlcmd` command:

{% shell %}
C:\> sqlcmd
1>
{% endhighlight %}

### See the databases on the system

When in the shell, you can run `sp_datbases` to see the DBs on the system. Use the `GO` command to run the statement.

{% shell %}
1> sp_databases
2> GO
{% endhighlight %}

In this case, SQL Server is running a built-in stored procedure. (The `sp_` prefix stands for stored procedure.)

This stored procedure will list out all of the databases running on the instance of SQL Server you've got on the system, with a couple other pieces of information. 

{% shell %}
1> sp_databases
2> GO
DATABASE_NAME         DATABASE_SIZE  REMARKS
--------------------  -------------  --------------
master                        16834  NULL

model                          5376  NULL

msdb                          16960  NULL

tempdb                        40960  NULL
{% endhighlight %}

You may be wondering that these databases are. All of the above databases are system databases that come built into SQL Server and are actually part of SQL Server itself. (It's best not to mess with these databases to avoid the risk of breaking things.) 

### Create a database

So that we have something to interact with, let's create a database. (If you already have a database to play with, you can feel free to skip this part.) 

{% shell %}
1> CREATE DATABASE MyDatabase
2> GO
1>
{% endhighlight %}

sqlcmd doesn't you any feedback, but if you run `sp_databases` again, you'll see the new database you just created is in there:

{% shell %}
1> sp_databases
2> GO
DATABASE_NAME         DATABASE_SIZE  REMARKS
--------------------  -------------  --------------
master                        16834  NULL

model                          5376  NULL

msdb                          16960  NULL

MyDatabase                    16384  NULL

tempdb                        40960  NULL
{% endhighlight %}

### Switch to the database you want to use

Next, you need to tell sqlcmd which database you're using. (This is the equivalent of the dropdown in SQL Server Management Studio where you pick which DB you're querying.) 

To do this, pass the `USE` command:

{% shell %}
1> USE MyDatabase
2> GO
Changed database context to 'MyDatabase'.
{% endhighlight %}

### Create and view tables

If you don't have any data in your database, you can create a table with sqlcmd using the standard CREATE TABLE statement.

{% shell %}
1> CREATE TABLE dbo.People (
2>   Id INT IDENTITY(1,1),
3>   FirstName NVARCHAR(50),
4>   LastName NVARCHAR(50),
5>   Age INT
6> );
7> GO
1>
{% endhighlight %}

Once again, sqlcmd doesn't give you any feedback. To see the newly-created table you can use the `sp_tables` stored procedure. 

`sp_tables` will print a _lot_ of tables. I recommend filtering out the many sys tables, like so:

{% shell %}
1> EXEC sp_tables 
2> @table_owner = 'dbo';
3> GO
TABLE_QUALIFIER     TABLE_OWNER  TABLE_NAME    TABLE_TYPE  REMARKS
------------------- ------------ ------------- ----------- -------
MyDatabase          dbo          People        TABLE       NULL

(1 rows affected)
{% endhighlight %}

### Querying data

As you can see in the above examples, sqlcmd will take a line of SQL code one at a time until you run the `GO` command and press enter. You run SQL queries on the database in the same way. 

Example of an insert in sqlcmd: 

{% shell %}
1> INSERT INTO People
2> (FirstName, LastName)
3> VALUES
4> ('Bob', 'Smith'),
5> ('Mary', 'McMichaels'),
6> ('Reggie', 'Oswald');
7> GO

(3 rows affected)
{% endhighlight %}

Example of a select in sqlcmd: 

{% shell %}
1> SELECT * FROM People;
2> GO
Id    FirstName       LastName        Age
----- --------------- --------------- ---------
1     Bob             Smith                NULL
2     Mary            McMichaels           NULL
3     Reggie          Oswald               NULL

(3 rows affected)
{% endhighlight %}

## In sum

I hope this post has been a helpful guide for getting into a SQL database and taking a look at the tables and data for the SQLite command line program, sqlite3 and/or the SQL Server command line program, sqlcmd. These command line utilities can be a good way to checking databases on an environment like a server where there aren't as many tools installed. 
