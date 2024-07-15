---
guid: 134
title: "Test du Welock SECBNEBL51 serrure à empreinte digitale"
description: "Welock m'a fourni cette serrure à empreinte digitale qui permet à quiconque de te passer de clés, plus besoin d'avoir peur en cas de pertes, Welock le tueur de clé."
ref: "SECBNEBL51"
layout: post
authors: [Nico]
date: 2024-07-12 17:25
last_modified_at: 
categories: [Tests, Haade-lab]
tags: []
video: 
image: 'test-welock-secbnebl51-serrure-empreinte-digitale-le-tueur-de-cle.png'
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
rating: 4.0 
sourcelink:
  - https://www.welock.com/collections/smart-lock-eu/products/welock-fingerprint-electronic-smart-door-lock-cylinder-secbn51
---

Aujourd'hui je vais te présenter une serrure a empreinte digitale connectée **mais pas trop** la Welock {{ page.ref }}. **Pourquoi mais pas trop**, je trouve que la fonction connectée n'y est pas, **je m'explique:** Les serrures connectées Welock sont débloquables via l'application pour smartphone Welock et c'est tout, il existe bien un bridge wifi mais je n'ai pas trouvé d'intégrations pour les systèmes opensources Home Assistance, Jeedom, Openhab... . 

> Le bridge wifi te permet juste de contrôler la serrure via l'application welock à distance.

Actuellement la welock {{page.ref}} ne se connecte à l'application que via bluetooth donc à proximité de la serrure, c'est bien c'est secure mais ce n'est pas ce que l'on demande à une serrure connectée actuelle.

## Déballage

Concernant le packaging rien à dire, c'est très bien fait, le carton est d'un volume intéressant qui ne laissera aucune place aux doutes. Attention ne jette pas le carton une fois l'intallation réalisé car tu trouveras l'identifiant unique de la serrure qui te permettra de la connecter à l'application.

{% picture posts/{{ page.guid }}/emballage-déballage-welock-SECBNEBL51-serrure-empreinte-digitale.png --alt Déballage unboxing de la serrure à empreinte digitale Welock SECBNEBL51 --img width="940" height="529" %}

Dans le colis tu trouveras:
- **des notices en différentes langues bien faites**
- la serrue connectée
- une clé allen
- une clé pour effectuer un reset
- plus un tournevis, des visses summplémentaires
- des embouts verts de verrouillages de visses
- une rallonge et une visse pour le Barillet
- ainsi que 3 badges RFID qui te serviront à débloquer le mécanisme en plus du débloquage par empreinte digitale.

{% include doclink.html docx="Manuel-SECBNEBL51_FR.pdf" title="Manuel utilisation serrure à empreinte digitale Welock SECBNEBL51" %}

{% picture posts/{{ page.guid }}/déballage-welock-SECBNEBL51-serrure-empreinte-digitale-fourniture.png --alt Ensemble du matos fourni dans le colis de la serrure à empreinte digitale Welock SECBNEBL51 --img width="940" height="529" %}

Pour finir ce tour d'horizon de l'emballage tu pourras te rendre compte que la serrure est très bien protégé contre les alléeats du transport. Mais aussi de la taille de celle-ci.

{% picture posts/{{ page.guid }}/emballage-rendu-taille-welock-SECBNEBL51-serrure-empreinte-digitale.png --alt Ensemble du matos, protections colis et taille fournis dans le colis de la serrure à empreinte digitale Welock SECBNEBL51 --img width="940" height="529" %}

## Organigramme de la Welock {{ page.ref }}

{% picture posts/{{ page.guid }}/WeLock-Codes.jpg --alt Organigramme des modifications d'empreintes digitales de la serrure à empreinte digitale Welock SECBNEBL51 --img width="600" height="642" %}

{% picture posts/{{ page.guid }}/WeLock-Ajout-RFID.png --alt Organigramme des modifications et ajouts de cartes rfid de la serrure à empreinte digitale Welock SECBNEBL51 --img width="345" height="600" %}

{% picture posts/{{ page.guid }}/WeLock-Autres-parametres.png --alt Organigramme des autres fonctions de la serrure à empreinte digitale Welock SECBNEBL51 --img width="600" height="632" %}

## L'empreinte digitale

Je dois dire que le fonctionnement et la paramétrage par empreinte digitale est ultra réactif, très précis bref rien à redire. Le paramétrage

## Ajout des piles

L'ajout des piles passe par une manipulation de la coque, commence par:

- dévisser la protection en zinc à l'aide de la clé allen
- tire sur la manchon en caoutchouc d'extrémité dépourvu de la visse
- ajoute les piles non fournis de type 3 x AAA
- referme le manchon et verouille celui-ci à l'aide d'une visse pournis dans le colis.

{% picture posts/{{ page.guid }}/insertion-des-piles-dans-le-welock-SECBNEBL51-serrure-empreinte-digitale.png --alt Insertion des piles dans la serrure à empreinte digitale Welock SECBNEBL51 --img width="940" height="529" %}

## Mise en place de la rallonge du barillet

La serrure Welock {{ page.ref }} est compatible avec les serrures de type européen si tu as un doute n'hésite pas à contacter l'équipe, ils répondront rapidement à tes questions [service@welockglobal.com](mailto:service@welockglobal.com){: target="_blank"}

**pour se faire:**

- dévisse la poignée en Zinc à l'aide de la clé allen
- retire la poignée
- met en place la rallonge et fait là correspondre aux poinçons et encoches correspondantes
- met en place la longue visse et serre là à fond
- maintenant tu peux remettre en place la poignée en Zinc et resserer la visse allen.

> Ainsi tu rallongera le barillet la plage de réglage passera de 50 à 100mm.

{% picture posts/{{ page.guid }}/insertion-de-la-rallonge-dans-le-welock-SECBNEBL51-serrure-empreinte-digitale.png --alt Insertion de la rallonge dans la serrure à empreinte digitale Welock SECBNEBL51 --img width="940" height="529" %}

Person je n'ai pas eu besoin de placer cette rallonge lors de mes tests.

## Mise en place de la Welock {{ page.ref }}

Pour mettre en place la serrure là aussi ce n'est pas très compliqué, cependant il faudra passer par un démontage de l'ancien barillet afin de remplacer tout le système.

**Commence par:**

- dévisser la visser de vérouillage du barillet
- une fois démonté prépare la serrure welock en démontant la poignée en Zinc
- si nécessaire monte la rallonge
- fait attention au sens du barillet et compare avec celui d'origine
- si nécessaire tu pourras intervertir le barillet sur la serrure welock {{ page.ref }}
- une fois en place verrouille à l'aide de la visse d'origine

> Et voilà c'est en place.

## fonction de la batterie de secours

{% include product-embed.html image="powerbank-avec-cable-inclus.png" title="Batterie Externe 10000mAh avec 4 Câbles Intégrés" brand="Charmast" description="Powerbank fonctionnel pour Welock serrure par empreinte digitale fonctionnement de secours." amazlink="3xMHqWd" %}

Pour commencer il faut savoir que la durée de vie des piles est comprise entre 10 et 12 mois.

Pour utiliser la batterie de secours il te faudra un powerbank avec une sortie électrique comprise entre 3,6 et 4,5v ainsi qu'un cable compatible powerbank et une sortie en USB-A qui aurait pu être de type USB-C.

Coupons de réductions supplémentaires valable sur le [site Amazon](https://amzn.to/3Whtm0f){: target="_blank"} en exclu pour le site Haade.fr: **SECB51001**. Pour un **Prix final de 132€.**

{% include product-embed.html image="welock-secbnebl51-serrure-empreinte-digitale.png" title="Serrure par empreinte Welock SECBNEBL51" brand="Welock" description="Serrure à empreinte digitale électronique avec carte RFID Bluetooth WiFi pour cylindre réglable de 30 à 70 mm, cylindre de fermeture électronique, Coupons de réductions: <b>SECB51001</b>" amazlink="3Whtm0f" %}

En cas de ruptures sur le site Amazon [tu peux aussi commander directement la serrure sur le site Welock](https://www.welock.com/haadbl55901){: target="_blank"}, elle est au prix de **189€ Livraison gratuite**. Mais ne t'inquiètes pas avec le code suivant: **SINDRO50** elle ne t'en **coûtera que 139€**, certe c'est un peu plus cher que sur le site Amazon mais ça reste raisonnable.

**Les + du produit:**{: .blue}

- Installation simple et rapide
- Ouverture par smartphone, empreinte digitale et badge RFID
- Batterie de secours

**Les - du produit:**{: .red}

- Manque de compatibilité avec les applications tiers du marché (Home Assistant, Openhab, Jeedom, Homey, etc.).
- Finition bien mais peu travaillé (une fois la pose faite)
- La traduction française inexistante
- serrure prévu pour porte intérieur ( pas de protections ip65-66 )
- affichage des fonctions sur la serrure un peu cheap
- Branchement en USB-A

Coupons de réductions supplémentaires valable sur le [site Amazon](https://amzn.to/3Whtm0f){: target="_blank"} en exclu pour le site Haade.fr: **SECB51001**. Pour un **Prix final de 132€.**

{% include product-embed.html image="welock-secbnebl51-serrure-empreinte-digitale.png" title="Serrure par empreinte Welock SECBNEBL51" brand="Welock" description="Serrure à empreinte digitale électronique avec carte RFID Bluetooth WiFi pour cylindre réglable de 30 à 70 mm, cylindre de fermeture électronique, Coupons de réductions: <b>SECB51001</b>" amazlink="3Whtm0f" %}

En cas de ruptures sur le site Amazon [tu peux aussi commander directement la serrure sur le site Welock](https://www.welock.com/haadbl55901){: target="_blank"}, elle est au prix de **189€ Livraison gratuite**. Mais ne t'inquiètes pas avec le code suivant: **SINDRO50** elle ne t'en **coûtera que 139€**, certe c'est un peu plus cher que sur le site Amazon mais ça reste raisonnable.

## Conclusion

Cette serrure est bien car elle te permettra de te passer de clés et ainsi éviter tous problèmes liées à celles-ci, l'ensemble du mécanisme et montage est de bonne facture, le système d'empreinte digitale réagit au cars de tour.
Attention: cette serrure est surtout dédiée aux portes protégées par les intempéries, je doute qu'elle ne résiste aux allées du climat.
Personnellement l'application est à revoir je la trouve assez mal faite mais tu pourras aisément t'en passer.
En ce qui concerne la connection de secours en cas de défaillance des piles est bien pensée, mais je doute que le jour ou ça arrive te ais sur toi un powerbank avec un cable pour te dépatouiller.
