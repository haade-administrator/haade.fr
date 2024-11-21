---
guid: 145
title: "Home assistant Yellow, pour qui ?"
description: "Test et intégrations de modules de la box Yellow première box à être sortie de terre par la société Nabu Casa, quels sont ses points fort et pour qui s'adresse-t-elle"
ref: "Home Assistant yellow"
layout: post
authors: [Nico]
date: 2024-11-21 20:45
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
video: 
image: 'test-home-assistant-yellow-integration-backup-zigbee-zwave-ssd.png'
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
rating: 4.2 
sourcelink:
  - https://yellow.home-assistant.io/
  - https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/
---

Il y a quelques temps je vous ai présenté la [box home assistant Green]({% post_url /fr/2024-02-12-test-box-homeassistant-green-et-cle-zigbee-skyconnect-performance-et-stabilite %}), une box plug'n play à **moins de 100€** qui fait sensation dans le monde de la domotique. Aujourd'hui c'est au tour de la **{{ page.ref }}**, sortie bien avant la box green, cette box n'est pas prête à fonctionner dès l'achat cependant les différentes options disponibles en font tout de même **une box domotique de choix mais pour un public plus averti !**

Pour une **intégration polyvalente** j'ai décidé de rajouter une **clé z-wave 800 GPIO** de la marque **Zooz**, ainsi la box {{ page.ref }} sera compatible nativement avec les protocoles (wifi, bluetooth, thread, Matter, z-wave 800 et zigbee 3.0), pour continuer j'ai rajouté un **disque dur ssd sandisk 500GO** afin de pallier au stockage présent sur la **carte CM4**, à savoir si la box {{ page.ref }} *gère bien le disque SSD !*

## Prérequis

- Une Box Home Assistant Yellow ( filaire ou **Poe** )
- Une clé USB pour transférer HAOS sur le raspberry Pi
- **Optionnel** (un disque dur ssd NVME)
- **Optionnel** une clé z-wave gpio ZOOZ ZAC93 entièrement compatible Yellow

## Déballage de la {{ page.ref }}

Les similitudes entre les **deux dernières box produites par Nabu Casa** sont de l'ordre de l'esthétique, oh je dirai 99% 🤠, rien que ça tu me diras, mais si tu ne me crois pas il n'y a qu'à regarder les photos prises ci-dessous.

{% picture posts/{{ page.guid }}/deballage-unboxing-box-domotique-home-assistant-yellow.png --alt Déballage de la box Home Assistant Yellow --img width="940" height="529" %}

La box {{ page.ref }} est livrée avec un câble rj45 **(pour la version POE)**, un dissipateur thermique pour le raspberri CM4, des pates thermiques et tout ce qu'il faut pour fixer l'ensemble. De jolis autocollants et [une notice d'installation en ligne accompagne le reste](https://yellow.home-assistant.io/){: target="_blank"}. La page web dédiée à la box {{ page.ref }} est des plus complètes, **je te conseil de la visiter sans plus attendre.**

{% picture posts/{{ page.guid }}/finition-box-domotique-home-assistant-yellow.png --alt Finition externe de la box Home Assistant Yellow --img width="940" height="529" %}

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

{% include product-embed.html image="nabu-casa-kit-home-assistant-yellow-avec-alimentation.png" title="Box Home Assistant Yellow" brand="Nabu Casa" description="Home Assistant Yellow est votre hub domotique prêt pour Matter, évolutif et extensible." domlink="box-domotique/7113-nabu-casa-kit-home-assistant-yellow-avec-alimentation.html" %}


## Caractéristique de la carte {{ page.ref }}

{% picture posts/{{ page.guid }}/tour-horizon-box-domotique-home-assistant-yellow-circuit-imprime.png --alt tour d'horizon du circuit imprimé de la box Home Assistant Yellow --img width="940" height="529" %}

1. Cavalier pour contrôler le connecteur externe usb-c en mode uart ou usb ( par défaut c'est en mode uart )
2. bouton boot recovery ( avec le cavalier sur usb ) voir la [fonction boot recovery sur la documentation officielle](https://yellow.home-assistant.io/guides/reinstall-os/){: target="_blank"} qui permet de réinstaller HAOS
3. Connectique pour brancher directement un connecteur usb/uart afin de mettre à jour directement le firmware Zigbee
4. **Port GPIO** dans mon cas servira à installer le dongle ZAC 93 Z-wave de Zooz
5. Cavalier ( je n'ai pas trouvé à quoi il servait )
6. connecteur nvme
7. emplacement raspberry pi cm4
8. alim POE

{% picture posts/{{ page.guid }}/connectique-box-domotique-home-assistant-yellow.png --alt connectique externe présente de la box Home Assistant Yellow --img width="940" height="529" %}

## Installation du Raspberry pi CM4

{% picture posts/{{ page.guid }}/installation-raspberry-cm4-dissipateur-thermique-compatible-home-assistant-yellow.png --alt installation du raspberry pi cm4 sur la box Home Assistant Yellow avec dissipateur --img width="940" height="529" %}

## Installation clé Z-wave 800 Zooz ZAC93 

Bonne Nouvelle Zooz, produit une [clé Z-wave ZAC93 Europe/Us compatible série 800 au format GPIO](https://www.getzooz.com/zac93-gpio-module/){: target="_blank"} et le tout compatible avec la {{ page.ref }}, **que demander de plus pour cette intégration**.

{% include product-embed.html image="dongle-gpio-zooz-zac93-compatible-home-assistant-yellow.png" title="Dongle GPIO Z-wave 800LR" brand="Zooz" description="Clé Z-wave Long Range 800 format GPIO compatible Home Assistant Yellow" amazlink="3YQdLEO" %}

Depuis peu on peut acquérir la clé Z-wave 800 sur le [site Amazon](https://amzn.to/3YQdLEO){: target="_blank"} c'est une bonne nouvelle, tu pourras aussi la **commander directement sur le site officiel** américain de Zooz [The Smartest House Zac93](https://www.thesmartesthouse.com/products/zooz-800-series-z-wave-long-range-gpio-module-zac93-lr?variant=40083610075199){: target="_blank"}, la clé ne t'en coûtera que **18$** mais n'oublie pas les frais de livraisons.

{% picture posts/{{ page.guid }}/dongle-zwave-gpio-zooz-zac93-compatible-home-assistant-yellow.png --alt Présentation de la clée GPIO z-wave 800 ZAC93 zooz et intégration sur la box Home Assistant Yellow --img width="940" height="529" %}

> Rendu de la clé GPIO ZAC93 sur la box {{ page.ref }}

{% picture posts/{{ page.guid }}/dongle-zwave-gpio-zooz-zac93-compatible-home-assistant-yellow-installation.png --alt Mise en place de la clée GPIO z-wave 800 ZAC93 zooz sur la box Home Assistant Yellow --img width="940" height="529" %}

### Upgrade du firmware 

{%- include alert.html type="warning" text="Télécharge le firmware correspondant à la bonne Zone et du bon module faute de quoi tu risques de faire dysfonctionner la clé Z-Wade, dans mon cas j'ai téléchargé le Firmware ZAC93 GPIO de la zone Europe" link="[Liens d'accès des firmwares Zooz](https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/)" textlink="Page de téléchargement des firmwares disponibles pour les produits de la gamme Zooz." %}

**L'upgrade du firmware Z-wave** est très simple commence par installer la célèbre bibliothèque  **Z-wave JS**. Z-wave JS est au protocole Z-wave ce qu'est Zigbee2mqtt au protocole Zigbee. À la différence qu'elle fonctionne en complément  en cliquant sur le lien ci-dessous

[![Installation de zwavejs2mqtt](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_zwavejs2mqtt&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository)

Ci-dessous **un gif animé du paramétrage de Z-wave JS** pour la box {{ page.ref }} ( dans la vidéo j'ai auparavant installé ZWave-JS )

![Installation z-wavejs et paramétrage du dongle zac93 gpio dans home assistant yellow]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/installation-z-wave-js-parametrage-cle-zooz-zac-93-et-update-firmware.webp{{ cachebuster }}){: width="940" height="534" class="lazyload pictaninpost"}{: target="_blank"}

**Ensuite ce n'est pas fini** il faut lier Z-wave JS à l'appareil Z-wave rien de bien compliqué **suis la doc** dispo dans le module z-waveJS **rubrique Documentation**, récupère ou copie cette adresse ```ws://a0d7b954-zwavejs2mqtt:3000```rends toi dans Paramètres > Appareil et service puis ajouter une intégration, sélectionne dans le moteur de recherche z-wave et déselectionne utiliser le module complémentaire ...., **fini par coller l'adresse, et voilà le tour est joué**.

> **Regarde la vidéo qui reprend la manipulation**

![liaison z-wavejs et z-wave avec paramétrage du dongle zac93 gpio dans home assistant yellow]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-zwavejs-avec-z-wave-et-reconnaissance-de-la-cle-zooz-zac-93-avec-possibilite-upgrade-firmware.webp{{ cachebuster }}){: width="940" height="534" class="lazyload pictaninpost"}{: target="_blank"}


1. **Télécharge le dernier firmware** disponible [sur la page Zooz dédiée](https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/){: target="_blank"}

## Installation du SSD

Rien de plus simple, utilise le filetage dispo sur la carte insère le disque NVME et verrouille le tout bon je ne te fais pas un dessin car c'est relativement simple à mettre en place.

{% include product-embed.html image="sandisk-ssd-plus-m2-nvme-500GO.png" title="Disque dur Nvme 500Go" brand="Sandisk" description="Disque dur de qualité 500Go ssd Nvme compatible Home Assistant Yellow" amazlink="3Za1tbT" %}

{%- include alert.html type="info" text="Actuellement Home Assistant ne gère pas de façon séparé le disque NVME, je m'explique, ce disque ne servira pour l'instant que pour remplacer le stockage intégré dans la carte raspberry CM4 et non comme disque complémentaire, ainsi si tu veux stocker tes sauvegardes ou autre images/vidéos d'un nvr il faudra transférer le logiciel HAOS du raspberry pi vers ce ssd." %}

> Dans l'état actuel des choses le disque dur ssd nvme ne sera pas de pleines utilitées donc optionnel pour le moment à moins que tu ai choisi un CM4 lite sans espace de stockage. La version lite coûte 17€ de moins que la version 32GB. Choisi bien dès le départ.

## {{ page.ref }} l'essentiel

Retrouve dans cet onglet l'essentiel des installations complémentaires pour home assistant afin de préparer au mieux ta domotique comme la sauvegarde automatisée, le monitoring, l'accès à distance simplifiée, la mise à jour des firmwares, enfin bref l'essentiel !

### HACS ( répertoire complémentaire )

Il devient quasi indispensable d'installer hacs en complément des modules Home Assistant, c'est un vivier d'intégrations et thèmes de grande ampleur, l'installation de ce module a été simplifiée et revu cette année. **Je te passe l'installation en image car la notice officielle est très bien faite.**

[Notice officielle d'installation HACS](https://www.hacs.xyz/docs/use/download/download/#to-download-hacs){: target="_blank"}

**Résumé:**

1. [![Open your Home Assistant instance and show the dashboard of an add-on.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=cb646a50_get&repository_url=https%3A%2F%2Fgithub.com%2Fhacs%2Faddons){: target="_blank"}
2. Dans le module complémentaire Get HACS, sélectionnez Installer.
3. Démarrez le module complémentaire.
4. Accédez aux journaux du module complémentaire et suivez les instructions qui y sont fournies.
5. Redémarrer Home assistant
6. Dans Home Assistant, accédez à Paramètres > Appareils et services.
7. Videz le cache de votre navigateur.

HACS n'apparaîtra pas dans la liste à moins que vous ne vidiez le cache de votre navigateur ou n'effectuiez une actualisation complète.
Dans le coin inférieur droit, sélectionnez **+ Ajouter une intégration.**

### Backup (Sauvegarde)

**La sauvegarde manuelle est disponible par défaut** dans HAOS {{ page.ref }} **Systèmes/Sauvegardes**, tu trouveras dans cet onglet toutes les sauvegardes disponibles avant mise à jours, et celles demandées manuellement, mais si tu veux automatiser les sauvegardes de façons journalières/mensuel, etc, il faudra installer un module complémentaire, j'ai **choisi Auto Backup**.

> La notice du module est complète, si tu as des questions n'hésite pas à me contacter.

[JCWillox Home assistant auto backup](https://jcwillox.github.io/hass-auto-backup/){: target="_blank"}

**Télécharge le répertoire Hass-auto-backup**

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=jcwillox&repository=hass-auto-backup&category=integration){: target="_blank"}

**Ensuite ajout de l'intégration**

[![Ouvrez votre instance Home Assistant et affichez une intégration.](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=auto_backup){: target="_blank"}

**Blueprint Event et Service**

[JCWillox exemple Events et Service](https://jcwillox.github.io/hass-auto-backup/examples/){: target="_blank"}

### Monitoring

Pas mal de fonctions **comme le contrôle des LED** se font nativement avec la version Yellow de HAOS. Rends toi dans
**Paramètres > Système > Matériel** ou clic sur le lien ci-dessous:

[![Ouvrez votre instance Home Assistant et affichez les informations sur le matériel.](https://my.home-assistant.io/badges/hardware.svg)](https://my.home-assistant.io/redirect/hardware/){: target="_blank"}

![Paramètre les led dans Home Assistant Yellow]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametrer-les-led-home-assistant-yellow.webp{{ cachebuster }}){: width="568" height="472" class="lazyload pictaninpost"}{: target="_blank"}

**Cependant** si tu veux monitorer l'ensemble des fonctions disponibles avec le Raspberry CM4 ainsi que d'autres fonctions ( 70 au moment ou j'écris cet article ) il te faudra **installer System monitor**, ça tombe bien c'est ultra simple, **clic sur le lien ci dessous:**

[![Ouvrez votre instance Home Assistant et affichez une intégration.](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=systemmonitor){: target="_blank"}

[System Monitor Home Assistant](https://www.home-assistant.io/integrations/systemmonitor){: target="_blank"}

### Réinstallation du système complet sur CM4

Une page dédiée des explications et disponibles par le [site Nabu Casa](https://yellow.home-assistant.io/guides/reinstall-os/){: target="_blank"}

**Option (recommandée)** réinstaller le système d'exploitation Home Assistant à l'aide du bouton rouge + bleu

1. Assurez-vous qu'aucun **périphérique USB n'est branché sur l'appareil**. 
2. Coupe l'alimentation de ton système.
3. Met le système sous tension.
4. Dans les 3 s (ou dès le démarrage), **appuye simultanément sur les boutons rouge et bleu** situés à l'arrière de l'appareil et maintenez-les enfoncés.
5. Maintenez les deux boutons enfoncés **pendant environ 10s**. La LED jaune ne doit pas commencer à clignoter !
6. Retire l’alimentation de ton système.
7. Suis les [instructions pour installer Home Assistant OS](https://yellow.home-assistant.io/power-supply/#installing-home-assistant-software-on-kit){: target="_blank"} à l'aide du programme d'installation de Home Assistant OS pour Yellow à **partir d'une clé USB**.

### Zigbee Flash Firmware

[Wiki Home Assistant pour un flash du firmware manuel](https://github.com/NabuCasa/silabs-firmware/wiki/Flash-Silicon-Labs-radio-firmware-manually){: target="_blank"}

installe le module **complémentaire Advanced SSH and terminal** en cliquant directement sur le bouton ci-dessous

[![Ouvrez votre instance Home Assistant et commencez à configurer une nouvelle intégration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=a0d7b954_ssh){: target="_blank"}

> N'oublie pas de désactiver **Mode protégé du module**, sinon tu ne pourras accéder au matériel donc à la clé.

{% picture posts/{{ page.guid }}/desactiver-mode-protege-module-advanced-ssh.png --alt désactivation du mode protégé dans le module advanced ssh afin d'accéder aux périphériques matériel --img width="940" height="616" %}

> Ci-dessous les étapes pour installer d'autres firmwares et bootloader sur la clé zigbee

{% highlight yaml %}
pip install universal-silabs-flasher
{% endhighlight %}

{% highlight yaml %}
git clone https://github.com/NabuCasa/silabs-firmware.git
{% endhighlight %}

{% highlight shell %}
cd silabs-firmware
{% endhighlight %}

Et installe la dernière version du firmware

{% highlight yaml %}
universal-silabs-flasher \
    --device /dev/ttyAMA1 \
    --bootloader-reset yellow \
    flash \
    --allow-cross-flashing \
    --firmware ./EmberZNet/beta/NabuCasa_Yellow_EZSP_v7.4.0.0_PA32_ncp-uart-hw_115200.gbl \
{% endhighlight %}

Si tu veux **installer la toute dernière version du bootloader** et firmware dispo sur le nouveau répertoire de Nabu casa, rends-toi à cette adresse [https://github.com/NabuCasa/silabs-firmware-builder/releases](https://github.com/NabuCasa/silabs-firmware-builder/releases){: target="_blank"}

vas dans le répertoire Bootloader

{% highlight shell %}
cd Bootloader
wget https://github.com/NabuCasa/silabs-firmware-builder/releases/download/v2024.10.21/yellow_bootloader_2.4.2.gbl
{% endhighlight %}

{% highlight yaml %}
universal-silabs-flasher \
    --device /dev/ttyAMA1 \
    --probe-method bootloader \
    --bootloader-reset yellow \
    flash \
    --firmware ./Bootloader/yellow_bootloader_2.4.2.gbl
{% endhighlight %}

**fais de même pour le firmware**

{% highlight shell %}
cd EmberZNet/beta/
wget https://github.com/NabuCasa/silabs-firmware-builder/releases/download/v2024.10.21/yellow_zigbee_ncp_7.4.4.0.gbl
{% endhighlight %}

{% highlight yaml %}
universal-silabs-flasher \
    --device /dev/ttyAMA1 \
    --bootloader-reset yellow \
    --allow-cross-flashing \
    flash \
    --firmware ./EmberZNet/beta/yellow_zigbee_ncp_7.4.4.0.gbl \
{% endhighlight %}

### Accéder en Externe avec FRP

**Contrairement aux autres fabriquants** de box domotiques, **Home Assistant résonne à l'inverse** en axant sa principale force sur la **sécurité**. Quand tu accèdes à l'environnement Home Assistant tu as **accès entièrement en local** par défaut. Si tu veux accéder à ta box depuis **l'extérieur** il faudra soit choisir l'offre cloud de Nabucasa qui est bienentedu payante. Mais tu peux aussi mettre en place un **service gratuit** comme le **vpn wireguard**, ou utiliser un module **duckdns**.
Mais si tu n'y connais rien tu peux aussi mettre en place un système [**entièrement gratuit appelé FRP**]({% post_url /fr/2021-06-18-frp-configurer-acces-distance-homeassistant %}) et intégré par Haade. J'ai fait un article à ce sujet, en 2-3 clics tu pourras te connecter à distance grâce à une adresse *.eu.haade.fr et je tiens à le dire le tout est gratuite depuis 2 ans déjà.
Pour se faire rien de plus simple [contacte-moi](../contact/){: target="_blank"} et **je te donnerai un login et mot de passe**, notre serveur est protégé par un VPN, pour le tuto d'installation [j'ai rédigé un article complet dispo à cette adresse]({% post_url /fr/2021-06-18-frp-configurer-acces-distance-homeassistant %}).

## Parlons tarif

Pour avoir une telle configuration et partons sur le fait **que nous voulons reporter l'espace de stockage du système d'exploitation HAOS** sur un ssd, il m'en à coûté:

- Home assistant yellow version POE: **159€** (la version alim coûte 10€ de moins)
- raspberry pi CM4 8GB version Lite avec wifi: **88€**
- Clé z-wave Zooz Zac93: **36€**
- SSD Nvme Sandisk 500GB: **40€**

> Pour avoir une installation aux différents protocoles **(Z-wave, Zigbee, Wifi)** l'ensemble m'a coûté: 323€ [WAF](https://fr.wikipedia.org/wiki/Facteur_d%27acceptation_f%C3%A9minine){: target="_blank"} mais cher ..

## Caractéristique technique {{ page.ref }}

- Carte porteuse pour le module Raspberry Pi Compute 4 (CM4)
- Connecteur carte-à-carte CM4
- Prise en charge du démarrage direct à partir de périphériques NVMe (par exemple, pour CM4 Lite)
- 12 cm x 12 cm
- Compatible avec toutes les 32 variantes de CM4
- Quad-core Cortex-A72 (ARMv8) 64-bit / 1,5 GHz
- Jusqu'à 8 Go de RAM
- Jusqu'à 32 Go de stockage eMMC
- L'approbation réglementaire ne couvre pas les variantes sans fil
- Connectivité sans fil intégrée pour la maison intelligente (module Silicon Labs MGM210P Mighty Gecko)
- Prend en charge Zigbee 3.0, OpenThread et Matter
- Radio 2,4 GHz avec une puissance de transmission jusqu'à +20 dBm
- Mémoire flash programme de 1024 Ko, mémoire de données RAM de 96 Ko
- Pré-installé avec le firmware Zigbee 3.0 (EZSP), peut être mis à jour
- Emplacement d'extension
- Pour les SSD NVMe (M-Key)
- Prise M.2 M-Key
- Prend en charge les modules 2230, 2242, 2260 et 2280
- PCIe x1

**Remarque:** L'accélérateur IA Google Coral ne fonctionne pas dans l'emplacement d'extension. Pour plus de détails, consultez ce problème

- Ethernet Gigabit
- 2 x Port hôte USB 2.0 de type A
- 1 x Port USB-C 2.0 (pont USBXpress USB Silicon Labs CP2102N)
- Mode UART (par défaut) : adaptateur USB vers série de débogage
- Mode USB : Interface USB 2.0 CM4 pour récupération USB
- Convertisseur numérique-analogique stéréo de haute qualité
- Sortie ligne 2 V RMS sur prise audio 3,5 mm
- Rapport signal/bruit de 106 dB
- 2 x Bouton-poussoir
- Rouge : Réinitialisation d'usine
- Bleu : À déterminer
- Horloge temps réel sauvegardée par une batterie CR2032</ li>
- LED d'état (peut être éteinte pendant le fonctionnement régulier)
- Rouge : Alimentation
- Vert : Utilisation du disque
- Jaune : État du système Home Assistant

**Alimentation:**

- 12 V / 2 A via connecteur d'alimentation CC à barillet (5,5 mm x 2,1 mm)
- Ethernet : PoE+ IEEE 802.3at-2009 Classe 3 ou 4 (sélectionnable via cavalier)
- Consommation électrique typique
- Veille ~1,5 W
- Veille avec NVMe ~2,5 W
- Charge ~5-9 W

**Boîtier:**

- 123 mm x 123 mm x 36 mm
- Plastique polycarbonate injecté translucide
- Assemblage sans outil
- Accueille un dissipateur thermique personnalisé (inclus)

**Les + du produit:**{: .blue}

- Le design
- la polyvalence (surtout grace au raspberry pi)
- la qualité de fabrication
- la qualité des matériaux utilisés
- Led controlable dans l'application
- 5 protocoles intégrés ( zigbee, *Z-wave, Thread/Matter, wifi, bluetooth )

**Les - du produit:**{: .red}

- Grande polyvalence grâce à Home Assistant
- le prix **plus de 200€** pour un système fonctionnel
- Pour le moment incompatible Google Coral
- Gestion SSD externe incomplète
- Obligation de montage à l'achat ( pas fait pour un débutant )

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

{% include product-embed.html image="nabu-casa-kit-home-assistant-yellow-avec-alimentation.png" title="Box Home Assistant Yellow" brand="Nabu Casa" description="Home Assistant Yellow est votre hub domotique prêt pour Matter, évolutif et extensible." domlink="box-domotique/7113-nabu-casa-kit-home-assistant-yellow-avec-alimentation.html" %}


## Conclusion

Voilà j'ai a peu près fais le tour en te présentant la box {{ page.ref }}, c'est **une box** certe **de qualité** mais elle n'est pas conseillé aux novices car il te faudra mettre les mains dans le cambouis pour l'installation, **rien de très compliqué** mais pas du tout plug'n play. De ce fait elle est **plutôt orientée pour les domoticiens avertis**. Ce qui en fait aussi sa force car elle est modulable et tu pourras utiliser 5 protocoles sans avoir installé une seule clé USB.
