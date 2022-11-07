---
guid: 1
title: 'Jeedom sur docker'
date: '2019-12-09T10:17:14+00:00'
last_modified_at:
author: Nico
categories: [Domotique, Haade-lab, Docker, Jeedom]
layout: post
image: installation-jeedom-docker-1.png
tags:
description: "OBSOLÈTE! Installation complète et sécurisée de Jeedom sur docker"
locale: fr_FR
published: true
beforetoc:
toc: true
comments: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
redirect_from:
  - /fr/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/installation-complete-et-securisee-de-jeedom-sur-docker/
  - /blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/installation-complete-et-securisee-de-jeedom-sur-docker/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/installation-complete-et-securisee-de-jeedom-sur-docker/2/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/installation-complete-et-securisee-de-jeedom-sur-docker/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/installation-complete-et-securisee-de-jeedom-sur-docker/3/
  - /blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/installation-complete-et-securisee-de-jeedom-sur-docker/2/
---

## 1- Installation des images et container mariadb/alpin et Adminer.

**Prérequis pour pouvoir suivre ce tutoriel:**

- Avoir un nas avec openmediavault et docker d’installé
- Avoir un accès ssh opérationnel
- Faire la différence entre l’accès Nas en SSH et l’accès à son container en SSH

Tout d’abord, apprendre à se connecter en SSH.

Pour se connecter à son **Nas/Raspberrypi à partir d’un terminal** donc dans notre cas à Debian dans OMV » Valable pour toutes autres distribution basé sur debian » ( raspbian, ubuntu,mint… )

{% highlight shell %}
$ ssh -p 22 your_Nas_ip_address -l root
{% endhighlight %}

**Connection au raspberrypi**

{% highlight shell %}
$ ssh -p 22 your_raspberrypi_ip_address -l pi
{% endhighlight %}

une fois connecté on a comme entité

{% highlight shell %}
root@Name_Nas:~#
{% endhighlight %}

Ensuite on peut se connecter à notre docker qui a été créé et qui s’appelle **jeedom**

{% highlight docker %}
$ docker exec -it jeedom sh
{% endhighlight %}

on auras comme entité:

{% highlight shell %}
#
{% endhighlight %}

> Dès cette instant toutes les commandes que vous rentrerez n’agiront plus sur debian de votre Nas mais sur debian de votre container Jeedom.

Pour sortir de son container et retourner sur notre nas il faut faire:

{% highlight shell %}
Ctrl+p Ctrl+q
ou
exit
{% endhighlight %}

D’abord, partons du principe que nous avons **omv Nas** d’installé avec docker. Connectons-nous en root sur notre Nas soit à l’aide d’un **terminal** soit à l’aide de **Putty:**

{% highlight shell %}
$ ssh -p 22 192.168.***.*** -l root
{% endhighlight %}

remplacez **l’adresse ip** par la votre et votre nom d’utilisateur par le votre. Par défaut sur omv le nom d’utilisateur est « **root** » et le mot de passe « **openmediavault** » .

**Avec Putty:**

{% picture posts/{{ page.guid }}/connection-putty.png --alt connection à putty --img width="553" height="550" %}

**Ensuite rentrez votre mot de passe.**

Création du dossier mariadb

{% highlight shell %}
$ sudo mkdir -p /sharedfolders/Appdata/mariadb
{% endhighlight %}

### Création de la base de donnée mariadb qui va accueillir Jeedom.

{% highlight docker %}
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

{% endhighlight %}

**Remplacez:**  
***your\_mysql\_path*** par un un dossier sur votre disque dur ex: /opt/mysql.  
***your\_name\_database*** par un nom de base de donnée ex: jeedom  
***your\_password\_***root par un mot de passe administrateur  
***your\_user*** par un nom d’utilisateur  
***your\_password*** par un mot de passe utilisateur

{% picture posts/{{ page.guid }}/mysql-1.png --alt création docker mysql --img width="820" height="587" %}

### Installation de Adminer sur le docker.

afin de paramétrer mariadb à l’aide d’une interface graphique ultra légère 29Mb compressé

{% highlight docker %}
docker run -d --name adminer --link mariadb:db -p 8080:8080 --restart always adminer
{% endhighlight %}

**Si le port 8080** est pris sur votre hôte vous pouvez le remplace par un autre, exemple 8480:8080.

**Vérifiez l’accès à votre base de donnée** en vous connectant à l’adresse ip de votre NAS **http://192.168.X.X:8080** et accédez à votre table nommé Jeedom avec votre user et password créé dans le container.

À ce stade nous avons sur notre docker deux container l’un pour mariadb, nommé **mariadb** et l’autre avec adminer nommé **Adminer**

{% picture posts/{{ page.guid }}/container-mariadb-adminer.png --alt ligne de commande installation adminer --img width="820" height="113" %}

## 2- Installation de jeedom sur docker

Après installation et paramétrage de mariadb/adminer sur docker nous sommes prêt à installer Jeedom et paramétrer.

Avant d’appliquer la commande de lancement du docker, connectez vos clés z-wave, rfxcom, zigbee, etc… sur votre matériel.

Nous allons dès à présent rechercher le matériel en se connectant à nouveau à notre système en ssh en tant qu’utilisateur root:

{% highlight shell %}
ssh -p 22 192.168.***.*** -l root
{% endhighlight %}

### Identification des périphériques USB:

> **Vous pouvez sauter cette étape si vous n’avez rien de connecté au port usb**. *il est toujours possible de modifier le container ultérieurement pour installer des périphériques.*

Nous allons rechercher l’identifiant unique du périphérique, car beaucoup plus stable qu’une association simple par périphérique du type `/dev/ttyUSB1`, ainsi pour trouver les périphériques nous allons taper la commande:

{% highlight shell %}
$ ls -l /dev/serial/by-id
{% endhighlight %}

Ce qui va retourner dans notre cas les valeurs suivantes:

{% highlight shell %}
lrwxrwxrwx 1 root root 13 nov.  27 16:36 usb-0658_0200-if00 -> ../../ttyACM0
lrwxrwxrwx 1 root root 13 nov.  27 16:36 usb-Cartelectronic_Interface_USB_1_TIC_DA33DTBE-if00-port0 -> ../../ttyUSB1
lrwxrwxrwx 1 root root 13 nov.  27 16:36 usb-RFXCOM_RFXtrx433_A1XSV19D-if00-port0 -> ../../ttyUSB2
lrwxrwxrwx 1 root root 13 déc.   3 13:28 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B00194309AD-if00 -> ../../ttyACM1
{% endhighlight %}

on peut voir ci-dessus la liste de no périphériques usb:

1. usb-0658\_0200-if00 -&gt; ../../ttyACM0 correspond à notre clé z-wave z-stick aeontech gen5, valeur à intégrer dans la création de l’image docker:

{% highlight shell %}
--device=/dev/serial/by-id/usb-0658_0200-if00:/dev/ttyACM0
{% endhighlight %}

2. usb-Cartelectronic\_Interface\_USB\_1\_TIC\_DA33DTBE-if00-port0 -&gt; ../../ttyUSB1 correspond au module de suivi de consommation éléctrique Cartelectronic, valeur à intégrer dans la création de l’image docker:

{% highlight shell %}
--device=/dev/serial/by-id/usb-Cartelectronic_Interface_USB_1_TIC_DA33DTBE-if00-port0:/dev/ttyUSB1
{% endhighlight %}

3. usb-RFXCOM\_RFXtrx433\_A1XSV19D-if00-port0 -> ../../ttyUSB2 correspond à notre clé rfxcom fréquence 433mhz, valeur à intégrer dans la création de l’image docker:

{% highlight shell %}
--device=/dev/serial/by-id/usb-RFXCOM_RFXtrx433_A1XSV19D-if00-port0:/dev/ttyUSB2
{% endhighlight %}

4. Texas\_Instruments\_TI\_CC2531\_USB... -> ../../ttyACM1 [correspond à notre clé zigbee avec antenne CC2531](../produit/cle-sniffer-zigbee-cc2531-avec-antenne/). ( nous ne l’intégrerons pas à la création du container docker, car celle-ci fonctionne avec zigbe2mqtt qui actuellement n’est pas soutenu comme plugin dans jeedom.

### Création du container Jeedom en mode « host »

*Le mode **bridge est déconseillé** car non présent sur le réseau hôte certains module.* C*omme celui de lunarok xiaomi ne fonctionneront pas et vous ne pourrez pas installer les modules zigbee de xiaomi par exemple.*

Depuis peut le tag **latest** de l’image jeedom est régulièrement mis à jour, mais pour l’instant nous rencontrons encore des soucis d’installations, donc on utilisera le tag **master** qui reste pour l’instant l’image la plus stable pour réussir son installation.

{% highlight shell %}
sudo mkdir -p /sharedfolders/Appdata/Jeedom/html
{% endhighlight %}

Maintenant que nous avons identifié nos périphériques nous pouvons lancer la commande d’installation de l’image. Toujours sur notre système d’exploitation connecté en ssh en tant que root:

{% highlight docker %}
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
{% endhighlight %}

**Remplacez:** ***PASSWORD*** par un mot de passe root pour jeedom,  
**l’ajout des accès bluetooth** est à mettre en place, si vous avez une carte bluetooth, intégré à la carte mère dans votre NAS afin de pouvoir utiliser les modules BLEA.

### Installation du bluetooth embarqué
Prenons le cas d’une carte bluetooth Realtek. Ensuite installons le firmware sur debian si ce n’est pas fait.

{% highlight shell %}
$ sudo apt-get install firmware-realtek
$ cd /lib/firmware/rtlwifi
$ wget https://github.com/wkennington/linux-firmware/raw/master/rtlwifi/rtl8822befw.bin
$ sudo reboot
$ hcitool dev
Devices:
	hci0	D0:C5:D3:33:7C:52 # Notre carte bluetooth est bien reconnu
$ ls -l /sys/class/bluetooth # on cherche le composant bluetooth
hci0 -> ../../devices/pci0000:00/0000:00:14.0/usb1/1-14/1-14:1.0/bluetooth/hci0 \ adresse unique de notre carte
{% endhighlight %}

De plus pour faire remonter le bluetooth dans le plugin BLEA de jeedom. Il faut installer sur votre Container le bluetooth.

{% highlight shell %}
$ ls -l /sys/class/bluetooth \ on regarde si la carte est reconnu
total 0
lrwxrwxrwx 1 root root 0 Dec 20 14:59 hci0 -> ../../devices/pci0000:00/0000:00:14.0/usb1/1-14/1-14:1.0/bluetooth/hci0 # réponse ok
$ hctitool dev
Devices:
	hci0	D0:C5:D3:33:7C:52 \ bluetooth ok
$ apt install -y bluetooth bluez
{% endhighlight %}

Finalement le bluetooth remontera dans notre jeedom sans créer d’extra arg pour la création du container contrairement au port usb.

{% highlight docker %}
docker run -d --net host --name jeedom \
-v /your_jeedom_path:/Jeedom/html:/var/www/html \
-e ROOT_PASSWORD=PASSWORD \
-e APACHE_PORT=9080 \
-e SSH_PORT=9022 \
-e MODE_HOST=1 \
--restart always jeedom/jeedom:master
{% endhighlight %}


## 3- Lancement de jeedom et paramétrage et affinage

à ce stade nous avons installé sur omv 3 containers ( mariadb avec utilisateur, phpmyadmin et jeedom ). Enfin il ne nous reste plus qu’à nous connecter dans notre navigateur.

rendez-vous sur notre page jeedom en se connectant dans un navigateur à l’adresse de notre NAS **http://192.168.*.*:9080**

### **Important !**
Remplacez dans « database hostname » *localhost* par **127.0.0.1** sinon une erreur sql va être généré. Toutefois après le lancement du container jeedom patientez quelques minutes avant de lancer le script d’installation.

Puis, on rempli bien Database username, password et name. Avec les mêmes caractéristiques lors de la création de la base de données plus haut. On laisse faire l’installation puis on se connecte à jeedom avec login et mot de passe par défaut **admin:admin**

{% picture posts/{{ page.guid }}/jeedom3-1.png --alt Paramétrage mysql initial jeedom --img width="820" height="711" %}
Ensuite à l’invite de commande on modifie le mot de passe. Puis on rentre ses coordonnées jeedom market pour pouvoir passer à l’étape suivante.

{% picture posts/{{ page.guid }}/jeedom-connection.png --alt connection à Jeedom --img width="820" height="491" %}

Une fois les étapes de connections bien remplies, nous allons jeter un oeil sur l’onglet /Analyse/santé et si tout s’est bien passé nous devrions avoir ceci:

{% picture posts/{{ page.guid }}/market.png --alt connection au market Jeedom --img width="820" height="700" %}

On s’aperçoit que la configuration réseau n’est pas bonne donc Rendez-vous dans l’onglet /Réglage/Système/Configuration/Réseaux et paramétrez comme l’image ci-dessous:

- Accès interne: votre adresse ip de votre carte réseau soit une adresse du type 192.168.xxx.xxx et non 127.0.0.1 vous rencontrerez des conflits avec certains plugins ( exemple xiaomi )
- Cochez: désactivez la gestion du réseau par jeedom
- rajoutez si nécessaire dans le masque ip vos adresses docker les notre sont en 172.17 ce qui donnerait 127.0.0.1; 192.168.\*.\*; 10.\*.\*.\*; 172.16.\*.\*; 172.17.\*.\*

Enfin revérifiez votre Santé Jeedom et tout devrait être au **VERT.**

Si vous rencontrez des **problèmes de droits** sur dossier/fichier ou **après le lancement d’une sauvegarde**. Alors sur votre container jeedom fraîchement créé il faudra faire les manipulations suivantes:

### Commande a exécuter pour les droits Jeedom

{% highlight shell %}
$ ssh -p 22 192.168.***.*** -l root
{% endhighlight %}

{% highlight docker %}
$ docker exec -it jeedom sh
{% endhighlight %}

{% highlight shell %}
$ sudo chown -R www-data:www-data /tmp/jeedom/ /var/www/html/
{% endhighlight %}


Pour conclure, après avoir fait ça on peut retourner sur notre jeedom et vérifier que l’état de santé est ok.
