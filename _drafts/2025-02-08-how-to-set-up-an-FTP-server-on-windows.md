---
layout: post
title: How to Set Up an FTP Server on Windows
author: Edwin Choate
date: 2025-02-08
categories: windows
---

This post covers how to set up a Windows PC as an FTP server on a local network so that your other personal devices (i.e. phone, doorbell, etc.) can connect and share files via FTP. In this post, I will assume you already know how to do things like use Control Panel and create a new Windows user.

I am using the FTP server built in to IIS.

## Step 1. Enable FTP Server in Windows

Go to _Control Panel_ > _Programs and Features_ > _Turn Windows features on or off_

Expand the _Internet Information Services_ node and enable:

* FTP Server
    * FTP Extensibility
    * FTP Service


## Step 2. Make a root directory to house all the files

I like the path `C:\FTP root\`.


## Step 2.1 (Recommended) Make another Windows user

ex: FTPUser, Doorbell

This user is just an additional user that isn't your default login, just in case you want to keep things separate and set a different password from the regular login.

## Step 3. Set a static IP for the server

Do this in your router's configuration settings. How you do this is going to depend on what make & model your router is.

A static IP makes it much easier to use the FTP server because you can have the FTP client remember the address.

## Step 4. Make the FTP Site

Launch **Information Internet Services (IIS) Manager**.

In the left nav, right-click on _Sites_ and click _Add FTP Site_.

To set up FTP with basic auth (not using SSL), you can use these settings:

| Setting name | Value |
| --- | --- |
| FTP site name | <<whatever you want to call it>> ex: FTP Server |
| Content Directory | <<path you created in Step 2>> ex: `C:\FTP root\` |
| IP Address | All Unassigned |
| Port | 21 |
| SSL | No SSL |
| Enable Basic auth | enabled |
| Allow access to | Specific users |
| username | <<your Windows username AND/OR whatever user you created in Step 2.1>>
| Enable Read if applicable | enabled |
| Enable Write if applicable | enabled |

## Step 5. Allow FTP Server in Windows Firewall

Go to _Control Panel_ > _Windows Defender Firewall_ > _Allow an app or feature through Windows Defender Firewall_

Enable "FTP Server" for Private connections (not Public)

## Step 6. Tell Firewall to allow FTP connections on Private networks

This is a vital step because if you don't do this, Windows Firewall will block clients from connecting.

Go to _Control Panel_ > _Windows Defender Firewall_ > _Advanced Settings_ > _Inbound Rules_

Click _New Rule_

Use these settings:

| Setting name | Value |
| --- | --- |
| Rule Type | Port |
| TCP | enabled |
| Specific local ports | 21 |
| Allow the connection | enabled |
| Private (only) | enabled |
| Name | Allow FTP connections on Private networks |

**Keep in mind:** For security, now that you have this set in Windows Firewall, you need to make sure whenever you're connecting to the internet from the server, you accurately set the connection as Public or Private.

## Step 7. Lookup the IP address of the server

If you're using a static IP, then this will be the IP you set up in Step 3.

On the server PC, launch Command Prompt and run the `ipconfig` command.

The IP address you need is:

* `Wireless LAN adapter Wi-Fi`
    * `IPv4 Address`

## Step 8. Test by connecting from a client 

You could use your phone or another laptop on the local network. 

As far as clients go, I prefer [AndFTP](https://play.google.com/store/apps/details?id=lysesoft.andftp&hl=en_US) for Android devices and [WinSCP](https://winscp.net/eng/index.php) for Windows devices.

To connect from the client, use these settings:

| Setting name | Value |
| --- | --- |
| Hostname | <<IP address from Step 7>> |
| Port | 21 |
| Username | <<username from Step 4>> |
| Password | <<Windows password of username from Step 4>> |

Once connected from the client, you ought to be able to read and write files to/from the server's root FTP directory.

## In sum

To summarize, the main steps are:

* Set the clients' auth settings by setting a static IP and creating a Windows user/password
* Enable IIS FTP Server and create an FTP site in IIS
* Set the firewall to allow FTP traffic for devices on Private networks
* Use a FTP client like [WinSCP](https://winscp.net/eng/index.php) or [AndFTP](https://play.google.com/store/apps/details?id=lysesoft.andftp&hl=en_US) to make FTP connections to your server

I hope that you've found the post helpful and that you're enjoying your newfound FTP server on your local network!
