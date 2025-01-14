---
layout: post
title: EditorConfig
date: 2025-01-14
categories: visualstudio
---

EditorConfig is a universal file format that allows you to systematically specify code style decisions in a way that's decoupled from any particular IDE. EditorConfig is useful when it comes to staying on the same page about code style for your team or project when multiple developers are attempting to write code in the same style.

EditorConfig is supported by BBEdit, GitHub, IntelliJ, Visual Studio, Visual Studio Code, Neovim, PyCharm, ReSharper, Vim, Xcode... and many other IDEs out of the box with zero plugin installation. There's also the option to install an EditorConfig plugin in many other IDEs like Atom, Code::Blocks, Sublime, Eclipse, Notepad++, etc.

## .editorconfig file 

EditorConfig works by way of specifying an `.editorconfig` file. The syntax of an .editorconfig file uses an "INI-like" format. It's basically a sectioned key-value config file. If you're familiar with YAML, it's similar.

Here are some examples of code style settings specified in an .editorconfig file: 

```ini
# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Set default charset
[*.{js,py}]
charset = utf-8
```

As you can see in the above example, you can apply certain styling to specific file types using the square bracket notation. 

### Single-project level

If you place an .editorconfig file at the root directory of your project, then all of the code style rules will override the default settings of your IDE, for that project only. 

### Multi-project level 

What's cool is, if in the .editorconfig file, you have the `root = true` option enabled, this means that your IDE will look past/above the root directory of your project. This effectively allows you to put a fallback .editorconfig file one level above your project file and your IDE will treat those settings as a global set of settings. If you've got a .editorconfig file in your project, it will be used. Otherwise, the higher-level one will be used.

If you like to put all of your code repos in a directory together (ex: `\source\`), then a .editorconfig file placed in that directory will effectively act as a "global" EditorConfig for all of your code repos. 

## EditorConfig.org

The EditorConfig specification is documented at [editorconfig.org](https://editorconfig.org/). You can read about the spec in more detail at [spec.editorconfig.org](https://spec.editorconfig.org/).

## Severity levels

In addition to being able to specify style rules in an EditorConfig file, you can also provide a severity level. (This is an optional feature; style rules don't require a severity level.)

Say I want to _suggest_ that in all C Sharp files, there should be a newline before every `finally` block. 

I would add `:suggestion` after the value of the rule in .editorconfig. 

Here's an example of a rule that has the IDE _suggest_ there be a newline before every `finally` block in every `.cs` file: 

```ini
# C Sharp Files
[*.cs]
csharp_new_line_before_finally = true:suggestion
```

Say you want to treat the rule with a higher severity. You could have the IDE treat violations of the rule as a _warning_: 

```ini
csharp_new_line_before_finally = true:warning
```

Other severity level options include: 

* `suggestion`
* `warning`
* `error`
* `silent`
* `none`

How your specific IDE responds to any of these severity level is up to the IDE. 

## dotnet/runtime's .editorconfig

This naturally raises the question, is there some exemplar, gold standard .editorconfig file somewhere out there on the internet that I can just download and use? One such option for .NET developers is the .editorconfig from the [dotnet runtime project](https://github.com/dotnet/runtime/). If you download [the .editorconfig file from the root directory of that repo](https://github.com/dotnet/runtime/blob/main/.editorconfig), that gives you a great foundation. Microsoft references this specific .editorconfig in their own documentation.

[github.com/dotnet/runtime](https://github.com/dotnet/runtime/)

(One thing I've been doing is using the dotnet/runtime EditorConfig file and changing the severity to Warning for everything. This raises warnings for all style snafus and it teaches me to write my code in the way recommended by Microsoft by default. To set this up, I just download the .editorconfig from the dotnet/runtime repo and then run a find and replace, changing every instance of `:suggestion` to `:warning`.)

## Generating an .editorconfig file in Visual Studio

If you've used the Visual Studio settings to set up the code style rules you want, you can have Visual Studio generate an .editorconfig file automatically. 

To do this, you go to Tools → Options... → Text Editor → C# → Code Styles → General. Click the button that says _Generate .editorconfig file from settings_. 

From there, you can save a .editorconfig file save a backup, and/or further customize the file as you see fit.

## In sum 

EditorConfig allows you to capture all of those little code style decisions into a single file which can be shared with other developers and easily added to any project. This makes it nearly automatic to enforce any styling decision at various levels of severity for any language, any IDE, and any project. It's worth taking the time to learn a little bit about as it can save you from having to try and remember dozens of small styling decisions as you work on a project.