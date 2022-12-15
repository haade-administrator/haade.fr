---
guid: 4
title: 'Zigbee vs Z-wave'
description: "Comparons les deux protocoles domotique les plus utilisés z-wave face à zigbee"
date: '2020-02-11T14:05:00+00:00'
last_modified_at: '2022-12-15'
author: Nico
categories: Domotique Protocoles
tags: z-wave zigbee comparaison
layout: post
locale: fr_FR
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
beforetoc:
toc: false
image: zigbee-vs-z-wave.png
comments: true
redirect_from:
  - /fr/blog/home-automation-smarthome-jeedom-homeassistant/protocoles/zigbee-vs-z-wave/
  - /blog/home-automation-smarthome-jeedom-homeassistant/protocoles/zigbee-vs-z-wave/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/protocoles/zigbee-vs-z-wave/
---

**Pour commencer**, on trouve sur internet certains comparatif zigbee vs z-wave mais je trouve qu’ils ne vont pas au bout des choses. Donc je vais détailler dans cet article ces deux protocoles qui sont actuellement indispensable dans la domotisation d’un habitat. Alors quel est le meilleur protocole ! sont-ils indissociables nous allons voir ça dès maintenant.

Pour comprendre mieux le maillage zigbee [j’ai créé un article récemment sur ce sujet, on peut le consulter en cliquant ici.]({% post_url /fr/2020-02-10-zigbee-comprendre-le-protocole-et-le-maillage %})

### Tableau comparatif zigbee vs z-wave

|  | **[ZIGBEE](https://zigbeealliance.org/fr/){:target="_blank"}** | **[Z-WAVE](https://z-wavealliance.org/){:target="_blank"}** |
|---|---|---|
| **EVOLUTION** | 1.2 – 3.0 | 300 – 500 – 700 |
| Maillage | oui | oui |
| reconstruction maillage | non | **oui** |
| soin des noeuds | oui | oui |
| conso des piles | **très faible** | modéré |
| cout des piles | **dérisoire** | élevé |
| Sécurité | AES 128 | AES 128 |
| Nombre de modules | &gt; 600 | **&gt; 1000** |
| Variété des modules | bien | **très bien** |
| cout des modules | **&lt; 20€** | &gt; 45€ |
| Configurations modules | **facile** | complexe car varié |
| inclusion | **facile** | aléatoire |
| Touchlink | **oui** ( zigbee 3.0 ) | non |
| librairie | libre ou protégé | libre ou protégé |
| clé controleur | **cc2531** / Deconz / zigate | aeotec / Sigma / zway |
| coût controleur | **6 – 60 €** | 50 – 70€ |
| Piles modules | CR2032 | Cr123A |
| Coût piles Varta | 1,30€ | 3,26€ |
| Durée de vie théorique | 2 ans | 2 ans |
| Durée de vie réel | 1,5 – 2 ans | 0,5 – 1,5 ans |
| portée | 30 – 100m | 30 – 100m |
| réactivité | instantanée | instantanée |
| librairie libre | zigbee2mqtt | openzwave / zwave2mqtt |
| Prise en Charge Homeassistant | **oui** | **oui** |
| Prise en Charge Jeedom | Partiel | **oui** |
| **Note sur 10 Haade** | **8** | 6 |

### Alors quel est le bon protocole !

Personnellement j’avais il y a 5 ans commencé à domotiser mon habitat en z-wave avec le gestionnaire domotique **[Jeedom](https://www.jeedom.com/fr/)**{:target="_blank"}.

> Tout au long de ces années j’ai pu me faire un avis objectif sur la question. De là est née l’envie d’éditer un comparatif zigbee vs z-wave.

 **Le z-wave c’est bien** pour le choix des modules variés comme tous les modules de courant, ou contact sec mis derrière les interrupteurs, les modules d’alarmes etc… . Mais tous les modules sur pile **sont gourmands** et les **piles coûtent cher** de plus la ré-inclusion après changement de pile est parfois **délicate**.

Depuis mai 2019 j’ai décidé de changer tous les modules sur piles z-wave par des modules xiaomi zigbee. Cette prise de conscience pour ce changement est venu en même temps que l’envie de changer de système domotique jeedom par homeassistant.

Certes ce fut délicat mais je ne le regrette pas. Jeedom à commencé à développer **openzigbee** qui prend en charge [zigbee2mtt](https://www.zigbee2mqtt.io/){:target="_blank"} mais l’a laissé tombé pour s’occuper de deconz. *C’est une des raisons qui m’ont fait quitté ce système, mais ça c’est un autre débat.* Du coup l’intégration par mqtt est possible mais il faut créer des virtuels pour commander les actions et ça c’est pas très waf.

 Après il y a le **coût des modules** qui est pour l’instant trop cher à mon gout pour le z-wave, ça devrait changer au second semestre 2020 mais pour l’instant j’ai vendu les anciens modules en occasion sur une market place et 5 modules sur piles m’ont permis de ramasser suffisamment d’argent pour m’en payer 20 en zigbee c’est tout simplement surréaliste. Alors faut-il supprimer le z-wave je dirais non car pour l’instant les modules z-wave sont plus variés que zigbee ( mais c’est en train de changer ).

## CONCLUSION

### Alors faut-il privilégier le Zigbee !

**Pour conclure le protocole Zigbee est selon moi indispensable** et le protocole z-wave reste complémentaire voir secondaire, mais tout celà risque de change dans 1 à deux ans avec [l’arrivée du protocole Home over ip avec matter](https://buildwithmatter.com/){:target="_blank"} 😉

À mon humble avis oui c’est beaucoup plus raisonnable en termes de coût et d’entretien, une fois que l’on a toute les astuces pour renforcer le maillage il devient même incontournable.
