---
layout: case_study
title: TaxSlayer Pro Ecommerce
permalink: /articles/taxslayer-pro-ecommerce/

thumbnail: /assets/img/taxslayer-pro-ecommerce/ecommerce-thumbnail.png
subtitle: Enabling buying TaxSlayer Pro online

cover_photo: /assets/img/taxslayer-pro-ecommerce/ecommerce-cover-header.png
summary: In a market-leading effort to bring self-serve software purchasing online, TaxSlayer Pro built a custom interface to connect to their pre-existing backoffice transaction system. I was the sole designer on this project, doing everything from information architecture to high-fidelity user interface design. I conducted usability testing on the production software. When the solution was scaled out, it got real-world usage immediately, in higher volume than expected.
---


## What We Were Trying to Accomplish

In the professional tax software space, it's not so common to be able to purchase the software directly online. Usually, you have to call a phone number to buy. TaxSlayer Pro decided to be a leader in the market and <mark>enable the ability to purchase the TaxSlayer Pro product on the website</mark>, [taxslayerpro.com](https://www.taxslayerpro.com/). 

The backoffice systems to process purchases already existed; these were the systems sales was already using to process transactions. 

All that was needed to enable the ability to buy online was a frontend, connected to the existing backoffice systems. 

## Why Custom? 

You might be wondering, why not using a 3rd party, turnkey tool like Stripe or something? Why reinvent the wheel and build an ecommerce process from scratch? 3rd parties were of course considered, but the custom route eneded up being the choice, for several reasons:

* The backoffice systems were already in place
* More control over costs and fees
* Stability
* Predicability
* Preserving integrations from dependent backoffice systems

So, this was not reinventing the wheel. It was **bringing a capability online in a pre-existing ecosystem that was ready for a frontend**.

## Getting Clear: What Will We Support, Exactly?

Since there are a ton of established conventions for ecommerce interfaces, this project was moreso a matter of getting clear on what kinds of capabilities we wanted to provide. 

### Stakeholder Brainstorming Workshop

The team kicked off the project with a brainstorming workshop. The product stakeholders ran this workshop, wherein each stakeholder (sales, marketing, UX, product, and development were all represented) simply wrote out several sticky notes (using Zoom's virtual whiteboard tool). 

For the most part, we brainstormed feature ideas. This was helpful for me, to get a sense of what the other stakeholders had in mind going in to this project. 

### Talking Through It

I took the ideas from the workshop, ideas that I gathered from research online, and ideas I came up with myself, and I mapped out a flow chart of an ecommerce user flow. 

From there, I held two hour-long meetings with product and sales stakeholders. In those meetings, we discussed thoughts on what's important to support in the initial launch of this project. We discussed lots of business logic, and how the backoffice system works. I documented product's and sales' thoughts as a column of text underneath each step in the user flow. This way, we'd talked through a lot of the possibilities before I even began any designs. 

<figure>
    <img alt="a flow chart of an ecommerce purchase process annotated with stakeholders' thoughts" src="/assets/img/taxslayer-pro-ecommerce/annotated-flowchart.png">
    <figcaption>I asked questions I had prepared beforehand and listened to stakeholders' thoughts as I annotated the flow chart, capturing thoughts before starting on design artifacts.</figcaption>
</figure>

After I understood what the stakeholders had in mind, I created a Miro board where I identified each affordance (functionality the experience will afford) that I could consider putting into the experience from the perspective of the user. As I did this, **I considered the features stakeholders were asking for as well as features they hadn't mentioned.**

<figure>
    <img alt="a group of sticky notes organized under four groups: shop, ring up, pay, and own" src="/assets/img/taxslayer-pro-ecommerce/ecommerce-feature-brainstorm.png">
    <figcaption>As a way of getting organized, I will often arrange information on sticky notes as I think about how the affordances interconnect with one another. Here, I was thinking about different features as they fit into different stages of the purchasing process.</figcaption>
</figure>

## Early Iterations

As I began to work out early ideas for how the experience should flow, I used _Sketchy_, a wireframing library I built, to work out some early concepts in low-fidelity ([Article: Sketchy Wireframe System](/articles/sketchy-wireframe-system/)). I often use Sketchy to work out quick, throwaway ideas in the beginning of the ideation process. 

<figure>
    <img alt="a rough sketch of a purchase flow" src="/assets/img/taxslayer-pro-ecommerce/low-fi-flow.png">
    <figcaption>By this time, I was trying to work out the pros and cons of where to place certain steps of the flow. For example, what is the advantage of collecting payment information before asking the user to create an account? What about after?</figcaption>
</figure>

As I mocked up these early concepts, I synced with product and sales to ask them questions like: 

* What data _must_ be collected before we run a transaction? 
* What are your thoughts about accepting purchases without a user account? (i.e. guest checkout)
* How fast is our credit card processing system? 
* If a customer starts a transaction online and decides to finish the transaction over the phone, what are the operational steps we would want to take?
* Etc.

Each one of these questions is its own conversation really. Depending on the answers to these questions, it affects what the ideal design would be. 

## Futher Iterations

As the bigger picture pieces started to fall into place, I focused the next iterations on smaller, more detailed problems. 

<figure>
    <img alt="a more polished sketch of a purchase flow" src="/assets/img/taxslayer-pro-ecommerce/iter2-flow.png">
    <figcaption>The next iterations became more visually polished, and I continued to rearrange the flow to try out more ideas.</figcaption>
</figure>

At this point, I was considering questions like: 

* How will the user add items to their order?
* If we were to support alternative payment methods like Venmo, PayPal, Apple Pay, etc., where would that fit in to the flow? 
* Could we collect vital contact info upfront, and formally finish creating the account later? Would this lower perceived friction? 
* How might the user preview their order?

<figure>
    <img alt="a shopping cart interface component, showing TaxSlayer Pro added to the cart" src="/assets/img/taxslayer-pro-ecommerce/cart.png">
    <figcaption>In one of the iterations, I mocked up a concept of a shopping cart, before realizing it was overkill and removing it from the design.</figcaption>
</figure>

After discussions with stakeholders, I realized it would be adding significant technical effort to introduce a shopping cart. Since the user would likely only have one thing to purchase, the software, there wasn't much value in having a cart: it'd be a cart that'd always hold just one item. So, I decided it'd be best to simplify the whole thing and have the choice of product package be integrated into the purchase flow, removing the need to have a cart.

Among other things, removing the cart solved an important risk: the possibility of users adding a first-time purchase to their cart, not realizing the renewal was technically a separate SKU.

<figure>
    <img alt="a page titled Review Your Order showing the contents of the customer's order" src="/assets/img/taxslayer-pro-ecommerce/review-concept.png">
    <figcaption>I toyed around with having a Review page that'd display the user's order back to them. Later on, I ended up realizing this could be placed on the Payment screen, removing the need to have this extra screen.</figcaption>
</figure>

As I iterated through more design ideas, I continued to simplify the design, remove unecessary steps, and trim down what was on the screen. Most of the improvements from iteration to iteration involved substracting things rather than adding.

<figure>
    <img alt="a screen showing a purchase flow embedded in the software post-login" src="/assets/img/taxslayer-pro-design-system/in-product-renewal-concept.png">
    <figcaption>At first, I was considering the renewal experience be embedded inside of the software's main layout. As I iterated, I realized there was another opportunity to simplify.</figcaption>
</figure>

By this time, I knew it would definitely be a requirement that existing customers be able to renew their software while logged in to their software. I had been fixated on embedding the renewal purchase flow inside of the logged-in software experience. I realized after a while, however, that there was another opportunity to simplify: removing the navigational elements from the side and top of the screen and have the logged-in renewal experience be much more similar (almost identical) to the first-time buyer experience. This change further simplified the design, improved consistency, and it reduced the effort required to build and maintain both experiences. 

![](/assets/img/taxslayer-pro-design-system/call-sales-footer.png)

## Future-Proofing the Design

With the cart and the Review page gone, I was worried we might decide to sell other products on the site in the future and that might break the design. There was no talk of doing that in the forseeable future, but that could change. I wanted the design to hold up to that.

I felt that I needed to have a strategy for accomodating more products and fitting that into the existing design patterns. 

<figure>
    <img alt="a design showing a side menu on the products selection page with the options: All, Packages, Add-Ons, and Event Tickets" src="/assets/img/taxslayer-pro-ecommerce/future-proofing-nav.png">
    <figcaption>By working out how the design would need to be modified if we decided to sell things like add-ons or event tickets in the future, I was able to convince myself that I wasn't painting us into a corner with the design.</figcaption>
</figure>

I created a side menu which worked sort of like "pages" in a "store". If we decided to list more products in the future, they could be here, on their own page. 

I worked with engineering to confirm:

* We could add a side nav with pages to the "store" 
* We could "remember" what the user clicked on from the marketing site (e.g. using something like a query param)
* Based on what the user clicked, we could route them to the appropriate page in the "store"

In my mind, once I confirmed we'd be able to do something like this, I felt the design was properly future-proofed.

## Product Thumbnails: Helping Users Understand Their Options

Nobody was asking for this, but it became clear to me that the purchase experience needed to have a visual way of differentiating between the products. I saw this as a way to make the interface easier to use, and (more importantly) reduce errors. The only thing that would be purchasable was the main product, TaxSlayer Pro, but there were four different package levels you could choose from. 

I realized I needed to make a set of visuals that accomplished these things: 

* Convey that this is the main product, TaxSlayer Pro
* Convey that you are choosing between different packages of the same thing
* Be visually appealing and simple, not distracting
* Be on-brand

<figure>
    <img alt="a sheet of thumbnail graphics showing TaxSlayer Pro in four colors and TaxSlayer Pro renewals in four colors" src="/assets/img/taxslayer-pro-ecommerce/pro-product-thumbnails.png">
    <figcaption>I made a set of product thumbnails that would differentiate between the package levels and show the difference between initial purchase and renewals.</figcaption>
</figure>

I mocked up a dozen different ideas for these thumbnails. I just kept going until I got it right. I ultimately went with a simple TaxSlayer Pro logo with a stripe down the side and a different color for each package level. Up to this point, no one had ever taken just the word "PRO" from the main wordmark and put it underneath the icon. That was new thing I started here. There was a rhyme and reason to the colors I chose. I used the colors from the main color palette in the design system that I built and maintain ([Article: TaxSlayer Pro Design System](/articles/taxslayer-pro-design-system/)). I chose blue for the _Pro Web_ package, because blue is the main brand color, and that package is your most common option. I chose grey for the _Classic_ package because it's your more basic option. I chose gold for _Premium_ as is often the convention. 

Again, no one was asking for this but I knew it'd help users understand what was going on if the renewal items looked different. The renewals are a separate SKU, and I saw it as important to help the user understand that.

## Finishing Touches 

As I converged on a final design, I began to see the theme of what I was changing: simplification. I was simplifying wherever possible. And this was an intentional goal, because we know from research that the shorter you can make your checkout process, the better it performs. 

I continued trimming things where I could, removing or auto-populating inputs, shortening the page, and so forth. 

<figure>
    <img alt="the finished design, with three screens: Choose Package, Payment, and Order Confirmation" src="/assets/img/taxslayer-pro-ecommerce/finished-design.png">
    <figcaption>The finished design was simpler than all of its predecessors, with just three screens from the Buy button to the Place Order button.</figcaption>
</figure>

<figure>
    <img alt="the finished renewal flow, with the same screens as the new-purchase flow" src="/assets/img/taxslayer-pro-ecommerce/finished-design-renewal.png">
    <figcaption>The renewal design became much simpler as well once it matched the main purchase flow. Here, with the different thumbnails and product names, you can tell what you're ringing up, a renewal rather than a first-time purchase.</figcaption>
</figure>

The renewal flow became even simpler. Once I incorporated a pattern for a "saved" payment method, it became a zero- or one-click screen.

Even more importantly, by not having a cart, **we instead had the application redirect to the renewal experience automatically, even if the user erroneously tried to ring up a first-time purchase**. This design prevented a number of frustrating errors. Could you imagine paying over a thousand dollars only to realize you bought the wrong thing?! This forcing function of redirecting the user to the correct checkout flow seamlessly - this is one of the things I'm most proud of in this project. It is a totally invisible, yet vital piece of usability. 

## Usability Testing

The business stakeholders planned to slowly introduce the feature, making it only visible to a small audience at first. This gave us time to test the usability of the real thing, before scaling its usage out to many people.

I socialized the idea that the main objective was to perform a "smoke test". My main concerns surrounded the unanticipated unknowns... navigational or informational user needs going unmet or unforeseen technical hurdles with the brand-new frontend. I saw much more value in testing the _real, live system_ as opposed a click-thru prototype. Ecommerce interfaces are so conventional that I felt confident it would be familiar to people. We didn't need to validate the interface design; we needed to accelerate the discovery of unforeseen issues, the unknowns. I put together a test plan that would be ready to run as soon as we got the system running in a production environment.

### The Test Plan

The goals of the study were threefold:

1. Smoke test the usability of the solution
2. Understand how the current website affects users who are trying to find where to go to buy online
3. Identify opportunities for improvement

I ran the test on UserTesting.com and I had a sample size of N = 16.

The test had the users perform six tasks, spanning from browsing the website to finishing a purchase.

Each tasks measured ease (on a scale from 1-5), time on task, path analysis, and collected qualitative written feedback. Each participants' session was recorded as a video, and I watched each session, noting spoken quotes and observable evidences as they interacted with the software.

### The Test Results

The test showed that there were no major issues with the primary concern: the ecommerce flow. This is of course always the answer you'd like to see. There's no way to know until you test, however.

The test led to a few interesting insights: 

* There were some navigational issues finding product information
* Users wanted to read more information about the products
* People gravitate to comparison charts, a lot. (Maybe this is already a known thing, but it was new to me.)

<figure>
    <img alt="three slides from a research deck showing good results: straightforward paths, high ease of use ratings, and a pie chart showing that most users are satisfied with how long the process is" src="/assets/img/taxslayer-pro-ecommerce/research-slides.png">
    <figcaption>We uncovered some tangential opportunities to improve navigation on the website, but the main ecommerce flow was making sense and working for participants. It was good to see that the process was about as lengthy as users expected it to be.</figcaption>
</figure>

## Supporting Features: Card on File & Auto-Renew

To bring purchasing online, there were a few other things that need to change in the system.

<figure>
    <img alt="a card management screen with a stored credit card and an option to enroll in automatic renewal" src="/assets/img/taxslayer-pro-ecommerce/auto-renew-card-mgmt.png">
    <figcaption>We needed to support storing a card on file as well as the option to enroll in automatical renewable, like a subscription.</figcaption>
</figure>

I knew we need to make it possible for the system to renew their software automatically, but we hadn't figured out how to present this exactly, what we would called it, or how to treat it on screen. I coined the term "Auto-Renewal", which to my surprise stuck. I made an icon and put it in a card to give it a visual identity. Then, I took this card and placed in a few places in the experience so that it would be familiar to the user across contexts. The last piece of that puzzle was to draw a clear line between the card (storing the card information) and the enrollment (do you want to participate in auto-renewal or not). By putting a clear demarkation there, it made the experiences that use these concepts simpler to understand.

(I particularly enjoyed taking a gray rectangle and some monospace text, and making it look like a credit card in the UI. Stakeholders enjoyed it when I showed them this design.)

<figure>
    <img alt="a slightly different version of the create account screen titled Finish Creating Your Account" src="/assets/img/taxslayer-pro-ecommerce/demo-create-acct-step.png">
    <figcaption>It simplied things to have an alternate version of the Create Account page, <i>Finish Creating Your Account</i>, specifically designed for users with demo accounts. This was another example of simplifying the flow, reducing the number of steps required to complete a purchase.</figcaption>
</figure>

## What Was Built

In all, I'm proud of how similar the actual, built software was to the intended design. This is both a testament to the engineering team, as well as a testament to the simplicity of the design.

<figure>
    <img alt="screenshots of the built version of the software: the Creat Account screen, the product selection screen, and the Payment Screen" src="/assets/img/taxslayer-pro-ecommerce/built-version.png">
    <figcaption>This is what the software looks like as of this writing. It's a v1, and there's room to tweak and improve it, but overall its satisfyingly similar to the intended design.</figcaption>
</figure>

## Successful Results

Once we got everything in place, tested the experience, and felt confident in it, we began to make it more prominent on the website. Users took to it quickly, and in larger numbers than I personally expected. 

As of this writing, in less than one tax season, there have been: 

* **3 digits of new sales** use the new ecommerce experience
* **4 digits of renewals** go through the new ecommerce experience
* **3 digits of auto-renewals** set up through the new experience
* **3 digits of stored cards on file** set up through the new experience

## My Role

**On this project, I was the sole UX designer.** I created every artifact pictured in this article. I worked with a product manager and a product owner, and a team of a few software developers (most of whom were backend developers, and one frontend developer). I did the entirely of the usability test plan and running the testing.

Hats I wore in this project:

* Interaction designer
* UI designer
* Faciliator during definition sessions
* Usability researcher

I also populated and managed a design backlog for this project, which I used to organize design work items into v1, v2, and v3 buckets to make sure we didn't forget the more future-oriented ideas that didn't make it into v1.

## Conclusion

While the user interface aspects of this project are not novel, I was honored that the company trusted me to create an experience that would process a high volume of mission-critical transactions. It was thrilling to play such a large design role in this project, and I felt a genuine self of pride when I saw engineering demo the built version of the software. One of the things this project showed me is that going through multiple design iterations upfront immediately pays off. I got to see that in action. If we had tried to push earlier iterations (which weren't as simple), there's no gaurantee that code, testing, and adoption would've have been as smooth or as successful as they were.
