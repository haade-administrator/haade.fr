---
guid: 146
title: "Dietpi"
description: "installation"
ref: "DietPi"
layout: post
authors: [Nico]
date: 2024-11-25 13:37
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
video: 
image: 'dietpi-os-home-assistant-os-raspberrypi-lcd-display.png'
toc: true
beforetoc: ''
published: false
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating:  
sourcelink:
  - https://dietpi.com/forum/t/home-assistant-supervised-install/17085/2
  - https://dietpi.com/forum/
  - https://dietpi.com/
  - https://korben.info/dietpi-debian-ultra-legere-optimisee-raspberry-pi-odroid-pine64.html
  - https://dietpi.com/docs/install/
  - https://dietpi.com/docs/software/
  - https://dietpi.com/docs/software/desktop/#chromium
---

Si vous aimez les ordinateurs un peu légers, type Raspberry Pi, Odroid et j’en passe, alors DietPi est fait pour vous. Il s’agit d’un système d’exploitation basé sur une Debian allégée dans le but de consommer le moins de CPU et de RAM possible.

Voici un tableau qui compare DietPi avec Raspberry Pi OS Lite (64 bits). On peut y voir que niveau RAM, on économise 58%, sur le CPU c’est 39% en moyenne et en matière d’espace disque, c’est plus léger de 41%. Évidemment, cela se ressent sur la rapidité du boot, puisque c’est plus rapide à démarrer de 73%.

DietPi | Une image minimale à la baseOS Debian minimal hautement optimisé. **DietPi est extrêmement léger**, avec des fonctionnalités de faible empreinte **processus/mémoire** et DietPi-RAM log installé par défaut, pour obtenir les performances maximales de votre appareil.

DietPi-Software Installe et optimise les logiciels les plus utilisés pour vous Installez rapidement et facilement des logiciels populaires « prêts à l'emploi » et optimisés pour votre système. Fini le temps où vous deviez lire des guides de plus de 5 pages, DietPi fait tout pour vous, vous laissant plus de temps pour profiter des logiciels dont vous avez besoin.

## Dietpi Software

https://dietpi.com/dietpi-software.html

## {{ page.ref }} VS Raspberry Pi OS Lite

{% picture posts/{{ page.guid }}/dietpi-vs-raspberrypi-os-lite-rapsberry-pi-5.png --alt Diepti OS vs Raspberry Pi Os Lite sur raspberry pi 5 --img width="940" height="401" %}

{% highlight shell %}
sudo ifdown -a --exclude lo
sudo mv /etc/network/interfaces /etc/network/interfaces.unused
{% endhighlight %}

check network interfaces

{% highlight shell %}
nmcli device
nmcli connection
{% endhighlight %}

/etc/network/interfaces

{% highlight txt %}
allow-hotplug wlan0
iface wlan0 inet dhcp
    wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
{% endhighlight %}

https://dietpi.com/survey/


## Dietpi.txt
## cmdline.txt
## config.txt
## dietpi-wifi.txt

https://github.com/home-assistant/supervised-installer

sudo su -

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

cp /etc/network/interfaces /etc/network/interfaces.old
nano /etc/network/interfaces

reboot

curl -fsSL get.docker.com | sh

https://github.com/home-assistant/os-agent/releases/tag/1.6.0

wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
dpkg -i os-agent_1.6.0_linux_aarch64.deb 
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
mkdir /boot/firmware
cp /boot/cmdline.txt /boot/firmware/
wget -O homeassistant-supervised.deb https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
apt install ./homeassistant-supervised.deb
rm -rf homeassistant-supervised.deb os-agent_1.6.0_linux_aarch64.deb 


