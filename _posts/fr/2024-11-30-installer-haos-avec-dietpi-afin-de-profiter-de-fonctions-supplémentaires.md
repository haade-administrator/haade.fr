---
guid: 146
title: "Installe Home Assistant OS sur Dietpi"
description: "Voilà un article pertinent pour installer HAOS sur Dietpi le système d'exploitation RPI à la diète ultra léger, pourquoi s'embêter à faire une telle installation alors qu'il existe une image toute faite HAOS pour raspberry pi ?"
ref: "DietPi"
layout: post
authors: [Nico]
date: 2024-11-30 19:10
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
video: 
image: 'dietpi-os-home-assistant-os-raspberrypi-lcd-display.png'
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
  - https://dietpi.com/
  - https://korben.info/dietpi-debian-ultra-legere-optimisee-raspberry-pi-odroid-pine64.html
---

Pourquoi **s'embêter** à installer Home Assistant OS sur [dietpi](https://dietpi.com/){: target="_blank"} alors qu'il existe une [image toute prête](https://www.home-assistant.io/installation/raspberrypi){: target="_blank"} à base de raspberry pi os Lite sur le site officiel, ou encore **plus simple** via le [software imager](https://www.raspberrypi.com/software/){: target="_blank"} développé par la fondation Raspberry PI qui contient l'image HAOS.

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

> J'ai décidé de faire cette installation pour **deux raisons** principales.

**La première**, Dietpi est une **image debian ultra légère** bien plus légère que raspberry pi os et ceux dans tous les domaines, il n'y a qu'à regarder le tableau **édité ci-dessous**. *Comment ont-ils réussis à faire ça !*, simplement en enlevant beaucoup de softwares et librairies par défaut et en optimisant l'OS, ainsi on pourras bénéficier du max de puissance de son SBC.

{% picture posts/{{ page.guid }}/dietpi-vs-raspberrypi-os-lite-rapsberry-pi-5.png --alt Comparatif Dietpi vs Raspberry pi OS lite --img width="940" height="401" %}

**La seconde** est liée à la première malgré cet allègement on retrouvera un **panel de fonctions à activer jamais inégalé** et ainsi on pourra installer **facilement un nombre pharaonique de soft** via **dietpi-software**, paramétrer les fonctions du raspberry pi via **detpi-config** et cerise sur le gateau **je n'ai rencontré aucun soucis**. 

{% include product-embed.html image="raspberry-pi-5-achat-amazon.png" title="Raspberry-pi 5 8GB" brand="Raspberry" description="Dernière génération du raspberry-pi avec 8GB de RAM" affiliate="_DD0v3TL" amazlink="3B5VpIa" %}

> Mais les fonctions ne s'arrêtent pas là !

Si vous aimez les OS ultra légers, type Raspberry Pi, Odroid et j’en passe, **alors DietPi est fait pour toi**. Il s’agit d’un système d’exploitation basé sur une Debian allégée dans le but de **consommer le moins de CPU et de RAM possible**.

{%- include alert.html type="info" text="<b>DietPi</b> | Une image minimale à la baseOS Debian minimal hautement optimisé. <b>DietPi est extrêmement léger</b>, avec des fonctionnalités de faible empreinte <b>processus/mémoire</b> et DietPi-RAM log installé par défaut, pour obtenir les performances maximales de votre appareil." link="https://dietpi.com/" textlink="Dietpi.com" %}

## Installation Dietpi sur Raspberry PI

J'ai réalisé l'installation sur un vieux **raspberry pi 3B+** qui trainait dans l'un de mes tiroirs avec **1GB de RAM** autant dire que c'est light, mais ça va le faire, vu les perfs annoncées je n'en doute pas trop !

Pour commencer [télécharge l'image correspondante](https://dietpi.com/#download){: target="_blank"} à ton SBC et copie là sur une sdcard à l'aide de [Balena Etcher](https://etcher.balena.io/){: target="_blank"} par exemple. Jusque là rien de bien compliqué du moins je l'espère 😁.

{% include product-embed.html image="sandisk-sdcard-256-extreme.png" title="Sdcard 256GB sandisk extrême" brand="Sandisk" description="Sdcard de qualité Sandisk pour raspberry pi" affiliate="_Dc6uJfL" amazlink="417XNZH" %}

{% picture posts/{{ page.guid }}/copy-image-dietpi-balena-etcher.png --alt Installation de l'image Dietpi à l'aide du software balena etcher --img width="400" height="258" %}

Une fois l'image copiée nous allons [**automatiser la première installation**](https://dietpi.com/docs/usage/#how-to-do-an-automatic-base-installation-at-first-boot-dietpi-automation){: target="_blank"}, oui tu as bien entendu avec Dietpi tu peux modifier 2-3 fichiers textes et paramétrer ce que tu veux avant **le premier lancement et ça c'est génial**.

### automatisation par les fichiers {{ page.ref }}

> Belle nouvelle Dietpi propose d'automatiser la première installation en modifiant simplement des fichiers textes à la source de la carte sd. 

{% picture posts/{{ page.guid }}/acces-volume-dietpi-config-txt.png --alt modification des fichier dietpi pour automatiser le premier lancement --img width="831" height="492" %}

#### dietpi.txt

Commençons par ce fichier qui est le principal fichier à paramétrer si tu souhaites personnaliser le premier lancement, je ne vais pas faire le tour de toutes les fonctions, mais plutôt celles qui me semble pertinente pour toutes nouvelles installations.

> Oui parce que tu vas vite te rendre compte que tu peux paramétrer pas mal de choses 👌.

Aussi je tiens à préciser que toutes cette configuration est **biensûre modifiable ultérieurement** par l'interface graphique et via la commande ```dietpi-config```

J'ai surtout modifié **les premiers paramètres** de language/régions sans avoir besoin de toucher aux autres paramètres par défaut comme la connection wifi car dans mes tests le raspberry pi est branché en rj45.

Si tu veux retrouver toutes les infos de configurations de dietpi tu peux les avoir via la [documentation oficielle très bien faite](https://dietpi.com/docs/dietpi_tools/system_configuration/){: target="_blank"}

Si tu as des questions plutôt pointus n'hésite [pas à consulter le forum](https://dietpi.com/forum/){: target="_blank"} dédié.

**Ci-dessous retrouve le fichier modifié pour les tests de cet article.**

{% include doclink.html md="dietpi.md" title="Fichier principal configuration dietpi.txt" %}

J'ai aussi pris une capture de ces modifications.

{% picture posts/{{ page.guid }}/entree-dietpi-config-txt.png --alt Configuration de dietpi.txt afin d'automatiser la première installation --img width="940" height="709" %}

{% highlight markdown %}
##### Language/Regional options #####
# Locale e.g.: "en_GB.UTF-8" / "de_DE.UTF-8" | One entry and UTF-8 ONLY!
AUTO_SETUP_LOCALE=fr_FR.UTF-8

# Keyboard layout e.g.: "gb" / "us" / "de" / "fr"
AUTO_SETUP_KEYBOARD_LAYOUT=fr

# Time zone e.g.: "Europe/London" / "America/New_York" | Full list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
AUTO_SETUP_TIMEZONE=Europe/Paris

##### Network options #####
# Enable Ethernet or WiFi adapter: 1=enable | 0=disable
# - If both Ethernet and WiFi are enabled, WiFi will take priority and Ethernet will be disabled.
# - If using WiFi, please edit dietpi-wifi.txt to pre-enter credentials.
AUTO_SETUP_NET_ETHERNET_ENABLED=1
AUTO_SETUP_NET_WIFI_ENABLED=0
{% endhighlight %}

Si tu souhaites faire une première installation en wifi tu peux bienentendu paramétrer en amont le réseau, toujours dans **dietpi.txt** rajoute **1** dans *network options* à la ligne ```AUTO_SETUP_NET_WIFI_ENABLED=1```, tu peux laisser **1** aussi ,```AUTO_SETUP_NET_ETHERNET_ENABLED=1``` ça ne change rien car si le **wifi est activé il sera utilisé par défaut**. Ensuite il faudra adapter le fichier **dietpi-wifi.txt**.

{% picture posts/{{ page.guid }}/entree-dietpi-config-wifi.png --alt Modification du fichier dietpi.txt pour lancer la connection par le wifi --img width="940" height="708" %}

#### dietpi-wifi.txt

Dans ce fichier tu vas pouvoir renseigner toutes les infos de tes réseaux.

> si tu veux paramétrer plusieurs réseaux wifi pour te connecter sur l'un d'entre eux c'est faisable.

{% picture posts/{{ page.guid }}/parametrage-dietpi-wifi-txt.png --alt Paramétrage du wifi dans dietpi-wifi.txt --img width="810" height="796" %}

Il faudra modifier **2 lignes** si tes réseaux sont en wpa-psk:
- le **SSID** ( nom du réseau )
- le **pass** de connection en version crypté.

Pour trouvers ce pass sous linux c'est très simple ouvre un terminal et entre la commande: ```wpa_passphrase SSID PASSWORD```

{% picture posts/{{ page.guid }}/generation-passphrase-wpa.png --alt Génération d'une clé wpa-psk sous linux --img width="650" height="207" %}

> Enregistre le fichier et c'est terminé, **ton SBC se connectera automatiquement au réseau wifi** lors du premier lancement, Magique 🪄

#### config.txt ( réglage des perfs )

Le fichier comme marqué dans le titre est là pour optimiser les perfs du raspberry-pi 3B+, perso je n'y ai pas touché, mais comme pour le reste tout est paramétrable facilement via l'interface dietpi connecté en ssh avec la commande ```dietpi-config``` onglet [performances options](https://dietpi.com/docs/dietpi_tools/system_configuration/#dietpi-config-performance-options){: target="_blank"}

**Retrouve sous les liens ci-dessous** des configurations avec la documentation officielle de raspberry-pi.

[Documentation configuration raspberry pi](https://www.raspberrypi.com/documentation/computers/config_txt.html){: target="_blank"}

[Github des optimisations officielles du firmware pour raspberry-pi](https://github.com/raspberrypi/firmware/blob/master/boot/overlays/README){: target="_blank"}

{% include doclink.html md="config.md" title="Réglage des performances du raspberry pi" %}

#### cmdline.txt ( pour accueillir HAOS )

Afin de préparer l'installation de [home assistant supervised installer](https://github.com/home-assistant/supervised-installer){: target="_blank"} il faudra rajouter une ligne de commande à la suite du code déjà disponible, et tu verras un peu plus bas il faudra copier ce fichier dans le sous dossier **/firmware**. Ainsi home assistant fonctionner pour le mieux.

{% highlight txt %}
apparmor=1 security=apparmor systemd.unified_cgroup_hierarchy=0
{% endhighlight %}

{% picture posts/{{ page.guid }}/modification-cmdline-txt-pour-home-assistant-cgroupv1.png --alt Personnalisation du fichier pour préparer l'installation de Home Assistant OS et les infos CGroupV1 --img width="940" height="48" %}

{% include doclink.html md="cmdline.md" title="Préparer cmdline pour home assistant OS" %}

### Premier lancement

Sur le **raspberry pi 3B+** le premier démarrage a mis moins de **2 minutes** pour se lancer sachant que j'ai fait quelques modifications dans le fichier **dietpi.txt.** La connection **ssh est active par défaut**, c'est un plus et **lors de la première connection en ssh dietpi-update se lance automatiquement.**

{% picture posts/{{ page.guid }}/premiere-connection-ssh-dietpi-update-automatique.png --alt Première connection SSH Dietpi possède un GUI interface utile avec une mise à jour au premier lancement --img width="643" height="406" %}

### connection à l'interface
Pour connaître l'adresse ip connecte le SBC en hdmi ainsi tu auras l'interface GUI dietpi disponible avec ton adresse ip dédiée ainsi que les identifiants et mot de passes root d'affichés.
Je décide de me connecter en ssh ```ssh -p 22 mon-ip -l root```

{% picture posts/{{ page.guid }}/dietpi-installe-acces-gui-ssh.png --alt Première connection SSH Dietpi possède un GUI interface utile --img width="643" height="406" %}

sur l'image ci-dessus tu auras accès à l'ensemble des données et paramétrages de ton installation, une **fulltitude d'options ça c'est génial** avec entre autre:

- [dietpi-launcher](https://dietpi.com/docs/dietpi_tools/#dietpi-launcher){: target="_blank"}
- [dietpi-config](https://dietpi.com/docs/dietpi_tools/system_configuration/#dietpi-config){: target="_blank"}
- [dietpi-software](https://dietpi.com/docs/dietpi_tools/software_installation/){: target="_blank"}
- [dietpi-update et dietpi-cleaner](https://dietpi.com/docs/dietpi_tools/system_maintenance/){: target="_blank"}
- [dietpi-backup](https://dietpi.com/docs/dietpi_tools/system_maintenance/){: target="_blank"}
- htop
- cpu (info)


![Première connection dietpi et paramétrage après mise à jour]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/premiere-connection.webp{{ cachebuster }}){: width="643" height="406" class="lazyload pictaninpost"}

J'ai fait **un petit récapitulatif** au format Gif des prompts de la procédure lors de la première installation.

{% include product-embed.html image="sandisk-sdcard-256-extreme.png" title="Sdcard 256GB sandisk extrême" brand="Sandisk" description="Sdcard de qualité Sandisk pour raspberry pi" affiliate="_Dc6uJfL" amazlink="417XNZH" %}


### Dietpi Software

Pour te rendre compte de toute la puissance de dietpi va directement sur la page des softwares à l'installation automatique disponible dans le dietpi, c'est impressionnant, tu peux taper directement la commande dans le terminal ```dietpi-software list``` et d'un **seul coup d'oeil tu verras tous les softs compatible avec l'architecture du SBC**.

[Lien dietpi sofware sur le site officiel](https://dietpi.com/dietpi-software.html){: target="_blank"}

![Liste des logiciels auto installables avec dietpi]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/list-softwares-dietpi.webp{{ cachebuster }}){: width="940" height="394" class="lazyload pictaninpost"}

### Dietpi Survey

Lors de la première installation il te sera demandé **si tu désires ou non laisser le serveur dietpi collecter les infos** sur tes statistiques.

{% picture posts/{{ page.guid }}/premiere-connection-dietpi-survey.png --alt Surveillance Dietpi en ligne --img width="643" height="406" %}

Perso j'ai coché 0, libre à toi de faire remonter les infos.

[Page des statistiques de dietpi Survey](https://dietpi.com/survey/){: target="_blank"}

## Installation Home Assistant OS sur Dietpi

Si tu fais une recherche dans [dietpi-software](https://dietpi.com/docs/software/home_automation/){: target="_blank"}, tu pourras te rendre compte de la présence d'une fonction automatisée pour l'installation de Home assistant, mais pas de Home Assistant OS, elle a été envisagée mais conflictuelle car par défaut Dietpi utilise le gestionnaire de réseau **ifupdown** alors que HAOS utilise **network manager** ce qui rend la gestion du réseau impossible dans dietpi-config après le passage à network manager, **mais heureusement pour nous ce n'est pas trop grave pour la suite.**

Donc une fois l'installation dietpi opérationnelle et mise à jour sur ton réseau il te suffit d'appliquer les commandes suivante:

{% highlight shell %}
sudo su - # pour passer en mode administrateur
{% endhighlight %}

ensuite installons [home assistant supervised installer](https://github.com/home-assistant/supervised-installer){: target="_blank"} en commençant par les dépendances:

{% highlight shell %}
apt install \
apparmor \
bluez \
cifs-utils \
curl \
dbus \
jq \
libglib2.0-bin \
lsb-release \
network-manager \
nfs-common \
systemd-journal-remote \
systemd-resolved \
udisks2 \
wget -y
{% endhighlight %}

Puis on recrée le fichier réseau pour network manager, car je le rapelle le premier a été créé par **ifupdown**:

{% highlight shell %}
sudo mv /etc/network/interfaces /etc/network/interfaces.old # on renomme l'interface en fichier .old afin de ne pas perdre les infos précédentes
{% endhighlight %}

et on termine par un redémarrage

{% highlight shell %}
reboot
{% endhighlight %}

Après le redémarrage du système repasse en mode sudo permanent

{% highlight shell %}
sudo su -
{% endhighlight %}

On installe la librairie docker

{% highlight shell %}
curl -fsSL get.docker.com | sh
{% endhighlight %}

{%- include alert.html type="error" text="<b>PS:</b> Quand tu accèderas à home assistant après le paramétrage si une erreur root docker remonte il te suffira de redémarrer tout le système et home assistant corrigera cette erreur." %}

Continue et récupère la dernière version de os-agent pour ton architecture moi il s'agit de **aarch64**

[Release os-agent](https://github.com/home-assistant/os-agent/){: target="_blank"}

Passons maintenant au téléchargement, à l'installation et au test de fonctionnement de os-agent:

{% highlight shell %}
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb # on télécharge
dpkg -i os-agent_1.6.0_linux_aarch64.deb # on installe 
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os # on vérifie
{% endhighlight %}

Maintenant **créeons** le dossier firmware, ensuite on fait une copie de cmdline.txt dans **/firmware**.

{% highlight shell %}
mkdir /boot/firmware
cp /boot/cmdline.txt /boot/firmware/
{% endhighlight %}

> Pour terminer copie l'ensemble de la commande ci-dessous pour intaller Home Assiistant OS.

{% highlight shell %}
wget -O homeassistant-supervised.deb https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
apt install ./homeassistant-supervised.deb
{% endhighlight %}

On **supprime** les fichiers préalablements téléchargés et situés à la racine.

{% highlight shell %}
rm -rf homeassistant-supervised.deb os-agent_1.6.0_linux_aarch64.deb 
{% endhighlight %}

**Fini par un petit redémarrage.**

{% highlight shell %}
reboot
{% endhighlight %}

> Voilà **Home Assistant OS est installé sur Dietpi** 🥳

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

{% include product-embed.html image="raspberry-pi-5-achat-amazon.png" title="Raspberry-pi 5 4GB" brand="Raspberry" description="Dernière génération du raspberry-pi avec 4GB de RAM" affiliate="_DD0v3TL" amazlink="3VeGOAU" %}

## Conclusion

**Dietpi software est une pépite** si tu souhaites contrôler ton raspberry-pi ou y installer des options facilement, **comme le contrôle des leds**, il te permettra de faire failement les mises à jours systèmes, de **créer un backup**, enfin bref toute une panoplie de fonctions. Et tout ça sur un système optimisé et ultra léger, **bref que du bonheur**.

> **Je recommande grandement dietpi à tout le monde**.





