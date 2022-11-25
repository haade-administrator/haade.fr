---
guid: 17
title: "Z-wave face à Matter"
description: "Après le comparatif du z-wave face à zigbee, voici un comparatif face à Matter"
layout: post
author: Nico
date: "2021-09-05"
last_modified_at:
categories: Domotique Protocoles News
tags:
image: "zwave-face-a-matter.jpg"
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: fr_FR
toc: true
beforetoc:
comments: true
redirect_from:
  - /fr/blog/home-automation-smarthome-jeedom-homeassistant/protocoles/z-wave-face-a-matter/
  - /blog/news/z-wave-face-a-matter/
  - /blog/home-automation-smarthome-jeedom-homeassistant/protocoles/z-wave-face-a-matter/
---
## [Z-Wave](https://z-wavealliance.org/){:target="_blank"} + [Matter](https://buildwithmatter.com/){:target="_blank"} est une opportunité pour une véritable interopérabilité.

Le patron de Z-Wave affirme que les utilisateurs bénéficieront d'une approche rationalisée de la maison intelligente.

Avec la puissance de Big Tech derrière elle et le projet CHIP se transformant en un [homeoverip]({% post_url /fr/2020-02-11-protocole-connecte-home-over-ip %}){:target="_blank"} ==> [Matter](https://buildwithmatter.com/){:target="_blank"} conviviale pour le marketing, nous pourrions envisager l'un des plus grands bouleversements jamais réalisés dans le monde de la maison intelligente.

Il pourrait sembler, vu de l'extérieur au moins, que Z-Wave pourrait être une victime de ce bouleversement.

Z-Wave n'est pas un protocole de communication utilisé par la nouvelle initiative et, ne l'oublions pas, Matter est une initiative essentiellement **dirigée par le rival de longue date de Z-Wave, Zigbee,** sous sa nouvelle apparence CSA (Connectivity Standards Alliance).

## L'interopérabilité: la clé des protocoles Z-wave et Matter

Cependant, la clé pour que Z-Wave non seulement survive à la menace de Matter, mais prospère avec l'opportunité qu'elle apporte, est la seule chose pour laquelle Z-Wave a toujours été un ardent défenseur : **l'interopérabilité.**

> La réalisation d'une interopérabilité complète est un composant essentiel de notre plate-forme. Mais le fait est que, pour être interopérable, vous avez en fait besoin de l'ensemble complet du protocole des blocs de construction
>
> Mitch Klein, directeur exécutif de Z-Wave Alliance et directeur des partenariats stratégiques chez Silicon Labs

Matter mise tout sur l’interopérabilité qui va être difficile à mettre en place. Vu le nombre de protocoles et de membres constituant Matter. Là ou Z-wave constitue naturellement cette interopérabilité.

> Z-Wave a tous les éléments constitutifs en place. Mais lorsque nous examinons certaines des autres plates-formes ici. Elles ne rendent pas obligatoire ou ne fournissent pas l'intégralité de la pile.
>
> Mitch Klein

Klein tient à souligner que, plutôt que d'être un protocole rival, Z-Wave fonctionnera aux côtés de la nouvelle norme Matter. Les consommateurs bénéficieront d'une approche de maison intelligente plus rationalisée.

> Nous sommes en fait vraiment ravis d'avoir des entreprises comme **Amazon, Apple, Google, Samsung** et des centaines d'autres, toutes disant oui, soyons vraiment interopérables", a-t-il expliqué. La question de la promesse d'appeler l'avenir entièrement interopérable. Nous le soutenons à 100% et nous le disons depuis 20 ans.
>
> Mitch Klein

## Matter, Nouveau protocole ?

Si Matter a un nouveau nom brillant et un nouveau logo, **ce n'est pas du tout une toute nouvelle méthode de communication.** Simplement une marque et une initiative qui utilise des protocoles existants. Afin d'essayer d'offrir aux consommateurs une expérience de maison intelligente plus rationalisée.

Matter utilise le **Wi-Fi, Bluetooth Low Energy** pour le couplage initial et **Thread**. Il s'appuiera donc sur des appareils pouvant proposer ces radios. Ainsi que sur des hubs et des routeurs pouvant étendre la portée du réseau. Nous le voyons déjà avec Nanoleaf ajoutant des routeurs de bordure Thread à ses appareils existants.

Comme le montre l'image ci-dessous, **Z-Wave a la possibilité de vivre à côté d'un système Matter**, à condition qu'il y ait un périphérique de passerelle en place qui prend en charge les deux systèmes. Ce n'est pas si différent de dire, un hub SmartThings , qui offre Zigbee , Z-Wave, Wi-Fi et autres.

{% picture posts/{{ page.guid}}/zwave-face-a-matter.jpg --alt z-wave vs matter --img width="820" height="461" %}

« Une petite astuce est nécessaire et une technologie initiale est requise pour tenir la promesse d'interopérabilité. Et non pour briquer ou rendre complètement obsolètes des centaines de millions de produits et d'installations », a expliqué Klein.

Nous aurions la longue portée et le maillage Z-Wave interagissant avec les appareils Matter par le même type d'appareil périphérique, de concentrateur, de passerelle, quel que soit le nom que nous souhaitons lui donner. **C'est ainsi que nous allons rendre Matter et Z-Wave interopérables.**

« Cela pourrait être un morceau de matériel, avec un logiciel qui va lui permettre de vivre dans le cloud ; il peut vivre sur une passerelle, il peut vivre sur un périphérique , il peut vivre sur des périphériques finaux. Tout dépend du fabricant et de la manière dont l'écosystème est déployé.

Klein a tenu à souligner que, s'il **considère Matter comme une force majeure** dans l'évolution de la maison intelligente, Z-Wave est toujours un acteur clé en ce qui concerne certains appareils.

"Je pense que du point de vue de la fabrication, **Matter va vraiment aider à stimuler l'innovation**", a-t-il expliqué.

« Les équipes d'ingénieurs peuvent faire beaucoup moins d'efforts pour créer ces cinq ou six saveurs différentes. Et ainsi se concentrer sur les nouveaux produits, améliorer les produits existants, etc.

« Mais **Z-Wave a toujours la meilleure autonomie de batterie**, fonctionner à un niveau inférieur est un énorme avantage pour les appareils tels que les serrures de porte, qui sont généralement situés à la périphérie d'un réseau.

« Nous ne voyons pas cela vraiment changer beaucoup de choses. Et une fois que nous commencerons à parler des **périphériques bridge**, je pense que ce sera mieux pour **Z-Wave**, qui présente de nombreux avantages par rapport aux versions 2.4, et certainement par rapport aux périphériques Wi-Fi et Ethernet.

« C'est la même chose avec la même chose avec les batteries et avec la longue portée. Nous rendons Z-Wave de plus en plus attrayant. Et le fait que Matter se soit concentré sur l'interopérabilité. C'est ce pont qui va en fait être très positif pour les produits et les entreprises liés à Z-Wave.

## En Conclusion

**Pour finir,** malgré les annonces de Mitch Klein, Z-wave est interopérable qu'avec Z-wave. Je ne critique pas le protocole **qui est selon moi l'un des meilleurs** et certainement **le plus stable** au niveau du maillage. L'arrivée de Matter est très attendu par les constructeurs et va faire beaucoup d'ombres à z-wave. De l'autre côté ça va faire bouger les choses car Mitch Klein avait annoncé la baisse des coûts de productions du protocole. Mais les fabricants n'ont toujours pas reportés ces coûts sur la vente des produits finaux.

Article inspiré par [the-ambient.com](https://www.the-ambient.com/){:target="_blank"}
