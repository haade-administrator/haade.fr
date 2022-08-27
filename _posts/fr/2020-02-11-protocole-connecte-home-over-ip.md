---
guid: 5
title: 'Protocole connecté Home over IP'
date: '2020-02-11T14:45:38+00:00'
last_modified_at:
author: Nico
categories: Domotique Protocoles
layout: post
image: homeoverip
tags:
description: "Actu du futur protocole HomeoverIP nommé Matter"
locale: fr_FR
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
beforetoc:
toc: true
comments: true
---

Cet article est une traduction de [l’article original disponible à cette adresse](https://www.connectedhomeip.com/){:target="_blank"} du futur protocole home over ip

## Qu’Est-ce que c’est?

Tout d’abord Project Connected Home over IP est un nouveau groupe de travail. Qui prévoit de développer et de promouvoir l’adoption d’une nouvelle norme de connectivité. Sans redevance pour accroître la compatibilité entre les produits de maison intelligente, avec la sécurité comme principe fondamental de conception.

## Comment ça va fonctionner?

Amazon, Apple, Google et la [Zigbee Alliance](https://www.haade.fr/blog/tutoriel-domotique-electronique/domotique-smarthome-jeedom-homeassistant/protocole/zigbee-comprendre-le-protocole-et-le-maillage/){:target="_blank"} se sont associés pour promouvoir la formation du groupe de travail. Ainsi que Les sociétés membres du conseil d’administration de la Zigbee Alliance, IKEA, Legrand, NXP Semiconductors, Resideo, Samsung SmartThings, Schneider Electric, Signify (anciennement Philips Lighting), Silicon Labs, Somfy et Wulian sont également à bord pour rejoindre le groupe de travail et contribuer au projet.

L’objectif du protocole Home over ip est de simplifier le développement pour les fabricants. Et d’augmenter la compatibilité pour les consommateurs. Le projet est construit autour d’une conviction commune que les appareils domestiques intelligents doivent être sûrs, fiables et transparents à utiliser. En s’appuyant sur le protocole Internet (IP), le projet vise à permettre la communication entre les appareils domestiques intelligents, les applications mobiles et les services cloud. Et ainsi définir un ensemble spécifique de technologies de mise en réseau IP pour la certification des appareils.

Le groupe de travail de l’industrie adoptera une approche open source. Pour le développement et la mise en œuvre d’un nouveau protocole de connectivité unifié. Le projet a l’intention d’utiliser les contributions des technologies de maison intelligente. Testées sur le marché d’Amazon, Apple, Google, Zigbee Alliance et d’autres. La décision de tirer parti de ces technologies devrait accélérer le développement du protocole. Pour finalement offrir plus rapidement des avantages aux fabricants et aux consommateurs.

Le projet vise à permettre aux fabricants d’appareils de construire plus facilement des appareils compatibles avec la maison intelligente. Ainsi que les services vocaux tels que Alexa d’Amazon, Siri d’Apple, Assistant de Google et autres. Le protocole prévu complétera les technologies existantes. De plus les membres du groupe de travail encouragent les fabricants d’appareils à continuer d’innover. En utilisant les technologies disponibles aujourd’hui.

## Nous sommes sûrs que vous avez des questions. Voici quelques réponses.

### Pourquoi IP ?

Aujourd’hui, il n’y a pas de norme ouverte largement adoptée pour la maison intelligente qui est basée sur IP. Pourtant IP est le protocole d’Internet et est la couche réseau la plus couramment utilisée, dans nos maisons et nos bureaux. Avec IP, les messages peuvent être acheminés sur des réseaux indépendants des couches physiques. Et de liaison qui les sous-tendent, de plus il existe de nombreux algorithmes et infrastructures testés au combat pour effectuer le routage, la commutation et le pare-feu de manière robuste et résiliente. En plus d’IP, vous héritez de protocoles de transport bien connus comme TCP et UDP. Par conséquent, l’IP est un moyen idéal pour assurer la sécurité et la confidentialité de bout en bout dans la communication entre un appareil et un autre appareil, application ou service.

Il existe aujourd’hui un grand nombre de réseaux porteurs IP, conçus pour différents cas d’utilisation. comme le protocole se base sur IP. Son trafic de messages devrait pouvoir circuler de manière transparente sur différents types de réseaux.

De nombreux appareils Smart Home utilisent aujourd’hui des protocoles propriétaires. Ce qui nécessite qu’ils soient attachés à un réseau domestique à l’aide de proxys et de traducteurs dédiés. En s’appuyant sur IP, certains de ces appareils peuvent à la place être en mesure de se connecter directement à un équipement réseau standardisé.

### Vous avez mentionné les technologies de mise en réseau IP. Sur quels projets le Protocole Home over IP se concentrera-t-il? Lesquels pourraient être activés plus tard?

Le projet définira un ensemble spécifique de technologies de mise en réseau IP pour la certification des appareils. Nous prévoyons que les appareils conformes doivent implémenter au moins une technologie prise en charge et pas nécessairement toutes.

Le but de la première version des spécifications sera le Wi-Fi, jusqu’à et y compris 802.11ax (alias Wi-Fi 6). C’est-à-dire 802.11a / b / g / n / ac / ax; Thread sur 802.15.4-2006 à 2,4 GHz. Et une implémentations IP pour Bluetooth Low Energy, versions 4.1, 4.2 et 5.0 pour le réseau et les protocoles sans fil physiques.

De plus Le groupe de travail Project Connected Home over IP englobera également d’autres technologies IP telles qu’Ethernet, Cellular, Broadband et autres.

Certaines entreprises peuvent concentrer leurs offres de produits sur le protocole via Wi-Fi / Ethernet. Tandis que d’autres peuvent cibler le protocole sur Thread ou BLE, et d’autres encore peuvent prendre en charge une combinaison. Veuillez contacter les sociétés individuelles pour connaître leurs intentions en matière de support technique futur.

## Les consommateurs

### Comment le projet bénéficiera-t-il aux consommateurs ?

Le protocole home over ip vise à améliorer l’expérience des consommateurs en essayant d’utiliser des produits pour la maison intelligente qui ne sont pas compatibles entre eux. Nous pensons que le protocole a le potentiel d’être largement adopté par les systèmes domestiques et les assistants tels qu’Amazon Alexa, Siri d’Apple, Google Assistant et autres. Si le groupe de travail réussit avec cet objectif, les clients peuvent être sûrs que leur appareil de choix fonctionnera dans leur maison et qu’ils pourront le configurer et le contrôler avec leur système préféré.

> Mes produits pour maison intelligente actuels continueront-ils de fonctionner comme ils le font aujourd’hui?

Oui. Amazon, Apple et Google se sont engagés à poursuivre la prise en charge des consommateurs et de leurs produits existants.

## Développeurs

### Quels seront les avantages du projet pour les développeurs?

Le protocole home over ip vise à permettre aux développeurs de créer plus facilement un appareil compatible avec les services de maison intelligente tels qu’Amazon Alexa, Apple Siri, Google Assistant et autres. Cela peut inclure une proposition de norme pour les événements du cycle de vie tels que l’approvisionnement / l’intégration, la suppression, la récupération des erreurs et la mise à jour du logiciel.

> Je développe de nouveaux produits aujourd’hui. Comment le projet affecte-t-il mon cheminement de développement?

Le protocole prévu complétera les technologies existantes et les membres du groupe de travail encouragent les fabricants d’appareils à continuer d’innover en utilisant les technologies disponibles aujourd’hui. Rejoignez le groupe de travail pour en savoir plus sur le protocole prévu et quand il sera disponible.

**Les produits de maison intelligente actuels continueront-ils de fonctionner ?**

Oui. Amazon, Apple et Google se sont engagés à continuer de prendre en charge les développeurs et leurs produits.

**Seront-ils également compatibles avec le nouveau protocole ?**

Le protocole home over ip sera axé sur de nouveaux produits. Pour les développeurs intéressés à se joindre à l’effort, veuillez rejoindre le groupe de travail Project Connected Home over IP.

**Quand les spécifications seront-elles disponibles ?**

Pour accélérer le développement, le projet prévoit de commencer avec des composants de technologies testées sur le marché, modifiés au besoin. Le groupe de travail a pour objectif de publier un projet de spécification et une mise en œuvre open source de référence préliminaire fin 2020.

**Quelle est l’approche open source que le Groupe de travail a l’intention d’adopter ?**

Pour accélérer le développement du protocole et offrir plus rapidement des avantages aux fabricants et aux consommateurs, le groupe de travail commencera par des composants de technologies testées sur le marché d’Amazon, d’Apple, de Google, de la Zigbee Alliance et d’autres. Tout code open source que le groupe de travail choisit d’incorporer sera copié dans le projet open source Connected Home over IP et sera modifié au besoin.

En développant un projet open source en conjonction avec la création de la spécification, l’architecture peut être prototypée et testée dans des cas d’utilisation réels. À la fin du processus, les adoptants peuvent utiliser ce même code pour accélérer le développement de leurs produits.

### Quelles sont les technologies de maison intelligente testées sur le marché qui sont apportées?

Le protocole home over ip a l’intention de tirer parti des travaux de développement et des protocoles des systèmes existants tels que:

1. Alexa Smart Home d’Amazon
2. HomeKit d’Apple
3. Google’s Weave
4. Modèles de données Dotdot de Zigbee Alliance

**Le projet tentera-t-il de normaliser les interfaces utilisateur de la maison intelligente ?**

Non. À l’heure actuelle, le groupe de travail n’a pas l’intention de normaliser les interfaces utilisateur de la maison intelligente telles que les assistants vocaux, les écrans intelligents ou les applications de bureau et mobiles.

### Je suis intéressé. Comment rejoindre cet effort?

Le groupe de travail accueille et invite les fabricants d’appareils, les fournisseurs de silicium et d’autres développeurs de l’industrie de la maison intelligente à participer et à contribuer au développement de cette nouvelle norme. Si vous souhaitez vous impliquer ou recevoir des mises à jour, [remplissez le formulaire disponible à cette adresse](https://www.connectedhomeip.com/){:target="_blank"}

## Open source home over ip

L’implémentation de référence de la nouvelle norme et ses outils de support seront développés et maintenus sur la plateforme open source GitHub pour tous les aspects de la spécification. Veuillez rester à l’écoute pour plus d’informations.
