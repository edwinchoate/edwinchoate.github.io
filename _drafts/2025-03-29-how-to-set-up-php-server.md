---
layout: post
title: How to Set Up a PHP + Apache Web Server on Windows
author: Edwin Choate
date: 2025-03-29
categories: php
---

I've been messing around with Apache on Windows, and I've found it to be remarkably configurable. That appears to be one of its strengths. In this post, I'll list out several tips for things that can be useful when setting up Apache. 

**Note:** Everything I write in this post is geared toward installing these tools on Windows, not Linux. (Most documentation for these tools is written for Linux.)

## Things to Know About PHP

* The _conventional_ installation folder for PHP on a Windows computer is `C:\php\`. 
* PHP has _extensions_ that are distributed as DLL files, found in the `ext\` directory (e.g. `C:\php\ext\php_mysqli.dll`).
* There is an Apache DLL included with PHP. This module is called `php8apache2_4.dll` and is located in the root directory (e.g. `C:\php\php8apache2_4.dll`).
* The php config file is `php.ini` and it's located in the root directory (e.g. `C:\php\php.ini`).

## Things to Know About Apache

* The _conventional_ installation folder for Apache on a Windows computer is `C:\Apache24\` (where "24" means Apache version 2.4).
* Apache doesn't distribute builds on their site. They just provide source code. A community of volunteers do the builds and distributions. This means you'll find yourself going to 3rd party sites for installation at times. 
* Apache has _modules_ which are located in the `modules\` directory (e.g. `C:\Apache24\modules\mod_rewrite.so`).
* Apache has helpful built-in logs (e.g. `C:\Apache24\logs\error.log`).
* The name of the web server is `httpd`. Check out the subsite dedicated to just httpd, [httpd.apache.org](https://httpd.apache.org/).
* The Apache config file on Windows is `http.conf` and it's located in the `conf\` directory (e.g. `C:\Apache24\conf\http.conf`).
* The root of the web files (the equivalent of your `varwww` directory) in Apache is `htdocs` (e.g. `C:\Apache24\htdocs\`). This is the root of where you put the actual website files.

## Manually installing PHP on Windows

[php.net](https://www.php.net/) is the offical site for PHP. 

Here, I'll cover what it takes to _manually_ install PHP on Windows. 

First, verify that **Microsoft Visual C++ 2015-2022 Redistributable** is installed on the system. (It probably is.) It's listed in _Apps and Features_ in the Settings app. If you don't have it already, you can [get it from Microsoft](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist).

Next, download the PHP binaries as a zip file from [windows.php.net/download](https://windows.php.net/download/). You want the _Thread Safe_ version. This is the version designed to function with Apache.

Extract the zip file, and place the extracted files somewhere on the system. The conventional place to install PHP on Windows is `C:\php\`. Whereever you decide to put it, remember this path as you'll use it many times in later steps. 

Next, add the path to the binaries to the _Path_ environmental variable. Since the executables (like `php.exe`) sit in the root directory, you just add that root directory to Path. For example, if you've put all the PHP files in `C:\php\` (such that `php.exe` is located at `C:\php\php.exe`) then, you'd put `C:\php` in the Path environmental variable.

(If you don't know how to edit environmental variables on Windows, go and learn that and come back to this article. This is a useful skill for any time you manually install programs on Windows.)

## Manually installing Apache on Windows 

The Apache Web Server is called `httpd`, and the official subsite for it is [httpd.apache.org](https://httpd.apache.org/).

This article on the official Apache site is particularly relevant when installing on Windows: [httpd.apache.org/docs/current/platform/windows](https://httpd.apache.org/docs/current/platform/windows.html)

Apache does not host binary files on apache.org. Instead, you'll need to use a third-party mirror site to download them. 

Apache recommends a few third parties where you can get the binaries... I'd recommend using the first one on their list, Apache Lounge. 

Go to [apachelounge.com/download](https://www.apachelounge.com/download/). Download either the Win64 or Win32 zip file, based on which one fits your system.

Extract the zip file, and place the extracted files somewhere on the system. The conventional place to install Apache on Windows is `C:\Apache24\`. (The 24 means you're installing version 2.4, so if you're installing another version that number should be different.)

Lastly, you'll add the path to the Apache binaries to the Path environmental variable. You need to include the `bin\` folder in the path. So, if you placed the files under `C:\Apache24\` on the system, the path you'll add to Path will be `C:\Apache24\bin`.

(Again, if you don't know how to edit environmental variables on Windows, go and learn that and come back to this article.)

## Test for Successful Installations

If you've installed the tools correctly, you can check this easily in the terminal. 

To test for a successful installation of PHP, launch a terminal and use this command: 

```
C:\> php -v
```

If you've installed it correctly, you should see something like this: 

```
C:\> php -v
PHP 8.4.5 (cli) (built: Mar 12 2025 12:19:37) (ZTS Visual C++ 2022 x64)
Copyright (c) The PHP Group
Zend Engine v4.4.5, Copyright (c) Zend Technologies
```

To test for a successful installation of Apache, launch a terminal and use this command: 

```
C:\> httpd -v
```

If you've installed it correctly, you should see something like this: 

```
C:\> httpd -v
Server version: Apache/2.4.63 (Win64)
Apache Lounge VS17 Server built:   Feb  3 2025 10:10:51
```

## Installing Apache as a Windows Service (Optional)

You can optionally use `httpd.exe` to install Apache as a Windows Service. To do this, first launch an administrator-level command prompt and then run this command: 

```
C:\WINDOWS\system32> httpd -k install -n "Apache2.4"
```

The string you pass to the `-n` flag sets the name you see in Services. If successful, it should look like this: 

```
C:\WINDOWS\system32> httpd -k install -n "Apache2.4"
Installing the 'Apache2.4' service
The 'Apache2.4' service is successfully installed.
```

You can use `uninstall` as well if you need to remove the service: 

```
C:\WINDOWS\system32> httpd -k uninstall -n "Apache2.4"
Removing the 'Apache2.4' service
The 'Apache2.4' service has been removed successfully.
```

Now, you can use the Services UI to Start, Restart, Pause, and Stop the service like any other Windows Service.

## Configuring PHP with php.ini

There might not yet be a `php.ini` file included with your PHP files by default. You might only see two files, `php.ini-production` and `php.ini-development`. These files are essentially templates that you can use. You simply copy whichever you'd like to use, and rename the copied file to `php.ini`. 

In the `php.ini` file, semicolons are used for line comments. To uncomment a line, just remove the semicolon from the beginning of that line to "turn on" that feature.

First, you're going to turn on the Apache features of PHP. Go into `php.ini` and uncomment the line that reads `engine = On`. 

```ini
; Enable the PHP scripting language engine under Apache.
; https://php.net/engine
engine = On
```

Next, you're going to set the Extension directory. Extensions are like apps or add-ons that extend PHP's functionality. To do this, enable & set the `extension_dir` in `php.ini`:

```ini
; Directory in which the loadable extensions (modules) reside.
; https://php.net/extension-dir
;extension_dir = "./"
; On windows:
extension_dir = "c:/php/ext"
```

Now that you've got the `extension_dir` set, you can enable some extensions.

(If you didn't install PHP in the conventional location `C:\php\`, you'll need to edit the value to make the paths match.)

For performance reasons, the official PHP site says it's "highly recommended" to enable a feature called **OpCache**. OpCache is an extension, `ext\php_opcache.dll`.

All you need to do to enable OpCache is uncomment these two lines in `php.ini` and set them to `On`.

```ini
[opcache]
; Determines if Zend OPCache is enabled
opcache.enable = On

; Determines if Zend OPCache is enabled for the CLI version of PHP
opcache.enable_cli = On
```

Lastly, if you want to use a database, you'll want to enable the extension for the database of your choice. In the example below, I'll describe how to do this for a MySQL database.

**mysqli** is a PHP extension for MySQL. It should already be included with your PHP files, located here: `ext\php_mysqli.dll`.

All you need to do to enable the `mysqli` extension is uncomment a line that's already in `php.ini`:

```ini
;extension=mbstring
;extension=exif
extension=mysqli
;extension=odbc
;extension=openssl
```

## Configuring Apache with http.conf

The main Apache configuration file is called `http.conf` and is located under `Apache24\conf\`. 

In its syntax, `http.conf` uses a `#` character for line comments. 

First, make sure the `SRVROOT` variable is set correctly. It should be pointed to the root directory of where you installed the Apache files. If you used the conventional `C:\Apache24\` location, then set `SRVROOT` to `"c:/Apache24"`.

```conf
# Do not add a slash at the end of the directory path.  If you point
# ServerRoot at a non-local disk, be sure to specify a local disk on the
# Mutex directive, if file-based mutexes are used.  If you wish to share the
# same ServerRoot for multiple httpd daemons, you will need to change at
# least PidFile.
#
Define SRVROOT "c:/Apache24"
```

Next, enable PHP on the Apache server. 

Below, I'm using the "handler" method, but in case you're curious, there are a couple other options as well (described in this document [php.net/manual/en/install.windows.apache2](https://www.php.net/manual/en/install.windows.apache2.php)).

In `http.conf`, uncomment and enable the following: 

```conf
# To load the PHP module for Apache 2.x, the following lines in the 
# Apache httpd.conf configuration file must be inserted: 
#
# before PHP 8.0.0 the name of the module was php7_module
LoadModule php_module "c:/php/php8apache2_4.dll"
<FilesMatch \.php$>
    SetHandler application/x-httpd-php
</FilesMatch>
# configure the path to php.ini
PHPIniDir "C:/php"
```

Make sure the `PHPIniDir` path and the path to `php8apache2_4.dll` match the paths on your system. 

Also, take note of the version of PHP and Apache you're using. If you're not using PHP 8 and/or Apache 2.4, then update the numbers accordingly.

## Using a .htaccess File

If you're serving up a PHP site and you want to make the homepage file `index.php` rather than `index.html`, then a solution to this is to have requests made to the domain redirect to `index.php`. 

One way to do this is by using a `.htaccess` file. 

To turn on the ability to use a `.htaccess` file in Apache, go into `http.conf` and set `AllowOverride` to `All`.

**Note:** there are multiple instances of `AllowOverride`. You want to find the `<Directory>` tag that specifically mentions `htdocs` (i.e. `<Directory "${SRVROOT}/htdocs">`). This is the one you should use.

```conf
# DocumentRoot: The directory out of which you will serve your
# documents. By default, all requests are taken from this directory, but
# symbolic links and aliases may be used to point to other locations.
#
DocumentRoot "${SRVROOT}/htdocs"
<Directory "${SRVROOT}/htdocs">
    #
    # AllowOverride controls what directives may be placed in .htaccess files.
    # It can be "All", "None", or any combination of the keywords:
    #   AllowOverride FileInfo AuthConfig Limit
    #
    AllowOverride All

</Directory>
```

Next, still in `http.conf`, you need to enable the Rewrite module, `modules\mod_rewrite.so`. (This module should already be included with Apache.)

There should already be a section with all the modules in there, commented out. Remove the `#` to uncomment the line containing `mod_rewrite` to enable the Apache module.

```conf
#LoadModule request_module modules/mod_request.so
#LoadModule reqtimeout_module modules/mod_reqtimeout.so
LoadModule rewrite_module modules/mod_rewrite.so
#LoadModule sed_module modules/mod_sed.so
#LoadModule session_module modules/mod_session.so
```

Lastly, the `.htaccess` file itself. Place a file named exactly that, ".htaccess", in the `htdocs\` directory of the server. 

In the `.htaccess` file, you can use a rule like I've got below to tell the system to redirect empty requests (requests to `/`) to `/index.php`. 

```
RewriteEngine On
RewriteRule ^$ /index.php [L,R=301]
```

A couple notes on the above:

* `R=301` means redirect with a `301` status code
* `^$` is essential an empty regex, which corresponds to nothing after the domain in the request.

## Using Environmental Variables

Sometimes, you want to reference environmental variables instead of putting values straight into the code. For instance, if you've got the password to a database, you don't want to put the password in your PHP files for security reasons. 

You can use environmental variables that live at the Apache/server level. 

First, define the variable and its value in the `http.conf` file. 

Example: 

```conf
SetEnv DB_PASSWORD 12345
PassEnv DB_PASSWORD
```

`SetEnv` actually creates the var and sets it to a value, whereas `PassEnv` is what makes it available in your PHP.

In your PHP code, you can access env vars by using the `getenv()` function, like so:

```php
$password = getenv("DB_PASSWORD");
// 12345... amazing! I've got the same combination on my luggage!
```

## Test the Server

Now (hopefully), for the fun part! It's time to test and make sure the server works properly. 

If you didn't install Apache as a Windows Service, you can run the server from the terminal. To do this, run the `httpd` command. 

(If you did install Apache as a Windows Service, you can just make sure the service is running in Services.msc.)

```
C:\> httpd
```

When you're running `httpd`, no news is good news. If you don't get any feedback in the terminal, that's a good sign.

This should run the site on `localhost:80`. Navigate your browser to `localhost`. By default, there should be a webpage in there that should display an H1, **It works!**, on the page.

(If something else on your system is using Port 80, you can edit the port in `http.conf`.)

Next, test some PHP. Add an `index.php` page to `htdocs`. Put some PHP on the page and navigate to `localhost/index.php` in the browser to test it out.

There's a cool info page that comes with PHP that you can use as a test:

```php
// in index.php
<?php
    phpinfo();
?>
```

## In sum

I hope you've found this post useful for setting up a web server using Apache and PHP on a Windows computer. 

Apache has been around since 1999 and PHP is one of the most widely-used server side web scripting languages running websites on the internet today. I for one think that PHP is underrated. Just because it doesn't have the "cool factor" of flash-in-the-pan tools like last week's JavaScript framework, doesn't mean it isn't a useful tool still today. I am looking forward to playing around with PHP myself, to build simple, low-maintenance applications with low overhead.