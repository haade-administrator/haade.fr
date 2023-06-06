---
guid: 68
title: "Domotise ton compteur edf pour 20€ en 5 minutes"
description: "Relève en 5 minutes la téléinfo dans home assistant sur n'importe quel compteur edf avec une clé micro téléinfo v3.0 par charles Hallard à 20€"
layout: post
author: Nico
date: 2023-06-04 21:01
last_modified_at: 
categories: [Haade-lab]
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
  - https://www.tindie.com/stores/hallard/
  - https://github.com/hallard/uTeleinfo/tree/main
  - https://community.ch2i.eu/category/9/microt%C3%A9l%C3%A9info
redirect_from: 
  - /fr/blog/domotise-teleinfo-20-5minutes
---

Il y a de nombreuses façons de récupérer la téléinfo du compteur Edf, l'un des derniers modules en date est le Lixee mais il a le désavantage de n'être compatible qu'avec certains compteurs. Je vais te montrer comment faire remonter la téléinfo dans home assistant pour 20€ sans modules wifi esp32/8266, avec un **micro module usb** fabriqué par Charles Hallard le dernier en date est le **micro téléinfo v3.0**.

## Prérequis
- homeassistant OS sur raspberry pi
- un [micro Teleinfo v3.0 par Charles Hallard](https://www.tindie.com/products/hallard/micro-teleinfo-v30/){: target="_blank"} usb
- du fil communication
- un compteur EDF

J'ai pu réaliser cette installation facilement pour un amis qui va domotiser son domicile en montant un raspberry pi 4 dans un boitier rail din directement dans le tableau éléctrique à proximité du compteur EDF.

> cette installation est compatible avec tous les compteurs EDF du marché.

### Avantage de cette installation:
{: .blue}
- facile à mettre en place
- le tarif

### Inconvénient:
{: .red}
- proximité entre le module homeassistant et le compteur
- monopolise un port usb
- absorbe un peut de puissance d'ampérage de ta box domotique

**Parlons un peu de l'installation:** ce tuto permet de faire remonter les infos par l'intermédiaire du *service mqtt*. Il te faudra installer le module complémentaire **officiel mosquitto**, ensuite je vais te montrer comment installer le **module complémentaire téléinfo2mqtt** développé par *fmartinou* celui-ci est fonctionnel avec tous les TIC usb du marché donc avec le micro téléinfo V3 de Charles Hallard.

## Top Chrono installation en (5 minutes)

> Pour réaliser cette installation n'hésite pas à utiliser les liens my.homeassistant.io ci-dessous.

### module MQTT

- Installe le module complémentaire MQTT, Mosquitto

{% include homeassistantlink.html supervisor_addon="core_mosquitto" %}

[Paramètres > modules complémentaires > boutique des modules complémentaires]

- Crée un **compte utilisateur** pour mosquitto, en général je met en nom d'utilisateurs **mqtt** plus facile à reconnaitre 😏

{% include homeassistantlink.html users="" %}

- Retourne dans la configuration mosquitto

{% include homeassistantlink.html supervisor_addon="core_mosquitto/config" %}

et rajoute ces lignes dans l'onglet logins comme sur la capture d'image ci-dessous.

{% picture posts/{{page.guid}}/parametrage-user-core-mosquitto-home-assistant.png --alt paramétrage users dans core mosquitto mqtt home assistant pour micro téléinfo v3.0 --img width="940" height="279" %}

{% highlight shell %}
- username: "le login utilisateur"
  password: "mot de passe utilisateur"
{% endhighlight %}

- Démarre Mosquitto

{% include homeassistantlink.html supervisor_addon="core_mosquitto/info" %}

### Module téléinfo2mqtt

[lien github du module téléinfo2mqtt](https://github.com/fmartinou/teleinfo2mqtt){: target="_blank"}

L'avantage de ce module et sa simplicité, [accompagnée d'une documentation soignée](https://fmartinou.github.io/teleinfo2mqtt/#/introduction/){: target="_blank"}. Il a aussi l'avantage d'être **stable**.

- Installe le module complémentaire téléinfo2mqtt

commence par ajouter le dépôt externe de fmartinou **https://github.com/fmartinou/hassio-addons**, ou clic directement sur le lien ci-dessous:

{% include homeassistantlink.html supervisor_addon_repository="https://github.com/fmartinou/hassio-addons" %}

{% picture posts/{{page.guid}}/fmartinou-repository-addons-haos.png --alt fmartinou répertoire modules complémentaires home assistant --img width="851" height="140" %}


Une fois l'installation faite le module aura créé un **appareil nommé teleinfo2mqtt** qui permet en autre de controler les mises à jours.

{% picture posts/{{page.guid}}/fmartinou-teleinfo-appareil-teleinfo2mqtt.png --alt fmartinou téléinfo2mqtt appareil dans home assistant --img width="940" height="721" %}

- Branche la clé **micro téléinfo v3.0** de Charles Hallard sur le raspberry et redémarre homeassistant en haut à droite

{% include homeassistantlink.html settings="" %}

- Paramètre **téléinfo2mqtt**

{% include homeassistantlink.html supervisor_addon="9afc8f77_teleinfo2mqtt/config" %}

Branche le module téléinfo sur ta box domotique
**redémarre homeassistant**
- [va dans paramètres > système > matériel] et clic sur **tout le matériel**
- récupère le lien exacte de la clé ( voir la capture ci-dessous)

{% picture posts/{{page.guid}}/lien-serie-usb-micro-teleinfo-v3-charles-hallard.png --alt récupération du lien serie de la clé micro téléinfo v3 de charles Hallard dans home assistant --img width="511" height="945" %}

Ensuite retourne sur téléinfo2mqtt et paramètre téléinfo2mqtt, démarre le module.

{% picture posts/{{page.guid}}/parametrage-teleinfo2mqtt.png --alt paramétrage du module téléinfo2mqtt dans home assistant --img width="940" height="832" %}

Une fois démarré et l'installation complète, par là je veux dire branché sur le compteur EDF les trames tic vont remonté dans mosquitto.

{% picture posts/{{page.guid}}/remonte-teleinfo2mqtt-dans-mosquitto.png --alt rempontée des infos tic dans home assistant par le biais mqtt et téléinfo2mqtt --img width="940" height="698" %}

## Parlons du module Micro Téléinfo v3.0 (uteleinfo)

![Transmission iformations led micro Teleinfo v3.0 sur compteur dans home assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/Micro-Teleinfo-v3-charles-hallard-blink.webp{{ cachebuster }}){: width="420" height="282"}{: target="_blank"}
