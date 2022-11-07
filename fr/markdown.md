---
title: 'Markdown'
date: '2022-11-06 20:09'
layout: page
comments: false
locale: fr_FR
locale_reference: markdown
published: true
sitemap:
  changefreq: never
  exclude: yes
  priority: 0.0
toc: false
---

# titre 1
## titre 2
### titre 3
#### titre 4
##### titre 5
###### titre 6


* liste rond
* liste
  * sous liste
  * sous-liste

1. liste chiffre
2. suite


pour faire un retour à la ligne dans le même paragraphe, il faut terminer la ligne par un point.
le retour à la ligne se fait automatiquement.

écrire en **gras**.
écrire en *italique*.
écrire en ***gras plus italique***.

> écrire une citation

> ## citation avec autre élément
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

## liens spécifique à haade

créer un lien vers un article du site:
[lien de l'article]({% post_url /en/2021-05-11-esphome-and-homeassistant %})

créer un lien vers un produit:
[Sonoff SNZB-04]({% link _products/{{ page.locale | slice: 0,2 }}/2021-08-26-controlleur-ouverture-sonoff-snzb-04-zigbee.md %})

## intégrer une image dans un article


## créer un tableau

| col1 | col2 | col3 |
| --- | --- | --- |
| lig1 | lig1 | lig1 |
| lig2 | lig2 | lig2 |
| lig3 | lig3 | lig3 |

## créer une ligne

---
___
***

## écrire du code

```javascript
def bubble_sort(list)
  return list if list.size <= 1 # already sorted
  swapped = true
  while swapped do
    swapped = false
    0.upto(list.size-2) do |i|
      if list[i] > list[i+1]
        list[i], list[i+1] = list[i+1], list[i] # swap values
        swapped = true
      end
    end
  end
  list
end
```


{% highlight javascript %}

def bubble_sort(list)
  return list if list.size <= 1 # already sorted
  swapped = true
  while swapped do
    swapped = false
    0.upto(list.size-2) do |i|
      if list[i] > list[i+1]
        list[i], list[i+1] = list[i+1], list[i] # swap values
        swapped = true
      end
    end
  end
  list
end
{% endhighlight %}

