---
guid: 107
title: "Google Coral AI et Frigate"
description: "Sur mon NAS privé j'utilise comme NVR frigate, et il est fortement recommandé d'utiliser Google Coral AI, comment agit ce composant sur la puissance du NVR"
ref: "Google Coral AI"
layout: post
author: Nico
date: 2024-01-31 12:24
last_modified_at: 
categories: [Securite, Domotique, Tests]
tags: []
image: 'test-google-coral-frigate-home-assistant-ai-fait-il-le-job.png'
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
rating: 5.0
sourcelink:
  - https://coral.ai/
  - https://coral.ai/docs/m2/get-started/#requirements
  - https://coral.ai/software/
  - https://docs.frigate.video/frigate/hardware/#google-coral-tpu
  - https://docs.frigate.video/configuration/hardware_acceleration
---

DÉFINITION DE L'INFÉRENCE DANS L'IA
Dans le monde de l'IA (intelligence artificielle), l'inférence est l'art de tirer des conclusions et de prendre des décisions en utilisant la puissance des informations ou des données disponibles. Il s'agit d'un processus cognitif qui va au-delà de la simple interprétation des données et qui permet de générer de nouvelles idées et conclusions à partir de connaissances ou d'ensembles de données existants.

L'inférence dans l'IA (intelligence artificielle) se présente sous deux formes principales : déductive et inductive. L'inférence déductive implique l'application de principes généraux pour parvenir à des conclusions spécifiques, tandis que l'inférence inductive fonctionne à l'inverse, décodant des principes généraux ou des règles à partir d'observations spécifiques ou de modèles de données.

L'inférence joue un rôle essentiel dans la recherche d'applications dans divers domaines. Par exemple, dans le traitement du langage naturel, elle aide à comprendre le sens des phrases grâce au contexte et aux connaissances préalables. Dans le domaine de la vision artificielle, elle permet aux machines de reconnaître des objets dans des images, en identifiant des modèles et des caractéristiques. En outre, en robotique, l'inférence est l'acteur clé de la planification et de l'exécution d'actions basées sur la compréhension de l'environnement.

En bref, l'inférence est l'élément fondamental de la capacité de l'IA (intelligence artificielle) à raisonner, à apprendre et à prendre des décisions en connaissance de cause, ce qui lui confère les capacités de base nécessaires à la mise en œuvre de diverses caractéristiques des applications.

```
version: "3.9"
services:
  frigate:
    container_name: frigate
    privileged: true # this may not be necessary for all setups
    restart: unless-stopped
    image: ghcr.io/blakeblackshear/frigate:stable
    shm_size: "88mb" # update for your cameras based on calculation above
    devices:
      - /dev/apex_0:/dev/apex_0
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /zfspool/Appdata/Frigate/config:/config
      - /zfspool/Sécurité/Télésurveillance/Frigate:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "5000:5000"
      - "8554:8554" # RTSP feeds
      - "8555:8555/tcp" # WebRTC over tcp
      - "8555:8555/udp" # WebRTC over udp
    environment:
      FRIGATE_RTSP_PASSWORD: "password"
```

```
# Google coral m2
detectors:
  coral:
    type: edgetpu
    device: pci
```

[erreur google coral](https://docs.frigate.video/troubleshooting/edgetpu/#pcie-coral-not-detected)

**Google Coral TPU**
It is strongly recommended to use a Google Coral. A $60 device will outperform $2000 CPU. Frigate should work with any supported Coral device from https://coral.ai

The USB version is compatible with the widest variety of hardware and does not require a driver on the host machine. However, it does lack the automatic throttling features of the other versions.

The PCIe and M.2 versions require installation of a driver on the host. Follow the instructions for your version from https://coral.ai

A single Coral can handle many cameras and will be sufficient for the majority of users. You can calculate the maximum performance of your Coral based on the inference speed reported by Frigate. With an inference speed of 10, your Coral will top out at 1000/10=100, or 100 frames per second. If your detection fps is regularly getting close to that, you should first consider tuning motion masks. If those are already properly configured, a second Coral may be needed.

**Do hwaccel args help if I am using a Coral?**
YES! The Coral does not help with decoding video streams.

Decompressing video streams takes a significant amount of CPU power. Video compression uses key frames (also known as I-frames) to send a full frame in the video stream. The following frames only include the difference from the key frame, and the CPU has to compile each frame by merging the differences with the key frame. More detailed explanation. Higher resolutions and frame rates mean more processing power is needed to decode the video stream, so try and set them on the camera to avoid unnecessary decoding work.