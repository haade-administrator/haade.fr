---
guid: 56
title: "réinstallation complète sur Jeedom Luna"
description: "tuto complet sur une installation complète après plantage de jeedom basé sur debian sur Jeedom Luna"
layout: post
author: Nico
date: 2023-03-20 12:32
last_modified_at: 
categories: [Jeedom, News, Haade-lab]
tags: []
image: 'hack-jeedom-luna-reinstalle-completement-le-systeme.png'
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
  - https://www.dusuniot.com/blog/how-to/how-to-install-application-on-dsgw-210/
---
Après avoir [rédigé un article complet sur Jeedom Luna]({% post_url /fr/2023-02-08-jeedom-luna-passe-au-crible %}) qui montre que cette box tourne sous Debian, Jeedom Luna n'est rien d'autre qu'un Dusun 210, c'est une box relativement fermé qui ne propose pas de solutions simple pour réinstaller en cas de dysfonctionnement du système, **tu n'auras plus besoin de retourner la box chez ton distriguteur, cet article y remédie**. Tu pourras **sous Windows aisément reprendre toute l'installation** de la Jeedom Luna sans trop de difficultés ?

{% include product-embed.html guid="2143" %}

# Image debian compatible Jeedom Luna

Pour commencer télécharge à l'aide de Bittorrent l'image.

{% include doclink.html torrent="files/DSGW-210-Debian_image_RV1.1.7.img.torrent" title="Image Debian révision 1.1.7" %}

## Utilitaires Windows

Voilà deux logiciels complet qui te permettront de transférer le firmware sur Jeedom Luna, dans ce tuto j'utilise **Factorytool**{: .blue} 
> je le trouve pratique mais les deux logiciels fonctionnent.

1. Extrait le fichier zip et commence par installer les drivers /FactoryTool-DriverAssitant/DriverAssitant_v5.1.1/DriverInstall.exe
2. lance l'application: /FactoryTool-DriverAssitant/FactoryTool/FactoryTool.exe
3. Change de langue le chinois est par défaut
4. Clic sur firmware et charge le Firmware DSGW-210-Debian_image_RV1.1.7.img
5. Sélectionne sur restore

{% include doclink.html zip="files/FactoryTool-DriverAssitant.zip" title="FactoryTool + driver" %}
{% include doclink.html zip="files/RKDevTool-DriverAssistant.zip" title="RKDevTool + driver" %}

**Branche la Jeedom Luna** au PC à l'aide du **cable usb fourni** et met là en **mode MASKROM**  afin de pouvoir upgrader le firmware.

**Mode MASKROM:**
1. Appui sur le **bouton reset** sans lâcher et appui sur le **bouton boot** 5 de 3 à 5 secondes
2. Relâche le **bouton reset** attend 2-3 secondes et relâche le **bouton boot**

### La vidéo ci-dessous reprend la manipulation
{% include youtubePlayer.html id="6r2R_ED0J_Q" %}


Maintenant une ligne apparait dans la liste, selectionne là
> Pour terminer clic sur **Run**

Si tout s'est bien passé tu auras l'indication en vert

Ensuite tu peux cliquer un bref instant sur reset et brancher la jeedom luna sur le secteur et sur le réseau en rj45 
le cercle va passer de rouge à bleu fixe, debian à démarré

retrouve sur ton réseau l'adresse ip de la Jeedom Luna

# Préparation du système

connecte toi en ssh avec **putty**

Il existe deux types d'utilisateurs **root** et **admin**

**ps:** le mot de pass pour l'utilisateur admin est **admin** (*si tu utilise admin il te faudra mettre sudo devant toutes les commandes ci-dessous)

> Le tuto est réalisé avec l'utilisateur **root** mot de passe: **root**

commence par changer les paquets debian ( les paquets par défaut sont localisés en chine et trop lent)

```sh
nano /etc/apt/sources.list
```

supprime toutes les ligne avec Ctrl+k et colle les repertoires ci-dessous, termine par un Ctrl+x puis yes pour enregistrer

```sh
deb http://deb.debian.org/debian bullseye main contrib non-free
# deb-src http://deb.debian.org/debian bullseye main contrib non-free

deb http://deb.debian.org/debian-security/ bullseye-security main contrib non-free
# deb-src http://deb.debian.org/debian-security/ bullseye-security main contrib non-free

deb http://deb.debian.org/debian bullseye-updates main contrib non-free
# deb-src http://deb.debian.org/debian bullseye-updates main contrib non-free

deb http://deb.debian.org/debian bullseye-backports main contrib non-free
# deb-src http://deb.debian.org/debian bullseye-backports main contrib non-free
```

## #1 met à jour le système

```sh
sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y
```

## #2 Change la taille du disque erronné par defaut:

```sh
resize2fs /dev/mmcblk2p7
```

## #3 Contrôle la taille du disque

```sh
df -h
```
tu devrais trouver en réponse:
```sh
/dev/root           15G
```

## #4 Change le nom d'hôte du système
```sh
nano /etc/hostname
```

**remplace Debian par Jeedom**

```sh
nano /etc/hosts
```
**rajoute sous la ligne**
```md
127.0.0.1       localhost
127.0.0.1       Jeedom
```
Ctrl+x pour enregistrer

**enregistre le nouveau nom d'hôte**
```sh
hostnamectl set-hostname Jeedom
```

## #5 Installe le fichier locales
```sh
apt install locales -y
```

Paramètre le locale
```sh
locale-gen en_US.UTF-8 fr_FR.UTF-8
```

Install les langues
```sh
dpkg-reconfigure locales
```

sélectionne en_US UTF8 et fr_FR UTF8 appui sur enter et sélectionne par défaut fr clic sur enter

## #6 Redémarre le système

```sh
reboot
```

## #7 remettre à plat les installations en cours (*optionnel)

```sh
dpkg --configure -a
```

fichiers cassés si tel est le cas
```sh
apt --fix-broken install
```

## #8 Nettoye l'installation
```sh
apt autoremove
apt clean
```
Désormais l'installation Debian est prête à accueillir Jeedom

# Installation de Jeedom
```sh
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
```

> **Après 5-10 minutes Jeedom est installé**

Supprime les fichiers non nécessaire à la racine
```sh
ls
rm -rf install.sh os-agent_1.2.2_linux_aarch64.deb
```

Pour finir Redémarre la Jeedom Luna
```sh
reboot
```

Il ne reste plus qu'à te connecter à ton adresse ip et voilà tu es sur une installation Jeedom toute fraîche compatible Dusun 210

{% include product-embed.html guid="2143" %}

# Conclusion

Voilà une manipulation qui en ravira plus d'un et réalisé en moins de 30 minutes. Tu tiens entre tes mains le secret pour ressusciter une Jeedom Luna ? Si tu rencontre un soucis n'hésite pas à me le faire remonter.

















