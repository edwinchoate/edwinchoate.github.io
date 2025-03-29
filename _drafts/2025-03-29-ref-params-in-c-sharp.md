---
layout: post
title: Ref Parameters in C#
author: Edwin Choate
date: 2025-03-29
categories: csharp
---

C# has lots of great language features, and Reference Parameters are one such feature.

You can use the `ref` keyword to point to a variable. When the reference to the variable is modified, the value of the original variable is also modified. A reference variable is sort of like a pointer in a way.

One nice design choice is that the compiler forces you to explicitly mark when a function's parameter is a ref as well as when you pass a ref into a function when you're making the function call. I like this design choice as it forces you to write clearer, more readable code. 

{% highlight c# %}
int x = 5;

void myFunction (ref int a) // you have to use the `ref` keyword here
{
    ...
}

myFunction(ref x); // and again here
{% endhighlight %}

You might about ref params as a way to make datatypes that are pass-by-value in C# behave as if they were pass-by-reference. You can make an `int` behave more like a `string` or an `object`.

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
