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
image: 'picture.png'
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

## La caméra {{ page.ref }}

J'ai acheté cette caméra 165€, et si tu désires te la procurer mais que tu n'es pas pressé sur le site Veepee il y a régulièrement des offres à 115€.
Et je dois dire qu'elle est vraiment qualitative, le bloc électronique est constitué d'aluminium quand à la tête recevant l'objectif, elle est en abs. le support de fixtion est lui aussi en aluminium, un plus.

La caméra Trackmix POE est une caméra à double objectif, l'un standard pour filmer en grand angle tandis que la seconde permet de gérer le zoom et l'autotrack, malheureusement ces deux caméras sont dépendantes l'une de l'autre, j'aurai aimé avec une double rotation afin de pouvoir couvrir deux zones en même temps, ce n'est pas le cas. Sur la tête on retrouve les voyants infrarouge pour la vision nocturne ainsi que deux gros voyants blanc pour l'éclairage couleurs en faible luminosité.

La qualité d'image est excellente de jours comme de nuit et même en faible luminosité

Enfin on retrouve sur le dessus le branchement rj45/électrique

Pour terminer je vais te parler des dimensions, et malheureusement c'est ce qui m'a fait regretter ce choix, elles sont tout simplement hors normes, et encore tu dois rajouter un support qui rend encore la hauteur plus imposante

## le logiciel Reolink

Reolnk fourni un logiciel et une intégration à home assistant très plus que satisfaisante, il est disponible pour Android et Apple


{% include qrlink.html qrlink="https://play.google.com/store/apps/details?id=com.mcu.reolink&hl=fr" text="télécharger l'application Reolink sur le playstore" realtextlink="Application Reolink Playstore Android" %}

{% include qrlink.html qrlink="https://apps.apple.com/fr/app/reolink/id995927563" text="télécharger l'application Reolink sur l' Apple store" realtextlink="Application Reolink Apple store" %}


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

{% include product-embed.html image="camera-reolink-trackmix-poe.png" title="Trackmix Poe" brand="Reolink" description="Reolink PTZ 4K Caméra Extérieur PoE, Double Objectif, Zoom Hybride 6X, Suivi Automatique, Vision Nocturne en Couleur, Détection de Personne/Véhicule/Animal, Audio Bidirectionnel, TrackMix PoE" amazlink="4vDrDSF" %}

{% include product-embed.html image="camera-reolink-trackmix-poe-gris.png" title="Trackmix Poe Gris" brand="Reolink" description="Reolink PTZ 4K Caméra Extérieur PoE, Double Objectif, Zoom Hybride 6X, Suivi Automatique, Vision Nocturne en Couleur, Détection de Personne/Véhicule/Animal, Audio Bidirectionnel, TrackMix PoE" amazlink="4sHS075" %}
