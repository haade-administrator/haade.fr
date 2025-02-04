---
guid: 153
title: "Mise en Place du Multi-protocole Zigbee/Thread sur Home Assistant"
description: "Thread est un protocole qui monte en puissance, il est possible grâce à Silicon Labs de faire cohabiter Thread/Matter avec Zigbee sur la même clé EZSP. Malgré le fonctionnement expérimental, tu pourras te rendre compte que l'installation des deux' protocoles sur une même clé est possible !"
ref: ""
layout: post
authors: [Nico]
date: 2025-02-04 18:00
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
video: 
image: 'installation-multiprotocole-zigbee-thread-cle-skyconnect-zbt1-home-assistant.png'
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
  - https://www.home-assistant.io/integrations/thread/
---

Après un tuto sur [l'installation du protocole Thread/Matter]({% post_url /fr/2025-01-30-prepare-le-reseau-thread-matter-avec-home-assistant-et-integre-un-module %}){: target="_blank} sur Home Assistant, continuons maintenant et abordons un **sujet sensible**, **le multi-protocole thread/zigbee sur la même clé**. Pourquoi sensible, cette intégration est toujours en **phase de développement** et non conseillée par **l'équipe Nabu Casa**.

> Ils préconisent toujours **d'installer un seul protocole par clé**, c'est bien dommage car pour rappel Zigbee et Thread utilisent tous deux la même fréquence soit le 802.15.4Mhz.

{% include product-embed.html image="nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-skyconnect-pour-home-assistant.png" title="Clé Zigbee et Thread ZBT 1 Skyconnect" brand="Nabucasa" description="Clé Home Assistant Nabu Casa compatible Zigbee ou Thread" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}

## Liens intéressants

Pour bien comprendre le mode multi-protocole voici **trois liens Home Assistant** qui te fournira un maximum d'explication

[Home Assistant et le protocole Thread](https://www.home-assistant.io/integrations/thread/){: target="_blank}

[Mode multiprotocole Home Assistant Silicon Labs Multipan](https://connectzbt1.home-assistant.io/about-multiprotocol/){: target="_blank}

[Explication firmware ezsp home assistant](https://connectzbt1.home-assistant.io/about-firmware-options/){: target="_blank}

## 1ère étape Sauvegarde et Suppressions

Avant toute chose surtout **si tu pars d'une installation existente** pense à faire **des sauvegardes** pour rappel le module Silabs multi-protocol est en **phase Experimental** bref je t'aurai prévenu 😁.
Pense à **supprimer les modules ZHA** intégré ainsi que le coordinateur associé.
Pense à **supprimer le border routeur Thread et Openthread** si tu l'utilises.

## 2ème préparation de la clé Zigbee

Il faut impérativement que la clé Zigbee **ait un firmware Zigbee d'installé**. Si ce n'est pas le cas et si tu utilises la clé Zigbee Skyconnect/ZBT-1 c'est assez simple. va dans **paramètres > système > matériel > Home assistant skyconnect > configurer**

Tu peux aussi utiliser [l'application en ligne fourni par home assistant](https://connectzbt1.home-assistant.io/firmware-update/){: target="_blank}

Si tu possèdes une autre clé type Sonoff rends toi sur la [page darkxst qui utilise aussi l'application de modification du firmware en ligne](https://darkxst.github.io/silabs-firmware-builder/){: target="_blank}

> Bref la clé doit être configuré en Zigbee

## 3ème étape l'installation

Rien de plus simple **télécharge et installe le module officiel Silabs multi-protocol** en cliquant sur le lien ci-dessous

[![Télécharge l'application Silabs multi-protocol par home Assistant](https://my.home-assistant.io/badges/supervisor_ingress.svg)](https://my.home-assistant.io/redirect/supervisor_ingress/?addon=core_silabs_multiprotocol%2F){: target="_blank}

{% picture posts/{{ page.guid }}/silicon-labs-multi-protocol-thread-zigbee.png
 --alt Installation du module multi-protocol thread zigbee par silabs --img width="600" height="320" %}

Ensuite avant de démarrer l'application il faut la configurer rien de bien compliquer:

- Sélectionne la clé qui va être paramétrer
- met le baudrate à 460800
- et fini par enregistrer
- démarre l'application

{% picture posts/{{ page.guid }}/configuration-silabs-multi-protocol.png
 --alt Configuration du module multi-protocol thread zigbee par silabs --img width="600" height="544" %}

Arrivé à ce stade le module va **envoyer le firmware multi-protocol** adéquat, ce n'est pas le dernier disponible mais celui qui a été testé par l'équipe HA, soit le 4.3.1, pour finir il va paramétrer le serveur Openthread.

En consultant le journal tu pourras vérifier l'installation qui s'est bien déroulé, avec un message en **rouge avec l'encryption désactivé**{: .red}, mais qui ne pose pas de problème au fonctionnement **cependant l'encryption du border router Thread sera non fonctionnel.**

{% picture posts/{{ page.guid }}/journal-installation-multi-protocol.png
 --alt Journal installation multi-protocol --img width="940" height="690" %}

> Voilà l'installation est terminée

Si **tu n'as pas de serveur Matter de disponible** et oui pour rappel thread fonctionne avec Matter, ce n'est pas la peine de t'amuser à installer le serveur, ça se fera automatiquement lors de la découverte du premier module.

## 4ème étape ajout des appareils

### Ajout de l'appareil Thread

Maintenant rends-toi dans **Paramètres > Appareils et service** et ajoute la découverte Thread

{% picture posts/{{ page.guid }}/decouverte-thread.png
 --alt découverte thread --img width="347" height="214" %}

> Une fois l'appareil ajouté tu vas maintenant retourner **dessus et cliquer sur configurer**

{% picture posts/{{ page.guid }}/configurer-thread.png
 --alt verification configuration thread --img width="600" height="137" %}

Nous allons afficher la configuration afin de savoir sur quel canal le réseau thread est paramétré, appui sur le **i** dans mon cas c'est le **canal 20 de paramétré par défaut**.

{%- include alert.html type="warning" text="Phase délicate du processus, il faudra impérativement que le <b>canal radio soit le même sur les deux protocoles</b>, pour un choix judicieux <b>si tu le peux</b> opte pour le <b>canal 15, 20 ou 25</b> afin de ne pas rentrer en concurrence avec le canal du réseau wifi." link="https://haade.fr/fr/blog/interference-zigbee-wifi-2-4ghz-a-savoir" textlink="Interférence Zigbee et Wifi" %}

{% picture posts/{{ page.guid }}/information-routeur-thread-canal.png
 --alt information border router thread --img width="600" height="137" %}

> Processus délicat du multi-protocol est le fait que **tu ne peux pas modifier manuellement** le canal de thread et zigbee, le choix se fait **automatiquement**

{% picture posts/{{ page.guid }}/canal-choisi-automatiquement-en-mode-multi-protocol.png
 --alt choix du canal automatique thread et zigbee. --img width="600" height="298" %}

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Robinet thermostatique Tado° X" brand="Tado°" description="Robinet thermostatique Tado° X, probablement le robinet le plus abouti du marché, compatible matter over thread" amazlink="34aH0EeO" %}

### Ajout de l'appareil Zigbee

Il va falloir maintenant ajouter le coordinateur Zigbee via la bibliothèque **Zigpy ZHA**.
Rien de compliqué vas dans **Paramètres > Appareils et services > Ajouter une intégration** et choisi **Zigbee home automation**

{% picture posts/{{ page.guid }}/ajout-coordinateur-zigbee.png
 --alt ajout coordinateur zigbee --img width="600" height="298" %}

Sélectionne le dongle attention il s'agit du **socket://core-silabs-multiprotocol:9999**

{% picture posts/{{ page.guid }}/choix-du-dongle-multi-protocol-zigbee.png
 --alt choix du socket zigbee pour l'installation multi-protocol silabs --img width="600" height="412" %}

Pour terminer sélectionne **créer un nouveau réseau ou supprimer un réseau existant**

{% picture posts/{{ page.guid }}/creer-un-nouvea-reseau-zigbee.png
 --alt créer un nouveau réseau pour l'installation multi-protocol silabs --img width="417" height="273" %}

Comme pour Thread nous allons vérifier les informations du réseau **afin de voir si l'installation automatique a bien choisi** le même **canal** que le réseau Thread. rends-toi directement sur le lien ci-dessous.

[![Configuration du réseau Zigbee ZHA](https://my.home-assistant.io/badges/config_zha.svg)](https://my.home-assistant.io/redirect/config_zha/){: target="_blank}

{% picture posts/{{ page.guid }}/parametre-zigbee-controle-du-canal.png
 --alt reconfigure un nouveau réseau pour l'installation multi-protocol silabs --img width="607" height="853" %}

> Dans mon cas les **deux canaux sont identiques Jackpot** !

Si ce n'est pas le cas ne t'affoles pas, **clic sur migrer la radio**{: .red} et **sélectionne reconfigurer la radio actuelle ensuite ça devrait être bon**

{% picture posts/{{ page.guid }}/reconfigurer-radio-actuelle.png
 --alt créer un nouveau réseau pour l'installation multi-protocol silabs --img width="600" height="742" %}

{% include product-embed.html image="nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-skyconnect-pour-home-assistant.png" title="Clé Zigbee et Thread ZBT 1 Skyconnect" brand="Nabucasa" description="Clé Home Assistant Nabu Casa compatible Zigbee ou Thread" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}

## Pour terminer Ajoutons Matter

Lors de la **découverte d'un module Matter sur le réseau ou lors de la création d'un réseau Openthread** l'appareil montera automatiquement dans la découverte des appareils

{% picture posts/{{ page.guid }}/decouverte-matter.png
 --alt Découverte module Matter --img width="354" height="220" %}

**Pour rappel** si tu n'as pas encore installé de **serveurs Matter pas grave** lors de la découverte du premier appareil Matter il te suffira de laisser la case coché: **utilisez le module complémentaire officiel Matter server dans le superivsor**

{% picture posts/{{ page.guid }}/installation-automatique-serveur-matter.png
 --alt créer un nouveau réseau lors du premier ajout matter --img width="600" height="295" %}

## Vérification de l'ensemble

Voilà une **capture d'écran de l'ensemble du système d'installé**, tu pourras te rendre compte que j'ai installé un produit dans **Zigbee ZHA, il s'agit d'une ampoule Lidl** ainsi qu'un module **dans Matter il s'agit du très bon robinet thermostatique Tado-X compatible Thread**.

{% picture posts/{{ page.guid }}/controle-installation-silabs-multi-protocol.png
 --alt tour d'horizon de l'installation complète --img width="940" height="392" %}

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Robinet thermostatique Tado° X" brand="Tado°" description="Robinet thermostatique Tado° X, probablement le robinet le plus abouti du marché, compatible matter over thread" amazlink="34aH0EeO" %}

> Ci-dessous l'intégration du robinet **thermostatique Tado-X** en multi-protocole dans Home Assistant

{% picture posts/{{ page.guid }}/integration-robinet-thermostatique-thread-tado-x-dans-home-assistant.png
 --alt integration robinet thermostatique tado-x dans home assistant en multi-protocole --img width="600" height="368" %}

> Ci-dessous l'intégration de **l'ampoule Lidl Zigbee** en multi-protocole dans Home Assistant

{% picture posts/{{ page.guid }}/integration-ampoule-zigbee-dans-multi-protocole-home-assistant-avec-zha.png
 --alt integration robinet thermostatique tado-x dans home assistant en multi-protocole --img width="600" height="452" %}

## Récapitulatif étape clé

1. Avec une clé Zigbee puce silabs avec un [firmware Zigbee](https://github.com/darkxst/silabs-firmware-builder){: target="_blank} installé.
2. Être sure d'avoir entièrement **suprimmé l'intégration ZHA, Thread et Openthread** des appareils sur Home Assistant.
3. Installe le module **Silabs Multi-protocole officiel**.
4. Sélectinne la clé zigbee dans les paramètres et enregistrer.
5. Démarre le lancement du module.
6. Aller dans **paramètres > Appareils et services** et ajouter Thread en découverte.
7. Vérifie toujours **dans Appareils et services l'entrée Openthread** configurée.
8. Aller dans l'entrée Thread et appuyez sur configurer.
9. Vérifie **l'existence du routeur de bordure ha-thread-xxxx** et appuyer sur **i** afin de vérifier les **infos Channel** dans mon cas 20.
10. Ensuite Ajoute l'appareil **Zigbee Home Automation**
11. Sélectionne l'entrée: **socket://core-silabs-multiprotocol:9999**
12. Sélectionne **Effacer les paramètres réseau et crééer un nouveau réseau**
13. Va dans les appareils Zigbee et clic sur configurer
14. Vérifie le Canal il doit être identique à Threasd pour moi, canal 20 
15. Si différent clic sur **migrer la radio** et **reconfigurer la radio actuelle**

{%- include alert.html type="warning" text="Phase délicate du processus, il faudra impérativement que le <b>canal radio soit le même sur les deux protocoles</b>, pour un choix judicieux <b>si tu le peux</b> opte pour le <b>canal 15, 20 ou 25</b> afin de ne pas rentrer en concurrence avec le canal du réseau wifi." link="https://haade.fr/fr/blog/interference-zigbee-wifi-2-4ghz-a-savoir" textlink="Interférence Zigbee et Wifi" %}

## Multi-protocle et la bibliothèque Zigbee2mqtt

La dernière version du **module silabs multi-protocole** ainsi que la **version 2 de Zigbee2mqtt ne permettent pas de fonctionner ensemble.**

**Ce n'est pas la peine d'essayer de paramétrer** 

{% highlight yaml%}
port: socket://core-silabs-multiprotocol:9999 ou port: tcp://core-silabs-multiprotocol:9999
adapter: ember ou ezsp
{% endhighlight %}

> Malheureusement la **bibliothèque Zigbee2mqtt est non fonctionnel** en mode Multi-Protocole

{% picture posts/{{ page.guid }}/erreur-zigbee2mqtt-silabs-multi-protocole.png
 --alt Erreur installation multiprotocole zigbee et thread pour zigbee2mqtt dans home assistant --img width="940" height="446" %}

## Conclusion

Si tu suis bien le processus d'installation **tu auras réussi à faire fonctionner sur une seule clé** en l'occurrence la Skyconnect en mode **multi-protocole Silabs Zigbee/Thread/Matter**, sans trop de difficulté et tu pourras ainsi faire fonctionner un panel de modules Thread et Zigbee. **Néanmoins c'est un mode expérimental il est à utiliser avec des pincettes**, et tout n'est pas encore parfait.

{% include product-embed.html image="nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-skyconnect-pour-home-assistant.png" title="Clé Zigbee et Thread ZBT 1 Skyconnect" brand="Nabucasa" description="Clé Home Assistant Nabu Casa compatible Zigbee ou Thread" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}




