---
layout: post
title:  "Fundamentals of Vim"
date:   2024-12-23
categories: vim
---

I like using Vim for simple text editing tasks in the terminal. Once you learn enough of the commands, it becomes a nice way to edit text because it is direct keyboard input without having to leave the terminal. My goal with this post is to draw attention to the most useful Vim commands for beginners, to give the 80% of what you need to be proficient enough in Vim to perform most text-editing tasks. 

Vim stands for "Vi IMproved". It's an improved clone of Bill Joy's 1976 Vi editor. (Vi is the word "visual" abbreviated).

In this post, I'll cover how to use to Vim to...

* Create a file
* Save
* Edit a file
* Navigate a text file
* Type text
* Delete text
* Copy/paste 
* Undo/redo

## Installing Vim

Vim comes pre-installed on Mac and Linux. 

On Windows, I prefer to download Vim from [www.vim.org](https://www.vim.org/download.php). To get it to work in Command Prompt, you need to add the path to the Vim exe file to your `PATH` environmental variable.

## What makes Vim useful? 

Vim isn't for every text-editing task (in my opinion), but there are times when it really comes in handy. Vi has been around since 1976 and is still used today. I'd chalk this staying power up to three main reasons: 

1. _You never have to leave the terminal_ - This is the reason why I'm most inclined to use it. If I'm doing something on the command line and all I want to do is pop into a file, edit one line of code, and save and close the file, Vim is my first thought because it makes this possible without ever having to take your fingers off of the keyboard. Then you can get right back to what you were doing on the command line.
2. _Ubiguity_ - Vim comes pre-installed on Mac and Linux, and it comes bundled with tools like Git and Cygwin. There's a Vim mode in most IDEs as well.
3. _Lightweight_ - Since you're running everything in the terminal, and there's no UI client to install, you can use Vim even in environments where you ordinarily can't access IDEs such as a Linux server. 

## But first, modes

You've got to understand Vim's modes before things start making sense. In Vim, there are three modes to know about: 

* _Command Mode_ - In this mode, the keys you type do not input the literal value of the key. Instead, the keys you type execute commands, like "save and quit this file" or "move the cursor up one line". 
* _Insert Mode_ - In this mode, the keys you type are literal and they input text into the file. If you type a 'H' it will insert a capital h into the file.
* _Visual Mode_ - In this mode, you can use the keyboard to select text, like how you'd select text with the mouse when clicking and dragging over text in a Word document. This is useful for selecting text to copy/paste it.

When you lauch Vim, it starts out in Command Mode.

Here's how you switch between the different modes: 

* Press `esc` to go into Command Mode
* While in Command Mode, press `i` to go into Insert Mode
* While in Command Mode, press `v` to go into Visual Mode

To tell which mode you're currently in, look at the bottom, lefthand corner of the terminal.

* If it's blank or says something like: `"filename.txt" 5L, 27B`, you're in Command Mode
* If you're in Insert Mode, it'll say `-- INSERT --` in the corner
* If you're in Visual Mode, it'll say `-- VISUAL --` in the corner

## Create, open, save, and close a file

Not only can you use Vim to edit files, you can also use it to create new ones. 

From the command line, type:

```shell
$ vim file.txt
```

The command above will do one of two things: 

1. If there's already a file called `file.txt` in the current directory, Vim will open that file for editing.
2. If `file.txt` does not exist in the current directory, Vim will create a new file, name it "file.txt" (or whatever you pass in), and open the new, blank file for editing. 

Once Vim opens the file, you'll be in Command Mode. 

To exit the file, you'll pass a command. 

You'll start by typing `:` while in Command Mode. Take a look in the bottom, lefthand corner of the screen and you'll see the `:` you typed. Then, type the command. To execute the command, press enter. 

> **Note:** There are two kinds of commands:
> 
> 1.) The commands that start with a `:` require you to type the `:`, followed by the command, and then press enter. 
>
> 2.) The commands that _don't_ start with a `:` will execute without you having to press enter.

> **Note:** Commands are case-sensitive

Here are the different options to exit a file:

```
:q   - Exit a file that doesn't have any changes
:q!  - Exit a file without saving
:wq  - Save and exit file

:w   - Save the file (without exiting)
```

`q` stands for "quit" and `w` stands for "write", which in this case means writing to disk.

## Navigating a file via the keyboard

Vim accomplishes everything via the keyboard, including navigating your cursor around in the file. 

To move your cursor around in a file, you can use the arrow keys, or you can use `h`, `j`, `k`, `l`.

```
h   - move cursor left
j   - move cursor down
k   - move cursor up
l   - move cursor right
```

(I will say, I usually like scrolling vertically through files with my mouse's scroll wheel, because it's fast.)

In Command Mode, you can generally type in a number followed by a command to execute that command N times. Ex: `30h` will move your cursor to the left 30 times.

Navigating with the `h`, `j`, `k`, and `l` keys can be a bit slow. There's also a way to go forward one word at a time (as opposed to one character at a time).

```
w   - advance cursor by one word
b   - make cursor go back one word 
```

There's also commands that will jump you to the very beginning or very end of the file:

```
gg  - move cursor to the beginning of the file
:$  - move cursor to the end of the file
```

## Typing text

The simplest way to type in a file is to use Command Mode to position your cursor near where you want to type and then press `i` to enter Insert Mode. Once you're in Insert Mode, you can start typing just like you had a notepad window open. 

There are a few different ways to launch Insert Mode:

```
i   - switch to Insert Mode where your cursor is right now
I   - move the cursor to the beginning of the current line and switch to Insert Mode
A   - move the cursor to the end of the current line and switch to Insert Mode ('A' stands for "append")
o   - create an additional newline after the current line, move the cursor there, and switch to Insert Mode
O   - create an additional newline before the current line, move the cursor there, and switch to Insert Mode
```

In addition to adding text, it is useful to know how to delete text. 

```
x   - delete a single character, where your cursor is
dd  - delete the whole line where your cursor is
```

All of the above are commands, so you must be in Command Mode in order to execute them. 

## Undo and redo

Undo and redo are commands, so you need to be in Command Mode to use them. 

```
u   - Undo one action
^r  - Redo one action
```

(`^r` means CTRL+R.)

Vim will helpfully print a message like `Already at oldest change` at the bottom of the terminal when you hit the limits of the history.

## Copy/Paste

Copy/paste is where Visual Mode comes in. Visual Mode gives you a highlighter that allows you to select text to copy, similar to how you'd select text to copy it in most applications. 

```
v    - enter Visual Mode (for selecting text)
y    - copy selection ('y' stands for "yank")
p    - paste at current cursor position

"*y  - copy selection to the system clipboard
"*p  - paste from the system clipboard at current cursor position
```

To copy text: 

1. Position your cursor where you want to select text
2. Launch Visual Mode by pressing `v` while in Command Mode.
3. Use the arrow keys to select the text you want to copy. Press down to expand the selection downward a line, up arrow to expand upward.
4. Press `y` to copy. You'll see at the bottom line of the terminal it'll say something like `5 lines yanked`

To paste: 

1. Position your cursor where you want to paste
2. Press `p`

> **Note:** Vim has its own clipboard that's separate from the system clipboard. The `y` and `p` commands only work inside of Vim. To use the system clipboard, you use the register commands, `"*y` and `"*p`.

## Settings 

You can customize the settings of your installation of Vim using a file named `.vimrc`. This is a nice opportunity to practice your Vim editing, as the file is a simple text-based config file. 

You need to create a file named `.vimrc` and place it in your root directory (ex: `C:\Users\Username\`). Each line of the file is an individual setting, represented as a command with arguments. 

These are the settings I like to use in my config file: 

```
set belloff=all
syntax on
set autoindent
set expandtab
set tabstop=4
set shiftwidth=4
```

`belloff` turns off the system bell sound. The `syntax` setting turns on color syntax highlighting for most programming languages, which I like a lot. The other four settings make it to where I can use the tab key for indentation when writing code and each tab is equivalent to 4 spaces.

## In sum

Vim is a useful skill to know, because it allows you to write code on any unix machine without having to think twice about what's installed on that machine, and you find yourself prepared if the IDE you're using suddenly launches something in its Vim mode. Below, I've listed all of the commands from this post in one consolidated cheatsheet. 

Happy Vim-ing!

```
VIM CHEATSHEET
---

:q   - Exit a file that doesn't have any changes
:w   - Save the file (without exiting)
:wq  - Save and exit file
:q!  - Exit a file without saving

h    - move cursor left
j    - move cursor down
k    - move cursor up
l    - move cursor right

w    - advance cursor by one word
b    - make cursor go back one word 
gg   - move cursor to the beginning of the file
:$   - move cursor to the end of the file

i    - switch to Insert Mode where your cursor is right now
I    - move the cursor to the beginning of the current line and switch to Insert Mode
A    - move the cursor to the end of the current line and switch to Insert Mode ('A' stands for "append")
o    - create an additional newline after the current line, move the cursor there, and switch to Insert Mode
O    - create an additional newline before the current line, move the cursor there, and switch to Insert Mode

x    - delete a single character, where your cursor is
dd   - delete the whole line where your cursor is

u    - Undo one action
^r   - Redo one action

v    - enter Visual Mode (for selecting text)
y    - copy selection ('y' stands for "yank")
p    - paste at current cursor position
"*y  - copy selection to the system clipboard
"*p  - paste from the system clipboard at current cursor position
```
