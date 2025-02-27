---
guid: 156
title: "Test de l'interface Tado"
description: "Deuxième étape de présentation de l'univers Tado, je vais te montrer tout le processus d'utilisation de l'interface Tado et de ses particularités"
ref: ""
layout: post
authors: [Nico]
date: 2025-02-25 09:12
last_modified_at: 
categories: [Tests, Haade-lab]
tags: []
video: 
image: 'controle-ton-installation-tado-par-application-officielle.png'
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
  - https://support.tado.com/fr/articles/4190245-comment-debuter-avec-l-application-tado
---

Voilà dans une continuité de présentation de l'univers Tado° suite à la présentation du [robinet thermostatique Tado° X]({% post_url /fr/2025-02-12-test-du-robinet-thermostatique-tado-x-proche-de-la-perfection-compatible-thread %}){: target="_blank"}, je vais aujourd'hui te présenter l'application Tado° de ses particularités et **surtout ce qui différencie la gestion du Chauffage Tado° et la gestion par rapport aux autres marques**.

Comme présenté précedemment ce qui différencie les produits Tado° des autres marques commencent par l'intégration du protocole Thread associé à la gestion d'objet Matter. Couplé à des produits bien finis et complémentaires qui font de cette marque un incontournable en gestion de Chauffage et totalement autonome. En gros tu n'auras pas particulièrement besoin d'un Gestionnaire Opensource comme Home Assistant pour faire de belles économies sur ta facture de gaz ou fioul.

Pour rappel, si tu achètes juste des robinets thermostatiques que tu pourras allumer ou éteindre à ta convenance tu ne feras que 15% maximum d'économies sur ta facture. Là ou Tado° se différencie et sur le fait qu'il te permettra de contrôler directement ta chaudière et grâce à ça tu pourras faire jusqu'à 50% d'économies sur ta facture ce qui est très intéressant surtout pour un retour sur investissement qui sera beaucoup plus rapide.

Dans divers articles et vidéos avec August nous avons parlé à de nombreuses reprises d'une installation similaire avec Home Assistant et des robinets thermostatiques qui contrôlent ta chaudière, et ça fonctionne alors décorticons l'univers Tado°.

> Je dois dire que l'application est très bien faite

## Installation de l'app Tado°

Ne perdons pas de temps passons à l'installation de l'application sur Smartphone.

### Pour Android

Scan simplement le QRCode ci-dessous pour accéder directement à l'installation sur ton tél. À l'heure ou j'écris ces quelques lignes **l'application est noté 4,5/5 avec plus de 5000 votants,** ce qui est très bien noté.

{% include qrlink.html qrlink="https://play.google.com/store/apps/details?id=com.tado&hl=fr" text="télécharger l'application Tado° sur le playstore" realtextlink="https://play.google.com/store/apps/details?id=com.tado&hl=fr" %}

### Pour Iphone

Scan simplement le QRCode ci-dessous pour accéder directement à l'installation sur ton tél. **Et là aussi** à l'heure ou j'écris ces quelques lignes **l'application est noté 4,5/5 avec plus de 5000 votants,** ce qui est très bien noté.

{% include qrlink.html qrlink="https://apps.apple.com/fr/app/tado/id574418486" text="télécharger l'application Tado° sur l'appstore" realtextlink="https://apps.apple.com/fr/app/tado/id574418486" %}

> Bonne nouvelle l'application est déjà très bien noté

## Comment débuter avec l'application Tado°

Pour [commencer le support Tado° a très bien documenté](https://support.tado.com/fr/){: target="_blank"} l'ensemble de son univers, [notamment comment débuter avec l'application](https://support.tado.com/fr/articles/4190245-comment-debuter-avec-l-application-tado){: target="_blank"} hormis cet article tu trouveras tout ce qu'il faut pour apprendre à commander ton chauffage.

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

{% include product-embed.html image="lot-de-3-robinets-tado-x-thermostatique-matter-thread.png" title="Lot de 3 Robinets thermostatique Tado° X" brand="Tado°" description="Lot de 3x Robinets thermostatique Tado° X, probablement le robinet le plus abouti du marché, compatible matter over thread" amazlink="3X45Fsn" %}

### Première étape

Il faudra créer un compte si ce n'est déjà fait, sinon si tu veux tester l'application avant de passer le cap de l'achat. Tado° a mis à **disposition un compte démo**.

Le compte Demo est une interface qui n'est pas complète car tu n'auras pas accès aux paramétrages des modules seulement à la gestion du frontend (tu n'as pas accès aux modifications de pièeces etc.... ), mais c'st déjà pas mal pour tester l'univers Tado.

{% picture posts/{{ page.guid }}/premiere-connection-application-tado-inscription-mode-demo.png --alt Première utilisation du de l'application Tado accès à une démo, utilisateur existant ou création de compte --img width="940" height="509" %}

Lors de ta première connection, tu n'auras pas comme sur l'image ci-dessous un appareil de connecté. Mais si comme moi tu t'es déjà connecté d'un appareil alors tu retrouveras la liste des appareils enrregistrés il te suffira d'en sélectionner l'un ou l'autre pour reprendre la configuration, ou tou simplement d'en créer un si c'est ton premier appareil.
Ensuite Tado° te demander d'accepter la géolocalisation, comme beaucoup d'applications Tado prendra en compte la présence ou non des personnes dans le logement.

{% picture posts/{{ page.guid }}/premiere-connection-application-tado-enregistrement-donnees-cloud.png --alt Première connection de l'application Tado avec compte utilisateur existant, geolocalisation et enregistrement données cloud --img width="940" height="509" %}

## Ajouter son premier appareil

L'ajout d'appareil dans Tado suit la logique d'intégration Matter, si tu as déjà intégré un appareil Matter auparavant, l'ajout d'un appareil dans Tado° est identique. Si au contraire c'est la première fois que tu intègres un appareil Matter
Alors en étape 1 il faudra scanner le qurcode disponible avec la boite ou derrière le produit. Je te conseil fortement de garder les étiquettes Matter qui sont beaucoup plus facile à Scanner. Mais sâche que si tu n'arrives pas à scanner le QRCode tu pourras aussi utiliser le code disponible en dessous à 11 chiffres: XXXX-XXX-XXXX.

{% picture posts/{{ page.guid }}/ajout-du-premier-appareil-matter-tado.png --alt Ajout du premier appareil Tado compatible Thread Matter dans l'application Tado --img width="940" height="522" %}


