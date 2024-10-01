---
guid: 141
title: "Domotique Home Assistant et économie de chauffage"
description: "August revient sur la vidéo du 28 Mars concernant l'économie de chauffage et la domotique ça marche et apporte des chiffres sur sa consommation et ses économies réalisées depuis Février 2024"
ref: ""
layout: post
authors: [Nico, August]
date: 2024-10-01 18:30
last_modified_at: 
categories: [Domotique, Haade-lab, Videos, News, Home-Assistant]
tags: []
video: GSRyNPTgO04
image: 'bilan-economie-chauffage-gaz-august-de-reels-economies-investissement-minime.png'
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
comments: true
rating:  
sourcelink:
  - https://community.home-assistant.io/t/trv-calibrator-calibrate-your-valve-with-an-external-sensor-probably-trv-agnostic/451424
  - https://www.domadoo.fr/fr/box-domotique/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html?domid=39
---
**Après 9 mois d'installations**, August revient faire le point sur la [chaine youtube](https://www.youtube.com/@haade-fr){: target="_blank"} pour te parler de ses économies d'énergies réalisées grâce à une installation domotique Home Assistant.

{%- include alert.html type="info" text="Pour Info Chez Itead fournisseur officiel Sonoff bénéficie de <b>10%</b> de remises supplémentaires avec le code <b>HAADESONOFF</b>" link="https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/" textlink="Module Température Sonoff SNZB-02P" %}

**Pour rappel !** Au mois de février 2024 je suis passé chez August et j'ai pu installer une box domotique Home Assistant. **Il en a eu pour environ 400€** d'installations, j'avais annoncé un retour sur investissement de deux ans. Il s'avère que son investissement va être rentabilisé en à peine plus d'un an. Comme tu peux le voir sur la vidéo. 

> August a déjà **réalisé 217€ d'économies** sur 9 mois.

Si tu n'as pas vu la précédente vidéo n'hésite pas **c'est très instructif.**

{% include videoPlayer.html youtubeId="Cl7h8QwLl5A" %}

J'ai bientendu réalisé un article complet sur l'installation là aussi il **t'es fortement recommandé de le consulter.**

[Économise du chauffage grâce à la domotique]({% post_url /fr/2024-03-28-economise-du-chauffage-grace-a-la-domotique-ca-marche %})

{%- include alert.html type="warning" text="Nous allons <b>préparer un Live</b> qui sera diffusé le <b>7 Novembre</b> sur la chaîne youtube ou je te présenterai la domotisation du même chauffage mais le tout contrôlé <b>par un Sonoff NSPanel Pro</b>, ainsi nous ferons le tour de l'univers Sonoff et pourrons voir les points positifs mais aussi les limites d'un tel système." link="" textlink="" %}

## Comment avons nous fait

Il ne suffit pas de mettre des robinets thermostatiques et de les contrôler via une application pour faire ce genre d'économies. **C'est actuellement ce que nous vendent le gouvernement.** Et bien non ça ne fonctionne pas ainsi. Pour arriver à de telles résultats il ne faut pas seulement domotiser ses radiateurs mais aussi la centrale de chauffe dans notre cas c'est une chaudière au gaz.

En effet **grâce aux scénarios**, qui font la force de beaucoup de systèmes domotiques dont Home Assistant on va pouvoir enclancher la chaudière à notre guise et surtout faire de la demande pièces par pièces. Plus tout le reste !

> *Bref toutes les infos sont disponibles sur notre article édité au mois de Mars.*

[Économise du chauffage grâce à la domotique]({% post_url /fr/2024-03-28-economise-du-chauffage-grace-a-la-domotique-ca-marche %})


## Récapitulatif du matériel utilisé

- une **box domotique** [Home Assistant Green](https://www.domadoo.fr/fr/box-domotique/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html?domid=39){: target="_blank"} ou [Sonoff Ihost](https://www.domadoo.fr/fr/box-domotique/6715-box-domotique-ihost-local-zigbee-30-wifi-4gb-sonoff.html?domid=39){: target="_blank"}
- Si tu utilises la Home Assistant Green il te faudra une [clé zigbee Skyconnect](https://www.domadoo.fr/fr/box-domotique/6938-dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa-0794677011635.html?domid=39){: target="_blank"}
- des modules thermostatiques [TRV Sonoff](https://www.domadoo.fr/fr/chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html?domid=39){: target="_blank"} de pref
- des modules [thermostats températures et humidités](https://www.domadoo.fr/fr/chauffage-clim/6732-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.html?domid=39){: target="_blank"} ( marque **Sonoff** de préférence )
- un module multifonction [Nodon SIN-4-1-20](https://www.domadoo.fr/fr/peripheriques/5688-nodon-module-multifonction-zigbee-nodon-sin-4-1-20-onoff-contact-sec-3700313925188.html?domid=39){: target="_blank"} contact sec (afin de contrôler l'allumage et l'extinction de la chaudière)
- des compétences si t'en as c'est mieux

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green en vente chez domadoo à moins de 100€" domlink="produits-compatibles-home-assistant/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html" %}

Chez [August](/fr/auteur-august/){: target="_blank"}, nous avons décidé de partir sur une [box Home Assistant Green](https://www.domadoo.fr/fr/box-domotique/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html?domid=39){: target="_blank"} avec un [dongle zigbee Skyconnect](https://www.domadoo.fr/fr/box-domotique/6938-dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa-0794677011635.html?domid=39){: target="_blank"} pour contrôler les modules zigbee. 

{% include product-embed.html image="dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa.jpg" title="Dongle Zigbee Skyconnect" brand="Nabu Casa" description="Clé dongle zigbee Skyconnect" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}

Mais tu pourrais aussi partir sur une [box sonoff ihost avec clé zigbee intégré](https://www.domadoo.fr/fr/box-domotique/6715-box-domotique-ihost-local-zigbee-30-wifi-4gb-sonoff.html?domid=39){: target="_blank"} si tu désires domotiser certains aspects de ton logement, attention tout de même aux automatisations qui seront plus délicates à paramétrer. **En effet la box Home assistant green** est compatible avec le gigantesque **univers Home assistant** et de plus tu participes au projet opensource en investissant dans leurs Box et clés, et je trouve ça sympa.

Pour les robinets thermostatiques, le choix est vaste mais ayant pu en comparer certains, **nous avons sélectionné le Sonoff TRVZB pour ses nombreux atouts et sa simplicité d'utilisation !**

{% include product-embed.html image="sonoff-tete-thermostatique-connectee-zigbee-30.jpg" title="Sonoff TRVZB" brand="Sonoff" description="La tête thermostatique connectée SONOFF Zigbee vous permet de contrôler la température plus précisément avec moins d'énergie, vous offrant ainsi une maison plus confortable." domlink="chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html" iteadlink="sonoff-zigbee-thermostatic-radiator-valve" affiliate="_DFB4iQZ" %}

Ensuite **il te faudra un module contact-sec** qui commandera la fonction ouvert/fermé de ta chaudière ( Gaz, Fioul et même pompe à chaleur ), il en existe plusieurs sur le marché, j'ai sélectionné le module [Nodon multifonction SIN-4-1-20](https://www.domadoo.fr/fr/peripheriques/5688-nodon-module-multifonction-zigbee-nodon-sin-4-1-20-onoff-contact-sec-3700313925188.html?domid=39){: target="_blank"} car il est de **très bonne fabrication**, d'ailleurs [tu pourras lire un test à ce sujet]({% post_url /fr/2023-07-31-test-nodon-module-zigbee-1-relais-multifonction-veritable-couteau-suisse %}){: target="_blank"}.

{% include product-embed.html guid="2145" %}

Pour terminer je te conseil **fortement d'équiper chaque pièces d'un micro-module de température,** <ins>Pourquoi:</ins> Le robinet thermostatique est équipé d'un thermostat intégré cependant **la température est faussée en période de fonctionnement du fait de la proximité avec le corps de chauffe**, de plus c'est encore plus pertinent quand tu possèdes deux radiateurs dans la même pièce. 

{% include product-embed.html image="sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.jpg" title="ZSonoff SNZB-02P" brand="Sonoff" description="Micro-module zigbee température et humidité Sonoff SNZB-02P" iteadlink="sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p" domlink="chauffage-clim/6732-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.html" affiliate="_DkJNVHx" %}

**Dans la gamme des micro-modules thermostatiques** le choix est vaste, je te conseil encore un module [**Sonoff le SNZB-02P**](https://www.domadoo.fr/fr/chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html?domid=39){: target="_blank"}, **il est fiable, esthétique et peu cher**. [là aussi j'ai testé le Sonof SNZB-02P, n'hésite pas à consulter]({% post_url /fr/2023-08-20-test-capteur-zigbee-temperature-humidite-sonoff-SNZB-02P %}){: target="_blank"}.

{%- include alert.html type="info" text="Pour Info Chez Itead fournisseur officiel Sonoff bénéficie de <b>10%</b> de remises supplémentaires avec le code <b>HAADESONOFF</b>" link="https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/" textlink="Module Température Sonoff SNZB-02P" %}

## Conclusion

Voilà un **Bilan concluant** si tu as encore des doutes alors nous ne pourrons rien faire pour toi 😁. Pourtant il existe pas mal de manières d'y arriver et surtout ça fonctionne le tout sans changer son système de chauffage traditionnel ainsi le retour sur investissement est quasi immédiat. À toi de voir ce que tu comptes faire.

{%- include alert.html type="warning" text="Nous allons <b>préparer un Live</b> qui sera diffusé le <b>7 Novembre</b> sur la chaîne youtube ou je te présenterai la domotisation du même chauffage mais le tout contrôlé <b>par un Sonoff NSPanel Pro</b>, ainsi nous ferons le tour de l'univers Sonoff et pourrons voir les points positifs mais aussi les limites d'un tel système." link="" textlink="" %}

> Pour toutes aides sur l'installation nhésite pas à écrire je répondrai à tes messages.

