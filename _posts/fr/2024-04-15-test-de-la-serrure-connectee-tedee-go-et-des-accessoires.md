---
guid: 120
title: "Test de la serrure connectée Tedee Go + accessoires"
description: "Test complet et integration dans home-assistant de la serrure Tedee Go avec le bridge wifi le clavier à code et le module relais Blebox"
ref: "Tedee Go"
layout: post
authors: [Nico]
date: 2024-04-15 20:22
last_modified_at: 
categories: [Tests, Securite, Wifi]
tags: []
youtubevideo: 'yDM6gbcIBWk?si=-DE5oE-TEnbXWdoe'
image: 'test-serrure-connectee-tedee-go-plus-bridge-clavier-code-relais-blebox.png'
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
  - https://www.youtube.com/@tedee5282/videos
  - https://tedee.com/fr/product-info/tedee-go/
  - https://www.home-assistant.io/integrations/tedee/
---

Une première pour Haade, je vais te présenter une serrure connectée fabriqué dans les pays de l'est, **la Tedee Go** avec le bridge qui va bien le clavier à code et le module relais blebox. Pour la petite histoire j'ai demandée à Tedee de me fournir la version Pro qui à l'air plus alléchante, **mais elle ne va plus être proposée à la vente pour le grand public d'ici peu**. 

> Je trouve ça dommage car elle dispose d'une batterie rechargeable qui possède une autonomie plus importante !

{% picture posts/{{ page.guid }}/test-de-la-gamme-tedee-go-bridge-relais-et-clavier-a-code.png --alt test de l'ensemble de la gamme tedee --img width="940" height="529" %}

## Dimension

{% picture posts/{{ page.guid }}/comparatif-dimension-serrure-connecte-du-marche.png --alt comparatif dimension de la serrure tedee go face à la concurrence --img width="940" height="267" %}


## Déballage

On ne va pas s'étaler sur le sujet car tu trouveras facilement toutes les infos sur le net, Le module tedee go est bien emballé et tu trouveras:
- une serrure connectée avec les piles
- un support pour cylindre ne dépassant pas 3mm à la sortie
- une lingette nettoyante
- une clé allen
- la notice
- le guide en carton avec QRcode

{% picture posts/{{ page.guid }}/contenu-boite-tedee-go.png --alt contenu de la boite de la serrure connectée Tedee Go --img width="940" height="529" %}

## Caractéristique

La Poignée de protection du système est teintée d'un gris aluminium, mais je suis un peu déçu car ça n'en est pas, c'est bel est bien du plastique ABS, probablement un choix pris à cause du poids de l'ensemble.

{% picture posts/{{ page.guid }}/qualite-coque-plastique-tedee-go.png --alt qualité de la coque tedee Go en ABS pas ce qu'il y a de mieux --img width="940" height="529" %}

## Le bruit

### Tedee Go

#### Les avantage de la {{ page.ref }}

1. **Conservez votre matériel actuel:** Vous installerez votre Tedee GO en quelques minutes, sur votre cylindre actuel, sans avoir à remplacer la quincaillerie. Vous n’avez même pas besoin de demander la permission à votre propriétaire.
2. **Conservez vos clés:** Tedee GO est un tourne-clés, vous n’avez donc pas à remplacer vos clés – votre serrure connectée n’en a qu’une, à l’intérieur de votre domicile. De l’extérieur, vous pouvez toujours déverrouiller la porte avec une clé.
3. **Clés virtuelles:** Partagez l’accès à votre maison avec votre famille et vos amis. Facilitez les accès avec des clés virtuelles dans l’application Tedee, en contrôlant qui entre et quand
4. **Votre portier personel:** Détendez-vous avec nos fonctionnalités simples – réglez votre Tedee GO pour qu’elle se verrouille automatiquement lorsque vous quittez ou rentrez chez vous. Appréciez le plaisir de rentrer chez vous et de découvrir une porte ouverte.

{% picture posts/{{ page.guid }}/rendu-face-avant-arriere-alu-tedee-go.png --alt rendu et qualité de la serrure connectée Tedee Go --img width="940" height="529" %}

|Modèle|TLV2.0|
|Poids|196 g|
|Dimensions|Ø 58mm x 65mm|
|Température de fonctionnement|10-40°C (uniquement en intérieur)|
|Humidité de fonctionnement|max. 65%|
|Pays de production|Pologne, UE|
|Alimentation électrique|3x CR123/CR123A pile|
|Autonomie de la batterie|Jusqu'à 6-8 mois pour 8 fonctionnements par jour|
|Sécurité|TLS 1.3|
|Peut être couplé avec|Bridge Tedee, Clavier Tedee|
|Peut être installé sur|cylindres à profil européen, équipés d'un double embrayage (d'urgence)|

### Tedee Bridge

Le routeur sans fil Tedee Bridge vous permet de contrôler votre serrure connectée Tedee via Internet, où que vous soyez.

Faites l’expérience d’un confort et d’une sécurité de pointe, et entrez dans la nouvelle ère de l’accès à la maison. Tedee Bridge ne se contente pas d’améliorer votre confort avec des avantages supplémentaires, il transforme également la façon dont vous gérez la sécurité de votre propriété, même lorsque vous êtes loin de chez vous.

### Tedee Clavier code d'accès
### Tedee Module relais

## Notices

{% include doclink.html pdf="manuel-installation-utilisation-tedee-go-FR.pdf" title="Notice d'installation et manuel d'utilisation du Tedee Go" %}

{% include doclink.html pdf="installation-utilisation-manuel-bridge-tedee-FR.pdf" title="Notice d'installation et manuel d'utilisation du Tedee Bridge" %}

{% include doclink.html pdf="installation-utilisation-code-acces-tedee-FR.pdf" title="Notice d'installation et manuel d'utilisation du Tedee clavier à code d'accès" %}


## Application Tedee

Google playstore: [Tedee](https://play.google.com/store/apps/details?id=tedee.mobile&hl=fr&gl=US)

Apple AppStore: [Tedee](https://apps.apple.com/fr/app/tedee/id1481874162)

Je suis pas fan de domotiser son habitation à travers de multiples applications, mais plutôt pour le tout en un c'est d'ailleurs pour ça que des systèmes comme Jeedom ou Home-assistant existent, heureusement il y a des solutions mais elles ne sont pas aussi complètes que l'application

## Compatibilité

### API Tedee

Une API en [perpetuelle évolution disponible ici](https://api.tedee.com/swagger/index.html#/)

La [marque affiche une compatibilité](https://tedee.com/fr/integrations-domotique/?utm_term=&utm_source=adwords&utm_campaign=Reklamy+produktowe+(Francja)&utm_medium=ppc&hsa_acc=3229275490&hsa_cam=17745495747&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccPTO6PYLs8TsvjS_pwlJDUcOecnh8vRsJgiHe4mjfkhCQ_X4k1uJaBoCnccQAvD_BwE#technology-section-1){: target="_blank"} avec Google Home, Amazon Alexa, Apple HomeKit ou Homey mais aussi Fibaro, eedomus, Loxone, neuronhouse, Jeedom, Ampio et **Home-Assistant**

> Il vous faudra dans tous ces cas le Tedee Bridge


### avec bridge
- home-assistant
- jeedom (plugin 4€)

## Installation

{% include videoPlayer.html externalId="https://tedee.com/app/uploads/2023/06/Tedee-GO-Installation-guide-with-and-without-adapter-1-3.mp4?_=1" %}

## Integration Home Assistant

Et oui le tedee est compatible avec home assistant mais pour se faire il te faudra idéalement le bridge mais pas obligatoire, tu pourrais utiliser directement la {{ page.ref }} avec HApar le biais de homekit en utilisant le bluetooth mais tu n'auras pas accès à toute les fonctions.

### avec le bridge

### avec Homekit