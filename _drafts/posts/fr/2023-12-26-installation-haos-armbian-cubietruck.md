---
guid: 20
title: ""
description: ""
ref: ""
layout: post
author: Nico
date: 2023-12-26 10:54
last_modified_at: 
categories: [Docker, Domotique, Zigbee]
tags: []
image: 'picture.png'
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
  - 
---

# Armbian cubietruck

sudo apt install && sudo apt upgrade -y

**armbian-config:**
- Bluetooth à activer idem pour le wifi
- mise à jour du dernier firmware

**pour Armbian cgroupv1 à actver:**

ajouter extraargs=systemd.unified_cgroup_hierarchy=0 to /boot/armbianEnv.txt fichier existant

sudo nano /etc/os-release
change PRETTY_NAME="Armbian 23.02.2 Jammy"
par PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"

installation de supervised-installer: https://github.com/home-assistant/supervised-installer

armbian déjà en mode root par défaut

apt install \
apparmor \
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

curl -fsSL get.docker.com | sh

choisir os-agent **armv6**


wget -O homeassistant-supervised.deb https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
apt install ./homeassistant-supervised.deb

choisir hassio_supervised en **qemuarm**


pour Armbian
ajouter extraargs=systemd.unified_cgroup_hierarchy=0 to /boot/armbianEnv.txt fichier existant

*Erreur docker: il suffit de redémarrer homeassistant*
