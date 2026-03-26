---
guid: 172
title: "Débloque facilement ton routeur Xiaomi en 5 minutes"
description: "Dans cet article je vais te montrer comment débloquer ton routeur Xiaomi et installer Openwrt en 1 seule ligne de commande"
ref: "Xiaomi AX3000T"
layout: post
authors: [Nico]
date: 2026-03-26 08:15
last_modified_at: 
categories: [Haade-lab, Mini-tutos]
tags: []
video: 
image: 'debloque-ton-routeur-xiaomi-facilement.png'
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
  - https://github.com/openwrt-xiaomi/xmir-patcher
  - https://openwrt.org/start
---

Voilà un article qui pourrait intéresser plus d'un compagnion, Xiaomi depuis de nombreuses années développe tout une gamme de routeur tous plus performants les uns des autres à des prix toujours plus compétitifs !

**Seul bémol, à ces routeurs**, le **système de gestion Miwifi qui est assez bien pensé mais manque cruellement de fonctionnalité!**

Durant de nombreuses années il était assez difficile de débloquer ce routeur pour y installer le célèbre système Openwrt même avec le répertoire **xmir-patcher** que j'utilise dans ce tuto, mais il a évolué et c'est devenu un jeux d'enfant.

Ce tuto fonctionne pour un bon nombre de routeurs Xiaomi n'hésite pas à tester, [avant tout consulte les issues du répertoire voir si des problèmes persistent](https://github.com/openwrt-xiaomi/xmir-patcher/issues){: target="_blank"}

> **J'ai réalisé ce tuto sur un routeur Xiaomi AX3200/AX6S** qui est toujours vendu sur [mi.com](https://www.mi.com/fr/product/xiaomi-router-ax3200/){: target="_blank"}

## Prérequis

- un routeur xiaomi compatible Openwrt ( dans mon cas un AX3200/)
- un pc sous **linux** ( de préférence )
- **python 3** installé sur le pc

## Liste des routeurs compatible Openwrt

[Liste des routeurs compatibles Openwrt](https://toh.openwrt.org/){: target="_blank"}

{% picture posts/{{ page.guid }}/liste-routeur-xiaomi-compatible-openwrt-03-2026.png --alt Liste des routeurs Xiaomi compatible Openwrt --img width="687" height="845" %}

{%- include alert.html type="info" text="Suivant les évolutions de version des routeurs, <b>tu peux rencontrer des problèmes</b> voir une incompatibilité total avec Openwrt, <b>vérifie la colonne version</b>, si elle est vide alors le routeur est compatible, par contre s'il y a quelque chose seul les versions indiquées fonctionneront" link="https://toh.openwrt.org/" textlink="Liste des routeurs compatibles Openwrt" %}

### Exemple de routeur facilement déblocable

**Xiaomi AX3000T ( version RD23, RD03)**

Xiaomi AX3000T est un routeur performant mais attention aux notes de versions.

{% include product-embed.html image="ax3000t.png" title="Routeur AX3000T" brand="Xiaomi" description="Routeur Xiaomi AX3600 AIoT d'occasion, version chinoise, Wi-Fi 6 double bande, 2976 Mbit/s, débit Gigabit, cryptage de sécurité WPA3, signal A53" affiliate="_c4tzHCqb" %}

{%- include alert.html type="error" text="Attention pour le routeur Xiaomi AX3000T, le fabricant a lancé le nouveau modèle <b>RD03v2</b>, doté d'une configuration matérielle Qualcomm entièrement différente.
On le reconnaît à son emballage : <b>le code-barres se termine par 706330 et la référence est DVB4510CN.</b>
<b>→ OpenWRT n'est pas compatible avec le nouveau RD03v2 !</b>" link="https://openwrt.org/inbox/toh/xiaomi/ax3000t" textlink="Page information openwrt Xiaomi AX3000T" %}

**Xiaomi AX3600** 

Comme pour le routeur AX3200/AX6S, le Xiaomi AX3600 est totalement pris en charge par xmir-patcher et Openwrt

{% include product-embed.html image="ax3600.png" title="Routeur AX3600" brand="Xiaomi" description="Routeur Xiaomi AX3600 AIoT, version chinoise, Wi-Fi 6 double bande, 2976 Mbit/s, débit Gigabit, cryptage de sécurité WPA3, signal A53" amazlink="4sqeZEt" affiliate="_c3a8iTob" %}

## 1ère étape mise à jour Miwifi

**Avant de débricker le routeur Xiaomi** il est important de **faire la mise à jour du firmware**, rien de plus simple:

- branche le rj45 wan sur internet.
- ton pc sur le rj45 lan.

{% picture posts/{{ page.guid }}/connection-miwifi.png --alt Se connecter au routeur Xiaomi pour la première fois --img width="940" height="472" %}

**Ensuite dans ton navigateur préféré** rentre l'adresse ip: [http://192.168.31.1](http://192.168.31.1){: target="_blank"}, et à l'invite du mot de passe rentre les identifiants par défaut:

login: **admin**
mot de passe: **admin**

1ère chose que te demande Miwifi est de changer le mot de passe, note le car tu en aura besoin à [l'étape 3 du déblocage dans l'invite xmir-patcher](#3ème-étape-le-répertoire-xmir-patcher)

Une fois sur Miwifi va dans settings>upgrade, vérifie si une mise à jour est disponible et clic sur update. Ne touche pas à ton routeur le temps de la mise à jour. **Une fois réalisée avec succès la première étape est terminée.**

Ci dessous un gif animé qui reprend la manipulation.

![Mise à jour du routeur Xiaomi Miwifi]({{ site.baseurl }}/assets/images/posts/172/1-ere-etape-mise-a-jour-miwifi.webp{{ cachebuster }}){: width="940" height="472" class="lazyload pictaninpost"}{: target="_blank"}

## 2ème étape récupérer le firmware openwrt

à l'heure ou j'écris ce poste Openwrt est [distribué en version stable **25.12.1**](https://downloads.openwrt.org/releases/25.12.1/){: target="_blank"}, cependant pour le Xiaomi AX3200, le site openwrt indique une version de compatibilité avec la version 24, mais quand on recherche dans les versions stables **je peux télécharger la version 25.12.1 pour le routeur AX3200/AX6S**, certainement que les pages du site ne sont pas à jours. Il existe deux méthodes pour récupérer le dernier firmware.

**Méthode 1: recherche automatique**

Utilise le [firmware selector](https://firmware-selector.openwrt.org/){: target="_blank"}, rentre le modèle ainsi que la version Openwrt souhaitée

{% picture posts/{{ page.guid }}/firmware-selector-openwrt.png --alt Télécharge le firmware openwrt pour ton routeur xiaomi avec firmware selector --img width="940" height="477" %}

> Enfin clic sur le lien **factory.bin**

**Méthode 2: recherche manuel**

**Pour trouver la bonne version** il faut connaitre le cpu, pour moi ce sera un Mediatek MT7622, je me rend sur la page [https://downloads.openwrt.org/](https://downloads.openwrt.org/){: target="_blank"} puis ensuite sur **releases > 25.12.1 > targets > mediatek > mt7622** et pour une première installation (déblocage) je télécharge la version factory: **xiaomi_redmi-router-ax6s-factory.bin**

## 3ème étape le répertoire xmir-patcher

[xmir-patcher](https://github.com/openwrt-xiaomi/xmir-patcher){: target="_blank"} met un répertoire à disposition qui nous **permet très simplement de débloquer un bon nombre de routeurs de la marque Xiaomi** et d'y installer facilement le firmware openwrt.

pour lancer ce patcher j'ouvre un terminal sous linux et mon pc a déjà la **librairie python 3.10 d'installée**, si tu tournes sur un environnement similaire le patch sera vite lancé, sous windows renseigne toi pour installer python 3.x.

{% highlight shell %}
git clone https://github.com/openwrt-xiaomi/xmir-patcher.git
cd xmir-patcher
{% endhighlight %}

Ensuite place le firmware Openwrt précédemment téléchargé pour mon cas *xiaomi_redmi-router-ax6s-factory.bin*, dans le dossier xmir-patcher/**firmware**

Dans le terminal **positionne toi dans le dossier xmir-patcher** et sous linux lance la commande `./run.sh` et sous windows `run.bat`, dans un premier temps toutes les dépendances python s'installent et dans un second temps le patcher te propose les invites suivantes

**Xiaomi XMiR Patcher**

1. - Set IP-address (current value: 192.168.31.1)
2. - Connect to device (install exploit)
3. - Read full device info
4. - Create full backup
5. - Install EN/RU languages
6. - Install permanent SSH
7. - Install firmware (from directory "firmware")
8. - Other functions 
9. - [[ Reboot device ]]
0. - Exit

Maintenant il te suffit de suivre au minimum les étapes 1 à 4 et finir par l'étape 7 installation du firmware

**étape 1:** sélectionne l'adresse ip du routeur **si tu n'as rien changé elle reste 192.168.31.1**

**étape 2:** connecte le routeur, il va afficher quelques infos et te demander de rentrer le mot de passe du routeur, rentre le mot de passe que tu as modifié dans miwifi ou par défaut **admin**. Ensuite il va préparer le routeur au déblocage, et activer le server ssh

{% picture posts/{{ page.guid }}/etape-2-xmir-patcher-debricker-xiaomi-router.png --alt connecte le routeur xiaomi avec xmir-patcher etape 2 --img width="700" height="349" %}

**étape 3:** lis les informations et fait gaffe à la version du routeur suivant le routeur à débricker comme par exemple pour le AX3000T

**étape 4:** crée une sauvegarde du firmware original

**étape 7:** sélectionne le firmware qui est inclus dans le dossier /firmware, et voilà le firmware s'installe

**Dernière étape:** reboot le device et sort de l'installateur

> **Maintenant ton routeur xiaomi fonctionne avec Openwrt.**

Il **n'aura fallut que 5 minutes** pour débricker ton routeur Xiaomi sans rentre une ligne de commande **merci xmir-patcher** 😘

## Soutiens le projet Openwrt

Tu ne **possède pas de routeur** et tu ne sais lequel choisir, mais tu sais une chose **tu veux utiliser le firmware Openwrt** alors soutiens le projet et choisi [l'Openwrt One](https://s.click.aliexpress.com/e/_c3V0RBGj){: target="_blank"}

**OpenWrt est un système d'exploitation Linux** destiné aux systèmes embarqués. Au lieu de proposer un firmware unique et statique, OpenWrt fournit un système de fichiers entièrement accessible en écriture avec gestion des paquets. Vous êtes ainsi libéré de la sélection et de la configuration des applications imposées par le fabricant et pouvez personnaliser le système grâce à des paquets adaptés à n'importe quelle application. Pour les développeurs, OpenWrt est le framework idéal pour créer une application sans avoir à développer un firmware complet ; pour les utilisateurs, cela se traduit par une personnalisation totale et la possibilité d'utiliser le système de manières inédites.

[Openwrt One le premier routeur 100% openwrt](https://openwrt.org/toh/openwrt/one){: target="_blank"}

Le 29 novembre 2024 marqua la sortie du routeur OpenWrt One, le premier routeur conçu pour vous offrir la possibilité de le réparer et une liberté logicielle totale. Équipé d'un SoC **MediaTek MT7981B**, il propose des fonctionnalités telles que le Wi-Fi 6 double bande (3×3/2×2), le PoE, deux ports Ethernet et un connecteur d'extension mikroBUS. **Proposé à un peu plus de 110€**, ce routeur, idéal pour les utilisateurs avertis, est inviolable et conforme aux normes FCC.

{% include product-embed.html image="openwrt-one-soutien-le-projet.png" title="Openwrt One" brand="Openwrt" description="Banana Pi OpenWrt One MediaTek MT7981B 1GB DDR4 2.5GbE RJ45 et Gigabit Ethernet RJ45 256 MiB SPI NAND routeur intelligent Open Source" amazlink="4dfavMl" affiliate="_c3c8vxkT" %}

## Conclusion

**Grâce à Xmir-patcher 5 minutes suffisent pour débricker ton routeur Xiaomi**, rien de plus simple et merci pour ce répertoire indispensable. N'oublie pas de soutenir le projet opensourse Openwrt en achetant le routeur One 🫰.