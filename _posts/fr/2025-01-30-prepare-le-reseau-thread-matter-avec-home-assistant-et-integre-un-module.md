---
guid: 151
title: "Prépare un réseau Thread et Matter sur Home Assistant"
description: "Découvre et prépare un routeur de bordure Thread avec matter afin d'intégrer les nouveaux produits arrivant sur le marché avec Home Assistant, Thread un protocole exceptionnel"
ref: ""
layout: post
authors: [Nico]
date: 2025-01-30 16:20
last_modified_at: 
categories: [News, Haade-lab, Home-Assistant]
tags: []
video: 
image: 'perpare-server-matter-avec-thread-configure-border-router-pour-homeassistant.png'
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
  - https://www.threadgroup.org/
  - https://csa-iot.org/all-solutions/matter/
  - https://openthread.io/?hl=fr
  - https://www.home-assistant.io/integrations/thread/
---

De nombreux articles **sont disponibles sur le protocole de gestions des produits connectés Matter**, actuellement il fonctionne avec le réseau Wifi ou le réseau Thread. Nous **connaissons tous les avantages et inconvénients du wifi**, mais as-tu déjà entendu **parler de Thread** ?

Cet article vient suite à une intégration d'un **nouveau produit que je vais présenter dans un prochain article le Tado-X**, j'ai voulu **l'intégrer directement dans Home Assistant** à travers Matter et Thread car il est compatible avec ces protocoles, et je ne voulais pas utiliser tout l'environnement Tado, **j'ai fini par y réussir mais ça n'a pas été aussi simple !**

## Matter + Thread Explications

### Revenons à nos moutons qu'est-ce que Matter

**Matter** est un protocole **orienté Objet**, il est capable de **gérer la liaison-fonctionnement et le contrôle des objets connectés**.
**Matter ne sait pas** gérer directement des **protocoles réseaux** c'est pour ça que les fabriquants le couple au **wifi ou au thread**.

## Qu'est-ce que Thread ?

**Thread est un protocole de réseau** maillé sans fil à faible consommation d'énergie et à faible latence identique à la **fréquence et au Zigbee.**
Tout comme Zigbee, Thread résout les complexités de l'IoT en répondant à des défis tels que l'interopérabilité, la portée, la sécurité, l'énergie et la fiabilité, ils n'ont **pas de point de défaillance unique** et incluent la capacité de **s'auto-réparer**.

**Qu'est-ce qui différencie Threas du Zigbee** ou Z-wave dans le fonctionnement ?

Et bien, les **périphériques Thread s'intègrent parfaitement aux réseaux IP largement disponible dans nos logements** plus vastes et n'ont pas besoin de passerelles ou de traducteurs propriétaires. Cela réduit l'investissement et la complexité de l'infrastructure, élimine les points de défaillance potentiels et réduit les charges de maintenance. **Thread connecte également les périphériques de manière sécurisée au cloud,** ce qui facilite le contrôle des produits et systèmes IoT à partir d'appareils tels que les téléphones portables et les tablettes.

**Schéma de fonctionnement Thread**

{% picture posts/{{ page.guid }}/thread-home-network-with-matter.png
 --alt Schéma de fonctionnement d'un réseau thread et matter sur réseau wifi privé --img width="940" height="691" %}

> On comprend mieux pourquoi les fabriquants s'orientent de plus en plus vers ce protocole.

### Conclusion

Dans un envirronnement Matter+Thread, Matter s'occupe de la gestion et du fonctionnement du produit, tandis que Thread est là comme transporteur des données sur le réseau.

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green en vente chez domadoo à moins de 100€" domlink="produits-compatibles-home-assistant/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html" %}

## Thread et Home Assistant

**Prérequis:**

- une box avec home assistant avec HAOS
- une clé ezsp type skyconnect paramétré avec un firmware thread
- Installer un serveur Matter sur HA
- installer un serveur Thread sur HA
- **Un smartphone avec companion d'installé**

{% picture posts/{{ page.guid }}/produit-compatible-thread.png
 --alt Exemple de produit compatible thread et openthread --img width="600" height="337" %}

**Pour arriver à intégrer un produit compatible Thread et openthread** n'hésite pas à contrôler le logo suivant sur l'étiquette du produit, il fonctionne avec thread via un border routeur, une clé de contrôle que nous allons paramétrer dans home assistant.

{% picture posts/{{ page.guid }}/logo-thread-compatible-home-assistant.png
 --alt Exemple de produit compatible thread et openthread logo officiel compatible border router --img width="150" height="45" %}

### Préparons une clé ezsp type zigbee

Toutes les clés disponibles sur le marché avec la puce de chez silicon labs EFR32MGXX sont susceptibles d'intégrer un firmware thread, [tu trouveras sur le répertoire Github de Darkxst plusieurs firmwares compatibles avec différentes clé.](https://darkxst.github.io/silabs-firmware-builder/){: target="_blank"}
Pour un aspect pratique je vais utiliser la clé zigbee Home Assistant ZBT-1 anciennement appelée Skyconnect. Pour faire la mise à jour ou changer de firmware, rien de bien compliqué. Rends toi sur le site [officiel du fabriquant](https://connectzbt1.home-assistant.io/firmware-update/){: target="_blank"}, en bas de cette page tu trouveras une icone **update firmware**. Branche la clé/dongle sur ton pc en USB et **clic sur le bouton**.

![Modification firmware Thread pour home assistant Skyconnect, zbt-1]({{ site.baseurl }}/assets/images/posts/151/installation-firmware-thread-zbt1-skyconnect-home-assistant.webp{{ cachebuster }}){: width="600" height="416" class="lazyload pictaninpost"}{: target="_blank"}

{% include product-embed.html image="nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-skyconnect-pour-home-assistant.png" title="Clé Zigbee et Thread ZBT 1 Skyconnect" brand="Nabucasa" description="Clé Home Assistant Nabu Casa compatible Zigbee ou Thread" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}

**Autre solution:** Si tu as une clé zbt-1 Home assistant te permet directement de la paramétrer en Thread via un simple lien. Dans ce cas tu laisse la clé branché à la bos Home Assistant HAOS, tu vas dans Paramètres > Système > Matériel

{% picture posts/{{ page.guid }}/firmware-thread-cle-zigbee-skyconnect-zbt1-automatique.png
 --alt Intégration firmware thread directement dans la clé nabucas skyconnect zbt-1 --img width="600" height="314" %}

> **PS:** Il existe une fonction **Multi Pan qui veut dire compatible Zigbee et Thread** en même temps, cependant cette fonction est toujours en phase de développement **je te déconseille de l'utiliser pour le moment.**

[Article officiel parlant du sujet multiprotocl sur la clé skyconnect zbt-1](https://connectzbt1.home-assistant.io/about-multiprotocol/){: target="_blank}

### Commençons pas créer un serveur Matter

Rien de bien compliqué, il te suffit de cliquer sur le lien ci-dessous, il te permettra de télécharger le module complémentaire Matter,  ensuite tu n'a rien à paramétrer et tu peux directement l'installer.

[![Télécharge, installe et démarrer le serveur Matter](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_matter_server){: target="_blank"}

**Pour terminer**, il faut ajouter **l'appareil Matter créé**, pour celà va dans **Paramètres > Appareils et Services > Découvertes** et clic sur Ajouter Matter.

**AUTRE SOLUTION MATTER**, si chez toi tu as déjà installé un produit compatible matter dans ton réseau domotique, alors il te suffit d'aller dans

**Paramètres > Appareils et Services > Découvertes**, là tu devrais avoir **Matter de proposé**, en cliquant simplement dessus, tu laisses la case cochée:**Utilisez le module complémentaire officiel Matter Server dans le Supervisor** et du coup ça installera automatiquement le serveur Matter.

{% picture posts/{{ page.guid }}/ajout-materiel-matter-decouverte-serveur-auto.png
 --alt Découverte et ajout d'un produit compatible Matter avec installation du serveur automatique --img width="700" height="223" %}

### Installons le serveur Openthread Indispensable

**OpenThread publié par Google** est une implémentation Open Source de Thread®. Google a lancé OpenThread pour rendre la technologie réseau utilisée dans les produits Google Nest plus largement accessible aux développeurs, afin d'accélérer le développement des produits pour la maison connectée et les bâtiments commerciaux.

[![Télécharge, installe et démarrer le serveur Openthread](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_openthread_border_router){: target="_blank"}

**Commence par télécharger** et installer le serveur Openthread, (lien ci-dessus ) et **avant de le lancer pour la première fois** il **faudra sélectionner ta clé zigbee** dans **les paramètres** et vérifier le **baudrate à 460800**. Comme sur l'image ci-dessous ensuite tu peux démarrer le serveur.

{% picture posts/{{ page.guid }}/openthread-parametres-serveur-clé-skyconnect-et-vitesse-de-transfert.png
 --alt Installation serveur Openthread --img width="700" height="493" %}

 > Voilà les deux serveurs **Matter et Openthread sont installés et opérationnels** mais ce n'est pas fini.

Continuons, maintenant il va falloir paramétrer un *border router* **c'est équivalent d'un coordinateur pour Zigbee/Z-wave**, *vérifie bien que les deux serveurs sont démarrés et opérationnels*, vas dans **Paramètres > Appareils et Services > Découvertes** et clic sur la **découverte Thread**, s'il n'y a pas de découverte Thread, vas dans **Ajouter une intégration** et choisis **Thread**. Pour terminer vérifie que ton coordinateur est bien remonté dans Thread. Toujours dans **Appareils et Services** Clic sur **l'intégration Thread préalablement configurée** ensuite rends toi dans **configurer**, tu devrais avoir un routeur de bordure ***ha-thread-XXX*** 

{% picture posts/{{ page.guid }}/border-router-operationnel-ha.png
 --alt Installation serveur Openthread et border routeur opérationnel dans Thread --img width="600" height="249" %}

Si tu désires [plus d'informations concernant Thread et HA va sur le lien officiel](https://www.home-assistant.io/integrations/thread/){: target="_blank"}, tout est indiqué, surtout s'il y a plusieurs border routeur comme google Home ou Apple Home kit qui sont déjà disponibles chez toi.

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green en vente chez domadoo à moins de 100€" domlink="produits-compatibles-home-assistant/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html" %}

### Paramétrage du Smartphone et Companion

Si **tu veux ajouter un nouveau produit** qu'il soit sous **Matter/wifi** ou **Matter/thread** tu n'auras d'autres choix que d'installer l'application Companion pour android ou Apple. Car tout se passe sur smartphone.

{% include qrlink.html qrlink="https://companion.home-assistant.io/" text="télécharger l'application Companion directement pour Android ou Apple" realtextlink="Applications Companion pour Smartphone" %}

Mais **avant de pouvoir ajouter des appareils Thread** basés sur Matter, ton téléphone doit **connaître les informations d'identification du réseau Thread** nouvellement créé.

Pour **partager les informations** d’identification avec ton téléphone **Android**, ouvrez l’application Home Assistant Companion.
Dans l'application Companion, accédez à **Paramètres > Application Companion > Dépannage** , puis sélectionnez Synchroniser les informations d'identification du thread .
Suivez les instructions à l'écran.
Résultat : vous verrez une confirmation indiquant que les informations d’identification Thread de Home Assistant ont été ajoutées à cet appareil.

Pour **partager les informations** d’identification avec ton **iPhone**, ouvre l’application Home Assistant Companion.
Accéde à **Paramètres > Appareils et services** , sélectionne l’ **intégration Thread** ,Sélectionne **Configurer sous Services** .
Au **bas de la zone** de réseau préférée, sélectionne **Envoyer les informations d’identification au téléphone** .

Tu trouveras toutes les informations complémentaires sur le lien officiel ci-dessous

[plus d'informations concernant Thread et HA va sur le lien officiel](https://www.home-assistant.io/integrations/thread/){: target="_blank"}

## Conclusion

Voilà en **quelques étapes** une installation qui te permettra d'accueillir tous nouveaux produits compatible Matter/Thread router border, sur ton installation Home Assistant, je trouve cette **étape d'intégration intéressante** car le protocole **Thread reste un très bon choix surtout face au wifi !**. Après cette manipulation l'intégration d'un robinet thermostatique tado-x directement dans ha est un jeux d'enfant

{% picture posts/{{ page.guid }}/inclusion-matter-thread-home-assistant-ok.png
 --alt Installation serveur Openthread integration matter home assistant tado ok --img width="940" height="529" %}





