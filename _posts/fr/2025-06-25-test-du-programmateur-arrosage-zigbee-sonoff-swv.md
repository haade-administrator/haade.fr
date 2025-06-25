---
guid: 163
title: "Test du programmateur Sonoff SWV-BSP"
description: "Test et essai du programmateur d'arrosage zigbee Sonoff SWV-BSP"
ref: "SWV-BSP"
layout: post
authors: [Nico]
date: 2025-06-25 09:18
last_modified_at: 
categories: [Tests, Haade-lab, Zigbee, Home-Assistant]
tags: []
video: 
image: 'test-programmateur-arrosage-sonoff-zigbee-swv-bsp.png'
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
rating: 4.8
sourcelink:
  - https://sonoff.tech/product/home-appliances/swv/
---

Voilà un petit moment que je n'ai pas écris d'article, *je m'en excuse*, faute de temps et préparation d'un article coup de poing sur l'intégration d'une tablette murale en perspective.

Aujourd'hui je vais te présenter brièvement mais sérieusement un **produit incontournable avec l'arrivée des beaux jours**, il s'agit ni plu ni moins du **programmateur d'arrosage zigbee de la marque Sonoff le {{ page.ref }}**.

[Vendu moins de 30$ chez notre partemanire Itead](https://itead.cc/product/sonoff-zigbee-smart-water-valve/ref/122/){: target="_blank"}, le moins que l'on puisse dire c'est que ce tarif est imbattable  surtout aux vues de sa qualité et le nombre de commandes disponibles dans Zigbee2mqtt donc compatible multi plateforme opensource.

[J'ai déjà testé un article similaire d'une autre marque, si tu le désire tu peux comparer, clic-ici directement]({% post_url /fr/2023-03-29-test-controleur-arrosage-intelligent-zigbee-woox-r7060 %}), **mais attention les fonctions et le tarif divergent entre les deux produits !** et l'article sur le Woox date du printemps 2023...


{% include product-embed.html image="sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.png" title="Programmateur Arrosage SWV" brand="Sonoff" description="Programmateur d'arrosage Zigbee par Sonoff le SWV" iteadlink="sonoff-zigbee-smart-water-valve" domlink="compatibilite-des-hubs-domotiques/7187-sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.html"  affiliate="_okRXRXs" amazlink="45rhIVv" %}

## Déballage {{ page.ref }}

L'emballage {{ page.ref }} est comme à son habitude orange signe d'un produit intégrant une puce zigbee de la marque Silabs EFR32MG22.

{% picture posts/{{ page.guid }}/unboxing-box-face-avant-sonoff-swv-bsp.png --alt Déballage programmateur arrosage sonoff swv-bsp --img width="940" height="529" %}

Compatible **ewelink** mais aussi **zigbee2mqtt** donc multi-plateformes ce n'est pas indiqué sur l'emballage mais regarde un peu plus bas j'ai fait une intégration.

{% picture posts/{{ page.guid }}/unboxing-box-face-arriere-sonoff-swv-bsp.png --alt Déballage programmateur arrosage sonoff swv-bsp face arrière du carton --img width="940" height="529" %}

Le module sonoff {{ page.ref }} est fournis **sans piles il faudra t'équiper de 4 piles AA** tu trouveras à l'intérieur de la boîte
- un boitier Smartwater
- les notices
- du ruban téflon
- un joint d'étanchéité

{% picture posts/{{ page.guid }}/contenu-et-presentation-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png --alt Contenu et présentation du programmateur arrosage sonoff swv-bsp --img width="940" height="529" %}

> Le compartiment des piles est bien fait et étanchéifié par un joint

{% picture posts/{{ page.guid }}/box-pile-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png --alt Contenu et présentation du compartiment à pile du programmateur arrosage sonoff swv-bsp --img width="940" height="529" %}

Ci-dessous **une vue du haut et du dessous du sonoff** {{ page.ref }} entièrement compatible avec nos systèmes européens

{% picture posts/{{ page.guid }}/connecteur-superieur-et-inferieur-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png
--alt partie supérieur et inférieur du programmateur arrosage sonoff swv-bsp --img width="940" height="529" %}

**Pour terminer l'interface avant ultra simple et constitué d'un bouton unique lumineux**
- lorsqu'il n'est pas appairé celui-ci clignote en vert
- une fois appairé il se met en vert fixe puis s'éteint
- lorsque l'état du switch change, le voyant s'allume pui s'éteint brièvement.

{% picture posts/{{ page.guid }}/bouton-unique-face-avant-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png
 --alt bouton unique face avant fonctionnement départ et arret ainsi que l'inclusion du programmateur arrosage sonoff swv-bsp --img width="940" height="529" %}

### Sous le capot

**Sonoff prouve là encore son savoir faire**, le circuit imprimé est très facile d'accès il te suffira **d'hôter les deux caches en caoutchoucs** pour avoir accès à deux visses qui te **permettront facilement d'accéder au circuit imprimé**.

{% picture posts/{{ page.guid }}/acces-circuit-imprime-sonoff-smartwater-swv-bsp-zigbee.png
 --alt Accès simplifié au circuit imprimé du programmateur arrosage sonoff swv-bsp dans home assistant --img width="940" height="559" %}

Facile d'accès et protégé par un joint périphérique IP55, la carte électronique du Sonoff {{ page.ref }} **offre des points d'entrées**, **tu pourras noter que Sonoff utilise la puce Silabs EFR32MG22.**

{% picture posts/{{ page.guid }}/circuit-sonoff-swv.png
 --alt circuit imprimé du programmateur arrosage sonoff swv-bsp dans home assistant --img width="940" height="559" %}

### Caractéristiques techniques du Sonoff {{ page.ref }}

|Filetage standard|BSP, NH|
|Puissance|**6 V (4 x 1,5 V AA)**|
|Connexion sans fil|Zigbee 3.0|
|Température de fonctionnement|5 °C à 60 °C|
|Température d'arrosage|5 °C à 40 °C|
|Humidité de fonctionnement|5 % à 95 % HR, sans condensation|
|Étanchéité|**IP55**|
|Dimensions|152 x 100 x 46 mm|
|Couleur|Noir|
|Matériaux du boîtier|PC+ABS|
|Pression de fonctionnement|0,06 à 0,8 MPa|

{% include product-embed.html image="sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.png" title="Programmateur Arrosage SWV" brand="Sonoff" description="Programmateur d'arrosage Zigbee par Sonoff le SWV" iteadlink="sonoff-zigbee-smart-water-valve" domlink="compatibilite-des-hubs-domotiques/7187-sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.html"  affiliate="_okRXRXs" amazlink="45rhIVv" %}

## {{ page.ref }} dans Zigbee2mqtt

Passons à l'intégration dans **Zigbee2mqtt** et oui le Sonoff est compatible Home Assistant, le top !
Rien de plus simple ouvre la découverte zigbee dans Z2M puis reste appuyé 5 secondes sur le bouton du module {{ page.ref }}

Une fois reconnu **je te conseil de faire la mise à jour du firmware** à l'heure ou j'écris cet article **la dernière version disponible est la 1.0.4**
Cette version prend en charge la Fermeture automatique en cas de manque d'eau, fermeture automatique de la vanne d'eau après plus de 30 minutes de manque d'eau.

{% picture posts/{{ page.guid }}/integration-sonoff-swv-bsp-smart-water-valve-with-update-firmware-ota.png
 --alt intégration dans zigbee2mqtt du programmateur arrosage sonoff swv-bsp avec mise à jour ota 1.0.4 --img width="940" height="407" %}

### Quels sont les fonctions du {{ page.ref }}

1. Débit d'eau actuel en m3/h ( non testé ) précision souvent problématique ***absence d'une gestion en litre***.
2. l'état de la batterie
3. interrupteur ouvert/fermé
4. État actuel de l'appareil, La vanne d'eau est en **état normal, manque d'eau ou fuite d'eau**
5. Fermeture automatique en cas de manque d'eau, Fermeture automatique de la vanne d'eau après plus de 30 minutes de manque d'eau. Nécessite la version 1.0.4 ou ultérieure du micrologiciel !
6. Arrosage cyclique programmé, Vanne d'eau intelligente pour l'arrosage programmé
**Nombre actuel**, Nombre de fois où il a été exécuté
**Nombre total**, Nombre total de fois où l'irrigation circule ( paramétrage de 0 à 100 **fois** )
**Durée d'irrigation**, Durée d'irrigation unique ( paramétrage de 0 à 86400 **secondes** )
**Intervalle d'irrigation**, Intervalle de temps entre deux irrigations adjacentes ( paramétrage de 0 à 86400 **secondes** )
7. Irrigation quantitative cyclique, Vanne d'eau intelligente pour l'irrigation quantitative circulante
**Nombre actuel**, Nombre de fois où il a été exécuté
**Nombre total**, Nombre total de fois où l'irrigation circule ( paramétrage de 0 à 100 **fois** )
**Capacité d'irrigation**, Capacité d'irrigation unique ( paramétrage de 0 à 6500 **litres** ) à condition que la remontée soit juste
**Intervalle d'irrigation**, Intervalle de temps entre deux irrigations adjacentes ( paramétrage de 0 à 86400 **secondes** )
8. Qualité du lien du réseau

{% picture posts/{{ page.guid }}/capture-mesure-consommation-en-m3h-du-sonoff-swv-bsp-module-irrigation-zigbee.png
 --alt capture de la consommation en m3 par heure dans zigbee2mqtt du programmateur arrosage sonoff swv-bsp --img width="594" height="514" %}
  
> Les fonctions présentes dans Zigbee2mqtt sont très complètes cependant je déplore l'absence d'une **fonction de mesure par litrage, connaitre le débit instantané en m3/h n'est pas une fonction lisible** car il est possible de calculer le nombre de litre, heureusement dans home assistant nous pouvons créer ce type de mesure en créant une intégrale de Riemann

{% picture posts/{{ page.guid }}/exposition-commandes-zigbee2mqtt-sonoff-irrigation-flow-swv-bsp-zigbee.png
 --alt fonctions exposées dans zigbee2mqtt du programmateur arrosage sonoff swv-bsp --img width="940" height="954" %}

### Template Home Assistant

#### convertir en litre par minutes

Si tu veux juste convertir le flow du {{ page.ref }} qui est en m3/h en Litres/minutes alors cette fonction peut t'intéresser

Clic sur le lien ci-dessous **ajouter une entrée** et **modéliser un capteur**

[![Créer un template dans Home Assistant](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=template)

{% highlight yaml %}
{% raw %}
{{ (states('sensor.irrigation_flow') | float * 1000 / 60) | round(2) }}
{% endraw %}
{% endhighlight %}

{% picture posts/{{ page.guid }}/creer-template-liter-par-minutes-pour-sonoff-swv-smart-water-zigbee.png
 --alt creer un template qui convertis le flow m3/h en litres/min du programmateur arrosage sonoff swv-bsp dans home assistant --img width="629" height="858" %}

#### convertir en litre par heures

Clic sur le lien ci-dessous **ajouter une entrée** et **modéliser un capteur**

[![Créer un template dans Home Assistant](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=template)

{% highlight yaml %}
{% raw %}
{{ (states('sensor.irrigation_flow') | float * 1000) | round(2) }}
{% endraw %}
{% endhighlight %}

{% picture posts/{{ page.guid }}/creer-template-liter-par-heures-pour-sonoff-swv-smart-water-zigbee.png
 --alt creer un template qui convertis le flow m3/h en litres/heures du programmateur arrosage sonoff swv-bsp dans home assistant --img width="629" height="858" %}

#### conso en litres / jour

Il faut tout d'abord créer une entrée compteur des services publics (eau,gaz,électricité)

Clic sur le lien ci-dessous **ajouter une entrée**

[![Créer un compteur d'utilité dans Home Assistant](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=utility_meter)

Sélectionne **bien le Flow de ton entité irrigation**, rempli les autres paramètres **aide toi de l'image ci-dessous** et le tour est joué tu aura crée un capteur qui fera remonter la consommation d'eau en m3 **journalièrement** avec une mise à 0 toutes les 24 heures tu pourras bien sûre modifier à ta guise.

{% picture posts/{{ page.guid }}/creation-compteur-utility-calcul-volume-m3-par-jour-home-assistant.png
 --alt creer un compteur d'utilité qui convertis le flow m3/h en volume journalier du programmateur arrosage sonoff swv-bsp dans home assistant --img width="629" height="959" %}

Secondes étapes il te suffit à nouveau de créer un template pour convertir ce résultat en litres et tu auras désormais un affichage de la consommation en litres/jours > sélectionne bien le sensor du compteur d'utilité dans mon cas **sensor.volume_irrigation_jour**.

[![Créer un template dans Home Assistant](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=template)

Clic sur le lien ci-dessus **ajouter une entrée** et **modéliser un capteur**

{% highlight yaml %}
{% raw %}
{{ (states('sensor.volume_irrigation_jour') | float * 1000) | round(0) }}
{% endraw %}
{% endhighlight %}

{% picture posts/{{ page.guid }}/creer-template-liter-par-jour-avec-utility-metter-pour-sonoff-swv-smart-water-zigbee.png
 --alt creer un template qui convertis le flow m3/h en litres/jours sur entité utility meter du programmateur arrosage sonoff swv-bsp dans home assistant --img width="629" height="849" %}

> Cette façon de faire à **l'avantage de te permettre de rentrer des tarifs de consommations et de se réinitialiser tous les jours** mais il faudra **créer deux entités**.

**Si tu désires créer une seule entité qui te permettrait de convertir m3/h en Litres/jours tu peux aussi le faire en créant un seul template** cette fonction est simple à mettre en place mais elle remontera la conso des 24 dernières heures !

[![Créer un template dans Home Assistant](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=template)

Clic sur le lien ci-dessus **ajouter une entrée** et **modéliser un capteur** inspire toi des liens plus haut, la méthode ci dessous t'aides à convertir m3 en litres en le multipliant par 24 **elle te donnera la conso des 24 dernières heures.**

{% highlight yaml %}
{% raw %}
{{ (states('sensor.irrigation_flow') | float * 1000 x 24) | round(2) }}
{% endraw %}
{% endhighlight %}

#### Quelques remontées d'infos des capteurs

Les remontées d'informations du Sonoff {{ page.ref }} devraient être assez proche de la réalité merci Sonoff.

{% picture posts/{{ page.guid }}/capture-consommation-eau-sonoff-swv-home-assistant.png
 --alt relevé de consommations du programmateur arrosage sonoff swv-bsp dans home assistant --img width="629" height="546" %}

### Conclusion Capteurs dans HA

Grâce à HomeAssistant tu pourras optimiser les chiffres de la consommations du module d'irrigation Sonoff {{ page.ref }} très facilement.

{% include product-embed.html image="sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.png" title="Programmateur Arrosage SWV" brand="Sonoff" description="Programmateur d'arrosage Zigbee par Sonoff le SWV" iteadlink="sonoff-zigbee-smart-water-valve" domlink="compatibilite-des-hubs-domotiques/7187-sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.html"  affiliate="_okRXRXs" amazlink="45rhIVv" %}

## Conclusion

Le Sonoff {{ page.ref }} zigbee module d'irrigation, est un **produit de bonne facture**,comme c'est souvent le cas chez Sonoff, le tarif est agressif jusqu'à 50% moins cher que la concurrence tu le trouvera à moins de 26€ sur le site officiel chinois. Compatible avec Zigbee2mqtt est un réel atout, **j'enlève tout de même 0,2 point par l'absence d'une mesure d'un débit en litre** qui le rendrait très intéressant en utilisation par défaut mais ce n'est pas le cas. **Dommage !** 😡, si tu utilises home assistant tu pourras contourner ce problème.