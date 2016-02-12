---
layout: post
title: "Beginner's Guide to Git Aliasing"
date: 2016-02-04
---

The [git alias](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases) feature is one of the nicest personalizations you can make to your git bash. In this post,  I'd like to walk through an example and share my personal configs.

So, why are aliases useful? To illustrate, the canonical example would probably be the <code class="language-git">git status</code> command. Most people (myself included) use <code class="language-git">git status</code> quite frequently when working in git. The problem is, "status" is a semi-long word. What if, instead of <code class="language-git">git status</code>, you could just type <code class="language-git">git s</code>? With git aliases, you can.

Here's that alias in action:

{% highlight git %}
edwinchoate:edwinchoate.github.io ☕️  git s
On branch master
Your branch is up-to-date with 'origin/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	_posts/2016-02-04-beginners-guide-to-git-aliasing.md

nothing added to commit but untracked files present (use "git add" to track)
{% endhighlight %}

You can set aliases using the <code class="language-git">git config</code> command (or you can add them to your <code class="language-git">.gitconfig</code> file if you want to do it that way). To set the aforementioned status alias, you can use the follow command:

{% highlight git %}
edwinchoate:~ ☕️  git config --global alias.s "status"
{% endhighlight %}

The general pattern being:

{% highlight git %}
edwinchoate:~ ☕️  git config --global alias.<your_cool_alias> "<the_original_command>"
{% endhighlight %}

Here are the aliases I'm using these days:

{% highlight git %}
edwinchoate:~ ☕️  git config --list
...
alias.s=status
alias.c=commit
alias.lg=log --oneline --decorate --all --graph
alias.b=branch --all
alias.co=checkout
alias.d=diff
alias.a=add .
alias.f=fetch --all
{% endhighlight %}

As an aside, the above log alias is pretty cool. Here's what it displays:

{% highlight git %}
edwinchoate:~ ☕️  git lg
* | 7517c7b restoring v1.0 to master
* |   2c33c23 Merge branch 'temp'
|\ \  
| * | 460b7ca creates temp branch
* | |   982ef02 Merge branch 'master' of https://github.com/edwinchoate/edwinchoate.github.io
|\ \ \  
| * | | 1fac03b added CNAME
| | |/  
| |/|   
| * | b7ff861 first commit of v2.0
| * | 027b1ba starts from blank slate, begin ver 2.0
| |/  
* | 30f18a5 tests to see that jekyll works on master branch
|/  
* 1c8d103 (tag: v1.0) Update README.md
{% endhighlight %}

The world of git aliases is your oyster.

Till next time,

Edwin
