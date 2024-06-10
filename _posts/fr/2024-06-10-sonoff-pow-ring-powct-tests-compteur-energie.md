---
guid: 129
title: "Test du compteur d'énergie Sonoff Pow Ring POWCT"
description: "Nouveau compteur d'énergie intelligent du marché, le Sonoff Pow Ring POWCT propose une mesure de l'énergie externe, un affichage digital, une antenne wifi déporté de qui exploiter au mieux sa consommation d'énergie"
ref: "POWCT"
layout: post
authors: [Nico]
date: 2024-06-10 14:00
last_modified_at: 
categories: [Domotique, Tests, Wifi]
tags: []
video:
image: 'sonoff-pow-ring-powct-mesure-energie-intelligent-wifi.png'
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
rating: 4.5
sourcelink:
  - https://sonoff.tech/product/diy-smart-switches/powct/
  - https://itead.cc/product/sonoff-pow-ring-smart-power-meter-switch/
---
Aujourd'hui j'ai la chance de tester le compteur d'énergie intelligent 100A, **le Sonoff Pow ring {{ page.ref }}**, ce n'est pas le premier compteur Sonoff que je teste, il y a quelques temps [j'ai pu tester le pow elite 16A et l'intégrer à SonoffLAN]({% post_url /fr/2023-07-03-sonofflan-le-gestionnaire-sonoff-pour-home-assistant %}){: target="_blank"}, d'ailleurs j'ai renouvellé l'expérience avec le {{ page.ref }}.

> Mais officiellement il n'est pas reconnu dans l'application SonoffLAN **alors va-t-il fonctionner ?**

{% picture posts/{{ page.guid }}/sonoff-pow-ring-powct-mesure-intelligent-energie-wifi.png --alt image présentation écrin sonoff pow ring powct gestionnaire energie --img width="940" height="529" %}

{% include product-embed.html image="produit-sonoff-mesure-consommation-energie-pow-ring-powct.png" title="Mesure d'energie Sonoff Pow Ring POWCT" brand="Sonoff" description="Mesure d'énergies jusqu'à 100A Sonoff Powct wifi, fournis avec pince ampèremétrique et antenne wifi" iteadlink="sonoff-pow-ring-smart-power-meter-switch" %}

## Prérequis

- Homeassistant HAOS de préférence
- HACS d'installé
- [SonoffLan](https://github.com/AlexxIT/SonoffLAN){: target="_blank"} d'installé
- ou [Ewelink](https://ewelink.cc/ewelink-works-with-home-assistant/){: target="_blank"} pour home assistant
- Ewelink sur smartphone [Android](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&pli=1){: target="_blank"} ou [Apple](https://apps.apple.com/us/app/ewelink/id1035163158){: target="_blank"}

## Déballage du Sonoff {{ page.ref }}

Livré dans un bel écrin très qualitatif le sonoff Pow Ring {{ page.ref }} est très bien emballé, comme tu peux le voir sur l'image la mousse de protection est épaisse et la boîte relativement grande.

{% picture posts/{{ page.guid }}/deballage-sonoff-pow-ring-powct-mesure-energie-wifi.png --alt image déballage sonoff pow ring powct gestionnaire energie --img width="940" height="529" %}

**Dans la boiîte on y retrouve:**

- le compteur d'énergie
- la pince à noyau divisé
- l'antenne wifi
- un traverse paroi pour l'antenne wifi
- un lot de 2 visses pour **verouiller l'accès aux connecteurs.**

{% picture posts/{{ page.guid }}/contenu-boite-sonoff-pow-ring-powct-mesure-energie-wifi.png --alt contenu de la boite du sonoff pow ring powct gestionnaire energie --img width="940" height="529" %}

## Particularité du Sonoff {{ page.ref }}

Les différences entre le compteur {{ page.ref }} et le POWElite sont nombreuses.

**Pour commencer** les boitiers sont de tailles et **conceptions similaires**, le relevé de mesure A et W sont similaires et c'est à peu près tout.
Le Sonoff {{ page.ref }} permet de mesurer la puissance d'un ou plusieurs circuits **( jusqu'à 100A )** grâce au capteur à noyau divisé distribué avec.
Le Sonoff {{ page.ref }} est fournis avec une antenne wifi externe afin d'optimiser la réception du réseau.

{% picture posts/{{ page.guid }}/prise-photo-presentation-sonoff-pow-ring-powct-mesure-intelligent-energie-wifi.png --alt Capture et présentation du sonoff pow ring powct gestionnaire energie --img width="940" height="529" %}

Selon le concepteur **le module a été éprouvé de façon méthodique et sévère**, et figure toi qu'il a tenu. Sur la photo ci-dessous tu pourras noter qu'il a été testé par le **Bureau Allemand Tüv Rheinland**. Gage de certification européen.

> J'avoue que c'est encore assez rare de voir ce logo sur des produits 100% chinois.

**Comme pour le Pow Elite** tu pourras verouiller l'accès aux connecteurs grâce aux deux visses fournis sous blister.

{% picture posts/{{ page.guid }}/particularite-sonoff-pow-ring-powct-mesure-intelligent-energie-wifi.png --alt Capture et présentation du sonoff pow ring powct gestionnaire energie --img width="940" height="529" %}

**Pour finir quelques particularités:**

1. Il est fournis avec une **pince de transformateur de courant à noyau divisé** Détection de courant de transformateur jusqu'à 100 A. Aucun contact physique avec les fils sous tension, éliminant le risque de choc électrique. Relâchez ou fermez simplement les loquets sur le côté du capteur pour ouvrir et fermer le capteur CT.
2. **Moniteur d'énergie** Installez-le dans le panneau de circuit électrique de votre maison pour surveiller la consommation électrique des appareils électroménagers ou des pièces.
3. **Conservation des données historiques pendant 6 mois:** enregistre automatiquement les données de consommation d'électricité lorsque vous retirez des appareils ou avez une panne de courant. Les données peuvent être enregistrées jusqu'à 6 mois et exportées dans un fichier pour visualisation grâce à l'application Ewelink
4. **Prend en charge le contrôle du contacteur** POWCT dispose d'un relais à contact sec avec un courant de sortie nominal de 2 A qui est utilisé avec un contacteur pour réaliser le contrôle de commutation de la charge.
5. **Sûr et fiable** Passez divers tests rigoureux, notamment des tests de foudre et de surtension, des tests de court-circuit, des tests de chute, des tests au brouillard salin, des tests dans des environnements extrêmement difficiles, etc. Des produits auxquels vous pouvez faire confiance à 100 %.

![Affichage compteur Sonoff Pow Ring Powct]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/sonoff-pow-ring-powct-smart-energy-meter-wifi.webp{{ cachebuster }}){: width="940" height="529" class="lazyload"}

## Parlons des branchements

En liaison direct pas compliqué tu branches le Sonoff {{ powct }} sur la ligne ou groupe de lignes de courant désiré, ensuite tu met la pince à noyau divisé sur la phase dont tu veux contrôler la consommation et le tour est joué.

{% picture posts/{{ page.guid }}/schema-branchement-avec-sans-contacteur-no-nc-sonoff-powct.png --alt Schema de branchement Sonoff POWCT mesure d'energies intelligent --img width="940" height="481" %}

**Là ou j'ai le plus de mal** c'est sur le branchement d'un commutateur (NO/NC) 👺, en branchant le COM avec le neutre sur le même réseau, comme indiqué sur le schéma numéro 2 j'ai mesuré de 0 à 20V max quand on ferme le circuit à l'aide de l'interrupteur présent sur le POWCT. Ce qui te permet de contrôler un commutateur/interrupteur intégrant le contact sec. Et comme indiqué sur le schéma **quand Sonoff parle de commutateur moi j'interprète un télérupteur** et en france je n'ai pas trouvé de télérupteur à contact sec mais uniquement sur commutation 230V. 👺

> Donc je trouve **que cette fonction est difficilement utlisable aux normes françaises** pour contrôler l'ouverture/fermeture d'un circuit contrairement à un **POW Elite**.

## Documentations {{ page.ref }}

{% include doclink.html pdf="User-Manual-POWCTEN.pdf" title="Manuel d'utilisations du compteur d'énergie wifi Sonoff POWCT" %}

{% include doclink.html pdf="Quick-Guide-POWCT-V1.1.pdf" title="Guide rapide du compteur d'énergie wifi Sonoff POWCT" %}

## Intégration Home Assistant

Pour intégrer le Sonoff {{ page.ref }} dans home assistant et de façon **non invasive** il te faudra tout de même installer l'application **Ewelink** sur ton Smartphone. Pour le reste je n'utilise pas le module complémentaire Ewelink pour HAOS mais le très bon module **SonoffLan via HACS**. [J'ai rédigé un article complet sur ce module]({% post_url /fr/2023-07-03-sonofflan-le-gestionnaire-sonoff-pour-home-assistant %}){: target="_blank"} et franchement il fait le TAF et surtout le **Sonoff POWCT est compatible à 99%**.

### J'utilise SonoffLan

Pour Moi **Sonofflan est un incontournable**, pour gérer tes modules Sonoff Wifi, le simple fait de pouvoir paramétrer l'intégration SonoffLan pour une utilisation en local est un **must have** ( à condition que ton module soit compatible ), et figure toi que le Powct l'est en local. 

Ce n'est pas tout SonoffLan est [W.A.F](https://fr.wikipedia.org/wiki/Facteur_d%27acceptation_f%C3%A9minine){: target="_blank"}, l'intégration des modules est des plus simple, et pour le contrôle j'en parle même pas ☝️.

{% picture posts/{{ page.guid }}/Sonoff-compteur-énergie-powct-homeassistant-dans-sonofflan.png --alt Intégration du sonoff pow ring powct gestionnaire energie --img width="940" height="506" %}

Petit inconvénient la remontée d'info de **consommation de la veille** ne semble pas fonctionner, pour le reste c'est opérationnel, tu pourras même contrôler la Led du Wifi, on pourras pas dire que ce n'est pas compatible.

{% picture posts/{{ page.guid }}/integration-sonoff-compteur-énergie-powct-homeassistant-sonofflan.png --alt Capture et présentation du sonoff pow ring powct gestionnaire energie --img width="940" height="853" %}

**Les + du produit:**{: .blue}
- Module de qualité
- le prix **(33€ env)**
- compatible SonoffLan
- intégrable à Home Assistant de diverses façons
- mesure jusqu'à 100A
- fournis avec antenne wifi externe
- fournis avec une pince à noyau divisé.
- mesure précise.
- idéal pour la mesure de **consommation Solaire**
- 6 mois d'historiques

**Les - du produit:**{: .red}
- contacteur contact sec particulié

{% include product-embed.html image="produit-sonoff-mesure-consommation-energie-pow-ring-powct.png" title="Mesure d'energie Sonoff Pow Ring" brand="Sonoff" description="Mesure d'énergies jusqu'à 100A Sonoff Powct wifi, fournis avec pince ampèremétrique et antenne wifi" iteadlink="sonoff-pow-ring-smart-power-meter-switch" %}


## Conclusion

Comme pour les autres produits de la gamme, **Sonoff renforce le gage de qualité**. Selon moi le compteur d'énergie {{ page.ref }} n'est utile que si tu veux mesurer la **consommation de plusieurs circuits** en même temps grâce à la pince et à **l'intensité de 100A Max**. Ou de mesurer un réseau de consommations solaire supérieur à 20A. 

> Si pour toi ce n'est pas le cas mais que tu veux tout de même un produit similaire **je te conseil plutôt le POW Elite 20A.**

{% include product-embed.html guid="2168" %}

