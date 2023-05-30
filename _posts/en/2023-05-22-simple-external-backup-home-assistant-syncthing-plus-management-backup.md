---
guid: 66
title: "Managing Backups in Homeassistant"
description: "Easily backup Homeassistant to any external media with Syncthing and automate backup generation very easily in Homeassistant"
layout: post
author: Nico
date: 2023-05-22 15:58
last_modified_at: 
categories: [Home-Assistant, Haade-lab, Automation]
tags: []
image: 'simple-external-backup-home-assistant-syncthing-plus-backup-management.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: en_GB
addViews: 6
comments: true
rating:  
sourcelink:
  - https://community.home-assistant.io/t/syncthing-addon/320452
  - https://github.com/jcwillox/hass-auto-backup
  - https://jcwillox.github.io/hass-auto-backup/
  - https://docs.syncthing.net/
  - https://www.juanmtech.com/how-to-automatically-backup-home-assistant-to-google-drive/
---

Today I'm going to talk about an important aspect not to be overlooked in home automation: **Backup**.
> Many of us do not think about this practice except we must not neglect it.

In this article I will show you how to backup Homeassistant very easily on any private external media and this very easily.
> When I say any support I mean your Nas, your pc, your phone or your tablet see more.

But in addition and thanks to an add-on I will also show you how to automatically generate a complete backup or not of Homeassistant.

## Prerequisites

- Homeassistant OS installed
- external support with Syncthing installed
- HACS installed on Homeassistant

## Syncthing

For those who do not know the principle it is very simple. [Syncthing](https://syncthing.net/){: target="_blank"} is an opensource software that allows you to synchronize folders or files end to end. It can be installed just as well on a pc (windows, mac or linux, docker), on a Nas (docker, Truenas, Synology) as on a mobile device, **that simply means that it can be installed on all mediums**.

> No excuses not to use it.

The notion of server/client does not exist, each system where [syncthing](https://syncthing.net/){: target="_blank"} is installed is a client, it is therefore necessary to configure on each client the sending and receiving each folder/file.
Very easy to set up [syncthing](https://syncthing.net/){: target="_blank"} is accessible to everyone and allows you to do without proprietary clouds like Google drive, Amazon S3 etc...

In my example I installed [Syncthing](https://syncthing.net/){: target="_blank"} on Homeassistant HAOS and on an Openmediavault NAS with Docker.

### Installing Syncthing in HAOS

Let's start by adding Poeschl's repository to the module manager.
Go in:
Settings > Add-ons > Add-ons Stores > Menu > Repositories
1. paste the external directory: **https://github.com/Poeschl/Hassio-Addons** and click on Add.
2. Then refresh the page and you will see the directory: **Poeschl Home Assistant Add-ons**
This directory contains a lot of additional modules like: Asterisk, Mpd, rsync, etc...
3. Click on Syncthing and install, you don't have to change the settings, it was cool.
4. Once installed, just click on open web user interface
And now, it's over.*

{% picture posts/{{page.guid}}/syncthing-addons.png --alt install syncthing in home assistant --img width="940" height="529" %}

Let's go to the NAS settings:

the stage of setting up a login and pass to access the web interface is not an obligation in Homeassistant because it is itself already set up with a password.

{%- include alert.html type="warning" text="The Syncthing administration interface is configured to allow remote access without a password. This can easily allow an intruder to read and modify any file on your computer. Please set a username and password in the Configuration window." %}

**Let's start by adding a Device**, in my case the NAS.
Click at the bottom right on add a Device, find the identifier of your device.
Nothing could be simpler, go to the Syncthing server installed on your nas address: http://[ip-du-nas]:8384, click on the action tab at the top right and select show my ID.
Then copy the ID and paste the das Syncthing Homeassistant, enter a friendly name, for me NAS and valid.
Last step returns to Syncthing of the NAS and authorizes the synchronization of Devices in the yellow tab.

Then **Add a share**, in my case I would like to share the ```/backup``` folder. Put a share name and in the root tab link ```/backup```. Last step go to Advanced > Type of sharing > Sending (read only), to finish click on save.

Go to **Syncthing of the NAS and accept sharing**. Once accepted, go to the shared tab that bears the previously registered name and click on manage. Go to the advanced tab > Receive sharing type (only), finish by clicking on Save.

> Here is your Backup folder with all your backups will be synchronized with your NAS.

## Auto backup [(hacs)](https://hacs.xyz/){:target="_blank"}

Now that you have learned how to easily synchronize your backups externally using syncthing, let's move on to creating automatic backups in HomeAssistant.
For that I chose to install Auto Backup a module available in [HACS](https://hacs.xyz/docs/setup/prerequisites){:target="_blank"}.
Click on the link below to easily install auto-backup in HACS
{% include homeassistantlink.html creator="jcwillox" repertory="hass-auto-backup" %}

Then once installed click on the link below to add auto_backup as Device in HA.
{% include homeassistantlink.html integration="auto_backup" %}

Once the auto backup set is installed, open the following services:

{% highlight yaml %}
auto_backup.backup
auto_backup.backup_full
auto_backup.backup_partial
auto_backup.purge
{% endhighlight %}

as well as the following events:
{% highlight yaml %}
auto_backup.backup_start
auto_backup.backup_successful
auto_backup.backup_failed
auto_backup.purged_backups
{% endhighlight %}

**With this module you will be able to:**

- Provides more advanced and configurable [service calls](https://jcwillox.github.io/hass-auto-backup/services/){:target="_blank"}.
- [Exclude addons/folders](https://jcwillox.github.io/hass-auto-backup/services/){:target="_blank"} from a backup.
- [Automatically delete backups](https://jcwillox.github.io/hass-auto-backup/services/#keep-days){:target="_blank"} after an individually specified amount of time.
- [Download backups](https://jcwillox.github.io/hass-auto-backup/services/#download-path){:target="_blank"} to a specified directory after completion (for example a usb drive).
- Allows the use of [addon names instead of slugs](https://jcwillox.github.io/hass-auto-backup/services/#addon-and-folder-names){:target="_blank"}.
- Provides a [sensor](https://jcwillox.github.io/hass-auto-backup/sensors/){:target="_blank"} to monitor the status of your backups.
- Creates [events](https://jcwillox.github.io/hass-auto-backup/events/){:target="_blank"} for when backups are started/created/failed/deleted.
- Supports [generational backup](https://jcwillox.github.io/hass-auto-backup/advanced-examples/#generational-backups){:target="_blank"} schemes.

**Example of Blueprint integration for generating backups:**

{% include homeassistantlink.html bluelink="https://raw.githubusercontent.com/jcwillox/home-assistant-blueprints/main/automation/automatic_backups.yaml" %}

**Blueprint integration example for generating a notification:**

{% include homeassistantlink.html bluelink="https://raw.githubusercontent.com/jcwillox/home-assistant-blueprints/main/automation/notify_auto_backup.yaml" %}

But **auto_backup** is also full documentation available, [just click on this link](https://jcwillox.github.io/hass-auto-backup/){: target="_blank "}.
You will easily find examples of automations and notifications in the form of Blueprint.

## Conclusion.

This is in my opinion an essential tutorial, so I did not provide screenshots, with a minimum of knowledge of homeassistant you should be able to get by at least I hope so. If *Syncthing doesn't suit you* you always have the solution to integrate a [google drive compatible module](https://www.juanmtech.com/how-to-automatically-backup-home-assistant-to-google- drive/){: target="_blank"}, this tutorial is written by Juanmi Home Assistant specialist. Finally, do not hesitate to contact me on the forum or by leaving a comment, I will answer you quickly 😉.