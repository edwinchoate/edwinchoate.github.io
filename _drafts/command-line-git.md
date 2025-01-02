---

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

```shell
$ git config --global user.email "john@example.com"
```

```shell
$ git config --global user.name "John Smith"
```

```shell
$ git config --global init.defaultBranch main
```

```shell
$ git config --global --list
user.email=john@example.com
user.name=John Smith
init.defaultbranch=main
```

## Starting a new repository

```shell
$ mkdir my-first-git-repo
$ cd my-first-git-repo
```

```shell
$ git status
fatal: not a git repository (or any of the parent directories): .git
```

```shell
$ git init
Initialized empty Git repository in /Users/echoate/Code/my-first-git-repo/.git/
```

```shell
$ ls -a
.	..	.git
```

```shell
$ ls .git
HEAD		config		description	hooks		info		objects		refs
```

```shell
$ git status
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

## Making your first commit

```shell
$ touch hello.txt
```

```shell
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	hello.txt

nothing added to commit but untracked files present (use "git add" to track)
```

```shell
$ git add hello.txt
```

```shell
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   hello.txt
```

```shell
$ git commit -m "My first commit!"
```

```shell
$ git log
commit bfe7717f233423fcdaef5e6678462352888e8be1 (HEAD -> main)
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    My first commit!
```

## Making edits to tracked files

```shell
$ git status
On branch main
nothing to commit, working tree clean
```

```shell
$ vim hello.txt
```

```shell
Hello, Git!
~
~
~
```

```shell
$ git status
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   hello.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

```shell
$ git diff
diff --git a/hello.txt b/hello.txt
index e69de29..670a245 100644
--- a/hello.txt
+++ b/hello.txt
@@ -0,0 +1 @@
+Hello, Git!
```

```shell
$ git add hello.txt
```

```shell
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   hello.txt
```

```shell
$ git commit -m "edits hello.txt"
[main 5a42764] edits hello.txt
 1 file changed, 1 insertion(+)
```

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

```shell
$ git status
On branch main
nothing to commit, working tree clean
```

## Linking your local repository to a remote repository

```shell
$ git remote add origin https://github.com/example/my-first-git-repo.git
```

```shell
$ git status
On branch main
nothing to commit, working tree clean
```

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

```shell
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

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

```shell
$ vim hello.txt
```

```shell
Hello, Git!

The quick brown fox jumped over the lazy dog.
~
~
~
```

```shell
$ git add .
```

```shell
$ git commit -m "edits hello.txt again"
```

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

```shell
$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

## Pushing changes to the remote repository

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

```shell
$ git push
```

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

```shell
$ git pull
Already up to date.
```

```shell
$ git fetch
$
```

## Create a new branch

```shell
$ git branch
* main
```

```shell
$ git branch my-new-branch
```

```shell
$ git branch
* main
  my-new-branch
```

```shell
$ git log
commit cb5f7da3c2a78b00df3289de245856ebd3ea5b4a (HEAD -> main, origin/main, my-new-branch)
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

## Switch branches

```shell
$ git checkout my-new-branch
Switched to branch 'my-new-branch'
```

```shell
$ git branch
  main
* my-new-branch
```

## Making divergent changes on the new branch

```shell
$ vim hello.txt
```

```shell
Hello, Git!

The slow black cat jumped over the lazy dog.
~
~
~
```

```shell
$ git diff
diff --git a/hello.txt b/hello.txt
index 09ddc32..4be84e8 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1,3 +1,3 @@
 Hello, Git!
 
-The quick brown fox jumped over the lazy dog.
+The slow black cat jumped over the lazy dog.
```

```shell
$ git add hello.txt
$ git commit -m "changes fox to cat"
[my-new-branch 5a98550] changes fox to cat
 1 file changed, 1 insertion(+), 1 deletion(-)
```

```shell
$ git status
On branch my-new-branch
nothing to commit, working tree clean
```

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

commit 5a427648c7e52ffd5bd152d95c64d87a0e9c0866
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt

commit bfe7717f233423fcdaef5e6678462352888e8be1
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    My first commit!
```

## Pushing a copy of the new branch to the remote repository

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

commit 5a427648c7e52ffd5bd152d95c64d87a0e9c0866
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    edits hello.txt

commit bfe7717f233423fcdaef5e6678462352888e8be1
Author: Edwin Choate <edwin@example.com>
Date:   Wed Jan 1 00:00:00 2025 -0500

    My first commit!
```

## Merging changes into the main branch

```shell
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
```

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

```shell
$ git merge my-new-branch
Updating cb5f7da..5a98550
Fast-forward
 hello.txt | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

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
