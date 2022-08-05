---
id: 8507
title: 'Rhasspy Boite à outil Open Source mise en place'
date: '2021-07-08T13:58:36+00:00'
author: Nicolas
layout: post
guid: 'https://www.haade.fr/?p=8507'
permalink: '/?p=8507'
adace_disable:
    - 'a:4:{s:23:"adace_disable_all_slots";N;s:19:"adace_disable_slots";a:36:{s:20:"adace-before-content";N;s:21:"adace-after-paragraph";N;s:23:"adace-after-paragraph-2";N;s:23:"adace-after-paragraph-3";N;s:17:"adace-after-image";N;s:16:"adace-after-more";N;s:20:"adace-middle-content";N;s:27:"adace-before-last-paragraph";N;s:19:"adace-after-content";N;s:14:"adace_vignette";N;s:13:"adace-slideup";N;s:25:"adace-after-cace-comments";N;s:22:"adace-after-snax-items";N;s:28:"adace-after-x-bbpress-topics";N;s:29:"adace-after-x-bbpress-replies";N;s:18:"adace-mace-gallery";N;s:25:"adace-mace-inside-gallery";N;s:31:"bimber_before_header_theme_area";N;s:20:"bimber_inside_header";N;s:32:"bimber_before_content_theme_area";N;s:29:"bimber_after_featured_content";N;s:29:"bimber_before_related_entries";N;s:23:"bimber_before_more_from";N;s:22:"bimber_before_comments";N;s:23:"bimber_before_dont_miss";N;s:18:"bimber_inside_grid";N;s:20:"bimber_inside_grid_s";N;s:18:"bimber_inside_list";N;s:21:"bimber_inside_classic";N;s:20:"bimber_inside_stream";N;s:20:"bimber_inside_zigzag";N;s:18:"bimber_left_stream";N;s:19:"bimber_right_stream";N;s:16:"bimber_link_exit";N;s:24:"bimber_before_pagination";N;s:23:"bimber_after_pagination";N;}s:21:"adace_disable_widgets";N;s:24:"adace_disable_shortcodes";N;}'
adace_related_products:
    - 'a:0:{}'
adace_related_products_title:
    - 'Acheter le message'
adace_related_products_type:
    - woocommerce
adace_related_products_embed:
    - ''
---

Rhasspy (prononcé RAH-SPEE) est une boîte à outils d’assistant vocal open source entièrement déconnecté pour de nombreuses langues qui fonctionne bien avec Home Assistant, Hass.io, hermes Protocol ( compatible ancien service de SNIPS.AI ), Jeedom et Node-RED.

Cet article est dédié à l’installation de rhasspy sur raspberry pi ou docker avec comme micro intégré au raspberry pi matrix voice ou respeaker 4-mic Array, et l’intégration du protocol hermès afin de pouvoir utiliser le wakeword « Hey Snips » et le service hlc hermès led control qui permettra d’utiliser les led de votre Micro.

En suivant ce tutoriel et à la fin de celui-ci vous aurez un assistant vocal complet interagissant avec votre domotique et fonctionnant de façon similaire à google assistant ou Alexa de façon fermé, soit hors réseau.

# Installation de Rhasspy sur différentes instances:

## 1: Sur Home assistant par Hassio

pour se faire rendez-vous dans Supervisor &gt;&gt;&gt; Boutique des modules complémentaires &gt;&gt;&gt; **⋮** &gt;&gt;&gt; Dépôts

Colle ce lien **<https://github.com/rhasspy/hassio-addons>** et clic sur **Ajouter**, ferme la popup et clic à nouveau sur **⋮** et **Recharger**.

Si t’as rien compris regarde le gif animé ci-dessous.

<figure class="wp-block-image size-large">![ajout d'un dépot supplémentaire dans hassio supervisor](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1024 569'%2F%3E)<figcaption>gif animé d’ajout d’un dépôt dans homeassistant supervisor</figcaption></figure>## Sur une instance Raspbian

Commence par télécharger Raspbian ensuite installe sur une carte sd ( de nombreux tutos sont dispos sur le web si tu ne sais pas faire ).

<figure class="wp-block-embed is-type-rich is-provider-raspberry-pi wp-block-embed-raspberry-pi"><div class="wp-block-embed__wrapper">> #### [Operating system images – Raspberry Pi](https://www.raspberrypi.org/downloads/raspbian/)
> 
> Many operating systems are available for Raspberry Pi, including Raspberry Pi OS, our official supported operating system, and operating systems from other organisations. Raspberry Pi Imager is the quick and easy way to install an operating system to a microSD card ready to use with your Raspberry Pi.

<script async="" charset="UTF-8" src="//cdn.embedly.com/widgets/platform.js"></script></div></figure>```
<pre class="wp-block-code" title="installation rhaspy sur raspbian">```bash
sudo apt-get update sudo apt-get upgrade sudo raspi-config

# mettre le local sur fr utf-8
sudo dpkg-reconfigure locales


# donner les droits docker à user
curl -sSL https://get.docker.com | sh sudo usermod -a -G docker $USER

# redémarrer
sudo reboot

# installer rhasspy en personnalisant à ta sauce
docker run -d \
--name rhasspy \
-p 12101:12101 \
--restart unless-stopped \
-v /sharedfolders/Appdata/Rhasspy/Profiles:/profiles" \
--device /dev/snd:/dev/snd \
rhasspy/rhasspy:latest \
--user-profiles /profiles \
--profile fr
```
```

Installation de la carte respeaker ou matrix voice

## Installation de Matrix voice:

```
<pre class="wp-block-code">```bash
curl https://apt.matrix.one/doc/apt-key.gpg | sudo apt-key add - echo "deb https://apt.matrix.one/raspbian $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/matrixlabs.list 

sudo apt-get update 
sudo apt-get upgrade 
sudo reboot 
sudo apt install matrixio-kernel-modules 
sudo reboot
```
```

## Installation des Respeaker Microphones 

line de la doc complète: <https://github.com/respeaker/seeed-voicecard>

```
<pre class="wp-block-code">```bash
git clone https://github.com/respeaker/seeed-voicecard 
cd seeed-voicecard 
sudo ./install.sh 
sudo reboot
```
```

## Installation de hermesledcontrol grâce à project-alice-assistant

afin de controler les leds par hermès facilement adresse du projet: <https://github.com/project-alice-assistant/HermesLedControl>

```
<pre class="wp-block-code">```bash
wget https://gist.githubusercontent.com/Psychokiller1888/a9826f92c5a3c5d03f34d182fda1ce4c/raw/cbb53252dd55dc4e9f5f6064a493f0981cf133fb/hlc_download.sh

sudo chmod +x hlc_download.sh 
sudo ./hlc_download.sh



```
```

Installer wakeword raven ( snips ) lien: <https://github.com/rhasspy/rhasspy-wake-raven>