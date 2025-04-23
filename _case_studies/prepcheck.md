---
layout: case_study
title: PrepCheck
permalink: /articles/prepcheck/

thumbnail: /assets/img/prepcheck/prepcheck-thumbnail.png
subtitle: AI chat bot for asking tax questions

cover_photo: /assets/img/prepcheck/prepcheck-header.png
summary: I designed a user interface for an AI chatbot geared around asking tax questions. I used conventions that users are already familiar with from messaging applications to make the experience intuitive and familiar. I mostly focused on user interface design for this project, and I designed the logo.
---

## The Ask

I was asked to design an AI chat bot that enables users to ask tax questions and get quick answers from reliable sources. Within the constraint of it being a chat bot, there was some room to ideate on feature ideas, because this was more of an innovation kind of project.

## The User

The target user for this product is a **tax preparer**, someone who puts together tax returns for a living and who possesses a foundation of tax knowledge. The intended use of this product is for preparers to ask tax questions to quickly double-check their work, as they work on preparing tax returns.

## What If It Doesn't Have to Be a Chat Bot?

Perhaps a chatbot is the ideal UX for the users' needs here. But, without more user research, we don't know that for sure. I saw it as doing my due diligence to take the time to think about some alternative solutions.

#### Alternative Ideas

* Dynamic tax documentation center
* Dynamic guidance embedded inline in the tax form UI, in context
* Personified assistant that "follows" you throughout the application
* A smart FAQ panel that changes depending on the user's place in the application
* Smart elastic search

## Making It Intuitive: Building on What Users Already Know

In the book _Make It So: Interaction Design Lessons from Science Fiction_, authors Shedroff and Noessel describe an effective way of making something intuitive: build on what users already know. **I sought to use conventions users already know from messaging apps**. Everyone is using messaging apps, so this casts a very wide net. This project was a quick-turnaround, single-sprint kind of project. I just had a few days to produce the design, so there wasn't much time for research or deliberation. I set out to produce a user interface that would be familiar at first use.

<figure>
    <img alt="a chat interface where the user is asking a question about accounting periods and an AI responds with a quote from the IRS" src="/assets/img/prepcheck/og-metadata-concept.png">
    <figcaption>The interface is designed to be like a messaging application. It uses familiar conventions like typing indicators and a "Sending..." metaphor to be instantly familiar to first-time users.</figcaption>
</figure>

## Pushing the Envelope for the User

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
    <figcaption>I was intentional about making the Past Chats feature a modular part of the design so that it could be added on later (or not), because I knew it wasn't considered a requirement for the initial launch. I sought to make the design hold up in either case, whether or not we made past chats navigable.</figcaption>
</figure>

By reserving the space on the left side of the screen for a potential navigation drawer, the feature was solved for in the future case, and the interface had a minimalist aesthetic with plenty of whitespace in the immediate term.

A nice benefit of keeping the interface uncluttered and minimal in the desktop view was that when it came time to work out the responsive layouts for mobile and tablet, very little of the interface needed to be rearranged to get it to work on smaller screen sizes.

<figure>
    <img alt="" src="/assets/img/prepcheck/responsive-layouts.png">
    <figcaption>Responsive layouts for the mobile and tablet views</figcaption>
</figure>

## Designing the Logo

I'd originally titled this project _Tax Talk_ in the design artifacts, but this was just a placeholder title so that I had something to put in the designs. I felt that this was a product that needed to have a brand identity so I brought this to marketing's attention so that they could work on a product name. I waited until I got the official name from marketing before working on the logo, because I wanted the logo to tie in with the product name, as well as create a wordmark containing the product name. 

I embarked on an ideation exercise where I worked up several options. The final logo incorporates the shape of a checkmark within the shape of a chat bubble. The most time-consuming part of creating this logo was getting the proportions right. It required fine-tuning to get the checkmark shape and the chat bubble shape to both look right at the same time. 

<figure>
    <img alt="a PrepCheck logo kit containing several color variations" src="/assets/img/prepcheck/logo-kit.png">
    <figcaption>To support a variety of present and future product needs, I created a logo kit that contained several size & color combinations of the logo (wordmark and icon) to have the bases covered.</figcaption>
</figure>

* I incorporated the checkmark to clarify that the word _check_ means "checking your work" (as opposed to other uses of the word like "writing a check")
* The omission of AI from the logo was intentional, so as to future-proof the product in case we pivoted
* I incorporated the chat bubble shape to clarify that this is a chat tool, since the name "PrepCheck" doesn't reference chatting

## Designing the Beta Version

I made a simplified prototype artifact for the initial release: the beta version of the product. After talking with stakeholders, we liked the idea of explicitly labeling the software as a beta version somewhere in the interface.

I worked out the bare-minimum MVP design for the product and reworked the header of the UI to reflect that it's in beta.

<figure>
    <img alt="a simplified version of the design for a beta version of the software" src="/assets/img/prepcheck/prepcheck-beta-ui.png">
    <figcaption> The design artifact I made for the launch (Beta) version of the software was as simplified as possible.</figcaption>
</figure>

## What Was Built

The engineering team took up the work to build the Beta design, and I consulted with them as they had questions. They were able to build essentially all of the features from the Beta design without any hiccups.

<figure>
    <img alt="the coded version of the Beta design" src="/assets/img/prepcheck/built-version.png">
    <figcaption>This is what the built software looked like. Engineering was able to implement the built product in close accordance with the design I provided.</figcaption>
</figure>

## My Role

For this project, **I mostly acted as a UI designer**. I was the sole designer on the project. I didn't do much in the way of user research or UX design here, partially due to the assignment and partially due to the time frame (one sprint).

## Conclusion

This quick project was an opportunity to design for AI. I sought to make the experience intuitive by _building on what users already know_: messaging apps. I was able to exercise my UI design skills on this project to perform a quick turnaround.
