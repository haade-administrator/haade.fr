---
guid: 150
title: "Test du Micro Module Contact-Sec Matter Wifi Sonoff"
description: "Sonoff dévoile son premier micro module contact sec compatible Matter/wifi le Mini-D"
ref: "Mini-D"
layout: post
authors: [Nico]
date: 2025-01-23 08:29
last_modified_at: 
categories: [Tests, Haade-lab]
tags: []
video: 
image: 'test-sonoff-mini-d-module-contact-sec-ideal-portes-de-garages.png'
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
rating: 4.6 
sourcelink:
  - https://itead.cc/product/sonoff-mini-dry-wi-fi-smart-switch-mini-d/ref/122
  - https://sonoff.tech/product/diy-smart-switches/mini-d/
---

**Peu nombreux** sur le marché et souvent sous exploité, les **modules domotisés à fonction contact-sec** sont très peu représentés surtout suivant le protocole de communications choisi, en **Zigbee quasi inexistant**, un peu mieux en wifi et plus souvent présent en z-wave. Sonoff sort son premier micro module contact-sec le {{ page.ref }}, un micro module wifi et compatible Matter. 

Faisons un tour d'horizon sur les particularités du **Micro module {{ page.ref }}**

{% picture posts/{{ page.guid }}/sonoff-mini-d-contact-sec-wifi-matter.png --alt Sonoff mini-d module contact sec wifi et matter le test --img width="940" height="529" %}

Alors quand je dit premier micro-module je parle d'un module encapsulé, sinon ils fournissent depuis un certains temps un module diy, [le RE5V1C](https://itead.cc/product/sonoff-re5v1c/ref/122/){: target="_blank"}

- Les sorties **NO/NC/COM sont sur le dessus**
- Les **entrées 12-48V, 110-230V** se retrouvent en dessous de part et d'autre du module.
- S1 et S2 te permettront de connecter un interrupteur NO/NC déporté
- Un voyant wifi
- Un petit interrupteur physique

> Bref un module contact-sec complet.

{% include product-embed.html image="sonoff-contact-sec-mini-d.png" title="Mini-D" brand="Sonoff" description="Premier contact sec de la marque compatible wifi et matter le mini-d par Sonoff" iteadlink="sonoff-mini-dry-wi-fi-smart-switch-mini-d" domlink="produits-compatibles-matter/7615-sonoff-module-contact-sec-matter-wifi-mini-d.html" affiliate="_oFJvsYZ" amazlink="4jjUchP" %}

## Présentation du {{ page.ref }}

Une petite boite bleue turquoise renfermant une notice **avec le qrcode Matter** sur la dernière page ainsi qu'un micro-module Mini-D

> Rien de plus, rien de moins, l'essentiel est dans ....

{% picture posts/{{ page.guid }}/presentation-deballage-sonoff-mini-d-contact-sec-wifi-matter.png --alt Présentation et déballage du Sonoff mini-d module contact sec wifi et matter --img width="940" height="529" %}

## La taille du {{ page.ref }}

**Point négatif**, la taille du module, il suffit de regarder les photos de comparaison entre un Sonoff zbmini extrême et le Mini-D. 
Le Mini extrême s'intègre parfaitement dans une boite de dérivation derrière un interrupteur, *il sera moins aisé d'intégrer le Mini-D derrière un interrupteur NO/NC*.

{% picture posts/{{ page.guid }}/comparatif-dimensions-sonoff-zbmini-extreme-et-mini-d.png --alt Comparatif des dimensions du sonoff mini-d et zbmini zigbee extrême --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/dimensions-sonoff-dry-contact-mini-d.png --alt Dimensions du micro-module contact sec le Sonoff Mini-D --img width="458" height="498" %}

## la connectique

Revenons sur les options de connections, ci-dessous retrouve les diagrammes nécessaires au bon fonctionnement du {{ page.ref }}
La **sortie NO/COMou NO/NC** permet d'alimenter un **moteur de maximum 8W**, je sais pas dans quel cas on pourrait alimenter ce type de moteur, mais ça doit avoir un certain intérêt.

{% picture posts/{{ page.guid }}/schemas-et-connections-du-micro-module-sonoff-mini-d-contact-sec.png --alt Schémas et connections du micro-module contact sec le Sonoff Mini-D --img width="940" height="1540" %}

Ci-dessus les schémas de branchement au moteur de la porte du garage, que tu branches le {{ page.ref }} en AC ou DC ne changera rien à la sortie NO/NC et te permettra de brancher en toute confiance le moteur de la porte de garage/barrière, bref tout ce qui se domotise en contact-sec **comme (les chaudières gaz/électrique ou fioul), etc..**

## Intégration du {{ page.ref }} dans l'application Ewelink

Bon je sais que ce n'est pas toujours la meilleure façon de visionner un gif animé, mais ce type de captures a le mérite d'être extrêmement légé par rapport à une vidéo, **tout ça pour te dire** que si tu veux pouvoir utiliser le Sonoff {{ page.ref }} dans l'environnement unique de chez Sonoff il faudra passer par l'application **Ewelink**. Commence par la télécharger sur le playstore ou l'Appstore.

{% include qrlink.html qrlink="https://sonoff.tech/ewelink/" text="télécharger l'application Ewelink directement pour Android ou Apple" realtextlink="Applications Ewelink pour Smartphone" %}

Ensuite rien de plus simple, branche le {{ page.ref }} en **AC/DC**, lance **l'application Ewelink** va tout de suite retrouver le module, si ce n'est pas le cas il faudra peut être mettre le contact sec en mode inclusion, **il suffit de rester appuyer 5 secondes jusque ce que la led du wifi (bleu) se mette à clignoter.**

![Intégration du module Sonoff mini-D dans l'application officielle Ewelink]({{ site.baseurl }}/assets/images/posts/150/integration-sonoff-mini-d-application-ewelink.webp{{ cachebuster }}){: width="434" height="940" class="lazyload pictaninpost"}{: target="_blank"}


## Intégration dans home assistant

Il existe deux façons d'intégrer les produits Sonoff wifi/Matter dans Home Assistant, l'une par l'intégration sur un **serveur Matter** au préalable activé sur Home Assistant, l'autre grâce au **module SonoffLan** disponible dans la bibliothèque Hacs, j'ai d'ailleurs rédigé un article à ce sujet en 2023 le lien est dispo juste en dessous.

[SonoffLan le gestionnaire des produits Sonoff dans Home Assistant]({% post_url /fr/2023-07-03-sonofflan-le-gestionnaire-sonoff-pour-home-assistant %})

### Installation avec Matter

Avant tout si c'est ta première intégration Matter n'hésite pas à [lire la documentation officielle.](https://www.home-assistant.io/integrations/matter/){: target="_blank"}

**Tout d'abord** pour pouvoir intégrer un produit compatible Matter facilement il faudra **installer un serveur Matter** sur ta box Home Assistant et installer **companion** pour Ios ou Android sur ton smartphone.

**Commençons par installer un Serveur Matteur** rien de plus simple clic sur le bouton ci-dessous

[![Installation du module complémentaire Matter serveur officiel](https://my.home-assistant.io/badges/supervisor_ingress.svg)](https://my.home-assistant.io/redirect/supervisor_ingress/?addon=core_matter_server)

Ou rends toi dans **Paramètres > Modules complémentaires > boutique des modules complémentaires et sélectionne Matter server** dans l'official addons ensuite démarre Matter serveur.

Va dans appareil et services et dans découverte tu verras Matter version Beta il te suffit de l'ajouter

[![Appareil et services, intégration](https://my.home-assistant.io/badges/integrations.svg)](https://my.home-assistant.io/redirect/integrations/)

{% picture posts/{{ page.guid }}/decouverte-serveur-matter.png --alt Découverte du réseau Matter dans Home Assistant --img width="340" height="274" %}

Si c'est ton premier serveur sur le réseau laisse la case coché: **Utilisez le module complémentaire officiel Matter Server dans le Supervisor**

> Voilà le serveur est installé

Ensuite il **faudra installer companion sur le Smartphone**, il s'agit de l'application officielle home assistant.

Tu peux [lire la documentation officielle de companion directement sur le site Home Assistant](https://companion.home-assistant.io/){: target="_blank"}

Une fois installé tu peux connecter le Sonoff Mini-D au secteur et ton **Smartphone reconnaitra automatiquement** le module comme interrupteur dans Matter.

*Suis les étapes* et choisis d'installer le module {{ page.ref }} avec Matter pour Home Assistant, **pour plus d'aide visionne le Gif animé**.

![Intégration du module Sonoff mini-D dans Home Assistant et Matter serveur]({{ site.baseurl }}/assets/images/posts/150/integration-sonoff-mini-d-matter-home-assistant.webp{{ cachebuster }}){: width="434" height="940" class="lazyload pictaninpost"}{: target="_blank"}

> Ensuite tu verras dans les appareils qu'un module s'est intégré dans Home Assistant sous l'onglet Matter.

{% picture posts/{{ page.guid }}/sonoff-contact-sec-mini-d-matter-home-assistant.png --alt Remontée du sonoff mini-D dans Matter avec Home Assistant --img width="650" height="217" %}

Voilà les informations que remontent le micro module contact-sec Sonoff {{ page.ref }} dans home assistant **grâce au protocole matter**.

> L'ensemble fonctionne parfaitement.

{% picture posts/{{ page.guid }}/information-sonoff-mini-d-contact-sec-dans-home-assistant-avec-matter.png
 --alt Remontée information du sonoff mini-D dans Matter avec Home Assistant --img width="940" height="805" %}

### Installation avec Sonofflan

SonoffLan est une application disponible dans la bibliothèque HACS, pour rappel un article dédié à Sonofflan: [SonoffLan le gestionnaire des produits Sonoff dans Home Assistant]({% post_url /fr/2023-07-03-sonofflan-le-gestionnaire-sonoff-pour-home-assistant %})

Cette application te permet **d'intégrer tout l'envirronnement Sonoff dans Home Assistant**, avant tout il faudra que tes modules soient au préalable intégré dans l'application Ewelink.

{% picture posts/{{ page.guid }}/integration-sonofflan-home-assistant-sonoff-mini-d.png --alt Intégration dans Home assistant hacs et Sonofflan du micro-module contact sec le Sonoff Mini-D --img width="940" height="746" %}

> Une fois SonoffLan installé il découvrira tous les modules intallés dans l'application Ewelink.

{% picture posts/{{ page.guid }}/installation-sonofflan-et-decouverte-des-modules-embarques-dans-ewelink.png --alt Intégration dans Home assistant hacs et Sonofflan du micro-module contact sec le Sonoff Mini-D --img width="940" height="539" %}

Voilà les infos du Sonoff {{ page.ref }} remontées dans Home Assistant par le biais de **SonoffLan**.

{% picture posts/{{ page.guid }}/sonoff-mini-d-contact-sec-dans-sonofflan.png --alt Informations dans Home assistant hacs et Sonofflan du micro-module contact sec le Sonoff Mini-D --img width="940" height="795" %}

## Caractéristiques Techniques

|Modèle|MINI-D|
|Connexion sans fil|Wi-Fi : IEEE 802.11 b/g/n 2,4 GHz|
|Charge max.|24 V⎓2 A max. Charge résistive OU 12/24 V⎓8 W Charge moteur|
|Puissance nominale|100-240 V~50/60 Hz 0,1 A max. OU 12-48 V⎓1 A max. μ|
|Couleur|Blanc|
|Matériau du boîtier|PC|
|Poids net|34,5 g|

**Les + du produit:**{: .blue}

- Le prix moins de 15€
- compatible Wifi et Matter
- intégration home Assistant, Ewelink
- alimentation AC ou DC
- spécial contact-sec

**Les - du produit:**{: .red}

- Les dimensions relativement importantes
- protocole Zigbee indisponible

{% include product-embed.html image="sonoff-contact-sec-mini-d.png" title="Mini-D" brand="Sonoff" description="Premier contact sec de la marque compatible wifi et matter le mini-d par Sonoff" iteadlink="sonoff-mini-dry-wi-fi-smart-switch-mini-d" domlink="produits-compatibles-matter/7615-sonoff-module-contact-sec-matter-wifi-mini-d.html" affiliate="_oFJvsYZ" amazlink="4jjUchP" %}

## Conclusion

Le Sonoff {{ page.ref }} est un **produit niche** sur le marché de la domotique, car rare sont les **produits disposants d'un contact-sec**, il est bien fini et fonctionnel, la sortie NO/NC permet même d'alimenter un moteur maximum 8W, facile d'installation pour un prix inférieur à 15€, fait de ce module un produit à acheter si tu désires contrôler entre autres **l'ouverture de ta porte de garage, portail ou contrôler ta chaudière.**