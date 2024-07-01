---
guid: 132
title: "Fabriquer un NAS performant et pas cher"
description: "Petit tutos comment fabriquer un NAS pas cher multi disque d'occasaion grâce à Amazon reviewed et installer un serveur VM proxmox pour OMV ou TrueNAS."
ref: ""
layout: post
authors: [Nico]
date: 2024-07-01 12:05
last_modified_at: 
categories: [Haade-lab, News]
tags: []
video: 
image: 'monter-nas-pas-cher-et-performant-proxmox-sans-disque-dur.png'
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
  - https://www.proxmox.com/en/
  - https://www.domo-blog.fr/creer-serveur-virtualisation-proxmox-installer-home-assistant-simplement/
  - https://www.cachem.fr/home-assistant-installation-proxmox/
---

Tu trouveras sur internet plusieurs façons de faire des mini-pc NAS à base de mini-pc performant mais pour une performance équivalente à de l'intel i5 ou i7 les prix peuvent vite s'envoler. Ce type de tutos n'est pas le premier sur la toile mais je vais te proposer une façon simple de faire un NAS à base de matériel intel i5 reconditionnés et pas cher et te montrer comment installer OMV ou Truenas sur proxmox pour la gestion de l'ensemble. Petite cerise sur le gâteau tu pourras en parallèle installer de manière simple HomeAssistant OS (HAOS) et le gestionnaire NVR Frigate grâce aux VM Proxmox et ainsi Allier facilement NAS et Domotique sur le système.

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Prérequis

- Un Mini PC Lenovo ou HP reconditionné avec Intel I5 minimum
- 8 GO DDram minimum
- 128GO de disque dur
- Une station d'accueil DD avec **USB 3.0**
- une clé USB (pour intégrer Proxmox)

## Le Coeur du système

{% include product-embed.html image="lenovo-thincentre-M710Q.png" brand="Lenovo" description="<b>(155€)</b> Lenovo ThinkCentre M710q Tiny Intel Quad Core i5 256 Go SSD 8 Go Mémoire Windows 11 Pro avec W-LAN Business Desktop Computer Mini PC (reconditionné)" amazlink="3RLQGRe" %}

{% include product-embed.html image="hp-elitedesk-800-G2-i5.png" brand="HP" description="<b>(114€)</b> HP EliteDesk 800 G2 Ordinateur de Bureau Mini USDT Intel Quad Core i5 256 Go SSD 8 Go Win 10 Pro MAR Ultra Slim Mini PC (reconditionné)" amazlink="4cFkff9" %}

[Fiche technique HP Elitedesk 88 g2](https://support.hp.com/ch-fr/document/c04849385){: target="_blank}

{% include product-embed.html image="orico-bay-5-disques-SATA-usb3.png" brand="Orico" description="<b>(87 - 119€)</b> ORICO Station d'accueil USB 3.0 pour Disques Durs/SSD 2,5 et 3,5 pouces, HDD Dock Externe sans Outil, Prise en Charge Clonage Hors Ligne, Capacité Jusqu'à 5 x 18TB (6558US3-C)" affiliate="_DERFPQJ" amazlink="4bpk6LW" %}

## Proxmox

{%- include alert.html type="info" text="Si tu utilises ZFS sur Proxmox ou à travers Proxmox je te conseil vivement d'augmenter la capacité de mémoire à 32GO" link="https://amzn.to/4cABQVK" textlink="Mémoire Crucial SODIMM DDR4" %}

[Lien téléchargement Proxmox VE 8.2.X au format iso](https://www.proxmox.com/en/downloads){: target="_blank}

[Script d'installations shel automatisés pour Proxmox VE](https://tteck.github.io/Proxmox/){: target="_blank}

## Connection à Proxmox en SSH

### Avec Linux et un terminal

{% highlight shell %}
ssh -p 22 mon-adresse-ip -l nom-utilisateur
{% endhighlight %}

### Avec Putty

{% picture posts/{{ page.guid }}/ssh-connection-putty.png --alt Connection ssh avec putty sous proxmox --img width="613" height="556" %}

### Désactiver le mode entreprise

Il faut modifier le fichier de dépôt **pour désactiver le mode entreprise**. Pour ce faire jouer les commandes ci-dessous :

{% highlight shell %}
rm /etc/apt/sources.list.d/pve-enterprise.list
{% endhighlight %}

{% highlight shell %}
echo '# Proxmox community package repository' >> /etc/apt/sources.list
echo 'deb http://download.proxmox.com/debian/pve bookkworm pve-no-subscription' >> /etc/apt/sources.list
{% endhighlight %}


1. Maintenant, il faut mettre à jour et installer les dépendances, une étape classique sous Linux.

{% highlight shell %}
apt clean && apt update
apt install ifupdown2 openvswitch-switch -y
{% endhighlight %}

### Désactiver l’affichage sur l’écran du serveur au bout de 60 secondes

Afin **d'optimiser l'économie d'énergie** il est possible de désactiver l’affichage de l’écran au bout de 60 secondes.

**Pour cela, éditez le fichier suivant:**

{% highlight shell %}
nano /etc/default/grub
{% endhighlight %}

Puis modifie la ligne GRUB_CMDLINE_LINUX=”” par:

{% highlight shell %}
GRUB_CMDLINE_LINUX="consoleblank=60"
{% endhighlight %}

Enfin, applique le changement:

{% highlight shell %}
update-grub
{% endhighlight %}

### Effectue les mises à jours du serveur

{% highlight shell %}
pveupgrade
{% endhighlight %}

## OMV

[Script d'installations shell OMV automatisés pour Proxmox VE](https://tteck.github.io/Proxmox/#openmediavault-lxc){: target="_blank}

En règle général 8GO de mémoire sodimm DDR4 en 2133Mhz suffisent pour faire tourner ces 3 VM, ccependant si tu décides de monter un RAID en ZFS il te faudra davantage de mémoires je te conseil donc d'en rajouter/remplacer suivant le pc choisis.

Regarde les caractéristiques de ton PC dans mon cas ce sont des SODIMM DDR4 2400Mhz:

{% include product-embed.html image="ram-crusial-sodimm-2400.png" brand="Crucial" description="<b>(2x38€)</b> RAM CT16G4SFD824A 16Go DDR4 2400MHz CL17 Mémoire d’ordinateur Portable" amazlink="4cABQVK" %}

## TrueNas

{% include videoPlayer.html youtubeId="va99DvC2rdk" %}


## Home Assistant

## Frigate NVR

[Frigate NVR](https://frigate.video/){: target="_blank}

[Frigate NVR Documentation](https://docs.frigate.video/){: target="_blank}

[Frigate google Coral](https://docs.frigate.video/){: target="_blank}

### Google Coral A+E M2 key
Si tu utilises Frigate je te conseil vivement d'utiliser un Google Coral et si comme moi tu utilises un PC Lenovo Thinkcentre M710Q tu pourras connecter le coral à la place de la carte WIFI M2 interne enfin si tu n'as pas besoin du WIFI ( certains pc n'ont pas la carte wifi intégré mais le socket est bien présent. )

[Achat google coral tarif intéressant A+E M2key sur BuyZero](https://buyzero.de/products/google-coral-m-2-accelerator-a-e-key?_pos=2&_sid=938384f21&_ss=r){: target="_blank"}

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Conclusion