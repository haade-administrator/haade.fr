---
guid: 174
title: "Test camera Reolink Trackmix Poe - Service client à revoir 🤬"
description: "test et intégration de la caméra Reolink Trackmix Poe dans frigate et home assistant et coup de gueule contre le service client de la marque 👎"
ref: "Trackmix Poe"
layout: post
authors: [Nico]
date: 2026-04-08 10:04
last_modified_at: 
categories: [Tests, Securite]
tags: []
video: 
image: 'test-camera-reolink-trackmix-poe-produit-top-gestion-sav-mauvais.png'
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
  - https://reolink.com/fr/product/reolink-trackmix-poe/?gad_source=1&gad_campaignid=17213699923&gbraid=0AAAAAClTwiYgJyoZvTQF2Yb_1ymnCmpz3&gclid=CjwKCAjwwJzPBhBREiwAJfHRnV9qkNgo00p7Ek9SqmwgPy6QEREi6iolikGiJ3qeMRLth0jRj0kPUxoCf0kQAvD_BwE
---
J'ai récemment fait l'acquisition d'une caméra Reolink Trackmix Poe pour équiper la maison sur le site ifficiel de la marque Reolink.com cependant j'ai voulu me rétracter car j'ai une autre caméra plus adapté ( dimensions réduites ), ***mais la prise en charge pour l'annulation de la commande chez Reolink ne s'est pas faite correctement.***

Avant de commencer ce tutos, je tiens à pousser un coup de gueule, je m'explique, je cherchais une caméra dôme ptz compatible 100% frigate, sur le moment je n'ai rien trouvé qui me convenait, alors j'ai commandé 2 caméras sur le site Reolink. Mais voilà moins d'une heure après j'ai trouvé mon bonheur sur aliexpress avec une caméra dahua et 100% compatible frigate avec la fonction autotrack.
Ni une ni deux j'écris à Reolink et oui pas de support téléphonique ( je précise que nous sommes en semaine ) et moins de deux heures après avoir passé commande, donc je remplis toutes les clauses pour annuler la commande. Résultat des courses ils ont mis 4 jours à me répondre entre temps tu te doutes bien que la commande est partie. Cerise sur le gâteau durant cette période Veepee a fait une offre avec cette caméra à -50%, alors que j'ai bénéficié de -18% sur le site.

Le commercial me propose une remise de 5% pour garder les caméras, j'ai demandé 25% supplémentaire ou un retour du matériel. 

> Résultat des courses j'ai retourné le matériel à mes frais comme stipule les CGV

Dans un prochain article je vais te présenter la caméra que j'ai choisis à la place de la Reolink {{ page.ref }}, il s'agit de la [Dahua SD1A404DB-GNY](https://fr.aliexpress.com/item/1005001462325195.html?spm=a2g0o.productlist.main.1.58a7jj5Bjj5BKz&algo_pvid=86d0545a-92c4-4cdb-a63e-da64e8bad7e8&algo_exp_id=86d0545a-92c4-4cdb-a63e-da64e8bad7e8-0&pdp_ext_f=%7B%22order%22%3A%2230%22%2C%22spu_best_type%22%3A%22price%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21EUR%21165.03%21164.99%21%21%21189.89%21189.84%21%40211b617b17767733278895670e8651%2112000016215501598%21sea%21FR%212299046143%21X%211%210%21n_tag%3A-29911%3Bd%3A256934a7%3Bm03_new_user%3A-29895&curPageLogUid=Gmv9hx7EZR4d&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005001462325195%7C_p_origin_prod%3A){: target="_blank"} qui a des dimensions bien plus petites et aux atouts majeurs surtout pour une intégration dans frigate ( autotrack natif et paramétrage des fux vidéos entre autres ) et aux tarifs similaires à la Reolink {{ page.ref }}

Bref j'ai eu quelques jours pour tester tout de même le produit avant de le retourner et ainsi j'ai pu rédiger ce petit article.

## Déballage

Reolink fabrique du matériel de bonne qualité, il en est de même pour l'emballage, ce carton bleu renferme, une notice, la caméra et tout le nécessaire pour la fixer et la brancher en rj45.

{% picture posts/{{ page.guid }}/deballage-unboxing-camera-reolink-trackmix-poe.png --alt déballage caméra reolink trackmix poe --img width="940" height="529" %}


## La caméra {{ page.ref }}

J'ai acheté cette caméra 165€, et si tu désires te la procurer mais que tu n'es pas pressé sur le site Veepee il y a régulièrement des offres à 115€.
Et je dois dire qu'elle est vraiment qualitative, le bloc électronique est constitué d'aluminium quand à la tête recevant l'objectif, elle est en abs. le support de fixtion est lui aussi en aluminium, un plus.

{% picture posts/{{ page.guid }}/detail-camera-reolink-trackmix-poe.png --alt détail optiques caméra reolink trackmix poe et taille réelle --img width="940" height="529" %}


La caméra Trackmix POE est une caméra à double objectif, l'un standard pour filmer en grand angle tandis que la seconde permet de gérer le zoom et l'autotrack, malheureusement ces deux caméras sont dépendantes l'une de l'autre, j'aurai aimé avec une double rotation afin de pouvoir couvrir deux zones en même temps, ce n'est pas le cas. Sur la tête on retrouve les voyants infrarouge pour la vision nocturne ainsi que deux gros voyants blanc pour l'éclairage couleurs en faible luminosité.

La qualité d'image est excellente de jours comme de nuit et même en faible luminosité

Enfin on retrouve sur la partie arrière le branchement rj45/électrique

{% picture posts/{{ page.guid }}/vue-avec-support-camera-reolink-trackmix-poe.png --alt vue avec support caméra reolink trackmix poe et taille réelle --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/trackmix-poe-specifications-dimensions-et-lentilles.png --alt dimension et lentilles caméra reolink trackmix poe --img width="940" height="529" %}

1. Led infrarouge
2. Objectif
3. Micro
4. Capteur lumière jour
5. Projecteur

Pour terminer je vais te parler des dimensions, et malheureusement c'est ce qui m'a fait regretter ce choix, elles sont tout simplement hors normes, et encore tu dois rajouter un support qui rend encore la hauteur plus imposante

{% picture posts/{{ page.guid }}/dimension-geante-camera-reolink-trackmix-poe.png --alt dimension imposante caméra reolink trackmix poe et taille réelle --img width="940" height="529" %}

Tu trouveras par exemple sur [makerworld](https://makerworld.com/fr/models/2181442-high-strength-reolink-trackmix-corner-mount#profileId-2367734){: target="_blank"} une impression intéressante pour fixer la caméra Reolink {{ page.ref }} dans un angle, [il en existe plein d'autres sur le web](https://www.google.com/search?sca_esv=ce9bda148a5d733d&sxsrf=ANbL-n53Xos0tn6KlRRuZiU6pIJ2g4lsKQ:1776785807210&udm=2&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpnZs8UoziVXl2LUkEbFKCT_RABk-hkcMrxQ7FKs8tssDqOO9ERJ6Y9GB2wlGE1PQxxRSOAfyqNiJErXYtGzsUbEp-FDLaT_jeMdmKGhNSo-pYTG6KIrKSEintiL4aoUnk5RL73DLMb7L_182uzCCWx3YieygwjcLoJvW_UOKQT3w569M3CmuF9sMyMYwqqEQ_V0kIQ-A&q=print+3d+trackmix+reolink&sa=X&ved=2ahUKEwiEx4X3ov-TAxXvKvsDHXDXOhkQtKgLegQIFBAB&biw=1920&bih=919&dpr=1#sv=CAMSVhoyKhBlLVhaY0tTU2pUbFJ6ckVNMg5YWmNLU1NqVGxSenJFTToOajk3TnlsTjZRY3hSb00gBCocCgZtb3NhaWMSEGUtWFpjS1NTalRsUnpyRU0YADABGAcgja7HjA9KCBABGAEgASgB){: target="_blank"}

{% picture posts/{{ page.guid }}/support-impression-3d-camera-reolink-trackmix-poe.png --alt exemple d'une impression 3d pour fixer la caméra reolink trackmix poe dans un angle --img width="940" height="529" %}

### Caractéristique technique {{ page.ref }}

**Vidéo et audio**

|Capteur d'image|Capteur CMOS 1/3" + 1/2,8"|
|Résolution vidéo|Jusqu’à 3840 x 2160 (8,0 mégapixels) à 25 images par seconde|
|Lentille|Fonction f=2.8mm@F=1.6 etf=8mm@F=1.6|
|Format vidéo|H.264, H.265|
|Champ de vision|Horizontal : 104° -38<br>Vertical : 60° -21|
|Mode zoom|Zoom hybride 6X|
|Jour et nuit|Filtre IR avec commutation automatique|
|Vision nocturne infrarouge|Jusqu’à 30 mètres (100 pieds) (LED : 2 pièces/850 nm)|
|Vision nocturne en couleur|Projecteurs : 2 pièces/6500 K/450 lumens|
|Audio|Audio bidirectionnel|

**Puissance**

|PoE|IEEE 802.3af, 48 V actif|
|Alimentation en courant continu|12,0 V CC⎓2 A, <12 W|

**Interface**

|Puissance|Port d’alimentation CC|
|Système|Bouton de réinitialisation|
|Ethernet|Un port RJ45 10 M/100 Mbps|
|Stockage|Emplacement pour carte Micro SD (max. 512 Go)|
|Audio|Microphone et haut-parleur intégrés|

**Pan & Tilt**

|Gamme Pan & Tilt|Panoramique : 355°, inclinaison : 0°~ 90|
|Vitesse panoramique|2,5°-90°/s (vitesse réglable)|
|Vitesse d'inclinaison|1,5°-60°/s (vitesse réglable)|
|Points prédéfinis|32|
|Suivi automatique|OUI|

**Caractéristiques du logiciel**

|Taux de rafraîchissement|Flux principal : 2 i/s – 25 i/s<br>Flux secondaire : 4 i/s – 20 i/s|
|Taux de codage|Flux principal : 4096 Kbps - 8192 Kbps<br>Sous flux : 128 Kbps - 1228 Kbps|
|Navigateurs pris en charge|Edge, Chrome, Firefox, Safari|
|Système d'exploitation supporté|PC : Windows, Mac OS ; Smartphone : iOS, Android|
|Alarmes intelligentes|Détection de mouvement<br>détection de personnes<br>détection de véhicules<br>détection d’animaux|
|Modes d'enregistrement|Enregistrement déclenché par le mouvement (par défaut)<br>enregistrement programmé<br>enregistrement 24 h/7 j|
|Méthode de suivi|Suivi numérique<br>suivi panoramique/inclinaison en premier<br>suivi numérique en premier|
|Protocoles et normes|HTTPS, SSL, TCP/IP, UDP, HTTP, IPv4, UPnP, RTSP, RTMP, SMTP, NTP, DHCP, DNS, DDNS, FTP, P2P|
|Accès maximal de l'utilisateur|"Supporte jusqu’à 20 utilisateurs (1 compte administrateur et 19 comptes utilisateurs)<br>jusqu’à 12 flux vidéo simultanés (10 sous-flux et 2 flux principaux)"|
|Fonctionne avec|Assistant Google|

**Environnement de travail**

|Température de fonctionnement|-10 °C à +55 °C (14 °F à 131 °F)|
|Humidité de fonctionnement|10% à 90%|
|Étanchéité|IP65|
|Taille|Dimensions 228 x 147 x 110 mm|
|Poids|1,21 kg|

**Garantie limitée de 2 ans**. Pour obtenir de l’aide, rendez-vous sur https://support.reolink.com/hc/en-us/.



## le logiciel Reolink

Reolnk fourni un logiciel et une intégration à home assistant très plus que satisfaisante, il est disponible pour Android et Apple, je n'en parle pas vraiment dans cet article, mais si tu ressens le besoin fait le moi savoir.

{% picture posts/{{ page.guid }}/rendu-sommaire-application-smartphone.png --alt Rendu des deux caméras disponible avec la reolink trackmix poe --img width="270" height="600" %}

{% include qrlink.html qrlink="https://play.google.com/store/apps/details?id=com.mcu.reolink&hl=fr" text="télécharger l'application Reolink sur le playstore" realtextlink="Application Reolink Playstore Android" %}

{% include qrlink.html qrlink="https://apps.apple.com/fr/app/reolink/id995927563" text="télécharger l'application Reolink sur l' Apple store" realtextlink="Application Reolink Apple store" %}

Ce que ne permet pas le logiciel
- choix du mode de compressions des images tu n'aura d'autres choix que d'utiliser h265 ou h264

{% include product-embed.html image="camera-reolink-trackmix-poe.png" title="Trackmix Poe" brand="Reolink" description="Reolink PTZ 4K Caméra Extérieur PoE, Double Objectif, Zoom Hybride 6X, Suivi Automatique, Vision Nocturne en Couleur, Détection de Personne/Véhicule/Animal, Audio Bidirectionnel, TrackMix PoE" amazlink="4vDrDSF" %}

{% include product-embed.html image="camera-reolink-trackmix-poe-gris.png" title="Trackmix Poe Gris" brand="Reolink" description="Reolink PTZ 4K Caméra Extérieur PoE, Double Objectif, Zoom Hybride 6X, Suivi Automatique, Vision Nocturne en Couleur, Détection de Personne/Véhicule/Animal, Audio Bidirectionnel, TrackMix PoE" amazlink="4sHS075" %}

## Reolink pour Home Assistant

{% picture posts/{{ page.guid }}/reolink-application-officielle.png --alt Application officielle reolink pour home assistant disponible par défaut --img width="674" height="303" %}

Page dédiée à la marque [Reolink sur le site Home-Assistant](https://www.home-assistant.io/integrations/reolink/){: target="_blank"}

{% picture posts/{{ page.guid }}/application-officielle-reolink-home-assistant.png --alt Application officielle reolink pour home assistant --img width="940" height="702" %}

{% picture posts/{{ page.guid }}/application-officielle-reolink-home-assistant-nombreuse-entite.png --alt Nombreuses entités disponible avec l'application officielle reolink pour home assistant --img width="693" height="746" %}

Application Reolink mise à jour régulièrement sur [github](https://github.com/home-assistant/core/tree/dev/homeassistant/components/reolink){: target="_blank"}

## Frigate

Code complet pour les 3 flux

{% highlight yaml %}
{% raw %}

# accelerateur materiel
ffmpeg:
  hwaccel_args: preset-vaapi
  output_args:
    record: preset-record-generic-audio-copy
  global_args: -hide_banner -loglevel verbose

# Caméra Reolink Trackmix P710
cameras:

  parking:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/parking_main
          input_args: preset-rtsp-restream
          roles:
            - record
            - audio
        - path: rtsp://127.0.0.1:8554/parking_sub
          input_args: preset-rtsp-restream
          roles:
            - detect
    detect:
      width: 896
      height: 512
    live:
      streams:
        Main Stream: parking_main
        Sub Stream: parking_sub

    onvif:
      host: [IP-CAMERA]
      port: 8000
      user: [LOGIN-CAMERA]
      password: [PASS-CAMERA]
      tls_insecure: false
      ignore_time_mismatch: false

  parking_autotrack:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/parking_autotrack
          roles:
            - record
    detect:
      width: 1920
      height: 1080
    live:
      streams:
        Zoom Stream: parking_autotrack

    onvif:
      host: [IP-CAMERA]
      port: 8000
      user: [LOGIN-CAMERA]
      password: [PASS-CAMERA]
      tls_insecure: false
      ignore_time_mismatch: false

go2rtc:
  rtsp:
    username: [LOGIN-CAMERA]
    password: [PASS-CAMERA]
  webrtc:
    candidates:
      - [IP-FRIGATE]:8555
      - stun:8555

  streams:
    parking_main:
      - ffmpeg:rtsp://[LOGIN]:[PASS]@[IP-CAMERA]:554/h264Preview_01_main#input=rtsp/udp
      - rtsp://[LOGIN]:[PASS]@[IP-CAMERA]:554/h264Preview_01_sub
    parking_sub:
      - ffmpeg:rtsp://[LOGIN]:[PASS]@[IP-CAMERA]:554/h264Preview_01_sub#input=rtsp/udp
    parking_autotrack:
      - ffmpeg:rtsp://[LOGIN]:[PASS]@[IP-CAMERA]:554/Preview_01_autotrack#input=rtsp/udp

{% endraw %}
{% endhighlight %}

{% picture posts/{{ page.guid }}/camera-principale-detectee-dans-frigate.png --alt rendu et détection caméra principale dans frigate --img width="940" height="456" %}

{% picture posts/{{ page.guid }}/camera-secondaire-autotrack-avec-zoom-actif-detectee-dans-frigate.png --alt rendu et détection caméra secondaire dans frigate --img width="940" height="456" %}

{% picture posts/{{ page.guid }}/rendu-frigate-card-camera-grand-angle-reolink-trackmix-poe-home-assistant.png --alt rendu camera principal dans home assistant grâce à la frigate card dédiée pour la caméra principale controle orientation --img width="554" height="341" %}

{% picture posts/{{ page.guid }}/rendu-frigate-card-dans-home-assistant-pour-camera-autotrack-avec-zoom-fonctionnel.png --alt Rendu seconde caméra avec détection autotrack et zoom actif dans home assistant grâce à la frigate card --img width="554" height="341" %}

## Conclusion

Reolink propose encore une fois un produit exceptionnel, la qualité et le fonctionnement est au rendez-vous et bien supérieur à d'autre marques, le logiciel Reolink sur smartphone et la web app fonctionnent bien, je déplore un manque de fonctions quand aux réglages comme la gestion des compressions d'images et audios. L'intégration dans Home Assistant est parfaite et très complète, quand à l'intégration dans frigate elle se fait sans soucis majeures, la fonction autotrack est indisponible mais contournable.

> Côté matériel tout est presque parfait, côté SAV rencontré sur Reolink manque cruellement de sérieux.


