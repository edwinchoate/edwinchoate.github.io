---
layout: post
title: Open Any Stream from Any Webpage in VLC Media Player
author: Edwin Choate
date: 2025-02-21
categories: windows
---

This post describes how to quickly and easily pull up any audio stream on any website in VLC media player on your Windows computer (without having to ever open the Inspect tab of your browser's dev tools).

In VLC, if you know the URL of a stream, then all you need to do is run CTRL+N and paste the URL in that dialog to launch it directly. This post is for when you _don't_ have the stream URL on hand.

## Installing the tools

**VLC Media Player**

First of course you need VLC on your computer. To install it, you just go to [videolan.org/vlc](https://www.videolan.org/vlc/), download, and run the installer. 

**The browser extension**

Next, you need [the browser extension, _Open in VLC media player_](https://webextension.org/listing/open-in-vlc.html) from [webextension.org](https://webextension.org). WebExtension.org has a ton of great browser extensions, and all of them are open-source.

**The native client**

Third, you need to install the native client to get the extension to work. To install the native client:

1. Download the native client for your OS from the browser extension's GitHub repo: [github.com/andy-portmen/native-client/releases](https://github.com/andy-portmen/native-client/releases)
2. Extract the downloaded zip
3. Run the installer script (`install.bat` if you're on Windows)
    * (You may need to run the batch file in an admin-level Powershell if it's not working in Command Prompt.)

## Try it out

Now that you've got everything installed, it's time to try it out! If you want to follow along with an example, I'm going to use the main stream from WBGO, a jazz radio station in New York City. 

1. Go to the page with the stream you want to listen to. (Ex: [wbgo.org](https://www.wbgo.org/))
2. Start the stream (Ex: On WBGO, click the orange play button in the header)
3. Click on the _Open in VLC media player_ browser extension's icon
4. Voila!

If there is more than one stream on the webpage, then you will get a dialog that pops down from browser's top bar, with a list of all the streams on that page. You can tell which stream you're listening to right now because it displays how much data has been streamed. In all likelihood, the streams you're _not_ listening to will show 0 MB whereas the stream you've got open will show some non-zero amount of data. You can click to select any of the streams on the list and click the _Open in VLC_ button to launch it.

If it's set up correctly, it should launch the stream in VLC under the **Playlist** section in VLC's nav. 

## (Optional) Note the URL of your stream

If for whatever reason, you'd like to know exact URL of the stream, you can see it with Right-click > _Information..._. The URL is under the _Location_ field. You can optionally strip out the non-essential query params (after the `?` char in the URL) from the link to simplify and shorten the URL. 

## Dock the stream to your VLC

This is where using VLC becomes nice, especially if you listen to a lot of different streams. You can dock the stream to your VLC player by clicking and dragging the current playing stream (Ex: "WBGO Homepage \| WBGO") and dragging it into the **Media Library** section of the VLC nav. The Media Library is like a saved list of streams. 

If you want to edit the name of the stream in your Media Library you can do that via Right-click > _Information..._ > edit the _Title_ field > _Save Metadata_.

## Fin

I hope you enjoy streaming with VLC!
