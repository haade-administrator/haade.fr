---
guid: 64
title: "Mise à jour automatique Homeassistant"
description: "Grâce à un Blueprint, automatise les mises à jour de Homeassistant en créant une automatisation, ce blueprint permet de paramétrer d'autres mises à jour. Cette manip très intéressante est tout de même à utiliser avec quelques pincettes"
layout: post
authors: Nico
date: 2023-05-04 12:26
last_modified_at: 
categories: [Home-Assistant, Haade-lab, Domotique]
tags: []
image: 'automatiser-les-mises-à-jour-de-homeassistant.png'
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
addViews: 102
comments: true
rating:  
sourcelink:
  - https://community.home-assistant.io/t/scheduled-auto-update-for-home-assistant/459281
---

**Voilà un Blueprint fort intéressant**, il te permet d'automatiser toutes sortes de mise à jour de Homeassistant ( Homeassistant noyau et système, Hacs, Modules complémentaires, cartes, etc... ), en créant facilement une automatisation complète basé sur l'entrée planification et le premier jour de lancement. Toutes sortes d'options détaillées plus bas te permettent de paramétrer ce que tu souhaites mettre à jour.

## Prérequis

- Home Assistant installé version minimum 2022.09
- connaître le fonctionnement des Blueprint
- HACS installé (optionnel)

## Mise à jour automatique de Home Assistant

Pour toute question ou suggestion, utilise [ce fil de discussion sur le portail de la communauté Home Assistant](https://community.home-assistant.io/t/scheduled-auto-update-for-home-assistant/459281){: target="_blank"}.

[![Ouvrez votre instance Home Assistant et affichez la boîte de dialogue d'importation de plan avec un plan spécifique pré-rempli.](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://raw.githubusercontent.com/edwardtfn/HomeAssistant-Config/main/blueprints/automation/EdwardTFN/auto_update_scheduled.yaml){: target="_blank"}

## Installation
Rien de plus simple clic sur **l'image import blueprint** ci-dessus ensuite sur **open link**. Ensuite tu retrouveras dans paramètres > automatisations et scènes > Blueprint, un Blueprint nommé **Home Assistant Auto-update on a schedule base** avant de créer une automatisation je te conseil dans un premier temps de créer une planification [voir l'étape schedule ci-dessous](./mise-a-jour-automatique-homeassistant#planification-des-mises-%C3%A0-jour), ensuite lance toi avec l'automatisation et dans planification choisis bien l'entité créé précédemment.

## Caractéristique du Blueprint

1. Mise à jour de Hacs ( suivant paramètre )
2. Créer une sauvegarde complète avant de lancer les mises à jour
3. Forcer l'hôte Home Assistant à redémarrer si une mise à jour l'exige
4. Planification des mises à jour
5. Choisir un jour du mois pour les mises à jour
6. Mode de mise à jour pour les mises à jour du noyau et du système d'exploitation de Home Assistant
7. Mode de mise à jour du firmware de l'appareil
8. Mode de mise à jour pour les mises à jour générales
9. (optionnel) Exclusions
10. (facultatif) Actions préalables à la mise à jour
11. (facultatif) Actions de pré-redémarrage
12. (facultatif) Actions post-mise à jour
13. (Facultatif) Suspendre la mise à jour des entités

Mises à jour HACS NON incluses. Cela peut fonctionner si vtu actives les [fonctionnalités expérimentales](https://hacs.xyz/docs/configuration/options/#options){: target="_blank"} sur ton intégration HACS ou lorsque la fonctionnalité de mise à jour HACS est publiée.

**Créer une sauvegarde complète avant de lancer les mises à jour:** je conseil fortement de l'activer.

{% picture posts/{{ page.guid }}/selection-sauvegarde-automatique.png --alt sauvegarde avant mise à jour ha --img width="940" height="70" %}

**Forcer l'hôte Home Assistant à redémarrer si une mise à jour l'exige:** Cela n'affectera pas les mises à jour où un redémarrage est automatique, mais pour les mises à jour nécessitant un redémarrage manuel (assez courant sur HACS), ce plan peut automatiquement forcer un redémarrage à la fin des mises à jour.

{% picture posts/{{ page.guid }}/option-redemarrage-ha.png --alt redémarrage mise à jour ha --img width="940" height="99" %}

### Planification des mises à jour

{% picture posts/{{ page.guid }}/planification.png --alt planification du lancement de automatisation des mises à jour dans homeassistant --img width="940" height="154" %}

[Plus d'infos sur l'option Planification](https://www.home-assistant.io/blog/2022/09/07/release-20229/#new-helper-weekly-schedule){: target="_blank"}

Aller dans Paramètres > Appareils et services > Entrées > Créer une entrée > Planification

![Planification d'une tâche dans homeassistant](https://www.home-assistant.io/images/blog/2022-09/create_schedule.gif)

**Choisir un jour du mois pour les mises à jours**

Habituellement, une nouvelle version majeure de Home Assistant est disponible au début de chaque mois. Certaines personnes considèrent ces versions comme pas assez stables et préfèrent éviter ces versions, **ne mettant à jour le système qu'au milieu du mois (jour 15)**.
> Si vous sélectionnez un jour supérieur à 28, les mises à jour ne seront pas exécutées tous les mois.

{% picture posts/{{ page.guid }}/premier-jour-du-mois.png --alt premier jour du mois du lancement de automatisation des mises à jour dans homeassistant --img width="940" height="135" %}

**Mode de mise à jour pour les mises à jour du noyau et du système d'exploitation de Home Assistant**

Sélectionne le mode de mise à jour pour les mises à jour du noyau Home Assistant et du système d'exploitation Home Assistant.

{% picture posts/{{ page.guid }}/option-mise-a-jour-noyau-systeme.png --alt option des mises à jour systeme et noyau dans homeassistant --img width="940" height="189" %}

**Mode de mise à jour du firmware de l'appareil**

Sélectionne le mode de mise à jour du micrologiciel dans les appareils connectés à Home Assistant (lorsqu'il est pris en charge en tant que mise à jour HA).

{% picture posts/{{ page.guid }}/maj-firmware.png --alt option des mises à jour firmware dans homeassistant --img width="940" height="201" %}

**Mode de mise à jour pour les mises à jour générales**

> Ne semble pas fonctionner pour l'instant !

Sélectionne le mode de mise à jour pour tout ce qui n'est pas le micrologiciel d'un appareil ou un composant principal de Home Assistant.
Cela inclut les modules complémentaires, les composants HACS, les cartes personnalisées, etc.

{% picture posts/{{ page.guid }}/maj-general.png --alt option des mises à jour général dans homeassistant --img width="940" height="220" %}

**(optionnel) Exclusions**

Sélectionnez les éléments qui ne doivent PAS être inclus dans les mises à jour automatiques.

> Utilise ceci si tu souhaites conserver certains modules complémentaires sur une version spécifique et éviter les mises à jour automatiques.

{% picture posts/{{ page.guid }}/exclusions.png --alt option exclusions des mises à jour dans homeassistant --img width="940" height="111" %}

**(facultatif) Actions préalables à la mise à jour**

**Actions à exécuter** avant le démarrage de la sauvegarde ou de toute mise à jour.
Tu peux l'utiliser pour envoyer des notifications, allumer/éteindre des appareils ou activer des scènes avant de démarrer les mises à jour.

> Note que toutes les actions seront exécutées juste avant le processus de mise à jour, qui peut se produire du jour au lendemain. Tenez-en compte lors de la sélection de vos actions.
Note => La variable "{{ updates_list }}" est disponible pour vos actions et contient la liste des mises à jour en attente.

**(facultatif) Actions de pré-redémarrage**

**Actions à exécuter** avant que l'automatisation ne demande un redémarrage.
Tu peux l'utiliser pour envoyer des notifications, allumer/éteindre des appareils ou arrêter des automatisations avant de redémarrer Home Assistant.

> Note que toutes les actions seront exécutées juste avant le processus de redémarrage, ce qui peut se produire du jour au lendemain. Tenez-en compte lors de la sélection de vos actions.
Remarque => Note que tous les redémarrages seront contrôlés par cette automatisation, comme lorsqu'une mise à jour Core est installée. Ces actions peuvent ne pas être exécutées dans ces cas.
Note => La variable "{{ updates_list }}" est disponible pour vos actions et contient la liste des mises à jour en attente.

**(facultatif) Actions post-mise à jour**

**Actions à exécuter** APRÈS la fin du processus de mise à jour.
Tu peux l'utiliser pour envoyer des notifications, allumer/éteindre des appareils ou activer des scènes après avoir appliqué les mises à jour.

> Note que toutes les actions seront exécutées juste après le processus de mise à jour, ce qui peut se produire du jour au lendemain. Tenez-en compte lors de la sélection de vos actions.
Note => La variable "{{ updates_list }}" est disponible pour vos actions et contient la liste des mises à jour en attente.
IMPORTANT => Certaines mises à jour redémarreront automatiquement Home Assistant, provoquant l'interruption de l'automatisation avant la fin, empêchant l'exécution des actions post-mises à jour. Si vous avez des actions critiques à exécuter après une mise à jour, pensez à les inclure également dans une autre automatisation basée sur le démarrage de Home Assistant.

**(Facultatif) Suspendre la mise à jour des entités**

Tu peux sélectionner une ou plusieurs entités pour suspendre les mises à jour. Si l'une des entités sélectionnées est "On" ou "True", le système ne sera pas mis à jour à l'heure prévue.
Tu peux l'utiliser pour conserver vos mises à jour lorsque vous organisez une fête à la maison ou lorsque vous êtes en vacances et que vous ne voulez pas vous soucier des mises à jour sur Home Assistant.

{% picture posts/{{ page.guid }}/suspendre-entite.png --alt suspendre des entités des mises à jour dans homeassistant --img width="940" height="136" %}

[![Ouvrez votre instance Home Assistant et affichez la boîte de dialogue d'importation de plan avec un plan spécifique pré-rempli.](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://raw.githubusercontent.com/edwardtfn/HomeAssistant-Config/main/blueprints/automation/EdwardTFN/auto_update_scheduled.yaml){: target="_blank"}

## Conclusion

Je voulais remercier **EdwardTFN** Edward Firmo, pour avoir partagé avec la communauté HA ce magnifique Blueprint qui est selon moi un incontournable à installer. 👍
   



