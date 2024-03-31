---
guid: 56
title: "réinstallation complète sur Jeedom Luna"
description: "tuto complet sur une installation complète après plantage de jeedom basé sur debian sur Jeedom Luna"
layout: post
authors: Nico
date: 2023-03-23 12:32
last_modified_at: 2023-09-25 08:00
categories: [Jeedom, News, Haade-lab]
tags: []
image: 'hack-jeedom-luna-reinstalle-completement-le-systeme.png'
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
addViews: 260
comments: true
rating:  
sourcelink:
  - https://www.dusuniot.com/blog/how-to/how-to-install-application-on-dsgw-210/
---
Après avoir [rédigé un article complet sur Jeedom Luna]({% post_url /fr/2023-02-08-jeedom-luna-passe-au-crible %}) qui montre, que cette box tourne simplement sous Debian, Jeedom Luna n'est rien d'autre qu'un Dusun 210, c'est une box relativement fermé qui ne propose pas de solutions simple pour réinstaller en cas de dysfonctionnement du système, **tu n'auras plus besoin de retourner la box chez ton distriguteur, cet article y remédie**. Tu pourras **sous Windows aisément reprendre toute l'installation** de la Jeedom Luna sans trop de difficultés ?

{% include product-embed.html guid="2143" %}


En prérequis **il te faudra télécharger l'image Debian** correspondante ainsi que l'utilitaire et driver pour envoyer les données sur le Jeedom Luna.

## Installation à partir de l'image officielle Jeedom

**Mise à jour:** Jeedom propose l'image compatible avec le Dusun sur leurs propres serveurs, à l'heure ou je rédige la mise à jour l'image **update.img** date de fin Juillet 2023, télécharge là à cette adresse [https://images.jeedom.com/luna/](https://images.jeedom.com/luna/){: target="_blank"}. Les autres images de Jeedom (jeeboard, freebox, etc..) sont dispos à cette adresse [https://images.jeedom.com/](https://images.jeedom.com/){: target="_blank"}

> Avec cette image suis les étapes [utilitaires windows](#utilitaires-windows) et [upgrade du firmware](#upgrade-du-firmware) et l'installation sera complète.

## Installation 100% manuel

Pour commencer télécharge l'image, le fichier est stocké sur Google drive.
[Image Debian rev 1.1.7](https://drive.google.com/file/d/1-rok0WHrsqLUyX3lbEJaPgY-tiiV6s8v/view?usp=sharing){: target="_blank"}


### Utilitaires Windows

Voilà deux logiciels complet qui te permettront de transférer le firmware sur Jeedom Luna, dans ce tuto j'utilise **Factorytool**{: .blue} 

{% include doclink.html zip="files/FactoryTool-DriverAssitant.zip" title="FactoryTool + driver" %}

> je le trouve pratique mais les deux logiciels fonctionnent.

1. Extrait le fichier zip et commence par installer les drivers<br>/FactoryTool-DriverAssitant/DriverAssitant_v5.1.1/DriverInstall.exe
2. lance l'application: /FactoryTool-DriverAssitant/FactoryTool/FactoryTool.exe
3. Change de langue le chinois est par défaut
4. Clic sur firmware et charge le Firmware DSGW-210-Debian_image_RV1.1.7.img
5. Sélectionne restore

{% include doclink.html zip="files/RKDevTool-DriverAssistant.zip" title="RKDevTool + driver" %}

### Upgrade du firmware

**Branche la Jeedom Luna** au PC à l'aide du **cable usb fourni** et met là en **mode MASKROM**  afin de pouvoir upgrader le firmware.

**Mode MASKROM:**{: .blue}
1. Appui sur le **bouton reset** sans lâcher et appui sur le **bouton boot** de 3 à 5 secondes
2. Relâche le **bouton reset** attend 2-3 secondes et relâche le **bouton boot**

### La vidéo ci-dessous reprend la manipulation
{% include videoPlayer.html youtubeId="6r2R_ED0J_Q" %}


Maintenant une ligne apparait dans la liste, selectionne là

> Pour terminer clic sur **Run**

Si tout s'est bien passé tu auras l'indication en vert

Ensuite tu peux cliquer un bref instant sur reset et brancher la jeedom luna sur le secteur et sur le réseau en rj45 
le cercle va passer de rouge à bleu fixe, debian à démarré

ci dessous une animation Gif qui reprend toute l'étape:

![Flash image debian sur jeedom luna avec Factorytool]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/flash-image-debian-jeedom-luna.webp{{ cachebuster }}){: width="940" height="710"}

retrouve sur ton réseau l'adresse ip de la Jeedom Luna

### Préparation du système

**linux:** ouvre un terminal et tape
```sh
ssh -p 22 ton.adresse.ip -l root
```

**Windows:** connecte toi en ssh avec **putty** rentre l'ip, le port 22 et le nom d'utilisateur et pass.

####  1.Connection utilisateurs

à titre d'info, il existe deux types d'utilisateurs par défaut sur l'image debian **root** et **admin**

**ps:** le mot de passe pour l'utilisateur admin est **admin** (*si tu utilise admin il te faudra mettre sudo devant toutes les commandes ci-dessous)

> Connecte-toi avec l'utilisateur **root** mot de passe: **root**

Change le mot de pass root par Mjeedom96
```sh
sudo passwd root
```

**(*Optionnel)** Pour être conforme à une installation Jeedom traditionnelle on va créer un nouvel utilisateur nommé **jeedom** et mot de passe **Mjeedom96** ensuite on donnera les droits administrateur à cet utilisateur 

```sh
# à l'invite en mot de passe rentre: Mjeedom96
adduser jeedom

# donne les droits administrateur
usermod -aG sudo jeedom
```


Maintenant change d'utilisateur

```sh
su -l jeedom
```

#### 2.Amélioration de l'image


commence par changer les paquets debian ( les paquets par défaut sont localisés en chine et trop lent)

```sh
sudo nano /etc/apt/sources.list
```

supprime toutes les ligne avec Ctrl+k et colle les repertoires ci-dessous, termine par un Ctrl+x puis yes pour enregistrer

```sh
deb http://ftp.fr.debian.org/debian bullseye main contrib non-free
deb-src http://ftp.fr.debian.org/debian bullseye main contrib non-free

deb http://ftp.fr.debian.org/debian-security/ bullseye-security main contrib non-free
deb-src http://ftp.fr.debian.org/debian-security/ bullseye-security main contrib non-free

deb http://ftp.fr.debian.org/debian bullseye-updates main contrib non-free
deb-src http://ftp.fr.debian.org/debian bullseye-updates main contrib non-free

deb http://ftp.fr.debian.org/debian bullseye-backports main contrib non-free
deb-src http://ftp.fr.debian.org/debian bullseye-backports main contrib non-free
```

#### 3.Met à jour le système

```sh
sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y
```

#### 4.Change la taille du disque erronné par defaut:

```sh
# redimmensionne
sudo resize2fs /dev/mmcblk2p7
# controle la taille
df -h
# tu devrais trouver
# /dev/root           15G
```

#### 5.Change le nom d'hôte du système

C'est le nom du système par défaut, il te permettra de te connecter à jeedom sans connaître l'adresse ip, dans notre exemple qui est celui par défaut de la jeedom luna on va l'appeler jeedomluna ainsi tu pourras te connecter ultérieurement sur [http://jeedomluna.local](http://jeedomluna.local){: target="_blank"}

```sh
sudo nano /etc/hostname
# remplace Debian par jeedomluna et Ctrl+x yes
sudo nano /etc/hosts
# rajoute sous localhost la ligne et Ctrl+x yes
127.0.0.1       localhost
127.0.0.1       jeedomluna 
```

**enregistre le nouveau nom d'hôte**
```sh
sudo hostnamectl set-hostname jeedomluna
```

#### 6.Installe le fichier locales
```sh
# installe les dépendances
sudo apt install locales -y
# Paramètre le locale
sudo locale-gen en_US.UTF-8 fr_FR.UTF-8
# Installe les langues
sudo dpkg-reconfigure locales
```

sélectionne **en_US.UTF-8 et fr_FR.UTF-8** appui sur enter et sélectionne par défaut **fr_FR.UTF-8** clic sur enter

#### 7.Redémarre le système

```sh
sudo reboot
```

#### 8.Remettre à plat les installations en cours (*optionnel)

**Normalement dans ce tuto tu ne devrais pas avoir à effectuer ces deux étapes** car l'installation de tous les paquets doit s'effectuer sans problème. La première commande dpkg est là pour remettre à plat une installation .deb avortée, et apt --fix-broken install pour réparer toute installation d'extension avortée.

```sh
# remet à plat dpkg
sudo dpkg --configure -a
# fix les fichiers cassés
sudo apt --fix-broken install
```

#### 9.Nettoye l'installation
```sh
sudo apt autoremove
sudo apt clean
```
> Désormais l'installation Debian est prête à accueillir Jeedom

#### 10.Installation de Jeedom
```sh
sudo wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
sudo chmod +x install.sh
sudo ./install.sh -w /var/www/html -z -m Jeedom
```

> **Après 5-10 minutes Jeedom est installé**

Supprime les fichiers non nécessaire à la racine
```sh
ls
sudo rm -rf install.sh os-agent_1.2.2_linux_aarch64.deb
```

Pour finir Redémarre la Jeedom Luna
```sh
sudo reboot
```

Il ne reste plus qu'à te connecter [http://jeedomluna.local](http://jeedomluna.local){: target="_blank"}, et voilà tu es sur une installation Jeedom toute fraîche compatible Dusun 210

{% include product-embed.html guid="2143" %}

## Conclusion

Voilà une manipulation qui en ravira plus d'un et réalisé en moins de 30 minutes. Tu tiens entre tes mains **le secret pour ressusciter une Jeedom Luna ?** Si tu rencontres un soucis n'hésite pas à me le faire remonter.








