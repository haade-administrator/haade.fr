---
guid: 19
title: 'Astuce icone home assistant'
description: "Changer l&#39;icone d&#39;un capteur binaire dans home assistant"
categories: Domotique Haade-lab Home-Assistant
tags: Astuces Homeassistant
date: '2021-09-15T07:00:00+00:00'
last_modified_at:
author: Nico
layout: post
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: fr_FR
toc: false
beforetoc:
comments: true
image: changer-icone-element-binaire-home-assistant.png
redirect_from:
  - /fr/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/changer-licone-dun-capteur-binaire-dans-home-assistant/
  - /blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/changer-licone-dun-capteur-binaire-dans-home-assistant/
---

Voilà dans la série **des tout petits tutos**. Je vais décrire rapidement comment changer un icône d’un **capteur binaire** grâce à la device\_class, par la personnalisation dans home assistant.

Alors en temps normal pour changer un icône d’une entité d’un appareil, rien de plus simple:

Configuration &gt;&gt; Entités &gt;&gt; tu changes la class icone par **hass:** ou **mdi:** au choix. Et c’est terminé.

Mais quand tu désires modifier l’icône d’un binaire, *exemple:* un détecteur d’ouverture de porte. **Là ça se complique** car il y a un icône pour une position ouverte et un icône pour une position fermé. T’inquiète Home assistant est dans la place.

Dans ce cas il faut faire appel à la personnalisation dans le fichier **customize.yaml.**

Tout d’abord il faut rajouter la ligne intégration dans la configuration.yaml [clic là et tu trouvera toutes les infos de la configuration du fichier.](https://www.home-assistant.io/docs/configuration/customizing-devices/){:target="_blank"}

Pour faire simple il faut rajouter cette ligne:

{% highlight yaml %}
homeassistant:
  customize: !include customize.yaml
{% endhighlight %}


Une fois cela fait rends toi dans:

Configuration &gt;&gt; Personnalisation &gt;&gt; Choisi une entité

**Modifie ou crée en ajoutant une device\_class** En général elle existe, et là tu as un panel de choix ( porte de garage, fenêtre, mouvement … ), sélectionne en 1 et n’oublie pas d’enregister.

Visualise ce magnifique GIF animé qui reprend bien tout ça.

![modification une icone par défaut d'un device dans home assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/modification-icone-device_class-element-binaire-personnalisation.webp{{ cachebuster }}){: width="820" height="404"} 

Modification d’une icône d’un capteur binaire dans home assistant grâce à la personnalisation des entités device\_class. Pour finir, *on peut dire qu’ home assistant à une fois de plus pensé à tout.*
