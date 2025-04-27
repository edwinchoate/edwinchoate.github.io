---
layout: case_study
title: Tally Counter
permalink: /articles/tally-counter/

thumbnail: /assets/img/tally-counter/tally-counter-thumbnail.png
subtitle: Designing + coding the simplest app I could think of

cover_photo: /assets/img/tally-counter/tally-counter-header.png
summary: 
---

## The Goal

This project was just for learning purposes (and for fun). The idea of this project was to go from an idea to a published app on the app store and do every step in between myself from scratch. **I wanted to mount the learning curve of bumping into all of the unexpected things I'd encounter along the way**. To accelerate this project, I gave myself a constraint: I must create literally the simplest app that I can think of, and the app must be _complete_ solution to some problem.

I did not use any AI tools for this project.

After brainstorming, I decided a tally counter app met my criteria. 

## What's a Tally Counter?

A tally counter is a simple device that solves a simple problem: you might forget and "lose your place" when you're trying to count something. It's a way of getting a number out of your head and into the world.

<figure>
    <img alt="a silver, metal device with a four-digit number display and a single button" src="/assets/img/tally-counter/physical-device.png" />
    <figcaption>Back in the olden days before mass survelliance, if an organization wanted to sum up the total attendance at some big event (like a football game), there'd be a guy sitting by the entrance holding one of these. Each time a person would enter the venue, he'd press a button that would increment the total by one. At the end of the night, you'd have the total attendance of the event.</figcaption>
</figure>

## Designing the App

I decided it would make the UX designer in me happy if there was a skeuomorphic metaphor in the app's interface design so I decided to make it look like the physical tally counter devices of the days of old (as pictured above). I felt even better about that when I searched the app stores and saw that no one had really made this design yet. (There are, however, a gazillion tally counter apps on the app stores at this point. This is by no means an original idea, but that is not the point of this project.)

<figure>
    <img alt="a digital vector of a tally counter numeric display side by side next to a physical one showing that they visuals are similar" src="/assets/img/tally-counter/number-display-inspiration.png" />
    <figcaption>I designed a vector graphic for the numeric display in Figma, basing the visuals and the font on the look and feel of the physical device.</figcaption>
</figure>

Was this necessary? Of course not, but I wanted to learn how to take a custom vector graphic, design it, and put it into a working application. This also served as a way to learn to how put text into a graphic, text that's not embedded in the SVG but rather font text that can be updated as the user interacts with the app.

<figure>
    <img alt="the app design which includes a four-digit numeric display a plus button, a minus button, and a reset button" src="/assets/img/tally-counter/app-mockup.png" />
    <figcaption>I based the look and feel of the app design on that of the physical tally counter device.</figcaption>
</figure>

It was straightforward and simple to design an interface for this problem. I placed the plus and minus buttons at the bottom of the screen for ergonomic reasons: they are much closer to the user's thumb, and these buttons are ones that are frequently pressed. I made the buttons large to make it easier to press them (large target area).

I placed the reset button near the top of the screen which accomplished two things simultaneously:

1. By placing the reset button far away from the +/- buttons, it mitigates the risk of consequential _slips_ (i.e. the user trying to press the + button and accidentally pressing the reset button). 
2. By placing the reset button in close proximity to the count, it subtly reinforces what the reset button does, it resets the count.

<figure>
    <img alt="a Figma canvas showing 5 variations of the app icon design" src="/assets/img/tally-counter/app-icon-assets.png" />
    <figcaption>In Figma, I made the app icon assets in line with what is required by Google Play (appiconfg, appicon, 512x512 icon.png, etc.)</figcaption>
</figure>

## Building the App

I built the app with [.NET MAUI](https://dotnet.microsoft.com/en-us/apps/maui). I was considering publishing it to both iOS and Android app stores, however, without another reason to have an Apple developer account, I couldn't justify paying $100/year to publish this simple app. So I opted to just publish the Android app to Google Play.

In the same way that it was simple to design this app, it was also simple to code.

The count was implement as a private field on the Main page. 

{% highlight c# %}
public partial class MainPage : ContentPage
{
    private int _count = 0;

    ...
}
{% endhighlight %}

The click handlers for the buttons were straightforwardly simple to implement as well, another byproduct of the simplicity of the app overall.

{% highlight c# %}
private void OnIncrementClicked(object sender, EventArgs e)
{
    if (count < 9999)
        count++;
    else
        count = 0;
    ButtonPressFeedback();
}

private void OnDecrementClicked(object sender, EventArgs e)
{
    if (count >= 1)
        count--;
    ButtonPressFeedback();
}

private void OnResetClicked(object sender, EventArgs e)
{
    count = 0;
    ButtonPressFeedback();
}

private void ButtonPressFeedback()
{
    HapticFeedback.Default.Perform(HapticFeedbackType.LongPress);
    countLabel.Text = count.ToString().PadLeft(4, '0');
    SemanticScreenReader.Announce(count.ToString());
}
{% endhighlight %}
