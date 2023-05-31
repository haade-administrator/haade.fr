---
guid: 43
title: "test du nouvel interrupteur zigbee Moes Star Ring"
description: "moes star ring ZS-SR-EU lancé récemment sur le marché le nouvel interrupteur smart switch est-il à la hauteur de nos attentes ?"
layout: post
author: Nico
date: 2023-01-31 11:01
last_modified_at: 
categories: [Tests, News, Haade-lab]
tags: []
image: 'interrupteur-zigbee-moes-star-ring-smart-switch.png'
toc: 
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
addViews: 148
comments: true
rating: 4.4
sourcelink:
---

Au cours de mes **années d'expériences en domotique** j'ai acheté toutes sortes d'interrupteurs connectés, des Xiaomi en zigbee 1.0, des interrupteurs Z-wave MCOhome hors de prix et fonctionnel 2 ans, des interrupteurs Moes à bouton tactiles zigbee et à boutons poussoirs. *C'est maintenant la troisième série testée chez Moes, alors que valent ces interrupteurs Moes Star Ring ZS-SR-EU ?*

{% include product-embed.html image="moes-star-ring-ZS-SR-EU-smart-switch-interrupteur-zigbee.png" title="Nouvel interrupteur Moes Star ring series Zigbee" brand="Moes" description="MOES – interrupteur à bouton-poussoir connecté Tuya Star Ring, zigbee 3.0, avec télécommande, fonctionne avec Alexa et Google" affiliate="_DD0tVR9" %}

# Rendu général

La livraison rapide et l'emballage correcte, la première chose qui m'a interpellé **c'est le rendu esthétique* de l'interrupteur smart ring. *Il est très réussi** et l'effet plastique est très bien gommé, le poids est assez conséquent ce qui là aussi plutôt **qualitatif**, et la texture au touché est soyeuse certains diront satiné **c'est très agréable.**

{% picture posts/{{ page.guid }}/moes-star-ring-switch-zigbee-new-top-qualite-finition-coque.png --alt Aspect général de interrupteur Moes star ring ZS-SR-EU zigbee --img width="940" height="529" %}

# Rendu détaillé

Les boutons des interrupteurs sont fins mais costaud, le tout posé sur une platine de la même épaisseur.
La platine de fixation est en acier est suffisemment épaisse pour ne pas se courber lors de l'intégration dans la boîte de dérivation **est ça c'est vraiment top**, comme sait le faire les grandes marques françaises.

> Le module qui s'incère dans la boîte de dérivation est légèrement plus volumineuse mais ne t'en fait pas, ça passe dans les boîtes de dérivations françaises.

**Là encore c'est une réussite.**

{% picture posts/{{ page.guid }}/moes-star-ring-switch-zigbee-new-top-quality-support-acier.png --alt finition détaillée des interrupteurs moes smart ring --img width="940" height="529" %}

# Fonctionnement

Les interrupteurs sont biens **reconnus dans Zigbee2mqtt**, avec comme constructeur Tuya et en mode *EndDevice*, en ce qui concerne les fonctions elles sont identiques aux autres interrupteurs Moes:

- mode mémoire en cas de coupures de courants
- réglage du rétroéclairage (éteint,normal ou inversé)
- la qualité du lien
- l'état on/off

![intégration des interrupteur moes star ring dans zigbee2mqtt]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/interrupteur-moes-smart-ring-zigbee2mqtt-integration.webp{{ cachebuster }}){: width="940" height="603"}

La commande d'allumage fonctionne très bien, le ressentis au touché est extra, petit plus l'interrupteur à deux contacteurs haut et bas pour chaque boutons poussoirs. En ce qui concerne le rétroéclairage c'est une réussite, un disque blanc ni trop fort ni trop faible, et comme le dit Moes ça reflète effet ciel étoilé, que dire de plus à part mettre 10/10.

{% picture posts/{{ page.guid }}/moes-star-ring-ZS-SR-EU-retroeclairage-effet-etoile.png --alt rendu du rétroéclairage de interrupteur moes star ring zigbee ZS-SR-EU effet étoile --img width="940" height="529" %}

# Vidéo officielle

{% include youtubePlayer.html id="MCr4eaLHaZ4" %}

# Caractéristiques des Smart ring:

- Nom du produit : Moes Star ring ZS-SR-EU
- Coloris dispo: Ivoire ou anthracite ( Noir Nickel )
- Protocole : ZigBee 3.0
- fonctionne sans le neutre **(end-device)**{: .red}
- Courant maximum：10A
- Tension de fonctionnement : AC100V-240V 50/60Hz
- Température de fonctionnement : -10~65℃
- Puissance nominale (charge résistive) : <2
- Puissance max de fonctionnement: 2000w

# Dimensions en image

{% picture posts/{{ page.guid }}/moes-new-star-ring-ZS-SR-EU1-WH-MS-smart-zigbee30-push-button-switch-embedded-light-touch-switch.png --alt rétroéclairage de interrupteur smart ring moes effet étoilé --img width="940" height="529" %}

# Contenu du colis

- Interrupteur Moes Star ring ZS-SR-EU
- {% include doclink.html pdf="Moes-star-ring-new-smart-switch-manual.pdf" title="<b>Manuel d'instruction Moes Star ring ZS-SR-EU1</b>" %}
- Sachet de 2 vis

# Pour ou contre

## Les **+**{: .blue} du produit
- **Qualité de fabrication**
- platine solide en acier
- touché **satiné**{: .blue}
- double fonctionnement: haut et bas
- modulable
- conception fine
- le neutre est optionnel
- rendu du rétroéclairage **(ciel étoilé)**
- le **prix**{: .blue}

## Les **-**{: .red} du produit
- pas de commandes [va et vient]({% post_url /fr/2023-01-29-automatiser-un-va-et-vient-virtuel-avec-blueprint-et-homeassistant %}) intégrées
- interrupteur end-device **( ne répète pas le signal )**{: .red}
- disponible à la vente uniquement en Chine ( du moins pour l'instant )

# Conclusion

Ça fait bientôt 10 ans que je m'intéresse à la domotique, j'ai commencé sur Jeedom 1.0 pour te dire que ça date, et bien je crois que **j'ai enfin trouvé les interrupteurs qu'il me faut !**
> La qualité de fabrication est nettement supérieur aux autres interrupteurs chinois.

La platine en acier ne se déforme pas au serrage, les boutons sont extrêmements bien faits et je rendu de la lumière j'en parle même pas, il est extra. **L'esthétique est vraiment au rendez-vous ?**
Dommage qu'ils ne fassent pas office de routeurs et qu'ils n'intègrent pas [un va et vient]({% post_url /fr/2023-01-29-automatiser-un-va-et-vient-virtuel-avec-blueprint-et-homeassistant %}) comme sait le faire Sonoff, heureusement [nous pourrons faire appel aux automatisations]({% post_url /fr/2023-01-29-automatiser-un-va-et-vient-virtuel-avec-blueprint-et-homeassistant %}). Pour ces deux derniers points j'ai enlevé 0.6 à la note finale.

> il fait parti des interrupteurs à avoir, une valeur sûre

{% include product-embed.html image="moes-star-ring-ZS-SR-EU-smart-switch-interrupteur-zigbee-anthracite.png" title="Nouvel interrupteur Moes Star ring series Zigbee" brand="Moes" description="MOES – interrupteur à bouton-poussoir connecté Tuya Star Ring, zigbee 3.0, avec télécommande, fonctionne avec Alexa et Google" affiliate="_DD0tVR9" %}


