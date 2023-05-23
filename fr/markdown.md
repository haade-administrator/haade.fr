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

![Paramétrer un état dans zoneminder]({{ site.baseurl }}/assets/images/posts/21/zoneminder-etat-820.webp{{ cachebuster }}){: width="820" height="394"}{: target="_blank"}

## Les liens pour les documents

### inclure un lien static_file
**préfixe ( pdf, docx, zip, csv, xls, torrent )**
{% include doclink.html docx="Zigbee-3.0-USB-dongle-plus-firmware-flashing-1-1.docx" title="document word" %}

### inclure un lien Homeassistant
Blueprint:
{% include homeassistantlink.html bluelink="https://gist.github.com/haade-administrator/61d839c20a79643c4ceefe52fd85336e" %}
Exemple intégration répertoire Hacs auto backup:
{% include homeassistantlink.html creator="jcwillox" repertory="hass-auto-backup" %}
Exemple Intégration Appareil auto_backup:
{% include homeassistantlink.html integration="auto_backup" %}

# transformer un gif en webp sur le pc

gif2webp -lossy image.gif -o image.webp

{% highlight shell %}
sudo apt-get update
sudo apt-get install webp

Basic command line usage:

gif2webp input.gif -o output.webp
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
{% include product-embed.html image="https://ae01.alicdn.com/kf/S88b1ba6506f6436bbccbd8ed76fd711ct/Bo-tier-en-ABS-pour-Raspberry-Pi-4-mod-le-B-montage-sur-Rail-DIN-grand.jpg_Q90.jpg_.webp" title="Boitier rail din raspberry pi 3 ou 4" brand="Waveshare" description="Boîtier en ABS pour Raspberry Pi 4 modèle B, montage sur Rail DIN, grand boîtier de Protection pour RPI 4B Pi4 ou Pi 3B + 3B" affiliate="_DkXxvDl" domlink="" iteadlink="" amazlink="" %}

### inclure produit interne à un article
{% include product-embed.html guid="2123" %}

### intégration images articles dans un article
**remplacer 29 par {{ page.guid }}**

{% picture posts/29/zone-inclusive-zoneminder.png --alt zone inclusive dans ZM --img width="940" height="529" %}

### inclure images dans article boutique
**remplacer 2134 par {{ page.guid }}**

{% picture shop/2134/schema-ampoule-branchement.jpg --alt mini interrupteur zigbee tuya compatible prise --img width="790" height="11000" %}

### intégrer une video youtube

{% include youtubePlayer.html id="wAMIKhMkSFA" %}

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

# Exploiter megamenu

Pour rajouter un sous menu il faut modifier navbar.js, menu.html et plugin.scss

dans navbar.js rajouter la class à la ligne 51 les classes " c'est géré comme un tableau, première class = show1 la seconde show 2 etc...
dans plugin .css faire une recherche par show et rajouter la class ul appel la class i
exemple la class more-sub-menu-protocol se connect à la class more-arrow-protocol ou htmlCss-sub-menu-shop html-css-arrow-shop




