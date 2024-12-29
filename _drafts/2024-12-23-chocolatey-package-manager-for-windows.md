---
layout: post
title: Chocolatey Package Manager for Windows
date: 2024-12-23
categories: terminal
---

You might be used to the convenience of command line package managers on Unix systems. Chocolatey brings that convenience to Windows. It's the equivalent of apt-get or Homebrew, but for Windows. It's nice to be able to install packages from Command Prompt on Windows in the same way that you can on other systems. 

## Installing Chocolatey

You should defer to the latest information on [chocolatey.org](https://chocolatey.org/) in case something changed since this writing. Their documentation is good. 

But, the general process of installing Chocolatey is: 

1.) Launch an admin-level Powershell (one way to do this is type "powershell" into the Start menu, and then Right-click -> Run as administrator)

2.) Run the command `Get-ExecutionPolicy`. It should ideally be `Bypass`

It should look like this:

```shell
PS C:\WINDOWS\system32> Get-ExecutionPolicy
Bypass
```

3.) Then, you'll run a very long powershell script that you should definitely retrieve from [chocolatey.org](https://chocolatey.org)

4.) Check to make sure chocolatey is installed correctly on your system:

```shell
> choco -v
2.4.1
```

## Check to see if a package exists

Similar to npm, chocolatey has a search command that is useful if you're not sure if the package you want exists or if you want to find the exact name of a package. 

(I recommend always using chocolatey in an admin Powershell, because it often errors out if you don't have the elevated permissions. It's conceptually similar to always typing `sudo apt-get ...` It's safe to assume you'll need the elevated permisions.)

```shell
> choco search glow
Chocolatey v2.4.1
decoration 5.5.0 [Approved]
f.lux 4.120.0 [Approved]
f.lux.install 4.134.0 [Approved] Downloads cached for licensed users
f.lux.portable 4.134.0 [Approved] Downloads cached for licensed users
glow 2.0.0 [Approved]
IndentGuides 12.1.0
sauerbraten 2013.2.3.20161112 [Approved] Downloads cached for licensed users
7 packages found.
```

## Install a package

If you run the standard `install` command with no flags, you'll usually need to answer one or more Yes/No prompts. 

```shell
> choco install glow
```

If you want to install a specific version of a package, you can do that with the `--version` flag:

```shell
> choco install glow --version 1.5.1
```

You can pass the `--yes` flag to have the system automatically say yes to all prompts 

```shell
> choco install glow --yes
```

## Uninstall a package

You guessed it

```shell
> choco uninstall glow
```

## See all packages you have installed on your system

```shell
> choco list
Chocolatey v2.4.1
chocolatey 2.4.1
glow 2.0.0
2 packages installed.
```

## Discover packages 

[community.chocolatey.org/packages](https://community.chocolatey.org/packages) is a great place to start.
