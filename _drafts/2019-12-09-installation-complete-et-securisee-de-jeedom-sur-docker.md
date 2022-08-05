---
title: "Jeedom on Docker"
description: 'Complete and secure installation of Jeedom on docker'
date: "2019-12-09"
author: Nico
categories: [ Haade-lab, Jeedom ]
tags: []
layout: post
image: installation-jeedom-docker-1.png
language: en
toc: true
---

\[:fr\]

## \*Obsolète\*

## 1- Installation des images et container mariadb/alpin et Adminer.

### **Prérequis pour pouvoir suivre ce tutoriel:**

Tout d'abord, apprendre à se connecter en SSH

Pour se connecter à son **Nas/Raspberrypi à partir d'un terminal** donc dans notre cas à Debian dans OMV " Valable pour toutes autres distribution basé sur debian" ( raspbian, ubuntu,mint... )

```bash
$ ssh -p 22 your_Nas_ip_address -l root
```

```bash
$ ssh -p 22 your_raspberrypi_ip_address -l pi
```

une fois connecté on a comme entité

```bash
root@Name_Nas:~#
```

Ensuite on peut se connecter à notre docker qui a été créé et qui s'appelle **jeedom**

```docker
$ docker exec -it jeedom sh
```

on auras comme entité:

```bash
#
```

> Dès cette instant toutes les commandes que vous rentrerez n'agiront plus sur debian de votre Nas mais sur debian de votre container Jeedom.

Pour sortir de son container et retourner sur notre nas il faut faire:

```bash
Ctrl+p Ctrl+q
ou
exit
```

D'abord, partons du principe que nous avons **omv Nas** d'installé avec docker. Connectons-nous en root sur notre Nas soit à l'aide d'un **terminal** soit à l'aide de **Putty:**

```bash
$ ssh -p 22 192.168.***.*** -l root
```

remplacez **l'adresse ip** par la votre et votre nom d'utilisateur par le votre. Par défaut sur omv le nom d'utilisateur est "**root**" et le mot de passe "**openmediavault**".

Avec Putty:

![](images/connection-putty.png)

**Ensuite rentrez votre mot de passe.**

Création du dossier mariadb

```bash
$ sudo mkdir -p /sharedfolders/Appdata/mariadb
```

### Création de la base de donnée mariadb qui va accueillir Jeedom.

```docker
docker run --name mariadb \
-v /Your_mysql_path:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=Your_password_root \
-e MYSQL_USER=your_user \
-e MYSQL_PASSWORD=your_password \
-e MYSQL_DATABASE=jeedom \
--detach \
--publish 3306:3306 \
--restart always \
yobasystems/alpine-mariadb:latest
```

**Remplacez:**  
_**your\_mysql\_path**_ par un un dossier sur votre disque dur ex: /opt/mysql.  
_**your\_name\_database**_ par un nom de base de donnée ex: jeedom  
_**your\_password\_**_root par un mot de passe administrateur  
_**your\_user**_ par un nom d'utilisateur  
_**your\_password**_ par un mot de passe utilisateur

![](images/mysql-1.png)

### Installation de Adminer sur le docker afin de paramétrer mariadb à l'aide d'une interface graphique ultra légère 29Mb compressé

```docker
docker run -d --name adminer --link mariadb:db -p 8080:8080 --restart always adminer
```

**Si le port 8080** est pris sur votre hôte vous pouvez le remplace par un autre, exemple 8480:8080.

**Vérifiez l'accès à votre base de donnée** en vous connectant à l'adresse ip de votre NAS **http://192.168.X.X:8080** et accédez à votre table nommé Jeedom avec votre user et password créé dans le container.

À ce stade nous avons sur notre docker deux container l'un pour mariadb, nommé **mariadb** et l'autre avec adminer nommé **Adminer**

![](images/container-mariadb-adminer-1024x141.png)

## 2- Installation de jeedom sur docker

Après installation et paramétrage de mariadb/adminer sur docker nous sommes prêt à installer Jeedom et paramétrer.

Avant d'appliquer la commande de lancement du docker, connectez vos clés z-wave, rfxcom, zigbee, etc... sur votre matériel.

Nous allons dès à présent rechercher le matériel en se connectant à nouveau à notre système en ssh en tant qu'utilisateur root:

```bash
ssh -p 22 192.168.***.*** -l root
```

### Identification des périphériques USB:

> **Vous pouvez sauter cette étape si vous n'avez rien de connecté au port usb**. _il est toujours possible de modifier le container ultérieurement pour installer des périphériques._

Nous allons rechercher l'identifiant unique du périphérique, car beaucoup plus stable qu'une association simple par périphérique du type `/dev/ttyUSB1`, ainsi pour trouver les périphériques nous allons taper la commande:

```bash
$ ls -l /dev/serial/by-id
```

Ce qui va retourner dans notre cas les valeurs suivantes:

```bash
lrwxrwxrwx 1 root root 13 nov.  27 16:36 usb-0658_0200-if00 -> ../../ttyACM0
lrwxrwxrwx 1 root root 13 nov.  27 16:36 usb-Cartelectronic_Interface_USB_1_TIC_DA33DTBE-if00-port0 -> ../../ttyUSB1
lrwxrwxrwx 1 root root 13 nov.  27 16:36 usb-RFXCOM_RFXtrx433_A1XSV19D-if00-port0 -> ../../ttyUSB2
lrwxrwxrwx 1 root root 13 déc.   3 13:28 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B00194309AD-if00 -> ../../ttyACM1
```

on peut voir ci-dessus la liste de no périphériques usb:

1. usb-0658\_0200-if00 -> ../../ttyACM0 correspond à notre clé z-wave z-stick aeontech gen5, valeur à intégrer dans la création de l'image docker:  
    `--device=/dev/serial/by-id/usb-0658_0200-if00:/dev/ttyACM0`
2. usb-Cartelectronic\_Interface\_USB\_1\_TIC\_DA33DTBE-if00-port0 -> ../../ttyUSB1 correspond au module de suivi de consommation éléctrique Cartelectronic, valeur à intégrer dans la création de l'image docker:  
    `--device=/dev/serial/by-id/usb-Cartelectronic_Interface_USB_1_TIC_DA33DTBE-if00-port0:/dev/ttyUSB1`
3. usb-RFXCOM\_RFXtrx433\_A1XSV19D-if00-port0 -> ../../ttyUSB2 correspond à notre clé rfxcom fréquence 433mhz, valeur à intégrer dans la création de l'image docker:  
    `--device=/dev/serial/by-id/usb-RFXCOM_RFXtrx433_A1XSV19D-if00-port0:/dev/ttyUSB2`
4. Texas\_Instruments\_TI\_CC2531\_USB\_CDC\_\_\_0X00124B00194309AD-if00 -> ../../ttyACM1 [correspond à notre clé zigbee avec antenne CC2531](../produit/cle-sniffer-zigbee-cc2531-avec-antenne/). ( nous ne l'intégrerons pas à la création du container docker, car celle-ci fonctionne avec zigbe2mqtt qui actuellement n'est pas soutenu comme plugin dans jeedom.

### Création du container Jeedom en mode "host"

_Le mode **bridge est déconseillé** car non présent sur le réseau hôte certains module._ C_omme celui de lunarok xiaomi ne fonctionneront pas et vous ne pourrez pas installer les modules zigbee de xiaomi par exemple._

Depuis peut le tag **latest** de l'image jeedom est régulièrement mis à jour, mais pour l'instant nous rencontrons encore des soucis d'installations, donc on utilisera le tag **master** qui reste pour l'instant l'image la plus stable pour réussir son installation.

```bash
sudo mkdir -p /sharedfolders/Appdata/Jeedom/html
```

Maintenant que nous avons identifié nos périphériques nous pouvons lancer la commande d'installation de l'image. Toujours sur notre système d'exploitation connecté en ssh en tant que root:

```docker
docker run -d --net host --name jeedom \
-v /.../Jeedom/html:/var/www/html \ # dans omv ce seras de préférence your_jeedom_path remplacé par /sharedfolders/Appdata/
-e ROOT_PASSWORD=PASSWORD \ # à remplacer par votre mot de passe root
-e APACHE_PORT=9080 \
-e SSH_PORT=9022 \
-e MODE_HOST=1 \
--cap-add=SYS_ADMIN \ # ajout des accès bluetooth (module blea par exemple )
--device=/dev/net/tun \
--device=/dev/serial/by-id/usb-Cartelectronic_Interface_USB_1_TIC_DA33DTBE-if00-port0:/dev/ttyUSB1 \
--device=/dev/serial/by-id/usb-RFXCOM_RFXtrx433_A1XSV19D-if00-port0:/dev/ttyUSB2 \
--device=/dev/serial/by-id/usb-0658_0200-if00:/dev/ttyACM0 \
--restart always jeedom/jeedom:master
```

**Remplacez:** _**PASSWORD**_ par un mot de passe root pour jeedom,  
**l'ajout des accès bluetooth** est à mettre en place, si vous avez une carte bluetooth, intégré à la carte mère dans votre NAS afin de pouvoir utiliser les modules BLEA.

Installation du bluetooth embarqué

Prenons le cas d'une carte bluetooth Realtek. Ensuite installons le firmware sur debian si ce n'est pas fait.

```bash
$ sudo apt-get install firmware-realtek
$ cd /lib/firmware/rtlwifi
$ wget https://github.com/wkennington/linux-firmware/raw/master/rtlwifi/rtl8822befw.bin
$ sudo reboot
$ hcitool dev
Devices:
	hci0	D0:C5:D3:33:7C:52 # Notre carte bluetooth est bien reconnu
$ ls -l /sys/class/bluetooth # on cherche le composant bluetooth
hci0 -> ../../devices/pci0000:00/0000:00:14.0/usb1/1-14/1-14:1.0/bluetooth/hci0 \ adresse unique de notre carte
```

De plus pour faire remonter le bluetooth dans le plugin BLEA de jeedom. Il faut installer sur votre Container le bluetooth.

```bash
$ ls -l /sys/class/bluetooth \ on regarde si la carte est reconnu
total 0
lrwxrwxrwx 1 root root 0 Dec 20 14:59 hci0 -> ../../devices/pci0000:00/0000:00:14.0/usb1/1-14/1-14:1.0/bluetooth/hci0 # réponse ok
$ hctitool dev
Devices:
	hci0	D0:C5:D3:33:7C:52 \ bluetooth ok
$ apt install -y bluetooth bluez
```

Finalement le bluetooth remontera dans notre jeedom sans créer d'extra arg pour la création du container contrairement au port usb.

```docker
docker run -d --net host --name jeedom \
-v /your_jeedom_path:/Jeedom/html:/var/www/html \
-e ROOT_PASSWORD=PASSWORD \
-e APACHE_PORT=9080 \
-e SSH_PORT=9022 \
-e MODE_HOST=1 \
--restart always jeedom/jeedom:master
```

## 3- Lancement de jeedom et paramétrage et affinage

à ce stade nous avons installé sur omv 3 containers ( mariadb avec utilisateur, phpmyadmin et jeedom ). Enfin il ne nous reste plus qu'à nous connecter dans notre navigateur.

rendez-vous sur notre page jeedom en se connectant dans un navigateur à l'adresse de notre NAS **http://192.168.\*\*\*.\*\*\*:9080**

Important !

Remplacez dans "database hostname" _localhost_ par **127.0.0.1** sinon une erreur sql va être généré. Toutefois après le lancement du container jeedom patientez quelques minutes avant de lancer le script d'installation.

![](images/jeedom3-1.png)

Puis, on rempli bien Database username, password et name. Avec les mêmes caractéristiques lors de la création de la base de données plus haut. On laisse faire l'installation puis on se connecte à jeedom avec login et mot de passe par défaut **admin:admin**

![](images/jeedom-connection-1024x613.png)

Ensuite à l'invite de commande on modifie le mot de passe. Puis on rentre ses coordonnées jeedom market pour pouvoir passer à l'étape suivante.

![](images/market.png)

Une fois les étapes de connections bien remplies, nous allons jeter un oeil sur l'onglet /Analyse/santé et si tout s'est bien passé nous devrions avoir ceci:

![](images/santé-jeedom-1-1024x228.png)

On s'aperçoit que la configuration réseau n'est pas bonne donc Rendez-vous dans l'onglet /Réglage/Système/Configuration/Réseaux et paramétrez comme l'image ci-dessous:

- Accès interne: votre adresse ip de votre carte réseau soit une adresse du type 192.168.xxx.xxx et non 127.0.0.1 vous rencontrerez des conflits avec certains plugins ( exemple xiaomi )
- Cochez: désactivez la gestion du réseau par jeedom
- rajoutez si nécessaire dans le masque ip vos adresses docker les notre sont en 172.17 ce qui donnerait 127.0.0.1;192.168.\*.\*;10.\*.\*.\*;172.16.\*.\*;172.17.\*.\*

![](images/réseaux-jeedom-1024x390.png)

Enfin revérifiez votre Santé Jeedom et tout devrait être au **VERT.**

> Si vous rencontrez des **problèmes de droits** sur dossier/fichier ou **après le lancement d'une sauvegarde**. Alors sur votre container jeedom fraîchement créé il faudra faire les manipulations suivantes:

Commande a exécuter pour les droits Jeedom

```bash
$ ssh -p 22 192.168.***.*** -l root
```

```docker
$ docker exec -it jeedom sh
```

```bash
$ sudo chown -R www-data:www-data /tmp/jeedom/ /var/www/html/
```

Pour conclure, après avoir fait ça on peut retourner sur notre jeedom et vérifier que l'état de santé est ok.

\[:en\]

## \*Obsolète\*

## 1- Installation des images et container mariadb/alpin et Adminer.

Pourquoi et comment installer Jeedom sur Docker !

> Il existe un très bon tuto sur internet rédigé par _Renaud Cerrato_ [consultable ici](https://medium.com/@renaudcerrato/installer-jeedom-avec-docker-28935b64b395), mais il manque quelques détails d'affinages.

Pourquoi nous avons choisi **mariadb-alpine/Adminer** et bien tout simplement parce qu'à eux deux ils pèsent **270Mb,** alors que **mariadb**/**Phpmyadmin** pèse **710mb.**

> [**Adminer**](https://www.adminer.org/) est l'équivalent de [**Phpmyadmin**](https://www.phpmyadmin.net/) mais il a l'avantage de tenir dans un seul fichier php moin beau mais tellement efficace !

Pour commencer, dans ce tutoriel nous allons installer jeedom en mode host entièrement sécurisé avec les clés ( z-wave, rfxcom .... ) sur docker dans notre NAS monté avec openmediavault. Ce tuto est valable pour toutes installations sur docker (**avec une architecture amd64**) car nous procurons les lignes de commande docker. _Ps: pour les architectures de type Arm jeedom pose problème et ne s'installe que en mode bridge avec privilège sur true._

### Quelles sont les avantages d'installer jeedom sur docker:

1. Vous ne dédiez pas votre matériel qu'à un seul système, ainsi vous pourrez aussi installer par exemple homeassistant, plex, emby, etc... à côté de jeedom.
2. L'installation de Jeedom sur n'importe quelle plateforme amd64 intégrant docker.
3. Bénéficier de la puissance de votre matériel ( Nas avec processeur puissant par exemple ).

### **Prérequis pour pouvoir suivre ce tutoriel:**

#### Tout d'abord, apprendre à se connecter en SSH

Pour se connecter à son **Nas/Raspberrypi à partir d'un terminal** donc dans notre cas à Debian dans OMV " Valable pour toutes autres distribution basé sur debian" ( raspbian, ubuntu,mint... )

```bash
$ ssh -p 22 your_Nas_ip_address -l root
```

```bash
$ ssh -p 22 your_raspberrypi_ip_address -l pi
```

une fois connecté on a comme entité

```bash
root@Name_Nas:~#
```

Ensuite on peut se connecter à notre docker qui a été créé et qui s'appelle **jeedom**

```docker
$ docker exec -it jeedom sh
```

on auras comme entité:

```bash
#
```

> Dès cette instant toutes les commandes que vous rentrerez n'agiront plus sur debian de votre Nas mais sur debian de votre container Jeedom.

Pour sortir de son container et retourner sur notre nas il faut faire:

```bash
Ctrl+p Ctrl+q
ou
exit
```

D'abord, partons du principe que nous avons **omv Nas** d'installé avec docker. Connectons-nous en root sur notre Nas soit à l'aide d'un **terminal** soit à l'aide de **Putty:**

```bash
$ ssh -p 22 192.168.***.*** -l root
```

remplacez **l'adresse ip** par la votre et votre nom d'utilisateur par le votre. Par défaut sur omv le nom d'utilisateur est "**root**" et le mot de passe "**openmediavault**".

Avec Putty:

![](images/connection-putty.png)

**Ensuite rentrez votre mot de passe.**

Création du dossier mariadb

```bash
$ sudo mkdir -p /sharedfolders/Appdata/mariadb
```

### Création de la base de donnée mariadb qui va accueillir Jeedom.

```docker
docker run --name mariadb \
-v /Your_mysql_path:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=Your_password_root \
-e MYSQL_USER=your_user \
-e MYSQL_PASSWORD=your_password \
-e MYSQL_DATABASE=jeedom \
--detach \
--publish 3306:3306 \
--restart always \
yobasystems/alpine-mariadb:latest
```

**Remplacez:**  
_**your\_mysql\_path**_ par un un dossier sur votre disque dur ex: /opt/mysql.  
_**your\_name\_database**_ par un nom de base de donnée ex: jeedom  
_**your\_password\_**_root par un mot de passe administrateur  
_**your\_user**_ par un nom d'utilisateur  
_**your\_password**_ par un mot de passe utilisateur

![](images/mysql-1.png)

### Installation de Adminer sur le docker afin de paramétrer mariadb à l'aide d'une interface graphique ultra légère 29Mb compressé

```docker
docker run -d --name adminer --link mariadb:db -p 8080:8080 --restart always adminer
```

**Si le port 8080** est pris sur votre hôte vous pouvez le remplace par un autre, exemple 8480:8080.

**Vérifiez l'accès à votre base de donnée** en vous connectant à l'adresse ip de votre NAS **http://192.168.\*\*\*.\*\*\*/8080** et accédez à votre table nommé Jeedom avec votre user et password créé dans le container.

À ce stade nous avons sur notre docker deux container l'un pour mariadb, nommé **mariadb** et l'autre avec adminer nommé **Adminer**

![](images/container-mariadb-adminer-1024x141.png)

## 2- Installation de jeedom sur docker

Après installation et paramétrage de mariadb/adminer sur docker nous sommes prêt à installer Jeedom et paramétrer.

Avant d'appliquer la commande de lancement du docker, connectez vos clés z-wave, rfxcom, zigbee, etc... sur votre matériel.

Nous allons dès à présent rechercher le matériel en se connectant à nouveau à notre système en ssh en tant qu'utilisateur root:

```bash
ssh -p 22 192.168.***.*** -l root
```

### Identification des périphériques USB:

> **Vous pouvez sauter cette étape si vous n'avez rien de connecté au port usb**. _il est toujours possible de modifier le container ultérieurement pour installer des périphériques._

Nous allons rechercher l'identifiant unique du périphérique, car beaucoup plus stable qu'une association simple par périphérique du type `/dev/ttyUSB1`, ainsi pour trouver les périphériques nous allons taper la commande:

```bash
$ ls -l /dev/serial/by-id
```

Ce qui va retourner dans notre cas les valeurs suivantes:

```bash
lrwxrwxrwx 1 root root 13 nov.  27 16:36 usb-0658_0200-if00 -> ../../ttyACM0
lrwxrwxrwx 1 root root 13 nov.  27 16:36 usb-Cartelectronic_Interface_USB_1_TIC_DA33DTBE-if00-port0 -> ../../ttyUSB1
lrwxrwxrwx 1 root root 13 nov.  27 16:36 usb-RFXCOM_RFXtrx433_A1XSV19D-if00-port0 -> ../../ttyUSB2
lrwxrwxrwx 1 root root 13 déc.   3 13:28 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B00194309AD-if00 -> ../../ttyACM1
```

on peut voir ci-dessus la liste de no périphériques usb:

1. usb-0658\_0200-if00 -> ../../ttyACM0 correspond à notre clé z-wave z-stick aeontech gen5, valeur à intégrer dans la création de l'image docker:  
    `--device=/dev/serial/by-id/usb-0658_0200-if00:/dev/ttyACM0`
2. usb-Cartelectronic\_Interface\_USB\_1\_TIC\_DA33DTBE-if00-port0 -> ../../ttyUSB1 correspond au module de suivi de consommation éléctrique Cartelectronic, valeur à intégrer dans la création de l'image docker:  
    `--device=/dev/serial/by-id/usb-Cartelectronic_Interface_USB_1_TIC_DA33DTBE-if00-port0:/dev/ttyUSB1`
3. usb-RFXCOM\_RFXtrx433\_A1XSV19D-if00-port0 -> ../../ttyUSB2 correspond à notre clé rfxcom fréquence 433mhz, valeur à intégrer dans la création de l'image docker:  
    `--device=/dev/serial/by-id/usb-RFXCOM_RFXtrx433_A1XSV19D-if00-port0:/dev/ttyUSB2`
4. Texas\_Instruments\_TI\_CC2531\_USB\_CDC\_\_\_0X00124B00194309AD-if00 -> ../../ttyACM1 [correspond à notre clé zigbee avec antenne CC2531](../produit/cle-sniffer-zigbee-cc2531-avec-antenne/). ( nous ne l'intégrerons pas à la création du container docker, car celle-ci fonctionne avec zigbe2mqtt qui actuellement n'est pas soutenu comme plugin dans jeedom.

### Création du container Jeedom en mode "host"

_Le mode **bridge est déconseillé** car non présent sur le réseau hôte certains module._ C_omme celui de lunarok xiaomi ne fonctionneront pas et vous ne pourrez pas installer les modules zigbee de xiaomi par exemple._

Depuis peut le tag **latest** de l'image jeedom est régulièrement mis à jour, mais pour l'instant nous rencontrons encore des soucis d'installations, donc on utilisera le tag **master** qui reste pour l'instant l'image la plus stable pour réussir son installation.

```bash
sudo mkdir -p /sharedfolders/Appdata/Jeedom/html
```

Maintenant que nous avons identifié nos périphériques nous pouvons lancer la commande d'installation de l'image. Toujours sur notre système d'exploitation connecté en ssh en tant que root:

```docker
docker run -d --net host --name jeedom \
-v /.../Jeedom/html:/var/www/html \ # dans omv ce seras de préférence your_jeedom_path remplacé par /sharedfolders/Appdata/
-e ROOT_PASSWORD=PASSWORD \ # à remplacer par votre mot de passe root
-e APACHE_PORT=9080 \
-e SSH_PORT=9022 \
-e MODE_HOST=1 \
--cap-add=SYS_ADMIN \ # ajout des accès bluetooth (module blea par exemple )
--device=/dev/net/tun \
--device=/dev/serial/by-id/usb-Cartelectronic_Interface_USB_1_TIC_DA33DTBE-if00-port0:/dev/ttyUSB1 \
--device=/dev/serial/by-id/usb-RFXCOM_RFXtrx433_A1XSV19D-if00-port0:/dev/ttyUSB2 \
--device=/dev/serial/by-id/usb-0658_0200-if00:/dev/ttyACM0 \
--restart always jeedom/jeedom:master
```

**Remplacez:** _**PASSWORD**_ par un mot de passe root pour jeedom,  
**l'ajout des accès bluetooth** est à mettre en place, si vous avez une carte bluetooth, intégré à la carte mère dans votre NAS afin de pouvoir utiliser les modules BLEA.

#### Installation du bluetooth embarqué

Prenons le cas d'une carte bluetooth Realtek. Ensuite installons le firmware sur debian si ce n'est pas fait.

```bash
$ sudo apt-get install firmware-realtek
$ cd /lib/firmware/rtlwifi
$ wget https://github.com/wkennington/linux-firmware/raw/master/rtlwifi/rtl8822befw.bin
$ sudo reboot
$ hcitool dev
Devices:
	hci0	D0:C5:D3:33:7C:52 # Notre carte bluetooth est bien reconnu
$ ls -l /sys/class/bluetooth # on cherche le composant bluetooth
hci0 -> ../../devices/pci0000:00/0000:00:14.0/usb1/1-14/1-14:1.0/bluetooth/hci0 \ adresse unique de notre carte
```

De plus pour faire remonter le bluetooth dans le plugin BLEA de jeedom. Il faut installer sur votre Container le bluetooth.

```bash
$ ls -l /sys/class/bluetooth \ on regarde si la carte est reconnu
total 0
lrwxrwxrwx 1 root root 0 Dec 20 14:59 hci0 -> ../../devices/pci0000:00/0000:00:14.0/usb1/1-14/1-14:1.0/bluetooth/hci0 # réponse ok
$ hctitool dev
Devices:
	hci0	D0:C5:D3:33:7C:52 \ bluetooth ok
$ apt install -y bluetooth bluez
```

Finalement le bluetooth remontera dans notre jeedom sans créer d'extra arg pour la création du container contrairement au port usb.

```docker
docker run -d --net host --name jeedom \
-v /your_jeedom_path:/Jeedom/html:/var/www/html \
-e ROOT_PASSWORD=PASSWORD \
-e APACHE_PORT=9080 \
-e SSH_PORT=9022 \
-e MODE_HOST=1 \
--restart always jeedom/jeedom:master
```

## 3- Lancement de jeedom et paramétrage et affinage

à ce stade nous avons installé sur omv 3 containers ( mariadb avec utilisateur, phpmyadmin et jeedom ). Enfin il ne nous reste plus qu'à nous connecter dans notre navigateur.

rendez-vous sur notre page jeedom en se connectant dans un navigateur à l'adresse de notre NAS **http://192.168.\*\*\*.\*\*\*:9080**

Important !

Remplacez dans "database hostname" _localhost_ par **127.0.0.1** sinon une erreur sql va être généré. Toutefois après le lancement du container jeedom patientez quelques minutes avant de lancer le script d'installation.

![](images/jeedom3-1.png)

Puis, on rempli bien Database username, password et name. Avec les mêmes caractéristiques lors de la création de la base de données plus haut. On laisse faire l'installation puis on se connecte à jeedom avec login et mot de passe par défaut **admin:admin**

![](images/jeedom-connection-1024x613.png)

Ensuite à l'invite de commande on modifie le mot de passe. Puis on rentre ses coordonnées jeedom market pour pouvoir passer à l'étape suivante.

![](images/market.png)

Une fois les étapes de connections bien remplies, nous allons jeter un oeil sur l'onglet /Analyse/santé et si tout s'est bien passé nous devrions avoir ceci:

![](images/santé-jeedom-1-1024x228.png)

On s'aperçoit que la configuration réseau n'est pas bonne donc Rendez-vous dans l'onglet /Réglage/Système/Configuration/Réseaux et paramétrez comme l'image ci-dessous:

- Accès interne: votre adresse ip de votre carte réseau soit une adresse du type 192.168.xxx.xxx et non 127.0.0.1 vous rencontrerez des conflits avec certains plugins ( exemple xiaomi )
- Cochez: désactivez la gestion du réseau par jeedom
- rajoutez si nécessaire dans le masque ip vos adresses docker les notre sont en 172.17 ce qui donnerait 127.0.0.1;192.168.\*.\*;10.\*.\*.\*;172.16.\*.\*;172.17.\*.\*

![](images/réseaux-jeedom-1024x390.png)

Enfin revérifiez votre Santé Jeedom et tout devrait être au **VERT.**

> Si vous rencontrez des **problèmes de droits** sur dossier/fichier ou **après le lancement d'une sauvegarde**. Alors sur votre container jeedom fraîchement créé il faudra faire les manipulations suivantes:

#### Commande a exécuter pour les droits Jeedom

```bash
$ ssh -p 22 192.168.***.*** -l root
```

```docker
$ docker exec -it jeedom sh
```

```bash
$ sudo chown -R www-data:www-data /tmp/jeedom/ /var/www/html/
```

Pour conclure, après avoir fait ça on peut retourner sur notre jeedom et vérifier que l'état de santé est ok.

\[:\]
