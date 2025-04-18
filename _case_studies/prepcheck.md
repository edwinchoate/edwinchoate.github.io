---
layout: case_study
title: PrepCheck
permalink: /articles/prepcheck/

thumbnail: /assets/img/prepcheck/prepcheck-thumbnail.png
subtitle: AI chat bot for asking tax questions

cover_photo: /assets/img/prepcheck/prepcheck-header.png
summary: 
---

## The Ask

I was asked to design an AI chat bot that enables users to ask tax questions and get quick answers from reliable sources. Within the constraint of it being a chat bot, there was some room to ideate on feature ideas, because this was more of an innovation kind of project.

## What If It Doesn't Have to Be a Chat Bot?

Perhaps a chatbot is the ideal UX for the users' needs here. But, without more user research, we don't know that for sure. I saw it as doing my due diligence to take the time to think about some alternative solutions.

#### Alternative Ideas

* Dynamic tax documentation center
* Dynamic guidance embedded inline in the tax form UI, in context
* Personified assistant that "follows" you throughout the application
* A smart FAQ panel that changes depending on the user's place in the application
* Smart elastic search

## Making It Intuitive: Building on What Users Already Know

In the book _Make It So: Interaction Design Lessons from Science Fiction_, authors Shedroff and Noessel describe an effective way of making something intuitive: _build on what users already know_. I sought to use conventions users already know from messaging apps. Everyone is using messaging apps, so this casts a very wide net. This project was a quick-turnaround, single-sprint kind of project. I just had a few days to produce the design, so there wasn't much time for research or deliberation. I set out to produce a user interface that would be familiar at first use.

<figure>
    <img alt="a chat interface where the user is asking a question about accounting periods and an AI responds with a quote from the IRS" src="/assets/img/prepcheck/og-metadata-concept.png">
    <figcaption>The interface is designed to be like a messaging application. It uses familiar conventions like typing indicators and a "Sending..." metaphor to be instantly familiar to first-time users.</figcaption>
</figure>

## Push the Envelope for the User

At its core, this was going to be a basic chat interface, but I sought to think about ways we could push the envelope. I added a few feature ideas into the prototype as food-for-thought for the stakeholders.

Some of those ideas included: 

* What if the user wants to download the chat? 
* Chat history (accessing past chats) 
* A way the user can react to the bot, to tell it whether or not its response was helpful
* Displaying Open Graph metadata (e.g. `og:image`) in the interface for richer visuals
* What if the user wanted to name the chat? What if the AI automatically created a default name which could be edited?
* What if the user gets stuck with something and wants help? 

None of these features were being asked for, but I sought to get more creative juices flowing for the group, since this was more of an innovation kind of project.

<figure>
    <img alt="an empty chat with a welcome message and a few suggested topics for the user to try" src="/assets/img/prepcheck/fresh-chat.png">
    <figcaption>When the user launches a new chat, the AI greets them by name and suggests a few tax-related topics to discuss. This accomplishes two things: 1) It gets the conversation started if the user's not sure what to try, and 2) it fills the screen with content from the very beginning of a chat so that the user isn't staring at a blank page.</figcaption>
</figure>

When I design, I often first consider the more complicated, feature-rich design, solve that, and then cut features out to create a more barebones solution. Then, I deliver both concepts. This provides the product team with flexibility: they have a barebones, lean solution and as they add features to it, the barebones version is future-compatible with the more developed version, without causing unnecessary re-work.

<figure>
    <img alt="a chat thread interface with a side panel expanding, showing a list of all of the past chats" src="/assets/img/prepcheck/finished-design.png">
    <figcaption>I was intentional about making the Past Chats feature a modular part of the design that could be added on later (or not), because I knew it wasn't considered a requirement for the initial launch. I sought to make the design hold up in either case, whether or not we made past chats navigable. By reserving the space on the left side of the screen for a potential navigation drawer, the feature was solved for in the future case, and the interface had a minimalist aesthetic with plenty of whitespace in the immediate term. A win-win.</figcaption>
</figure>

A benefit of keeping the interface uncluttered and minimal was that when it came time to work around the mobile responsive layouts, there was little-to-no spatial crunch. These were some of the most straightforward responsive layouts I've had to do.

<figure>
    <img alt="" src="/assets/img/prepcheck/responsive-layouts.png">
    <figcaption>Responsive layouts for the mobile and tablet views</figcaption>
</figure>

## Designing the Logo

This was fun. No one asked for a logo, but I felt this product needed one. But before I did the logo, there was some important collaboration to do with the marketing department first. 

Up to this point, I had titled this project _Tax Talk_. This was just a working title I came up with to have something to put in the mockups. I met with marketing to describe the project, and they set off to come up with the official name for the product. 

I waited until I got the official name from marketing before working on the logo, because I wanted the logo to tie in with the product name, as well as create a wordmark containing the product name. 

Once marketing got back to me with the official name, PrepCheck, I had what I needed to work on the logo. 

I embarked on an ideation exercise where I worked up several options. The final logo incorporates the shape of a checkmark into the shape of a chat bubble. The most time-consuming part of creating this logo was getting the proportions right. It required fine-tuning to get the checkmark shape and the chat bubble shape to both look right at the same time. 

<figure>
    <img alt="a PrepCheck logo kit containing several color variations" src="/assets/img/prepcheck/logo-kit.png">
    <figcaption>To support a variety of present and future product needs, I created a logo kit that contained several size & color combinations of the logo (wordmark and icon) to have the bases covered.</figcaption>
</figure>

There were several reasons for this logo: 

* I wanted to use a checkmark to clarify what the word _check_ means (checking your work, as opposed to depositing a check at a bank)
* The omission of AI in the logo (and name) was intentional, so as to future-proof the product in case we pivoted
* The chat bubble shape sets the expectation that this is a chat interface

## Initial Lauch - the Beta Version

Copying the full-featured prototype, I made a second prototype artifact for the initial release: the beta version of the product. After talking with stakeholders, we liked the idea of explicitly labeling the software as a beta version somewhere in the interface.

I worked out the bare-minimum MVP design for the product and reworked the header of the UI to reflect that it's in beta.

<figure>
    <img alt="a simplied version of the design for a beta version of the software" src="/assets/img/prepcheck/prepcheck-beta-ui.png">
    <figcaption>The design artifact I made for the launch (Beta) version of the software was as simplified as possible.</figcaption>
</figure>

The engineering team took up the work to build the Beta design, and I consulted with them as they had questions. They were able to build essentially all of the features from the Beta design without any hiccups.

<figure>
    <img alt="the coded version of the Beta design" src="/assets/img/prepcheck/built-version.png">
    <figcaption>Engineering was able to implement the built product in close accordance with the design I provided.</figcaption>
</figure>

## My Role

For this project, **I mostly acted as a UI designer**. I didn't do much in the way of user research or UX architecture here, partially due to the assignment and partially due to the time frame (1 sprint).

## Conclusion

This quick project was an opportunity to design for AI. I sought to make the experience intuitive by _building on what users already know_: messaging apps. I was able to exercise my UI design skills on this project and perform a quick turnaround.
