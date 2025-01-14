---
layout: post
title: Eleven Nice C# Language Features
author: Edwin Choate
categories: csharp
---

One of the things that sets C# apart as a language is that Microsoft seems to be monitoring the cool features from other languages and porting similar features into C#. The result over time is that C# has all these cool features that people love. It's a great approach, and in my opinion it contributes to a general sense of the language being well-maintained.

**Topics covered in this post**

0. [Ref parameters](#ref-parameters)
0. [TryParse](#tryparse)
0. [Using blocks](#using-blocks)
0. [Implicit typing](#implicit-typing)
0. [Lambda functions](#lambda-functions)
0. [Exception filtering ](#exception-filtering)
0. [StringBuilder](#stringbuilder)
0. [Anonymous types ](#anonymous-types)
0. [Object initializer syntax ](#object-initializer-syntax)
0. [Static constructors ](#static-constructors)
0. [Async and await](#async-and-await)

## Ref parameters

You can use the `ref` keyword to point to a variable. When the reference to the variable is modified, the value of the original variable is also modified. A reference variable is sort of like a pointer in a way.

One nice design choice is that the compiler forces you to explicitly mark when a function's parameter is a ref as well as when you pass a ref into a function when you're making the function call. I like this design choice as it forces you to write clearer, more readable code. 

{% highlight c# %}
int x = 5;

void AddThree (ref int a)
{
    a += 3;
}

void SubtractOne (ref int b) 
{
    b--;
}

AddThree(ref x);
SubtractOne(ref x);

Console.WriteLine(x);
// Prints 7
{% endhighlight %}

One situation where `ref` paramaters become useful is when you'd like to pass something along a chain of functions. For instance, you can use ref variables when creating a chain of `delegate` functions and the value referenced by the ref gets passed from function to function. 

Here the example above, re-written using a chain of delegates:

{% highlight c# %}
public delegate void DoArithmetic (ref int n);

static void AddThree (ref int a) { a += 3; }
static void SubtractOne (ref int b) { b--; }

public static void Main ()
{
    int x = 5;

    DoArithmetic f1 = AddThree, f2 = SubtractOne;
    DoArithmetic chain = f1 + f2;

    chain(ref x);

    Console.WriteLine(x);
    // Prints 7
}
{% endhighlight %}

## TryParse

`TryParse` isn't exactly a language feature per se, but it does use the `out` keyword in an effective way. In C#, you can use the `out` keyword to sort of flip a function parameter on its head: it becomes an output of the function. You can use `out` params with the built-in `TryParse` method, and it forms this really nice, succinct line of code that gets a lot done: 

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

## Using blocks

.NET makes it convenient to work with objects that implement `IDisposable` without having to write as much boilerplate code. C# uses the `using` keyword for this. This use case is not to be confused with `using` declarations at the top of you program file (ex: `using System;`).

The code below is not all that bad, but when you have to write it over and over again, that makes it boilerplate.

{% highlight c# %}
 IDisposable instance = null;

try
{
    IDisposable instance = new SomeClass();
    // ...
}
finally
{
    if (instance != null) 
        instance.Dispose();
}
{% endhighlight %}

The `using` block allows you to write the above code in a much more succinct way:

{% highlight c# %}
using (IDisposable instance = new SomeClass())
{
    // ...
}
{% endhighlight %}

Once the code reaches the end of the using block, it will automatically call `Dispose()` for you. 

There's even a version of `using` that doesn't require you to use the curly braces:

{% highlight c# %}
using (IDisposable instance = new SomeClass());
{% endhighlight %}

(I wouldn't use the curly-brace-free syntax ordinarily. I'd only use it inside of short, simple blocks of code.)

This is another example of C# making things easier for developers. Using blocks aren't a necessary feature, but they sure are nice to have.

## Implicit typing

It's easy to take the small things for granted. I won't belabor the point, but I appreciate `var` and `new()` and they're good examples of small thoughtful language features that improve developers' lives.

{% highlight c# %}
Dictionary<int, string> lookupTable = new Dictionary<int, string>();
{% endhighlight %}

The above line of code has a redundency problem that causes unnecessary typing and requires you to make updates to the datatype in two places. 

{% highlight c# %}
Dictionary<int, string> lookupTable = new();
{% endhighlight %}

What's nice about `new()` is that since we read from left to right, if you're reading the code you understand what the  type of the variable is and you don't need to look elsewhere. You're "done" reading so to speak. (And whoever wrote that line of code didn't have to type the same thing twice.) 

{% highlight c# %}
var lookupTable = new Dictionary<int, string>();
{% endhighlight %}

Or, perhaps the data type of the variable isn't all that important to the rest of the code. Perhaps the variable is an intermediate, temporary variable that you don't need to worry about. In that case, `var` helps you subtly communicate to the reader of the code not to pay too much attention to the datatype. And again, it saves the writer from having to type the same code twice. 

## Lambda functions 

Expression lamdas

Statement lambdas 

## Exception filtering 

## StringBuilder

## Anonymous types 

## Object initializer syntax 

## Static constructors 

## Async and await
