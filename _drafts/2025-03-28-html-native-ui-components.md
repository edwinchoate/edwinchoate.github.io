---
layout: post
title: HTML5's Native UI Components
author: Edwin Choate
date: 2025-03-28
categories: html
---

HTML5 has an implementation of many of the common UI components. In this post, I've included a basic code snippet for each component and the component itself embeded in the article. I'm using this as a personal reference for the HTML5 components that have visible, on-screen interactivity. Essentially, I've filtered out all of the HTML5 tags that exist for just semanic reasons (like `<dt>`, `<section>`, etc.) that don't have any on-screen effects.

## In this post

* [Audio Player](#audio-player)
* [Button](#button)
* [Checkbox](#checkbox)
* [Color Picker](#color-picker)
* [Date Field](#date-field)
* [Datetime Field](#datetime-field)
* [Dialog](#dialog)
* [Fieldset](#fieldset)
* [File Picker](#file-picker)
* [Horizontal Rule](#horizontal-rule)
* [Number Field](#number-field)
* [Password Field](#password-field)
* [Progress Bar](#progress-bar)
* [Radio Buttons](#radio-buttons)
* [Search Field](#search-field)
* [Select Field](#select-field)
* [Slider](#slider)
* [Table](#table)
* [Text Field](#text-field)
* [Textarea](#textarea)
* [Time Field](#time-field)
* [Video Player](#video-player)

## Audio Player

<audio controls src="https://dare.wisc.edu/wp-content/uploads/sites/1051/2017/08/CA138clip.mp3"></audio>

{% highlight html %}
<audio controls src="https://dare.wisc.edu/wp-content/uploads/sites/1051/2017/08/CA138clip.mp3"></audio>
{% endhighlight %}

## Button

<button type="button">Button</button>
<button disabled type="button">Button</button>

{% highlight html %}
<button type="button">Button</button>
<button disabled type="button">Button</button>
{% endhighlight %}

## Checkbox

<div>
    <input id="my-checkbox" type="checkbox" />
    <label for="my-checkbox">Checkbox</label>
    <br><br>
</div>

{% highlight html %}
<div>
    <input id="my-checkbox" type="checkbox" />
    <label for="my-checkbox">Checkbox</label>
</div>
{% endhighlight %}

## Color Picker

<div>
    <input type="color" id="my-color" value="#CC5500" />
    <label for="my-color">Color picker</label>
    <br><br>
</div>

{% highlight html %}
<div>
    <input type="color" id="my-color" value="#CC5500" />
    <label for="my-color">Color picker</label>
</div>
{% endhighlight %}

## Date Field

<div>
    <label for="my-date">Date field</label>
    <input type="date" id="my-date" />
    <br><br>
</div>

{% highlight html %}
<div>
    <label for="my-date">Date field</label>
    <input type="date" id="my-date" />
</div>
{% endhighlight %}

## Datetime Field

<div>
    <label for="my-datetime">Datetime field</label>
    <input type="datetime-local" id="my-datetime" />
    <br><br>
</div>

{% highlight html %}
<div>
    <label for="my-datetime">Datetime field</label>
    <input type="datetime-local" id="my-datetime" />
</div>
{% endhighlight %}

## Dialog

<dialog>
    <p>Dialog</p>
    <button autofocus>Close</button>
</dialog>
<button id="show-dialog">Show dialog</button>

<style>
    dialog { display: none; }
    dialog[open] { display: block; }
</style>

<script>
    let dialog = document.querySelector('dialog');

    document.querySelector('#show-dialog').addEventListener('click', () => {
        dialog.showModal();
    });

    document.querySelector('dialog > button').addEventListener('click', () => {
        dialog.close();
    });
</script>

{% highlight html %}
<dialog>
    <p>Dialog</p>
    <button autofocus>Close</button>
</dialog>
<button id="show-dialog">Show dialog</button>

<style>
    dialog { display: none; }
    dialog[open] { display: block; }
</style>

<script>
    let dialog = document.querySelector('dialog');

    document.querySelector('#show-dialog').addEventListener('click', () => {
        dialog.showModal();
    });

    document.querySelector('dialog > button').addEventListener('click', () => {
        dialog.close();
    });
</script>
{% endhighlight %}

## Fieldset

<div>
    <fieldset>
        <legend>Fieldset</legend>
        <!-- inputs go here -->
    </fieldset>
    <br>
</div>

{% highlight html %}
<fieldset>
    <legend>Fieldset</legend>
    <!-- inputs go here -->
</fieldset>
{% endhighlight %}

## File Picker

<div>
    <label for="my-file">File</label>
    <input type="file" id="my-file" />
    <br><br>
</div>

{% highlight html %}
<div>
    <label for="my-file">File</label>
    <input type="file" id="my-file" />
</div>
{% endhighlight %}

## Horizontal Rule

<div>
    <br>
    <hr>
    <br>
</div>

{% highlight html %}
<hr>
{% endhighlight %}

## Number Field

<div>
    <label for="my-number">Number field</label>
    <input type="number" id="my-number" />
    <br><br>
</div>

{% highlight html %}
<div>
    <label for="my-number">Number field</label>
    <input type="number" id="my-number" />
</div>
{% endhighlight %}

## Password Field

<div>
    <label for="pass">Password</label>
    <input type="password" id="pass" />
    <br><br>
</div>

{% highlight html %}
<div>
    <label for="pass">Password</label>
    <input type="password" id="pass" />
</div>
{% endhighlight %}

## Progress Bar

<div>
    <label>Progress</label>
    <progress max="100" value="70"></progress>
    <br><br>
</div>

<div>
    <label>Progress</label>
    <progress></progress>
    <br><br>
</div>

{% highlight html %}
<div>
    <label>Progress</label>
    <progress max="100" value="70"></progress>
</div>

<div>
    <label>Progress</label>
    <progress></progress>
</div>
{% endhighlight %}

## Radio Buttons

<div>
    <fieldset>
        <legend>Select an option</legend>
        <div>
            <input type="radio" id="option1" name="choice" />
            <label for="option1">Radio</label>
        </div>
        <div>
            <input type="radio" id="option2" name="choice" />
            <label for="option2">Radio</label>
        </div>
    </fieldset>
    <br>
</div>

{% highlight html %}
<fieldset>
    <legend>Select an option</legend>
    <div>
        <input type="radio" id="option1" name="choice" />
        <label for="option1">Radio</label>
    </div>
    <div>
        <input type="radio" id="option2" name="choice" />
        <label for="option2">Radio</label>
    </div>
</fieldset>
{% endhighlight %}

## Search Field

<div>
    <input type="search" id="my-search" placeholder="Search" />
    <button>Go</button>
    <br><br>
</div>

{% highlight html %}
<div>
    <input type="search" id="my-search" placeholder="Search" />
    <button>Go</button>
</div>
{% endhighlight %}

## Select Field

<div>
    <label for="my-select">Select field</label>
    <select id="my-select">
        <option value="">--Select--</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
    <br><br>
</div>

<div>
    <label for="my-select">Select field</label>
    <select id="my-select">
        <option value="">--Select--</option>
        <optgroup label="Group A">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
        </optgroup>
        <optgroup label="Group B">
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </optgroup>
    </select>
    <small>with grouping</small>
    <br><br>
</div>

{% highlight html %}
<div>
    <label for="my-select">Select field</label>
    <select id="my-select">
        <option value="">--Select--</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
</div>

<div>
    <label for="my-select">Select field</label>
    <select id="my-select">
        <option value="">--Select--</option>
        <optgroup label="Group A">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
        </optgroup>
        <optgroup label="Group B">
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </optgroup>
    </select>
    <small>with grouping</small>
</div>
{% endhighlight %}

## Slider

<div>
    <label for="my-range">Slider</label>
    <input type="range" id="my-range" />
    <br><br>
</div>

{% highlight html %}
<div>
    <label for="my-range">Slider</label>
    <input type="range" id="my-range" />
</div>
{% endhighlight %}

## Table

<div>
    <table id="demo-html-table">
        <caption>Table</caption>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
        </tr>
        <tr>
            <td>Cell 3</td>
            <td>Cell 4</td>
        </tr>
    </table>
    <br>
</div>

<style>
    #demo-html-table, #demo-html-table th, #demo-html-table td {
        all: revert;
    }
</style>

{% highlight html %}
<table>
    <caption>Table</caption>
    <tr>
        <th>Column 1</th>
        <th>Column 2</th>
    </tr>
    <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
    </tr>
    <tr>
        <td>Cell 3</td>
        <td>Cell 4</td>
    </tr>
</table>
{% endhighlight %}

## Text Field

<div>
    <label for="my-textfield">Text field</label>
    <input type="text" id="my-textfield" placeholder="Hint text" />
    <small>Help text</small>
    <br><br>
</div>

{% highlight html %}
<div>
    <label for="my-textfield">Text field</label>
    <input type="text" id="my-textfield" placeholder="Hint text" />
    <small>Help text</small>
</div>
{% endhighlight %}

## Textarea

<div>
    <label for="my-textarea">Textarea</label><br>
    <textarea id="my-textarea" placeholder="Write something" cols="48" rows="8"></textarea>
    <br><br>
</div>

{% highlight html %}
<div>
    <label for="my-textarea">Textarea</label><br>
    <textarea id="my-textarea" placeholder="Write something" cols="48" rows="8"></textarea>
</div>
{% endhighlight %}

## Time Field

<div>
    <label for="my-timefield">Time field</label>
    <input type="time" id="my-timefield" />
    <br><br>
</div>

{% highlight html %}
<div>
    <label for="my-timefield">Time field</label>
    <input type="time" id="my-timefield" />
</div>
{% endhighlight %}

## Video Player

<div>
    <video controls>
        <source src="https://www3.cde.ca.gov/download/rod/big_buck_bunny.mp4" />
    </video>
    <br><br>
</div>

{% highlight html %}
<video controls>
    <source src="https://www3.cde.ca.gov/download/rod/big_buck_bunny.mp4" />
</video>
{% endhighlight %}

## In sum

I was surprised to find how many components there are that HTML5 has implemented natively, especially more niche ones like the color picker and the datetime field. I hope you've found this reference helpful!
