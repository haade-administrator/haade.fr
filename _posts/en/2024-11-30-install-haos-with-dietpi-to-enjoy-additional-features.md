---
guid: 146
title: "Install Home Assistant OS on Dietpi"
description: "Here is a relevant article to install HAOS on Dietpi the ultra light RPI operating system on a diet, why bother to do such an installation when there is a ready-made HAOS image for raspberry pi?"
ref: "DietPi"
layout: post
authors: [Nico]
date: 2024-11-30 19:10
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
video: 
image: 'dietpi-os-home-assistant-os-raspberrypi-lcd-display.png'
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
rating:  
sourcelink:
  - https://dietpi.com/
  - https://korben.info/dietpi-debian-ultra-legere-optimisee-raspberry-pi-odroid-pine64.html
---

Why **bother** installing Home Assistant OS on [dietpi](https://dietpi.com/){: target="_blank"} when there is a [ready-made image](https://www.home-assistant.io/installation/raspberrypi){: target="_blank"} based on raspberry pi os Lite on the official website, or even **simpler** via the [software imager](https://www.raspberrypi.com/software/){: target="_blank"} developed by the Raspberry PI foundation which contains the HAOS image.

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

> I decided to do this installation for **two main reasons**.

**The first**, Dietpi is an **ultra light debian image** much lighter than raspberry pi os and those in all areas, you just have to look at the table **edited below**. *How did they manage to do that!*, simply by removing a lot of software and libraries by default and optimizing the OS, so we can benefit from the maximum power of its SBC.

{% picture posts/{{ page.guid }}/dietpi-vs-raspberrypi-os-lite-rapsberry-pi-5.png --alt Dietpi vs Raspberry pi OS lite comparison --img width="940" height="401" %}

**The second** is linked to the first despite this lightening we will find a **panel of functions to activate never unequaled** and thus we will be able to install **easily a pharaonic number of software** via **dietpi-software**, configure the functions of the raspberry pi via **detpi-config** and the cherry on the cake **I did not encounter any problems**.

{% include product-embed.html image="raspberry-pi-5-achat-amazon.png" title="Raspberry-pi 5 8GB" brand="Raspberry" description="Latest generation of raspberry-pi with 8GB of RAM" affiliate="_DD0v3TL" amazlink="3B5VpIa" %}

> But the features don't stop there!

If you like ultra-light OS, like Raspberry Pi, Odroid and so on, **then DietPi is for you**. It is an operating system based on a lightweight Debian in order to **consume as little CPU and RAM as possible**.

{%- include alert.html type="info" text="<b>DietPi</b> | A minimal image based on a highly optimized Debian minimal OS. <b>DietPi is extremely lightweight</b>, with low <b>process/memory</b> footprint features and DietPi-RAM log installed by default, to get the maximum performance from your device." link="https://dietpi.com/" textlink="Dietpi.com" %}

## Dietpi installation on Raspberry PI

I did the installation on an old **raspberry pi 3B+** that was lying around in one of my drawers with **1GB of RAM**, so to speak, it's light, but it'll do, given the announced performances I don't doubt it too much!

To start, [download the corresponding image](https://dietpi.com/#download){: target="_blank"} to your SBC and copy it to an sdcard using [Balena Etcher](https://etcher.balena.io/){: target="_blank"} for example. So far, nothing too complicated, at least I hope so😁.

{% include product-embed.html image="sandisk-sdcard-256-extreme.png" title="Sdcard 256GB sandisk extrême" brand="Sandisk" description="Sandisk quality sdcard for raspberry pi" affiliate="_Dc6uJfL" amazlink="417XNZH" %}

{% picture posts/{{ page.guid }}/copy-image-dietpi-balena-etcher.png --alt Installing the Dietpi image using balena etcher software --img width="400" height="258" %}

Once the image is copied we will [**automate the first installation**](https://dietpi.com/docs/usage/#how-to-do-an-automatic-base-installation-at-first-boot-dietpi-automation){: target="_blank"}, yes you heard correctly with Dietpi you can modify 2-3 text files and configure what you want before **the first launch and that's great**.

### automation by files {{ page.ref }}

> Great news Dietpi proposes to automate the first installation by simply modifying text files at the source of the sd card.

{% picture posts/{{ page.guid }}/acces-volume-dietpi-config-txt.png --alt modification of dietpi files to automate first launch --img width="831" height="492" %}

#### dietpi.txt

Let's start with this file which is the main file to configure if you want to customize the first launch, I'm not going to go through all the functions, but rather those that seem relevant to me for all new installations.

> Yes because you will quickly realize that you can configure a lot of things 👌.

Also I want to point out that all this configuration is **of course modifiable later** by the graphical interface and via the command ```dietpi-config```

I mainly modified **the first parameters** of language/regions without needing to touch the other default parameters like the wifi connection because in my tests the raspberry pi is connected in rj45.

If you want to find all the configuration information of dietpi you can have them via the [official documentation very well done](https://dietpi.com/docs/dietpi_tools/system_configuration/){: target="_blank"}

If you have rather specific questions do not hesitate [to consult the forum](https://dietpi.com/forum/){: target="_blank"} dedicated.

**Below is the file modified for the tests of this article.**

{% include doclink.html md="dietpi.md" title="Main configuration file dietpi.txt" %}

I also took a screenshot of these edits.

{% picture posts/{{ page.guid }}/entree-dietpi-config-txt.png --alt Configuring dietpi.txt to automate first time installation --img width="940" height="709" %}

{% highlight markdown %}
##### Language/Regional options #####
# Locale e.g.: "en_GB.UTF-8" / "de_DE.UTF-8" | One entry and UTF-8 ONLY!
AUTO_SETUP_LOCALE=fr_FR.UTF-8

# Keyboard layout e.g.: "gb" / "us" / "de" / "fr"
AUTO_SETUP_KEYBOARD_LAYOUT=fr

# Time zone e.g.: "Europe/London" / "America/New_York" | Full list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
AUTO_SETUP_TIMEZONE=Europe/Paris

##### Network options #####
# Enable Ethernet or WiFi adapter: 1=enable | 0=disable
# - If both Ethernet and WiFi are enabled, WiFi will take priority and Ethernet will be disabled.
# - If using WiFi, please edit dietpi-wifi.txt to pre-enter credentials.
AUTO_SETUP_NET_ETHERNET_ENABLED=1
AUTO_SETUP_NET_WIFI_ENABLED=0
{% endhighlight %}

If you want to do a first wifi installation you can of course configure the network upstream, still in **dietpi.txt** add **1** in *network options* to the line ```AUTO_SETUP_NET_WIFI_ENABLED=1```, you can leave **1** too, ```AUTO_SETUP_NET_ETHERNET_ENABLED=1``` it doesn't change anything because if **wifi is enabled it will be used by default**. Then you will have to adapt the file **dietpi-wifi.txt**.

{% picture posts/{{ page.guid }}/entree-dietpi-config-wifi.png --alt Modifying the dietpi.txt file to start the connection via wifi --img width="940" height="708" %}

#### dietpi-wifi.txt

In this file you will be able to enter all the information about your networks.

> if you want to configure several wifi networks to connect to one of them it is possible.

{% picture posts/{{ page.guid }}/parametrage-dietpi-wifi-txt.png --alt Wifi settings in dietpi-wifi.txt --img width="810" height="796" %}

You will have to modify **2 lines** if your networks are in wpa-psk:
- the **SSID** (network name)
- the **pass** of connection in encrypted version.

To find this pass under linux it is very simple open a terminal and enter the command: ```wpa_passphrase SSID PASSWORD```

{% picture posts/{{ page.guid }}/generation-passphrase-wpa.png --alt Generating a wpa-psk key under linux --img width="650" height="207" %}

> Save the file and that's it, **your SBC will automatically connect to the wifi network** on first launch, Magic 🪄

#### config.txt (performance settings)

The file as marked in the title is there to optimize the performance of the raspberry-pi 3B+, personally I haven't touched it, but as for the rest everything is easily configurable via the dietpi interface connected in ssh with the command ```dietpi-config``` tab [performance options](https://dietpi.com/docs/dietpi_tools/system_configuration/#dietpi-config-performance-options){: target="_blank"}

**Find under the links below** configurations with the official documentation of raspberry-pi.

[Documentation configuration raspberry pi](https://www.raspberrypi.com/documentation/computers/config_txt.html){: target="_blank"}

[Github official firmware optimizations for raspberry-pi](https://github.com/raspberrypi/firmware/blob/master/boot/overlays/README){: target="_blank"}

{% include doclink.html md="config.md" title="Raspberry Pi Performance Tuning" %}

#### cmdline.txt ( to welcome HAOS )

In order to prepare the installation of [home assistant supervised installer](https://github.com/home-assistant/supervised-installer){: target="_blank"} you will have to add a command line after the code already available, and you will see a little further down you will have to copy this file into the **/firmware** subfolder. This way home assistant works best.

{% highlight txt %}
apparmor=1 security=apparmor systemd.unified_cgroup_hierarchy=0
{% endhighlight %}

{% picture posts/{{ page.guid }}/modification-cmdline-txt-pour-home-assistant-cgroupv1.png --alt Customizing the file to prepare for Home Assistant OS installation and CGroupV1 info --img width="940" height="48" %}

{% include doclink.html md="cmdline.md" title="Prepare cmdline for home assistant OS" %}

### First launch

On the **raspberry pi 3B+** the first boot took less than **2 minutes** to launch knowing that I made some modifications in the **dietpi.txt file.** The **ssh connection is active by default**, it's a plus and **during the first ssh connection dietpi-update launches automatically.**

{% picture posts/{{ page.guid }}/premiere-connection-ssh-dietpi-update-automatique.png --alt First SSH Connection Dietpi has a useful GUI interface with an update on first launch --img width="643" height="406" %}

### connection to the interface
To know the ip address connect the SBC in hdmi so you will have the dietpi GUI interface available with your dedicated ip address as well as the root identifiers and passwords displayed.
I decide to connect in ssh ```ssh -p 22 my-ip -l root```

{% picture posts/{{ page.guid }}/dietpi-installe-acces-gui-ssh.png --alt First SSH Connection Dietpi has a useful GUI interface --img width="643" height="406" %}

In the image above you will have access to all the data and settings of your installation, a **fulltitude of options, that's great** with among other things:

- [dietpi-launcher](https://dietpi.com/docs/dietpi_tools/#dietpi-launcher){: target="_blank"}
- [dietpi-config](https://dietpi.com/docs/dietpi_tools/system_configuration/#dietpi-config){: target="_blank"}
- [dietpi-software](https://dietpi.com/docs/dietpi_tools/software_installation/){: target="_blank"}
- [dietpi-update et dietpi-cleaner](https://dietpi.com/docs/dietpi_tools/system_maintenance/){: target="_blank"}
- [dietpi-backup](https://dietpi.com/docs/dietpi_tools/system_maintenance/){: target="_blank"}
- htop
- cpu (info)


![First dietpi connection and settings after update]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/premiere-connection.webp{{ cachebuster }}){: width="643" height="406" class="lazyload pictaninpost"}

I made **a little recap** in Gif format of the procedure prompts during the first installation.

{% include product-embed.html image="sandisk-sdcard-256-extreme.png" title="Sdcard 256GB sandisk extrême" brand="Sandisk" description="Sandisk quality sdcard for raspberry pi" affiliate="_Dc6uJfL" amazlink="417XNZH" %}


### Dietpi Software

To realize all the power of dietpi go directly to the page of software with automatic installation available in dietpi, it's impressive, you can directly type the command in the terminal ```dietpi-software list``` and with a **single glance you will see all the software compatible with the architecture of the SBC**.

[Link dietpi sofware on the official site](https://dietpi.com/dietpi-software.html){: target="_blank"}

![List of self-installable software with dietpi]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/list-softwares-dietpi.webp{{ cachebuster }}){: width="940" height="394" class="lazyload pictaninpost"}

### Dietpi Survey

During the first installation you will be asked **whether or not you want to let the dietpi server collect information** on your statistics.

{% picture posts/{{ page.guid }}/premiere-connection-dietpi-survey.png --alt Dietpi Online Monitoring --img width="643" height="406" %}

Personally I checked 0, feel free to pass on the information.

[dietpi Survey statistics page](https://dietpi.com/survey/){: target="_blank"}

## Installation Home Assistant OS on Dietpi

If you do a search in [dietpi-software](https://dietpi.com/docs/software/home_automation/){: target="_blank"}, you will be able to see the presence of an automated function for the installation of Home assistant, but not of Home Assistant OS, it was considered but conflicting because by default Dietpi uses the network manager **ifupdown** while HAOS uses **network manager** which makes network management impossible in dietpi-config after switching to network manager, **but fortunately for us it is not too serious for the future.**

So once the dietpi installation is operational and updated on your network, you just have to apply the following commands:

{% highlight shell %}
sudo su - # to switch to administrator mode
{% endhighlight %}

then let's install [home assistant supervised installer](https://github.com/home-assistant/supervised-installer){: target="_blank"} starting with the dependencies:

{% highlight shell %}
apt install \
apparmor \
bluez \
cifs-utils \
curl \
dbus \
jq \
libglib2.0-bin \
lsb-release \
network-manager \
nfs-common \
systemd-journal-remote \
systemd-resolved \
udisks2 \
wget -y
{% endhighlight %}

Then we recreate the network file for network manager, because I remember the first one was created by **ifupdown**:

{% highlight shell %}
sudo mv /etc/network/interfaces /etc/network/interfaces.old # we rename the interface to a .old file so as not to lose the previous information
{% endhighlight %}

and we end with a reboot

{% highlight shell %}
reboot
{% endhighlight %}

After rebooting the system goes back to permanent sudo mode

{% highlight shell %}
sudo su -
{% endhighlight %}

We install the docker library

{% highlight shell %}
curl -fsSL get.docker.com | sh
{% endhighlight %}

{%- include alert.html type="error" text="<b>PS:</b> When you access home assistant after configuration if a docker root error comes up you just have to restart the whole system and home assistant will correct this error." %}

Go ahead and get the latest version of os-agent for your architecture, mine is **aarch64**

[Release os-agent](https://github.com/home-assistant/os-agent/){: target="_blank"}

Now let's move on to downloading, installing and testing the functionality of os-agent:

{% highlight shell %}
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb # we download
dpkg -i os-agent_1.6.0_linux_aarch64.deb # we install
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os # we check
{% endhighlight %}

Now let's **create** the firmware folder, then make a copy of cmdline.txt in **/firmware**.

{% highlight shell %}
mkdir /boot/firmware
cp /boot/cmdline.txt /boot/firmware/
{% endhighlight %}

> Finally copy the entire command below to install Home Assistant OS.

{% highlight shell %}
wget -O homeassistant-supervised.deb https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
apt install ./homeassistant-supervised.deb
{% endhighlight %}

On **supprime** les fichiers préalablements téléchargés et situés à la racine.

{% highlight shell %}
rm -rf homeassistant-supervised.deb os-agent_1.6.0_linux_aarch64.deb 
{% endhighlight %}

**Finished with a small reboot.**

{% highlight shell %}
reboot
{% endhighlight %}

> Here is **Home Assistant OS installed on Dietpi** 🥳

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

{% include product-embed.html image="raspberry-pi-5-achat-amazon.png" title="Raspberry-pi 5 4GB" brand="Raspberry" description="Latest generation of raspberry-pi with 4GB of RAM" affiliate="_DD0v3TL" amazlink="3VeGOAU" %}

## Conclusion

**Dietpi software is a gem** if you want to control your raspberry-pi or install options easily, **like the control of the leds**, it will allow you to easily do system updates, to **create a backup**, in short a whole range of functions. And all this on an optimized and ultra light system, **in short, only happiness**.

> **I highly recommend dietpi to everyone**.




