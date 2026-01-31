---
guid: 170
title: "Externalise Facilement ta sauvegarde Home-Assistant"
description: "Grâce à Rsync externalise automatiquement et facilement tes sauvegardes Home Assistant"
ref: ""
layout: post
authors: [Nico]
date: 2026-01-27 16:00
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
video: 
image: 'external-homeassistant-backup-with-rsync-nas-omv.png'
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
  - https://rsync.samba.org/
  - https://github.com/RsyncProject/rsync
---

En 2023 j'avais rédigé un article: [intégrer un article interne]({% post_url fr/2023-05-22-simple-sauvegarde-externe-homeassistant-syncthing-plus-gestion-backup %})

## Prérequis

- Home Assistant OS
- un NAS avec openmediavault de préférence
- module complémentaire File editor
- module complémentaire Rsync

## Installation Rsync dans HAOS
Commençons par ajouter le dépôt de Poeschl au gestionnaire de module. Aller dans: **Paramètres > modules complémentaires > Boutiques des modules complémentaires > Menu > dépôts**

**https://github.com/Poeschl-HomeAssistant-Addons/repository** et clic sur Ajouter.

Ensuite rafraichis la page et tu verras apparaître le répertoire: **Poeschl Home Assistant Add-ons** Ce répertoire contiet pas mal de modules supplémentaires comme: Asterisk, Mpd, Syncthing, etc…
Clic sur Syncthing et sur installer, tu n’es pas obligé de changer les paramètres ça s’est cool.
Une fois installé il te suffit de cliquer sur ouvrir interface utlisateur web et voilà c’est terminé.
