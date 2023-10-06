---
guid: 68
title: "Domotise n'importe quel compteur edf pour 20€ en 5 minutes"
description: "Relève en 5 minutes la téléinfo dans home assistant sur n'importe quel compteur edf (ancien et linky) avec une clé micro téléinfo v3.0 par charles Hallard à 20€, par l'intermédiaire des modules mqtt et téléinfo2mqtt"
layout: post
author: Nico
date: 2023-06-04 21:01
last_modified_at: 2023-06-07 11:17
categories: [Haade-lab, Tests]
tags: []
image: 'micro-teleinfo-v3-homeassistant-teleinfo2mqtt-20€-5minutes.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
addViews: 1111
comments: true
rating: 5.0
sourcelink:
  - https://www.tindie.com/stores/hallard/
  - https://github.com/hallard/uTeleinfo/tree/main
  - https://community.ch2i.eu/category/9/microt%C3%A9l%C3%A9info
redirect_from: 
  - /fr/blog/domotise-linky-µteleinfo-homeassistant-20-5minutes
---

Il y a de **nombreuses façons** de récupérer la téléinfo du compteur Edf, l'un des derniers modules en date **est le Lixee** mais il a le désavantage de **n'être compatible** qu'avec certains compteurs. Je vais te montrer comment faire remonter la téléinfo dans home assistant pour 20€ sans modules wifi esp32/8266, avec un **micro module usb** fabriqué par Charles Hallard le dernier en date est le **micro téléinfo v3.0, nommé aussi µtéléinfo**.

## Prérequis
- homeassistant OS
- un [micro Teleinfo v3.0 par Charles Hallard](https://www.tindie.com/products/hallard/micro-teleinfo-v30/){: target="_blank"} usb
- du fil communication
- un compteur EDF

J'ai pu réaliser cette installation facilement pour un amis qui va domotiser son domicile en montant un raspberry pi 4 dans un boitier rail din directement dans le tableau éléctrique à proximité du compteur EDF.

> cette installation est compatible avec tous les compteurs EDF du marché.

### Liens connexes

[intégrer un compteur éléctrique téléinfo dans home assistant]({% post_url /fr/2021-08-03-integrer-son-compteur-electrique-teleinfo-dans-home-assistant %})

[intégrer la téléinfo au dashboard energie de home assistant]({% post_url /fr/2022-01-03-integrer-la-teleinfo-au-dashboard-energie-dans-home-assistant %})


### Avantage de cette installation:
{: .blue}
- facile à mettre en place
- le tarif

### Inconvénient:
{: .red}
- proximité entre le module home assistant et le compteur
- monopolise un port usb
- absorbe un peu de puissance de la box domotique environ 3w

**Parlons un peu de l'installation:** ce tuto permet de faire remonter les infos par l'intermédiaire du *service mqtt*. Il te faudra installer le module complémentaire **officiel mosquitto**, ensuite je vais te montrer comment installer le **module complémentaire téléinfo2mqtt** développé par *fmartinou* celui-ci est fonctionnel avec tous les TIC usb du marché donc avec le micro téléinfo V3 de Charles Hallard.

## Top Chrono installation en (5 minutes)

> Pour réaliser cette installation n'hésite pas à utiliser les liens **my.homeassistant.io** ci-dessous.

### Module MQTT mosquitto

**1** Installe le module complémentaire MQTT, Mosquitto

[paramètres > Modules complémentaires > Boutiques des modules complémentaires] ou clic sur le lien ci-dessous

{% include homeassistantlink.html supervisor_addon="core_mosquitto" %}

**2** Ensuite crée un **compte utilisateur** dans home assistant pour mosquitto, en général je met en nom d'utilisateurs **mqtt** plus facile à reconnaitre 😏

{% include homeassistantlink.html users="" %}

**3** Retourne dans la configuration mosquitto

{% include homeassistantlink.html supervisor_addon="core_mosquitto/config" %}

et rajoute ces lignes dans l'onglet logins comme sur la capture d'image ci-dessous.

{% picture posts/{{page.guid}}/parametrage-user-core-mosquitto-home-assistant.png --alt paramétrage users dans core mosquitto mqtt home assistant pour micro téléinfo v3.0 --img width="940" height="279" %}

{% highlight shell %}
- username: "le login utilisateur"
  password: "mot de passe utilisateur"
{% endhighlight %}

**4 Démarre Mosquitto**

jette un coup d'oeil au journal des infos afin de voir le bon fonctionnement du module.

{% include homeassistantlink.html supervisor_addon="core_mosquitto/logs" %}

### Module téléinfo2mqtt

[lien github du module téléinfo2mqtt](https://github.com/fmartinou/teleinfo2mqtt){: target="_blank"}

L'avantage de ce module et sa simplicité, [accompagnée d'une documentation soignée](https://fmartinou.github.io/teleinfo2mqtt/#/introduction/){: target="_blank"}. Il a aussi l'avantage d'être **stable**.

**1** Installe le module complémentaire téléinfo2mqtt

commence par ajouter le dépôt externe de fmartinou **https://github.com/fmartinou/hassio-addons**, ou clic directement sur le lien ci-dessous:

{% include homeassistantlink.html supervisor_addon_repository="https://github.com/fmartinou/hassio-addons" %}

{% picture posts/{{page.guid}}/fmartinou-repository-addons-haos.png --alt fmartinou répertoire modules complémentaires home assistant --img width="851" height="140" %}


**2** Une fois l'installation faite le module aura créé un **appareil nommé teleinfo2mqtt** qui permet en autre de controler les mises à jours.

{% picture posts/{{page.guid}}/fmartinou-teleinfo-appareil-teleinfo2mqtt.png --alt fmartinou téléinfo2mqtt appareil dans home assistant --img width="940" height="721" %}

**3** Branche la clé **micro téléinfo v3.0** de Charles Hallard sur le raspberry et redémarre homeassistant en haut à droite

{% include homeassistantlink.html settings="" %}

**4** Paramètre **téléinfo2mqtt**

{% include homeassistantlink.html supervisor_addon="9afc8f77_teleinfo2mqtt/config" %}

Branche le module téléinfo sur ta box domotique
**redémarre homeassistant**
- [va dans paramètres > système > matériel] et clic sur **tout le matériel**
- récupère le lien exacte de la clé ( voir la capture ci-dessous)

{% picture posts/{{page.guid}}/lien-serie-usb-micro-teleinfo-v3-charles-hallard.png --alt récupération du lien serie de la clé micro téléinfo v3 de charles Hallard dans home assistant --img width="511" height="945" %}

Ensuite retourne sur téléinfo2mqtt et paramètre téléinfo2mqtt, **pour terminer démarre le module**.

{% picture posts/{{page.guid}}/parametrage-teleinfo2mqtt.png --alt paramétrage du module téléinfo2mqtt dans home assistant --img width="940" height="832" %}

Une fois démarré et l'installation complète, par là je veux dire branché sur le compteur EDF les trames tic vont remonter dans mosquitto. Tu pourras aussi **voir les infos du journal** dans l'onglet info du module et te rendre compte du bon fonctionnement de l'ensemble.

{% include homeassistantlink.html supervisor_addon="9afc8f77_teleinfo2mqtt/logs" %}

{% picture posts/{{page.guid}}/remonte-teleinfo2mqtt-dans-mosquitto.png --alt remontée des infos tic dans home assistant par le biais mqtt et téléinfo2mqtt --img width="940" height="698" %}

## Remontée Puissance dans le Dashboard Home assistant

Il est facile de faire remonter la pussance totale dans le dashboard Lovelace sous forme de jauges. Ajoute une carte jauge ou gauge en anglais et ajoute **l'entité téléinfo PAPP**. J'ai un abonnement 12Kv donc j'ai fait en fonction de mon abonnement pour calibrer la puissance de la jauge.

{% picture posts/{{page.guid}}/home-assistant-lovelace-gauge-teleinfo-kwh.png --alt paramétrage puissance totale PAPP dans le dashboard Lovelace de Home assistant --img width="940" height="674" %}

N'hésite pas à modifier les pallier suivant ton abonnement éléctrique.

{% highlight yaml %}
type: gauge
name: Volt
min: 0
max: 12000
severity:
  green: 0
  yellow: 6000
  red: 9000
entity: sensor.teleinfo_XXXXXXXXXXXX_papp
needle: true
{% endhighlight %}

> Voilà le résultat final, je trouve le visuel net et clair.

{% picture posts/{{page.guid}}/lovelace-teleinfo-papp.png --alt remontée puissance totale PAPP dans le dashboard Lovelace de Home assistant --img width="482" height="195" %}

## Paramétrage onglet énergie

Continue et **clic sur le lien ci-dessous** ensuite sur [Consommation du réseau > ajouter la consommation du réseau]

{% include homeassistantlink.html energy="" %}

Tu devrais voir apparaître deux lignes, l'une pour l'heure creuse HCHC et une pour l'heure pleine HCHP, ajoute les deux.

{% picture posts/{{page.guid}}/parametrage-energie-teleinfo2mqtt-micro-teleinfo-v3-charles-hallard-home-assistant.png --alt parametrage energie teleinfo2mqtt micro teleinfo v3 charles hallard home assistant --img width="797" height="756" %}

Si tu utilises déjà l'onglet énergie **clic plutôt** sur ce lien pour paramétrer l'énergie dans HA.

{% include homeassistantlink.html config_energy="" %}

> Enfin après environ 1 à 2h admire les bargraphs et contrôle la consommation

{% picture posts/{{page.guid}}/capture-energie-micro-teleinfo-v3-charles-hallard.png --alt capture consommation onglet énergie dans home assistant avec le µtéléinfo v3.0 par charles Hallard --img width="940" height="621" %}


## Parlons du module Micro Téléinfo v3.0 (uteleinfo)

Je l'ai [commandé sur la plateforme tindie](https://www.tindie.com/products/hallard/micro-teleinfo-v30/){: target="_blank"} et réceptionné 3 jours après par lettre verte la poste, merci pour cette rapidité, j'ai commandé la version 3 finale entièrement assemblé, et livré **j'en ai eu pour 21€**.

{% picture posts/{{page.guid}}/presentation-µteleinfo-v3-charles-hallard-integration-home-assistant.png --alt taille et présentation du module micro, µtéléinfo v3.0 par charles Hallard --img width="940" height="529" %}

**Dimensions:**

L 55mm x l 14mm x P 1mm 

**Quels sont les changements de la v3**

- R3 remplacé par un pot trimère pour permettre d'ajuster la sensibilité TIC dans de rares cas
- Leds séparées pour RX / TX
- PCB plaqué or
- Taille réduite du circuit imprimé
- LED ajoutée donc voir signal TIC Teleinfo
- Ajout de LED rouges/vertes TX/RX
- Entrée résistance TIC réglée sur 220 Ohms
- Résistance MOSFET 3,3 KOhms
- En raison d'une pénurie, changement de la puce FT230XS par CH9106

Faut dire que la v3.0 du µtéléinfo illumine, tu ne pourras pas râter le transfert de données.
> peut-être un peu trop lumineux à mon goût.

![Transmission informations led micro Teleinfo v3.0 sur compteur dans home assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/Micro-Teleinfo-v3-charles-hallard-blink.webp{{ cachebuster }}){: width="420" height="282"}{: target="_blank"}

## Conclusion

Voilà un exemple d'installation facile à mettre en place pour **relever la téléinfo sur le linky** ou tout autre compteur edf du marché. **Charles Hallard** a su créer un *module peu cher, de petite taille et efficace*. En ce qui concerne l'intégration on a tendance à utiliser le transfert d'info par mqtt fréquemment, surtout si tu utilises Zigbee2mqtt alors je trouve l'alternative **téléinfo2mqtt** pratique à mettre en place et relativement bien faîte. Il existe toutes sortes d'intégrations de la téléinfo voici en une, **reliée au port usb**. 
> Alors éclate toi.
