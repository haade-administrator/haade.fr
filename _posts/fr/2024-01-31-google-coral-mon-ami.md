---
guid: 107
title: ""
description: ""
ref: ""
layout: post
author: Nico
date: 2024-01-31 12:24
last_modified_at: 
categories: [Docker, Domotique, Zigbee]
tags: []
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
  - https://coral.ai/
  - https://coral.ai/docs/m2/get-started/#requirements
  - https://coral.ai/software/
  - https://docs.frigate.video/frigate/hardware/#google-coral-tpu
  - https://docs.frigate.video/configuration/hardware_acceleration
---

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