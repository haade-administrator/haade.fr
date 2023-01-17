---
guid: 39
title: "Linkplay et Up2stream le multiroom DIY de qualité"
description: "Découverte du protocole linkplay probablement l'alternative qualité prix la plus intéressante pour faire du multiroom face à airplay et sonos entre autres, le tout intégré dans homeassistant."
layout: post
author: Nico
date: 2023-01-10 18:46
last_modified_at: 
categories: [Domotique, Haade-lab, Home-Assistant]
tags: []
image: 'picture.png'
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
  - https://www.arylic.com/
  - https://www.linkplay.com/
  - https://fr.aliexpress.com/store/5047150?spm=a2g0o.detail.1000007.1.1214233a9V1zdT
  - https://github.com/nagyrobi/home-assistant-custom-components-linkplay#installation
---

Voilà quelque temps que je voulais rédiger cet article, comme je ne l'ai pas fait après l'achat de la carte Up2stream Amp V3, mais deux ans plus tard, je peux dire que ce produit à été éprouvé et te faire un retour sur la fiabilité du système linkplay Multi-room.

**prérequis:** 

- 1 [carte Up2stream amp V3 ou V4](https://amzn.to/3XQ1tdN){: target="_blank"}
- 1 module [d'alimentation multiple Meanwell 12-24v](https://s.click.aliexpress.com/e/_DC0ZHPD){: target="_blank"}
- 1 ou plusieurs [cordons d'alimentations **093**](https://s.click.aliexpress.com/e/_DnCLRVN){: target="_blank"}
- 1 enceinte stéréo ou 2 monos aux choix minimum 50w ( j'ai choisi une [monitor audio c180 T-2 stéréo](https://www.monitoraudio.com/en/product-ranges/core/c180-t2/){: target="_blank"} )
- 1 coffret de [rangement Debflex 315cm](https://amzn.to/3CMTNAR){: target="_blank"}

{% include product-embed.html image="arylic-up2stream-amp-v4-multiroom.png" title="Arylic Amp V4" brand="Arylic" description="Up2Stream – amplificateur Audio sans fil V4, 50W x 2, carte son, Multiroom, Streaming sans fil, stéréo, décodage DAC, réception Audio" affiliate="_DcuIO5Z" amazlink="3ZKq8SK" %}


# Ce qui m'intéressait 

Je me suis orienté naturellement vers la **technologie linkplay** car elle permet aux fabriquants de créer toutes sortes de produits ( diy ou fini ) tout en réduisant les risques liés à la conception des produits.

**Linkplay assure aussi:**

- la réduction du temps de mise sur le marché
- Gagner du temps sur les coûts de certification et de test
- Une sécurité sur tous le SoM
- Une excellente qualité du produit
- Une performance sans fil optimales pour le Wi-Fi et le Bluetooth avec une optimisation RF minutieuse et un étalonnage de la production
- Les modules en raison du grand volume d'expéditions annuelles

Linkplay fabrique des modules:

- wifi
- contrôle à la voix
- bluetooth
- iot

Les modules linkplay sont compatibles avec beaucoup de [protocoles et de services de musique en streaming](https://www.linkplay.com/app){: target="_blank"} en autre:

Spotify, Tidal, Airplay, Airplay 2, Tunein, Deezer, Napster, Dlna, Qobuz, etc...

#  Companion app ( 4stream )

|![image animée de l'application 4stream par linkplay]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/4stream.webp{{ cachebuster }}){: width="242" height="525"}|[lien direct application companion google play **noté 2,9**](https://play.google.com/store/apps/details?id=com.wifiaudio.Stream&hl=fr&gl=US&pli=1){: target="_blank"}
[lien direct application companion App store **noté 3,1**](https://apps.apple.com/fr/app/4stream/id1446722739){: target="_blank"}
Malgré une notation faible c'est un logiciel fiable, mais pour tout de dire je l'utilise peut car d'une part j'utilise l'intégration linkplay dans homeassistant mais aussi directement Spotify.|

# Utilisation des produits [Up2stream](https://fr.aliexpress.com/store/5047150?spm=a2g0o.detail.1000007.1.1214233a9V1zdT){: target="_blank"}

J'ai acheté en Décembre 2020 le module up2stream fabriqué par arylic Amp V3, désormais remplacé par une version V4, c'est à ma connaissance le seul fabriquant qui inclus la technologie Linkplay sur des cartes Diy.

{% include product-embed.html image="arylic-up2stream-amp-v4-multiroom.png" title="Arylic Amp V4" brand="Arylic" description="Up2Stream – amplificateur Audio sans fil V4, 50W x 2, carte son, Multiroom, Streaming sans fil, stéréo, décodage DAC, réception Audio" affiliate="_DcuIO5Z" amazlink="3ZKq8SK" %}

# Installation du matériel

{% picture posts/{{ page.guid }}/installation-up2stream-amp-v3.png --alt installation système multi-room linkplay up2stream au grenier --img width="940" height="529" %}

Voilà j'ai pu faire l'installation au grenier dans une boîte de dérivation [debflex de dimension 310x245](https://amzn.to/3CMTNAR){: target="_blank"}.

**Ce coffret comprend:**

1. Une [alimentation multiple Meanwell 24v](https://s.click.aliexpress.com/e/_DC0ZHPD){: target="_blank"}, elle me permettra d'alimenter plusieurs modules up2stream afin de faire du multi-room.
2. Une [carte Up2stream amp V3](https://amzn.to/3XQ1tdN){: target="_blank"}, actuellement remplacé par une V4
3. [Un switch Tp-link](https://amzn.to/3ZAThj4){: target="_blank"} afin de pouvoir y connecter plusieurs cartes en rj45

L'avantage de la cartte up2stream réside dans le fait qu'on puisse s'y connecter en rj45, wifi ou Bluetooth

# Intégration dans Homeassistant avec [HACS](https://github.com/hacs/integration){: target="_blank"}.

Linkplay est utilisable dans Homeassistant gr^ace à la librairie HACS, pour l'installer suis le tutoriel officiel [HACS](https://github.com/hacs/integration){: target="_blank"}. 
Ensuite il te suffit d'aller dans HACS > intégration > explorer et télécharger des dépôts.
Cherche linkplay et install

Le paramétrage se fait dans le fichier configuration.yaml de homeassistant.
[Suis la notice d'installation](https://github.com/nagyrobi/home-assistant-custom-components-linkplay#installation){: target="_blank"}

Ensuite l'interface linkplay est compatible avec [la carte mini media player](https://github.com/kalkih/mini-media-player){: target="_blank"}, pour l'installer rien de plus simple va dans HACS > interface > explorer et installer des dépôts.
Recherche mini media player et installe le.

{% picture posts/{{ page.guid }}/interface-mini-media-player.png --alt carte lovelace mini media player --img width="940" height="826 %}


# Notice technique Up2stream ( Anglais )

{% include doclink.html pdf="Notice-technique-Up2Stream_Amp2.0_v3_en.pdf" title="Notice technique Up2stream amp v3" %}

{% include doclink.html pdf="Up2Stream_AMP_V4_Mono_Manual-EN.pdf" title="Notice technique Up2stream amp v4" %}


# Utilisation avec Spotify

# Conclusion




