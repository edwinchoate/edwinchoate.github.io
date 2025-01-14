---
layout: post
title: A Guide to Git on the Command Line
author: Edwin Choate
date: 2025-01-14
categories: git
---

Git is a distributed version control system developed by Linus Torvalds, creator of Linux, in 2005. Most IDEs have a Git interface built-in that allows you use Git without passing commands, but I find it handy to know the command-line version of Git so that you can do work on any system without having to worry about what's installed on that system. 

## What's version control? 

In the simplest sense, version control systems are automated systems that allow multiple developers to work on the same set of files and ultimately reconcile all of the edits into a single (merged) outcome. 

There are a few key concepts to know when you're working with any version control system: 

1. _Branches_ - You can think of a branch as a line of thought. Maybe you have an idea and you're not sure if you think it'll work out so you create a "my-crazy-idea" branch. This creates a copy of all the code in the codebase for you to tinker with in its own space, the branch. Once you're done with a branch, it comes time to merge it back to...
2. _The main branch_ - There's always a main branch that serves as the ultimate source of what the codebase is right now. Mixed metaphors for sure, but you might think of the main branch as the trunk of the tree. Everything comes back to it eventually. Historically, Git used the name `master` by default for this, but for reasons of political correctness, the convention is now to call it `main`. 
    * (You don't necessarily need to always merge everything back to the main branch. In fact, there are various "branching strategies" that involve specific ways of working, but that's beyond the subject of this post.) 
3. _Commits_ - When it comes time for you to say that the code changes you've recently made are what you want to go forward with, you `commit` those changes to the version control system. This is where the real power of version control comes in, the system automatically tracks all of the deltas from commit to commit and it knows what's changed over time. 
4. _Local vs. Remote_ - When working with a Git repository, there is a copy of the code on your computer and there is a copy of the code on some server somewhere. The former is called _local_ and the latter is called _remote_. You write code on your computer and then sychronize that code with the remote, which all of the other developers are also doing. The remote is the "single source of truth" if you will. 
5. _Push and pull_ - When it comes time for you to copy your commits from your local copy to the remote, you `push` your commits to the remote. When you want to receive the changes that have happened recently to the remote, you `pull` those commits to your local. 
6. _Merging_ - When it's time to reconcile the changes between your code and the remote, Git might start asking you questions. It might start asking you a _lot_ of questions. Merging is the process of reconciling all of the differences between your code and the remote code and telling the system what the go-forward code should be. This can get tedious if there are a lot of overlapping changes. 

Version control can get complex. I won't get into much more detail about the core concepts of version control in this post. If you're new to version control, it might be best to read up on it before reading the rest of this post. 

## Installing Git CLI

On Windows, you can install Git by going to [git-scm.com/downloads](https://git-scm.com/downloads/win) and running the installer.

On Mac, Git comes bundled with the xcode CLI developer tools. The easiest way to launch this installer is just to open Terminal and run one of the commands in the tools (in this case just try to run `git`). If the tools aren't installed, Mac will launch an installer dialog and you can go from there. 

On Linux, if Git isn't already installed, you can install it with the package manager for you distribution. Ex: `sudo apt-get install git`. 

## Setting up your Git config

There are two levels of configuration that you can apply in Git. First is the local, repository level. To configure how Git works for one specific repository, you can use the `git config` command. The second level is "global", system-wide. When you make changes to the global Git config, that affects every repository that you interact with on that system. To make changes to the global config, you again use the `git config` command with the `--global` flag. 

Speaking of the global Git config, there are a few global settings that you need to set up when you're setting up a system. First you need to set `user.email` and `user.name`. This acts as your identity. As you make code commits and interact with the repository, your name is attached to those commits. 

Use the config command with the `--global` flag to set your `user.email`. 

```shell
$ git config --global user.email "john@example.com"
```

Use the config command with the `--global` flag to set your `user.name`. User.name is supposed to be your full name.

```shell
$ git config --global user.name "John Smith"
```

I recommend you set the setting `init.defaultBranch` to the value `main`. What this does is, whenever you initialize new repositories, the first branch is named "main". If you don't set this default, it isn't the end of the world, but what ends up happening is you end up in situations where your local repository is using a branch named "master" (the old convention) and your remote respository (say, a repo on GitHub for instance) is using a branch called "main". When you have a scenario like this when the branch name doesn't match, it gets a little more confusing to newcomers to the project and the syntax for certain Git commands becomes less convenient (you have to type out the fully-qualified branch names.) If you just set init.defaultBranch to "main", you don't have to worry about this scenario coming up for any of the repositories you initialize on your system going forward. 

```shell
$ git config --global init.defaultBranch main
```

You can use the `--list` flag to list out all of the values you've set in the config so far. I'd recommend giving this a once-over to make sure everything got in the config correctly. 

```shell
$ git config --global --list
user.email=john@example.com
user.name=John Smith
init.defaultbranch=main
```

## Starting a new repository

To start a new repo on your system, you first need to create the directory that you want to be your main project directory and cd into it. 

```shell
$ mkdir my-first-git-repo
$ cd my-first-git-repo
```

Notice that if you run `git status`, Git will tell you there isn't a repository in here yet.

```shell
$ git status
fatal: not a git repository (or any of the parent directories): .git
```

So let's make one! Use the `git init` command to initialize the repository.

```shell
$ git init
Initialized empty Git repository in /Users/echoate/Code/my-first-git-repo/.git/
```

Once the repository is initialized, you'll notice a hidden directory, `.git/`, was created. These are the hidden files where Git records its information. Don't mess with these files; they're meant to be only used by Git. 

```shell
$ ls -a
.	..	.git
```

If you take a look inside the `.git/` directory, you can see a few files. You don't need to worry about these files, but these files were created when you ran the `init` command. 

```shell
$ ls .git
HEAD		config		description	hooks		info		objects		refs
```

Now that you've initialized the repository, if you run `git status` again, you'll find that it now gives you a status message, "No commits yet". This means you've got a brand-new repository and nothing has been done yet. No changes have been made.

```shell
$ git status
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

## Making your first commit

Start by creating an empty text file, _hello.txt_. (You don't have to use the `touch` command, but it is a convenient way to create a blank file if you're on a Unix-based system.)

```shell
$ touch hello.txt
```

Now that you have an empty text file, let's see if Git picks up on it. If you run `git status`, you'll see that Git found an "Untracked file", hello.txt. _Untracked file_ means that the file hasn't yet been included in Git's tracking. In other words, you haven't yet told Git to keep track of changes happening to that file.

```shell
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	hello.txt

nothing added to commit but untracked files present (use "git add" to track)
```

To have Git start keeping track of changes made to hello.txt, you'll use the `add` command to add it your tracked files. Another way to think about the `add` command is that it adds the file(s) to "Staging".

```shell
$ git add hello.txt
```

Now that you've added hello.txt to _staging_, if you run `git status` again, you'll see it says "Changes to be committed" and "use 'git rm... to unstage". In Git, there's two steps to making a commit. First, you _stage_ files. You don't have to stage all the files of a commit all at once either. You can run `git add` several times if you'd like and Git will group all of those files all together, as "Staged". You can think of staged files as a group of files ready to be commited.

```shell
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   hello.txt
```

`git status` still tells us there's "No commits yet". So, let's do the first commit! To commit all of the staged changes, you use the `git commit` command. Every commit requires an accompanying message (known as the commit message). You _can_ use just `git commit` by itself with no other command line arguments if you'd like, but you'll have to compose the commit message using Vim. (Git will lauch Vim in your terminal.) If you know Vim, you can just write the message, save, and close it and Git will take that. If you _don't_ know Vim, my blog post, _Fundamentals of Vim_, will teach you everything you need to know and more to write your commit messages in Vim. 

If you don't want to launch Vim, you can simply pass a string (in double quotes) after a `-m` flag to write your commit message inline alongside the `git commit` command.

```shell
$ git commit -m "My first commit!"
```

Once you've made your commit, you will now have something to look at in the commit _log_. If you run `git log`, you'll see the commit message you just wrote as well as some metadata on the commit you just made. 

```shell
$ git log
commit bfe7717f233423fcdaef5e6678462352888e8be1 (HEAD -> main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    My first commit!
```

## Making edits to tracked files

Now that you've made a commit, the repository is back to a fresh state. If you `git status` again, it reassures you that there's "nothing to commit, working tree clean". So, let's see what happens when we make more changes to hello.txt. 

```shell
$ git status
On branch main
nothing to commit, working tree clean
```

Open hello.txt and add some text into it. Write whatever you'd like and save it.

```shell
$ vim hello.txt
```

```shell
Hello, Git!
~
~
~
```

Now if you run `git status` again, you'll see it looks similar to before when you had just added the hello.txt file, except this time it says "Changes not staged for commit". Notice that it no longer says "Untracked file". _Hello.txt_ is now considered a tracked file. Now that it's being tracked, you've got new options. In addition to staging the changes to the file for a new commit, you can also use the `restore` command to essentially undo all of the changes to hello.txt that have occurred since the last commit (in this case, everything that you wrote in the file). The option to restore is added once a file is being tracked. 

You'll also notice that the is specifically says hello.txt has been modified.

```shell
$ git status
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   hello.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

`diff` is a handy command in Git. If you run `git diff`, Git will show you all of the changes that have been made since your last commit. In this case, it shows that I added one line of text to the file. 

```shell
$ git diff
diff --git a/hello.txt b/hello.txt
index e69de29..670a245 100644
--- a/hello.txt
+++ b/hello.txt
@@ -0,0 +1 @@
+Hello, Git!
```

Running `git add` at this point will take the already-tracked file, hello.txt, and stage the changes (one line of text added).

```shell
$ git add hello.txt
```

Notice `git status` now says "Changes to be committed" again. 

```shell
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   hello.txt
```

This time when you run `git commit`, you'll see it says "1 file changed, 1 insertion(+)". In this case, the 1 insertion is a line (as opposed to a character).

```shell
$ git commit -m "edits hello.txt"
[main 5a42764] edits hello.txt
 1 file changed, 1 insertion(+)
```

Now that there's a second commit, running `git log` again will show _both_ of the commits that have been made so far. Notice that there's an indicator `(HEAD -> main)` next to the latest commit. This indicator is essentially a You Are Here arrow. It means that the local repository (which is the only repository that exists so far) is currently on the _main_ branch and is up-to-date with the commit you just made. 

```shell
$ git log
commit 5a427648c7e52ffd5bd152d95c64d87a0e9c0866 (HEAD -> main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt

commit bfe7717f233423fcdaef5e6678462352888e8be1
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    My first commit!
```

Once again, running `git status` after having just made a commit shows that the code is in a fresh state and there are no changes that have been made.

```shell
$ git status
On branch main
nothing to commit, working tree clean
```

## Linking your local repository to a remote repository

In order to have a copy of the code that you and all other developers can contribute to, you'll set up a _remote_. Git expects you to give it a URL that points to a Git repository when you create the remote. I'm not sure if naming the remote "origin" is strictly required, but it is at the very least highly conventional to name the remote repository "origin". "Origin" means the place from which all others with clone the repository in the future and from a collaborative standpoint, it is the source of truth between all of the developers on the project.

To create and link the remote repo, you use the `git remote add` command and pass the name, `origin`, and the URL to the repository. The example shown is a GitHub repository but you don't have to use GitHub. You could use any service that support Git repositories.

```shell
$ git remote add origin https://github.com/example/my-first-git-repo.git
```

If you run `git status` after adding the remote, you might expect for it to mention the remote repository, and yet it doesn't. This is because there's one more step, setting the upstream branch that corresponds to your local branch, main.

```shell
$ git status
On branch main
nothing to commit, working tree clean
```

At this point there are commits that can be pushed to this brand new remote repository. You can accomplish multiple things in one command here. `git push` will push the two commits to the remote repository. In addition, you can use the `--set-upstream` flag to create a link between your local branch (main) and the remote repository's branch (main). Passing `--set-upstream` is like saying, "Hey Git, I want you to treat my local 'main' branch as the sibling to the GitHub repo's 'main' branch going forward." Lastly, when running `git push` you need to specify the remote (origin) and the branch (main) you want to push to. 

`--set-upstream` will make it to where in future commits, you no longer need to type `origin main` explicitly anymore, but for this first push you do need to be explicit.

```shell
$ git push --set-upstream origin main
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (6/6), 438 bytes | 438.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/example/my-first-git-repo.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

If the push is successful, you will see a number of stats showing what happened. Notice that there wasn't a branch called main in the remote repository yet (I hadn't created one). The action of pushing to main created the main branch. 

Now that there is a remote repository connected to your local git repository, when you run `git status` you will now get status information about the remote as well. Notice it now says "Your branch is up to date with origin/main".

```shell
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

Also notice that there is now a pointer to `origin/main` when you run `git log`.

```shell
$ git log
commit 5a427648c7e52ffd5bd152d95c64d87a0e9c0866 (HEAD -> main, origin/main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt

commit bfe7717f233423fcdaef5e6678462352888e8be1
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    My first commit!
```

## Making changes beyond what's in the remote repository

So what happens when you make changes that are "ahead" of the remote repository? 

Start by making some artibratry changes to hello.txt.

```shell
$ vim hello.txt
```

```shell
Hello, Git!

The quick brown fox jumps over the lazy dog.
~
~
~
```

As a shortcut you can pass `.` to `git add` and that effectively means _git add all changes_.

```shell
$ git add .
```

Make another commit.

```shell
$ git commit -m "edits hello.txt again"
```

Now, you've got a commit that's ahead of what's in the remote repository. If you run `git log` again, you'll see that the pointer to your local code `(HEAD -> main)` is at the latest commit whereas the pointer for the remote `(origin/main)` is back at the previous commit. 

```shell
$ git log
commit cb5f7da3c2a78b00df3289de245856ebd3ea5b4a (HEAD -> main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt again

commit 5a427648c7e52ffd5bd152d95c64d87a0e9c0866 (origin/main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt

commit bfe7717f233423fcdaef5e6678462352888e8be1
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    My first commit!
```

If you run `git status` again, it'll spell this out even more clearly, "Your branch is ahead of 'origin/main' by 1 commit."

```shell
$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

## Pushing changes to the remote repository

Since you've made a new commit that the remote repository does not have, you now have code that you can push. Just as you did before you use `git push` to push code to from your local repository to the remote repository. 

If you'd like, you can use the fully-named `git push origin main` command.

```shell
$ git push origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 307 bytes | 307.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/example/my-first-git-repo.git
   5a42764..cb5f7da  main -> main
```

Or, if you've previously pushed code while also passing the `--set-upstream` flag, Git will remember your choice and you can just type the much shorter `git push` command by itself.

```shell
$ git push
```

Once you've pushed the commit to the remote respository, you'll notice the `(origin/main)` pointer has been moved to the latest commit.

```shell
commit cb5f7da3c2a78b00df3289de245856ebd3ea5b4a (HEAD -> main, origin/main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt again

commit 5a427648c7e52ffd5bd152d95c64d87a0e9c0866
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt

commit bfe7717f233423fcdaef5e6678462352888e8be1
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    My first commit!
```

## Pulling changes from the remote repository 

The opposite of pushing code is, naturally, pull. You use the `git pull` command to pull the latest commits from remote repository's version of the branch you're currently on (in this case, origin/main). If there's nothing new to pull, it'll say "Already up to date." 

```shell
$ git pull
Already up to date.
```

One thing to note about pull: when you run the `git pull` command, Git will apply (or attempt to apply) all of the changes to the code as represented by those new commits you're pulling. Sometimes, you aren't quite ready to do that yet. (Maybe, you've got some code changes on your local branch that you still want to wrap up.) This is where `git fetch` comes in. Fetch is like pull minus applying the actual code changes. You use fetch when you want to check to see if there have been any new commits in the remote repository, but you're not ready to actually pull them quite yet.

```shell
$ git fetch
```

## Create a new branch

So far, everything's been happening on the `main` branch, in both the local repo and the remote repo, but you can have as many branches as you want.

You use the `git branch` command to check the local branches on your system. Right now, there's only one local branch, main.

```shell
$ git branch
* main
```

To create a new branch, you pass a branch name to the `git branch` command.

```shell
$ git branch my-new-branch
```

When you look at the list of branches, the one with the asterisk next to it is the branch that you've currently got checked out. 

```shell
$ git branch
* main
  my-new-branch
```

In `git log`, local branches are named just with their plain name whereas you can tell if a branch is a remote branch because it'll have `origin/` prepended to its name.

```shell
$ git log
commit cb5f7da3c2a78b00df3289de245856ebd3ea5b4a (HEAD -> main, origin/main, my-new-branch)
Author: Edwin Choate <edwin@example.com>
...
```

## Switch branches

To switch to the new branch you just created, use the `git checkout` command.

```shell
$ git checkout my-new-branch
Switched to branch 'my-new-branch'
```

After switching, you'll see the asterisk is updated on the list.

```shell
$ git branch
  main
* my-new-branch
```

## Making divergent changes on the new branch

So what happens when you make changes on the new branch that cause it to diverge from main? In short, it's a lot like in the earlier example when the local branch got ahead of the remote branch.

Start by making some arbitrary edits to hello.txt.

```shell
$ vim hello.txt
```

```shell
Hello, Git!

The slow black cat jumps over the lazy dog.
~
~
~
```

`git diff` shows the old content that was removed and the new content that was added.

```shell
$ git diff
diff --git a/hello.txt b/hello.txt
index 09ddc32..4be84e8 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1,3 +1,3 @@
 Hello, Git!
 
-The quick brown fox jumps over the lazy dog.
+The slow black cat jumps over the lazy dog.
```

You stage & commit the changes as normal.

```shell
$ git add hello.txt
$ git commit -m "changes fox to cat"
[my-new-branch 5a98550] changes fox to cat
 1 file changed, 1 insertion(+), 1 deletion(-)
```

And you'll see that familiar status from before. Notice, since there's not a `my-new-branch` in the remote repo, there is no message about whether this local branch is ahead of the remote branch. It's back to the simpler readout that we saw over on the main branch before we created the remote main branch. 

```shell
$ git status
On branch my-new-branch
nothing to commit, working tree clean
```

And again `git log` will show you that your new local branch is now ahead of the main branches by one commit.

```shell
$ git log 
commit 5a9855028d5e855c8b030fd1dffa87b5fadbb5a3 (HEAD -> my-new-branch)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    changes fox to cat

commit cb5f7da3c2a78b00df3289de245856ebd3ea5b4a (origin/main, main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt again
...
```

## Pushing a copy of the new branch to the remote repository

Just like what was done with the main branch, you can create a branch with the same name in the remote repository by simply pushing commits to it. 

```shell
$ git push origin my-new-branch
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 302 bytes | 302.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'my-new-branch' on GitHub by visiting:
remote:      https://github.com/example/my-first-git-repo/pull/new/my-new-branch
remote: 
To https://github.com/example/my-first-git-repo.git
 * [new branch]      my-new-branch -> my-new-branch
```

We see that Git created a new branch in the remote repository with that same name, `my-new-branch`.

And again we now see the remote branch show up in `git log`.

```shell
$ git log
commit 5a9855028d5e855c8b030fd1dffa87b5fadbb5a3 (HEAD -> my-new-branch, origin/my-new-branch)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    changes fox to cat

commit cb5f7da3c2a78b00df3289de245856ebd3ea5b4a (origin/main, main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt again
...
```

## Merging changes into the main branch

Now, there are two divergent branches of code, `main` and `my-new-branch`. `main` has a fox jumping over a lazy dog. `my-new-branch` has a cat doing the jumping. So how does this get reconciled? What if I want the `main` branch to be updated with all the latest changes? 

(In fact, it is often pertinent that you want `main` to be updated with changes from other branches, because `main` serves and the source of truth while the other branches represent work-in-progress of various efforts.)

This is where merging comes in. Say we want to have the go-forward be the cat jumping over the lazy dog. This means we want to take the changes from `my-new-branch` and merge those into the `main` branch. 

The way to think about this is you need to be _on_ the branch _receiving_ the changes and then you will ask Git to merge commits from some other branch into the branch you're currently on (in this case, `main`).

Start by switching to the main branch.

```shell
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
```

Notice, when you do this if you run `git log` the newer commits have disappeared. That's because they're on the other branch. `main` is behind. Hence, it doesn't have the latest changes.

```shell
$ git log
commit cb5f7da3c2a78b00df3289de245856ebd3ea5b4a (HEAD -> main, origin/main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt again

commit 5a427648c7e52ffd5bd152d95c64d87a0e9c0866
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt

commit bfe7717f233423fcdaef5e6678462352888e8be1
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    My first commit!
```

Once on the `main` branch, you use the `git merge` command and pass the branch name you want to merge with.

```shell
$ git merge my-new-branch
Updating cb5f7da..5a98550
Fast-forward
 hello.txt | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

This was a painless example of a merge because Git is not nitpicky about TXT files and it's fine just taking the new content. 

But often, merges can be tedious because they can be filled with conflicts. That however, is the subject of another post altogether.

Running `git log` shows that, now that the merge has taken place, `main` is up-to-date with the latest changes from `my-new-branch`.

```shell
$ git log
commit 5a9855028d5e855c8b030fd1dffa87b5fadbb5a3 (HEAD -> main, origin/my-new-branch, my-new-branch)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    changes fox to cat

commit cb5f7da3c2a78b00df3289de245856ebd3ea5b4a (origin/main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt again

commit 5a427648c7e52ffd5bd152d95c64d87a0e9c0866
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt

commit bfe7717f233423fcdaef5e6678462352888e8be1
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    My first commit!
```

## In sum

Git is a skillset in itself and there's much more to learn than I've covered in this blog post. Hopefully you've found this to be an intro to command line Git that at least has made it easy to understand the basic concepts of what you can do. 

Git is an extremely powerful tool. I often prefer to use CLI version of Git, because it works the same on every system. If the code is in a Git repo, you can the command line version of Git on any project. It's a nice thing to have in the back pocket.
