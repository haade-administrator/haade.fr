---
guid: 107
title: "Google Coral AI and Frigate"
description: "On my private NAS I use as a frigate NVR, and it is strongly recommended to use Google Coral AI, how does this component act on the power of the NVR"
ref: "Google Coral AI"
layout: post
author: Nico
date: 2024-02-05 06:20
last_modified_at: 
categories: [Security, Automation, Tests]
tags: []
image: 'test-google-coral-frigate-home-assistant-ai-fait-il-le-job.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: en_GB
comments: true
rating: 5.0
sourcelink:
  - https://coral.ai/
  - https://coral.ai/docs/m2/get-started/#requirements
  - https://coral.ai/software/
  - https://docs.frigate.video/frigate/hardware/#google-coral-tpu
  - https://docs.frigate.video/configuration/hardware_acceleration
  - https://frigate.video/
---

A little tutorial to show you **the benefits of a Google Coral** in your NAS. I use the [**NVR frigate**](https://frigate.video/){: target="_blank"} which processes images using AI in order to interpret object detection and render a conclusion on the state. It's nice, practical, but when you don't use Google Coral **it consumes a MAXIMUM of RAM and CPU**.

{% include product-embed.html image="google-coral-pciexpress-m2.jpg" title="Google Coral AI pci-express and M.2" brand="Google Coral" description="Google Coral AI Mini PCIe M.2 Accelerator TPU A+E and B+M Key" affiliate="_DC7cNG1" %}

## Installation and configuration of a Google Coral

### step 1 installing the software on your system

I use a Coral M.2 PCI on Debian, [so I follow the installation recommended by Google](https://coral.ai/docs/m2/get-started/#1-connect-the-module){: target="_blank"}

{% highlight shell %}
uname -r # version kernel
lsmod | grep apex
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list
sudo apt install curl
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
sudo apt update
sudo apt install gasket-dkms libedgetpu1-std
lspci -nn | grep 089a # responce 03:00.0 System peripheral: Device 1ac1:089a
reboot
ls /dev/apex_0 # response /dev/apex_0
{% endhighlight %}

### Second stage Frigate

I use frigate on a docker don't forget to enter the device **/dev/apex_0:/dev/apex_0** as in docker-compose.yaml below

{% highlight yaml %}
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
      - /dev/dri/renderD128
      - /dev/dri/card0
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /..../..../Frigate/config:/config
      - /..../..../Frigate:/media/frigate
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
{% endhighlight %}

### Last step Frigate config.yaml

in the frigate **config.yaml** file I add the Google Coral detector like the file below and restart frigate.

{% highlight yaml %}

detectors:
  coral:
    type: edgetpu
    device: pci # or usb depending on your equipment
{% endhighlight %}

[error google coral](https://docs.frigate.video/troubleshooting/edgetpu/#pcie-coral-not-detected)

That's it, **check the logs** that the google coral is indeed **recognized in frigate**.

{% picture posts/{{ page.guid }}/google-coral-found-on-frigate.png --alt the logs of the frigate ui interface allow you to check the correct support for google coral --img width="940" height="432" %}

## Google Coral TPU

It is strongly recommended to use a Google Coral. A €50 device will outperform a €1800 processor. Frigate should work with any supported Coral device at [https://coral.ai](https://coral.ai){: target="_blank"}

> The USB version is compatible with the widest variety of hardware and does not require a driver on the host machine. However, it lacks the automatic throttling features of other versions.

## What is inference in the world of AI

**In the world of AI (artificial intelligence), inference** is the art of drawing conclusions and making decisions using the power of available information or data. It is a cognitive process that goes beyond simply interpreting data and helps generate new ideas and conclusions from existing knowledge or data sets.

In the field of machine vision, it allows machines to recognize objects in images, identifying patterns and features.

Inference in AI (artificial intelligence) comes in two main forms: deductive and inductive. Deductive inference involves the application of general principles to reach specific conclusions, while inductive inference works the opposite, decoding general principles or rules from specific observations or data patterns.

In the field of machine vision, it allows machines to recognize objects in images, identifying patterns and features.

To summarize, inference is the fundamental building block of AI (artificial intelligence)'s ability to reason, learn, and make informed decisions, giving it the basic capabilities needed to implement implementation of various application features.

### Reporting and inference control

A single Coral can manage multiple cameras and will be sufficient for the majority of users. You can calculate the maximum performance of your Coral based on the inference speed reported by Frigate. **With an inference speed of 10**, your Coral will reach **1000/10=100, or 100 frames per second**. If your detection fps is consistently getting close to this, you should consider adjusting the motion masks first. If these are already configured correctly, a second Coral may be necessary.

{% picture posts/{{ page.guid }}/calcul-fps-ensemble-camera-google-coral.png --alt total calculation of the number of fps on 5 images to check if google coral is enough --img width="940" height="493" %}

The google coral has an inference of **6.2**, according to the calculation above it could process: **1000/6.2= 161 frames per second**, we are currently on frames at **83, 4 images** per second, exactly half of the processing capabilities of Google Coral.

{% picture posts/{{ page.guid }}/affichages-systeme-frigate-google-coral-detector.png --alt display in the google coral config and the number of fps. --img width="548" height="259" %}

## My Install Frigate

The Frigate installation includes **5 cameras** in detection and recording

{% picture posts/{{ page.guid }}/capture-ecran-gestion-home-assistant-frigate-enregistrement-5-cameras.png --alt frigate installation of 5 cameras for detection and recording. --img width="940" height="584" %}

### Statement Power before Google coral and hardware acceleration

As you can see below **without google coral and without hardware optimization** I reach an average memory consumption **RAM of 1.4GB**, when using **CPU the average is by 450%**, it’s huge

{% picture posts/{{ page.guid }}/releve-conso-avant-google-coral-cpu-hwaccel-frigate.png --alt power reading before installing google coral and intel-vaapi hardware acceleration. --img width="940" height="306" %}

### Power reading with Google Coral and without hardware acceleration

Once the Google Coral is installed, the memory consumption **RAM oscillates at 1.3GB** and the consumption of **CPU usage is around 180%**, I remind you that only the Google Coral AI is installed. there is still no hardware acceleration

{% picture posts/{{ page.guid }}/releve-conso-apres-google-coral-frigate.png --alt power reading after installing a Google Coral but before hardware acceleration --img width="940" height="309" %}

### Are hwaccel arguments useful if I'm using a Coral?
YES! The Coral does not help with decoding video streams.

{% picture posts/{{ page.guid }}/displays-systeme-frigate-google-coral-detector-hwacell-intel-vaapi.png --alt frigate system survey with installation of a Google Coral plus hardware acceleration intel-vaapi --img width="548" height="634" %}

**Decompressing video streams requires a significant amount of CPU power**. Video compression uses keyframes (also called I-frames) to send a complete frame in the video stream. Subsequent frames only include the difference from the keyframe, and the processor must compile each frame by merging the differences with the keyframe. More detailed explanation. **Higher resolutions and frame rates mean more processing power is needed to decode the video stream**, so try setting these on-camera to avoid unnecessary decoding work.

### Google Coral power statement + hardware acceleration

Once the intel-vaapi hardware acceleration is installed plus the operation of the Google Coral, the memory consumption **RAM increases to 0.8GB** and the consumption of **CPU usage increases to 30%.**

{% picture posts/{{ page.guid }}/releve-conso-apres-google-coral-et-cpu-intel-accelerator-frigate.png --alt power reading after installing a Google Coral intel Vaapiet with hardware acceleration --img width="940" height="311" %}

{% include product-embed.html image="google-coral-pciexpress-m2.jpg" title="Google Coral AI pci-express and M.2" brand="Google Coral" description="Google Coral AI Mini PCIe M.2 Accelerator TPU A+E and B+M Key" affiliate="_DC7cNG1" %}

## Conclusion

It's not enough to **install an NVR**, configure your cameras and let it run, especially if like me **you have a DIY NAS**. If you decide to take additional video and snapshot captures of the object control then you will need to equip yourself **with a Google Coral**, and also **to use hardware acceleration** so you will save a lot of CPU and will extend the life of your processor.

> We went **from a consumption of 1.4GB to 0.8GB of RAM and a CPU consumption from 450% to 30%**, the figures speak for themselves.