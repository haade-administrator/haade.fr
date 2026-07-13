---
guid: 177
title: "Dahua SD1A404DB-GNY la caméra PTZ full option dans Frigate"
description: "Test et intégration de la caméra PTZ Dahua SD1A404DB-GNY 4MP WizSense dans Frigate avec autotracking et Home Assistant, caractéristiques techniques complètes et fonctions PTZ"
ref: "SD1A404DB-GNY"
layout: post
authors: [Nico]
date: 2026-07-13 08:00
last_modified_at: 
categories: [Tests, Securite, Home-Assistant]
tags: []
video: 
image: 'test-camera-ptz-dahua-sd1a404db-gny-frigate-home-assistant.png'
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
rating: 4.6
sourcelink:
  - https://www.dahuasecurity.com/fr/products/network-products/pt-cameras/ip-pt-3-series/sd1/sd1a404db-gny
  - https://www.dahuasecurity.com/fr/products/network-products/pt-cameras/ip-pt-3-series/sd1/sd1a404db-gny-w
  - https://docs.frigate.video/configuration/autotracking/
  - https://docs.frigate.video/configuration/cameras/
---

Suite à mon [test de la caméra Reolink Trackmix Poe]({% post_url /fr/2026-04-22-test-et-integration-camera-reolink-trackmix-poe-frigate-homeassistant %}), j'avais mentionné **avoir trouvé mon bonheur avec une caméra Dahua**. Et bien nous y voilà ! Je te présente la **Dahua {{ page.ref }}**, une caméra PTZ compacte 4MP de la gamme **WizSense** qui coche toutes les cases pour une intégration parfaite dans **Frigate** et **Home Assistant**. Autotracking, ONVIF complet, WDR 120dB, AI SMD 3.0... **le tout dans un format ultra-compact.**

Pourquoi j'ai préféré cette Dahua à la Reolink ? C'est simple : **les dimensions réduites**, la **compatibilité native ONVIF** avec support des mouvements relatifs (indispensable pour l'autotracking Frigate), le **paramétrage complet des flux vidéo** (compression, résolution, bitrate...) et un **rapport qualité/prix imbattable** sur Aliexpress aux alentours de 130-165€ livré.

{% include product-embed.html image="dahua-poe.png" title="Dahua SD1A404DB-GNY" brand="Dahua" description="Caméra PTZ 4MP Dahua SD1A404DB-GNY WizSense, zoom optique 4x, Starlight, SMD 3.0, IP66, IK08, PoE, microphone intégré" amazlink="3QL8b6Z" %}

## La marque Dahua

Avant de rentrer dans le vif du sujet, laisse-moi te présenter rapidement **Dahua Technology**. Fondée en **2001 à Hangzhou en Chine** par Fu Liquan (ancien ingénieur de l'industrie de la défense), l'entreprise est aujourd'hui le **2ème fabricant mondial de vidéosurveillance** juste derrière Hikvision. Cotée à la bourse de Shenzhen depuis 2008, Dahua investit chaque année environ **10% de son chiffre d'affaires en R&D**, ce qui explique le niveau d'innovation constant de leurs produits.

**Quelques jalons importants :**

- **2002** — sortie du premier DVR embarqué 8 canaux temps réel au monde
- **Aujourd'hui** — fournisseur global AIoT (vidéosurveillance, vision par machine, robotique, drones, villes intelligentes)

Dahua se distingue par des **technologies propriétaires** comme le **Starlight** (vision ultra faible luminosité), le **WizSense** (IA embarquée) et le **Smart H.265+** (compression intelligente). La qualité de fabrication est au rendez-vous, les boîtiers sont robustes et les capteurs de très bonne facture.

{%- include alert.html type="info" text="Dahua propose un écosystème complet avec l'application <b>DMSS</b> pour smartphone, le logiciel <b>SmartPSS</b> pour desktop, et une compatibilité <b>ONVIF Profils S, G et T</b> pour l'interopérabilité avec les systèmes tiers." %}

> Un point qui me plaît particulièrement chez Dahua c'est le **panel de paramétrage hyper complet** de leurs caméras via l'interface web. Contrairement à Reolink où les réglages sont limités, chez Dahua tu as le contrôle total sur chaque flux vidéo.

## Déballage

J'ai commandé la Dahua {{ page.ref }} [**sur Aliexpress pour environ 171€ livrée**](https://fr.aliexpress.com/item/1005001462325195.html?spm=a2g0o.productlist.main.3.1a72YUjNYUjNE6&algo_pvid=69f049bc-4b6f-49e9-ac20-296dbe2a9870&algo_exp_id=69f049bc-4b6f-49e9-ac20-296dbe2a9870-2&pdp_ext_f=%7B%22order%22%3A%2226%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21EUR%21213.36%21170.69%21%21%21237.52%21190.02%21%400b0fe0e117839218721461395e1ee2%2112000016215501598%21sea%21FR%212299046143%21X%211%210%21n_tag%3A-29919%3Bd%3A520a946f%3Bm03_new_user%3A-29895&curPageLogUid=dUpyz78sVp2F&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005001462325195%7C_p_origin_prod%3A){: target="_blank" }. Le colis est arrivé bien protégé, et à l'intérieur tu retrouves :

- la caméra {{ page.ref }}
- un câble réseau RJ45 d'environ 1 mètre
- un kit de visserie et chevilles
- un gabarit de perçage
- une notice d'installation rapide

{% picture posts/{{ page.guid }}/deballage-camera-dahua-sd1a404db-gny-ptz.png --alt déballage et contenu de la boîte de la caméra PTZ Dahua SD1A404DB-GNY --img width="940" height="529" %}

La première impression est celle d'un **produit compact et bien fini**. Le boîtier est intégralement en aluminium et ABS haute densité, la cloche de protection en polycarbonate est solidement fixée. On sent tout de suite un produit de qualité professionnelle.

{% include product-embed.html image="dahua-wifi.png" title="Dahua SD1A404DB-GNY-W" brand="Dahua" description="Version WiFi de la caméra PTZ 4MP Dahua SD1A404DB-GNY-W WizSense, zoom optique 4x, Starlight, SMD 3.0, IP66, IK08, PoE + WiFi" amazlink="4wCz9wQ" %}

## La caméra {{ page.ref }}

Ce qui m'a séduit immédiatement avec cette caméra c'est son **format ultra-compact**. Avec un diamètre de seulement **128 mm** et une hauteur de **65,4 mm** pour un poids plume de **500 grammes**, elle est incomparablement plus discrète que la Reolink Trackmix Poe et ses 228 x 147 x 110 mm pour 1,21 kg. **Idéal pour une installation sous un péron ou en façade sans dénaturer l'esthétique de la maison.**

{% picture posts/{{ page.guid }}/detail-camera-dahua-sd1a404db-gny-compact-ptz.png --alt détail de la caméra PTZ Dahua SD1A404DB-GNY taille compacte et optique --img width="940" height="529" %}

La Dahua {{ page.ref }} embarque un **capteur CMOS 1/2.8" de 4 Mégapixels** couplé à un **zoom optique 4x** (2.8-12mm). Grâce à la technologie **Starlight**, elle descend à **0.005 lux en couleur** et **0.0005 lux en noir et blanc**, ce qui lui permet de produire des images nettes même en conditions de très faible luminosité. L'infrarouge intégré porte jusqu'à **20 mètres**.

1. Dôme en polycarbonate transparent
2. LEDs infrarouges intégrées
3. Objectif zoom optique 4x (2.8-12mm)
4. Microphone intégré
5. Slot MicroSD (jusqu'à 512 Go)

{% picture posts/{{ page.guid }}/dimensions-camera-dahua-sd1a404db-gny-ptz.png --alt dimensions compactes de la caméra PTZ Dahua SD1A404DB-GNY comparaison --img width="940" height="529" %}

> L'avantage majeur de cette caméra c'est qu'elle passe quasiment inaperçue, les dimensions sont largement inférieures à la concurrence dans cette gamme de prix.

{% include product-embed.html image="dahua-poe.png" title="Dahua SD1A404DB-GNY" brand="Dahua" description="Caméra PTZ 4MP Dahua SD1A404DB-GNY WizSense, zoom optique 4x, Starlight, SMD 3.0, IP66, IK08, PoE, microphone intégré" amazlink="3QL8b6Z" %}

### Caractéristiques techniques {{ page.ref }}

J'ai compilé ci-dessous **l'ensemble des caractéristiques techniques** afin que tu puisses te faire une idée complète du produit.

**Capteur et Optique**

|Capteur d'image|CMOS 1/2.8" 4 Mégapixels|
|Résolution maximale|2560 × 1440 (4MP) à 25/30 fps|
|Objectif|2.8 mm – 12 mm, F1.8|
|Zoom optique|4x|
|Champ de vision|H: 96.9°–31.6°, V: 51.4°–17.8°, D: 116.2°–36.4°|
|Illumination min.|0.005 lux @ F1.8 (couleur), 0.0005 lux (N&B), 0 lux (IR)|
|WDR|120 dB|
|Vision nocturne IR|Jusqu'à 20 m (65.62 ft)|
|Technologie|Starlight|

**Pan & Tilt**

|Plage panoramique|0° à 355°|
|Plage d'inclinaison|5° à 90°|
|Vitesse panoramique|0.1°/s – 70°/s|
|Vitesse d'inclinaison|0.1°/s – 30°/s|
|Presets|300 positions programmables|
|Tours/Patrouilles|8 tours (jusqu'à 32 presets par tour)|
|Protocole PTZ|DH-SD (natif), ONVIF (externe)|

**Compression et Réseau**

|Format vidéo|Smart H.265+ / H.265 / H.264+ / H.264|
|ONVIF|Profils S, G, T|
|Protocoles|RTSP, HTTP, HTTPS, ONVIF, TCP/IP, UDP|
|Port Ethernet|RJ45 10/100 Mbps|

**Intelligence artificielle (WizSense)**

|SMD 3.0|Détection intelligente de mouvement (humains/véhicules)|
|Protection périmétrique|Tripwire, détection d'intrusion|
|Détection de visages|Oui|
|Comptage de personnes|Oui (file d'attente, occupation de zone)|

**Audio et Stockage**

|Audio|Microphone intégré (1 entrée / 1 sortie)|
|Stockage local|Slot MicroSD (jusqu'à 512 Go)|

**Alimentation et Protection**

|Alimentation|12V DC 2A / PoE (IEEE 802.3af)|
|Étanchéité|IP66|
|Résistance au vandalisme|IK08|
|Température de fonctionnement|-30°C à +60°C|

**Dimensions et Poids**

|Dimensions|Ø128 mm × 65.4 mm (H)|
|Poids|500 g|

#### **les + du produit** {{ page.ref }}
{: .blue}

- Format ultra-compact (Ø128 mm, 500g)
- Zoom optique 4x motorisé
- WizSense AI SMD 3.0 (humains/véhicules)
- ONVIF Profils S, G, T complets
- Starlight 0.005 lux
- WDR 120 dB
- 300 presets PTZ / 8 tours de patrouille
- IP66 + IK08
- PoE (câble unique)
- Paramétrage très complet via interface web
- Compatible Frigate autotracking

#### **les - du produit** {{ page.ref }}
{: .red}

- Zoom 4x limité (vs 25x sur des PTZ plus gros)
- Panoramique 355° (pas de rotation continue 360°)
- Portée IR 20m (suffisante mais modeste)
- Pas de projecteur lumière blanche (uniquement IR)

## Interface web Dahua

L'un des **gros points forts de Dahua** par rapport à Reolink, c'est l'interface web de configuration. En te connectant à l'adresse IP de la caméra depuis ton navigateur, tu accèdes à un **panel de paramétrage extrêmement complet**.

{% picture posts/{{ page.guid }}/interface-web-dahua-sd1a404db-gny-parametrage-flux.png --alt interface web de la caméra Dahua SD1A404DB-GNY paramétrage des flux vidéo --img width="940" height="529" %}

Tu pourras notamment configurer :

- **Les flux vidéo** : résolution, compression (H.264/H.265/H.265+), bitrate, FPS, mode CBR/VBR pour chaque flux (main, sub, extra)
- **Les zones de détection** : tripwire, intrusion, SMD, comptage de personnes
- **Les presets PTZ** : jusqu'à 300 positions enregistrables
- **Les tours de patrouille** : 8 patrouilles programmables
- **L'audio** : volume du micro, activation/désactivation
- **Le réseau** : ONVIF, RTSP, ports, DDNS, NTP
- **Le stockage** : enregistrement sur MicroSD, planification

{% picture posts/{{ page.guid }}/interface-web-dahua-sd1a404db-gny-detection-ia.png --alt interface web de la caméra Dahua SD1A404DB-GNY configuration détection IA SMD 3.0 --img width="940" height="529" %}

> Ce niveau de paramétrage est un vrai plus quand on intègre la caméra dans un système comme Frigate, car on peut optimiser chaque flux indépendamment.

## Fonctions PTZ

Le PTZ c'est le cœur de cette caméra. **Pan-Tilt-Zoom**, trois fonctions essentielles pour une surveillance active et un suivi de cibles.

### Pan et Tilt

La Dahua {{ page.ref }} offre un **panoramique de 0° à 355°** avec des vitesses de rotation allant de **0.1°/s à 70°/s**. L'inclinaison va de **5° à 90°** à des vitesses de **0.1°/s à 30°/s**. Les mouvements sont **fluides et silencieux**, le moteur est bien calibré et ne génère quasiment aucun bruit même à haute vitesse.

### Zoom optique 4x

Le **zoom optique 4x** (2.8-12mm) permet de passer d'un champ de vision grand-angle de **96.9°** à un champ resserré de **31.6°**. C'est suffisant pour une surveillance résidentielle ou de petits commerces. Pour une surveillance de parkings ou de grands espaces, il faudra se tourner vers des modèles avec un zoom plus conséquent (25x ou 30x).

{%- include alert.html type="help" text="Le zoom fonctionne de manière <b>continue et fluide</b> contrairement aux caméras Reolink où le zoom avance par incréments lors du contrôle via ONVIF. C'est un point que j'avais relevé dans mon test de la Reolink Trackmix Poe." %}

### Presets et patrouilles

Tu peux programmer jusqu'à **300 positions preset** et **8 tours de patrouille** contenant chacun jusqu'à 32 presets. C'est particulièrement utile pour :

- surveiller des zones stratégiques à intervalles réguliers
- définir une position "home" (parking) où la caméra revient automatiquement
- créer des rondes automatisées de surveillance

### Autotracking via Frigate

La Dahua {{ page.ref }} ne possède pas de fonction d'autotracking native, **mais elle est parfaitement compatible avec l'autotracking logiciel de Frigate** grâce à son support complet de l'ONVIF et notamment du `RelativePanTiltTranslationSpace`. C'est précisément ce qui la différencie de la Reolink où cette fonction ONVIF n'est pas opérationnelle.

![Autotracking Frigate en action avec la caméra Dahua SD1A404DB-GNY détection de personne]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/autotracking-frigate-dahua-sd1a404db-gny-detection.webp{{ cachebuster }}){: width="640" height="360" class="lazyload pictaninpost"}

## Intégration Home Assistant

Plusieurs méthodes s'offrent à toi pour intégrer la Dahua {{ page.ref }} dans Home Assistant :

### Méthode 1 : Intégration ONVIF (native)

C'est la méthode la plus simple, directement disponible dans Home Assistant sans installation supplémentaire.

{% include homeassistantlink.html integration="onvif" %}

Dans **Paramètres → Appareils et Services → Ajouter une intégration → ONVIF**, renseigne :

- **Adresse IP** de la caméra
- **Port ONVIF** : 80 (par défaut sur Dahua)
- **Nom d'utilisateur** et **mot de passe**

Tu obtiendras : le flux vidéo en direct, les événements de mouvement, le **contrôle PTZ** (pan, tilt, zoom) et les snapshots.

### Méthode 2 : Intégration Dahua via HACS (rroller/dahua)

Pour un contrôle plus avancé, installe l'intégration **Dahua** disponible dans HACS :

[Lien vers le dépôt GitHub rroller/dahua](https://github.com/rroller/dahua){: target="_blank"}

Cette intégration remonte les **événements IVS** (détection intelligente), les alertes SMD, la gestion des alarmes et plein de capteurs additionnels non disponibles via ONVIF.

{% picture posts/{{ page.guid }}/integration-dahua-home-assistant-hacs-entites.png --alt intégration Dahua dans Home Assistant via HACS avec nombreuses entités --img width="940" height="267" %}

### Méthode 3 : Frigate + go2rtc (recommandée)

C'est la méthode que je recommande et que j'utilise au quotidien. Le stack complet est :

**Dahua Camera → go2rtc → Frigate → Home Assistant**

Cette architecture offre :
- la **détection IA** (personne, voiture, animal...)
- le streaming **faible latence** via go2rtc/WebRTC
- l'**autotracking PTZ**
- l'intégration complète dans HA via l'**intégration Frigate** (dispo dans HACS)

{%- include alert.html type="warning" text="Pour utiliser cette méthode il te faudra installer <b>Frigate</b>, <b>Mosquitto MQTT</b> et l'intégration <b>Frigate HACS</b> dans Home Assistant." %}

## Intégration Frigate

Passons au morceau de choix : **l'intégration complète dans Frigate** avec configuration des flux, ONVIF et autotracking.

### Flux RTSP Dahua

Les URLs RTSP suivent le format standard Dahua :

|Flux|URL|
|**Main Stream** (haute résolution)|`rtsp://user:pass@IP/cam/realmonitor?channel=1&subtype=0`|
|**Sub Stream** (basse résolution)|`rtsp://user:pass@IP/cam/realmonitor?channel=1&subtype=1`|
|**Extra Stream**|`rtsp://user:pass@IP/cam/realmonitor?channel=1&subtype=2`|

### Code complet Frigate avec autotracking

Ci-dessous la configuration **complète et fonctionnelle** que j'utilise pour la Dahua {{ page.ref }} dans Frigate, incluant go2rtc, les flux vidéo, l'ONVIF et l'autotracking :

{% highlight yaml %}
{% raw %}

# ============================================
# Configuration Frigate - Dahua SD1A404DB-GNY
# ============================================

# Accélérateur matériel (adapter selon ton hardware)
ffmpeg:
  hwaccel_args: preset-vaapi
  output_args:
    record: preset-record-generic-audio-copy
  global_args: -hide_banner -loglevel warning

# Détecteur (Google Coral recommandé)
detectors:
  coral:
    type: edgetpu
    device: pci

# Configuration go2rtc
go2rtc:
  rtsp:
    username: [LOGIN]
    password: [PASS]
  webrtc:
    candidates:
      - [IP-FRIGATE]:8555
      - stun:8555

  streams:
    dahua_ptz_main:
      - ffmpeg:[LOGIN]:[PASS]@[IP-CAMERA]/cam/realmonitor?channel=1&subtype=0
      - rtsp://[LOGIN]:[PASS]@[IP-CAMERA]/cam/realmonitor?channel=1&subtype=0
    dahua_ptz_sub:
      - rtsp://[LOGIN]:[PASS]@[IP-CAMERA]/cam/realmonitor?channel=1&subtype=1

# Caméra Dahua SD1A404DB-GNY
cameras:

  dahua_ptz:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/dahua_ptz_main
          input_args: preset-rtsp-restream
          roles:
            - record
            - audio
        - path: rtsp://127.0.0.1:8554/dahua_ptz_sub
          input_args: preset-rtsp-restream
          roles:
            - detect

    detect:
      width: 1280
      height: 720
      fps: 5

    live:
      streams:
        Main Stream: dahua_ptz_main
        Sub Stream: dahua_ptz_sub

    # Configuration ONVIF pour contrôle PTZ
    onvif:
      host: [IP-CAMERA]
      port: 80
      user: [LOGIN]
      password: [PASS]

    # Autotracking PTZ
    autotracking:
      enabled: true
      calibrate_on_startup: false
      zooming: disabled
      zoom_factor: 0.3
      track:
        - person
        - car
      return_preset: home
      timeout: 10

    record:
      enabled: true
      retain:
        days: 7
      events:
        retain:
          default: 14

    snapshots:
      enabled: true
      retain:
        default: 14

{% endraw %}
{% endhighlight %}

### Explications du code

**go2rtc** — on utilise go2rtc comme gestionnaire de flux pour éviter les connexions multiples vers la caméra. Le flux main (subtype=0) en 4MP pour l'enregistrement, et le flux extra (subtype=2) en 720p pour la détection afin de **réduire la charge CPU**.

**onvif** — le port ONVIF est le **80** sur les caméras Dahua (et non 8000 comme chez certains fabricants). C'est essentiel pour le contrôle PTZ et l'autotracking.

**autotracking** — la configuration ci-dessus active l'autotracking qui va automatiquement suivre les personnes et véhicules détectés par Frigate en pilotant le PTZ via ONVIF.

### Configuration de l'autotracking pas à pas

{%- include alert.html type="warning" text="Avant de configurer l'autotracking dans Frigate, tu dois d'abord <b>créer un preset PTZ nommé 'home'</b> dans l'interface web de la caméra Dahua. C'est la position de repos vers laquelle la caméra retournera après le tracking." %}

**Étape 1 — Créer le preset "home" dans la caméra**

Connecte-toi à l'interface web de la caméra → onglet **PTZ** → positionne la caméra sur la vue par défaut souhaitée → enregistre le preset sous le nom **"home"**

**Étape 2 — Activer l'ONVIF**

Dans l'interface web : **Réseau → ONVIF** → active le service et vérifie que le port est bien **80**

**Étape 3 — Calibration initiale**

Au premier lancement avec `calibrate_on_startup: true`, Frigate va automatiquement faire pivoter la caméra dans toutes les directions pour **calibrer les vitesses de mouvement et le champ de vision**. Laisse-le faire, ça prend environ 1 minute.

**Étape 4 — Après calibration**

Une fois la calibration réussie, Frigate va auto-générer les `movement_weights` dans ta configuration. Change alors `calibrate_on_startup: false` pour éviter de recalibrer à chaque redémarrage.

{% highlight yaml %}
    # Autotracking PTZ
    autotracking:
      enabled: true
      calibrate_on_startup: true <====
      zooming: absolute
      zoom_factor: 0.3
      track:
        - person
        - car
      return_preset: home
      timeout: 10
{% endhighlight %}

> Tu devras recalibrer si tu changes le fps de détection, le preset de retour ou les paramètres de zoom.

### Rendu dans Frigate

Une fois la configuration en place, tu retrouves la Dahua {{ page.ref }} dans l'interface Frigate avec tous les contrôles PTZ fonctionnels : panoramique, inclinaison, zoom, presets et autotracking.

{% picture posts/{{ page.guid }}/rendu-camera-dahua-sd1a404db-gny-dans-frigate.png --alt rendu de la caméra Dahua SD1A404DB-GNY dans l'interface Frigate avec contrôle PTZ --img width="940" height="451" %}

La détection IA fonctionne parfaitement, le Google Coral traite les images du flux sub en 720p et identifie les personnes et véhicules avec un excellent taux de fiabilité grâce au **SMD 3.0** qui pré-filtre côté caméra.

### Carte Frigate dans Home Assistant

Grâce à la **carte custom advanced camera** disponible dans HACS, tu peux intégrer le flux Frigate directement dans le dashboard Home Assistant avec tous les contrôles PTZ.

{% highlight yaml %}
type: custom:advanced-camera-card
cameras:
  - camera_entity: camera.dahua_ptz
    live_provider: go2rtc
    go2rtc:
      modes:
        - webrtc
        - mse
frigate:
  url: http://[IP-FRIGATE]:5000
menu:
  style: outside
  position: bottom
  buttons:
    ptz:
      enabled: true
    microphone:
      enabled: true
      type: toggle
    screenshot:
      enabled: true
    clips:
      enabled: true
    snapshots:
      enabled: true
    timeline:
      enabled: true
    fullscreen:
      enabled: true
live:
  auto_unmute: []
  controls:
    builtin: true
    ptz:
      mode: frigate
dimensions:
  aspect_ratio_mode: static
  aspect_ratio: "16:9"
{% endhighlight %}

{% picture posts/{{ page.guid }}/rendu-carte-frigate-home-assistant-dahua-ptz.png --alt rendu de la carte Frigate dans Home Assistant pour la caméra Dahua SD1A404DB-GNY avec contrôle PTZ --img width="940" height="337" %}

Contrairement à la Reolink Trackmix Poe où le zoom avançait par à-coups, **avec la Dahua le zoom est fluide et continu** en restant appuyé sur les boutons + et -, la fonction ONVIF relative est pleinement fonctionnelle.

{% include product-embed.html image="dahua-poe.png" title="Dahua SD1A404DB-GNY" brand="Dahua" description="Caméra PTZ 4MP Dahua SD1A404DB-GNY WizSense, zoom optique 4x, Starlight, SMD 3.0, IP66, IK08, PoE, microphone intégré" amazlink="3QL8b6Z" %}

## Version WiFi {{ page.ref }}-W

Dahua propose également la version **WiFi** de cette caméra sous la référence **SD1A404DB-GNY-W**. Elle conserve toutes les caractéristiques de la version PoE avec en plus une **connectivité WiFi**. Pratique si tu ne peux pas tirer de câble réseau jusqu'à l'emplacement souhaité.

{%- include alert.html type="warning" text="Pour une utilisation avec Frigate et de l'enregistrement vidéo continu, je te recommande fortement la <b>version PoE filaire</b>. Le WiFi peut introduire de la latence et des pertes de paquets qui impactent la qualité des flux RTSP." %}

{% include product-embed.html image="dahua-wifi.png" title="Dahua SD1A404DB-GNY-W" brand="Dahua" description="Version WiFi de la caméra PTZ 4MP Dahua SD1A404DB-GNY-W WizSense, zoom optique 4x, Starlight, SMD 3.0, IP66, IK08, PoE + WiFi" amazlink="4wCz9wQ" %}

## Boîtier de connexion

Pour une installation propre et étanche, je te recommande d'utiliser un **boîtier de connexion** dédié. Il permet de loger proprement les câbles RJ45 et d'alimentation tout en conservant l'étanchéité IP66 de l'ensemble.

{% include product-embed.html image="boitier-derivation-connection-rangement-fil-camera-dahua.png" title="Boîtier de connexion" brand="NoName" description="Boîtier de connexion et de dérivation étanche compatible caméra Dahua SD1A série" amazlink="4fpMDWG" %}

## Conclusion

La Dahua {{ page.ref }} est pour moi **la meilleure caméra PTZ dans cette gamme de prix** pour une intégration domotique complète. Là où la Reolink Trackmix Poe pêche par ses dimensions imposantes et son autotracking ONVIF non fonctionnel dans Frigate, la Dahua excelle par son **format ultra-compact**, son **ONVIF complet** et son **panel de réglages digne d'une caméra professionnelle**.

L'intégration dans **Frigate avec l'autotracking** fonctionne parfaitement, le contrôle PTZ est fluide, le zoom continu est un vrai bonheur à utiliser comparé à la concurrence. Le **WizSense AI SMD 3.0** apporte une couche intelligente supplémentaire directement depuis la caméra, et la qualité d'image **Starlight** avec **WDR 120dB** est impressionnante de jour comme de nuit.

> Si tu cherches une caméra PTZ compacte, discrète et 100% compatible Frigate avec autotracking pour ta maison connectée, **la Dahua {{ page.ref }} est le choix que je te recommande sans hésiter.**
