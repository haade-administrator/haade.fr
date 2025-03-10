---
guid: 157
title: "Domotise tes volets roulants Bubendorff en Zigbee pour pas cher"
description: "Ne nous fions pas au titre je ne vais pas réellement domotiser des volets bubendorff mais remplacer le système par des moteurs filaires chamberlain. Je te donne mes raisons"
ref: ""
layout: post
authors: [Nico]
date: 2025-03-08 18:57
last_modified_at: 
categories: [Haade-lab, Securite, Zigbee]
tags: []
video: 
image: 'domotise-test-volets-roulants-bubendorff-en-zigbee-pour-pas-cher.png'
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
  - 
---

Aujourd'hui je t'explique non pas comment j'ai domotisé des volets Bubendorff en Zigbee, **simplement parce que ce n'est pas possible**, mais **pourquoi j'ai décidé de virer le système Bubendorff Tradi ID 1** qui avait 20 ans par des moteurs Chamberlain filaire à fin de course mécanique relié sur un interrupteur Zigbee.

Voilà **ma maison à 20 ans** et les volets installés à l'époque étaient de la **marque Bubendorff** des Tradi ID 1 dans un coffret roulant tunnel Titan.

> Ces volets et surtout les moteurs **ont mal vieillis**

**Au bout de 10 ans** les condensateurs des moteurs commencaient déjà à faiblir, ce qui avait pour conséquence un **dysfonctionnement sur les fins de courses à arrêt automatique**. Outre ces arrêts qui étaient de plus en plus approximatifs ça a **cassé le pallier haut** et **accentué le bruit** à la fin de course basse ce qui pesait sur l'ensemble du mécanisme.

Même après avoir **changé moi même ces condos**, le problème est réapparu après quelques années.

Le **second point négatif** se situe au niveau du bruit, avec les années les **moteurs sont devenus très bruyants** alors d'une part c'est due à l'usure mais aussi au niveau du coffret titan qui, il faut le dire, ne sont pas très bien insonorisés.

> Maintenant il est l'heure de les changer, deux options s'offrent à moi.

**1ère option** remplacer les tradi id 1 par des tradi id 2 ( radio ou filaire ).

**2ème option** changer de marque et installer de nouveaux moteurs ( radio ou filaires ) avec un adaptateur Bubendorff Tradi ID.

## Option 1 remplacement Bubendorff

Le moteur acutellement en place est un 20 NM.

Un moteur [radio Bubendorff R ID2 avec adaptateur coffret titan et télécommande](https://www.laboutiqueduvolet.com/10114-moteur-r-octo60-25nm-12rpm-radio-gauche-+-emetteur-3-boutons-+-sachet-adaptateur-id2.html){: target="_blank"} en 25NM coûte actuellement **plus de 270€**

**Avantage:**
- entièrement compatible coffret titan
- possibilité de domotiser avec [netatmo iDiamant](https://www.bubendorff.com/faq/4-comment-sinstalle-le-module-de-connexion-idiamant-with-netatmo/){: target="_blank"} coût 119€ supplémentaire.

**Inconvénient**
- **Protocole radio:** Bubendorff 868 MHz verouillé 
- le prix très cher

Un [moteur filaire Mi2](https://www.laboutiqueduvolet.com/10416-moteur-mi2-octo60-20nm-12rpm-filaire-impulsionnelle.html){: target="_blank"} ( sans télécommande et sans adaptateur ) coûte actuellement **plus de 220€** et il faudra rajouter les options.

**Avantage**

- pas de fin de course automatique donc pas de soucis de condensateurs

**Inconvénient:**

- le prix
- difficilement domotisable apperemment

Ce moteur livré **sans inverseur filaire**. Il est compatible avec :
- inverseur de volet roulant HAGER (Réf. BB227015)
- inverseur Inis encastré Position Fixe (Réf. SY1800513)
- inverseur LEGRAND à position fixe (Réf. BB227023) 

Ce moteur filaire est un moteur à **4 fils**, par conséquent,
si vous avez un moteur ancienne **génération à 3 fils**, il va vous falloir
tirer un 4ème fil du moteur au disjoncteur.

> Je ne partirai pas sur cette option car le prix me rebute tu le compredra en lisant cet article et Bubendorff m'a pas mal déçu.

## Option 2 changer de marque

**Partir sur une autre marque et prendre un adaptateur alors quoi choisir ?**

Déjà je ne prendrai plus de fin de courses automatiques simplement parce que les condensateurs vieillissent mal, et ça crée des dysfonctionnements, quelle que soit la marque.

> Donc je vais partir sur **des fins de courses manuels** bref à l'ancienne.

Pour la marque j'ai décidé de partir sur des **moteurs de volet chamberlain**, alors pourquoi Chamberlain:

- d'une part c'est une société Allemande qui fabrique à l'international et beaucoup aux états unis, 
- deuxièmement les tarifs sont extrêmements compétitfs.
- Et troisièmement **il y a pas longtemps j'ai changé le moteur de la porte de garage** par un moteur chamberlain, le moteur est bon et l'adaptation était super simple.

> Ce sont des moteurs de conception simple et domotisable en Zigbee tu l'as compris je vais partir sur cette option

## Quel matériel j'ai choisi

{% picture posts/{{ page.guid }}/moteur-volet-chamberlain-adaptateur-bubendorff-interrupteur-zigbee-moes-star.png --alt J'ai choisi un moteur chamberlain RPD25-10 avec un adaptateur bubendorff et un interrupteur Zigbee Moes ZS-SR-EUC --img width="940" height="529" %}

Donc je vais te faire un récapitulatif du matériel choisi et le coût global que ça m'a coûté par volet. 
Commençons par le moteur je suis parti sur un [Chamberlain RPD25-05](https://amzn.to/3FrKE4D){: target="_blank"}, prix 100€, tu trouveras le RPD25-10 sur [manomano](https://www.manomano.fr/p/moteur-tubulaire-chamberlain-rpd25-05-force-de-traction-max-50-kg-191-5000083){: target="_blank"} à 81€ ttc.

Ensuite il me faut un adaptateur universel de montage [je suis parti sur celui de la boutique du volet](https://www.laboutiqueduvolet.com/volet-roulant/supports-bubendorff/4689-support-moteur-pour-joues-bb.html){: target="_blank"} tarif 27€

Pour terminer il me faut un interrupteur Zigbee et comme je possède déjà des interrupteurs Moes Star sur puce Zigbee Tuya, [donc je suis naturellement parti sur les mêmes pour volets roulants](https://s.click.aliexpress.com/e/_oCHrrYV){: target="_blank"} tarif 25€ max sur Aliexpress.

Coût total pour une installation **d'un volet en Zigbee 143€** ( j'ai rajouté 10€ de livraison pour la boutique du volet )

> on est loin des 270€ pour un seul volet Bubendorff

Personnellement j'ai commandé un ensemble pour changer 4 volets 2 en 25NM et 2 en 15NM, avec 4 adaptateurs et 4 interrupteurs, j'en ai eu en tout livraison incluse pour 482€ à ce prix là je n'aurai même pas pu changer 2 volets en restant sur du Bubendorff, car 2 moteurs m'aurai coûté 554€ et toujours pas domotisable dans Home Assistant.

### Présentation du moteur Chamberlain RPD25-10

{% include product-embed.html image="moteur-volet-chamberlain-rpd-filaire-fin-de-course-mecanique.png" title="Moteur volet Chamberlain RPD" brand="Chamberlain" description="Moteur Volet mécanique et filaire Chamberlain disponible en 10,15,25 et 40NM top qualité prix" amazlink="3DE4kBO" %}

Pour commencer les moteurs sont de fabrications allemandes et de bonnes factures, Chamberlain annonce une garantie de 2ans. Tu trouveras la notice un peu plus bas.

**Caractéristique:**

- Moteur tubulaire pour arbre octogonal d'un diamètre de 60 mm.
- Pour volets roulants jusqu'à 11 m² de surface (PVC), 9 m² (aluminium) et 5 m² (bois). **Version 25NM**
- Facilité de réglage des points d'extrémité grâce au stylet de réglage fourni. 
- Adaptateur pour arbre octogonal inclus dans la livraison
- Convient pour l'installation de nouveaux bâtiments, mais aussi pour la modernisation des anciens bâtiments.
- Montage rapide et facile grâce aux composants prémontés (adaptateurs, entrepôts et entrepôts).

{% picture posts/{{ page.guid }}/moteur-volet-chamberlain-rpd25-10.png --alt Déballage du moteur chamberlain RPD25-10 fin de course manuelle --img width="940" height="529" %}

> Le colis est de **bonne facture** et le **produit bien protégé**, bref je n'ai rencontré aucuns soucis.

{% picture posts/{{ page.guid }}/emballage-moteur-volet-chamberlain-rpd.png --alt Déballage du moteur chamberlain RPD25-10 fin de course manuelle --img width="940" height="529" %}

Le moteur chamberlain est **livré précablé** avec *(neutre, phase, phase montée et descente ainsi que la terre.)*

**À l'intérieur on y trouve:**

- la notice explicative
- un support de moteur ( à fixer sur l'adaptateur bubendorff )
- un entraxe qui s'incère dans le support
- des visses pour l'entraxe.
- Une goupille de sécurité

{% include doclink.html pdf="notice-volet-chamberlain-rpd.pdf" title="Notice Moteur volet Chamberlain série RPD" %}

### Adaptateur universel Bubendorff

Pour l'adaptateur bubendorff j'ai choisi la version vendu par [laboutiqueduvolet](https://www.laboutiqueduvolet.com/volet-roulant/supports-bubendorff/4689-support-moteur-pour-joues-bb.html){: target="_blank"}, c'est une version en acier prémonté robuste et parfaitement adaptée aux joues Bubendorff Tradi ID.
Afin de fixer le support Chamberlain j'ai agrandi les trous car j'ai mis des visses de 8mm ( non fournis avec le kit ), les trous d'origines sont en 8mm

{% picture posts/{{ page.guid }}/adaptateur-joues-bubendorff-laboutiqueduvolet.png --alt Adaptateur moteur universel Bubendorff Tradi ID --img width="940" height="529" %}

Il y a un sense de montage dans la joue d'origine Bubendorff, l'espace pour le passage du cable doit être situé en haut à gauche.

### Interrupteur Volet Moes ZS-SR-EUC

{% include product-embed.html image="moes-zigbee-rf-smart-star-ring-curtain-switch-for-roller-shutter-electric-curtains-blind-motor-support-timing-remote-control.png" title="Interrupteur Zigbee et rf Moes star ring pour bubendorff" brand="Moes" description="MOES – interrupteur de rideau intelligent ZigBee, anneau étoile, pour volet roulant, rideaux électriques, moteur aveugle, télécommande Alexa/Google Home" affiliate="_ooJB5sV" %}

{% picture posts/{{ page.guid }}/presentation-interrupteur-moes-ZS-SR-EUC.png --alt Présentation de l'interrupteur pour volet Moes Star ZS-SR-EUC --img width="940" height="529" %}

Le branchement avec le moteur Chamberlain est très simple:

- relie le **neutre ( bleu )**{: .blue}
- relie la **descente/close ( phase noire )**{: .black}
- relie la **montée/open ( phase marron )**{: .brown}
- relie la **phase (rouge )**{: .red}

{% picture posts/{{ page.guid }}/branchement-interrupteur-moes-ZS-SR-EUC.png --alt Connectique de l'interrupteur pour volet Moes Star ZS-SR-EUC --img width="940" height="529" %}

> Si tu as inversé les phases de montées et descentes ce n'est pas grave **tu pourras inverser dans l'interface Zigbee**


Compatible [Zigbee2Mqtt](https://www.zigbee2mqtt.io/devices/ZS-SR-EUC.html){: target="_blank"}

## Montage de l'ensemble

{%- include alert.html type="warning" text="avant de démonter la coque pense à appairer les modules dans ton assistant préféré, attention tu vas travailler sous tensions pense à couper le courant avant"  %}

Commençons par monter l'entraxe fourni avec le volet et les visses à tête plate

{% picture posts/{{ page.guid }}/montage-axe-moteur-volet-chamberlain-rpd.png --alt Montage de l'entraxe sur le moteur chamberlain --img width="940" height="529" %}

Ensuite nous passons à la fixation du support moteur sur l'adaptateur universel Bubendorff

{%- include alert.html type="warning" text="Attention a bien orienter le moteur par rapport au support afin d'avoir <b>accès au réglage des fins de courses</b>, ne pas oublier <b>d'insérer la goupille de sécurité</b>" %}

{% picture posts/{{ page.guid }}/montage-support-moteur-sur-adaptateur-bubendorff.png --alt Montage du support moteur sur l'adaptateur bubendorff --img width="940" height="529" %}

### Démontage du volet actuellement en place

Avant de démonter le volet bubendorf n'oubli pas de couper le courant et de débrancher le cable dans la boite de dérivation. Notre moteur est alimenté par deux fils neutre et phase ce qui est très bien pour la suite et des plus simples.

{% picture posts/{{ page.guid }}/debranchement-moteur-bubendorf-tradi-id.png --alt Débranchement du moteur d'origine Tradi ID --img width="940" height="529" %}

Démonter un volet Bubendorff dans un caisson Titan est un jeu d'enfant, tu trouveras plusieurs tutos à ce sujet. Tout d'abord tourne la goupille opposée au moteur afin de pouvoir sortir l'axe. Ensuite muni d'un petit tournevis plat désolidarise le support moteur de la joue en appuyant sur le levier vert de chaque côté.

{% picture posts/{{ page.guid }}/demontage-de-ensemble-dans-le-caisson-sur-la-joue-bubendorff-tradi-id.png --alt Démontage de l'ensemble dans le caisson Bubendorff Titan --img width="940" height="529" %}

Une fois démonté, pour sortir le moteur il faudra avant tout percer le rivet qui tient le moteur dans le tube Octo 60. À l'aide d'un maillet tu sortiras facilement le moteur du tube.

### Montage du moteur RPD25 Chamberlain

**Pour info** le tube Bubendorff est légèrement plus grand que 60mm de ce fait il faudra lors du montage du moteur Chamberlain le maintenir en place à l'aide d'une visse ou deux.

J'ai décidé de mettre 2 visses à tête bombée afin de fixer le moteur Chamberlain dans le tube. Sur la notice rien n'indique la fixation, mais dans les vidéos de montages officiels on voit clairement le monteur forcer jusqu'à un claquement pour emboiter le moteur, comme dit pour moi il y a un léger jeu qui ne permet pas d'emboiter fortement. Mais ce n'est pas grave l'axe du bout du moteur à une partie en plastique plein qui permet d'y insérer une visse sans casser le système.

> Perso j'ai mis deuxvisses à l'opposé l'une de l'autre.

Lors du montage la roue côté moteur a une partie creuse tu dois la mettre en correspondance avec la moulure d'assemblage du tube voir la photo ci-dessous.

Pour terminer n'oubli pas d'orienter le moteur dans l'axe de l'adaptateur afin d'avoir accès facilement au réglage de la fin de course, comme sur la photo.

{% picture posts/{{ page.guid }}/montage-moteur-chamberlain-axe-octo-60.png --alt Installation de l'ensemble dans le caisson Bubendorff Titan --img width="940" height="529" %}

Après un nettoyage de l'ensemble plus un graissage du tubage de l'entraxe opposé au moteur nous sommes prêt à tout remonter dans le coffre tradi titan. **N'oubli pas de passer le cable dans le mur**. Retrouve ci-dessous le montage final.

{% picture posts/{{ page.guid }}/montage-final-de-ensemble-dans-le-caisson-sur-la-joue-bubendorff-tradi-id.png --alt Installation de l'ensemble dans le caisson Bubendorff Titan --img width="940" height="529" %}

> le résultat final est très propre et me convient pleinement.

## Intégration dans Home Assistant et Zigbee2mqtt

Grâce à Zigbee2mqtt notre volet va pouvoir être piloté dans la plupart des assistants domotiques du marché.

{% picture posts/{{ page.guid }}/home-assistant-zigbee2mqtt-moest-interrupteur-volet-roulant-ZS-SR-EUC.png --alt domotisation avec zigbee2mqtt des volets dans home assistant avec l'interupteur Moes ZS-SR-EUC --img width="940" height="633" %}

Grâce à l'intégration du ZS-SR-EUC de Moes tu pourras:

- **ouvrir/fermer et arrêter** les volets
- ouvrir les **volets partiellement** grâce au pourcentage d'overture
- Lancer et arrêter **la calibration**
- Changer **la position par rapport** à l'installation du moteur ( si le volet se déroule par l'avant c'est forward, par l'arrière backward )
- inverser l'order de fonctionnement 0/100%

{% picture posts/{{ page.guid }}/onglet-expose-home-assistant-zigbee2mqtt-moest-interrupteur-volet-roulant-ZS-SR-EUC.png --alt exposition des commandes avec zigbee2mqtt des volets dans home assistant avec l'interupteur Moes ZS-SR-EUC --img width="940" height="368" %}

Changer la position **forward/backward est utile si le branchement** open/clause des phases marrons et noires sont inversées

{% picture posts/{{ page.guid }}/parametre-specifique-home-assistant-zigbee2mqtt-moest-interrupteur-volet-roulant-ZS-SR-EUC.png --alt paramètre spécifique inverser l'ordre 0/100% des commandes avec zigbee2mqtt des volets dans home assistant avec l'interupteur Moes ZS-SR-EUC --img width="940" height="189" %}

### Calibrage es volets avec le Moes ZS-SR-EUC

Le calibrage des volets fonctionne bien voici la manipulation à effectuer

1. descend entièrement le volet
2. lance la calibration sur start dans zigbee2mqtt
3. appui sur le bouton de l'interrupteur monté
4. une fois l'arrêt souhaité appui sur stop toujours sur le bouton de l'inter
5. descend le volet ( bouton physique )
6. une fois en bas appui sur stop
7. pour terminer met la fonction calibrage sur end

J'ai remarqué qu'une fois calibré l'interrupteur Moes met 2 secondes de plus avant de s'arrêter pour la fin de course haute et basse. Pour les moteurs à fin de courses mécanique celà ne dérange pas.

Pour terminer tu peux enfin t'amuser dans Home Assistant et commander les volets à distance.

![Commande les volets en Zigbee grace au Moes ZS-SR-EUC dans home Assistant avec zigbee2mqtt]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/commande-des-volets-moes-dans-home-assistant.webp){: width="579" height="631"}

## Conclusion

Comme tu t'en doutes je suis déçu de la marque Bubendorff, même s'ils ont su se réinventer surtout sur la partie domotique, c'est une marque bien trop honéreuse pour un résultat catastrophique sur le long terme, il est tellement plus simple de partir sur d'autres marques et ainsi faire des économies. Domotiser entièrement un moteur de volet éléctrique coûte moins de 150€ pour une puissance de 25NM. Chez Bubendorff il t'en coûtera 277€ et à ce prix ce n'est toujours pas domotisé, il faudrait rajouter 150€ de plus pour l'ensemble des volets pour pouvoir les contrôler à distance, c'est tout simplement abhérant.









