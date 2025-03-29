---
layout: post
title: TryParse in .NET Is a Nice Pattern
author: Edwin Choate
date: 2025-03-29
categories: csharp
---

In C#, there's a nice little pattern you can use by combining many of the .NET data structures' `TryParse` methods with an `out` param. This little technique makes for some readable, succint code.

`TryParse` uses the `out` keyword in an effective way. In C#, you can use the `out` keyword to sort of flip a function parameter on its head: it becomes an output of the function. You can use `out` params with the built-in `TryParse` method, and it forms this really nice, succinct line of code that gets a lot done: 

{% highlight c# %}
string s = "5";
int n;

bool success = Int32.TryParse(s, out n);

Console.WriteLine(n);       // -> 5
Console.WriteLine(success); // -> True
{% endhighlight %}

In the one line of code, the `TryParse` is able to

* Avoid an exception from happening by proactively checking to see if the parse works
* If the parse works, store the result in the `out` param, in this case `n`.
* Return a boolean that represents whether or not the parse worked

The pattern also lends itself well to while loops:

{% highlight c# %}
int n;
do 
{
    Console.Write("Enter an integer: ");
}
while (!Int32.TryParse(Console.ReadLine(), out n));
{% endhighlight %}

In addition to `TryParse`, there are similar methods like `TryPop` (Stack), `TryGetValue` (Dictionary), and `TryDequeue` (Queue) that follow a similar pattern.