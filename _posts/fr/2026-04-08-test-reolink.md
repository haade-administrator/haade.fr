---
guid: 174
title: "test Reolink Trackmix"
description: "test et intégration frigate et home assistant"
ref: ""
layout: post
authors: [Nico]
date: 2026-04-08 10:04
last_modified_at: 
categories: [Domotique, Haade-lab, Zigbee]
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
  - 
---

{% highlight yaml %}

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
      host: 192.168.1.35
      port: 8006
      user: admin
      password: C-K7+cG8
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
      host: 192.168.1.35
      port: 8006
      user: admin
      password: C-K7+cG8
      tls_insecure: false
      ignore_time_mismatch: false

go2rtc:
  rtsp:
    username: admin
    password: C-K7+cG8
  webrtc:
    candidates:
      - 192.168.1.127:8555
      - stun:8555

  streams:
    parking_main:
      - ffmpeg:rtsp://admin:C-K7+cG8@192.168.1.35:554/h264Preview_01_main#input=rtsp/udp
      - rtsp://admin:C-K7+cG8@192.168.1.35:554/h264Preview_01_sub
    parking_sub:
      - ffmpeg:rtsp://admin:C-K7+cG8@192.168.1.35:554/h264Preview_01_sub#input=rtsp/udp
    parking_autotrack:
      - ffmpeg:rtsp://admin:C-K7+cG8@192.168.1.35:554/Preview_01_autotrack#input=rtsp/udp
{% endhighlight %}
