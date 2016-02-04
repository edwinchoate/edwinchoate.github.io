---
layout: post
title: "Change Your Screen Resolution from the Command Line on OSX"
date: 2016-02-04
---

The first time I hooked up my MacBook Pro to my Dell monitor, I was disappointed. I expected the screen resolution on my monitor to be a little higher than <span style="color: red;">1140 x 768</span>. Lacking HDMI input, I was forced to use a [Mini DisplayPort to VGA Adapter](http://www.apple.com/shop/product/MB572Z/B/mini-displayport-to-vga-adapter). I thought I was stuck at first, but then I came across a great solution: [cscreen](http://www.pyehouse.com/cscreen/).

Cscreen is a tool that allows you to bypass the regular resolution settings on OSX. (You can download it [here](http://www.pyehouse.com/cscreen/).) Cscreen is quite simple and you can learn how to use it in just five minutes. To install, just place the cscreen executable in /usr/local/bin/.

I'd recommend starting out by viewing the help options like so:

{% prism bash %}
edwinchoate:~ ☕️  cscreen -h
Usage: cscreen [-d <depth>] [-x <width>] [-y <height>] [-r <refresh>] [-s <display>] [-v] [-m] [-f] [-l] [-h]
           [-d <depth>]    : specifies the bit depth (bits per pixel)
           [-x <width>]    : specifies the width in pixels
           [-y <height>]   : specifies the height in pixels
           [-r <refresh>]  : specifies the refresh rate in Hz
           [-s <display>]  : specifies which display to use (defaults to main display)
		   use a as the option to -s to specify the action on all displays
           [-i <displayID>]: picks a display based on CGDirectDisplayID (permanent per display)
           continue to use '-s a' for "all displays"
           [-v]	           : display valid modes (use -s to specify display or nothing for the default)
           [-m]            : require an exact match
           [-f]	           : forces settings (ignores safety mechanisms; USE AT YOUR OWN RISK)
           [-l]            : lists the current displays and modes
           [-p]            : sets the requested display to have the menu bar
           [-h]            : displays the usage
{% endprism %}

As you can see from the above options, cscreen allows you to really fine-tune things. I would start by using the -l flag to check out your current settings:

{% prism bash %}
edwinchoate:~ ☕️  cscreen -l
DisplayID  Index     Depth     Width     Height  Refresh
 4280a80       1        32      1280        800     0
{% endprism %}

Cscreen gives an index value to each of your monitors. Let's say I want to look at all of the valid resolution options for my external monitor (index = 2). I would enter the following command:

{% prism bash %}
edwinchoate:~ ☕️  cscreen -s 1 -v
DisplayID  Index     Depth     Width     Height  Refresh
 4280a80       1        32      2560       1600     0
 4280a80       2        32      1280        800     0
 4280a80       3        32      2048       1280     0
 4280a80       4        32      1650       1050     0
 4280a80       5        32      1440        900     0
 4280a80       6        32      1152        720     0
 4280a80       7        32       840        524     0
 4280a80       8        32      1024        768     0
 4280a80       9        32       800        600     0
 4280a80      10        32       640        480     0
{% endprism %}

This is probably the quickest way to find out if you can improve your display's resolution.  In this example, I would want to set my external monitor to the highest resolution setting available. I recommend using a refresh rate of 60 frames per second if you're not going to be doing any gaming on that monitor.

You can apply all of your desired changes in a single command:

{% prism bash %}
edwinchoate:~ ☕️  cscreen -s 1 -x 1280 -y 800 -b 32
{% endprism %}

And that's really all there is to it! Shout out to [pyehouse](http://www.pyehouse.com/) for making such a simple, useful tool.

Till next time,

Edwin
