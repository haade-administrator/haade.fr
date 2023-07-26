---
guid: 56
title: "complete reinstallation on Jeedom Luna"
description: "complete tutorial on a complete installation after crash of jeedom based on debian on Jeedom Luna"
layout: post
author: Nico
date: 2023-03-23 12:32
last_modified_at: 
categories: [Jeedom, News, Haade-lab]
tags: []
image: 'hack-jeedom-luna-completely-reinstalls-the-system.png'
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
addViews: 17
comments: true
rating:  
sourcelink:
  - https://www.dusuniot.com/blog/how-to/how-to-install-application-on-dsgw-210/
---
After having [wrote a complete article on Jeedom Luna]({% post_url /en/2023-02-08-jeedom-luna-screening %}) which shows, that this box simply runs under Debian, Jeedom Luna n It's nothing but a Dusun 210, it's a relatively closed box that does not offer simple solutions to reinstall in the event of a system malfunction, ** you will no longer need to return the box to your distributor , this article fixes it**. You will be able **under Windows easily to resume all the installation** of the Jeedom Luna without too much difficulty?

{% include product-embed.html guid="2143" %}

# Download

As a prerequisite, you will need to download the corresponding Debian image as well as the utility and driver to send the data to the Jeedom Luna

## Jeedom Luna compatible debian image

To start download the image, the file is stored on Google drive.
[Debian image rev 1.1.7](https://drive.google.com/file/d/1-rok0WHrsqLUyX3lbEJaPgY-tiiV6s8v/view?usp=sharing){: target="_blank"}

## Windows Utilities

Here are two complete software that will allow you to transfer the firmware to Jeedom Luna, in this tutorial I use **Factorytool**{: .blue}

{% include doclink.html zip="files/FactoryTool-DriverAssitant.zip" title="FactoryTool + driver" %}

> I find it practical but both software work.

1. Extract the zip file and start by installing the drivers /FactoryTool-DriverAssitant/DriverAssitant_v5.1.1/DriverInstall.exe
2. launch the application: /FactoryTool-DriverAssitant/FactoryTool/FactoryTool.exe
3. Change language Chinese is default
4. Click on firmware and load Firmware DSGW-210-Debian_image_RV1.1.7.img
5. Select restore

{% include doclink.html zip="files/RKDevTool-DriverAssistant.zip" title="RKDevTool + driver" %}

# Firmware upgrade

**Connect the Jeedom Luna** to the PC using the **usb cable provided** and put it in **MASKROM mode** in order to be able to upgrade the firmware.

**MASKROM mode:**{:.blue}
1. Press the **reset button** without letting go and press the **boot button** for 3 to 5 seconds
2. Release the **reset button** wait 2-3 seconds and release the **boot button**

### The video below shows the manipulation
{% include videoPlayer.html youtubeId="6r2R_ED0J_Q" %}


Now a line appears in the list, select it

> To finish click on **Run**

If everything went well you will have the indication in green

Then you can click briefly on reset and connect the jeedom luna to the mains and to the network in rj45
the circle will change from red to solid blue, debian has started

Below is a GIF animation showing the whole step:

![Flash debian image on jeedom luna with Factorytool]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/flash-image-debian-jeedom-luna.webp{{ cachebuster }}){: width="940" height="710"}

find on your network the ip address of the Jeedom Luna

# System preparation

**linux:** open a terminal and type
```sh
ssh -p 22 your.address.ip -l root
```

**Windows:** connect in ssh with **putty** enter the ip, port 22 and username and pass.

## 1.User login

FYI, there are two default user types on the debian image **root** and **admin**

**ps:** the password for the admin user is **admin** (*if you use admin you will have to put sudo in front of all the commands below)

> Login with user **root** password: **root**

**(*Optional)** To comply with a traditional Jeedom installation, we will create a new user named **jeedom** and password **Mjeedom96** then we will give administrator rights to this user

```sh
# at the password prompt enter: Mjeedom96
adduser jeedom

# give administrator rights
usermod -aG sudo jeedom
```


Now change user

```sh
su -l jeedom
```

## 2.Image Enhancement


start by changing the debian packages (the default packages are localized in china and too slow)

```sh
sudo nano /etc/apt/sources.list
```

delete all lines with Ctrl+k and paste the directories below, end with Ctrl+x then yes to save

```sh
deb http://deb.debian.org/debian bullseye main contrib non-free
deb-src http://deb.debian.org/debian bullseye main contrib non-free

deb http://deb.debian.org/debian-security/ bullseye-security main contrib non-free
deb-src http://deb.debian.org/debian-security/ bullseye-security main contrib non-free

deb http://deb.debian.org/debian bullseye-updates main contrib non-free
deb-src http://deb.debian.org/debian bullseye-updates main contrib non-free

deb http://deb.debian.org/debian bullseye-backports main contrib non-free
deb-src http://deb.debian.org/debian bullseye-backports main contrib non-free
```

## 3.Update the system

```sh
sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y
```

## 4.Change default wrong disk size:

```sh
# resize
sudo resize2fs /dev/mmcblk2p7
# check the size
df -h
# you should find
# /dev/root 15G
```

## 6.Change the system hostname

This is the name of the default system, it will allow you to connect to jeedom without knowing the ip address, in our example which is the default of the jeedom luna we will call it jeedomluna so you can connect later on [http://jeedomluna.local](http://jeedomluna.local){: target="_blank"}

```sh
sudo nano /etc/hostname
# replace Debian with jeedomluna and Ctrl+x yes
sudo nano /etc/hosts
# add under localhost the line and Ctrl+x yes
127.0.0.1 localhost
127.0.0.1 jeedomluna
```

**saves new hostname**
```sh
sudo hostnamectl set-hostname jeedomluna
```

## 7.Install the locales file
```sh
# install dependencies
sudo apt install locales -y
# Set the locale
sudo locale-gen en_US.UTF-8 fr_FR.UTF-8
# Install languages
sudo dpkg-reconfigure locales
```

select **en_US.UTF-8 and fr_FR.UTF-8** press enter and select by default **fr_FR.UTF-8** click enter

## 8.Reboot the system

```sh
sudo reboot
```

## 9.Reset current installations (*optional)

**Normally in this tutorial you shouldn't have to perform these two steps** because the installation of all the packages should be done without problems. The first dpkg command is there to fix a failed .deb install, and apt --fix-broken install to repair any failed extension installs.

```sh
# flatten dpkg
sudo dpkg --configure -a
# fix broken files
sudo apt --fix-broken install
```

## #8 Clean the installation
```sh
sudo apt autoremove
sudo apt clean
```
> Now the Debian installation is ready to host Jeedom

# Installing Jeedom
```sh
sudo wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
sudo chmod +x install.sh
sudo ./install.sh -w /var/www/html -z -m Jeedom
```

> **After 5-10 minutes Jeedom is installed**

Remove unnecessary files from the root
```sh
ls
sudo rm -rf install.sh os-agent_1.2.2_linux_aarch64.deb
```

Finally Restart the Jeedom Luna
```sh
sudo reboot
```

All you have to do is connect to [http://jeedomluna.local](http://jeedomluna.local){: target="_blank"}, and here you are on a fresh Jeedom installation compatible with Dusun 210

{% include product-embed.html guid="2143" %}

# Conclusion

This is a manipulation that will delight more than one and carried out in less than 30 minutes. You hold in your hands **the secret to resurrecting a Jeedom Luna?** If you encounter a problem, don't hesitate to let me know.