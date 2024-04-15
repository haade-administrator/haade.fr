---
guid: 118
title: "Test du nouveau module de chauffage Nodon SIN-4-FP-21"
description: "Je vais tester ce module nodon fil pilote et surtout te montrer comment l'intégrer et le contrôler dans home assistant avec l'interface thermostat"
ref: "SIN-4-FP-21"
layout: post
authors: [Nico]
date: 2024-04-08 17:00
last_modified_at: 
categories: [Tests, Home-Assistant]
tags: []
image: 'test-nodon-module-fil-pilote-sin-4fp-21-controle-dans-home-assistant.png'
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
rating: 4.0
sourcelink:
  - https://nodon.fr/nodon/module-chauffage-fil-pilote-zigbee/
---
Nouvel arrivé sur le marché du contrôle de radiateur par fil pilote le Nodon {{ page.ref }}, fidèle à la qualité de fabrication de la marque, nous promet une gestion simplifiée des radiateurs avec gestion par fil pilote.

Le Nodon {{ page.ref }} démontre une intégration avec Zigbee2mqtt et une gestion simplifiée des radiateurs qui est des plus logiques. Mais voilà l'intégration dans **Home Assistant avec une gestion par thermostat est nativement impossible**. **Pourquoi ?** tout simplement parce qu'il n'intègre pas **d'interrupteurs on/off** qui est indispensable dans l'intégration des [thermostats génériques](https://www.home-assistant.io/integrations/generic_thermostat/){: target="_blank"}. **Ne t'inquiètes pas je vais y remédier de façon presque transparente**

{% include product-embed.html guid="2192" %}

Il existe une [vidéo sur youtube éditée par Zatoufly](https://youtu.be/QXCnKB5NY_c?feature=shared){: target="_blank"} qui t'explique comment intégrer le nodon fil pilote dans home-assistant et **le contrôler avec le thermostat générique en créant un interrupteur virtuel et un appel par automatisation en créant un scenario**. 

> C'est bien mais je vais te présenter une approche différente ou **tu n'auras pas besoin** de créer de **scenario**.

## Présentation du NodOn {{ page.ref }}

Dédié aux radiateurs électriques fil pilote, le Module Chauffage Fil Pilote Zigbee permet de les rendre connectés et d’automatiser la gestion du chauffage pour **réaliser des économies d’énergie**. Il permet de gérer **jusqu’à six modes** et à minima : Confort, Eco, Hors Gel et Arrêt. Appairé à une centrale domotique compatible, la gestion du chauffage devient intelligente et automatique.

{% picture posts/{{ page.guid }}/presentation-nodon-fil-pilote-sin-4-fp-21.png --alt présentation du module zigbee nodon fil pilote sin-4-fp-21 --img width="940" height="529" %}

### fonctions disponibles {{ page.ref }}

Le Module Chauffage Fil Pilote dispose de 6 modes : **Confort, Confort -1°C, Confort -2°C, Eco, Hors Gel et Arrêt** permettant un contrôle local ou automatique.

- Mesure de consommation
- Fonctions de mesure de la puissance instantanée et de l’énergie cumulée, pour faire des économies d’énergie
- Installation sans travaux
- Au niveau de la sortie de câble du radiateur électrique fil pilote
- Mise à jour Over The Air (OTA)

Le module est rapide à mettre à jour grâce à la **fonction OTA**. Les mises à jour peuvent être réalisées via une centrale domotique compatible ou via l'application [NodOn Connect](https://nodon.fr/nodon/application-nodon-connect/){: target="_blank"}

### Notices {{ page.ref }}

{% include doclink.html pdf="SIN-4-FP-21-NodOn-fiche-technique.pdf" title="Fiche technique NodOn fil-pilote SIN-4-FP-21" %}

{% include doclink.html pdf="NodOn-SIN-4-FP-21-UG-FR-EN-notice-utilisation.pdf" title="Notice d'utilisation NodOn fil-pilote SIN-4-FP-21" %}


### Schéma de branchement {{ page.ref }}

> Plus simple tu meurs !

{% picture posts/{{ page.guid }}/Schema-montage-SIN-4-FP-21-NodOn.jpg --alt schéma de branchement derrière un radiateur du module zigbee nodon fil pilote sin-4-fp-21 --img width="473" height="473" %}


### Schéma de branchement au tableau

Ajoutez le Module Chauffage FIl Pilote Zigbee au tableau électrique avec le Boitier Rail DIN* NodOn.

{% picture posts/{{ page.guid }}/Schema-montage-DRB-2-SIN-4-FP-21-NodOn-1.jpg --alt schéma de branchement dans un tableau éléctrique du module zigbee nodon fil pilote sin-4-fp-21 --img width="473" height="473" %}

### Caractéristiques techniques {{ page.ref }}

|Alimentation|230V AC ~ 50Hz|
|Consommation|<1W|
|Puissance Max. du chaffage|3680W|
|Comptage de la puissance instantanée|(W) et de l’énergie cumulée
(Wh)|
|Modes|6 ordres Fil Pilote|
|Protocole radio|Zigbee 3.0|
|Bande de fréquences utilisée|2,4Ghz|
|Puissance radio maximale|+10dBm|
|Portée|jusqu’à 40m en intérieur|
|Température de fonctionnement|• Comprise entre -20 et 40° à l’air libre.<br>• Comprise entre -20 et 35°C dans un boîtier d’encastrement.<br>• Comprise entre -20 et 40°C dans le DRB (Boîtier Rail DIN) de NodOn.<br>• Comprise entre -20 et 40°C dans le BPS (Boîtier de Pose en Saillie) de NodOn.|
|Indice de protection|IP 20|

## Legrand 064882 fil-pilote

**Seul module fil-pilote concurrent actuel du NodOn**, Legrand se démarque **par son intégration 100% fonctionnel** mais rajoute en plus les fonctions interrupteurs ce qui le rend entièrement compatible nativement à home-assistant via l'intégration Zigbee2mqtt.

{% include product-embed.html image="legrand-064882-module-radiateur-fil-pilote.png" title="Legrand 064882 module zigbee radiateur fil pilote" brand="Legrand" description="Sortie de Câble Connectée Céliane - 230V - Compatible Fil Pilote - Pour Radiateurs et Appareils Electriques Jusqu'à 3000W - Fabriqué En France" amazlink="3J4zIZn" %}

### Intégration zigbee2mqtt

{% picture posts/{{ page.guid }}/integration-legrand-zigbee2mqtt-064882-affichage-fonction.png --alt intégration legrand fil-pilote 064882 dans home assistant avec zigbee2mqtt --img width="940" height="844" %}

## Intégration Nodon {{ page.ref }}

### ZHA (Home Assistant)

Actuellement le module NodOn {{ page.ref }} est incompatible avec ZHA, des infos remontent mais ne correspondent pas à ce module, **il est reconnu comme le module multifonction NodOn SIN-4-1-20**, ce qui ne fait pas de lui un module fil-pilote natif.

{% picture posts/{{ page.guid }}/integration-nodon-sin-4-fp-21-fil-pilote-zha-dysfonctionnement.png --alt intégration nodon sin-4-fp-21 dans home assistant avec ZHA est incompatible --img width="940" height="823" %}

### Zigbee2mqtt

L'intégration dans **Z2M est 200% fonctionnelle** tout est pris en charge

{% picture posts/{{ page.guid }}/module-zigbee-nodon-fil-pilote-sin-4-fp-21-integration-zigbee2mqtt.png --alt intégration nodon sin-4-fp-21 dans home assistant avec zigbee2mqtt onglet a propos --img width="940" height="761" %}

Tu peux te rendre compte dans l'onglet expose des fonctions principales:

- Puissance
- Energie ( compatible avec l'onglet energie Home Assistant )
- 6 modes
- qualité du lien

{% picture posts/{{ page.guid }}/nodon-fil-pilote-expose-zigbee2mqtt.png --alt intégration nodon sin-4-fp-21 dans home assistant avec zigbee2mqtt onglet expose --img width="747" height="680" %}

La puissance et l'énergie peuvent être affinée et calibrée grâce aux paramètres supplémentaires.

{% picture posts/{{ page.guid }}/parametres-specifiques-nodon-fil-pilote-z2m.png --alt intégration nodon sin-4-fp-21 dans home assistant avec zigbee2mqtt paramètres spécifiques --img width="940" height="322" %}

Pour finir l'affichage des fonctions remontées dans Home Assistant en mqtt.

{% picture posts/{{ page.guid }}/integration-totale-nodon-sin-4-fp-21-fil-pilote-zigbee2mqtt.png --alt intégration nodon sin-4-fp-21 dans home assistant résultat final --img width="940" height="811" %}

### Appairage

[Infos techniques officielles du NodOn {{ page.ref }}](https://nodon.fr/support/module-chauffage-fil-pilote-zigbee/){: target="_blank"}

Lors de la mise sous tension, la Led du module clignote en orange cherchant à joindre un réseau Zigbee. Rendez-vous dans l’application de votre centrale Zigbee pour activer la détection du module.

{% picture posts/{{ page.guid }}/Appairage_Zigbee_01.png --alt fonction appairage du nodon fil-pilote sin-4-fp-21 --img width="470" height="258" %}

Si le module a correctement rejoint le réseau, la Led devient verte. Le module est prêt à être utilisé.

{% picture posts/{{ page.guid }}/Appairage_Zigbee_02.png --alt fonction appairage du nodon fil-pilote sin-4-fp-21 --img width="470" height="265" %}

Si module n’a pas rejoint un réseau dans les 15 minutes, la Led devient orange. Faites un appui rapide sur le bouton du module et recommencez la procédure.

{% picture posts/{{ page.guid }}/Appairage_Zigbee_03.png --alt fonction appairage du nodon fil-pilote sin-4-fp-21 --img width="470" height="207" %}

### Procédure de réinitialisation du {{ page.ref }}

1. Le module doit être raccordé et sous tension.
2. Appuyez plus de 5 secondes sur le bouton du module. La Led scintille en orange.
3. Appuyez à nouveau sur le bouton (impulsion brève), **pour valider la réinitialisation**. Si la réinitialisation se déroule
correctement, **la Led clignote alternativement en rouge et en vert**, puis clignote en orange. Recommencez si nécessaire.
4. Votre module a **retrouvé sa configuration d’origine** et est prêt a rejoindre un nouveau réseau Zigbee.

## Intégration home assistant

J'ai choisi l'intégration par **zigbee2mqtt** car le Nodon {{ page.ref }} est bien reconnu et comme tu le sais déjà Z2M est compatible sur diverses box comme Jeedom, Openhab et Gladys pour ne citer qu'eux. Retrouve des infos sur l'intégration du module dans [Z2M directement sur le lien officiel](https://www.zigbee2mqtt.io/devices/064882.html){: target="_blank"}

{% picture posts/{{ page.guid }}/liste-fonction-fil-pilote-nodon-sin-4-fp-21.png --alt fonction par défaut du nodon fil-pilote sin-4-fp-21 dans home assistant --img width="524" height="463" %}


### Prérequis

Afin de pouvoir créer les deux fichiers ci dessous et modifier le fichier **configuration.yaml** il te faudra installer une des deux applications supplémentaires présentée ci-dessous, **perso si tu débutes dans home-assistant je te conseille file-editor**, pour l'installer directement dans ton instance clic simplement sur le lien.

1. [File Editor](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_configurator){: target="_blank"}
2. [Visual Studio Code](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_vscode){: target="_blank"}

> Aussi il faudra inclure le module NodOn {{ page.ref }} dans HA avant de créer ces scripts.

### switch.yaml

Nous allons commencer à **créer un fichier switch.yaml** qui va regrouper tous tes switchs virtuels car oui tu pourrais en avoir plusieurs comme un **interrupteur qui démarrerait ton pc par exemple** .... Donc va à la racine ```/config``` et crée un fichier nommé **switch.yaml**.

creation d'un [switch](https://www.home-assistant.io/integrations/switch.template/){: target="_blank"} dans home assistant.

Copie les lignes de codes ci-dessous sans oublier de renseigner les lignes qui vont biens.

{% highlight yaml %}
{% raw %}
- platform: template
  switches:
  # Nom de l'entité de l'interrupteur dans HA
    inter_radiateur_salon:
    # Nom de l'inter dans HA
      friendly_name: "Inter Radiateur salon"
    # Nom unique
      unique_id: inter_radiateur_salon
    # remplacer select.radiateur_salon_pilot_wire_mode par votre module intégré
      value_template: "{{ is_state('select.radiateur_salon_pilot_wire_mode', 'comfort') }}"
      turn_on:
          service: select.select_option
          data:
              option: comfort
          target:
              entity_id: 
    # remplacer select.radiateur_salon_pilot_wire_mode par votre module intégré
                  - select.radiateur_salon_pilot_wire_mode
      turn_off:
          service: select.select_option
          data:
              option: "off"
          target:
              entity_id: 
    # remplacer select.radiateur_salon_pilot_wire_mode par votre module intégré
                  - select.radiateur_salon_pilot_wire_mode
{% endraw %}
{% endhighlight %}

dans ce switch on automatise directement les fonctions du module nodon {{ page.ref }} par l'entrée **select.radiateur_salon_pilot_wire_mode** et on indique, quand l'interrupteur est **activé, il sélectionne le mode confort et désactivé le mode off** du module ainsi pas besoin de scenario.

> Pour l'instant il n'est pas possible de rentrer ces options en créant un switch virtuel via l'interface directement dans ha.

### thermostat.yaml

Maintenant que le switch est créé répète la même procédure pour créer un thermostat générique nommé thermostat.yaml.

Création d'un [thermostat générique](https://www.home-assistant.io/integrations/generic_thermostat/){: target="_blank"} thermostat.yaml

Pour **paramétrer** un thermostat générique dans Home Assistant il te faudra en plus un **capteur de température externe**, je te conseil par exemple le module **Sonoff SNZB-02P**, tu pourras par la même occasion [lire l'article de test]({% post_url /fr/2023-08-20-test-capteur-zigbee-temperature-humidite-sonoff-SNZB-02P %}) de celui-ci

{% include product-embed.html guid="2172" %}

{% highlight yaml %}
{% raw %}
# salon module nodon
- platform: generic_thermostat
  # Nom de notre thermostat
  name: Chauffage Salon
  # identité unique
  unique_id: thermostat_chauffage_salon
  # entité du chauffage inter créé précédemment
  heater: switch.inter_radiateur_salon
  # entité du capteur de température de la pièce (obligatoire)
  target_sensor: sensor.thermostat_salon_temperature
  # la température réglable minimum du thermostat
  min_temp: 16
  # la température réglable maximum du thermostat correspond en général à la température de consigne réglé sur le radiateur en mode fil pilote
  max_temp: 23
  # mode de fonctionnement du système "heater"
  ac_mode: false
  # la température cible par défaut
  target_temp: 21
  # il s'agit de la tolérance de température basse pour l'activation de la chauffe
  cold_tolerance: 0.5
  # tolérance de la température avant que la chauffe ne soit activé
  hot_tolerance: 0.5
  # il s'agit du mode dans lequel le thermostat démarre la première fois
  initial_hvac_mode: "off"
  # température en cas de mode absent
  away_temp: 12
  # Il s'agit de la précision pour le réglage de la température
  precision: 0.5
  # le temps minimum d'un cycle de fonctionnement
  min_cycle_duration:
    seconds: 5
  # maintient en chauffe au moins 3 minutes si le thermostat ne reçoit pas de commande
  keep_alive:
    minutes: 3
{% endraw %}
{% endhighlight %}

### configuration.yaml

Dernière étape **crée un lien de direction** vers les deux fichiers créés précédemments dans le fichier de configuration.yaml de Home-Assistant. après les lignes suivantes:

{% highlight yaml %}
{% raw %}
group: !include groups.yaml
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml
{% endraw %}
{% endhighlight %}

**Ce qui donne le résultat:**

{% highlight yaml %}
{% raw %}
group: !include groups.yaml
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml
switch: !include switch.yaml
climate: !include thermostat.yaml
{% endraw %}
{% endhighlight %}

Voilà il ne te reste plus qu'à **redémarrer home assistant** pour découvrir les nouvelles entités créé précédemment soit:
l'interrupteur *switch.inter_radiateur_salon* et le thermostat *climate.thermostat_chauffage_salon*. 

> Tu pourras désormais contrôler tes radiateurs avec la fonction thermostat.

{% include product-embed.html guid="2192" %}

## Conclusion

**De qualité exemplaire** ce module fil-pilote signé NodOn {{ page.ref }} fait le Job, il lui manque la fonction interrupteur qui permettrait de l'éteindre tout simplement, et obligatoire pour pouvoir le contrôler dans Home Assistant par la carte Thermostat. Mais **avec quelques lignes de codes** tu peux rendre **l'ensemble fonctionnel et transparent à l'utilisation**. Pour terminer le **Legrand 064882 fil-pilote** permet de faire tout celà nativement mais il faudra mettre **la main au portefeuille car il est 10€ plus cher**, si tu n'es plus à ça prêt **je te conseil le Legrand**, sinon le NodOn fera l'affaire et en plus tu pourrais l'intégrer directement dans ton tableau électrique.