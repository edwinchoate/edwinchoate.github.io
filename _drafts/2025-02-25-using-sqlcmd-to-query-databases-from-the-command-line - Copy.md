---
layout: post
title: Using sqlcmd to Query Databases from the Command Line
author: Edwin Choate
date: 2025-02-25
categories: terminal
---

When modifying or maintaining a SQL database, you'll be using a bonafide interface like SQL Server Management Studio on your system, but what if you're on another system, like a server? It might be advantageous to pop into the database from the command line for something quick. Maybe you're just trying to make sure the DB is on the system and there's data in it. 

This is where using a lower-profile command line tool might be handy. 

In this post, I will describe the basics of what you need to use `sqlcmd.exe`.

**sqlcmd** is an executable that allows you to interact with SQL Server databases from the Command Prompt without having to have a dedicated user interface installed. 

### Installing sqlcmd

There are a number of ways to get `sqlcmd` onto your Windows machine. It may be worth just trying to run the `sqlcmd -?` command from the command line just in case you already have it on your system. It comes with [SQL Server's full installation](https://www.microsoft.com/en-us/sql-server/sql-server-downloads). 

Another way to install it is to install the [Microsoft Command Line Utilities for SQL Server](https://www.microsoft.com/en-us/download/details.aspx?id=53591)

You can also install it with a package manager. 

If you have Windows Package Manager:

```terminal
C:\> winget install sqlcmd
```

If you have Chocolatey:

```terminal
C:\> choco install sqlcmd
```

### Verify it's installed 

If the `sqlcmd` command is successfully installed, you ought to be able to run the `sqlcmd -?` command in Command Prompt. If it's installed correctly, it should look something like this:

```terminal
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
```

### Launch the sqlcmd shell

In order for sqlcmd to work, the SQL Server service needs to be running. You can check it by lauching the Services app (or Run (Win+R) > services.msc). The service should be called something like _SQL Server (MSSQLSERVER)_. Its status should be _Running_. If not, right-click on the service and click _Start_. (If you've got SQL Server Configuration Manager installed on your system, you can also use that to start the service.)

Once the SQL Server service is running, to launch the sqlcmd shell, just type in the `sqlcmd` command:

```terminal
C:\> sqlcmd
1>
```

### See the databases on the system

When in the shell, you can run `sp_databases` to see the DBs on the system. Use the `GO` command to run the statement.

```terminal
1> sp_databases
2> GO
```

In this case, SQL Server is running a built-in stored procedure. (The `sp_` prefix stands for stored procedure.)

This stored procedure will list out all of the databases running on the instance of SQL Server you've got on the system, with a couple other pieces of information. 

```terminal
1> sp_databases
2> GO
DATABASE_NAME         DATABASE_SIZE  REMARKS
--------------------  -------------  --------------
master                        16834  NULL

model                          5376  NULL

msdb                          16960  NULL

tempdb                        40960  NULL
```

You may be wondering what these databases are. All of the above databases are system databases that come built into SQL Server and are actually part of SQL Server itself. (It's best not to mess with these databases to avoid the risk of breaking things.) 

### Create a database

So that we have something to interact with, let's create a database. (If you already have a database to play with, you can feel free to skip this part.) 

```terminal
1> CREATE DATABASE MyDatabase
2> GO
1>
```

sqlcmd doesn't you any feedback, but if you run `sp_databases` again, you'll see the new database you just created is in there:

```terminal
1> sp_databases
2> GO
DATABASE_NAME         DATABASE_SIZE  REMARKS
--------------------  -------------  --------------
master                        16834  NULL

model                          5376  NULL

msdb                          16960  NULL

MyDatabase                    16384  NULL

tempdb                        40960  NULL
```

### Switch to the database you want to use

Next, you need to tell sqlcmd which database you're using. (This is the equivalent of the dropdown in SQL Server Management Studio where you pick which DB you're querying.) 

To do this, pass the `USE` command:

```terminal
1> USE MyDatabase
2> GO
Changed database context to 'MyDatabase'.
```

### Create and view tables

If you don't have any data in your database, you can create a table with sqlcmd using the standard CREATE TABLE statement.

```terminal
1> CREATE TABLE dbo.People (
2>   Id INT IDENTITY(1,1),
3>   FirstName NVARCHAR(50),
4>   LastName NVARCHAR(50),
5>   Age INT
6> );
7> GO
1>
```

Once again, sqlcmd doesn't give you any feedback. To see the newly-created table you can use the `sp_tables` stored procedure. 

`sp_tables` will print a _lot_ of tables. I recommend filtering out the many sys tables, like so:

```terminal
1> EXEC sp_tables 
2> @table_owner = 'dbo';
3> GO
TABLE_QUALIFIER     TABLE_OWNER  TABLE_NAME    TABLE_TYPE  REMARKS
------------------- ------------ ------------- ----------- -------
MyDatabase          dbo          People        TABLE       NULL

(1 rows affected)
```

### Querying data

As you can see in the above examples, sqlcmd will take one line of SQL code one at a time until you run the `GO` command and press enter. You run SQL queries on the database in the same way. 

Example of an insert in sqlcmd: 

```terminal
1> INSERT INTO People
2> (FirstName, LastName)
3> VALUES
4> ('Bob', 'Smith'),
5> ('Mary', 'McMichaels'),
6> ('Reggie', 'Oswald');
7> GO

(3 rows affected)
```

Example of a select in sqlcmd: 

```terminal
1> SELECT * FROM People;
2> GO
Id    FirstName       LastName        Age
----- --------------- --------------- ---------
1     Bob             Smith                NULL
2     Mary            McMichaels           NULL
3     Reggie          Oswald               NULL

(3 rows affected)
```

I find this works best if you're on a larger monitor that has enough space to display the columns. Otherwise, the formatting can get messy. Not impossible to read, but certainly messy. 

### Exiting the sqlcmd shell

To get out of the sqlcmd shell just use the `exit` command. Also, at any point you can use the conventional `^C` (CTRL+C) shortcut to abandon the shell.

```terminal
1> exit
C:\>
```

## In sum

I hope this post has been a helpful guide for using `sqlcmd.exe` to access a SQL Server database and view its tables and data. This command line utility can be a good way to check databases on an environment like a server where there aren't as many applications installed. 
