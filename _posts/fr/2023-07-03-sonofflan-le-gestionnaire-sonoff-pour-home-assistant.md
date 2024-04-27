---
guid: 74
title: "SonoffLAN intégrer facilement les modules Sonoff wifi"
description: "SonoffLAN est un module complémentaire qui te permet de façon simple et efficace d'intégrer les modules wifi de la marque Sonoff dans Home Assistant. Je profite de cet article pour te présenter le module Commutateur et compteur d'énergie intelligent wifi Sonoff POW Elite POWR316D compatible rail din"
ref: "POW Elite POWR316D"
layout: post
authors: Nico
date: 2023-07-05 17:53
last_modified_at: 
categories: [Domotique, Haade-lab, Tests, Home-Assistant]
tags: []
image: 'Sonofflan-control-sonoff-home-assistant.png'
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
rating: 5.0 
sourcelink:
  - https://www.domadoo.fr/fr/peripheriques/6659-sonoff-commutateur-de-compteur-de-puissance-intelligent-16a-avec-ecran-pow-elite.html?domid=39
  - https://itead.cc/product/sonoff-pow-elite-smart-power-meter-switch/
---

Cette fois, j'ai décidé de rédiger un **article 2 en 1**, afin de te présenter l'intégration des modules Sonoff via l'application **SonoffLAN** créé par [AlexxIT](https://github.com/AlexxIT/SonoffLAN){: target="_blank"} qui te permet **simplement et facilement** d'intégrer les modules sonoff dans Home assistant et de choisir selon les modules si tu veux qu'ils fonctionnent **avec ou sans cloud** [(voir la liste des modules compatibles)](https://github.com/AlexxIT/SonoffLAN#tested-devices){: target="_blank"} J'ai choisi en exemple l'intégration du module Sonoff commutateur de puissance 16A {{ page.ref }}, que je vais te présenter ( déballage, test).

{% include product-embed.html guid="2167" %}

## Prérequis

- Home Assistant
- Le Gestionnaire de paquet HACS d'installé
- un module [Sonoff wifi 16/20A commutateur de puissance](https://www.domadoo.fr/fr/peripheriques/6659-sonoff-commutateur-de-compteur-de-puissance-intelligent-16a-avec-ecran-pow-elite.html?domid=39){: target="_blank"}
- l'application Ewelink d'installé sur ton tél

## Pourquoi SonoffLAN ?

**Car il est simple d'utilisation**, l'intégration dans Home Assistant est nickel. Mais ce n'est pas ça le plus important, tu pourras choisir si tu veux oui ou non te passer du cloud chinois d'ewelink. 
> Parce que oui, si tu choisis d'acheter un module wifi Sonoff, il fonctionnera par défaut sur le **Cloud**.

D'ailleurs Ewelink a développé un module fonctionnel sous home Assistant, il te faudra home assistant version OS et ajouter le dépot suivant:

{%- include homeassistantlink.html supervisor_addon_repository="https://github.com/CoolKit-Technologies/ha-addon" %}

Cependant je trouve ce module lourd et il n'est d'autre qu'un iframe de l'application ewelink App pour téléphone, bref je passe mon tour.

## 1. Préparation Home Assistant

Avant tout **installer les répertoires HACS**, alors ce n'est pas 100% nécessaire cependant il est fort probable qu'un jour ou l'autre tu décides d'installer un autre module inclus dans HACS par exemple le [module Linkplay voir l'article dédié]({% post_url /fr/2023-01-18-decouverte-linkplay-alternative-airplay-sonos %}).

Pour installer HACS suis le tutoriel officiel [HACS](https://hacs.xyz/docs/setup/prerequisites){: target="_blank"}. 
**Redémarre Home Assistant** et ensuite il te suffit d'aller dans HACS > intégration > explorer et télécharger des dépôts.
**Cherche SonoffLAN et installe-le.** Voilà c'est presque terminé.

ou clic sur le lien ci-dessous:

{%- include homeassistantlink.html repertory="sonofflan" creator="alexxit" %}

## 2. Préparation du Téléphone

Télécharge l'application ewelink pour ton smartphone
- [Pour Iphone](https://apps.apple.com/fr/app/ewelink-smart-home/id1035163158){: target="_blank"}
- [Pour Android](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&gl=US&pli=1){: target="_blank"}

Une fois installé il te suffira de créer un identifiant et un mot de passe sur l'app. Tu peux tout de suite les noter quelque part car ils te seront demandés dans SonoffLAN lors de l'intégration du premier ajout d'appareil.

## 3. Intégration de SonoffLAN dans HA

Soit tu te rends dans:
**Paramètres > Appareils et services > Ajouter une intégration.**

Ou alors tu clic directement sur le liens ci-dessous pour ajouter l'intégration

{%- include homeassistantlink.html integration="sonoff" %}

> Voilà il ne te reste plus qu'à rentrer le login et mot de passe **ewelink** et valider.

{% picture posts/{{ page.guid }}/sonofflan-integration.png --alt integration sonofflan dans home assistant --img width="410" height="325" %}

Clic sur ce [lien pour connaître l'ensemble des modules compatibles](https://github.com/AlexxIT/SonoffLAN#tested-devices){: target="_blank"} selon le mode choisi.

## 4. Inclure un module dans Ewelink App

Commme je l'ai dit plus haut je vais utiliser le module sonoff {{ page.ref }} commutateur de puissance intelligent wifi

### 4.1 Présentation du module Sonoff {{ page.ref }}

**Version 16A**
{% include product-embed.html guid="2167" %}

{% picture posts/{{ page.guid }}/sonoff-smart-power-meter-wifi-powr316d.png --alt integration sonoff powr316d smart meter avec sonofflan dans home assistant --img width="940" height="529" %}

***Franchement c'est un module de qualité***, l'emballage aux couleurs turquoises signe de la marque sont propres. livré sans fioriture avec une notice et deux visses pour verrouiller le clapet de conncetions.

La connectique et épaisse et de qualité, le branchement simple à réaliser.
Tu pourras vite te rendre compte que le module est de bonne facture et pourtant actuellement il ne coûte moins de 17€ chez Domadoo !

**En façade, tu trouveras:**

- un bouton interrupteur
- un voyant de fonctionnement on/off
- un voyant bleu wifi.

{% picture posts/{{ page.guid }}/sonoff-commutateur-de-compteur-de-puissance-intelligent-16a-avec-ecran-pow-elite.png --alt présentation du module pow elite 16A sonoff --img width="940" height="529" %}

Le module est livré avec une notice, un support mural/rail din ainsi que deux visses qui te permettront de verouiller le clapet d'accès aux cables électriques.

![remontée d'info ecran digital sonoff smart meter powr316d]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/sonoff-smart-power-meter-powr316d-display.webp{{ cachebuster }}){: width="250" height="400" class="lazyload"}

L'écran LCD est relativement grand, les infos sont claires, tu pourras voir en direct les consos **( Volt, Ampère, Kwh et W), franchement pas mal.**

### **les + du produit**
{: .blue}
- la qualité de fabrication
- intégration facile et complète avec sonofflan
- le prix moins de 20€ ( version 16A)
- compatible rail din
- retour d'énergie
- idéal pour chauffe eau (20A)
- fonctionne en mode lan
- nombre de retour d'état ( 9 )

### **les - du produit**
{: .red}
- compatible wifi 802.11 bgn
- la taille
- largeur equivalente à 3 disjoncteur

**PS: Le module prend l'équivalent de 3 disjoncteurs, si tu décides d'équiper ton tableau électrique choisi le bien grand :).**

**Version 20A**
{% include product-embed.html guid="2168" %}

### 4.2 Inclusion dans Ewelink App

Cette étape est malheureusement nécessaire pour pouvoir utiliser le module Sonoff {{ page.ref }}, une fois inclus SonoffLAN récupère les infos et peut ainsi les traiter en local sans passer par le cloud Ewelink.

![inclusion ewelink app sonoff smart meter powr316d]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/integration-module-sonoff-app-ewelink.webp{{ cachebuster }}){: width="300" height="650" class="lazyload"}

> Bizarrement je n'ai pas réussi à l'inclure en scannant le QRCode.

**Pas grave l'inclusion en bluetooth se fait sans soucis**. Suis les étapes indiquées sur ton smartphone et tout devrait bien se passer.

> l'inclusion se fait en appuyant 5 secondes sur l'interrupteur du module.

## 5. Retour dans Home Assistant

**Important: à ce stade pense à redémarrer l'instance Home Assistant**

Une fois redémarré rendez toi dans:
**Paramètre > Appareils et Services** ou clic directement sur le lien *ci-dessous*:

{% include homeassistantlink.html integrations="" %}

Tu devrais voir **apparaître l'intégration Sonoff avec la remontée d'un appareil le POWR316D**, si tu possèdes déjà l'application Ewelink avec plusieurs modules sonoff ils apparaitront aussi dans l'intégration SonoffLAN de Home Assistant. Attetntion à bien choisir le mode de fonctionnement de l'intégration voir plus bas.

{% picture posts/{{ page.guid }}/appareils-sonofflan-homeassistant.png --alt remontée de appareil dans sonofflan --img width="263" height="123" %}

En cliquant sur la roue crantée tu auras accès à la page dédiée des modules Sonoff voir *l'image ci-dessous*.

{% picture posts/{{ page.guid }}/entité-appareil-sonofflan.png --alt état des appareils Sonoff dans Sonofflan --img width="940" height="441" %}

Si tu clic sur:
- **configurer:** tu pourras paramétrer le mode auto / cloud / local. *Voir l'image ci-dessous*.
- **ajouter une entrée**: tu pourras ajouter un autre compte Ewelink et oui le module est compatible multi-compte

{% picture posts/{{ page.guid }}/sonofflan-configurer-lan-cloud.png --alt paramétrage de Sonofflan en mode auto, cloud ou local --img width="940" height="682" %}

> Perso si tu n'est pas sûre ou si tu possèdes plusieurs modules, sélectionne le mode **auto**

Enfin si tu clic sur l'appareil tu auras accès à la page des 9 entités de cet appareil rien que ça, le contrôle on/off est instantané malgré la distance de l'antenne wifi. Tu auras accès à l'ensemble des commandes.

![entité découvert dans home assistant sonoff smart meter powr316d]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/entité-powr316d.webp{{ cachebuster }}){: width="940" height="789" class="lazyload"}

## Conclusion

L'intégration [SonoffLAN par AlexxIT](https://github.com/AlexxIT/SonoffLAN){: target="_blank"} **est top, simple et efficace**, le fait de pouvoir choisir le *mode de fonctionnement* est super, dommage que peut de modules sonoff soit compatibles en locale. En ce qui concerne le module Sonoff {{ page.ref }}, j'ai **mis 5 étoiles** et c'est assez rare donc n'hésite pas à t'équiper si ça correspond à tes besoins !







