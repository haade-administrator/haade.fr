---
guid: 176
title: "Test SMLIGHT SMHUB NANO : Le hub domotique Linux totalement indépendant"
description: "Découverte du SMHUB NANO de SMLIGHT, un micro-serveur sous Linux capable de faire tourner Zigbee2MQTT, Node-RED et Matterbridge en local sans serveur central."
ref: "SMHUB-NANO"
layout: post
authors: [Nico]
date: 2026-05-07 21:55
last_modified_at: 
categories: [Tests, Zigbee, Home-Assistant]
tags: [SMLIGHT, Matter, Thread, Zigbee]
video: 
image: 'smlight-smhub-nano-hub-domotique-standalone.png'
toc: true
beforetoc: ''
published: false
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.8
locale: fr_FR
comments: true
rating: 5.0 
sourcelink:
  - https://smlight.tech/product/smhub-nano/
---

Après avoir testé le [dongle multiradio SLZB-MR4U]({% post_url /fr/2026-03-06-test-dongle-smlight-slzb-mr4u-multiradio-zigbee-et-thread-ca-marche-du-feu-de-dieu %}), je reviens vers la marque SMLIGHT pour un produit radicalement différent mais tout aussi excitant : le **SMHUB NANO**. 

Contrairement aux autres produits de la marque qui sont essentiellement des coordinateurs Zigbee/Thread, le SMHUB NANO est un véritable **micro-serveur autonome** basé sur Linux. L'idée est simple : héberger vos logiciels domotiques directement sur le hub pour supprimer la dépendance à un serveur central Home Assistant ou au Cloud pour vos automatisations critiques.

> C'est une petite révolution pour les installations décentralisées ou les sites distants !

{% include product-embed.html image="smlight-smhub-nano-hub-domotique-standalone.png" title="SMHUB NANO MG24" brand="SMLight" description="Hub domotique Linux indépendant avec puce EFR32MG24, supportant Zigbee2MQTT, Node-RED et Matterbridge." domlink="" amazlink="" %}

## Un Concept de Hub Indépendant et Évolutif

Le SMHUB NANO n'est pas juste une passerelle. C'est une machine qui fait tourner **SMHUB-OS**, une distribution Linux optimisée. Depuis la **révision matérielle 0.98**, le hub supporte désormais le **mode USB Host** (via un hub alimenté), ce qui permet de connecter des dongles Z-Wave ou des modems 4G/LTE, étendant ainsi ses capacités bien au-delà du Zigbee nativement supporté par la puce **EFR32MG24**.

### Dernières Mise à Jour : Un Bond en Avant (Février 2026)

La dernière mise à jour majeure de **SMHUB-OS** (v0.9.6.dev du 28 février 2026) apporte des améliorations critiques :
*   **Kernel Linux 6.18** : Un passage majeur depuis la version 5.4, offrant une stabilité accrue et une meilleure gestion du matériel.
*   **Contrôle des Périphériques via CLI** : Il est désormais possible de piloter directement l'infrarouge (IR), le Buzzer et l'Ambilight (WS2812) via des commandes comme `smhub-irctl` ou `smhub-buzzerctl`.
*   **Gestion des Backups** : Une nouvelle page dédiée aux sauvegardes et à la restauration a été ajoutée dans l'interface Web, facilitant grandement la maintenance.
*   **Factory Reset** : Support du bouton physique pour une remise à zéro simplifiée.

## Caractéristiques Techniques et Connectivité {{ page.ref }}

Sous le capot, on retrouve une configuration solide, pensée pour un fonctionnement 24/7.

| Composant | Spécification |
| :--- | :--- |
| **Puce Radio** | Silicon Labs EFR32MG24 (Zigbee, Thread, Matter) |
| **Processeur** | Quad-core ARM (Optimisé pour Linux) |
| **Kernel** | Linux 6.18 (Dernière version stable) |
| **Réseau** | Ethernet 100 Mb + Wi-Fi Double Bande (2.4/5 GHz) + BT |
| **USB Host** | Disponible (Rev 0.98+) pour Z-Wave, LTE, etc. |
| **Alimentation** | USB-C (5V) ou PoE (802.3af) |

### Modes de Connexion : Choisir la Fiabilité

Le SMHUB NANO propose trois modes principaux pour s'intégrer à votre écosystème :
1.  **MQTT Bridge (Recommandé)** : Z2M tourne sur le SMHUB avec son propre broker Mosquitto, lequel est "ponté" avec celui de Home Assistant. **Avantage énorme** : Zigbee2MQTT démarre et reste fonctionnel même si Home Assistant est hors ligne ou en redémarrage.
2.  **Connexion Directe Z2M** : Z2M tourne sur le SMHUB et se connecte directement au broker de Home Assistant. Plus simple, mais dépendant de la disponibilité du réseau au démarrage de Z2M.
3.  **Mode Passthrough (Série-over-TCP)** : Le hub devient un simple pont réseau. C'est le mode qui sous-utilise le plus le potentiel du SMHUB et n'est pas recommandé par la marque.

## Déballage et Design

Le format est identique à la gamme SLZB-06. C'est compact, robuste et ça respire la qualité. Les photos sur le site officiel montrent une interface web ultra-fluide où chaque service (Zigbee2MQTT, Node-RED, Matterbridge) est géré comme une application indépendante.

{% picture posts/{{ page.guid }}/smlight-smhub-nano-hub-domotique-standalone.png --alt SMLIGHT SMHUB NANO sur un bureau moderne --img width="940" height="529" %}

## Maillage Thread et Matterbridge

Une fonctionnalité "tueuse" du SMHUB NANO est sa capacité à former des **réseaux mesh Thread** sur plusieurs hubs. Si vous avez plusieurs SMHUB, ils coopèrent pour étendre la couverture Thread de façon transparente. De plus, avec **Matterbridge**, vous exposez vos modules Zigbee directement en Matter vers Google Home ou Apple Home sans aucune dépendance cloud.

{%- include alert.html type="info" text="Pour activer le mode USB Host, rendez-vous dans Settings → USB et redémarrez le hub." %}


## Installation et Usage

L'interface web de **SMHUB-OS** est un modèle du genre. Tout est pré-installé. Vous activez les services dont vous avez besoin en un clic. 

> Pour ceux qui veulent aller plus loin, un accès SSH root est disponible. C'est une machine ouverte !

L'un des cas d'usage les plus intéressants est l'utilisation de **Matterbridge**. Vous connectez vos capteurs Zigbee au SMHUB NANO via Zigbee2MQTT, et Matterbridge les expose instantanément à votre écosystème préféré (Apple/Google/Amazon) sans avoir besoin d'un serveur Home Assistant complet. C'est la solution idéale pour "domotiser" la maison des parents ou une résidence secondaire de façon ultra-fiable.

### **Les + du SMHUB NANO**
{: .blue}

- Autonomie totale (pas besoin de serveur central)
- Alimentation PoE
- Logiciels pré-installés (Zigbee2MQTT, Node-RED, etc.)
- Accès distant via WireGuard/Tailscale intégré
- Puce EFR32MG24 ultra-moderne

### **Les - du SMHUB NANO**
{: .red}

- Nécessite une carte MicroSD de qualité pour la fiabilité Linux
- Légère chauffe en cas d'usage intensif de Node-RED

## Conclusion

Si vous cherchez à **décentraliser votre domotique** ou à créer une passerelle Matter universelle et ultra-puissante, le **{{ page.ref }}** est sans doute le meilleur choix actuel. C'est stable, performant et l'ouverture du système permet toutes les fantaisies. SMLIGHT confirme encore une fois sa place de leader sur les coordinateurs et hubs "pro".

> **Je recommande à 100%** pour sa polyvalence et sa robustesse !

## Articles Connexes

{% include related-article.html guids="171,125" %}
