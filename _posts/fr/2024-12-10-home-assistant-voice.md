---
guid: 148
title: "Test Home Assistant Voice Preview Edition"
description: "En avant première nous testons le home assistant voice Preview Edition, premier produit de cette gamme pour Nabu Casa, controle ta maison par la voix en local ! Magique !"
ref: "home assistant voice pe"
layout: post
authors: [Nico]
date: 2024-12-10 11:40
last_modified_at: 
categories: [Test, Haade-lab, Home-Assistant]
tags: []
video: 
image: 'en-avant-premiere-test-home-assistant-voice-produit-nabu-casa.png'
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
  - https://github.com/esphome/home-assistant-voice-pe
  - https://go.nabucasa.com/ha-voice-pe/setup
  - https://www.home-assistant.io/blog/categories/assist/
---

Voilà une **nouvelle forte intéressante pour la communauté opensource domotique.** Nabu casa que l'on ne présente plus a sorti son premier **assistant vocal fonctionnel**, pratique et pour une utilisation **100% local**.

> Fini les assistants vocaux online qui enregistrent toutes nos paroles sur des serveurs externes.

Alors je me pose la question de savoir si ce produit est **fonctionnel et abouti ou si simplement l'année de la voix n'est pas encore totalement opérationnel !**

La plupart d'entre nous qui sont intéressés pas des assistants vocaux en fonctionnement local ont déjà testé avec succès des installations sur PC et souvent elles sont très aboutis, mais quand il s'agit d'installer ça sur un raspberry pi c'est une autre paire de manches.

## Présentation de la Home Assistant Voice

[Notice Home Assistant Voice](https://go.nabucasa.com/ha-voice-pe/setup){: target="_blank"}

{% picture posts/{{ page.guid }}/deballage-home-assistant-voice-control-par-la-voix-nabu-casa.png --alt Home Assistant Voice preview edition controle par la voix fabriqué par Nabu Casa à base de ESP32-S3 --img width="940" height="529" %}


{% include videoPlayer.html localId="installation-et-premiere-mise-en-service-home-assistant-voice.mp4" %}

{% picture posts/{{ page.guid }}/home-assistant-voice-control-par-la-voix-nabu-casa-emballage-face-arriere.png --alt Home Assistant Voice preview edition controle par la voix emballage face arrière --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/home-assistant-voice-control-par-la-voix-nabu-casa-faces-cotes.png --alt Home Assistant Voice preview edition controle par la voix emballage 4 faces côtés connectiques disponibles et fonctions --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/rendu-taille-home-assistant-voice-pe.png --alt Home Assistant Voice preview edition taille et rendu dans la main --img width="940" height="529" %}

## Sous la hotte

{% picture posts/{{ page.guid }}/home-assistant-voice-control-pe-circuit-electronique.png --alt Home Assistant Voice preview edition controle pe ce qui se cache sous la hotte le circuit éléctronique --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/home-assistant-voice-control-pe-circuit-electronique-face-arriere.png --alt Home Assistant Voice preview edition controle pe ce qui se cache sous la hotte le circuit éléctronique face arrière --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/photo-demontage-home-assistant-voice-preview-edition.png --alt Home Assistant Voice preview edition demontage du mécanisme --img width="940" height="529" %}

## 2 façons d'intégrer {{ page.ref }}

### En wifi

### Plus simple en Bluetooth

## Contrôle {{ page.re }} avec esphome

{% include videoPlayer.html localId="controle-fonctions-homeassistant-voice-pe-grace-a-esphome.mp4" %}

controle-fonctions-homeassistant-voice-pe-grace-a-esphome

### 2 façons de configurer l'éclairage LED

**Tu trouveras à l'intérieur du carton:**

- une home assitant voice pe ( heureusement )
- un autocollant ok Nabu
- une notice de garantie
- ainsi qu'un qrcode qui te redirigera vers un document pour une première installation

## À propos de Home Assistant Voice Preview Edition

Home Assistant Voice Preview Edition est le **premier assistant vocal** conçu de A à Z pour fonctionner avec Home Assistant. Avec ses deux microphones et son traitement audio avancé, il peut entendre vos commandes et fournir un retour clair via son haut-parleur et son anneau LED. Il a été conçu pour se fondre dans la décoration intérieure, et ses commandes physiques tactiles permettent à n'importe qui de contrôler l'appareil de manière intuitive. Il a été conçu pour être utilisé avec Home Assistant Assist, l'assistant vocal axé sur la confidentialité qui vous permet de contrôler Home Assistant à l'aide du langage naturel. Il est entièrement configurable, vous permettant de faire ce que vous voulez avec la voix.

**Faisons des assistants vocaux ouverts, locaux et privés une réalité**
Votre voix, votre choix - Nous méritons tous un contrôle vocal qui ne collecte pas nos données ni ne limite les fonctionnalités. Nous faisons rapidement progresser la voix ouverte et privée pour la maison. Notre vision est d'égaler, puis de dépasser, les autres assistants vocaux. Rejoignez-nous pour créer Assist (ou venez simplement nous accompagner) et prévisualisez l'avenir du contrôle vocal à la maison.

**Local ou Cloud**
Si vous disposez d'un matériel puissant, exécutez la voix entièrement en local ou transférez le traitement de la parole vers notre Home Assistant Cloud axé sur la confidentialité pour des performances rapides.

**Entièrement ouvert et axé sur la communauté**
Un logiciel, un micrologiciel et un matériel entièrement ouverts vous permettent de les adapter au mieux à vos besoins. Avec une communauté dédiée de développeurs personnalisant et ajoutant des fonctionnalités.

**Conçu avec une marge de croissance**
Voice Preview Edition offre de nombreuses possibilités d'extension et de modification. Ses spécifications, en particulier sa RAM et son stockage, ont été choisies pour lui donner une marge de manœuvre pour ajouter des fonctionnalités futures. Il comprend un port Grove pour connecter des capteurs et une prise casque 3,5 mm pour connecter des haut-parleurs externes. Il est également facile à ouvrir.

[Calendrier](https://www.home-assistant.io/blog/categories/assist/){: target="_blank"}

## Caractéristiques Techniques {{ page.ref }}

|SoC|ESP32-S3 avec 16 Mo de stockage FLASH<br>8 Mo de PSRAM|
|Traitement audio|XMOS XU316|
|Alimentation|USB-C, 5 V CC, 2 A|
|Radios|Wi-Fi 2,4 GHz<br>Bluetooth 5.0 Low Energy|
|Sortie audio|Prise de sortie stéréo 3,5 mm|
|Microphone et haut-parleur|haut-parleur interne<br>Réseau interne à deux microphones<br>Commutateur de sourdine|
|Conditions fonctionnement|Utilisation en intérieur uniquement<br>0 °C à 30 °C<br>32 °F à 86 °F|
|Humidité|sans condensation, Conserver dans un environnement sec et pas trop poussiéreux, car cela peut endommager l'appareil|
|Dimensions et poids|84 x 84 x 21 mm, 96g<br>avec boîte : 94x94x30 mm, 120g|
|Matériau|Plastique polycarbonate<br>Couleurs : Blanc et semi-transparent|


