---
guid: 175
title: "Tutos Openwrt, mode bridge AP, accès invité et protection du réseau"
description: "Un tuto Openwrt qui reprend les paramétrages point d'accès, guest mode, et adguardhome de façons fonctionnelles en utilisant l'interface LUCI"
ref: "openwrt"
layout: post
authors: [Nico]
date: 2026-04-22 18:39
last_modified_at: 
categories: [Sécurité, Haade-lab, NAS, News]
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
  - https://openwrt.org/docs/guide-user/network/wifi/guestwifi/guest-wlan
  - https://openwrt.org/docs/guide-user/network/wifi/guestwifi/extras
  - https://openwrt.org/docs/guide-user/network/wifi/wifiextenders/bridgedap
  - https://openwrt.org/docs/guide-user/network/wifi/guestwifi/guestwifi_dumbap
---

J'ai voulu rédiger un tuto récapitulatif car je me suis retrouvé confronté à plusieurs problème lors du paramétrage de mon routeur secondaire qui tourne avec openwrt

{% include product-embed.html image="openwrt-one-soutien-le-projet.png" title="Openwrt One" brand="Openwrt" description="Banana Pi OpenWrt One MediaTek MT7981B 1GB DDR4 2.5GbE RJ45 et Gigabit Ethernet RJ45 256 MiB SPI NAND routeur intelligent Open Source" amazlink="4dfavMl" affiliate="_c3c8vxkT" %}

## 1 - Passer le routeur en point d'accès derrière la box

Je possède une freebox dont l'interface d'administration est relativement complète, de plus celle-ci dispatche sur mon réseau interne de la fibre en 10G, et c'est surtout pour cela que j'ai voulu la garder en mode routeur et passer la passerelle openwrt installée sur un routeur xiaomi ax3200.

Pour passer openwrt en point accès ( mode bridge ) il est important de connecter le routeur de la box du port lan au port lan du routeur openwrt

Réseau > Interfaces et éditer le port lan
rajouter:
1. protocole adresse statique
2. le choix de votre adresse ipv4*
3. passerelle ipv4 ( il s'agit de votre routeur principal )
4. diffusion ipv4 en général 255.255.255.0
5. dans paramètres avancées > Utiliser des serveurs DNS spécifiques, indiquer l'adresse dns de votre box pour moi c'est 192.168.1.254
6. Finir par enregistrer et appliquer

* Il faut rester dans la même plage d'adresse de votre routeur ( pour moi il s'agit de 192.168.1.X ), pour le choix de l'adresse ipv4 statique il est bien de choisir une adresse en dehors des adresses attribuées automatiquement par votre box. Par exemple la freebox ouvre des adresses ip allant de 192.168.1.1 à 192.168.1.253, mais elle attribue seulement des adresses ip automatiquement jusqu'à 192.168.1.230. c'est pourquoi j'ai choisi 192.168.1.251 ainsi je suis à coup sûre de ne pas rentrer en conflit avec une adresse qui pourrait être attribuée.

Il est préconisé de désactiver le serveur dhcpv4 et v6 de l'interface lan du routeur pour laisser la box domotique gérer les adresses ip.

retourne dans interfaces lan > serveur dhcp:

1. paramètre principaux sélectionne ignore l'interface
2. ipv4 settings "dhcpv4 services désactivé
3. paramètres ipv6 service RA et service DHCPv6 désactivé
4. Finir par enregistrer et appliquer

Enfin le routeur est équipé d'un port wan inutilisable en l'état, mais avec openwrt rien ne peut lui céder, nous allons le relier à l'interface lan.

1. va dans réseau > interfaces onglet appareil et annule la configuration wan

> À ce stade le routeur openwrt est bien en mode point d'accès sur ton réseau Freebox

Bon je ne t'apprends rien mais une petite piqure de rappel ne fait pas de mal

## 2 - Création d'un réseau invité avec wifi

### Création de l'appareil

Pour commencer nous allons créer un appareil nommé "br-guest", va dans Réseau > interface > appareil.
Puis crée un nouvel appareil
1. type de périphérique: pont matériel
2. nom de l'appareil: br-guest
3. ports: aucun
4. sélectionne configurer un pont vide

Enfin sauvegarde

### Passons à l'interface

Dans l'onglet interfaces commence par ajouter une nouvelle interface

1. nom: guest
2. protocole: adresse statique
3. Appareil: br-guest

Enfin clic sur créer une interface puis dans **réglages généraux**

1. ajoute une ipv4 en dehors de ton réseau principal les mien est 192.168.1.x donc je suis passé sur 192.168.**2**.1
2. rentre un masque de réseau 255.255.255.0 si tu ne le fait pas tu ne pourras pas délivrer d'adresses ip à tes clients

dans paramètre du pare feux

1. créeune zone de pare feux nommé guest

dans serveur dhcp

1. active le serveur
2. et rajoute dans dhcp options deux entrées 3,192.168.2.1 et 6,192.168.2.1 (l'adresse dépend de celle rentrée dans précédemment dans ipv4) ces options te permettront de te connecter à internet
3. dans **paramètre ipv6** active **mode serveur** sur **service RA** et **service dhcpv6**
4. sauvegarde et enregistrer et appliquer

{% include product-embed.html image="openwrt-one-soutien-le-projet.png" title="Openwrt One" brand="Openwrt" description="Banana Pi OpenWrt One MediaTek MT7981B 1GB DDR4 2.5GbE RJ45 et Gigabit Ethernet RJ45 256 MiB SPI NAND routeur intelligent Open Source" amazlink="4dfavMl" affiliate="_c3c8vxkT" %}

### Paramétrage du firewall ( sécurité avant tout )

Rends toi dans réseau > Pare-feu

dans zone ( zone forwarding )
1. important! sélectionne masquage pour la zone lan > wan
2. dans la ligne guest clic sur éditer met entrée/sortie et intra zone forward sur accepter
3. Permettre la transmission vers les zones destination : sélectionne lan
4. sauvegarde

dans règles de trafic nous allons créer 3 règle l'une pour accepter la communication au port dns 53 une seconde pour accepter la communication au port dhcp 67-68 et la troisième pour refuser l'accès au réseau local lan

**Pour le port 53** clic sur ajouter

1. nom: Allow-DNS-Guest
2. sélection tcp et udp
3. zone source: guest
4. zone de destination: appareil
5. port 53
6. action: accepter puis sauvegarde

**pour les ports 67-68** ajoute une seconde règle

1. nom: Allow-DHCP-Guest
2. sélection  udp
3. zone source: guest
4. zone de destination: appareil
5. port 67-68
6. action: accepter puis sauvegarde

**interdiction d'accès au réseau local** ajoute une troisième règle

1. nom: Block-Guest-to-LAN
2. sélection  any ( n'importe lequel )
3. zone source: guest
4. zone de destination: lan
5. Adresse de destination: 192.168.1.0/24
6. action: **refuser** puis sauvegarde

### crée l'interface wifi invité pour ce faire:

1. va dans réseau sans-fil et clic sur ajouter à radio0 (2.4Ghz)
2. dans paramètre principaux rentre un nom SSID
3. dans réseau choisi **guest**
4. sécurité des réseaux sans fil sélectionne chiffrement WPA2-PSK
5. clé choisi un mot de passe
6. sauvegarde applique et enregistre

> À ce stade tu as un réseau invité qui a accès à internet mais pas à ton réseau local principal et protégé par le firewall

{% include product-embed.html image="openwrt-one-soutien-le-projet.png" title="Openwrt One" brand="Openwrt" description="Banana Pi OpenWrt One MediaTek MT7981B 1GB DDR4 2.5GbE RJ45 et Gigabit Ethernet RJ45 256 MiB SPI NAND routeur intelligent Open Source" amazlink="4dfavMl" affiliate="_c3c8vxkT" %}

### Pour terminer installons adguardhome

**AdGuard Home** est un logiciel qui sert à bloquer les publicités et les traqueurs sur tout ton réseau Internet, directement au niveau de ta connexion.

**En simple:** Au lieu d’installer un bloqueur de pub sur chaque appareil (téléphone, PC, tablette), tu l’installes une seule fois sur ton réseau (routeur, Raspberry Pi, serveur, etc.). Ensuite, il protège automatiquement tous les appareils connectés.

{%- include alert.html type="warning" text="Mais attention il faut que ton routeur possède un minimum de ram l'idéal est 512Mo dans mon cas je n'ai que 256Mo en dessous c'est délicat car openwrt absorbe déjà 86Mo et Adguardhome utilisera environ 128Mo" link="#" textlink="" %}

Pour limiter l'absorption de mémoire tu peux dans adguardhome limiter les délais des journaux des requêtes et/ou limiter le délai des statistiques mais pour limiter les requêtes si comme moi tu n'as que 256Mo je te conseil de sélectionner les listes de bloquage des dns Hagezi's pro et Hagezi's TFS mini
ps: AdGuard DNS filter celle sélectionné par défaut fonctionne pas mal.

### Installation et paramétrage Adguardhome dans openwrt

Rien de bien compliqué, va dans Systèmes > logiciels clic d'abord sur mettre à jour les listes ensuite dans le moteur de recherche tape adguard et installe adguardhome et luci-app-adguardhome ( le second te permettras d'avoir un visu sur les  services d'ailleurs un onglet service sera créé )

Comme le service adguard utilise le port 53 des dns il faudra le libérer dans openwrt pour ce faire va dans réseau > dns > devices et ports et dans port dns serveur rentre le port 54. Fini par enregistrer et appliquer

Maintenant tu peux paramétrer adguardhome en te rendant sur ton adresseip:300 pour moi http://192.168.1.2:3000

dans les paramétrages adguardhome:

1. paramétrage d'écout choisi br-lan et modifie le port en 8084 si ton port 80 par défaut est déjà utilisé
2. dans serveur dns choisi toutes les interfaces d'écoutes et laisse le port 53 par défaut

Là si tu as bien suivi les étapes précédentes tu n'auras pas de message écris en rouge. Sus les dernières étapes d'informations en ensuite tu pourras te connecter à adguardhome sur le lien http://adresseip:8084 par exemple.

Si tu as suivi ce tuto normalement ton interface lan a les serveur ipv4 et ipv6 de désactivé mais si tu décides de les laisser activé il faudra rentrer quelques règles, por ce faire édite à nouveau l'interface lan en sélectionnant au préalable l'ipv6 dédié
dans dhcp > paramètres principaux il faudra ajouter 3 règles à dhcp-options: suivant ton ipv4 lan:

1. 3,192.168.1.2
2. 6,192.168.1.2
3. 15,lan

**dans Paramètres ipv6** > Annonce ipv6 dns serveur colle ton ipv6 serveur sans /64 **dans mon cas: fda2:9907:aefa::1** fini par sauvegarder appliquer et enregistrer.

{% include product-embed.html image="openwrt-one-soutien-le-projet.png" title="Openwrt One" brand="Openwrt" description="Banana Pi OpenWrt One MediaTek MT7981B 1GB DDR4 2.5GbE RJ45 et Gigabit Ethernet RJ45 256 MiB SPI NAND routeur intelligent Open Source" amazlink="4dfavMl" affiliate="_c3c8vxkT" %}

## Conclusion

Voilà je n'ai rien inventé tu trouveras pas mal d'informations sur le wiki openwrt, mais un petit récapitulatif ne fait pas de mal. 10 minutes te suffiront pour faire de ton routeur un point d'accès derrière un routeur principal, créer une interface invité complète pour protéger ton réseau local et enfin sécuriser le tout grâce au firewall intégré et au très bon stoppeur de pub et siteweb adguardhome. 

> Openwrt est un logiciel extraordinaire qui te permettra de laisser libre court à ton imagination grâce au nombre d'options quasi illimitées