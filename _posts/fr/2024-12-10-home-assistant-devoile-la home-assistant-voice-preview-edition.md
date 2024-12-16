---
guid: 148
title: "Home assistant dévoile son nouveau produit la voice preview editon"
description: "En avant première nous testons le home assistant voice Preview Edition, premier produit de cette gamme pour Nabu Casa, controle ta maison par la voix en local okay Nabu une première ! Magique !"
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

## Prérequis

- une box fonctionnant sous home assistant ( toute versions )
- Esphome d'installé
- environement Wyoming d'installé 

## Présentation de la Home Assistant Voice

[Notice Home Assistant Voice](https://go.nabucasa.com/ha-voice-pe/setup){: target="_blank"}

{% picture posts/{{ page.guid }}/deballage-home-assistant-voice-control-par-la-voix-nabu-casa.png --alt Home Assistant Voice preview edition controle par la voix fabriqué par Nabu Casa à base de ESP32-S3 --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/home-assistant-voice-control-par-la-voix-nabu-casa-emballage-face-arriere.png --alt Home Assistant Voice preview edition controle par la voix emballage face arrière --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/home-assistant-voice-control-par-la-voix-nabu-casa-faces-cotes.png --alt Home Assistant Voice preview edition controle par la voix emballage 4 faces côtés connectiques disponibles et fonctions --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/rendu-taille-home-assistant-voice-pe.png --alt Home Assistant Voice preview edition taille et rendu dans la main --img width="940" height="529" %}

## Sous la hotte

{% picture posts/{{ page.guid }}/home-assistant-voice-control-pe-circuit-electronique.png --alt Home Assistant Voice preview edition controle pe ce qui se cache sous la hotte le circuit éléctronique --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/home-assistant-voice-control-pe-circuit-electronique-face-arriere.png --alt Home Assistant Voice preview edition controle pe ce qui se cache sous la hotte le circuit éléctronique face arrière --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/photo-demontage-home-assistant-voice-preview-edition.png --alt Home Assistant Voice preview edition demontage du mécanisme --img width="940" height="529" %}

## Prépare l'environnement Assistant vocal Home Assistant OS

J'ai préféré te détailler ce processus avant l'intégration de {{ page.ref }} car je trouve ça plus pertinent.

il faudra installer et paramétrer ton système, commence par installer:

**#1** un service wyoming stt (de la parole au texte) 
Home assistant te conseil faster-whisper très bon en anglais mais pour l'instant très mauvais en français, ce n'est pas grave Mike avait développé l'utilitaire vosk qui fonctionne plutôt bien pour notre langue.

Ajout le dépot Rhasspy:

[![Ouvrez votre instance Home Assistant et affichez la boîte de dialogue d'ajout de référentiel Rhasspy](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Frhasspy%2Fhassio-addons)

Actualise la page F5, recherche vosk et installe le, ensuite dans la configuration de vosk sélectionne la langue fr et démarre le module.

**#2** Passons à l'installation du TTS (du texte à la parole) pour ça tu peux utiliser le module Piper qui fera l'affaire. Rends toi à nouveau dans la boutique des applications:

[![Ouvrez votre instance Home Assistant et affichez la boutique de modules complémentaires.](https://my.home-assistant.io/badges/supervisor_store.svg)](https://my.home-assistant.io/redirect/supervisor_store/)

et recherche le module Piper, installe le, dans la configuration Piper sélectionne une voix perso j'ai choisi fr_FR-siwis-medium, c'est une voix féminine

PS: [Rhasppy propose un utilitaire](https://rhasspy.github.io/piper-samples/){: target="_blank"} permettant de tester le voix **( upmc jessica en medium est top ) mais pour l'instant inutilisable dans home assistant car elle parle en accéléré.**

Voilà les modules sont installés, il faut maintenant les ajoutés à tes appareils

**Pour info:** *Faster-whisper* s'installe de la même façon que les deux autres. Rends toi dans la boutique des modules recherche whisper, ensuite installe, puis configure la langue et démarre l'ensemble.

Dernière étape il

{% picture posts/{{ page.guid }}/ajout-environnement-whisper-assistant.png --alt Ajouter Whisper dans les appareils home assistant --img width="940" height="529" %}

Paramétrage de l'assistant vocal

{% picture posts/{{ page.guid }}/creation-et-parametrage-assistant-vocal.png --alt Création et paramétrage d'un assistant vocal Home Assistant --img width="940" height="529" %}




## 2 façons d'intégrer {{ page.ref }}

### En wifi

C'est une fonction classique d'intégration que l'on retrouve souvent sur les inclusions de modules wifi, mais ce n'est pas la plus simple, si ta box est equipé du bluetooth je te conseille l'inclusion en Bluetooth qui est beaucoup plus simple et rapide.

Pour suivre la configuration je te passe les détails et home assistant **a réalisé une vidéo d'intégration**

{% include videoPlayer.html localId="installation-et-premiere-mise-en-service-home-assistant-voice.mp4" %}

> Je n'ai pas rencontré de réels soucis c'est un peu plus tatillon que l'intégration Bluetooth

### Plus simple en Bluetooth

En Bluetooth c'est ultra simple il te suffit d'aller dans **Paramètres > Appareils et services** ongle découverte et suis le gif animé ci-dessous. Rien de plus simple tu rentres tes coordonnées wifi et le tour est joué. **Attention** compatible uniquement réseau 2,4Ghz

![Intégration home assistant voice en bluetooth]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametrage-home-assistant-voice-pe-avec-bluetooth-simple-comme-bonjour.webp{{ cachebuster }}){: width="940" height="442" class="lazyload pictaninpost"}

Dernière étape ajoute le **module découvert Esphome**, change le wakeword disponible ( Okay Nabu, hey Jarvis ou Hey Mycroft ) et ajoute une pièce si tu le désires et le tour est joué.

> Pour la **langue française** Okay Nabu est selon moi le plus adapté et fonctionne très bien.

## Contrôle {{ page.re }} avec esphome

### Installation Esphome Obligatoire

Rappel: pour faire fonctionner {{ page.ref }} il faudra installer la bibliothèque esphome. rends toi dans l'addon-store en cliquant sur le lien ci-dessous:

[![Ouvrez votre instance Home Assistant et affichez la boutique de modules complémentaires.](https://my.home-assistant.io/badges/supervisor_store.svg)](https://my.home-assistant.io/redirect/supervisor_store/)

Sélectionne et installe **ESPHome Device Compiler**

{{ page.ref }} est d'une simplicité d'utilisation grâce à une superbe intégration réalisé par Mike Hanssen dans esphome. J'ai fait une rétrospective vidéo des fonctions disponibles dans esphome.

{% include videoPlayer.html localId="controle-fonctions-homeassistant-voice-pe-grace-a-esphome.mp4" %}

Les fonctions du {{ page.ref }} sont les suivantes:
- possibilité de mettre à jour le firmware et le mot de réveil
- augmenter le volume du {{ page.ref }} reconnu **comme media**
- visu sur le sensor du bouton pressé ( dispo en 1, 2, 3 et long clic) top pour de futures automatisation
- 

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

## Paramétrage optimal pour la langue française du {{ page.ref }}



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

{% picture posts/{{ page.guid }}/nomenclature-home-assistant-voice.png --alt Nomenclature Home Assistant Voice --img width="940" height="529" %}

1. **Bouton central:** Réinitialiser, arrêter, converser sans mot de réveil
2. **Module rotatif:** Modifier le volume ou la couleur de la LED
3. **Interrupteur:** coupure du son matériel
4. Anneau LED
5. **Le port USB-C:** Pour les données et l'alimentation
6. **Minijack** pour haut-parleur externe
7. Prise de sortie stéréo 3,5 mm mini-jack
8. Haut-parleur
9. 2 microphones


