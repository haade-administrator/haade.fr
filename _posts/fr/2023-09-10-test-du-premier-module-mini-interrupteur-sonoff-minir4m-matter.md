---
guid: 83
title: ""
description: ""
ref: "miniR4M"
layout: post
author: Nico
date: 2023-09-27 18:05
last_modified_at: 
categories: [Tests, Matter]
tags: []
image: 'sonoff-minir4m-matter-minicontrol-test-haade.png'
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
  - https://itead.cc/product/sonoff-mini-extreme-wi-fi-smart-switch-matter-enabled/ref/122/
---

![Setting up a report in zoneminder]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-sonoff-minir4m-matter-homeassistant.webp{{ cachebuster }}){: width="320" height="693"}

{% picture posts/{{ page.guid }}/deballage-sonoff-minir4m-interrupteur-matter-mini-extreme.png --alt déballage du nouveau module matter mini interrupteur Sonoff {{ page.ref }} --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/comparatif-interrupteur-mini-extreme-sonoff-zbminil2-minir4m.png --alt photo comparative sonoff zbminil2 et {{ page.ref }} la taille un atout indéniable --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/commande-matter-home-assistant-minir4m-sonoff-matter.png --alt intégration du nouveau sonoff mini intérrupteur matter {{ page.ref }} dans home assistant --img width="940" height="821" %}

{% picture posts/{{ page.guid }}/Dimensions-spécifications-sonoff-miniR4M-matter.png --alt spécifications et dimensions du nouveau sonoff mini intérrupteur matter {{ page.ref }} --img width="940" height="600" %}

{% picture posts/{{ page.guid }}/branchement-sonoff-matter-miniR4M.png --alt branchement du nouveau sonoff mini intérrupteur matter {{ page.ref }} --img width="940" height="470" %}

{% include doclink.html pdf="guide-rapide-sonoff-minir4m-matter.pdf" title="guide rapide sonoff miniR4M matter" %}
{% include doclink.html pdf="manuel-utilisateur-mini-r4-matter-sonoff.pdf" title="Manuel utilisateur du sonoff miniR4M Matter" %}
{% include doclink.html pdf="specification-produit-MINIR4M-V1.0.pdf" title="Document spécification produit sonoff matter miniR4M" %}


**MINIR4M est le premier appareil Matter de SONOFF**, il peut reconnaître et fonctionner avec d'autres marques d'appareils terminaux Matter, et s'intégrer aux plates-formes compatibles Matter, telles que Apple Home, Google Home, Alexa, etc. Contrôler tous les appareils intelligents via une seule application n'est plus un fantasme. Les appareils certifiés Matter prennent en charge la communication locale dans le réseau domestique, même si le réseau est déconnecté, MINIR4M fonctionne toujours normalement, avec une réactivité plus rapide et une meilleure fiabilité. L'ajout de MINIR4M aux applications compatibles Matter est simple. Scannez simplement le code QR Matter fourni avec votre application compatible Matter et MINIR4M est facilement configuré en suivant les étapes de l'application.

MINIR4M est équipé d'une puce ESP32, sa petite taille s'adapte à divers boîtiers de montage, y compris le type 86/EU, le boîtier de montage de type 120. MINIR4M prend en charge le contrôle des interrupteurs externes et se connecte facilement à l'interrupteur momentané, à l'interrupteur de sortie de porte, à l'interrupteur SPDT, à l'interrupteur de verrouillage et même aux capteurs à contact sec.

**MINIR4M dispose d'un mode « relais détaché »**, ce qui signifie que les états des commutateurs externes et du relais sont séparés, donc l'actionnement du bouton de commutation externe n'affectera pas l'état du relais. Par exemple, si vous ouvrez le mode "relais de détachement", lorsque vous éteignez la lumière, votre lumière intelligente ne sera pas hors ligne et vous pourrez toujours utiliser l'application pour contrôler les lumières intelligentes.

## **les + du produit** {{ page.ref }}
{: .blue}
- la qualité de fabrication
- le prix
- compatible matter (esp32)
- fonctionne avec tous types d'interrupteurs


## **les - du produit** {{ page.ref }}
{: .red}

- Nécessite le neutre pour fonctionner
- Nécessite le neutre à l'interrupteur et le neutre de l'interrupteur à la lumière

## Conclusion

