---
layout: case_study
title: SpeedDialer AI
permalink: /articles/speeddialer-ai/

thumbnail: /assets/img/speeddialer-ai/speeddialer-thumbnail.png
subtitle: A hackathon project

cover_photo: /assets/img/speeddialer-ai/speeddialer-header.png
summary: 
---

## Context: A Company Hackathon

This project was created for an optional company hackathon. The prompt for the hackathon was open-ended, allowing for creativity and innovation. The central theme of the hackathon was _collaboration_. **We were tasked with creating a collaboration tool of some kind**. What exactly that looked like was totally up to us. It was not prescribed in the prompt to use AI for our project; that's something we opted in to.

For this hackathon, **we had 24 hours** to come up with the our solution, build it, and put together the presentation.

## Figuring Out The Problem To Solve

I was the resident designer on the hackathon team. I took to facilitating the brainstorming. I screenshared a Miro board to the team and we talked through ideas as I noted the team's ideas on sticky notes on the board. I kept the group focused on what _problems_ we could solve rather than talking about solutions. 

We went around the room throwing out ideas, and I wrote down everyone's ideas, no matter how silly, and no matter who they came from. I had the group continue to brainstorm a little further even after they'd already thought of some ideas they were excited about. As the team discussion progressed, it became increasinly obvious that there was a particular problem the team was motivated to solve: the sales team was having problems with the sheer volume of customer calls, and they wanted a way to work together (collaborate) to divide and conquer. 

<figure>
    <img alt="a virtual white board showing sticky notes and screenshots of a brainstorm activity" src="/assets/img/speeddialer-ai/miro-board.png">
    <figcaption>Members of the team talked through their pain points while they shared screenshots of relevant systems with me. I made sure to take everything and put it in one place in the Miro board so that the whole team was looking at the same thing as we talked.</figcaption>
</figure>

It helped to have **our users in the room**, a couple sales reps. Since this was a hackathon, this gave us an advantage: fast access to rich user data. 

We arrived at four main problems we wanted to solve: 

When sales is managing their customer calls, they are having to spend:

1. Time on **manual work**
2. Time **gathering context** (What's going on with that call)
3. Energy figuring out **call status** (Is it resolved?)
4. Time on high **call volume**

Because we just had one day to come up with a solution, I saw to it that it was crucial to get started on a solution. Normally, rushing to a solution isn't a good way to go, but we simply didn't have time to do anything else. 

## Jumping Right In (No Time to Waste)

Because this was a hackathon and we had to deliver something in one day, I broke a rule I normally abide by: _understanding the problem before jumping to conclusions_. (To be fair, we did take about an hour and a half talk about the problem as a team.) This was about as much time as we could afford to spend on defining the problem.

<mark>Once we had an idea of what problem we wanted to solve, I quickly got to work. I worked on design ideas as they came to me, jumping straight from concept to high fidelity UI designs for the sake of time.</mark>

The team agreed to meet back to go over what we'd come up with by a certain time that evening. From there, we'd discuss the presentation, divvy up the work, and work on our parts of the presentation overnight. 

## Design Concepts

There wasn't time for deliberation, and there wasn't time for iteration. I quickly made as many sensible ideas as I could, and put them together in high fidelity. I decided not to make a prototype and instead just talked through the concepts. 

One thing I like to do is pack a single screen example with a lot of smaller examples of different feature ideas, so that one artifact can do the work of representing lots of ideas. This cuts down on unnecessary screens in the deliverables, which can be confusing.

<figure>
    <img alt="a dashboard page titled Callback Checklist with a list of customer callers and a few columns of call information" src="/assets/img/speeddialer-ai/callback-checklist.png">
    <figcaption></figcaption>
</figure>

I started by carving out a space where the user can see a view of calls in the system, like a dashboard. I wanted to create a home-base space from which the user could drill into more details. Since the theme of the hackathon was _collaboration_, in the back of my mind, I knew I'd need to work in an experience where the different sales reps could be communicating back and forth about the calls they were working on.

I quicky mocked up a conventional search and filter and I imagined what kind of data the sales reps might like to see in this view. I sough to make this view as data-rich as I could think of, while trying to make the information meaningful and actionable. 

There are **several feaures on this page that use AI**:

* **Auto Response** (more on that below)
* **Mass Message**(more below)
* **Filters** - these are indended to be populated by AI parsing the data, coming up with "filter ideas" for the user
* **Feeling** - the feeling column would be populated by the AI parse the call transcript using LLMs and coming to a judgement on how the caller is feeling. By using emoji for the values in this column, the idea scales out in precision to all the emotions that can be captured by emoji, which is a lot.
* **AI Voicemail Summary** - this would be populated by the raw call transcript, and AI would parse it to make it quicker to read through the voicemail (more on that below)

<figure>
    <img alt="a screen design showing a unified thread containing actions, chat, AI contributions, and calls" src="/assets/img/speeddialer-ai/customer-activity-history.png">
    <figcaption>The most interesting view to design was the view when you expand to see the details of a contact. The was intended to be the one unified view where you could see, reconciled on a timeline, everything that's happened for a given client.</figcaption>
</figure>

By personifying the AI, it makes it intuitive that the AI would be a participant in the conversation. (I just used the robot emoji instead of making a custom graphic because we were limited on time.) What makes this view easy to follow is the fact that the variety of events (calls, chat messages, mass messages, AI features, automatica triggers, etc.) are all reconciled on one timeline.

<figure>
    <img alt="a view that shows a voicemail transcript that's been highlighted by AI" src="/assets/img/speeddialer-ai/voicemail-details.png">
    <figcaption>It was exciting thinking about ways that we could use AI to make data we already have more digestable. Here, I was thinking about ways that we could take advantage of what LLMs are good at: summarizing lots of words and searching of patterns in words.</figcaption>
</figure>

Another big picture of solving the problem was simplying cutting down on manual efforts. I thought: what if there was a way to perform the same task for many many customers? 



![](/assets/img/speeddialer-ai/auto-responder.png)

![](/asset/img/speeddialer-ai/mass-message.png)

![](/assets/img/speeddialer-ai/all-calls.png)

<video width="100%" controls>
    <source src="/assets/img/speeddialer-ai/final-hackathon-presentation.mp4" >
</video>

## Showing the Design to the Users

> "We would love this if it was real."

This was another big advantage of having the target audience users in our hackathon group: once the design concepts were ready, all I had to do was show it to them and get their thoughts. They were enthusiastic when they saw the designs. They kept saying that if this software were real, they would love it. I'm sure there was a bit of internal team bias going on here, but I felt it was a good sign that they responded this way. 

## My Role



## Conclusion 

