---
guid: 88
title: "Jeedom Sas c'est terminé"
description: "Jeedom Sas a été racheté par Domadoo, la crainte grandissante des utilisateurs du système opensource Jeedom se fait ressentir"
ref: ""
layout: post
authors: Nico
date: 2023-10-29 08:00
last_modified_at: 
categories: [News, Jeedom]
tags: []
image: 'jeedom-sas-termine-bienvenue-domadoo.png'
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
  - https://community.jeedom.com/t/ou-va-jeedom/110870/226
  - https://community.jeedom.com/t/reorganisation-jeedom/113043
  - https://blog.jeedom.com/7259-reorganisation-jeedom/
  - https://github.com/jeedom
---
Ces dernières semaines un certain nombre d’inquiétudes et de questionnements ont été exprimés sur le [forum Jeedom](https://community.jeedom.com/t/ou-va-jeedom/110870/226){: target="_blank"} quant à l’avenir et l’orientation de la **solution Jeedom** tout en pointant un manque de communication de la part de l’équipe.

{% include product-embed.html guid="2143" %}

> Jeedom SAS n'existe plus, en effet l'entreprise à été racheté fin Septembre par Domadoo.

**D'après Jeedom:**
Une chose est sûre, il ressort de manière évidente que la communauté d’utilisateurs et prescripteurs Jeedom est bien présente, active et toujours aussi passionnée même si certaines préoccupations concernent des sujets déjà maintes fois débattus. Nous n’allons donc pas répondre sur chaque point, néanmoins il en est un sur lequel l’équipe est tout à fait d’accord : il est indéniable qu’une communication officielle s’impose d’autant plus que pour diverses raisons nous n’avons pas été en mesure de partager avec la communauté autant que nous l’aurions souhaité cette année.

## Simplification transfert société

Depuis le 27 Septembre 2023 le logiciel et l'entreprise Jeedom appartiennent à l'entreprise de vente de matériel domotique **Domadoo**.

[Transfert société Bodacc.fr](https://www.bodacc.fr/pages/annonces-commerciales-detail/?q.id=id:A202301861226){: target="_blank"}

## Orientation dédiée aux pros

Jeedom annonce clairement sur son blog une ***priorité aux professionnels***, les particuliers n'ont qu'à bien se tenir ...

**D'après Jeedom:**
> Avant toute chose, **bien que ça ne plaira pas à tout le monde**, il semble indispensable de refaire un point sur le fonctionnement économique actuel de Jeedom. En effet, les coûts des infrastructures, des services et de la masse salariale ne sont absorbés qu’en infime partie par les ventes de plugins ou de services aux particuliers. La majeure partie du chiffre d’affaire nécessaire au bon fonctionnement de Jeedom est assurée par la fourniture de services et de solutions de plus ou moins grande envergure aux clients professionnels. Ces projets à destination des professionnels représentent donc une grande charge de travail pour les équipes mais contribuent aussi fortement au développement constant du logiciel Jeedom.

## Code Jeedom vieillissant

Selon deux grandes faiblesses constituent l'environnement Jeedom, D'une le core de Jeedom est construit autour de php, je pense sincèrement que ce type de language n'est pas ou plus adapté aux systèmes de domotiques, la constitution d'une base de donnée souvent lourd en requête et le fait d'y assimiler nécessairement Nginx ou Apache pour la gestion du coeur sont fonctionnels mais beaucoup trop long pour du code d'appel. De deux l'interface graphique est loin d'être esthétique et loin d'être orienté UI Design comme l'on pourrait trouver sur d'autres plateformes. Pour terminer la vente de plugins additionnels souvent payant est un frein pour l'utilisateur lamda, **surtout que selon les propos de l'entreprise, je cite:**
> En effet, les coûts des infrastructures, des services et de la masse salariale ne sont absorbés qu’en infime partie par les ventes de plugins ou de services aux particuliers

Alors **pourquoi ne pas rendre ces plugins gratuits** du moins ceux développés par la Team Jeedom.

*L'absence de réponses sur le forum ainsi qu'un ensemble de bugs matériels et logiciels refroidissent la communauté Jeedom*

## Questions autour de Loïc

Pour ceux qui se souviennent **Loïc et le créateur de Jeedom**, à l'époque Jeedom était une aubène pour les Geeks français à la recherche d'un système domotique. Lors de la création de l'entreprise Jeedom SAS, Loïc n'a vraisemblablement pas souhaité d'intégrer l'entreprise et je trouve ça plus que dommage, même s'il est consulté et qu'il continue à travailler sur le core Jeedom. 

> En effet on peut voir sur sa page github une augmentation flagrante des contributions en cette fin d'année

{% picture posts/{{ page.guid }}/contribution-loic-jeedom-core-github.png --alt contribution au code jeedom core par le créateur Loïc Zoic21 cette dernière année --img width="940" height="233" %}

**D'après Jeedom: Avançons ensemble**
Pour conclure, nous sommes tous réunis autour de Jeedom par passion à quelque niveau que ce soit. Il est évident que nous devons être capables de nous remettre perpétuellement en question, chacun à notre mesure, pour continuer d’avancer tous ensemble autour de cette magnifique solution domotique et ainsi contribuer à sa pérennité.

**Nous, membres de l’équipe Jeedom**, espérons sincèrement avoir pu répondre à vos interrogations et comptons sur vous, utilisateurs passionnés, pour nous accompagner dans les évolutions futures de Jeedom. **Qu’en dites vous ?**

{% include product-embed.html guid="2143" %}

## Conclusion

**D'après Jeedom pas d'inquiétude à avoir**, la croissance de nouveaux utilisateurs est toujours d'actualité. Mais nous savons tous que l'on peut **faire mentir les chiffres**, en effet s'agit-il d'utilisateurs apportés par des professionnels certifiés Jeedom ou s'agit-il d'utilisateurs ayant fait un choix personnel quand à l'utilisation de ce logiciel. Personnellement je pense que Jeedom à connu des heures de gloire mais évolue dans l'ombre de Home Assistant et probablement d'openhab tous deux programmé en python pour l'un et Java pour l'autre des languages plus moderne et d'actus.

Même si selon l'équipe Jeedom, la fusion entre Jeedom SAS et Domadoo était inéluctable, **la seule façon pour Domadoo de s'en sortir est de continuer à développer la solution auprès des professionnels, exit les particuliers. Bien dommage.**