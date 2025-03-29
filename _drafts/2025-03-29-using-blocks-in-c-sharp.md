---
layout: post
title: Using Blocks in C#
author: Edwin Choate
date: 2025-03-29
categories: csharp
---

.NET makes it convenient to work with objects that use the garbage collector (those that implement `IDisposable`) without having to write much boilerplate. C# uses the `using` keyword for this. This use case is not to be confused with `using` declarations at the top of you program file (ex: `using System;`).

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