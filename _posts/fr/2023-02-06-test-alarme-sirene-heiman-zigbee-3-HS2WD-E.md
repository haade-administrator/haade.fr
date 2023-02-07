---
guid: 45
title: "Test Sirène Heiman HS2WD-E compatible zigbee 3.0"
description: "Sirène intelligente de la marque Heiman HS2WD-E compatible zigbee 3.0, que vaut-elle ?"   
author: Nico
date: 2023-02-06 08:06
last_modified_at: 
categories: [Domotique, Tests, Zigbee]
tags: []
image: 'heiman-sirene-alarme-zgbee-3-HS2WD-E.png'
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
rating: 4.6 
sourcelink:
  - https://www.heimantech.com/product/?type=detail&id=8
  - https://www.domadoo.fr/fr/peripheriques/5714-heiman-sirene-interieure-intelligente-zigbee-30.html?domid=39
---

Voilà une sirène intelligente qui existe depuis longtemps, au tout début **Heiman** a fabriqué une version zwave sans batteries de secours ce qui était un gros désavantage, mais depuis il existe une version Zigbee avec batteries de secours et le **tout à moins de 30€**, alors on est en droit de se demander si cette sirène vaut le détour.

{% picture posts/{{ page.guid }}/heiman-smart-siren-prise-en-main-HS2WD-E.png --alt prise en main Heiman HSWD-E --img width="940" height="530" %}

{% include product-embed.html guid="2138" %}

Avec ses dimensions généreuses et des couleurs éclatantes cette sirène est de très bonne fabrication, j'ai voulu l'ouvrir pour voir ce qui se cachait dessous et je n'ai pas réussi car l'assemblage est solide. Le système de fixation de l'adaptateur de prises est très bien fait.

{% picture posts/{{ page.guid }}/heiman-sirene-alarme-zgbee-3-HS2WD-E-face-arriere.png --alt Heiman HS2WD-E face arrière --img width="940" height="530" %}

# Intégration dans Zigbee2mqtt

La sirène fonctionne bien en mode **routeur**{: .blue}.

{% picture posts/{{ page.guid }}/heiman-smart-siren-about-z2m-HS2WD-E.png --alt capture ecran intégration zigbee2mqtt heiman sirene --img width="940" height="682" %}

La sirène est **immédiatement reconu dans Z2M**, les paramétrages sont nombreux:

{% picture posts/{{ page.guid }}/heiman-smart-siren-expose-z2m-HS2WD-E.png --alt capture intégration onglet expose Z2M de la sirène heiman HS2WD-E --img width="940" height="387" %}

- reconnu comme routeur
- permet de voir le niveau de charge de la batterie
- choix parmis 8 modes sonores ( stop, cambrioleur, incendie, urgence, panique policière, panique incendie, panique d'urgence)
- 4 niveaux sonores
- 4 niveaux lumineux
- On/Off lumière
- longueur du cycle de flash ( 0 à 10 )
- durée de l'alarme en secondes
- qualité du lien

{% picture posts/{{ page.guid }}/heiman-smart-siren-expose-mode-alarm-z2m-HS2WD-E.png --alt mode de son pris en charge dans Z2M --img width="940" height="278" %}


L'alarme **ne possède pas de bouton ON/OFF virtuel ou physique** il faudra dans homeassistant créér une automatisation comme ci-dessous

{% highlight yaml %}
  - alias: 'Activate siren'
    trigger:
      platform: state
      entity_id: alarm_control_panel.your_alarm
      to: 'triggered'
    action:
    - service: mqtt.publish
      data:
        qos: 0
        retain: false
        topic: zigbee2mqtt/your_siren/set_message
        payload: '{"warning": {"duration": 10, "mode": "emergency", "strobe": false}}'
{% endhighlight %}

*En veillant à remplacer:*

- **your_alarm** par le **nom de ton alarme**
- **your_siren** par le nom de ta **sirène Heiman**

> Ainsi tu pourras choisir la durée de fonctionnement, le mode "stop" ou "emergency" et l'activation ou non de la lumière.

## Animation en mode en intégration utilisateur

![intégration utilisateur de l'alarme Heiman Zigbee HS2WD-E dans une automatisation avec Home-Assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/heiman-sirene-hs2wd-e-integration-action-ha.webp{{ cachebuster }}){: width="940" height="885"}

# Les **+**{: .blue} du produit

- nombreuses fonctions
- Batterie intégrée avec jusqu’à 4 heures d’autonomie en marche
- Puissant son de **95 dB**
- Facilité d’installation

# Les **-**{: .red} de produit

- Sirène uniquement prévu pour l'intérieur du logement
- Intégration uniquement sur prise ( difficile de l'adapter avec un transfo exterme)
- pas d'alarmes en cas d'effractions ( lorsqu'on la débranche )

# Fonctions :

- Sirène Zigbee 3.0 sur prise
- Signalisation sonore et lumineuse
- Protocole Zigbee pour lancer un scénario en conséquence
- Batterie intégrée avec jusqu'à 4 heures d'autonomie en marche
- Puissant son de 95 dB
- Facilité d'installation 
 
# Caractéristiques techniques :

|Tension De fonctionnement| AC110-240V|
|Batterie de secours| 3.8V/700mA|
|Niveau sonore d'alarme| 95db (1m de distance)|
|Portée du réseau sans fil| <80m (portée en champ libre en intérieur)|
|Température de fonctionnement| -10°C à +50°C|
|Humidité de travail| <95% RH (indiquant aucune condensation)|
|Protocole| Zigbee 3.0 (2.4Ghz)|
|Dimension| 80mm*80mm*32mm|

{% include doclink.html pdf="heiman-siren-manual-HS2WD-E.pdf" title="Manuel d'nstallation Heiman smart siren zigbee 3.0 HS2WD-E" %}


{% include product-embed.html guid="2138" %}

# Conclusion

**Voilà une alarme à posséder** surtout si le système de prise ne te dérange pas. Elle fera largement le boulot, la batterie dure 4 h en fonctionnement constant ( sonnerie + led activé). Ça fait 24h que je l'ai débranché et je suis toujours à 92% autant te dire qu'elle continuera à sonner.
