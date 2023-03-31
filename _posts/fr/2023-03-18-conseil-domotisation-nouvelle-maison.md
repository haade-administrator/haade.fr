---
guid: 54
title: "Conseil sur la domotisation d'une nouvelle maison"
description: "Afin de m'aider dans mes recherches je vais tenter de rédiger un article complet sur les conseils afin de ne rien oublier de domotiser quand on constrit une nouvelle maison, plus qu'un article un mémoire sur la construction et la domotique"
layout: post
author: Nico
date: 2023-03-14 16:35
last_modified_at: 
categories: [Domotique, Haade-lab]
tags: []
image: 'conseil-domotisation-nouvelle-maison.png'
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
  - 
---
Lors d'une nouvelle construction il est difficile d'arriver à planifier son installation domotique, surtout quand on commence à découvrir cet univers ou de nombreux modules fonctionnant sous divers protocoles, sont présents sur le Marché. À travers cet article je vais essayer de détailler les différents types d'installations en fonction des protocoles et le montant d'une telle installation.

Contrairement à l'achat d'un habitat ancien ou l'on adapte étape par étape son système domotique, la construction d'une maison neuve est plus délicate car en règle général on fait appel à un électricien qui est ou n'est pas formé domotique, et quand il l'est, il a souvent tendance à proposer des intégrations onéreuses de grande marque comme Legrand, Hager, etc... . Mais en fonction du choix de son installation on peut lui demander certaines spécificités de cablage qui peuvent te faire économiser des sous, tu le comprendras plus bas.

# ligne de conduite Générale:

1. Orienter son installation vers le **maximum de filaire** ( réseau rj45 et électrique )
2. Orienter son installation en **consultant le coût** ( très important lors d'une construction )
3. Si tu fais appel à un électricien essaye de te concentrer sur lu matériel connu ( [Gce electronics](https://www.domadoo.fr/fr/interface-domotique/5897-gce-electronics-automate-webserver-ipx800-v5.html?domid=39){: target="_blank"}, [cartelectronic](https://www.domadoo.fr/fr/suivi-energie/5224-cartelectronic-serveur-wes-v2-avec-ecran-antenne-rf-868-mhz.html?domid=39){: target="_blank"} ) par exemple.
4. **Fait un choix sur ton assistant multiprotocoles**, je te conseil Homeassistant ou Jeedom, Homeassistant car il est énormément développé par la communauté et les  modules sont tous gratuits, Jeedom car c'est le plus connu en france il est plus facile à mettre en place cependant l'interface manque de cachet et il faudra mettre dans certains cas la main à la poche pour l'achat de modules complémentaires.
5. Essaye d'intégrer ton [assistant domotique sur raildin]({% post_url /fr/2021-10-05-box-domotique-rail-din %}) dans ton tableau, souvent réalisable à base de raspberrypi.
6. prévoit un **onduleur** en cas de coupures de courant
7. évite de mélanger trop de protocoles max 2, un en filaire l'autre par onde.
8. prévoit des gaines supplémentaires 20mm pour les **(caméras, portails, sonnettes)**

Premièrement essaye d'orienter ton installation vers une intégration propre dit [(waf)](https://blog.jeedom.com/glossary/waf/){: target="_blank"} en français le facteur d'acceptation féminin **en gros si ça plait aux femmes tu auras gagné**.

# Étape 1 le tableau électrique
C'est le **coeur du système électrique** il faudra penser à l'intégration du cerveau domotique dans ce tableau grâce à des modules compatible raildin.
Essaye de prévoir:
1. un compartiment à proximité du tableau qui puisse accueillir un NAS afin de pouvoir enregistrer les vidéos
2. prévoit au moins 1 à deux rangées de libre pour accueillir les divers modules domotisés

# Éclairage
**ligne de conduite**
1. Oriente une intégration de type filaire
2. Évite les télérupteurs ( assez onéreux )
3. prévoit la phase sur chaque interrupteurs ( suivant le cas )

## 1 Domotisation au tableau
## 2 domotisation à l'interrupteur
### Interrupteur connecté
### Module derrière interrupteur

# Mesure d'énergie

# Matériel à domotiser
chauffe-eau

# controlleur 
sur tableau
sur disjoncteur

# chauffage

# solaire

# volet

# garage

# Sécurité
## Caméra
