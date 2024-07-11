---
guid: 83
title: "Test du premier module Matter miniR4M de Sonoff"
description: "En avant première je vais tester le premier module Matter de Sonoff le miniR4M et une intégration dans Home Assistant"
ref: "miniR4M"
layout: post
authors: Nico
date: 2023-09-27 18:05
last_modified_at: 
categories: [Tests, Matter]
tags: []
image: 'sonoff-minir4m-matter-minicontrol-test-haade.png'
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
  - https://itead.cc/product/sonoff-mini-extreme-wi-fi-smart-switch-matter-enabled/ref/122/
---

Voilà c'est fait Sonoff a sorti son premier mini module Matter le {{ page.ref }}, grâce à [itead](https://itead.cc/product/sonoff-mini-extreme-wi-fi-smart-switch-matter-enabled/ref/122/){: target="_blank"} qui m'a fourni ce module je vais pouvoir **tester l'intégration dans Home-Assistant** et faire un retour sur ce module vendu à **moins de 12€**.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2023/04/MINIR4-matter-1000px_01.jpg?fit=1000%2C1257&ssl=1" title="Sonoff Matter miniR4M" brand="Sonoff" description="Nouveau module Sonoff interrupteur mini le miniM" iteadlink="sonoff-mini-extreme-wi-fi-smart-switch-matter-enabled" %}

## Déballage

{% picture posts/{{ page.guid }}/deballage-sonoff-minir4m-interrupteur-matter-mini-extreme.png --alt déballage du nouveau module matter mini interrupteur Sonoff {{ page.ref }} --img width="940" height="529" %}

Pour commencer l'emballage est quasimment identique à celui du [zbminil2]({% post_url /fr/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %}) et ce n'est pas étonnant car ces deux modules sont très similaires par la forme. **La boîte est bleu comme pour les modules wifi de la marque et oui si tu ne le sais pas encore Matter fonctionne sur le maillage wifi domestique ou par thread mais là ce n'est pas le cas.**

**Il n'y a qu'à regarder la capture ci dessous pour se rendre compte des volumes pratiqués chez Sonoff pour la gamme des mini.** L'avantage est bienentenu l'intégration dans les boites de dérivations se trouvant derrière l'interrupteur, tu n'auras aucun mal à trouver une place sans avoir besoin de forcer.

{% picture posts/{{ page.guid }}/comparatif-interrupteur-mini-extreme-sonoff-zbminil2-minir4m.png --alt photo comparative sonoff zbminil2 et {{ page.ref }} la taille un atout indéniable --img width="940" height="529" %}

## Comparatif image Sonoff {{ page.ref }} et ZBMiniL2

On sent que la plateforme de fabrication du {{ page.ref }} et du ZBminiL2 et très similaire, il n'y a qu'à regarder la capture d'image ci-dessous.

{% picture posts/{{ page.guid }}/comparatif-zbminil2-minir4m.png --alt comparatif du nouveau sonoff mini intérrupteur matter {{ page.ref }} avec le sonoff zbminil2 --img width="940" height="529" %}

## Un module aux options indéniables

{% picture posts/{{ page.guid }}/branchement-sonoff-matter-miniR4M.png --alt branchement du nouveau sonoff mini intérrupteur matter {{ page.ref }} --img width="940" height="470" %}

le sonoff {{ page.ref }} possède pas mal d'options importantes
- tu pourras le brancher sur un panel d'interrupteurs différents ( voir l'image plus bas )
- compatible ewelink, google, alexa et apple
- **{{ page.ref }} dispose d'un relais détaché** en gros tu pourras allumer une ampoule connectée et l'éteindre tout en la laissant sous courant afin de pouvoir la contrôler tout le temps
- possibilité de brancher un interrupteur simple ou en va et vient.

{% picture posts/{{ page.guid }}/interrupteur-compatible-sonoff-minir4m-matter.png --alt interrupteur compatible du nouveau sonoff mini intérrupteur matter {{ page.ref }} --img width="940" height="218" %}

## Intégration dans HA du {{ page.ref }} en image.

*Comme tu peux le voir sur le gif animé ci-dessous je n'ai eu aucune difficulté à l'intégrer dans Home-Assistant.* Avant de pouvoir ajouter l'appareil dans Home-Assistant il faudra au préalable installer Matter dans le superviseur. Pour se faire tu peux suivre les étapes d'installations [en te rendant directement ici](installation-test-neo-wifi-matter-NAS-WR15W6-dans-home-assistant#1-installation-serveur-matter), il te suffira de cliquer sur les liens pour l'installation et l'intégration Matter. *J'ai rédigé le processus d'installation dans un précédent article dédié au module Neo NAS-WR15W6*.
**Ensuite suis les étapes du processus et à l'invite scan le qrcode situé à l'arrière du module.**

![Intégration du module Sonoff miniR4M dans home-assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-sonoff-minir4m-matter-homeassistant.webp{{ cachebuster }}){: width="320" height="693" class="lazyload pictaninpost"}

Une fois intégré tu pourras te rendre dans le panneau du module  et ainsi tester le fonctionnement du module. Une seule commande de disponible pour allumer et éteindre le module, à mon sens c'est un peu maigre **mais bon on est au prémisse du protocole, les prochains modules devraient peu à peu s'étoffer de nouvelles fonction.**

{% picture posts/{{ page.guid }}/commande-matter-home-assistant-minir4m-sonoff-matter.png --alt intégration du nouveau sonoff mini intérrupteur matter {{ page.ref }} dans home assistant --img width="940" height="821" %}

## Spécifications du {{ page.ref }}

Comme dit précedemment le module à presque la même taille que le [zbminil2]({% post_url /fr/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %})

**MINIR4M est le premier appareil Matter de SONOFF**, il peut reconnaître et fonctionner avec d'autres marques d'appareils terminaux Matter, et s'intégrer aux plates-formes compatibles Matter, telles que Apple Home, Google Home, Alexa, etc. Contrôler tous les appareils intelligents via une seule application n'est plus un rêve. 

**Les appareils certifiés Matter** prennent en charge la communication locale dans le réseau domestique, même si le réseau est déconnecté, MINIR4M fonctionne toujours normalement, avec une réactivité plus rapide et une meilleure fiabilité. L'ajout de MINIR4M aux applications compatibles Matter est simple. Scannez simplement le code QR Matter fourni avec votre application compatible Matter et MINIR4M est facilement configuré en suivant les étapes de l'application.

**MINIR4M est équipé d'une puce ESP32**, sa petite taille s'adapte à divers boîtiers de montage, y compris le **type 86/EU**, le boîtier de montage de type 120. MINIR4M prend en charge le contrôle des interrupteurs externes et se connecte facilement à l'interrupteur momentané, à l'interrupteur de sortie de porte, à l'interrupteur SPDT, à l'interrupteur de verrouillage et même aux capteurs à contact sec.

**MINIR4M dispose d'un mode « relais détaché »**, ce qui signifie que les états des commutateurs externes et du relais sont séparés, donc l'actionnement du bouton de commutation externe n'affectera pas l'état du relais. Par exemple, si tu ouvres le mode "relais de détachement", lorsque tu éteins la lumière, l'ampoule connectée ne sera pas hors ligne et tu pourras toujours utiliser l'application pour contrôler les lumières intelligentes.

{% picture posts/{{ page.guid }}/Dimensions-spécifications-sonoff-miniR4M-matter.png --alt spécifications et dimensions du nouveau sonoff mini intérrupteur matter {{ page.ref }} --img width="940" height="600" %}

## Particularités du {{ page.ref }}

{% picture posts/{{ page.guid }}/MINIR4-matter-sonoff-particularite.png --alt particularités du nouveau sonoff mini intérrupteur matter {{ page.ref }} --img width="940" height="548" %}


## Documents {{ page.ref }}

{% include doclink.html pdf="guide-rapide-sonoff-minir4m-matter.pdf" title="guide rapide sonoff miniR4M matter" %}
{% include doclink.html pdf="manuel-utilisateur-mini-r4-matter-sonoff.pdf" title="Manuel utilisateur du sonoff miniR4M Matter" %}
{% include doclink.html pdf="specification-produit-MINIR4M-V1.0.pdf" title="Document spécification produit sonoff matter miniR4M" %}

## **les + du produit** {{ page.ref }}
{: .blue}
- la qualité de fabrication
- le prix
- compatible matter (esp32)
- fonctionne avec tous types d'interrupteurs
- Un relais détaché


## **les - du produit** {{ page.ref }}
{: .red}

- Nécessite le neutre pour fonctionner
- Nécessite le neutre à l'interrupteur et le neutre de l'interrupteur à la lumière

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2023/04/MINIR4-matter-1000px_01.jpg?fit=1000%2C1257&ssl=1" title="Sonoff Matter miniR4M" brand="Sonoff" description="Nouveau module Sonoff interrupteur mini le miniM" iteadlink="sonoff-mini-extreme-wi-fi-smart-switch-matter-enabled" %}

## Conclusion

Sonoff **fait une entrée réussi** dans le monde du nouveau protocole Matter. Le {{ page.ref }} possède de nombreux atouts indéniables et l'intégration dans Home Assistant s'est faite sans difficulté un bon point selon Haade. Si tu désires t'équiper de modules Matter **alors le Sonoff {{ page.ref }} est fait pour toi** 👌.

