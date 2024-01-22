---
guid: 105
title: "Test Sonoff TX Ultimate"
description: "Test de l'interrupteur intelligent wifi Sonoff Tx ultimate son et lumière au rendez-vous ultra personnalisable grâce aux coques interchangeables."
ref: "TX Ultimate T5-86"
layout: post
author: Nico
date: 2024-01-22 15:39
last_modified_at: 
categories: [Tests]
tags: []
image: 'test-interrupteur-intelligent-sonoff-wifi-tx-ultimate-light-ambiance.png'
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
rating: 5.0 
sourcelink:
  - https://sonoff.tech/product/smart-wall-switches/tx-ultimate/
---

Après les interrupteurs Sonoff de la gamme TX **( T0, T1, T2 et T3 )**, le fabriquant chinois a sorti en 2023 la série **TX Ultimate**, plus rien à voir avec le reste de la Gamme. Un produit très très bien fini **avec un panel d'options et de customisations exceptionnelles.**

{% include product-embed.html image="sonoff-tx-ultimate-t5-86.png" title="TX Ultimate" brand="Sonoff" description="Interrupteur intelligent et ultra personnalisable 1, 2 ou 3 touches coque son et lumières Ultimate TX T5-86" iteadlink="sonoff-tx-ultimate-smart-touch-wall-switch" domlink="peripheriques/6740-interrupteur-mural-tactile-intelligent-tx-ultimate-2-touches-sonoff.html" affiliate="_DDOhoQz" %}

## Déballage du Sonoff {{ page.ref }}

{% picture posts/{{ page.guid }}/deballage-interrupteur-sonoff-tx-ultimate-t5-2C-86.png --alt déballage du Sonoff du tx ultimate T5-C3-86 par Sonoff version européenne --img width="940" height="529" %}

Un emballage exceptionnel de niveau européen 😀, à l'intérieur tu y trouveras l'interrupteur mural sous blister avec un film de protection sur la face avant de l'inter. La première impression qui ressort de ce produit est une qualité exceptionnelle, le produit est très bien fini et la coque du dessus ( blanche ) est d'un touché satiné. La bande Led sous l'interrupteur est très bien intégré.
*ps:domadoo m'a fourni un double interrupteur T5-2C-86*

{% picture posts/{{ page.guid }}/face-arriere-sonoff-tx-ultimate.png --alt face arrière du tx-ultimate par Sonoff version européenne --img width="940" height="529" %}

L'ouverture de l'interrupteur Sonoff {{ page.ref }} se fait sans forcer, une fois les 4 visses enlevées tu auras accès au circuit imprimé.

{% picture posts/{{ page.guid }}/demontage-sonoff-tx-ultimate.png --alt démontage du tx-ultimate par Sonoff version européenne --img width="940" height="529" %}

Tu peux voir que Sonoff n'a pas lésiné sur le nombre de LED, un accès UART est proposé afin de pouvoir uploader un firmware customisé, à droite se trouve un module à vibration.

{% picture posts/{{ page.guid }}/vue-circuit-imprime-sonoff-tx-ultimate.png --alt vue du circuit imprimé du tx-ultimate par Sonoff version européenne --img width="940" height="529" %}

## Mise en service du Sonoff {{ page.ref }}

Bon comme le reste de la gamme Wifi si tu veux utiliser ce produit il te faudra télécharger l'application Ewelink dispo sur [android](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&gl=US){: target="_blank"} et [Apple Store](https://apps.apple.com/fr/app/ewelink-smart-home/id1035163158){: target="_blank"}.

**L'application Ewelink est très bien faite**, l'intégration des modules se fait sans soucis, si c'est ton premier module Sonoff, commence par créer un compte. Tu verras un peu plus bas qu'il est possible de l'intégrer dans home assistant grâce à HACS et SonoffLan mais il faudra tout de même en amont l'intégrer dans l'apppli Ewelink. 
**Il existe néanmoins un inconvénient** lors de l'utilisation de cette application, est le fait que tu utilises un cloud chinois pour contrôler les modules wifi de la gamme Sonoff.

{%- include alert.html type="info" text="Lors du fonctionnement via <b>l'application Ewelink</b>, l'activation d'un interrupteur n'entrainera pas de sons ni de vibrations <b>seul la lumière</b> sera dispo <b>contrairement à l'activation physique</b>." %}

Lors de la recherche du Wifi une lumière bleu clignote sur le haut du module puis fini par s'éteindre une fois connectée au réseau.

{% picture posts/{{ page.guid }}/fonctionnement-sonoff-tx-ultimate-application-ewelink.png --alt capture ecran ewelink du tx ultimate par Sonoff --img width="940" height="509" %}

{%- include alert.html type="info" text="Les caches interchangeables <b>ne sont pas dispos chez domadoo</b> cependant tu pourras te les fournirs directement chez Itead ou sur le lien d'achat Aliexpress" link="https://itead.cc/product/sonoff-tx-ultimate-smart-touch-wall-switch-cover/ref/122/" textlink="Achats des Covers pour TX Ultimate chez Itead" %}

## Caractéristiques du Sonoff {{ page.ref }}

{% picture posts/{{ page.guid }}/sonoff-tx-ultimate-cartoon-eclairage-led-presentation.png --alt Cartoon et ambiance light du tx ultimate par Sonoff version européenne --img width="940" height="529" %}

**L'interrupteur t'en mettra plein les yeux et les oreilles**, premièrement la réactivité des touches est sensationnelle et **sur toute la surface**, très réactive, il te suffit d'éffleurer la touche pour que celle-ci s'enclanche, *bruit*, *vibration* et *lumière led* s'activeront rien que ça, **point négatif tu ne pourras pas désactiver ces options elles sont pour le moment indissociables.**

Vue de l'interrupteur **avec la coque Star d'installée**, le changement de coque se fait assez facilement

{% picture posts/{{ page.guid }}/sonoff-tx-ultimate-star-eclairage-led-presentation.png --alt Star et ambiance light du tx ultimate par Sonoff version européenne --img width="940" height="529" %}

Second point **tu peux paramétrer l'affichage LED** en dehors du fonctionnement des interrupteurs, et ainsi illuminer le module en permanence. Cette option propose 8 thèmes différents: **(Veilleuse, Fête, Loisirs, Couleur, Enfance, Essuie-glace, Féerique,Étoile éclatante)**, tu y trouveras à coup sûre un éclairage à ta convenance.

Ci-dessous les différents thèmes en image d'éclairage LED disponible pour cet interrupteur.

{% picture posts/{{ page.guid }}/8-effets-led-Sonofflan-interrupteur-sonoff-tx-ultimate-t5-2C-86.png --alt 8 effets LED du tx-ultimate par Sonoff version européenne --img width="940" height="120" %}

## Fonctions disponibles du Sonoff {{ page.ref }}

Pas moins de 6 fonctions sont disponibles avec cet interrupteur:

- Jeux de 8 lumières LED
- Vibrations
- Sons lors de l'activation physique
- lumière sous l'interrupteur activé
- coques interchangeables
- Actions Slide Gauche ou droite

## Coques Interchangeables

Sonoff fournis en option des coques interchangeables, pour la version européenne tu as le choix entre cartoon (chat/ours) ou Star pour pimper ton interrupteur, la version 120 américaine propose un Cartoon quelque peu différent à mon sens plus réussi pourla chambre d'un petit garçon.

{% picture posts/{{ page.guid }}/interrupteur-sonoff-tx-ultimate-plus-coque-cartoon-et-star-version-europeenne.png --alt présentation des coques tx ultimate par Sonoff version européenne --img width="940" height="529" %}

**Cartoon européen**, avec son emballage

{% picture posts/{{ page.guid }}/coque-interchangeable-cartoon-sonoff-tx-ultimate-eu-86.png --alt présentation de la coque interchangeable cartoon tx ultimate par Sonoff version européenne --img width="940" height="529" %}

**Coque Star** avec son emballage.

{% picture posts/{{ page.guid }}/coque-interchangeable-star-sonoff-tx-ultimate-eu-86.png --alt présentation de la coque interchangeable star tx ultimate par Sonoff version européenne --img width="940" height="529" %}

Point supplémentaire, le Sonoff {{ page.ref }} est vendu avec une coque blanche mais il est **possible de l'interchanger**, la customisation n'a presque plus de limite, la version européenne propose deux coques en options [Cartoon ou Star](https://itead.cc/product/sonoff-tx-ultimate-smart-touch-wall-switch-cover/ref/122/){: target="_blank"}, je regrette cependant la version américaine du cartoon représentant baleine et corail, qui n'est pas disponible pour la version européenne, le bleu correspondrait mieux aux jeunes garçons.

## Branchement divers du Sonoff 3 boutons

Avec le Sonoff TX Ultimate T-3C-86 tu pourras contrôler moteur ou ballon d'eau chaude, ci-dessous les schémas de branchements.

{% picture posts/{{ page.guid }}/schema-branchement-sonoff-tx-ultimate-3-inter-moteur-chauffe-eau.png --alt schéma de branchement du tx ultimate T5-C3-86 par Sonoff version européenne --img width="940" height="739" %}

Seule, **la version 3 touches** permet de contrôler un moteur ou chauffe eau à condition que le dernier firmware Min:1.3.1 soit installé sur l'interrupteur.

## Vidéo Utilisation

### Vidéo du fonctionnement
Met le son et visionne le fonctionnement en direct du Sonoff {{ page.ref }}

{% include videoPlayer.html localId="fonctionnement-interrupteur-sonoff-tx-ultimate.webm" %}

### Vidéo du Slide

Petit tour d'horizon sur le fonctionnement du Slide en direct

{% include videoPlayer.html localId="fonctionnement-slide-gauche-droite-sonoff-tx-ultimate.webm" %}

### Vidéo Via Applications ( Ewelink ou SonoffLAN )

Pour terminer une vidéo de fonctionnement via l'application Ewelink ou SonoffLAN par Home Assistant.

{% include videoPlayer.html localId="fonctionnement-sonofflan-ewelink-tx-ultimate.webm" %}

## Sonoff {{ page.ref }} et Home Assistant

{% picture posts/{{ page.guid }}/controle-homeassistant-sonofflan-interrupteur-sonoff-tx-ultimate-t5-2C-86.png --alt Controle dans Home-Assistant avec Hacs et SonoffLan du Sonoff du tx ultimate T5-C3-86 par Sonoff version européenne --img width="940" height="529" %}

L'interrupteur est contrôlable via HomeAssistant grâce à l'intégration **SonoffLAN** et HACS, [j'ai rédigé un article à ce sujet]({% post_url /fr/2023-07-03-sonofflan-le-gestionnaire-sonoff-pour-home-assistant %}){: target="_blank"}, lis le et tu réussiras à coup sûre l'intégration.

{% picture posts/{{ page.guid }}/activation-led-Sonofflan-interrupteur-sonoff-tx-ultimate-t5-2C-86.png --alt Activation LED SonoffLan du Sonoff du tx ultimate T5-C3-86 par Sonoff version européenne --img width="940" height="529" %}

Bonne nouvelle Le Sonoff TX-Ultimate **fonctionne à 95% sans le Cloud**, en mode **Lan** tout est controlable **sauf le slide 1 et 2**
En mode **Auto ou Cloud** le Sonoff {{ page.ref }} **fonctionne à 100%**

{% picture posts/{{ page.guid }}/fonctionnemment-action-slide-Sonofflan-interrupteur-sonoff-tx-ultimate-t5-2C-86.png --alt fonctionnemment Slide action SonoffLan mode auto et cloud du Sonoff du tx ultimate T5-C3-86 par Sonoff version européenne --img width="940" height="529" %}

En **mode Auto ou Cloud** le slide gauche et droite est reconnu, en **mode Lan** ce n'est pas le cas pour l'intant [j'ai fait remonter une issue github à ce sujet](https://github.com/AlexxIT/SonoffLAN/issues/1328){: target="_blank}

{% picture posts/{{ page.guid }}/choix-effet-led-Sonofflan-interrupteur-sonoff-tx-ultimate-t5-2C-86.png --alt choix effets du tx-ultimate par Sonoff version européenne --img width="940" height="529" %}

Lors de **la prochaine mise** à jour du plugin SonoffLAN tu pourras contrôler facilement les thèmes via home assistant, pour effectuer ces tests j'ai fait une mise à jour du fichier lights.py de SonoffLAN

{%- include alert.html type="info" text="Lors du fonctionnement via <b>SonoffLAN et Home Assistant</b>, l'activation d'un interrupteur n'entrainera pas de sons ni de vibrations <b>seul la lumière</b> sera dispo <b>contrairement à l'activation physique</b>." %}

## Caractéristiques techniques

|**Modèle**|T5-1C-86/T5-2C-86/T5-3C-86/T5-4C-86<br>T5-1C-120/T5-2C-120/T5-3C-120/T5-4C-120|
|**Wi-Fi**|IEEE 802.11 b/g/n 2,4 GHz|
|**Entrée de type 86/UE**|**1 touche:** 100-240 V ~ 50/60 Hz Max 5 A<br>**2 touches:** 100-240 V ~ 50/60 Hz Max 10 A<br>**3 touches:** 100-240 V ~ 50/60 Hz Max 15 A<br >**4 touches:** 100-240 V ~ 50/60 Hz maximum 16 A |
|**Sortie de type 86/UE**|**1 touche:** 100-240 V~50/60 Hz Max 5 A<br>**2 touches:** 100-240 V~ 50/60 Hz Max 5 A/groupe 10 A/total<br>**3 touches:** 100-240 V~ 50/60 Hz Max 5 A/groupe 15 A/total<br>**4 touches:** 100-240 V~ 50/60 Hz Max 4 A/groupe 16 A/total|
|**Entrée de type 120**|**1 touche:** 100-240 V ~ 50/60 Hz maximum 5 A<br>**2 touches:** 100-240 V ~ 50/60 Hz maximum 10A<br>**3 touches:** 100-240 V ~ 50/60 Hz maximum 15A<br>**4 touches:** 100-240V~50/60 Hz Max 16A|
|**Sortie de type 120**|**1 touche:** 100-240 V~ 50/60 Hz Max 5A<br>**2 touches:** 100-240 V~ 50/60 Hz Max 5A/groupe 10A/Total<br>**3 touches:** 100-240 V~ 50/60 Hz Max 5A /Touche 15A/Total<br>**4 touches:** 100-240V~ 50/60Hz Max 4A/Touche 16A/Total|
|**Couleur**|Blanc|
|**Matériaux du boîtier**|PC+CRS|
|**Dimensions de type 86/UE**|86x86x39mm|

## Documentations du Sonoff {{ page.ref }}

{% include doclink.html pdf="caracteristiques-techniques-sonoff-tx-ultimate-T5-86-V1.0.pdf" title="Caractéristiques techniques de l'interrupteur intelligent wifi Sonoff TX Ultimate T5-86" %}

{% include doclink.html pdf="manuel-utilisateur-sonoff-tx-ultimate-T5-86-V1.0.pdf" title="Manuel utilisateur complet V1 de l'interrupteur intelligent wifi Sonoff TX Ultimate T5-86" %}

{% include doclink.html pdf="manuel-demarrage-rapide-sonoff-tx-ultimate-T5-86-V1.2.pdf" title="Manuel démarrage rapide v1.2 de l'interrupteur intelligent wifi Sonoff TX Ultimate T5-86" %}

{% include product-embed.html image="sonoff-tx-ultimate-t5-86.png" title="TX Ultimate" brand="Sonoff" description="Interrupteur intelligent et ultra personnalisable 1, 2 ou 3 touches coque son et lumières Ultimate TX T5-86" iteadlink="sonoff-tx-ultimate-smart-touch-wall-switch" domlink="peripheriques/6740-interrupteur-mural-tactile-intelligent-tx-ultimate-2-touches-sonoff.html" affiliate="_DDOhoQz" %}

## Info Achat Sonoff {{ page.ref }}

### Chez domadoo 

tu pourras te fournir en TX Ultimate 1, 2 ou 3 touches **mais pas de coques interchangeables**

[Sonoff TX Ultimate 1 touche à 32,99€](https://www.domadoo.fr/fr/peripheriques/6739-interrupteur-mural-tactile-intelligent-tx-ultimate-1-touche-sonoff.html?domid=39){: target="_blank"}

[Sonoff TX Ultimate 2 touche à 33,99€](https://www.domadoo.fr/fr/peripheriques/6740-interrupteur-mural-tactile-intelligent-tx-ultimate-2-touches-sonoff.html?domid=39){: target="_blank"}

[Sonoff TX Ultimate 3 touche commande iterrupteur et moteur à 34,99€](https://www.domadoo.fr/fr/peripheriques/6741-interrupteur-mural-tactile-intelligent-tx-ultimate-3-touches-sonoff.html?domid=39){: target="_blank"}

### Chez Itead 

**il est possible d'acheter en supplément les coques personnalisables:**

[Achat du TX Ultimate de 1 à 4 touches](https://itead.cc/product/sonoff-tx-ultimate-smart-touch-wall-switch/ref/122/){: target="_blank"}

[Achat des coques de 1 à 4 touches](https://itead.cc/product/sonoff-tx-ultimate-smart-touch-wall-switch-cover/ref/122/){: target="_blank"}

### Chez Aliexpress 

**la page de vente t'offre toutes les options**

[Achat de 1 à 4 touches avec ou sans coques](https://s.click.aliexpress.com/e/_DBWogFn){: target="_blank"}

{%- include alert.html type="warning" text="Seul l'interrupteur intelligent <b>3 touches</b> T5-C3-86 en V1.3.1, les versions 1ou 2 touches serviront simplement comme interrupteur <b>peut commander les moteurs</b>" %}

## **les + du produit** {{ page.ref }}
{: .blue}

- qualité de fabrication
- Coques interchangeables
- réactivité de fonctionnement
- touche sensitive sur toute la surface
- prêt au contrôle 2 voies
- contrôle par la voix (alexa et google)
- intégration parfaite via l'application
- Disponible [en 4 touches sur le site du fabriquant](https://itead.cc/product/sonoff-tx-ultimate-smart-touch-wall-switch/ref/122/){: target="_blank"}
- le prix **environ 30€**
- utilisable avec Home Assistant [(via SonoffLan et HACS)](({% post_url /fr/2023-07-03-sonofflan-le-gestionnaire-sonoff-pour-home-assistant %})){: target="_blank"}


## **les - du produit** {{ page.ref }}
{: .red}

- Utilisation d'un cloud chinois
- nécessite le neutre pour fonctionner
- seul l'interrupteur 3 boutons propose une utilisaton avec moteur (type volet par exemple)
- désactivation impossible (son, lumière et vibration)
- pas de rétroclairage sous la coque interchangeable

{% include product-embed.html image="sonoff-tx-ultimate-t5-86.png" title="TX Ultimate" brand="Sonoff" description="Interrupteur intelligent et ultra personnalisable 1, 2 ou 3 touches coque son et lumières Ultimate TX T5-86" iteadlink="sonoff-tx-ultimate-smart-touch-wall-switch" domlink="peripheriques/6740-interrupteur-mural-tactile-intelligent-tx-ultimate-2-touches-sonoff.html" affiliate="_DDOhoQz" %}

## Conclusion

Encore une fois Sonoff **signe un produit de qualité** digne des grands fabriquants Européens, tu cherches un interrupteur modulable et qui t'en met plein les yeux alors l**e Sonoff {{ page.ref }} est fait pour toi**, enfin si le contrôle par un Cloud Chinois ne te fait pas peur 🤬. Malgré les petits points négatifs **j'ai tout de même décidé de mettre la note de 5 étoiles car le Sonoff {{ page.ref }} est d'une qualité exceptionnelle.**



