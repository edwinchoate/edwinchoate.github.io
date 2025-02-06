---
layout: post
title: "How to Automate Light/Dark Theme on Windows"
author: Edwin Choate
date:   2025-02-05
categories: windows
---

I personally prefer to set up my devices to be in light theme during the day and dark theme at night, based on scheduled times. You can easily schedule light/dark theme on iOS, Android, and Mac OS in the Settings apps and yet, surprisingly, there's no way to do this in Settings on Windows 10! 

I got tired of going to Settings and manually switching from light theme to dark constantly so I set up some automation that would run a script to turn on light theme at a defined time in the morning and dark theme in the evening. I got this working using a combination of **Powershell** and **Task Scheduler**. In this post, I will describe the process of how to set this up. 

## Registry Keys

There are two registry keys you need to know about:

1. `AppsUseLightTheme`
2. `SystemUsesLightTheme`

These keys are located in the registy here: `HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize`.

To toggle the theme, you'll just need to set the value of these keys to `1` (light theme) or `0` (dark theme). You'll do this by writing a Powershell script that will modify these keys. 

## 1. Create the Powershell Scripts

You'll make two Powershell scripts: one to switch to light theme and the other to switch to dark theme. (I'm sure you could do this in one script using conditionals but it was simpler, faster, and easier to do this with two scripts.) 

I implemented these scripts as `.ps1` files and named them: 

* `SetLightTheme.ps1`
* `SetDarkTheme.ps1`

Each script file contains just two lines of code, setting both registry keys to the pertinent value. 

Here are the contents of the SetLightTheme script:

{% highlight powershell %}
Set-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize -Name AppsUseLightTheme -Value 1 -Type Dword -Force

Set-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize -Name SystemUsesLightTheme -Value 1 -Type Dword -Force
{% endhighlight %}

SetDarkTheme is the exact same, but just with the values set to `0`:

{% highlight powershell %}
Set-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize -Name AppsUseLightTheme -Value 0 -Type Dword -Force

Set-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize -Name SystemUsesLightTheme -Value 0 -Type Dword -Force
{% endhighlight %}

(Shout-out to [tenforums.com](https://www.tenforums.com/). [This article of theirs](https://www.tenforums.com/tutorials/24038-change-default-app-windows-mode-light-dark-theme-windows-10-a.html) is where I learned how to script these registry keys.)

## 2. Test the Script Files

Next, you'll place these scripts on some path on your hard drive where you're okay storing them indefinitely. Make a note of the path to these files. (For purposes of this post let's say you put them in `C:\MyScripts\`.)

At this point it'd be a good idea to run the scripts from a Powershell to make sure they work properly. 

You just pass the name of the file into Powershell and hit enter:

{% highlight powershell %}
C:\MyScripts\> .\SetLightTheme.ps1
C:\MyScripts\> .\SetDarkTheme.ps1
{% endhighlight %}

## 3. Create the Tasks in Task Scheduler

Windows Task Scheduler lets you automate lots of things. We'll use it to create a daily scheduled task that will run the scripts at a scheduled time. 

There are two ways to define a task in Task Scheduler. You can 1.) use the UI, or 2.) write the task in XML. At the very end of this post, I've pasted the XML from my tasks which includes all of the various settings in it. If you'd like, you can save the XML into your own `.xml` files and simply import the Tasks from the XML in Task Scheduler. (Keep in mind, you will need to edit the XML a bit. I cover what you need to edit at the end of this post as well.)

You will make two Tasks: 

1. SetLightTheme
2. SetDarkTheme

Each task will run its corresponding Powershell script.

Here's how to set up each Task using the UI:

0. Launch **Task Scheduler**.
0. Right-click on _Task Scheduler Library_ and choose _Create Task..._.
0. Give the task a Name. (I used the names SetLightTheme and SetDarkTheme.)
0. Go to the _Triggers_ tab. Click _New..._ button.
0. You'll set it to _On a schedule_, _Daily_, and then set the _Start_ time to your liking. _Start_ is the time when the script will run. (For instance, I used 6pm for SetDarkTheme and 6am for SetLightTheme.)
0. Go to the _Actions_ tab. Click _New..._ button.
0. You'll set it to _Start a program_. 
0. In the _Program/script_ field, put in `powershell.exe`.
0. In the _Add arguments_ field, put in: `-file "C:\MyScripts\SetLightTheme.ps1"` (or, `SetDarkTheme.ps1` if it's the SetDarkTheme task).
0. Click _OK_ to create the task. 

Those are the basic steps, but beyond that there are a bunch of other settings you can play with. The exact settings I chose are in the XML at the end of this post for your reference. 

## 4. Test the Tasks

To view the tasks you just made, in Task Scheduler, click on _Task Scheduler Library_. You should see your tasks under the Name column with the names you set when you created the tasks. 

Even though your tasks are scheduled to run at a specified time, you can still manually run them. To do this, right-click and then choose _Run_ from the context menu. 

In the _Status_ column, you should see it change from _Ready_ to _Running_. Give it a few seconds to run. If everything is set up properly, you should see your theme change on your PC. 

## In sum

And that's it! Hopefully everything works for you. If something's not working, you could try using the settings I have below in the XML and see if that does the trick.

Despite the lack of this setting in the Windows Settings app, with these Powershell scripts and Task Scheduler tasks, you can get automatic light/dark themes working on Windows 10. It was fun figuring this out, but I do hope they add the actual settings in the Settings app in the future. 

Happy scripting! 

## Addendum: Task XML 

To export tasks you've set up in Task Scheduler, you can right-click on a task and choose _Export..._. 

Fittingly, you can also import tasks into the Task Scheduler from XML files by right-clicking on _Task Scheduler Library_ and choosing _Import Task..._. 

Below, I've pasted the XML from my SetLightTheme task. It's identical to my SetDarkTheme task outside of the task name, time, and command argument.

There are a few things you will need to change in the XML: 

0. `<Author>` - You can get this string by running `whoami` in the terminal.
0. `<URI>` (if you didn't name your task "SetLightTheme")
0. `<StartBoundary>` - You'll need to set the time you want the task to run in the datetime. The hour digits use 24-hour time.
0. `<UserId>` - I hope you can omit this field, but I had to mask mine for security reasons.
0. `<Arguments>` - You need to set the path and filename to your `.ps1` file to be accurate to whatever you've got on your system.


{% highlight xml %}
<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Date>2025-01-01T00:00:00.0000000</Date>
    <Author>COMPUTER-NAME\Username</Author>
    <URI>\SetLightTheme</URI>
  </RegistrationInfo>
  <Triggers>
    <CalendarTrigger>
      <StartBoundary>2025-01-01T06:00:00</StartBoundary>
      <ExecutionTimeLimit>PT10M</ExecutionTimeLimit>
      <Enabled>true</Enabled>
      <ScheduleByDay>
        <DaysInterval>1</DaysInterval>
      </ScheduleByDay>
    </CalendarTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <UserId>X-X-X-XX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXX-XXXX</UserId>
      <LogonType>S4U</LogonType>
      <RunLevel>LeastPrivilege</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>Queue</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>false</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>false</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>true</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <StopOnIdleEnd>true</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <Hidden>false</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <WakeToRun>false</WakeToRun>
    <ExecutionTimeLimit>PT10M</ExecutionTimeLimit>
    <Priority>7</Priority>
    <RestartOnFailure>
      <Interval>PT1M</Interval>
      <Count>3</Count>
    </RestartOnFailure>
  </Settings>
  <Actions Context="Author">
    <Exec>
      <Command>powershell.exe</Command>
      <Arguments>-file "C:\MyScripts\SetLightTheme.ps1"</Arguments>
    </Exec>
  </Actions>
</Task>
{% endhighlight %}