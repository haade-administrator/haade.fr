---
guid: 92
title: "Test du controlleur de Vanne Zigbee PF-PM02D-TYZ par Moes"
description: "Aujourd'hui nous allons tester le controlleur de vanne intelligente iotperfect et revendu par Moes, nous allons voir que la qualité de fabrication ne fait pas tout"
ref: "PF-PM02D-TYZ"
layout: post
author: Nico
date: 2023-11-07 16:43
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-controlleur-vanne-intelligente-zigbee-moes-PF-PM02D-TYZ.png'
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
rating: 3.2
sourcelink:
  - https://zigbee.blakadder.com/IOTPerfect_PF-PM02D-TYZ.html
  - https://www.zigbee2mqtt.io/devices/PF-PM02D-TYZ.html
  - https://www.domadoo.fr/fr/peripheriques/6671-moes-vanne-motorisee-zigbee-tuya.html
  - http://www.iotperfect.com/?m=home&c=View&a=index&aid=84&lang=en
---

Aujourd'hui je vais tester **un module bien particulié**, souvent associé aux problèmes d'inondations il peut être utile pour contrôler l'arrosage de plantes et du gazon à condition de trouver les vannes 1/4 de tours protégées des intempéries. Je veux parler du **controlleur de vannes intelligent zigbee {{ page.ref }}** fabriqué par [iotperfect](http://www.iotperfect.com/?m=home&c=View&a=index&aid=84&lang=en){: target="_blank"} et entre autre vendu en **marque blanche par Moes**. 

> alors ce produit permet-il de controler de façon sûre des vannes 1/4 de tours ?

{% include product-embed.html guid="2176" %}

## Petit tour d'horizon du {{ page.ref }}

Le module est fourni assemblé avec un adaptateur secteur, un kit de fixation et les notices explicatives. **L'emballage et le contenu fait bonne impression.**

{% picture posts/{{ page.guid }}/capture-controlleur-vanne-intelligente-zigbee-moes-PF-PM02D-TYZ.png --alt presentation du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 --img width="940" height="529" %}

L'ensemble à l'air solide et de bonne facture, le bouton d'allumage/interrupteur/appairage et petit et hermétique, au centre se trouve un **bouton physique nommé "push"** il permet en appuyant dessus la déssolidarisation du moteur et de la vanne et ainsi pivoter le levier de façon manuel, idéal pour la mise en place du produit. Le levier est fait en acier de 1.5mm d'épaisseur et le tout est assemblé avec une visse nilstop.
Les éléments de fixations sont de bonnes factures mais **le principe de montage de la fixation ne sera pas suffisant pour les manoeuvres sur des leviers dures à manipuler. Voir plus bas.**

{% picture posts/{{ page.guid }}/taille-alerte-inclusion-controlleur-vanne-intelligente-zigbee-moes-PF-PM02D-TYZ.png --alt particularité du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 --img width="940" height="529" %}

## Compatibilité

- **Zigbee2mqtt**
- Tasmota
- Tuya
- Rexense
- Broadlink
- Harmonyos

## Appairage

Appuyez brièvement 3 fois sur le bouton « clé ». La LED commence à clignoter rapidement une fois que l'appareil est en mode d'appairage.

## Inclusion dans ZHA

à l'heure ou je rédige cet article, **la vanne intelligente zigbee {{ page.ref}} n'est pas reconnu dans zha**, du moins après inclusion tu n'auras pas accès à la fonction switch. Mais en attendant une future mise à jour tu pourras adapter le code à l'aide d'un quirks et faire fonctionner ce module.

#### étape 1 Inclusion

Commence par inclure le module dans zha

#### étape 2 Récupération

Ensuite récupère l'adresse ieee du module, rien de plus simple va dans ZHA et sur la configuration du module

{% picture posts/{{ page.guid }}/recuperation-ieee-zha-iotperfect-vanne.png --alt récupération ieee du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 --img width="940" height="493" %}

#### étape 3 Création Dossier

Va dans le dossier **config/** et créé un dossier **custom_zha_quirks/**

#### étape 4 Création fichier customisé

Crée un fichier **ts601_switch.py** dans le dossier **custom_zha_quirks/**

#### étape 5 Code python

**colle ce code à l'intérieur:**

{% highlight py %}
"""Tuya DP based switches."""
from zigpy.profiles import zha
from zigpy.zcl.clusters.general import Basic, GreenPowerProxy, Groups, Ota, Scenes, Time

from zhaquirks.const import (
    DEVICE_TYPE,
    ENDPOINTS,
    INPUT_CLUSTERS,
    MODELS_INFO,
    OUTPUT_CLUSTERS,
    PROFILE_ID,
)
from zhaquirks.tuya import TuyaSwitch
from zhaquirks.tuya.mcu import (
    MoesSwitchManufCluster,
    TuyaOnOff,
    TuyaOnOffManufCluster,
    TuyaOnOffNM,
)

class TuyaSingleSwitch_GP(TuyaSwitch):
    """Tuya single channel switch with GreenPowerProxy cluster device."""

    signature = {
        MODELS_INFO: [
            ("_TZE200_d0ypnbvn", "TS0601"),  # reported in #1335
            ("_TZE200_gbagoilo", "TS0601"),  # reported in #1634
        ],
        ENDPOINTS: {
            # <SimpleDescriptor endpoint=1 profile=260 device_type=51 device_version=1
            # input_clusters=[0, 4, 5, 61184]
            # output_clusters=[10, 25]>
            1: {
                PROFILE_ID: zha.PROFILE_ID,
                DEVICE_TYPE: zha.DeviceType.SMART_PLUG,
                INPUT_CLUSTERS: [
                    Basic.cluster_id,
                    Groups.cluster_id,
                    Scenes.cluster_id,
                    TuyaOnOffManufCluster.cluster_id,
                ],
                OUTPUT_CLUSTERS: [Time.cluster_id, Ota.cluster_id],
            },
            # <SimpleDescriptor endpoint=242 profile=41440 device_type=97
            # input_clusters=[]
            # output_clusters=[33]
            242: {
                PROFILE_ID: 41440,
                DEVICE_TYPE: 97,
                INPUT_CLUSTERS: [],
                OUTPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
            },
        },
    }

    replacement = {
        ENDPOINTS: {
            1: {
                DEVICE_TYPE: zha.DeviceType.ON_OFF_LIGHT,
                INPUT_CLUSTERS: [
                    Basic.cluster_id,
                    Groups.cluster_id,
                    Scenes.cluster_id,
                    MoesSwitchManufCluster,
                    TuyaOnOffNM,
                ],
                OUTPUT_CLUSTERS: [Time.cluster_id, Ota.cluster_id],
            },
            242: {
                PROFILE_ID: 41440,
                DEVICE_TYPE: 97,
                INPUT_CLUSTERS: [],
                OUTPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
            },
        }
    }
{% endhighlight %}

#### étape 6 Adaptation configuration.yaml

ensuite rendez-vous dans la **configuration.yaml** de Home Assistant colle le code ci-dessous en remplaçant **ieee-address** par l'adresse ieee récupéré précédemment.

{% highlight yaml %}
zha:
  custom_quirks_path: /config/custom_zha_quirks/
  device_config:
    ieee-adress-1: # example: a4:c1:38:f1:d1:3b:d2:74-1 format: {ieee}-{endpoint_id} 
      type: "switch"
{% endhighlight %}

Ce bout de code te permet de prendre en compte un dossier de custmisation des modules sous zha. **La configuration en mode switch est mise en place mais n'est pas obligatoire**, elle est là pour corriger l'intégration qui mettra une fonction on/off en mode lumière et non interrupteur par défaut.

#### Dernière étape

**redémarre Home assistant**

Et voici le résultat une fois la manip réalisée, le {{ page.ref }} sera reconnu avec la commande Interrupteur. Cependant tu n'auras pas accès à la qualité du lien dans le maillage Zigbee.

> Ce n'est pas parfait mais ça fera le job.

{% picture posts/{{ page.guid }}/vanne-iotperfect-pf-pm02D-tyz-fonctionnel-zha.png --alt résultat de fonctionnement du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 dans zha --img width="940" height="493" %}

## Inclusion dans Zigbee2mqtt

Comme toujours la vanne est reconnu sous **Zigbee2mqtt** et c'est une très bonne chose car Z2M **fonctionne sous Home Assistant, Jeedom, Openhab, Majordomo et même Gladys.**

{% picture posts/{{ page.guid }}/integration-vanne-zigbee-intelligente-PF-PM02D-TYZ-zigbee2mqtt.png --alt integration du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 dans zigbee2mqtt --img width="940" height="39" %}

{% picture posts/{{ page.guid }}/integration-vanne-zigbee-intelligente-PF-PM02D-TYZ-zigbee2mqtt-a-propos.png --alt information du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 dans zigbee2mqtt à propos --img width="940" height="644" %}

Malheureusement ce module ( pour le prix ) ne fait remonter que le controle On/Off et la qualité du lien, le fait d'être branché sur le **secteur il agira comme routeur**.

{% picture posts/{{ page.guid }}/integration-vanne-zigbee-intelligente-PF-PM02D-TYZ-zigbee2mqtt-a-expose.png --alt information du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 dans zigbee2mqtt expose --img width="940" height="193" %}

{% picture posts/{{ page.guid }}/integration-vanne-zigbee-intelligente-PF-PM02D-TYZ-home-assistant-z2m.png --alt rendu du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 dans Home assistant avec zigbee2mqtt --img width="940" height="514" %}

## Mise en situation du {{ page.ref }}

J'ai voulu tester sur une vanne d'arrivée d'eau située au sous-sol. Cette vanne est une 1/4 de tours, parfait, **mais elle s'ouvre difficilement.** La pose s'est effectuée sans problème. J'étais étonné que ce module réussisse à l'ouvrir c'est bel et bien le cas, pour rappel la **force d'ouverture est de 30-60kg/cm.** Par contre le **support de fixation est insuffisant**, tu te rendras compte sur la photo que le module a pivoté et n'est pas resté en place.
**Dans ce cas il ne faudra pas longtemps pour flinguer la vanne {{ page.ref }}**

{% picture posts/{{ page.guid }}/mouvement-tete-vanne-robinet-hard-intelligent-valve-PF-PM02D-TYZ.png --alt rendu du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 sur robinet difficile à ouvrir --img width="940" height="529" %}

## Caractéristiques {{ page.ref }}

{% picture posts/{{ page.guid }}/dimension-controlleur-vanne-zigbee-pf-pm02d-tyz.png --alt dimension du controlleur de vanne gaz ou eau zigbee moes PF-PM02D-TYZ tuya --img width="600" height="600" %}

|Température|-10-65|
|Humidité|<95 %|
|Tension d'alimentation|12 V/1A|
|Pression de la vanne|0,6 MPa|
|Couple|**30-60kg.cm**|
|Temps ouverture/fermeture|5-10s|
|Spécifications de la valve|1", 1,25".|
|Application|vanne 1/4 de tours - vanne papillon|

**Contenu de la boite:**

- Contrôleur de vanne d'eau/gaz 1 pièces
- Support de montage 2 pièces
- Vis Allen M6 * 30 2 pièces
- Anneau en caoutchouc de 1 pouce 1 pièces
- Adaptateur cc 1 pièces

## Documents {{ page.ref }}

{% include doclink.html pdf="ZV-QY-US-EN English Manual.pdf" title="guide d'installation du controlleur de vanne gaz ou eau zigbee moes PF-PM02D-TYZ" %}

## **Les + du produit** {{ page.ref }}
{: .blue}

- la qualité de fabrication
- la force d'ouverture
- Un design réussi
- mode routeur


## **Les - du produit** {{ page.ref }}
{: .red}

- Le prix (37€ environ)
- alimentation secteur obligatoire
- pas de batteries
- Incompatible avec ZHA*
- Compatibilité restreinte
- le nombre de fonctions disponibles

{% include product-embed.html guid="2176" %}

## Conclusion

Le Produit est bien fini, simple et efficace, l'ouverture est puissante mais le **support de fixation insuffisant pour la puissance d'ouverture**, la tête a du mal à rester en place sur des robinets à ouvertures difficiles. Donc si tu as une **alimentation à proximité** et que ton robinet **s'ouvre sans trop forcer** alors ce module est fait pour toi, sinon passe ton tour.