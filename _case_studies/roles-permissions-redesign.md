---
layout: case_study
title: Roles & Permissions Redesign
permalink: /articles/roles-permissions-redesign/

thumbnail: /assets/img/roles-permissions-redesign/roles-permissions-thumbnail.png
subtitle: Fixing usability of a core config system

cover_photo: /assets/img/roles-permissions-redesign/roles-permissions-header.png
summary: The roles & permissions configuration interface had become unusable after several years. I analyzed the existing interface and redesigned it, re-labeling all of the permissions while validating the changes with stakeholders. Upon launch, we received positive feedback that we'd accomplished exactly what we'd set out to do.
---

## The Problem I Was Trying to Solve

This project was one of those hairy monsters that nobody wanted to touch with a ten-foot pole. Multiple people around the org were aware of the problem: <mark>the experience had become a mess. It suffered from years of adding just one more setting, without anybody going in making it organized.</mark> People were busy, customers needed a new setting, and they needed it yesterday. This project was about going in, with gloves pulled up to my elbows, and cleaning up the mess. 

I came to realize that **difficult-to-decipher labels, in combination with the lack of an organizational schema, were making it very difficult for people to understand the interface** and feel confident using it.

## Performing a UX Audit

The roles & permissions module was just one part of the broader configuration suite (one of many modules). I started by screenshotting the entire configuration suite and putting it into a Miro board. From there, I took a look at the architecture of how everything was laid out. I saw what others were telling me: that the roles & permissions module in particular was in need of an overhaul. 

<figure>
    <img alt="a flowchart of the configuration app with arrows connecting each screen and sticky notes annotating my thoughts as I did a UX audit" src="/assets/img/roles-permissions-redesign/flow-map.png">
    <figcaption>I performed a UX audit of the existing software by mapping out the flow and attaching a sticky note each time I saw a UX issue.</figcaption>
</figure>

By time I'd looked over the existing experience, I had formed an intuition of what was wrong with the experience and what needed to be fixed:

* System-driven language
* UI not following best practices or using conventional components 
* Insufficient labels
* Meaningless help text
* No organizational schema (no groups) of the permissions 
* No easy way to preview your work
    * No view showing all of the users and their assigned roles

## Re-Writing the Labels and Tooltips of Each Permission 

A critical part of success in this project was abiding by this **self-imposed constraint: absolutely no changes to how the permissions themselves function** or what they affect in the system. I only allowed myself to make label changes and user interface changes. All permissions were held equal. Doing it any other way would've been completely unmanageable.

There were dozens of permissions and they were vaguely (or misleadingly) labeled. Every permission had a help text, even if it didn't need it. Many of the help texts were obvious restatements of the label and didn't need to be there (for instance, if a setting was labeled _Start Return_, the help text might've read "Allows user to start return" or something like that that didn't add any meaning.)

**There was no magic shortcut for this. I simply had to conduct several rounds of stakeholder interviews until I understood what each setting truly did.**

Then, 

* I re-wrote all of the permissions labels
* I added inline help text (as tooltips) in the UI
* I re-wrote all of the help texts, removing the ones that didn't add any meaning
    * (This created a much stronger signal that help texts would actually provide more info to the user)
* I arranged the permissions into categories, which I then labeled, providing an organizational structure to the information
    * (Previously, all of the permissions were just in one big massive group) 

## Reorganizing the Information in a Single Source of Truth

As I reorganized the information, I used the component in my design file as the single source of truth, updating it every time I edited a label or tooltip.

<figure>
    <img alt="an artboard showing a master component of the permissions list connected to the broader interface prototype" src="/assets/img/roles-permissions-redesign/tooltip-reference.png">
    <figcaption>Every time I made a change, I updated the text in the same artifact: a master component template. Every time I had a discussion with a stakeholder we looked at this template. Every time I asked for feedback I linked to this template. It got socialized to the point that stakeholders were asking for updates to this template specifically.</figcaption>
</figure>

By using one and only one source of truth for the permissions, their groupings, and their help text tooltips, I was able to **preserve sanity, minimize inconsistencies, and socialize to other stakeholders where to go to find the latest changes.**

<figure>
    <video width="100%" controls>
        <source src="/assets/img/roles-permissions-redesign/expanding-some-tooltips.mov" >
    </video>
    <figcaption>Another major benefit of using the design artifact as the source of truth was that it allowed for a fully interactive prototype where all of the help tooltips accurately contained the correct text. This made it easy for anyone to lookup which tooltip was supposed to say what... it was right there in the prototype.</figcaption>
</figure>

I continued to maintain the prototype artifact even after this project was complete, ensuring it stayed accurate and up-to-date.

## The Missing View: All Users

To my surprise, there was not a way in the previous design to allow you to view a list of all the users and which role they were assigned to. I made this view a primary consideration in the new design, as it's really the main attraction.

<figure>
    <img alt="a list view titled All Users that shows every user in the system and which role they've got assigned to them" src="/assets/img/roles-permissions-redesign/all-users.png">
    <figcaption>This view is typical of what you'd expect from a roles & permissions UI. To my surprise, there wasn't a view like this in the prior experience, which must've been contributing to user frustration.</figcaption>
</figure>

## Upgrading the UI - Using Best Practices

There were several places in the experience where there was technically an interface that met the user's needs, but it didn't follow ordinary UI conventions. I went through the existing interface and redesigned it, cutting none of the existing functionality and adding in features that would enhance the interface.

I used the components from the design system that I built and actively maintain when building out the prototype for this project ([Article: TaxSlayer Pro Design System](/articles/taxslayer-pro-design-system/)).

<figure>
    <img alt="the old way of assigning roles to multiple users juxtaposed next to the new interface for doing that" src="/assets/img/roles-permissions-redesign/role-assignment-new-old.png">
    <figcaption>The old way of assigning roles (left) was functional, but used odd user interface elements. In the new design (right), I used more conventional elements and added in UI controls that should've been in the experience, like a Select All control, a filter for Inactive Users, and an indicator of how many people you've selected. By making this action a modal, it fits better into the experience and is accessible from more than one context.</figcaption>
</figure>

In addition to re-evaluating the on-screen components, it was important to re-evaluate the overall structure of flow of the featureset. Above, I realized we were using a full page when it should've been a dialog. Below, I realized we were using a full page when it could've been an overlay. By improving the experience at the structural level, it improves the usability of the experience.

<figure>
    <img alt="the old way of seeing a users permissions which was a full page juxtaposed next to the new way of seeing a users permissions which is now a side drawer" src="/assets/img/roles-permissions-redesign/view-permissions-new-old.png">
    <figcaption>The old way of viewing a given user's permissions (left) was to navigate to a dedicated page. This was cumbersome if you wanted to check many users' permissions in quick succession. Now, you can open a side drawer to preview a user's permissions without leaving the original context, holding your place in the list of users.</figcaption>
</figure>

<figure>
    <video width="100%" controls>
        <source src="/assets/img/roles-permissions-redesign/demo-view-a-users-permissions.mp4" >
    </video>
    <figcaption>An interactive prototype showing how the user can scroll through the list of users and previous each user's permissions in quick succession</figcaption>
</figure>

<figure>
    <img alt="the old permissions editing screen juxtaposed next to the new permissions editing screen" src="/assets/img/roles-permissions-redesign/edit-role-new-old.png">
    <figcaption>The new Role edit page employed several of the fundamental enhancements: the groupings of the permissions, the new labels, the new inline help text tooltips for the permissions. I also added a way to see the users in the system assigned to that particular role; there hadn't been a way to see this view on the information in the old interface</figcaption>
</figure>

## Better Explaining How the Admin Role Works

When talking with stakeholders, it became clear to me that the Admin role had some special logic which made it work differently than the other roles, but the user interface wasn't doing a good job of explaining to first-time users how this works, which was causing confusion and errors.

<figure>
    <img alt="a side-by-side showing the difference between a regular Role and the Admin role, which you can't edit" src="/assets/img/roles-permissions-redesign/roles-screens.png">
    <figcaption>Part of the logic involved the fact that you can't alter an Admin's permissions. The admin automatically has everything turned on. So, I made a distinct design for the Admin role's page specifically and added some explicit communication in the interface to explain to users how this works.</figcaption>
</figure>

## Making It Easier to Copy Roles (Saving Work)

**One piece of feedback I kept hearing from stakeholders was that people have to spend too much time clicking every time they create a new role**. Each time they make a new role, they have to start from scratch and go through every single permission and click, click, click, click... until they've got the role set up to their liking. And then they've got to do this all over again if they want to create another role. 

<figure>
    <img alt="a dialog presenting the user with options to copy the new role from an existing one, or create the new role from a pre-defined template" src="/assets/img/roles-permissions-redesign/role-templates.png">
    <figcaption>I introduced an option to create a new role based on a copy of an existing role. This way, at least the user would have a starting place that wasn't everything unchecked. There'd be, potentially, a lot less work for them to do to get to the new role they wanted.</figcaption>
</figure>

In addition to letting the user copy an existing role when creating a new one, I introduced this concept of a _Template_. The template represented four roles that we commonly see in our domain. I pitched this to the engineering team as a low-effort thing: all this is is stock data in the database that comes with the application. It's a set of hard-coded _suggestions_, four roles that somebody who knows what they are doing in the domain has pre-made for you, take them or leave them. Or, you could use them as a base and customize from there, potentially saving work. 

* The _Copy_ feature was intended **to save clicks**
* The _Templates_ feature was intended **to save thought**: why make the user think of these roles from scratch if there are common roles we already know about in our industry? 

<figure>
    <img alt="dialogs showing the user they are about to affect 99 users and displaying the list of users to get confirmation before taking the action" src="/assets/img/roles-permissions-redesign/mass-actions.png">
    <figcaption>There were a few opportunities to improve how the software helps the user understand what they are about to do. For example, if a user is about to edit or delete many users at once, the software lists the affected users so that the user can preview the action before executing it.</figcaption>
</figure>

## Successful Launch

With an interface with this many consequential settings, there was a good chance we'd missed something. The team was able to be thorough, however. When the new interface launched, there were a couple permissions that we needed to tweak and fix (I anticipated this and made myself available to alter the design as a follow up). The vast majority of the changes went smoothly. This was a testament to the team's attention to detail.

## Positive User Feedback

> _"Taxslayer has updated the Roles & Permissions menu—I really like the way they grouped things now—so much easier to navigate."_<br>—User

After the changes went live in the software, I found a pleasant surprise in my email inbox. A user had written this feedback and asked that it be forwarded along to the team that worked on this project. It's always nice to see feedback like this, especially when it's articulating precisely the goal of the project.

## My Role

**I proactively initiated this project; I was not asked to do this.** I was the sole designer on this project, doing all of the UX design and UI design. I conducted interviews with stakeholders such as product managers, software engineers, and QA testers to learn what I needed to learn about the permissions and what they did so that I could rewrite the labels and validate the changes.

## Conclusion

The roles and permissions configuration experience was something we knew we needed to fix but because it was so hairy it didn't rank very high on the list of things we _wanted_ to do. But, we did it anyway, and now the user experience of configuring roles and permissions in the system is all the better for it. It was affirming to receive user feedback saying we accomplished exactly that.
