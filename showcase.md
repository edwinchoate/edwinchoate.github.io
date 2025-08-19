---
layout: page
title: Showcase
---

Here's a quick, less-than-a-minute summary of some of the projects I've worked on.

<!-- <figure>
    <img src="/assets/img/taxslayer-pro-ecommerce/finished-design-renewal.png">
    <figcaption>I designed a custom ecommerce flow that's powering thousands of large transactions per year. 
    <br><a href="/articles/taxslayer-pro-ecommerce/">Full Article: TaxSlayer Pro Ecommerce &rarr;</a></figcaption>
</figure> -->

<figure>
    <img src="/assets/img/ncr-design-system/ncr-ds-site-specs.png">
    <figcaption>I've been part of a design systems team designing the UI components for a fortune 500 company. <br><a href="/articles/ncr-design-system/">Full Article: NCR Design System &rarr;</a></figcaption>
</figure>

<!-- <figure>
    <img src="/assets/img/prepcheck/fresh-chat.png">
    <figcaption>I've designed an LLM-powered AI chat feature that's live in production. <br><a href="/articles/prepcheck/">Full Article: PrepCheck &rarr;</a></figcaption>
</figure> -->

<figure>
    <img src="/assets/img/taxslayer-pro-design-system/component-overview.jpg">
    <figcaption>I have been the sole designer behind an entire design system (using a base system as the foundation). <br><a href="/articles/taxslayer-pro-design-system/">Full Article: TaxSlayer Pro Design System &rarr;</a></figcaption>
</figure>

<figure>
    <img src="/assets/img/sketchy-wireframe-system/components.png">
    <figcaption>I built a feature-complete wireframe design system from scratch. <br><a href="/articles/sketchy-wireframe-system/">Full Article: Sketchy Wireframe System &rarr;</a></figcaption>
</figure>

<!-- <figure>
    <img src="/assets/img/speeddialer-ai/customer-activity-history.png">
    <figcaption>I designed an AI-powered support tool for a hackathon. <br><a href="/articles/speeddialer-ai/">Full Article: SpeedDialer AI &rarr;</a></figcaption>
</figure> -->

<figure>
    <img src="/assets/img/self-order-kiosk/cso2-final-UI.png">
    <figcaption>I've been part of a tiger team which brought a restaurant food-ordering kiosk to market for a fortune 500 company. <br><a href="/articles/self-order-kiosk/">Full Article: Self-Order Kiosk &rarr;</a></figcaption>
</figure>

<figure>
    <img src="/assets/img/menu-maker/menu-maker-final-UI.png">
    <figcaption>I led a team of designers to create a restaurant menu config app for a fortune 500 company. <br><a href="/articles/menu-maker/">Full Article: Menu Maker &rarr;</a></figcaption>
</figure>

<figure>
    <img src="/assets/img/tally-counter/app-store-page.png">
    <figcaption>I can code, and I've published a simple app to the Google Play Store. <br><a href="/articles/tally-counter/">Full Article: Tally Counter &rarr;</a></figcaption>
</figure>

### Let's Get in Touch

Email me at <a href="mailto:{{ site.email }}">{{ site.email }}</a>, or <a target="_blank" href="https://www.linkedin.com/in/{{ site.linkedin_username }}">connect with me on LinkedIn</a>.

{% if site.case_studies.size > 1 %}
<div>
    <h2>Read More</h2>

    <ul>
        <li><a href="{{ "/" | relative_url }}">Projects</a>
            <ul>
                {% for case_study in site.case_studies %}
                    <li><a href="{{ case_study.url }}">{{ case_study.title }}</a></li>
                {% endfor %}
            </ul>
        </li>
    </ul>
</div>
{% endif %}

<a href="#top">&uarr; Back to Top</a>
