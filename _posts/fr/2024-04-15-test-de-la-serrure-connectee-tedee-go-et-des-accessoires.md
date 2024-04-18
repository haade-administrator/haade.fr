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
video:
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

**Merci à l'entreprise Tedee** pour m'avoir fourni une bonne partie de la gamme afin de pouvoir effectuer les test dans de bonnes conditions

{% picture posts/{{ page.guid }}/test-de-la-gamme-tedee-go-bridge-relais-et-clavier-a-code.png --alt test de l'ensemble de la gamme tedee --img width="940" height="529" %}

## La serrure {{ page.ref }}

### Déballage

On ne va pas s'étaler sur le sujet car tu trouveras facilement toutes les infos sur le net, Le module tedee go est bien emballé et tu trouveras:
- une serrure connectée avec les piles
- un support pour cylindre ne dépassant pas 3mm à la sortie
- une lingette nettoyante
- une clé allen
- la notice
- le guide en carton avec QRcode

{% picture posts/{{ page.guid }}/contenu-boite-tedee-go.png --alt contenu de la boite de la serrure connectée Tedee Go --img width="940" height="529" %}

### Dimensions et Caractéristiques

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

**Face à la concurrence**

Niveau dimension ( de face ) je tiens à le préciser, Tedee Go est très petite, si tu es prêt à mettre la main au portefeuille la Tedee Pro est encore plus petite. Gros point positif pour la marque cependant la profondeur est assez importante ce qui offre tout de même une bonne prise en main.

{% picture posts/{{ page.guid }}/comparatif-dimension-serrure-connecte-du-marche.png --alt comparatif dimension de la serrure tedee go face à la concurrence --img width="940" height="267" %}

### Installation et Avantage

Bon yu trouveras toutes les infos sur le web et sur la futur vidéo qui verra le jour prochainement.

> Elle s'installe rapidement et sans effort je te le garantie 👍

{% include videoPlayer.html externalId="https://tedee.com/app/uploads/2023/06/Tedee-GO-Installation-guide-with-and-without-adapter-1-3.mp4?_=1" %}

1. **Conserve ton matériel actuel:** Tu intalleras la Tedee GO en quelques minutes, sur le cylindre actuel, **sans avoir à remplacer la quincaillerie, et le tout sans faire un seul trou.**
2. **Conserve les clés:** Tedee GO est un tourne-clés, **tu n'as pas à remplacer la clé ni à la sciller**, la serrure Tedee GO vient s'emboiter sur la clé. Tu pourras bienentendu ouvrir de l'extérieur avec ta clé traditionnelle.
3. **Clés virtuelles:** Partage l’accès à la maison avec Famille, amis ou locataires. Facilite les accès avec des clés virtuelles dans l’application Tedee, en contrôlant qui entre, quand, combien de temps et à quelle heure.
4. **Votre portier personel:** Détend toi avec des fonctionnalités simples – régle le Tedee GO pour qu’elle se verrouille automatiquement lorsque tu pars ou rentre chez toi.

### les options de la clé
1. verrouiller automatiquement la porte lorsque la serrure est déverouillée
2. verrouiller automatiquement la porte lorsque la serrure est semi verouillée
3. déverouillage automatique lorsque tu es à proximité de la porte ( bluetooth )

### Qualité de la {{ page.ref }}

La Poignée de protection du système est teintée d'un gris aluminium, **mais je suis un peu déçu** car ça n'en est pas, **c'est bel est bien du plastique** ABS, probablement un choix pris à cause du poids de l'ensemble.

{% picture posts/{{ page.guid }}/qualite-coque-plastique-tedee-go.png --alt qualité de la coque tedee Go en ABS pas ce qu'il y a de mieux --img width="940" height="529" %}

### Le bruit dans tout ça 💩

Alors j'ai un peu regardé sur le web il y a des vidéos ou tu peux entendre cette serrure en fonctionnement, mais personne n'en parle vraiment, pourtant cette serrure est bruyante.

> Si comme moi t'as des ados à la maison, la serrure va déclencher en toi de l'eczema ...

La vidéo a été prise à environ 60cm de la serrure avec le smartphone, les décibels montent à 70, **chauffe marcel ...**

{% include videoPlayer.html youtubeId="8JQ87AqHA74?si=jta7TXpiGcscEfBU" %}

### La conso des piles

Le module fonctionne avec 3 piles cr123, ce sont des piles lithium qui sont relativement onéreuses. Tu les trouves sur internet entre 2 et 4€ selon la qualité/marque. 
Je suis à 3 jours de fonctionnement, l'autonomie chute de 1% par jour avec les piles d'origines, il me reste 97% 
Le fabriquant donne une durée de vie de 6 à 8 mois pour une moyenne de 8 fonctionnements par jour sois 4 ouvertures/fermetures.
Mis à part le premier jour je suis en dessous de 8 à raison de 1% par jour, nous serions à 100 jours d'autonomies soit 3 mois et une semaine.

> Si tu fais de la location saisonnière tu as intérêt à les changer fin Mai pour espérer qu'elles tiennent jusqu'à Septembre !

**Les + du produit:**{: .blue}
- L'application ( difficile de faire mieux )
- la connectivité Bluetooth
- la qualité de fabrication

**Les - du produit:**{: .red}
- Module sur pile 3 x CR123
- energivore
- poignée en plastique
- très bruyant
- Bridge obligatoire pour la connecter à ta domotique

## Tedee Clavier code d'accès

{% picture posts/{{ page.guid }}/deballage-digicode-pour-serrure-connectee-tedee-go.png --alt contenu de la boite du digicode Tedee Go --img width="940" height="529" %}

## L'application Tedee

**L'application Tedee est très bien faite**, l'intégration des produits de la marque ne prend que quelques secondes et le paramétrage est simplifié. tout se passe par QRCode et une connection Bluetooth à part la bridge ou un paramétrage wifi est nécessaire ( compatible 2,4 et 5Ghz ), là aussi je n'ai rencontré aucun soucis. À peine ton module reconnu que l'application de propose déjà une mise à jour qui ne prend que quelques secondes et le tout transféré par bluetooth.

> franchement j'ai rarement vu une application aussi optimisée et simple d'utilisation

### Tedee Bridge

Le routeur sans fil Tedee Bridge vous permet de contrôler votre serrure connectée Tedee via Internet, où que vous soyez.

{% picture posts/{{ page.guid }}/deballage-module-bridge-pour-serrure-connectee-tedee.png --alt Présentation et déballage du bridge pour ouvrir l'accès vers l'extérieur au tedee go --img width="940" height="529" %}

Faites l’expérience d’un confort et d’une sécurité de pointe, et entrez dans la nouvelle ère de l’accès à la maison. Tedee Bridge ne se contente pas d’améliorer votre confort avec des avantages supplémentaires, il transforme également la façon dont vous gérez la sécurité de votre propriété, même lorsque vous êtes loin de chez vous.


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

{% picture posts/{{ page.guid }}/parametres-bridge-app-tedee-go-et-acces-api.png --alt Accès à l'api sur l'appli pour paramétrer Tedee Go et les logiciels sources externes comme home assistant --img width="940" height="509" %}

La [marque affiche une compatibilité](https://tedee.com/fr/integrations-domotique/?utm_term=&utm_source=adwords&utm_campaign=Reklamy+produktowe+(Francja)&utm_medium=ppc&hsa_acc=3229275490&hsa_cam=17745495747&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccPTO6PYLs8TsvjS_pwlJDUcOecnh8vRsJgiHe4mjfkhCQ_X4k1uJaBoCnccQAvD_BwE#technology-section-1){: target="_blank"} avec Google Home, Amazon Alexa, Apple HomeKit ou Homey mais aussi Fibaro, eedomus, Loxone, neuronhouse, Jeedom, Ampio et **Home-Assistant**

> Il vous faudra dans tous ces cas le Tedee Bridge


### avec bridge
- home-assistant
- jeedom (plugin 4€)

## Integration Home Assistant

Et oui le tedee est compatible avec home assistant mais pour se faire il te faudra idéalement le bridge mais pas obligatoire, tu pourrais utiliser directement la {{ page.ref }} avec HApar le biais de homekit en utilisant le bluetooth mais tu n'auras pas accès à toute les fonctions.

### avec le bridge

### avec Homekit

## Partage d'accès invité

L'application est bien faite pour généraer un accès avec divers paramétrages ainsi que l'envoi de mails automatiques, mais je suis déçu car la personne doit télécharger l'appli pour pouvoir utiliser cet accès, un lien sous formes de boutons à cliquer aurait été plus simple car si tu fais de la location saisonnière le client sera peut être réticent à installer ce type d'applis.

{% picture posts/{{ page.guid }}/exemple-mail-invitation-serrure-connectee-tedee-go.png --alt mail de partage d'accès à la serrure Tedee Go --img width="940" height="529" %}

