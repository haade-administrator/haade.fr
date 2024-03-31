---
guid: 107
title: "Google Coral AI et Frigate"
description: "Sur mon NAS privé j'utilise comme NVR frigate, et il est fortement recommandé d'utiliser Google Coral AI, comment agit ce composant sur la puissance du NVR"
ref: "Google Coral AI"
layout: post
authors: Nico
date: 2024-02-05 06:20
last_modified_at: 
categories: [Securite, Domotique, Tests]
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
locale: fr_FR
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

Un petit tuto pour te montrer **les bienfaits d'un google coral** dans ton NAS. J'utilise le [**NVR frigate**](https://frigate.video/){: target="_blank"} qui traite par l'ia les images afin d'interpréter une détection d'objet et rendre une conclusion sur l'état. C'est sympa, pratique, mais quand tu n'utilises pas google Coral **ça consomme un MAX de RAM et CPU**.

{% include product-embed.html image="google-coral-pciexpress-m2.jpg" title="Google Coral AI pci-express et M.2" brand="Google Coral" description="Google Coral AI Mini PCIe M.2 Accelerateur TPU A + E et B + M Key" affiliate="_DC7cNG1" %}

## Installation et paramétrage d'un google Coral

### étape 1 installation du software sur ton système

j'utilise un coral M.2 pci sur debian, [donc je suis l'intallation préconisée par Google](https://coral.ai/docs/m2/get-started/#1-connect-the-module){: target="_blank"}

{% highlight shell %}
uname -r # version kernel
lsmod | grep apex
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list
sudo apt install curl
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
sudo apt update
sudo apt install gasket-dkms libedgetpu1-std
lspci -nn | grep 089a # réponse 03:00.0 System peripheral: Device 1ac1:089a
reboot
ls /dev/apex_0 # réponse /dev/apex_0
{% endhighlight %}

### Seconde étape Frigate

J'utilise frigate sur un docker n'oublie pas de renseigner le device **/dev/apex_0:/dev/apex_0** comme dans le docker-compose.yaml ci-dessous

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

### Dernière étape Frigate config.yaml

dans le fichier **config.yaml** de frigate rajoute je detecteur google Coral comme le fichier ci-dessous et redémarre frigate. 

{% highlight yaml %}

detectors:
  coral:
    type: edgetpu
    device: pci # ou usb selon ton matériel
{% endhighlight %}

[erreur google coral](https://docs.frigate.video/troubleshooting/edgetpu/#pcie-coral-not-detected)

Voilà c'est terminé **vérifie les logs** que le google coral est bien **reconnu dans frigate**.

{% picture posts/{{ page.guid }}/google-coral-found-on-frigate.png --alt les logs de l'interface ui de frigate te permettent de vérifier la bonn prise en charge de google coral --img width="940" height="432" %}

## Google Coral TPU

Il est fortement recommandé d'utiliser un Google Coral. Un appareil à 50€ surpassera un processeur à 1800€. Frigate devrait fonctionner avec n'importe quel appareil Coral pris en charge sur [https://coral.ai](https://coral.ai){: target="_blank"}

> La version USB est compatible avec la plus grande variété de matériels et ne nécessite pas de pilote sur la machine hôte. Cependant, il lui manque les fonctionnalités de limitation automatique des autres versions.

## Qu'est-ce que l'inférence dans le monde de l'IA

**Dans le monde de l'IA (intelligence artificielle), l'inférence** est l'art de tirer des conclusions et de prendre des décisions en utilisant la puissance des informations ou des données disponibles. Il s'agit d'un processus cognitif qui va au-delà de la simple interprétation des données et qui permet de générer de nouvelles idées et conclusions à partir de connaissances ou d'ensembles de données existants.

Dans le domaine de la vision artificielle, elle permet aux machines de reconnaître des objets dans des images, en identifiant des modèles et des caractéristiques.

L'inférence dans l'IA (intelligence artificielle) se présente sous deux formes principales : déductive et inductive. L'inférence déductive implique l'application de principes généraux pour parvenir à des conclusions spécifiques, tandis que l'inférence inductive fonctionne à l'inverse, décodant des principes généraux ou des règles à partir d'observations spécifiques ou de modèles de données.

Dans le domaine de la vision artificielle, elle permet aux machines de reconnaître des objets dans des images, en identifiant des modèles et des caractéristiques.

Pour résumer, l'inférence est l'élément fondamental de la capacité de l'IA (intelligence artificielle) à raisonner, à apprendre et à prendre des décisions en connaissance de cause, ce qui lui confère les capacités de base nécessaires à la mise en œuvre de diverses caractéristiques des applications.

### Relève et contrôle inférence

Un seul Coral peut gérer plusieurs caméras et sera suffisant pour la majorité des utilisateurs. Vous pouvez calculer les performances maximales de votre Coral en fonction de la vitesse d'inférence signalée par Frigate. **Avec une vitesse d'inférence de 10**, votre Coral atteindra **1000/10=100, soit 100 images par seconde**. Si votre fps de détection s'en rapproche régulièrement, vous devez d'abord envisager de régler les masques de mouvement. Si ceux-ci sont déjà correctement configurés, un deuxième Coral peut être nécessaire.

{% picture posts/{{ page.guid }}/calcul-fps-ensemble-camera-google-coral.png --alt calcul total du nombre de fps sur 5 images pour contrôler si google coral suffit --img width="940" height="493" %}

Le google coral a une inférence de **6,2**, d'après le calcul ci-dessus il pourrait traiter: **1000/6.2= 161 images par secondes**, nous sommes actuellement sur  images à **83,4 images** par seconde, exactement à la moitié des capacités de traitemnt du google coral.

{% picture posts/{{ page.guid }}/affichages-systeme-frigate-google-coral-detector.png --alt affichage dans la config du google coral et du nombre de fps. --img width="548" height="259" %}

## Mon Install Frigate

L'installation Frigate comprend **5 caméras** en détections et en enregistrements

{% picture posts/{{ page.guid }}/capture-ecran-gestion-home-assistant-frigate-enregistrement-5-cameras.png --alt installation frigate de 5 caméras en détections et enregistrements. --img width="940" height="584" %}

### Relevé Puissance avant Google coral et accélération matérielle

Comme tu peux le constater ci-dessous **sans google coral et sans l'optimisation matérielle** j'atteint une moyenne de consommations de mémoires **RAM de 1.4GB**, quand à l'usage **CPU la moyenne est de 450%**, c'est énorme

{% picture posts/{{ page.guid }}/releve-conso-avant-google-coral-cpu-hwaccel-frigate.png --alt relevé puissance avant l'installation de google coral et l'accélération matérielle intel-vaapi. --img width="940" height="306" %}

### Relevé puissance avec Google Coral et sans l'accélération matérielle

Une fois le Google Coral installé la consommation mémoire **RAM oscille à 1,3GB** et la consommation de **l'usage CPU est aux alentours de 180%**, je rappelle que seule le google Coral AI est installé il n'y a toujours pas d'accélération matérielle

{% picture posts/{{ page.guid }}/releve-conso-apres-google-coral-frigate.png --alt relevé puissance après installation d'un google Coral mais avant l'accélération matériel --img width="940" height="309" %}

### Les arguments hwaccel sont-ils utiles si j'utilise un Coral ?
OUI! Le Coral n'aide pas au décodage des flux vidéo.

{% picture posts/{{ page.guid }}/affichages-systeme-frigate-google-coral-detector-hwacell-intel-vaapi.png --alt relevé système frigate avec installation d'un google Coral plus l'accélération matériel intel-vaapi --img width="548" height="634" %}

**La décompression des flux vidéo nécessite une quantité importante de puissance CPU**. La compression vidéo utilise des images clés (également appelées images I) pour envoyer une image complète dans le flux vidéo. Les images suivantes incluent uniquement la différence par rapport à l'image clé, et le processeur doit compiler chaque image en fusionnant les différences avec l'image clé. Explication plus détaillée. **Des résolutions et des fréquences d'images plus élevées signifient qu'une plus grande puissance de traitement est nécessaire pour décoder le flux vidéo**, alors essayez de les régler sur la caméra pour éviter un travail de décodage inutile.

### Relevé puissance Google Coral + accélération matérielle

Une fois l'accélération matérielle intel-vaapi installé plus le fonctionnement du Google Coral la consommation de la mémoire **RAM passe à 0,8GB** et la consommation de **l'usage CPU passe à 30%.**

{% picture posts/{{ page.guid }}/releve-conso-apres-google-coral-et-cpu-intel-accelerator-frigate.png --alt relevé puissance après installation d'un google Coral intel Vaapiet avec l'accélération matérielle  --img width="940" height="311" %}

{% include product-embed.html image="google-coral-pciexpress-m2.jpg" title="Google Coral AI pci-express et M.2" brand="Google Coral" description="Google Coral AI Mini PCIe M.2 Accelerateur TPU A + E et B + M Key" affiliate="_DC7cNG1" %}

## Conclusion

Il ne suffit pas **d'installer un NVR** de paramétrer ses caméras et de laisser tourner, surtout si comme moi **tu possèdes un NAS Diy**. Si tu décides de faire en plus des captures vidéos et snapshot du contrôle d'objet alors il te faudra t'équiper **d'un google Coral**, et aussi **d'utiliser l'accélération matérielle** ainsi tu économiseras énormément de CPU et allongera la vie de ton processeur. 

> Nous sommes passés **d'une consommation de 1,4GB à 0,8GB de RAM et une conso CPU de 450% à 30%**, les chifres parlent d'eux mêmes.