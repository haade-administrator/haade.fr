---
guid: 146
title: "Installe Home Assistant OS sur Dietpi"
description: "Voilà un article pertinent pour installer HAOS sur Dietpi le système d'exploitation RPI à la diète, pourquoi s'embêter à faire une telle installation alors qu'il existe une image toute faite HAOS pour raspberry pi ?"
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

Pourquoi **s'embêter** à installer Home Assistant OS sur [dietpi](https://dietpi.com/){: target="_blank"} alors qu'il existe une [image toute prête](https://www.home-assistant.io/installation/raspberrypi){: target="_blank"} à base de raspberry pi os Lite sur le site officiel, ou encore **plus simple** via le [software imager](https://www.raspberrypi.com/software/){: target="_blank"} développé par la fondation Raspberry PI qui contient l'image HAOS.

> J'ai décidé de faire cette installation pour **deux raisons** principales

**La première**, Dietpi est une image debian ultra légère bien plus légère que raspberry pi os et ceux dans tous les domaines, il n'y a qu'à regarder le tableau **édité ci-dessous**. Comment ont-ils réussis à faire ça, simplement en enlevant beaucoup de softwares et librairies par défaut et en optimisant l'OS ainsi on pourras bénéficier du max de puissance de son SBC.

{% picture posts/{{ page.guid }}/dietpi-vs-raspberrypi-os-lite-rapsberry-pi-5.png --alt Comparatif Dietpi vs Raspberry pi OS lite --img width="940" height="401" %}

**La seconde** est liée à la première malgré cet allègement on retrouvera un pane de fonctions à activer jamais inégalé et ainsi on pourra installer **facilement un panel de soft** via **dietpi-software**, paramétrer les fonctions du raspberry pi via **detpi-config** et cerise sur le gateau je n'ai rencontré aucun soucis. 

> Mais les fonctions ne s'arrêtent pas là !

Si vous aimez les ordinateurs un peu légers, type Raspberry Pi, Odroid et j’en passe, alors DietPi est fait pour toi. Il s’agit d’un système d’exploitation basé sur une Debian allégée dans le but de **consommer le moins de CPU et de RAM possible**.

{%- include alert.html type="info" text="<b>DietPi</b> | Une image minimale à la baseOS Debian minimal hautement optimisé. <b>DietPi est extrêmement léger</b>, avec des fonctionnalités de faible empreinte <b>processus/mémoire</b> et DietPi-RAM log installé par défaut, pour obtenir les performances maximales de votre appareil." link="https://dietpi.com/" textlink="Dietpi.com" %}

## Installation Dietpi sur Raspberry PI

J'ai réalisé l'installation sur un vieux **raspberry pi 3B+** qui trainait dans l'un de mes tiroirs avec 1GB de RAM autant dire que c'est light, mais ça va le faire, vu les perfs annoncées je n'en doute pas trop.

Pour commencer [télécharge l'image correspondante](https://dietpi.com/#download){: target="_blank"} à ton SBC et copie là sur une sdcard à l'aide de [Balena Etcher](https://etcher.balena.io/){: target="_blank"} par exemple. Jusque là rien de bien compliqué du moins je l'espère 😁.

Une fois l'image copiée nous allons [**automatiser la première installation**](https://dietpi.com/docs/usage/#how-to-do-an-automatic-base-installation-at-first-boot-dietpi-automation){: target="_blank"}, oui tu as bien entendu avec Dietpi tu peux modifier 2-3 fichiers textes et paramétrer ce que tu veux avant **le premier lancement et ça c'est génial**.

### automatisation par les fichiers {{ page.ref }}

### Premier lancement

### connection à l'interface

Directement par HDMI ou en SSH qui est activé par défaut.

## Dietpi Software

https://dietpi.com/dietpi-software.html


{% highlight shell %}
sudo ifdown -a --exclude lo
sudo mv /etc/network/interfaces /etc/network/interfaces.unused
{% endhighlight %}



https://dietpi.com/survey/

## Installation HAOS sur Dietpi

Si tu fais une recherche dans [dietpi-software](https://dietpi.com/docs/software/home_automation/){: target="_blank"}, tu pourras te rendre compte de la présence d'une fonction automatisée pour l'installation de Home assistant, mais pas de Home Assistant OS, elle a été envisagée mais conflictuelle car par défaut Dietpi utilise le gestionnaire de réseau **ifupdown** alors que HAOS utilise **network manager** ce qui rend la gestion du réseau impossible dans dietpi-config après le passage à network manager, mais heureusement pour nous ce n'est pas trop grave pour la suite.

Donc une fois l'installation dietpi opérationnelle et mise à jour sur ton réseau il te suffit d'appliquer les commandes suivante:

```sudo su -``` pour passer en mode administrateur

ensuite installons [home assistant supervised installer](https://github.com/home-assistant/supervised-installer){: target="_blank"} en commençant par les dépendances:

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

ensuite on recrée le fichier réseau pour network manager, car je le rapelle le premier a été créé par ifupdown:

```sudo mv /etc/network/interfaces /etc/network/interfaces.old```

et on termine par un redémarrage

```reboot```



## Dietpi.txt
## cmdline.txt
## config.txt
## dietpi-wifi.txt

https://github.com/home-assistant/supervised-installer

sudo mv /etc/network/interfaces /etc/network/interfaces.old

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


