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
[source](https://www.markdownguide.org/tools/jekyll/){:target="_blank"}

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

# liens spécifique à haade

### créer un lien vers un article du site:
[intégrer un article interne]({% post_url /en/2021-05-11-esphome-and-homeassistant %})

### créer un lien vers un produit:
[Sonoff SNZB-04]({% link _products/{{ page.locale | slice: 0,2 }}/2021-08-26-controlleur-ouverture-sonoff-snzb-04-zigbee.md %})

# créer un lien traditionnel pour les gifs transformés en webp avec gif2webp

![Paramétrer un état dans zoneminder]({{ site.baseurl }}/assets/images/posts/21/zoneminder-etat-820.webp{{ cachebuster }}){: width="820" height="394"}{:target="_blank"}

# transformer un gif en webp sur le pc

{% highlight shell %}
sudo apt-get update
sudo apt-get install webp

Basic command line usage:

gif2webp input.gif -o output.png
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

# intégrer une image dans un article


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

# inclure produit externe
{% include product-embed.html image="https://ae01.alicdn.com/kf/S88b1ba6506f6436bbccbd8ed76fd711ct/Bo-tier-en-ABS-pour-Raspberry-Pi-4-mod-le-B-montage-sur-Rail-DIN-grand.jpg_Q90.jpg_.webp" title="Boitier rail din raspberry pi 3 ou 4" brand="Waveshare" description="Boîtier en ABS pour Raspberry Pi 4 modèle B, montage sur Rail DIN, grand boîtier de Protection pour RPI 4B Pi4 ou Pi 3B + 3B" affiliate="_DkXxvDl" %}

# inclure produit interne à un article
{% include product-embed.html guid="2123" %}

# intégration images articles dans un article
**remplacer 29 par {{ page.guid }}**

{% picture posts/29/zone-inclusive-zoneminder.png --alt zone inclusive dans ZM --img width="932" height="522" %}

# intégrer une video youtube

{% include youtubePlayer.html id="cq0ZeT6K1uY" %}

# inclure un message d'alerte

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




