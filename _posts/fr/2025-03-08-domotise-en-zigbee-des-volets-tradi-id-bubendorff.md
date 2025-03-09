---
guid: 157
title: "Domotise tes volets roulants Bubendorff en Zigbee pour pas cher"
description: "Ne nous fions pas au titre je ne vais pas réellement domotiser des volets bubendorff mais remplacer le système par des moteurs filaires chamberlain. Je te donne mes raisons"
ref: ""
layout: post
authors: [Nico]
date: 2025-03-08 18:57
last_modified_at: 
categories: [Domotique, Haade-lab, Zigbee]
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
  - 
---

Aujourd'hui je t'explique non pas comment j'ai domotisé des volets Bubendorff en Zigbee, **simplement parce que ce n'est pas possible**, mais pourquoi j'ai décidé de virer le système Bubendorff Tradi ID 1 qui avait 20 ans par des moteurs Chamberlain filaire à fin de course mécanique relié sur un interrupteur Zigbee.

Voilà ma maison à 20 ans et les volets installés à l'époque étaient de la marque Bubendorff des Tradi ID 1 dans un coffret roulant tunnel Titan.

> Ces volets et surtout les moteurs ont mal vieillis

Au bout de 10 ans les condensateurs des moteurs commencaient déjà à faiblir, ce qui avait pour conséquence un disfonctionnement sur les fins de courses à arrêt automatique. Outre ces arrêts qui étaient de plus en plus approximatifs ça a cassé le pallier et haut et accentué le bruit à la fin de course basse ce qui pesait sur l'ensemble du mécanisme.

Même après avoir changé moi même ces condos, le problème est réapparu après quelques années.

Le second point négatif se situe au niveau du bruit, avec les années les moteurs sont devenus très bruyants alors d'une part c'est due à l'usure mais aussi au niveau du coffret titan qui, il faut le dire, ne sont pas très bien insonorisés.

Maintenant il est l'heure de les changer, deux options s'offrent à moi.

**1ère option** remplacer les tradi id 1 par des tradi id 2 ( radio ou filaire )
**2ème option** changer de marque et installer de nouveaux moteurs ( radio ou filaires ) avec un adaptateur Bubendorff Tradi ID

## Analyse de l'option 1

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
- - difficilement domotisable apperemment

Ce moteur livré **sans inverseur filaire**. Il est compatible avec :
- inverseur de volet roulant HAGER (Réf. BB227015)
- inverseur Inis encastré Position Fixe (Réf. SY1800513)
- inverseur LEGRAND à position fixe (Réf. BB227023) 

Ce moteur filaire est un moteur à **4 fils**, par conséquent,
si vous avez un moteur ancienne **génération à 3 fils**, il va vous falloir
tirer un 4ème fil du moteur au disjoncteur.

> Je ne partirai pas sur cette option car le prix me rebute tu le compredra en lisant cet article et Bubendorff m'a pas mal déçu.

## Option 2

Partir sur une autre marque et prendre un adaptateur alors quoi choisir ?
Déjà je ne prendrai plus de fin de courses automatiques simplement parce que les condensateurs vieillissent mal, et ça crée des dysfonctionnements, quelle que soit la marque.

Donc je vais partir sur des fins de courses manuels bref à l'ancienne.

Pour la marque j'ai décidé de partir sur des moteurs de volets chamberlain, alors pourquoi Chamberlain, 
- d'une part c'est une société Allemande qui fabrique à l'international et beaucoup aux états unis, 
- deuxièmement les tarifs sont extrêmements compétitfs.
- Et troisièmement il y a pas longtemps j'ai changé le moteur de la porte de garage par un moteur chamberlain, le moteur est bon et l'adaptation était super simple.

> Ce sont des moteurs de conception simple et domotisable en Zigbee tu l'as compris je vais partir sur cette option

## Quel matériel j'ai choisi

Donc je vais te faire un récapitulatif du matériel choisi et le coût global que ça m'a coûté par volet. 
Commençons par le moteur je suis parti sur un [Chamberlain RPD25-05](https://amzn.to/3FrKE4D){: target="_blank"}, prix 100€, tu trouveras le RPD25-10 sur [manomano](https://www.manomano.fr/p/moteur-tubulaire-chamberlain-rpd25-05-force-de-traction-max-50-kg-191-5000083){: target="_blank"} à 81€ ttc.

Ensuite il me faut un adaptateur universel de montage [je suis parti sur celui de la boutique du volet](https://www.laboutiqueduvolet.com/volet-roulant/supports-bubendorff/4689-support-moteur-pour-joues-bb.html){: target="_blank"} tarif 27€

Pour terminer il me faut un interrupteur Zigbee et comme je possède déjà des interrupteurs Moes Star sur puce Zigbee Tuya, [donc je suis naturellement parti sur les mêmes pour volets roulants](https://s.click.aliexpress.com/e/_oCHrrYV){: target="_blank"} tarif 25€ max sur Aliexpress.

Coût total pour une installation d'un volet en Zigbee 143€ ( j'ai rajouté 10€ de livraison pour la boutique du volet )

> on est loin des 270€ pour un seul volet Bubendorff

Personnellement j'ai commandé un ensemble pour changer 4 volets 2 en 25NM et 2 en 15NM, avec 4 adaptateurs et 4 interrupteurs, j'en ai eu en tout livraison incluse pour 482€ à ce prix là je n'aurai même pas pu changer 2 volets en restant sur du Bubendorff, car 2 moteurs m'aurai coûté 554€ et toujours pas domotisable dans Home Assistant.


