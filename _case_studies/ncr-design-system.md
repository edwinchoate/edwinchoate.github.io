---
layout: case_study
title: NCR Design System
permalink: /articles/ncr-design-system/

thumbnail: /assets/img/ncr-design-system/ncr-ds-thumbnail.png
subtitle: NCR's flagship design system and documentation site

cover_photo: /assets/img/ncr-design-system/ncr-ds-header.png
summary: I worked on the NCR Design System from its inception, focusing on the design of the user interface components in the system as well as the design system documentation site.
---

## Project Goal

The goal of this project was to implement a design system that provides web & native app component designs, working code components, and the relevant accompanying documentation so that designers and developers at NCR are equipped to build products quickly and efficiently with a common design language.

## Deciding Which Components to Include

My team and I quickly realized the importance of understanding and prioritizing which components would be included in the initial release of the design system. We knew that we wanted to release an early alpha version of the design system so that we could go ahead and start collecting feedback on it, thus we needed to be intentional about which components made the cut.

<figure>
    <img src="/assets/img/ncr-design-system/component-affinity-map.png" alt="an affinity map of UI components from a variety of design systems">
    <figcaption>I created an affinity map in <a target="_blank" href="https://www.figma.com">Figma</a> where I consolidated screenshots of various components from a variety of design systems. This allowed us to understand how fundamental (or not) a given component would be, which helped us narrow down our shortlist of components to include in the alpha release.</figcaption>
</figure>

## Market Research - Design System Sites

Fortunately, there are _lots_ of design systems to check out online. I used [this fantastic list of design systems by @alexpate on Github](https://github.com/alexpate/awesome-design-systems) to find some of the best design system sites out there from which to draw inspiration. As I researched, I took screenshots and created an affinity map to break design system sites into their composite parts. This allowed me to spot patterns and understand conventions across the various design system sites.

<figure>
    <img src="/assets/img/ncr-design-system/site-structure-analysis.png" alt="an affinity map of general patterns on design system sites">
    <figcaption>I made an affinity diagram in <a target="_blank" href="https://www.figma.com">Figma</a> to break down the patterns I was seeing across popular design system sites online. I used <a target="_blank" href="https://github.com/alexpate/awesome-design-systems">alexpate's list of awesome design systems</a> to cast a wide net, looking at design systems large and small.</figcaption>
</figure>

In particular, I analyzed:

* [Adobe Spectrum](https://spectrum.adobe.com/)
* [Alibaba Ant Design](https://ant.design/)
* [Atlassian Design System](https://atlassian.design/)
* [Firefox Photon Design System](https://acorn.firefox.com/latest/)
* [GitHub Primer](https://primer.style/)
* [Google Material Design](https://m3.material.io/)
* [IBM Carbon](https://carbondesignsystem.com/)
* [Mailchimp Content Styleguide](https://styleguide.mailchimp.com/)
* [Microsoft Fluent](https://www.microsoft.com/design/fluent/)
* [Shopify Polaris](https://polaris.shopify.com/)

Next, I created a sitemap to focus purely on information and site structure. By this time, my team and I had narrowed down our list of components we wanted to include in the alpha release, so I made sure that the site structure I was planning would be able to accommodate the components we selected, while leaving room for future iterations of new components.

<figure>
    <img src="/assets/img/ncr-design-system/ncr-ds-sitemap.png" alt="an early sitemap of the design system site">
    <figcaption>I made a sitemap to capture the way in which I wanted the information to be structured on our design system site after I began to see patterns across the various design system sites I researched.</figcaption>
</figure>

## UI Component Design

With our set of UI components established, we began working through our backlog, component by component. I was one of three designers who worked on designing the UI components. We were responsible for thinking through the states and variants that each component needed and executing the designs of those states.

<figure>
    <img src="/assets/img/ncr-design-system/ncr-ds-UI-component-designs.png" alt="a few UI components that I designed">
    <figcaption>Some of the UI components that I personally designed. As I designed each component, I focused on the variants and states they needed and systematized accordingly.</figcaption>
</figure>

In total, I designed these 11 components for the alpha release of the design system:

* Breadcrumbs
* Context Menu
* Date Picker
* List
* Menu
* Navigation Drawer
* Page Header
* Pagination
* Tabs
* Time Picker
* Tooltip

## Prototyping the Design System Site

I owned the task of prototyping what our design system site might be like. I created a prototype that used the patterns and conventions I observed in my research. As a design team, we hadn't yet established a look-and-feel we wanted to go with, so I prototyped in low-fidelity to focus on just the structure.

<figure>
    <img src="/assets/img/ncr-design-system/ncr-ds-site-wireframes.png" alt="four wireframe screens of the design system site early design">
    <figcaption>I created a low-fidelity prototype in Figma to explore what the design system site might look like, considering structure and navigation. I sought to create a site that followed the typical conventions of design system sites.</figcaption>
</figure>

[Open Figma prototype](https://www.figma.com/proto/znMhyqTKK2CmoKGnDt5nMA/NCR-Design-System-Site-Prototype?node-id=9%3A90&scaling=scale-down-width)

My team used the low-fidelity prototype I created as the basis for the final product. The front-end developers found the designs easy to implement because they were conventional. They were able to use external component libraries to build the site quickly, rather than having to reinvent the wheel.

## Final Product

<figure>
    <img src="/assets/img/ncr-design-system/ncr-ds-site-specs.png" alt="three screenshots of the final UI design of the design system site">
    <figcaption>The front-end developers on my team built out the final version of the site as a web app in JavaScript using the prototype I created as their guide. After having a collaborative ideation session, we went with a blueprint metaphor for the look and feel of the site.</figcaption>
</figure>

As of this writing, the design system is currently in alpha. The components are available as Web Components and React Native components. As the design system matures, we will continue to iterate on our component set, add new components, refine the existing components, and conduct ongoing usability tests with internal designers and developers using the system.

## My Role

On this project, I worked with a team of three designers (myself included), one UX researcher, and three front-end developers. The designers focused on the UI component design and designing the site. The UX researcher focused on written documentation (in collaboration with the designers) and user testing. The front-end developers focused on building the UI components and building the site.

I wore a few hats on this project, including:

* UI component designer
* information architect
* market researcher
* design backlog planner

On this project, I did _not_ focus on the high-fidelity designs for the site or writing documentation.

## Conclusion

It was a great experience to be part of a team designing and building a design system from scratch. I learned a lot about component design as I worked on this project. Our team was able to release the alpha version of the design system on-time and on-quality and put the project in a prime position for further iterations through continued adoption of the system.
