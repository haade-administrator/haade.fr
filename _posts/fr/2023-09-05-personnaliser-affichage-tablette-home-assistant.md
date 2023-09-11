---
guid: 82
title: "Dessine un tableau pour téléphon dans HA avec UI Minimalist"
description: "tutoriel simple et rapide pour mettre en place un tableau de bord sous Home Assistant design pour téléphone grâce à UI Lovelace Minimalist"
ref: "UI Lovelace Minimalist"
layout: post
author: Nico
date: 2023-09-05 16:06
last_modified_at: 
categories: [Domotique, Haade-lab]
tags: []
image: 'tutos-tableaux-themes-telephone-home-assistant-ui-lovelace-minimalist.png'
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
  - https://ui-lovelace-minimalist.github.io/UI/
  - https://github.com/UI-Lovelace-Minimalist/UI
  - https://community.home-assistant.io/t/lovelace-ui-minimalist/322687
  - https://ui-lovelace-minimalist.netlify.app/index
---

Comme tout le monde le sait Home-Assistant est probablement le meilleur logiciel domotique actuel. Enfin c'est ce que je pense. Dans ce tuto je vais te montrer comment personnaliser un tableau de bord avec thème ultra design nommé ... **UI Lovelace Minimalist**.

Alors pourquoi ai-je choisis UI Lovelace Minimalist plutôt que [Mushroom Card et thème](https://github.com/piitaya/lovelace-mushroom){: target="_blank"}. Et bien simplement parce que Ui Minimalist propose plus de cartes et chips que Mushroom.

> Le but de Mushroom n'est pas de fournir une carte personnalisée pour une personnalisation approfondie.

Au départ j'ai voulu me contenter de Mushroom car très pratique ne serais-ce de part l'installation, mais je me suis vite confronter à des problèmes une fois que j'ai voulu personnaliser les cartes.

## Comment fonctionne {{ page.ref }}

Tout d'abord {{ page.ref }} installe 4 thèmes que tu pourras et devras sélectionner facilement
1. minimalist-desktop ( pour utilisation dans un environnement bureau )
2. minimalist-ios-tapbar (pour un environnement Ios avec **uniquement le menu des "vues"** en pied de page  )
3. minimalist-mobile ( pour environnement mobile sans **aucun menu**)
4. minimalist-mobile-tapbar ( pour environnement mobile avec uniquement le menu des "vues" )

Ensuite vient tout le reste

## Prérequis
- Hacs d'installé
- Editeur de texte ( file editor ou VSC editor par exemple )

## Installation UI Lovelace Minimalist

Rien de plus [simple il te suffit de lire le tuto officiel](https://ui-lovelace-minimalist.github.io/UI/setup/installation/#install-integration){: target="_blank"}

Tout d'abord rajoute cette ligne si elle ne l'est pas déjà dans le fichier **configuration.yaml** ainsi les thèmes seront stockées dans le sous-dossier themes/

{% highlight yaml %}
# themes personnalisé
frontend:
  themes: !include_dir_merge_named themes
{% endhighlight %}

### HACS
{{ page.ref }} est disponible dans HACS (Home Assistant Community Store).

1. Installez HACS si vous ne l'avez pas déjà
2. Ouvrir HACS dans Home Assistant
3. Allez dans la rubrique "Intégrations"
4. Cliquez sur le bouton avec l'icône "+"
5. Rechercher "{{ page.ref }}

Une fois installé **Redémarre ton instance Home Assistant**

**Ensuite clic sur le bouton ci-dessous** pour ajouter l'intégration {{ page.ref }}. Si tu ne le sais pas encore {{ page.ref }} n'est pas un simple thème mais plutôt un combo thème/module

{% include homeassistantlink.html integration="ui_lovelace_minimalist" %}

Et configure {{ page.ref }}

J'ai opté pour une installation semi-manuelle **des intégrations supplémentaires** car je rencontrais régulièrement des messages d'erreurs de non reconnaissances

**Intégration requise**
- [browser_mod](https://github.com/thomasloven/hass-**browser_mod**){: target="_blank"} par Thomas Loven **(attention! s'active en deux étapes voir la notice d'installation)**

**Ressources Lovelace requises**
- [carte-bouton](https://github.com/custom-cards/button-card){: target="_blank"} par RomRider
- [carte-mod](https://github.com/thomasloven/lovelace-card-mod){: target="_blank"} par Thomas Loven
- [mini-carte graphique](https://github.com/kalkih/mini-graph-card){: target="_blank"} de Karl Kihlström
- [Mini lecteur multimédia](https://github.com/kalkih/mini-media-player){: target="_blank"} par Karl Kihlström
- [Mon pack de cartes](https://github.com/AnthonMS/my-cards){: target="_blank"} par AnthonMS** ( nécessite d'installer un répertoire supplémentaire de HACS)
- [Carte d'entité légère](https://github.com/ljmerza/light-entity-card){: target="_blank"} par Leonardo Merza
- [auto-entités](https://github.com/thomasloven/lovelace-auto-entities){: target="_blank"} par Thomas Loven

PS: Après avoir rencontré des soucis avec l'installation des modules complémentaires automatisés je te conseil de les installer manuellement dans Hacs. J'avais constemment des erreurs de modules non installés d'un support à l'autre.





