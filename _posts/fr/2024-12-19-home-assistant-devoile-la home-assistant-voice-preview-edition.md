---
guid: 148
title: "Home assistant dévoile son nouveau produit la voice preview editon"
description: "En avant première nous testons le home assistant voice Preview Edition, premier produit de cette gamme pour Nabu Casa, controle ta maison par la voix en local okay Nabu une première ! Magique !"
ref: "home assistant voice pe"
layout: post
authors: [Nico]
date: 2024-12-19 22:00
last_modified_at: 
categories: [Test, Home-Assistant, Haade-lab]
tags: []
video: 
image: 'en-avant-premiere-test-home-assistant-voice-produit-nabu-casa.png'
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
- Un cable usbc + alim ( car non fournis )

{% include product-embed.html image="home-assistant-voice-preview-edition.png" title="Home Assistant Voice Preview Edition" brand="Nabu Casa" description="Home Assistant Voice Preview Edition commande ta centrale domotique par la voix" domlink="box-domotique/7558-nabu-casa-home-assistant-voice-preview-edition-0860011789727.html" %}


## Présentation de la Home Assistant Voice

{% include qrlink.html qrlink="https://go.nabucasa.com/ha-voice-pe/setup" text="lire la notice complète de la Home Assistant Voice" realtextlink="Notice d'utilisation Home Assistant Voice" %}

**Home Assistant nous as habitué** ces dernières années à nous fournir des box domotiques ( Green et Yellow ) dans des emballages similaires aux allures écologiques.
Quoi dire au sujet de la {{ page.ref }} **ben à premère vue pas grand chose:**

1. Un emballage
2. Un autocollant
3. Un document de garantie
4. Un Qrcode très important pour accéder à la notice
5. Une **{{ page.ref }}**

{% picture posts/{{ page.guid }}/deballage-home-assistant-voice-control-par-la-voix-nabu-casa.png --alt Home Assistant Voice preview edition controle par la voix fabriqué par Nabu Casa à base de ESP32-S3 --img width="940" height="529" %}

La face arrière du carton {{ page.ref }} te confirme bien qu'il n'y a **pas de cable USB-C et d'alimentations de fournis** un peu étonnant d'ailleurs, mais bon je ferais l'impasse à cette entorse car nous possédons tous de quoi alimenter à la maison en usb-c **à part pour les puristes Apple.**

{% picture posts/{{ page.guid }}/home-assistant-voice-control-par-la-voix-nabu-casa-emballage-face-arriere.png --alt Home Assistant Voice preview edition controle par la voix emballage face arrière --img width="940" height="529" %}

Faisons désormais **le tour** de la {{ page.ref }}

Commençons par la face du dessous on trouvera l'étiquette produit, mais si tu regardes bien à côté se trouve une encoche qui cache dessous une connectique i2C tu pourras y brancher toutes sortes de micro-modules i2c et agrémenter la {{ page.ref }}

**Continuons par les côtés on trouvera:**
- une entrée alim USBC avec une sortie micro au format mini jack 3.5mm
- un interrupteur physique pour **couper le micro/haut parleur** de la home assistant voice
- une face pour le haut parleur
- Sur le dessus Un bouton central à **4 fonctions**(1 appui pour passer ton ordre, 2 appuis, 3 appuis et appui long tu pourras assigner des ordres)
- autour du bouton se trouve **un slide rotatif** tu pourras ( augmenter le volume, changer la couleur des Leds )

{% picture posts/{{ page.guid }}/home-assistant-voice-control-par-la-voix-nabu-casa-faces-cotes.png --alt Home Assistant Voice preview edition controle par la voix emballage 4 faces côtés connectiques disponibles et fonctions --img width="940" height="529" %}

Une petite capture pour te rendre compte de la taille de la {{ page.ref }}

{% picture posts/{{ page.guid }}/rendu-taille-home-assistant-voice-pe.png --alt Home Assistant Voice preview edition taille et rendu dans la main --img width="940" height="529" %}

## Sous la hotte

**Intéressons nous à ce qui se cache sous le boitier**.
Première chose à souligner, on peut voir que tout est relativement bien pensé, les visses se démontent facilement. Le bouton central est inclus au circuit imprimé, bref sous le capot tu ne trouveras que deux pièces indépendantes, **le circuit et le haut parleur rien de plus.**

{% picture posts/{{ page.guid }}/home-assistant-voice-control-pe-circuit-electronique.png --alt Home Assistant Voice preview edition controle pe ce qui se cache sous la hotte le circuit éléctronique --img width="940" height="529" %}

Passons aux diverse connectiques **se trouvant sous le circuit:**

1. Une connectique i2c
2. la fameuse puce esp32-s3 ( pas étonnant tous les autres test réalisés par mike étaient avec cette puce )
3. 1er port GPIO avec tx et rx pour le transfert
4. 2nd port gpio
5. Puce Xmos pour le son

{% picture posts/{{ page.guid }}/home-assistant-voice-control-pe-circuit-electronique-face-arriere.png --alt Home Assistant Voice preview edition controle pe ce qui se cache sous la hotte le circuit éléctronique face arrière --img width="940" height="529" %}

> Pour finir je te met quelques photos du produit dans son ensemble.

{% picture posts/{{ page.guid }}/photo-demontage-home-assistant-voice-preview-edition.png --alt Home Assistant Voice preview edition demontage du mécanisme --img width="940" height="529" %}

## Caractéristiques Techniques {{ page.ref }}

|SoC|ESP32-S3 avec 16 Mo de stockage FLASH<br>8 Mo de PSRAM|
|Traitement audio|XMOS XU316|
|Alimentation|USB-C, 5 V CC, 2 A|
|Radios|**Wi-Fi 2,4 GHz**<br>Bluetooth 5.0 Low Energy|
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

## Passons aux choses sérieuses

### Connectons {{ page.ref }} à Home Assistant

**Avant toute chose il faudra installer la suite Esphome, rien de bien compliqué !**

**Rappel:** pour faire fonctionner {{ page.ref }} il faudra installer la bibliothèque esphome. rends toi dans l'addon-store en cliquant sur le lien ci-dessous:

[![Ouvrez votre instance Home Assistant et affichez la boutique de modules complémentaires.](https://my.home-assistant.io/badges/supervisor_store.svg)](https://my.home-assistant.io/redirect/supervisor_store/)

Sélectionne et installe **ESPHome Device Compiler**

{{ page.ref }} est **d'une simplicité d'utilisation** grâce à une superbe intégration réalisé par Mike Hanssen dans esphome. J'ai fait une rétrospective vidéo des fonctions disponibles dans esphome.

Les fonctions du {{ page.ref }} sont les suivantes:
- possibilité de mettre à jour le firmware et le mot de réveil
- augmenter le volume du {{ page.ref }} reconnu **comme media**
- visu sur le sensor du bouton pressé ( dispo en 1, 2, 3 et long clic) top pour de futures automatisation

Il existe 2 façons d'installer rapidement {{ page.ref }} et de le connecter à home assistant

> Si ta box intègre une puce Bluetooth alors je te conseil cette installation

#### En wifi

C'est une fonction classique d'intégration que l'on retrouve souvent sur les inclusions de modules wifi, mais ce n'est pas la plus simple, si ta box est equipé du bluetooth **je te conseil l'inclusion en Bluetooth** qui est beaucoup plus simple et rapide.

Pour suivre la configuration je te passe les détails et home assistant **a réalisé une vidéo d'intégration**

{% include videoPlayer.html localId="installation-et-premiere-mise-en-service-home-assistant-voice.mp4" %}

> Je n'ai pas rencontré de réels soucis c'est un peu plus tatillon que l'intégration Bluetooth

#### Plus simple en Bluetooth

En Bluetooth **c'est ultra simple** il te suffit d'aller dans **Paramètres > Appareils et services** ongle découverte et suis le gif animé ci-dessous. Rien de plus simple tu rentres tes coordonnées wifi et le tour est joué. **Attention** compatible uniquement réseau 2,4Ghz

![Intégration home assistant voice en bluetooth]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametrage-home-assistant-voice-pe-avec-bluetooth-simple-comme-bonjour.webp{{ cachebuster }}){: width="940" height="442" class="lazyload pictaninpost"}

Dernière étape ajoute le **module découvert Esphome**, change le wakeword disponible **( Okay Nabu, hey Jarvis ou Hey Mycroft )** et ajoute une pièce si tu le désires et le tour est joué.

> Pour la **langue française** Okay Nabu est selon moi le plus adapté et fonctionne très bien.

### Une fois installé voilà ce qui remonte

{% include videoPlayer.html localId="controle-fonctions-homeassistant-voice-pe-grace-a-esphome.mp4" %}

**Toute une fulltitude d'options:**

1. changer le setup et faire la mise à jour OTA est transparente
2. augmenter le volume audio reconnu comme media
3. état de l'assistant (écoute, off, etc)
4. sélection de l'assistant vocal
5. mode d'écoute ( pour le français choisi **détendu** ça fonctionne bien )
6. Activer les led ( changer la couleur et l'intensité )
7. modifier le mot d'activation ( pour l'instant disponible Okay Nabu, Hey Jarvis ou Hey Mycroft )
8. activer/désactiver le micro
9. activer/désactiver le son

#### 2 façons de

**configurer l'éclairage LED**

Comme dit plus haut tu peux configurer la led directement dans esphome mais aussi physiquement ci-dessous le gif animé

![Change directement la couleur des led sur home assistant voice]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/change-color-with-push-button.webp{{ cachebuster }}){: width="800" height="451" class="lazyload pictaninpost"}

**Couper le micro**

Soit avec le bouton physique situé sur le côté soit par l'interface esphome

![Coupe le micro directement]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}//muting-device.webp{{ cachebuster }}){: width="800" height="450" class="lazyload pictaninpost"}

### Prépare l'environnement Assistant vocal Home Assistant OS

J'ai préféré te détailler ce processus avant l'intégration de {{ page.ref }} car je trouve ça plus pertinent.

il faudra installer et paramétrer ton système, commence par installer:

### 1 un service wyoming stt (de la parole au texte) 

> **Vosk** ou **Rhassy-speech** pour la sentence **vocale Française!**

Home assistant te conseil [faster-whisper](https://www.home-assistant.io/integrations/wyoming/){: target="_blank"} **très bon en anglais** mais pour l'instant **très mauvais en français**, ce n'est pas grave Mike avait développé l'utilitaire **[vosk](https://github.com/rhasspy/hassio-addons/tree/master/vosk){: target="_blank"}** qui fonctionne plutôt bien pour notre langue française et développe actuellement le module wyoming **Rhasspy-speech**.

Depuis peu Mike développe [rhasspy-speech](https://github.com/rhasspy/rhasspy-speech){: target="_blank"} qui est un autre **stt** en voix de développement, il te propose en plus de modifier les sentences et te permettra d'affiner ton système mais **il faut dire que la sentence française est déjà très complète.**

> **Vosk** n'a pas été mis à jour depuis plus de 5 mois

**Ajoute le dépot [Github Rhasspy](https://github.com/rhasspy/hassio-addons){: target="_blank"} pour HAOS et tu auras accès à Vosk ou Rhasspy-speech**

[![Ouvrez votre instance Home Assistant et affichez la boîte de dialogue d'ajout de référentiel Rhasspy](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Frhasspy%2Fhassio-addons)

Actualise la page F5, recherche **vosk ou rhasspy-speech** et installe le, ensuite dans la configuration de vosk sélectionne la langue fr et démarre le module.

> Perso j'utilise **rhasspy-speech** qui devrait être l'avenir pour home-assistant voice.

### 2 Passons à l'installation du TTS (du texte à la parole) 

pour ça tu peux utiliser le [module Piper](https://www.home-assistant.io/integrations/wyoming/){: target="_blank"} qui fera l'affaire. Rends-toi à nouveau dans la boutique des applications:

[![Ouvrez votre instance Home Assistant et affichez la boutique de modules complémentaires.](https://my.home-assistant.io/badges/supervisor_store.svg)](https://my.home-assistant.io/redirect/supervisor_store/)

et recherche le **module Piper**, installe le, dans la configuration Piper sélectionne une voix perso j'ai choisi fr_FR-siwis-medium, c'est une voix féminine

PS: [Rhasppy propose un utilitaire](https://rhasspy.github.io/piper-samples/){: target="_blank"} permettant de tester le voix **( upmc jessica en medium est top ) mais pour l'instant inutilisable dans home assistant car elle parle en accéléré.**

### Ajout des instances

**Voilà les modules sont installés, il faut maintenant les ajouter à home assistant**

**Pour info:** *Faster-whisper* s'installe de la même façon que les deux autres. Rends-toi dans la boutique des modules recherche **whispe**r, ensuite installe, puis configure la langue et démarre l'ensemble.

**Rends toi** dans **Paramètre > Appareil et service** et **ajoute les protocoles Wyoming**

{% picture posts/{{ page.guid }}/ajout-environnement-whisper-assistant.png --alt Ajouter Whisper dans les appareils home assistant --img width="940" height="529" %}

### Dernière étape: Paramétrage de l'assistant vocal

Par défaut il existe un assistant vocal nommé Home Assistant et paramétré en Anglais, je décide de le réutiliser et de le paramétrer en français.

Rends toi dans **Paramètres > Assistants Vocaux > Ajouter un assistant**

1. Met la configuration et l'agent de conversation en français
2. sélectionne ton stt et paramètre en français
3. sélection le tts en français
4. choisi la voix **( tom ou siwis )** au format medium

{% picture posts/{{ page.guid }}/creation-et-parametrage-assistant-vocal.png --alt Création et paramétrage d'un assistant vocal Home Assistant --img width="940" height="529" %}

## Paramétrage optimal pour la langue française du {{ page.ref }}

Voici mes paramétrages pour la langue française

- **Wakeword:** Okay Nabu ( le plus abouti à la demande des développeurs )
- **stt:** rhasspy-speach
- **tts:** piper avec son **siwis-medium**
- dans **esphome**: détection de fin de parole sur **détendu**

## Message de Nabu Casa

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


{% include qrlink.html qrlink="https://go.nabucasa.com/ha-voice-pe/setup" text="lire la notice complète de la Home Assistant Voice" realtextlink="Notice d'utilisation Home Assistant Voice" %}

{% include product-embed.html image="home-assistant-voice-preview-edition.png" title="Home Assistant Voice Preview Edition" brand="Nabu Casa" description="Home Assistant Voice Preview Edition commande ta centrale domotique par la voix" domlink="box-domotique/7558-nabu-casa-home-assistant-voice-preview-edition-0860011789727.html" %}

## {{ page.ref }} Factory reset

Si tu veux tout **réinitialiser** n'hésite pas à faire un redémarrage d'usine, pour se faire reste appuyé **20 secondes sur le bouton central**

![Home assistant voice factory reset]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/factory-reset.webp{{ cachebuster }}){: width="456" height="256" class="lazyload pictaninpost"}

## Réactivité du système

Si tu veux des commandes instantanées et une rapidité d'action ta box domotique doit être assez costaud ci dessous des temps de réactivité entre la demande et la réponse final:

- **Nuc 300:** 1 seconde
- **Home assistant yellow 8gb ram:** 1 seconde
- **Home assistant Green:** 5 secondes
- **Raspberry pi 4 GB:** 4 secondes
- **Raspberry pi 5 4GB:** 2 secondes

Suivant ton système le délai de latence est plus ou moins long, j'estime qu'au dessus de 2 secondes le confort n'est plus le même. Ça ne veut pas dire de ne pas en acheter si tu possède une box manquant de peps pour une assistance vocal, **car je pense que dans le futur les mécanismes stt et tts seront de plus ne plus léger.**

## Conclusion

Voilà un **super produit** pour contrôler ta domotique par la voix et le tout en local ( pas découte externe ), c'est un produit super bien fini aux fonctions très bien pensé. **L'ensemble de l'assistance vocal n'est pas encore optimum**, mais je suis persuadé que la {{ page.ref }} te comblera pleinement. **Bref c'est l'assistant vocal à avoir.**