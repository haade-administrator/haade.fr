---
guid: 168
title: "Easily install Google Coral"
description: "Automated installation of Google Gasket drivers on Debian 13 or OVH 8, thus leveraging the power of TensorFlow"
ref: "google-coral"
layout: post
authors: [Nico]
date: 2026-01-16 23:00
last_modified_at: 
categories: [Mini-tutos, Haade-lab]
tags: []
video: 
image: 'installation-automatisee-google-coral-debian-13-trixie-gasket-driver.png'
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
comments: true
rating: 5.0
sourcelink:
  - https://github.com/markfrancisonly/frigate_debian_scripts
  - https://frigate.video/
---
After a reinstallation following a failed upgrade from Openmediavault 6 to 8, which, I remind you, is based on Debian Trixie, I quickly realized that the Google Coral installed on the NAS no longer worked on my Frigate Docker. I wanted to reinstall it following the [official procedure](https://www.coral.ai/docs/accelerator/get-started/#runtime-on-linux){: target="_blank"} but I quickly realized that it no longer worked for Trixie.

After a few hours of searching, I found a Github repository written by [markfrancisonly](https://github.com/markfrancisonly){: target="_blank"} Using several shell scripts, I want to highlight this work which allowed me to rebuild Gasket almost effortlessly.

## Prerequisites

- Up-to-date Debian Trixie (bare-metal or Proxmox VM)
- Linux kernel **6.17** or **equivalent Proxmox kernel**
- A Google Coral USB or M.2 drive
- Docker and Docker Compose installed
- Root access or sudo

## Installing Dependencies

Before running the script, install these additional dependencies not included in the script. If you don't have sudo access, you can register a user instead.

{% highlight shell %}
sudo apt update
sudo apt upgrade
sudo apt install git debhelper dh-dkms linux-headers-$(uname -r)
{% endhighlight %}

**Important:** Remember to update all dependencies before running the script described above in the command lines.

## Script Installation

Next, download the script, preferably to the temporary folder of your Trixie architecture.

{% highlight shell %}
cd /tmp/
wget https://github.com/markfrancisonly/frigate_debian_scripts/raw/refs/heads/master/install_coral_tpu.sh
{% endhighlight %}

Then, nothing could be simpler than launching it, and the installation will proceed without a hitch.

{% highlight shell %}
sudo bash ./install_coral_tpu.sh --install
{% endhighlight %}

> At the end of the script, a reboot will be required.

This isn't finished yet; this script offers several options. In my opinion, the most important one after the reboot is to check the installation status.
If the installation failed, use the "reinstall" option. If the gasket build failed, you can restart it with the "rebuild" option.

See below for a list of all the options.

## List of options

**Usage:** sudo bash ./install_coral_tpu.sh [OPTION]

**Options:**
|**--status**|Display installation status|
|**--install**|Install the TPU driver and library|
|**--uninstall**|Uninstall the TPU driver and library|
|**--reinstall**|Reinstall the TPU driver from source|
|**--rebuild**|Rebuild the TPU driver for the current kernel|
|**--setup-non-root [username]** : Set up non-root access for the specified user|

## Conclusion

Here's a script we love! Thanks to it, your TensorFlow will regain its full importance in the home automation enthusiasts' favorite NVR, [Frigate](https://frigate.video/){: target="_blank"}. One more step towards simplicity. 👌