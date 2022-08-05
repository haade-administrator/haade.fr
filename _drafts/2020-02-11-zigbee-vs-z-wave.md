---
title: "Zigbee vs Z-wave"
date: "2020-02-11"
categories: 
  - "protocoles"
tags: 
  - "comparatif"
  - "controlleur"
  - "z-wave"
  - "zigbee"
image: "zigbee-vs-z-wave.png"
---

Pour commencer, on trouve sur internet certains comparatif zigbee vs z-wave mais je trouve qu'ils ne vont pas au bout des choses. Donc je vais détailler dans cet article ces deux protocoles qui sont actuellement indispensable dans la domotisation d'un habitat. Alors quel est le meilleur protocole ! sont-ils indissociables nous allons voir ça dès maintenant.

Pour comprendre mieux le maillage zigbee [j'ai créé un article récemment sur ce sujet, on peut le consulter en cliquant ici.](https://www.haade.fr/blog/tutoriel-domotique-electronique/domotique-smarthome-jeedom-homeassistant/zigbee-comprendre-le-protocole-et-le-maillage/)

### Tableau comparatif zigbee vs z-wave

<table class="wp-block-advgb-table alignwide advgb-table-frontend is-style-stripes"><tbody><tr><td></td><td><strong><a href="https://zigbeealliance.org/fr/" target="_blank" rel="noreferrer noopener" aria-label="ZIGBEE (opens in a new tab)">ZIGBEE</a></strong></td><td><strong><a href="https://z-wavealliance.org/" target="_blank" rel="noreferrer noopener" aria-label="Z-WAVE (opens in a new tab)">Z-WAVE</a></strong></td></tr><tr><td style="vertical-align:middle;text-align:left" data-border-color="#f78da7"><strong>EVOLUTION</strong></td><td>1.2 - 3.0</td><td>300 - 500 - 700</td></tr><tr><td>Maillage</td><td>oui</td><td>oui</td></tr><tr><td>reconstruction maillage</td><td>non</td><td><strong>oui</strong></td></tr><tr><td>soin des noeuds</td><td>oui</td><td>oui</td></tr><tr><td>conso des piles</td><td><strong>très faible</strong></td><td>modéré</td></tr><tr><td>cout des piles</td><td><strong>dérisoire</strong></td><td>élevé</td></tr><tr><td>Sécurité</td><td>AES 128</td><td>AES 128</td></tr><tr><td>Nombre de modules</td><td>&gt; 600</td><td><strong>&gt; 1000</strong></td></tr><tr><td>Variété des modules</td><td>bien</td><td><strong>très bien</strong></td></tr><tr><td>cout des modules</td><td><strong>&lt; 20€</strong></td><td>&gt; 45€</td></tr><tr><td>Configurations modules</td><td><strong>facile</strong></td><td>complexe car varié</td></tr><tr><td>inclusion</td><td><strong>facile</strong></td><td>aléatoire</td></tr><tr><td>Touchlink</td><td><strong>oui</strong> ( zigbee 3.0 )</td><td>non</td></tr><tr><td>librairie</td><td>libre ou protégé</td><td>libre ou protégé</td></tr><tr><td>clé controleur</td><td><strong>cc2531</strong> / Deconz / zigate</td><td>aeotec / Sigma / zway</td></tr><tr><td>coût controleur</td><td><strong>6 - 60 €</strong></td><td>50 - 70€</td></tr><tr><td>Piles modules</td><td>CR2032</td><td>Cr123A</td></tr><tr><td>Coût piles Varta</td><td>1,30€</td><td>3,26€</td></tr><tr><td>Durée de vie théorique</td><td>2 ans</td><td>2 ans</td></tr><tr><td>Durée de vie réel</td><td>1,5 - 2 ans</td><td>0,5 - 1,5 ans</td></tr><tr><td>portée</td><td>30 - 100m</td><td>30 - 100m</td></tr><tr><td>réactivité</td><td>instantanée</td><td>instantanée</td></tr><tr><td>librairie libre</td><td>zigbee2mqtt</td><td>openzwave / zwave2mqtt</td></tr><tr><td>Prise en Charge Homeassistant</td><td><strong>oui</strong></td><td><strong>oui</strong></td></tr><tr><td>Prise en Charge Jeedom</td><td>Partiel</td><td><strong>oui</strong></td></tr><tr><td>Note sur 10 Haade</td><td>8</td><td>6</td></tr></tbody></table>

### Alors quel est le bon protocole !

Personnellement j'avais il y a 5 ans commencé à domotiser mon habitat en z-wave avec le gestionnaire domotique **[Jeedom](https://www.jeedom.com/site/fr/)**.

> Tout au long de ces années j'ai pu me faire un avis objectif sur la question. De là est née l'envie d'éditer un comparatif zigbee vs z-wave.

**Le z-wave c'est bien** pour le choix des modules variés comme tous les modules de courant, ou contact sec mis derrière les interrupteurs, les modules d'alarmes etc... . Mais tous les modules sur pile **sont gourmands** et les **piles coûtent cher** de plus la ré-inclusion après changement de pile est parfois **délicate**.

Depuis mai 2019 j'ai décidé de changer tous les modules sur piles z-wave par des modules xiaomi zigbee. Cette prise de conscience pour ce changement est venu en même temps que l'envie de changer de système domotique jeedom par homeassistant.

Certes ce fut délicat mais je ne le regrette pas. Jeedom à commencé à développer **openzigbee** qui prend en charge [zigbee2mtt](https://www.zigbee2mqtt.io/) mais l'a laissé tombé pour s'occuper de deconz. _C'est une des raisons qui m'ont fait quitté ce système, mais ça c'est un autre débat._ Du coup l'intégration par mqtt est possible mais il faut créer des virtuels pour commander les actions et ça c'est pas très waf.

Après il y a le **coût des modules** qui est pour l'instant trop cher à mon gout pour le z-wave, ça devrait changer au second semestre 2020 mais pour l'instant j'ai vendu les anciens modules en occasion sur une market place et 5 modules sur piles m'ont permis de ramasser suffisamment d'argent pour m'en payer 20 en zigbee c'est tout simplement surréaliste. Alors faut-il supprimer le z-wave je dirais non car pour l'instant les modules z-wave sont plus variés que zigbee ( mais c'est en train de changer ).

## CONCLUSION

> Alors faut-il privilégier le Zigbee !

**Pour conclure le protocole Zigbee est selon moi indispensable** et le protocole z-wave reste complémentaire voir secondaire, mais tout celà risque de change dans 1 à deux ans avec [l'arrivée du protocole Home over ip](https://www.connectedhomeip.com/) ;)

À mon humble avis oui c'est beaucoup plus raisonnable en termes de coût et d'entretien, une fois que l'on a toute les astuces pour renforcer le maillage il devient même incontournable.
