---
layout: case_study
title: Self-Order Kiosk
permalink: /articles/self-order-kiosk/

thumbnail: /assets/img/self-order-kiosk/ncr-kiosk-thumbnail.png
subtitle: A consumer, self-serve kiosk for ordering food

cover_photo: /assets/img/self-order-kiosk/self-order-kiosk-header.png
summary: As a UX architect on a team of five UXers, I re-architected the user flow of the NCR Self-Serve Kiosk. I prototyped iteratively based on observations from NCR Corporation’s in-house food court. My team and I were able to significantly improve the usability of the product as it was brought into the market.
---

## The Problem We Were Solving

NCR’s Self-Serve Kiosk exists to enable restaurant customers to order food in-store at a restaurant without having to wait in line to order from a cashier. <mark>People were having a difficult time navigating the kiosk’s user interface. They were getting frustrated, abandoning their orders, and walking away.</mark>

The kiosk needed a redesign that would improve usability in a significant way, and this needed to be done quickly. My team was brought in to fix this problem. We knew going into it that we would need to support the existing functionality that the kiosk provided.

## User Personas and Journey Maps

When we observed users interacting with the kiosk, three types of user behaviors emerged which led to three distinct personas. The personas varied across two main traits:

1. Pace – how quickly does a user expect to be able to navigate through the user interface?
2. Tech savviness – how comfortable is the user with kiosks and other relevant touch screen modalities? 

<figure>
    <img class="img-medium" src="/assets/img/self-order-kiosk/raymond-davids.png" alt="a user persona">
    <figcaption>A user persona I wrote for this project</figcaption>
</figure>

<figure>
    <img class="img-large" src="/assets/img/self-order-kiosk/raymond-davids-cjm.png" alt="a user journey map">
    <figcaption>A customer journey map that I wrote for this project. Template credit: Nielsen Norman Group</figcaption>
</figure>

### The Personas

* Brian – a tech savvy user who’s focused on budget
* Raymond – a kiosk novice user who moves at a slower pace
* Karen – a moderately tech savvy user who moves at a fast pace

(I wrote the Raymond persona and my teammates wrote the other two.)</p>

## A Stroke of Good Luck: Our Own, In-House Test Bed

We were fortunate to have an ideal user testing setup: the product was in use in our own office. NCR installed several kiosks in its food court. Given this ripe opportunity, our team was able to perform user testing during mealtimes in a highly realistic context. We performed user observations on a daily basis (usually at lunch) and used the insights we gleaned in the next iterations of our designs.

<figure>
    <img class="img-large" src="/assets/img/self-order-kiosk/girl-using-ncr-self-kiosk.png" alt="A woman tapping the kiosk screen">
    <figcaption>The kiosks inside NCR’s food court. [Untitled]. Retrieved April 7, 2020 from <a target="_blank" href="https://www.ncr.com/restaurants">https://www.ncr.com/restaurants</a>.</figcaption>
</figure>

## Market Analysis: Kiosk Best-Practices

In an effort to understand kiosk best practices and conventions, I worked with another UX designer on my team to analyze a variety of kiosks in the market. We found patterns across the kiosk products which we used to establish a set of kiosk best-practices to use in our application.

I dissected kiosk user interfaces such as:

* Best Buy Express
* Disney Fastpass
* Ikea
* Home Depot Self-Checkout
* Redbox
* Subway
* Panera
* Jack in the Box
* and a few others

Then, I broke down these kiosks’ user flows into smaller chunks of the user experience so that we could better analyze each interaction.

I looked at how these kiosks:

* Display information to users
* Display status to users
* Educate users
* Handle loading
* Present options to users
* Provide feedback to users
* Collect data from users
* Summarize orders
* etc.

## Understanding the Existing User Flow

In effort to understand the existing user flow at the start of the project, I broke the flow down into a series of diagrams. This helped my team quickly get on the same page about what the app does and spot opportunities to explore possible improvements right out of the gate.

<figure>
    <img src="/assets/img/self-order-kiosk/existing-application-flow.png" alt="a task flow analysis diagram with app screenshots underneath">
    <figcaption>A diagram I made to map out the existing user flow of the application</figcaption>
</figure>

## Imagining a Better User Flow

Once I had a good understanding of how the experience of the existing application was architected, I took to the whiteboard and began ideating on alternative user flows. I asked: how might we make the user flow better for each of our personas?

<figure>
    <img src="/assets/img/self-order-kiosk/different-flow-options.png" alt="a sketch of six different user flow options">
    <figcaption>Six different user flows I brainstormed and diagrammed </figcaption>
</figure>

These ideas became the basis for our team’s subsequent iterations and experiments, and were effectively the starting point for the information architecture and navigation of the app.

<figure>
    <img src="/assets/img/self-order-kiosk/whiteboard-reflection.png" alt="A task flow with my reflection in the whiteboard">
    <figcaption>This was a highly iterative process where I continued to go back to the whiteboard each time I learned something new</figcaption>
</figure>

## Pain Point #1: Customizing an Order

Many users struggled to understand how to customize their orders. Removing ketchup or adding cheese… whatever it was, users often wanted to make these kinds of customizations to their orders and the application wasn’t providing an easy way for them to do that. I came up with several different ideas of how to redesign this. Then I prototyped the ideas and my team and I tested them with users. It took several iterations to get this right, but it was well worthwhile since this was one of the aspects of the app that was tripping people up the most.

<figure>
    <img class="img-small" src="/assets/img/self-order-kiosk/modifiers-prototype.gif" alt="a modifiers prototype">
    <figcaption>An example of one of the Axure prototypes I made to test how a user might make customizations to a menu item</figcaption>
</figure>

## Pain Point #2: Adding Items to the Cart

Users consistently had trouble knowing whether or not something was in their cart. I prototyped several different design alternatives which my team and I then tested. Ultimately, these tests led to us moving where the cart was located on the screen and how we approached animations when a user adds something to his or her cart.

<figure>
    <img class="img-small" src="/assets/img/self-order-kiosk/add-to-cart-prototype-02.gif" alt="add to cart prototype">
    <figcaption>A low-fidelity Axure prototype I made to study how to improve usability when a user added an item to his or her cart</figcaption>
</figure>

## Pain Point #3: Ordering Combo Meals

Users had difficulty navigating through Combo Meals on the kiosk. Combo Meals often bring with them some inherent complexity, so the challenge was to represent all of the ways in which a Combo Meal can and cannot be customized while making it easy for a user to navigate through the process of ordering a Combo Meal.

<figure>
    <img class="img-small" src="/assets/img/self-order-kiosk/combos-prototype-01.gif" alt="combos prototype">
    <figcaption>A prototype I made in Sketch to test a design concept for navigating through Combo Meals</figcaption>
</figure>

<figure>
    <img class="img-medium" src="/assets/img/self-order-kiosk/combos-prototype-02.gif" alt="another combos prototype">
    <figcaption>A highly interactive prototype I made in Axure that conveys several different ways of customizing a Combo Meal</figcaption>
</figure>

## Setting the Strategy for Responsive Design

I established a strategy for how the application was to scale across different screen sizes responsively. I worked in close collaboration with the lead visual designer on the project to ensure that the responsive strategy I came up with would work with the layouts we were planning.

<figure>
    <img class="img-large" src="/assets/img/self-order-kiosk/responsive-breakpoints.png" alt="a diagram that shows screen design and devices across four breakpoints">
    <figcaption>An artifact I made to articulate our responsive breakpoint strategy to stakeholders</figcaption>
</figure>

## Final Product

<figure>    
    <img src="/assets/img/self-order-kiosk/cso2-final-UI.png" alt="the final design on a kiosk and two screenshots">
    <figcaption>Parts of this image retrieved April 7, 2020 from <a target="_blank" href="https://www.ncr.com/restaurants/self-ordering">https://www.ncr.com/restaurants/self-ordering</a>.</figcaption>
</figure>

## My Role

I worked with a team of two UX designers (myself included), two UI designers and one UX research specialist. Because of the size of the team, this enabled us to work in a specialized way. On this project, I focused on UX architecture efforts: UX strategy, creating user flows, creating wireframes, ideation, and producing prototypes for user testing. I did not focus on high-fidelity visual design work on this project.

## Conclusion

In the end, my team and I were able to deliver on-time and on-quality. Before we redesign the application, users struggled to complete orders and would often get frustrated by the application. <mark>After we delivered our redesign and the product was built, users had a significantly higher rate of completing orders and were observably less frustrated when using the application.</mark> Our ability to perform frequent user testing in the real context of use proved to be an invaluable resource to inform design iterations which ultimately improved the user experience.
