---
guid: 173
title: "Installe facilement YoloV9 et rend la détection intelligente"    
description: "Voilà un mini-tutos qui va encore en intéresser plus d'un, yolo V9 roi de la détections d'objets installé en un clic"
ref: ""
layout: post
authors: [Nico]
date: 2026-04-06 21:40
last_modified_at: 
categories: [NAS, Mini-tutos]
tags: []
video: 
image: 'install-yolov9-facilementsur-frigate-avec-un-google-coral-avec-superviseur-omv-8.png'
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
rating:  
sourcelink:
---
Yolo V9 est un gestionnaire de tâche, détecteur d'objet de pointe, **gratuit et ultra performant** il analysera les vidéos plus vite que l'éclair et t'évitera de nombreux faux positifs.

**Dans ce tuto je vais te montrer comment l'installer facilement** grâce à un répertoire github qui dans l'avenir devrait être intégré dans une futur mise à jour de frigate.

## Prérequis

- un NAS debian [Openmediavault](https://www.openmediavault.org/){: target="_blank"} de préférence en **version 8**
- un accélérateur matériel [Google coral](https://www.kubii.com/fr/cartes-embarquees/4454-m2-accelerator-ae-key-google-edge-tpu-193575003924.html?gad_source=1&gad_campaignid=22605710765&gbraid=0AAAAApc7Y9mDuJvxO2VpGA8cA2pYMj3SN&gclid=Cj0KCQjws83OBhD4ARIsACblj1-ukX-f4IrXXSJ_dRKQ1qwLEiN_Qr7CbGvL3a5w5ek2G8LJmm0GtoAaAsIGEALw_wcB){: target="_blank"} (pci ou usb) fonctionnel
- Un NVR, ici ce sera [Frigate](https://frigate.video/){: target="_blank"}
- optionnel [Home Assistant](https://www.home-assistant.io/){: target="_blank"}

> Ce tutos est dédié aux utilisateurs linuxiens qui ont certaines connaissances en docker et qui ont préalablement **installés un système debian avec une image frigate !**

## Installation

Pour commencer mon environnement est le suivant:
- **j'ai OMV d'installé en natif sur un serveur NAS pricipal** pas par le biais de proxmox, Docker et Docker compose sont paramétrés, avec une image Frigate fonctionnelle.
- **Je possède un google Coral en version M.2 (A+E)** installé à la place de la carte wifi. Si tu n'as pas encore paramétré cet accélérateur, [il y a quelques temps j'ai fait un mini-tutos reprenant une installation en quelques clics]({% post_url /fr/2026-01-16-installer-google-coral-gasket-sur-debian-13-ou-ovh-8-de-facon-automatisee %}). 

> Simple rapide et efficace, je te laisse consulter.

### Répertoire Github

Pour réaliser cette installation facilement et rapidement **dbro** a créé un répertoire complet qui a été mergé sur frigate, **cette installation est paramétré pour ne pas dépasser les 10ms d'analyses sur l'accélérateur google coral et frigate**, il a réussi cette prouesse grâce à de nombreux tests qui sont mêmes argumentés sur son référentiel.

[https://github.com/dbro/frigate-detector-edgetpu-yolo9](https://github.com/dbro/frigate-detector-edgetpu-yolo9){: target="_blank"}

### Mise en place

Partons du principe que ton installation Frigate est basée sur docker à l'aide d'un fichier docker-compose

Voici un exemple docker-compose basé sur une de mes installations.

{% highlight docker %}
---
services:
  frigate:
    container_name: frigate
    privileged: true # this may not be necessary for all setups
    restart: unless-stopped
    stop_grace_period: 30s # allow enough time to shut down the various services
    image: ghcr.io/blakeblackshear/frigate:stable
    shm_size: "276mb" # update for your cameras based on calculation above
    devices:
      - /dev/apex_0:/dev/apex_0
      - /dev/dri/renderD128:/dev/dri/renderD128 
      - /dev/dri/card0:/dev/dri/card0
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /Frigate/config:/config
      - /export/videosurveillance:/media/frigate

      - type: tmpfs # Optional: 1GB of memory, reduces SSD/SD Card wear
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "5000:5000" # Internal unauthenticated access. Expose carefully.
      - "8554:8554" # RTSP feeds
      - "8555:8555/tcp" # WebRTC over tcp
      - "8555:8555/udp" # WebRTC over udp
      - "8971:8971"
    environment:
      FRIGATE_RTSP_PASSWORD: "password"
{% endhighlight %}

Dans mon fichier tu retrouves les lignes d'accélérations matérielles pour le google coral `/dev/apex_0:/dev/apex_0` et `/dev/dri/renderD128:/dev/dri/renderD128 `

Voilà ce que propose **Dbro**

Tout d'abord installe sur ton NAS et non dans le container frigate les utilitaires après avoir effectué une mise à jour debian `sudo apt update && sudo apt upgrade`

{% highlight shell%}
sudo mkdir -p /opt/frigate-plugins
cd /opt/frigate-plugins
# download weights
sudo wget https://github.com/dbro/frigate-detector-edgetpu-yolo9/releases/download/v1.0/yolov9-s-relu6-best_320_int8_edgetpu.tflite
# download plugin
sudo wget https://raw.githubusercontent.com/dbro/frigate-detector-edgetpu-yolo9/main/edgetpu_tfl.py
# download labels
sudo wget https://raw.githubusercontent.com/dbro/frigate-detector-edgetpu-yolo9/main/labels-coco17.txt
{% endhighlight %}

Ensuite met à jour ton docker files en intégrant 3 lignes **dans l'onglet volume**

{% highlight docker %}
# ... other services ...
frigate:
  # ... other frigate configurations ...
  volumes:
    # ... existing volumes ...
    - /opt/frigate-plugins/edgetpu_tfl.py:/opt/frigate/frigate/detectors/plugins/edgetpu_tfl.py:ro
    - /opt/frigate-plugins/labels-coco17.txt:/opt/frigate/models/labels-coco17.txt:ro
    - /opt/frigate-plugins/yolov9-s-relu6-best_320_int8_edgetpu.tflite:/opt/frigate/models/yolov9-s-relu6-best_320_int8_edgetpu.tflite:ro
  # ... rest of frigate service ...
  {% endhighlight %}

  
Il ne te reste plus qu'à remonter les volumes

{% highlight shell %}
docker-compose down
docker-compose up -d
{% endhighlight %}

### Dernière étape configurer Frigate

Maintenant que tout est installé sur ton image il ne te reste plus qu'à configurer le fichier config.yml de Frigate. **Au dessus de tes ligne du detector intègre le model de détection:**

{% highlight yaml %}
model:
  model_type: yolo-generic
  labelmap_path: /opt/frigate/models/labels-coco17.txt
  path: /opt/frigate/models/yolov9-s-relu6-best_320_int8_edgetpu.tflite
  # Optionally specify the model dimensions (these are the same as Frigate's default 320x320)
  width: 320
  height: 320

# Google coral m2
detectors:
  coral:
    type: edgetpu
    device: pci
{% endhighlight %}

Redémarre frigate **consulte les journaux et la métrique du système** et le tour est joué. 

> Il ne te reste plus qu'à paramétrer correctement les détections d'objets dans le config.yaml de frigate pour te rendre compte des bonnes performances.

Pour les **journaux systèmes** tu dois retrouver le message: ***Initializing edgetpu detector with support for SSD and YOLOv9 models***

{% picture posts/{{ page.guid }}/journaux-systeme-frigate-prise-en-charge-yolov9.png --alt Consigne yolo v9 pris en charge dans frigate avec google coral --img width="940" height="507" %}

Dans la **métrique système** tu pourras te rendre compte que **la vitesse d'inférence du détecteur** est en dessous de **10ms** pour la capture ci-dessous **c'est 9.34ms** ce qui est bon. Et ceci grâce à un model bien défini en capture 320px.

{% picture posts/{{ page.guid }}/metrique-system-yolov9-frigate-google-coral-9ms.png --alt controle de la metrique système et le suivi d'inférence google coral inférieur à 10ms --img width="940" height="507" %}

## Conclusion

Voilà en **2 manipulations** tu a rendu ton NVR encore plus intelligent **le combo Google Coral / Yolo V9 va sublimer les détections et optimiser les performances** de frigate et rendre ta domotique Home Assistant plus subtile.

