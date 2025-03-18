---
title: 'Markdown'
date: '2022-11-06 20:09'
layout: page
comments: false
locale: fr_FR
locale_reference: markdown
noindex: true
published: true
render_with_liquid: true
sitemap:
  changefreq: never
  exclude: yes
  priority: 0.0
toc: true
---

# lire les articles de drafts

jekyll serve --drafts


[source](https://www.markdownguide.org/tools/jekyll/){: target="_blank"}

# Nombre de # pour la taille du titre
## titre 2 exemple ...
...
titre 3 = 3 dièses.{: style="color:red"}
titre 4 = 4 dièses.
titre 5 = 5 dièses.
titre 6 = 6 dièses.

# Liste

* liste rond * ou -
* liste
  * sous liste
  * sous-liste

1. liste chiffre
2. suite

- liste
- liste

# retour à la ligne
pour faire un retour à la ligne dans le même paragraphe, il faut terminer la ligne par un point.
le retour à la ligne se fait automatiquement.

# Nomenclature
écrire en **gras**.
écrire en *italique*.
écrire en ***gras plus italique***.

# citation

> écrire une citation

>  citation avec autre élément
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

# Les Liens

### Inclure un lien externe
[Descriptif](https://www.lien.fr){: target="_blank"}

### créer un lien vers un article du site:
[intégrer un article interne]({% post_url /en/2021-05-11-esphome-and-homeassistant %})

### créer un lien vers un produit:
[Sonoff SNZB-04]({% link _products/{{ page.locale | slice: 0,2 }}/2021-08-26-controlleur-ouverture-sonoff-snzb-04-zigbee.md %})

# créer un lien traditionnel pour les gifs transformés en webp avec gif2webp

commande: gif2webp -lossy nom.gif -o nom.webp

![Paramétrer un état dans zoneminder]({{ site.baseurl }}/assets/images/posts/21/zoneminder-etat-820.webp{{ cachebuster }}){: width="820" height="394" class="lazyload pictaninpost"}{: target="_blank"}

## Les liens pour les documents

### inclure un lien static_file
**préfixe ( pdf, docx, zip, csv, md, xls, torrent )**
{% include doclink.html docx="Zigbee-3.0-USB-dongle-plus-firmware-flashing-1-1.docx" title="document word" %}

## Articles Connexes

choisis tous les GUIDS à incorporer

{% include article-connexe.html guids="154,156" %}


### inclure un lien Homeassistant
Blueprint:
{% include homeassistantlink.html blueprint_import="https://gist.github.com/haade-administrator/61d839c20a79643c4ceefe52fd85336e" %}
Exemple intégration répertoire Hacs auto backup:
{% include homeassistantlink.html creator="jcwillox" repertory="hass-auto-backup" %}
Exemple Intégration Appareil auto_backup:
{% include homeassistantlink.html integration="auto_backup" %}


#### Générer un lien bouton
[https://my.home-assistant.io/create-link/](https://my.home-assistant.io/create-link/)

# transformer un gif en webp sur le pc

gif2webp -lossy image.gif -o image.webp

{% highlight shell %}
sudo apt-get update
sudo apt-get install webp

Basic command line usage:

gif2webp -lossy input.gif -o output.webp
{% endhighlight %}

## Spoiler

<span class="spoiler"> hospital with little knowledge (amnesia perhaps?) of what had happened, and why he was there, etc. He was told by attending Dr. Jeremy Newman (Stephen Rea) that it was July 29, 2002 (Simon thought it was the year 2000 - he was confused - he heard a doctor say 20:00 hours!) and that he had died for two minutes from cardiac arrest following the near-fatal accident -- but he had been revived ("You're as good as new").</span>

## citation
> "There's almost no single moment in Portrait of a Lady on Fire that couldn't be captured, mounted, and hung on a wall as high art." <cite>— Entertainment Weekly</cite>

# écrire du code sans rendu en front 
**avec un point à la fin**

{% raw %}
def bubble_sort(list).
  return list if list.size <= 1 # already sorted.
  swapped = true.
  while swapped do.
    swapped = false.
    0.upto(list.size-2) do |i|.
      if list[i] > list[i+1].
        list[i], list[i+1] = list[i+1], list[i] # swap values.
        swapped = true.
      end.
    end.
  end.
  list.
end.
{% endraw %}

avec rendu highlight
{% highlight yaml %}
{% raw %}
def bubble_sort(list).
  return list if list.size <= 1 # already sorted.
  swapped = true.
  while swapped do.
    swapped = false.
    0.upto(list.size-2) do |i|.
      if list[i] > list[i+1].
        list[i], list[i+1] = list[i+1], list[i] # swap values.
        swapped = true.
      end.
    end.
  end.
  list.
end.
{% endraw %}
{% endhighlight %}


- [x] #739.
- [ ] https://github.com/octo-org/octo-repo/issues/740.
- [ ] Add delight to the experience when all tasks are complete :tada.


# créer un tableau

| col1 | col2 | col3 |
| --- | --- | --- |
| lig1 | lig1 | lig1 |
| lig2 | lig2 | lig2 |
| lig3 | lig3 | lig3 |

# créer une ligne

---
___
***

# Les produits

### inclure produit externe

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/12/ZBMINIL2-1600px-5.jpg?fit=1600%2C1600&ssl=1" title="ZBMINIL2 Extrême" brand="Sonoff" description="Smallest sonoff zbmini l2 extreme switch module on the market" iteadlink="sonoff-zbminil2-extreme-zigbee-smart-switch-no-neutral-required" domlink="peripheriques/6619-sonoff-commutateur-intelligent-sans-neutre-zigbee-30-zbminil2.html" dombrand="idem pour offres par marques" affiliate="_DkilCPV" amazlink="" %}


### inclure produit interne à un article
{% include product-embed.html guid="2123" %}

### intégration images articles dans un article
**remplacer 29 par {{ page.guid }}**

{% picture posts/29/zone-inclusive-zoneminder.png --alt zone inclusive dans ZM --img width="940" height="529" %}

### inclure images dans article boutique
**remplacer 2134 par {{ page.guid }}**

{% picture shop/2152/boitier-encastrement-micromodule-blm-3.jpg --alt mini interrupteur zigbee tuya compatible prise --img width="800" height="300" %}

ou déjà transformé: 

![install esphome in homeassistant]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/esphome-install.webp{{ cachebuster }}){: width="820" height="421" class="lazyload pictaninpost"}

## Video

### intégrer une video webm non compatible apple
youtube:
{% include videoPlayer.html youtubeId="wAMIKhMkSFA" %}
local:
{% include videoPlayer.html localId="nom.mp4" %}
external:
{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/IHost-ss.mp4" %}
twitch:
{% include videoPlayer.html twitchId="" twitchDomain="" %}
instagram:
{% include videoPlayer.html instagramId="" %}
tiktok:
{% include videoPlayer.html tiktokIdId="" %}

<iframe width="940" height="596" src="{{ site.baseurl}}/assets/images/posts/{{ page.guid }}/flash-multipan-multiprotocol-zbdongle-e-skyconnect-simple-clic-zigbee-940.webm{{ cachebuster }}" frameborder="0" allowfullscreen></iframe>

### Compresser une video efficacement compatible (chrome-safari-firefox) avec ffmpeg en 2 passes

compresser en 2 passes un mp4 en  libx264 pour être visible dans tous les navigateurs

{% highlight shell %}
ffmpeg -y -i Kazam_screencast_00000.mp4 \
       -c:v libx264 -preset slow -b:v 600k -vf scale=940:-1 -movflags +faststart -pass 1 \
       -c:a aac -b:a 128k -f mp4 /dev/null && \
ffmpeg -i Kazam_screencast_00000.mp4 \
       -c:v libx264 -preset slow -b:v 600k -vf scale=940:-1 -movflags +faststart -pass 2 \
       -c:a aac -b:a 128k \
       /home/nicolas/Dépotgit/haade/assets/images/posts/148/controle-fonctions-homeassistant-voice-pe-grace-a-esphome.mp4 -y
{% endhighlight %}

-vf scale=940:-1 -pix_fmt yuv420p -c:a aac -b:a 128k

#### ratio/taille Top 16:9 Resolutions

640 x 360 (nHD)
854 x 480 (FWVGA)
960 x 540 (qHD)
1024 x 576 (WSVGA)
1280 x 720 (HD/WXGA)
1366 x 768 (FWXGA)
1600 x 900 (HD+)
1920 x 1080 (FHD)
2048 x 1152 (QWXGA)
2560 x 1440 (QHD)
3200 x 1800 (WQXGA+)
3840 x 2160 (UHD)
5120 x 2880 (UHD+)
7680 x 4320 (FUHD)
15360 x 8640 (QUHD)
30720 x 17280 (HHD)
61440 x 34560 (FHHD)
122880 x 69120 (QHHD)

### convertir une video en gif

[https://image.online-convert.com/fr/convertir/mp4-en-gif](https://image.online-convert.com/fr/convertir/mp4-en-gif){: target="_blank"}

### Convertir video en webp

[https://tinywow.com/video/to-webp](https://tinywow.com/video/to-webp)

### Plyr video player utilisé sur le site

Modifications des fichiers pour plyr:
- plyr.scss
- theme.js // video plyr embed to default.html
- videoplayer.html
- plyr.js

pour une mise à jour **récupérer le css** sur le cloud https://cdn.plyr.io/3.7.8/plyr.css et le transformer manuellement en scss
le code css est personnalisé dans plugin.scss et sur videoplayer.html style=""

recherche dans plugin.scss: // plyr video player javascript

**récupérer le javascript:** https://cdn.plyr.io/3.7.8/plyr.js

code complémentaire de fonctionnement dans theme.js: 

récupérer le code: // video plyr embed to default.html


### intégrer un podcast spotify

{% include spotify-podcast.html id="5AU3GzHiJhrRgUsJ8iEdxZ" %}

### inclure un message d'alerte

type:
  - warning
  - help
  - info
  - error
  - success

text: descriptif du message
link: lien chemin absolu
textlink: descriptif du lien

{%- include alert.html type="" text="" link="" textlink="" %}

{%- include alert.html type="warning" text="ceci est un texte" link="#" textlink="cliquez ici pour voir le site" %}
{%- include alert.html type="help" text="ceci est un texte" link="#" textlink="cliquez ici pour voir le site" %}
{%- include alert.html type="info" text="ceci est un texte" link="#" textlink="cliquez ici pour voir le site" %}
{%- include alert.html type="error" text="ceci est un texte" link="#" textlink="cliquez ici pour voir le site" %}
{%- include alert.html type="success" text="ceci est un texte" link="#" textlink="cliquez ici pour voir le site" %}

# Choisir entre rouge et prism
prism:

convertir prism.css non minifié avec https://beautifytools.com/css-to-scss-converter.php
ajouter prism.scss à _sass
ajouter prism à import dans theme.scss
ajouter prism.js à assets.js
modifier package.js mais aussi default.js pour le mode development
modifier config.yml

rouge:

virer prism
ajouter _syntax.scss à theme.scss
ajouter codeblock.js à defaut.html et aussi à package.js

# Onglet qrcode

{% include qrlink.html qrlink="https://tonsiteweb.com ou du texte" text="télécharger l'application Ewelink sur le playstore ou l'appstore" realtextlink="" %}

pour la partie texte: commencer le texte par un verbe car un texte avant et après sera intégré automatiquement: Ce QRcode te permet de ....... tu as le choix entre scanner ce QRcode depuis ton smartphone ou de cliquer directement sur le lien ci-dessous.

# Exploiter megamenu

Pour rajouter un sous menu il faut modifier navbar.js, menu.html et plugin.scss

dans navbar.js rajouter la class à la ligne 51 les classes " c'est géré comme un tableau, première class = show1 la seconde show 2 etc...
dans plugin .css faire une recherche par show et rajouter la class ul appel la class i
exemple la class more-sub-menu-protocol se connect à la class more-arrow-protocol ou htmlCss-sub-menu-shop html-css-arrow-shop





