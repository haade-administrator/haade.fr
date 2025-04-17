---
guid: 161
title: "Test du portier Hikvision DS-KV8x13"
description: "Test et intégration du portier Hikvision DS-KV8X13 et intégration complète dans Jome Assistant"
ref: "DS-KV8X13"
layout: post
authors: [Nico]
date: 2025-04-13 18:47
last_modified_at: 
categories: [Tests, Securite, Videos]
tags: []
video: 'MSBlVAOz5HI'
image: 'test-portier-voip-hikvision-ds-kv8x13-integration-home-assistant-frigate.png'
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
rating: 4.2 
sourcelink:
---
Dans le cadre d'une **installation pour contrôle d'accès d'une mairie** et déjà domotisée avec Home Assistant, j'ai acheté un kit complet Hikvision car le prix est attractif et je sais dors et déjà que **je pourrais contrôler l'ensemble dans Home Assistant.**

- interphone Hikvision {{ page.ref }}
- deux écrans DS-KH6350
- un switch poe
- des badges rfid

Sur [aliexpress pour la modique somme de 386€ livré](https://s.click.aliexpress.com/e/_opkfBtv){: target="_blank"}, après une installation brève et efficace je te donne mon ressenti concernant ce kit.

## Présentation

Photo du **kit fourni et livré de Pologne** en moins d'une semaine, cette commande me donne pleinement satisfaction.

{% picture posts/{{ page.guid }}/kit-interphone-hikvision-ds-kv8213-ecran-kh6350-switch-poe.png --alt  kit portier, interphone hikvision ds-kv8x13 avec ecran ds-kh6350 et switch poe --img width="940" height="529" %}

{% include product-embed.html image="kit-portier-hikvision-ds-kv8113.png" title="Kit complet portier DS-KV8113" brand="Hikvision" description="Kit complet interphone hivision ds-kv8x13 avec écran, badge nfc et switch poe" affiliate="_onK2RLZ" %}

### Portier {{ page.ref }}

J'ai choisi le **kit à encastrer** livré avec le portier, une boite d'encastrement ainsi qu'une casqueete de protection. Ce kit est livré avec:

- une notice
- des badges rfid fréquences 13.56MHZ réinscriptibles
- un guide de perçage
- des clés et tournevisses
- des visses et chevilles.

{% picture posts/{{ page.guid }}/deballage-du-portier-hikvision-ds-kv8x13.png --alt  déballage, interphone hikvision ds-kv8x13 --img width="940" height="529" %}

Le portier se démonte à l'aide d'une clé allen et d'une visse sous le dessous. Ensuite tu as accès à l'affichage de la sonnette afin de changer facilement les étiquettes d'identifications.

À l'arrière se trouve deux fiches à déboiter qui te permettront de brancher en contact sec des serrures électriques ( 2 ), des interrupteurs à impulsions ou tout autres mécanismes de commandes. Sur la droite se trouve aussi un port rj45 compatible POE.

Enfin sur le côté se trouve un **compartiment micro sd card** afin d'enregistrer les captures de mouvements et vidéos en locales, comme sur une caméra ip.

{% picture posts/{{ page.guid }}/detail-du-portier-hikvision-ds-kv8x13.png --alt  détail, interphone hikvision ds-kv8x13 --img width="940" height="529" %}

Pour terminer comme je possède à titre privé un **portier Doorbird D202**, j'ai pris une capture afin de te rendre compte des différences entre les deux portiers. Ce n'est pas du tout le même produit mais une chose est sure le rendu vidéo du Hikvision {{ page.ref }} est nettement supérieur au Doorbird.

> À savoir le prix du Hikvision ds-KV8213 est le **quart du prix d'un Doorbird D202** tu peux le trouver sur aliexpress aux alentoures de 120€ seul., certe l'intégration dans Home Assistant n'est pas aussi simple, mais pas insurmontable.

{% picture posts/{{ page.guid }}/comparatif-portier-doorbird-d202-et-hikvision-ds-kv8113.png --alt  comparatif des interphones doorbird D202 et Hikvision DS-KV8213 --img width="940" height="529" %}

{% include product-embed.html image="ds-kv8213.png" title="Portier DS-KV8213 + Rfid" brand="Hikvision" description="Portier deux sonnette avec badge Hikvision DS-KV8213" affiliate="_oD1qijH" %}

> La qualité **vidéo de 720P est largement supérieur** aux anciens portiers D202 fabriqué par Doorbird.

### Écran DS-KH6350

Passons au déballage de l'écran 7" fourni avec le kit, j'ai **choisi le DS-KH6350**, rien à dire, l'emballage est soigné, et l'écran est fourni avec:

- un support mural
- une notice
- des visses 
- des cables de connections.

{% include product-embed.html image="ds-kh6350.png" title="Écran DS-KH6350" brand="Hikvision" description="Écran hikvision 7 pouces ds-kh6350" affiliate="_okwJ0Fd" %}

Concernant la connectique, il s'alimente en rj45 norme POE, ou sur une alimentation 12V, sur cet écran on peut y connecter là aussi **une ou deux serrures électriques** afin de pouvoir les commander à distance. 

De plus l'écran peut se connecter au réseau wifi.

{% picture posts/{{ page.guid }}/station-accueil-ds-kh6350-hikvision.png --alt  déballage station d'accueil DS-KH6350 par Hikvision --img width="940" height="529" %}

**Bon à savoir:** les écrans peuvent fonctionner indépendemment du portier et vice-versa. Tu pourrais par exemple acheter un écran et une caméra ip pour contrôler l'accès d'une porte d'entrée.

{% picture posts/{{ page.guid }}/taille-station-accueil-ds-kh6350-hikvision.png --alt  taille station d'accueil DS-KH6350 par Hikvision --img width="940" height="529" %}

Bel écran de qualité, dommage qu'il ne fonctionne pas sous android afin de pouvoir afficher Home Assistant ou tout autres applications. 

Si tu veux un **écran compatible Android Hikvision**, il en existe bien un de 10" [le DS-KH9510](https://s.click.aliexpress.com/e/_omrqNiX){: target="_blank"}, **seul défaut sa faible résolution de 1024x600**

{% picture posts/{{ page.guid }}/capture-station-accueil-ds-kh6350-hikvision.png --alt  capture d'écran de la station d'accueil DS-KH6350 par Hikvision --img width="940" height="529" %}

**Le Point négatifs des écrans ds-kh6350**, hormis une intégration propriétaire se trouve au niveau de la résolution qui est plafonné à **1024x600px**, j'aurai bien aimé une résolution de 1280x800px, mais sur ce type de produits ça reste un détail.

{% include product-embed.html image="kit-portier-hikvision-ds-kv8113.png" title="Kit complet portier DS-KV8113" brand="Hikvision" description="Kit complet interphone hivision ds-kv8x13 avec écran, badge nfc et switch poe" affiliate="_onK2RLZ" %}

## Méthode de connection

{% include product-embed.html image="rfid-13-56mhz-compatible-hikvision.png" title="Badge RFID 13.56Mhz" brand="Rfid" description="Badge RFID 13.56Mhz compatible Hikvision" affiliate="_ooGVUO7" %}

**Il existe deux méthodes** pour intégrer l'interphone hikvision {{ page.ref }}. **La première** méthode est de connecter un écran DS-KH6350 au réseau ainsi que le portier, ensuite il te suffit de suivre les étapes de premières installations sur l'écran. Rien de bien compliqué.

**La deuxième** méthode si tu as commandé un portier seul afin de pouvoir le piloter simplement de ton smartphone ou via l'application home-assistant, pour pouvoir l'installer sur ton réseau il va falloir passer par l'application officielle Hik-connect. 

Je détail ci-dessous un peu plus la méthode d'installation par l'application hik-connect.

### Avec écran de (contrôle la plus simple)

À court de prise rj45 proche de mon bureau, je n'ai pas réalisé cette manipulation pour le tuto en vidéo. Cependant nombre sont les vidéos qui circulent sur le web pour réaliser cette manipulation. Ci-dessous je t'ai joint une vidéo d'installation, ce n'est pas en français mais ça fera l'affaire.

{% include videoPlayer.html youtubeId="T2FQZ0Vjakc" %}

{% include product-embed.html image="ds-kv8113.png" title="Portier DS-KV8113 + Rfid" brand="Hikvision" description="Portier une sonnette avec badge Hikvision DS-KV8113" affiliate="_onEPIKF" %}

### Avec l'application Hikvision (wifi)

**Première étape** il va falloir créer un compte Hik-connect et télécharger l'application pour smartphone

**Application Hik-connect**

Hik-connect est l'application qui te permettra d'accéder à ton portier par le web, c'est donc un service cloud avec serveur chinois. 
Tu peux soit choisir de passer par l'application web [https://hik-connect.com](https://www.hik-connect.com){: target="_blank"} ou par ton smartphone via l'installation de l'application officielle.

Tu n'es pas obligé d'utiliser cette application si tu intègres l'interphone {{ page.ref }} dans home-assistant.

> Cependant si tu utilises le portier sans écran il faudra passer par cette apllication pour paramétrer la mise en service.

{% include qrlink.html qrlink="https://www.hik-connect.com/views/qrcode/hc/hc.html" text="télécharger l'application Hik-connect directement pour Android ou Apple" realtextlink="Applications Hik-connect pour Smartphone" %}

Une fois en place l'étape initiale consiste à connecter ton portier au réseau wifi privé. Même si celui-ci est connecté en POE lors de cette manipulation, Hik-connect favorise le réseau wifi.

Lors des étapes d'enregistrements du produit je te conseil de cliquer sur **ajouter manuellent un appareil**, ensuite il te suffira de rentrer le numéro de série que tu pourras retrouver directement au dos de l'interphone {{ page.ref }}

**Pour finir alimente le portier**, attend quelques secondes un signal d'alarme retentira, et ensuite pour activer le mode point d'accès il te suffira de rester appuyer sur la sonnette du haut 10 secondes et de **cliquer sur point d'accès activé.**

{% picture posts/{{ page.guid }}/premiere-phase-integration-portier-hikvision-ds-kv8113-avec-app-hik-connect.png --alt première phase d'intégration avec l'application hik-connect du portier hikvision ds-kv8x13 --img width="940" height="529" %}

**Sur les étapes suivantes il faudra renseigner:**

- le mot de passe de ton réseau wifi et cliquer sur suivant
- un nom d'utilisateur et pass pour le périphérique

{% picture posts/{{ page.guid }}/seconde-phase-integration-portier-hikvision-ds-kv8113-avec-app-hik-connect.png --alt seconde phase d'intégration avec l'application hik-connect du portier hikvision ds-kv8x13 --img width="940" height="529" %}

Le réseau va se configurer automatiquement, et voilà le portier est connecté au réseau domestique et pleinement configurable mais pas **malheuresement directement dans l'application hik-connect**.

{% picture posts/{{ page.guid }}/derniere-phase-integration-portier-hikvision-ds-kv8113-avec-app-hik-connect.png --alt Dernière phase d'intégration avec l'application hik-connect du portier hikvision ds-kv8x13 --img width="940" height="529" %}

De plus l'application **hik-connect** ne te permet pas de connaitre ou de retrouver l'adresse ip du portier. Pour ce faire il faudra malheuresement faire une recherche directement dans les paramètres de ta box par exemple. Assez facilement identifiable.

{% picture posts/{{ page.guid }}/recherche-ip-hikvision.png --alt Recherche ip hikvision sur routeur box freebox --img width="940" height="605" %}

Une fois que tu as accès à la configuration matérielle du bornier, tu pourras changer la méthode de connection au réseau en basculant du wifi au rj45. Pour ce faire suis ces étapes:

- connecte toi au serveur ( adresse ip )
- va dans réseau > paramètres de bases
- active le dhcp sous tcp/ip et enregistre ( va forcer et générer une adresse ip dynamique )
- ensuite désactive le dhcp et enregistre ( si tu veux une adresse ip fixe )
- Va dans l'onglet wifi et décoche la case termine par enregistrer
- redémarre le portier onglet système > maintenance.

**J'ai repris la manip dans un gif animé dispo ci-dessous.**

![Basculer du wifi au rj45 du portier hikvison ds-kv8123 après installation avec hik-connect]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/basculer-du-wifi-au-rj45-hikvision-ds-kv8x13-interface-web.webp{{ cachebuster }}){: width="940" height="362" class="lazyload pictaninpost"}

**Pour le reste des détails** de la configuration visionne la vidéo que j'aispécialement fait pour l'occasion, ce n'est pas la meilleur mais elle est plus détaillée.

{% include videoPlayer.html youtubeId="MSBlVAOz5HI" %}

## Contrôle par des services externes

**l'interphone Hikvision DS-KV8x13 ainsi que l'écran DS-KH6350** sont pleinement controlables par Home-Assistant, pour le contrôle de la caméra j'ai choisi de l'intégrer dans le contrôleur vidéo gratuit Frigate. mais tu le verra dans la suite de ce tuto **PergolaFabio** propose une alternative pour connecter le contrôle de la vidéo directement dans Home Assistant sans passer par un NVR externe.

**Pour suivre cette intégration il te faudra:**

- Home assistant OS
- Frigate
- Mosquitto Mqtt
- Intaller HACS
- Installer Frigate et advanced-card-caméra via HACS
- installer le module complémentaire Hikvision par PergolaFabio

**Et ci-dessous le résultat final de l'intégration**

{% picture posts/{{ page.guid }}/integration-complete-hikvision-ds-kv8x13-dans-home-assistant.png --alt intégration de l'interphone hikvision ds-kv8113 avec la carte advance-camera-card et home assistant --img width="940" height="400" %}

### Intégration Home-assistant

Avant tout il faudra **installer le module complémentaire mqtt (mosquitto)**, si tu ne l'a jamais fait tu trouveras aisément sur la toile un tutoriel adapté.

Retrouve toute la [méthode d'installation sur le github du module](https://github.com/pergolafabio/Hikvision-Addons/blob/main/doorbell/README.md){: target="_blank"}

Ensuite il faut intégrer les fonctions de l'appareil dans home-assistant grâce au **module complémentaire de pergolaFabio**, je [te laisse cliquer sur ce lien](https://github.com/pergolafabio/Hikvision-Addons/){: target="_blank"} pour suivre les étapes d'installations **du dépot** et **module complementaire**.

{% picture posts/{{ page.guid }}/installation-module-complementaire-hikvision-pergola-fabio.png --alt capture des liens d'installation du module complémentaire de pergolafabio afin de controler les fonctions de l'interphone hikvision ds-kv8113 avec la carte advance-camera-card et home assistant --img width="640" height="554" %}

**Une fois installer il faudra modifier la configuration**

pour ce faire rien de bien compliqué, rends-toi dans l'onglet configuration du module:

**dans la colonne Doorbells il faut:**

- paramétrer le nom de l'entité
- l'adresse IP du portier {{ page.ref }}
- le nom d'utilisateur et pass du portier

Tu peux paramétrer [plusieurs entités voir la notice du module](https://github.com/pergolafabio/Hikvision-Addons/blob/main/doorbell/DOCS.md){: target="_blank"}

**dans la colonne mqtt:**

- l'adresse IP du serveur MQTT
- le port ( 1883 par défaut )
- l'activation du ssl si tel est le cas
- l'utilisateur mqtt
- le pass mqtt

> Pour terminer démarre le module

**Si tout s'est bien passé tu auras accès aux deux modules ainsi que toutes les fonctions nécessaires**

{% picture posts/{{ page.guid }}/sortie-mqtt-hikvision.png --alt intégration de l'interphone hikvision ds-kv8113 et de l'écran DS-KH6350 avec le module complémentaire de pergolafabio et home assistant --img width="940" height="129" %}

{% picture posts/{{ page.guid }}/remontee-de-service-hikvision-pergolafabio-mqtt-home-assistant.png --alt intégration de l'interphone hikvision ds-kv8113 avec le module complémentaire de pergolafabio et home assistant --img width="940" height="871" %}

**PS:** Pour l'écran il est possible d'activer des fonctions complémentaires en activant **les scenes dans le module**.

**Tu pourras désormais sur le portier ou l'écran:**

- rejeter les appels ou raccrocher
- couper/activer la sortie audio
- activer les sorties contact-sec
- redémarrer
- répondre à l'appel
- avoir le status de l'appel
- etc....

{% picture posts/{{ page.guid }}/configuration-hikvision-pergolafabio-home-assistant.png --alt intégration de l'interphone hikvision ds-kv8113 avec la carte advance-camera-card et home assistant --img width="940" height="683" %}

### Intégration Frigate

Pour contrôler le flux de la caméra j'utilise le [nvr Frigate](https://frigate.video/){: target="_blank"} je ne vais pas passer en revue ses fonctions tu trouveras toutes les infos sur le site officiel, il faut retenir que ce **nvr est gratuit** et peut être utilisé **dans un docker externe** donc potentiellement compatible dans tous les assistants opensource du marché tel que Openhab, Jeedom, etc... 

Frigate est entièrement compatible et intégrable dans home assistant.

J'utilise le module de liaison **Frigate dispo dans le répertoire HACS**, ainsi ça fera remonter toutes les caméras paramétrés dans frigate dans l'instance home assistant.

**Ci-dessous le code d'intégration de la caméra dans frigate**

Une des particularité de la caméra Hikvision {{ page.ref }} qui la rend un poil plus complexe à paramétrer et sa fonction **isapi**. Heureusement cette fonction est prise ne charge par le gestionnaire go2rtc depuis 2022 donc paramétrable dans frigate.

{% highlight yaml %}
go2rtc:
  streams:
    interphone:
      - "ffmpeg:rtsp://admin:aaa@192.168.x.x/Streaming/Channels/101/#async#input=rtsp/udp#video=copy#audio=aac#audio=opus#hardware=cuda"
      - isapi://admin:aaa@192.168.x.x:80/
cameras:
  interphone:
    enabled: true
    audio: 
      enabled: true
      min_volume: 100
    ffmpeg:
      output_args:
        record: preset-record-generic-audio-copy
      inputs:
      - path: rtsp://127.0.0.1:8554/interphone?video&audio
        input_args: preset-rtsp-restream
        roles:
        - record
        - audio
        - detect
{% endhighlight %}

<cite>[https://github.com/blakeblackshear/frigate/discussions/12501](https://github.com/blakeblackshear/frigate/discussions/12501){: target="_blank"}</cite>

> Une fois ce code intégré, la caméra remontera dans frigate

{% include product-embed.html image="ds-kv8113.png" title="Portier DS-KV8113 + Rfid" brand="Hikvision" description="Portier une sonnette avec badge Hikvision DS-KV8113" affiliate="_onEPIKF" %}

#### Carte custom advanced caméra

Grâce à la carte personnalisé ***advanced camera card* disponible dans le répertoire Hacs** tu pourras aisément intégrer la caméra du portier hikvision {{ page.ref }} dans home assistant.

- compatible go2rtc
- compatible frigate
- compatible isapi

{% picture posts/{{ page.guid }}/hikvision-ds-kv8x13-avec-advanced-camera-card-hacs-home-assistant.png --alt intégration de l'interphone hikvision ds-kv8113 avec la carte advance-camera-card et home assistant --img width="493" height="372" %}

Ci-dessous le code utilisé pour afficher la caméra dans Lovelace avec la carte **custom advanced caméra**

{% highlight yaml %}
type: custom:advanced-camera-card
cameras:
  - camera_entity: camera.intercom
menu:
  style: outside
  position: bottom
  buttons:
    microphone:
      enabled: true
      type: toggle
    screenshot:
      enabled: false
    download:
      enabled: false
    fullscreen:
      enabled: false
    snapshots:
      enabled: false
    timeline:
      enabled: false
    media_player:
      enabled: false
    clips:
      enabled: false
    live:
      enabled: false
    cameras:
      enabled: false
    iris:
      enabled: false
    camera_ui:
      enabled: false
live:
  microphone:
    always_connected: true
    mute_after_microphone_mute_seconds: 90
  auto_mute: []
  auto_unmute: []
  controls:
    builtin: true
    title:
      mode: none
  layout:
    fit: fill
elements:
  - type: custom:advanced-camera-card-menu-icon
    icon: mdi:volume-high
    tap_action:
      - action: custom:advanced-camera-card-action
        advanced_camera_card_action: unmute
  - type: custom:advanced-camera-card-menu-icon
    icon: mdi:volume-off
    tap_action:
      - action: custom:advanced-camera-card-action
        advanced_camera_card_action: mute
  - type: custom:advanced-camera-card-menu-icon
    icon: mdi:phone
    tap_action:
      - action: call-service
        service: button.press
        data:
          entity_id: button.interphone_answer_call
      - action: call-service
        service: button.press
        data:
          entity_id: button.interphone_hangup_call
      - action: custom:advanced-camera-card-action
        advanced_camera_card_action: sleep
        duration:
          ms: 200
      - action: custom:advanced-camera-card-action
        advanced_camera_card_action: unmute
      - action: custom:advanced-camera-card-action
        advanced_camera_card_action: microphone_unmute
  - type: custom:advanced-camera-card-menu-icon
    icon: mdi:phone-hangup
    tap_action:
      - action: custom:advanced-camera-card-action
        advanced_camera_card_action: microphone_disconnect
      - action: custom:advanced-camera-card-action
        advanced_camera_card_action: mute
      - action: call-service
        service: text.set_value
        data:
          entity_id: text.interphone_isapi_request
          value: PUT /ISAPI/System/TwoWayAudio/channels/1/close
  - type: custom:advanced-camera-card-menu-icon
    icon: mdi:door-open
    tap_action:
      - action: call-service
        service: switch.turn_on
        data:
          entity_id: switch.interphone_door_relay_0
dimensions:
  aspect_ratio_mode: static
  aspect_ratio: "4:3"
status_bar:
  style: none
profiles: []
cameras_global:
  dimensions:
    layout:
      fit: fill
{% endhighlight %}

<cite>[https://github.com/pergolafabio/Hikvision-Addons/](https://github.com/pergolafabio/Hikvision-Addons/blob/main/advanced_card/twowayaudio.with.advanced.camera.card.md){: target="_blank"}</cite>

## Conclusion

Hikvision est un fabriquant chinois de très bonne manufacture, l'interphone Hikvision {{ page.ref }} en fait partie, outre son prix dérisoire par rapport à la concurrence, il apporte nombre d'atouts indéniables en domotique. Il n'est pas parfait mais fera parfaitement l'affaire dans la plupart des cas, ce sont des produits que je recommande fortement.

{% include product-embed.html image="ds-kv8213.png" title="Portier DS-KV8213 + Rfid" brand="Hikvision" description="Portier deux sonnette avec badge Hikvision DS-KV8213" affiliate="_oD1qijH" %}

{% include product-embed.html image="rfid-13-56mhz-compatible-hikvision.png" title="Badge RFID 13.56Mhz" brand="Rfid" description="Badge RFID 13.56Mhz compatible Hikvision" affiliate="_ooGVUO7" %}




