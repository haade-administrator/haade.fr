---
id: 8507
title: 'Rhasspy Boite à outil Open Source mise en place'
date: '2021-07-08T13:58:36+00:00'
author: Nicolas
layout: post
guid: 'https://www.haade.fr/?p=8507'
---

Rhasspy (prononcé RAH-SPEE) est une boîte à outils d’assistant vocal open source entièrement déconnecté pour de nombreuses langues qui fonctionne bien avec Home Assistant, Hass.io, hermes Protocol ( compatible ancien service de SNIPS.AI ), Jeedom et Node-RED.

Cet article est dédié à l’installation de rhasspy sur raspberry pi ou docker avec comme micro intégré au raspberry pi matrix voice ou respeaker 4-mic Array, et l’intégration du protocol hermès afin de pouvoir utiliser le wakeword « Hey Snips » et le service hlc hermès led control qui permettra d’utiliser les led de votre Micro.

En suivant ce tutoriel et à la fin de celui-ci vous aurez un assistant vocal complet interagissant avec votre domotique et fonctionnant de façon similaire à google assistant ou Alexa de façon fermé, soit hors réseau.

# Installation de Rhasspy sur différentes instances:

## 1: Sur Home assistant par Hassio

pour se faire rendez-vous dans Supervisor >>> Boutique des modules complémentaires >>> **⋮** >>> Dépôts

Colle ce lien **<https://github.com/rhasspy/hassio-addons>** et clic sur **Ajouter**, ferme la popup et clic à nouveau sur **⋮** et **Recharger**.

Si t’as rien compris regarde le gif animé ci-dessous.

<figure class="wp-block-image size-large">![ajout d'un dépot supplémentaire dans hassio supervisor](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1024 569'%2F%3E)<figcaption>gif animé d’ajout d’un dépôt dans homeassistant supervisor</figcaption></figure>## Sur une instance Raspbian

Commence par télécharger Raspbian ensuite installe sur une carte sd ( de nombreux tutos sont dispos sur le web si tu ne sais pas faire ).

<figure class="wp-block-embed is-type-rich is-provider-raspberry-pi wp-block-embed-raspberry-pi"><div class="wp-block-embed__wrapper">> #### [Operating system images – Raspberry Pi](https://www.raspberrypi.org/downloads/raspbian/)
> 
> Many operating systems are available for Raspberry Pi, including Raspberry Pi OS, our official supported operating system, and operating systems from other organisations. Raspberry Pi Imager is the quick and easy way to install an operating system to a microSD card ready to use with your Raspberry Pi.

<script async="" charset="UTF-8" src="//cdn.embedly.com/widgets/platform.js"></script></div></figure>{% endhighlight %}
<pre class="wp-block-code" title="installation rhaspy sur raspbian">{% highlight shell %}
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
{% endhighlight %}
{% endhighlight %}

Installation de la carte respeaker ou matrix voice

## Installation de Matrix voice:

{% endhighlight %}
<pre class="wp-block-code">{% highlight shell %}
curl https://apt.matrix.one/doc/apt-key.gpg | sudo apt-key add - echo "deb https://apt.matrix.one/raspbian $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/matrixlabs.list 

sudo apt-get update 
sudo apt-get upgrade 
sudo reboot 
sudo apt install matrixio-kernel-modules 
sudo reboot
{% endhighlight %}
{% endhighlight %}

## Installation des Respeaker Microphones 

line de la doc complète: <https://github.com/respeaker/seeed-voicecard>

{% endhighlight %}
<pre class="wp-block-code">{% highlight shell %}
git clone https://github.com/respeaker/seeed-voicecard 
cd seeed-voicecard 
sudo ./install.sh 
sudo reboot
{% endhighlight %}
{% endhighlight %}

## Installation de hermesledcontrol grâce à project-alice-assistant

afin de controler les leds par hermès facilement adresse du projet: <https://github.com/project-alice-assistant/HermesLedControl>

{% endhighlight %}
<pre class="wp-block-code">{% highlight shell %}
wget https://gist.githubusercontent.com/Psychokiller1888/a9826f92c5a3c5d03f34d182fda1ce4c/raw/cbb53252dd55dc4e9f5f6064a493f0981cf133fb/hlc_download.sh

sudo chmod +x hlc_download.sh 
sudo ./hlc_download.sh



{% endhighlight %}
{% endhighlight %}

Installer wakeword raven ( snips ) lien: <https://github.com/rhasspy/rhasspy-wake-raven>