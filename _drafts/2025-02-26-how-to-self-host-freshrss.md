---
layout: post
title: How to Self-Host FreshRSS
author: Edwin Choate
date: 2025-02-26
categories: windows
---

FreshRSS is a free and open source RSS reader application.

In this post, I explain how to set up a self-hosted installation of [FreshRSS](https://freshrss.org/) on a desktop computer. 

The basic process is: 1) install the docker container of the web application and 2) host it on localhost.

## Prerequisite: Install Docker

FreshRSS supports automatic installation via more options than Docker, but I will be using Docker in this post. The other options are in [the Installation section of the README](https://github.com/FreshRSS/FreshRSS#installation) in the Github repo.

You can download the Docker Desktop installer for free on [docker.com](https://www.docker.com/).

[docs.docker.com/get-started/get-docker/](https://docs.docker.com/get-started/get-docker/)

Once you've got it installed, you'll probably need to restart your computer. 

After that you should be able to run the Docker command in the terminal.

```terminal
$ docker --version
```

On Windows, the Docker Desktop installer will also install the [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about), which is used for the Linux containers. 

## Install the Docker container

Next, you'll install a Docker image and container that will run the latest stable version of FreshRSS. You can do so by running the command below: 

```terminal
$ docker run -d --restart unless-stopped --log-opt max-size=10m -p 8080:80 -e TZ=America/New_York -e 'CRON_MIN=1,31' -v freshrss_data:/var/www/FreshRSS/data -v freshrss_extensions:/var/www/FreshRSS/extensions --name freshrss freshrss/freshrss
```

A couple flags to note in that command:

* `-p 8080:80` This sets the port that will be used. So, in this example the application will be hosted at http://localhost:8080/.
* `-e TZ=America/New_York` You'll want to set this to whatever timezone you're in, using the [canonical TZ identifer](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for your timezone.
* `-e 'CRON_MIN=1,31'` This will set up a cron job that will run on a regular interval (in minutes). Each time this interval goes by, FreshRSS will perform a new sync of all of the RSS feeds.

## Finish installation in the application

Once the Docker container is set up, you can navigate to the application and run the rest of the installation. 

If you used `-p 8080:80` in the command above (recommended), then you'll navigate to http://localhost:8080/ in your browser.

From there, FreshRSS will run you through a couple screens where you will set up your user login credentials and it'll verify that there's nothing wrong with the installation. 

## In sum 

Once you've got the application up and running, the interface is a pretty straightforward RSS reader interface. You can subscribe to RSS feeds by clicking the + button as per usual. I hope you found this post helpful, and that you're enjoying FreshRSS!

