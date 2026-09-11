---
guid: 180
title: "Intégration complète de la piscine Poolex Aqualyser dans Home Assistant"
description: "Tutoriel complet pour intégrer le chlorinateur à sel Poolex Aqualyser Multi dans Home Assistant via Tuya Local (HACS) et automatiser la filtration et la chloration grâce au blueprint dédié."
ref: "Aqualyser Multi"
layout: post
authors: [Nico]
date: 2026-09-10 18:00
last_modified_at:
categories: [Domotique, Home-Assistant, Haade-lab, Tuya]
tags: []
video:
image: 'integration-complete-piscine-poolex-aqualyser-tuya-local-hacs-blueprint-home-assistant.png'
toc: true
beforetoc: ''
published: false
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating: 4.9
sourcelink:
  - https://github.com/haade-administrator/blueprint_poolex_aqualyser
  - https://github.com/make-all/tuya-local
  - https://www.poolex.fr/
---

Avec l'arrivée de la belle saison, la piscine reprend du service — et avec elle, la gestion quotidienne du traitement de l'eau. Si tu possèdes un **chlorinateur à sel Poolex {{ page.ref }}**, tu as entre les mains un appareil performant… mais encore plus puissant lorsqu'il est piloté depuis **Home Assistant**.

Dans cet article, je te guide pas à pas pour **intégrer le Poolex {{ page.ref }} dans Home Assistant** via l'intégration communautaire **Tuya Local (HACS)**, puis pour **automatiser entièrement la gestion de ta piscine** grâce à un **Blueprint dédié** que j'ai développé et mis à disposition librement.

**Au programme:** reconnaissance du device Tuya, installation de l'intégration, création des helpers nécessaires, import du blueprint — le tout respectant **scrupuleusement les préconisations du fabricant**.

{%- include alert.html type="info" text="Le blueprint et le fichier de reconnaissance du device Poolex Aqualyser Multi sont disponibles librement sur GitHub et maintenus activement. N'hésitez pas à contribuer, remonter des issues ou laisser une étoile si le projet vous aide." link="https://github.com/haade-administrator/blueprint_poolex_aqualyser" textlink="Dépôt GitHub haade-administrator/blueprint_poolex_aqualyser" %}

## Présentation du Poolex {{ page.ref }}

Le **Poolex {{ page.ref }}** est un **électrolyseur de nouvelle génération** conçu pour simplifier l'entretien de ta piscine et t'offrir une eau toujours propre et équilibrée, sans effort. Compatible avec des bassins jusqu'à **90 m³**, ce système intelligent ajuste automatiquement la production de chlore et régule le pH grâce à ses capteurs intégrés **Redox, pH, température et débit**.

**Ce n'est pas juste un électrolyseur:** l'Aqualyser fonctionne également comme une **pompe à pH** et un **contrôleur ORP**, pour une gestion complète et entièrement automatisée de l'eau. Confiant dans sa qualité, Poolex offre une **garantie de 5 ans** sur le boîtier et **10 000 heures** sur la cellule en titane.

Côté connectivité, il embarque une **puce Tuya avec le firmware 3.5** et se pilote nativement via l'application Poolex. C'est précisément cette puce qui va nous permettre de l'intégrer dans Home Assistant en **communication locale directe** — sans passer par le cloud Tuya.

### Deux versions disponibles

L'Aqualyser est disponible en **deux versions** pour s'adapter à tous les types d'installations :

- **Version Total** : compacte, optimisée pour une installation facile, idéale pour les piscines hors-sol et les espaces réduits
- **Version Flex** : modulaire, pour les salles techniques traditionnelles nécessitant une installation personnalisée

### Caractéristiques techniques

|Paramètre|Valeur|
|---|---|
|Volume de la piscine|< 90 m³|
|Production de chlore|20 g/h max. Ajustable (4, 8, 12, 16 et 20 g/h)|
|Débit de la pompe pH-|2 l/min|
|Puissance maximale / standby|150 W / 5 W|
|Connexion hydraulique|D50 mm à coller|
|Inversion de polarité|Oui, ajustable : 4 / 6 ou 8h|
|Salinité requise|De 2,7 à 5 g/L (ppm)|
|Sondes et capteurs intégrés|REDOX, pH, température & débit|
|Modes de fonctionnement|ORP / Timer / Manuel / pH moins|
|Connectivité|Wi-Fi — App Poolex (Tuya)|
|Contrôle relais pompe de circulation|Oui (contact sec)|
|Alarmes|En cas d'erreur (son sonore désactivable)|
|Historique|Enregistrement graphique ORP, pH, énergie, sel, température|
|PoolTerre|Oui (connexion barre < 20 ohms)|
|Chambre d'analyse|Oui|
|Garantie boîtier|5 ans|
|Garantie cellule titane|10 000 heures|

### Quelle quantité de sel faut-il ?

La salinité recommandée est de **2,7 à 5 g/L** (soit 2,7 à 5 kg/m³). Voici les quantités indicatives selon le volume :

|Volume de la piscine|Sel nécessaire|
|---|---|
|10 m³|27 à 50 kg|
|20 m³|54 à 100 kg|
|50 m³|135 à 250 kg|

> Vérifie la concentration de sel régulièrement, surtout après les pluies abondantes ou des vidanges partielles.

### Ce que le {{ page.ref }} expose dans Home Assistant

**Ce que le Poolex {{ page.ref }} expose comme données et commandes :**

{%- include alert.html type="info" text="Les deux fichiers nécessaires à cette intégration — le fichier device tuya-local et le blueprint d'automatisation — sont disponibles librement sur le dépôt GitHub haade-administrator/blueprint_poolex_aqualyser." link="https://github.com/haade-administrator/blueprint_poolex_aqualyser" textlink="Voir les fichiers sur GitHub" %}

| Fonction | Type | Description |
|---|---|---|
| Interrupteur principal | Switch | Allumage / Extinction de l'Aqualyser |
| Production (lecture) | Sensor | Niveau de production actuel en % |
| Volume du bassin | Number | Paramétrage du volume en m³ (5 à 200 m³) |
| Durée de chloration | Number | Durée de traitement en heures (1 à 24h) |
| Intervalle d'inversion de polarité | Number | Fréquence de rinçage des électrodes en heures |
| Mode BOOST | Switch | Activation du mode production maximale |
| Niveau de production | Number | Réglage du taux de production en % |

{%- include alert.html type="warning" text="L'électrolyseur au sel Poolex Aqualyser Multi fonctionne en local via Wi-Fi. Il doit impérativement être sur le même réseau Wi-Fi que ton instance Home Assistant." %}

## Prérequis

Avant de commencer, vérifie que tu disposes bien de :

- Un **Poolex Aqualyser Multi** connecté et fonctionnel via l'application Poolex/Smart Life
- Une instance **Home Assistant** à jour (2024.x minimum recommandé)
- **HACS 2.0** installé sur ton Home Assistant
- **un compte smartlife avec le poolex aqualyser intégré**
- fileeditor pour intégrer le fichier poolex_aqualyser.yaml

{% include homeassistantlink.html blueprints=true %}

---

## Étape 1 — Installer Tuya Local via HACS

**Tuya Local** est une intégration communautaire qui permet de piloter les appareils Tuya **en local**, sans dépendre du cloud. Elle supporte des centaines de devices grâce à une base de fichiers de description YAML maintenus par la communauté.

### 1.1 Ajouter le dépôt dans HACS

Dans Home Assistant, rends-toi dans **HACS** puis clique sur le menu ⋮ → **Dépôts personnalisés**. Ajoute l'URL suivante en catégorie **Intégration** :

```
https://github.com/make-all/tuya-local
```

{% include homeassistantlink.html repertory="tuya-local" creator="make-all" %}

Ou clique directement sur le bouton ci-dessus pour ajouter le dépôt et installer Tuya Local depuis HACS.

### 1.2 Installer l'intégration

Une fois le dépôt ajouté, recherche **Tuya Local** dans HACS → Intégrations, installe-la puis **redémarre Home Assistant**.

### 1.3 Ajouter l'intégration dans Home Assistant

Après le redémarrage, va dans **Paramètres → Appareils et services → + Ajouter une intégration**, recherche **Tuya Local** et suis les étapes :

**3. Retrouve le code utilisateur (user code)**

Ouvre l'application **Smart Life** sur ton smartphone **pas la peine d'installer l'application officielle poolex**:
Il faut que le poolex aqualyser soit intégré dans l'application Smartlife

1. Va dans l'onglet **Profil** (en bas à droite)
2. Appuie sur **Paramètres** (roue crantée en haut à droite)
3. Appuie sur **Compte et sécurité**
4. Le **code utilisateur** est affiché dans cette page — copie-le

{%- include alert.html type="info" text="Le code utilisateur (aussi appelé uid) est propre à ton compte Smart Life. Il ressemble à une chaîne de caractères alphanumérique de type 'eu1234567890abcd'. C'est ce code que Tuya Local utilise pour récupérer automatiquement le device_id et la local_key de chaque appareil sans avoir besoin de te rendre sur iot.tuya.com." %}

**4. Renseigne le code utilisateur dans Tuya Local**

Lors de la configuration de l'intégration Tuya Local dans Home Assistant, renseigne ce code utilisateur dans le champ prévu. L'intégration se charge ensuite de récupérer automatiquement le `device_id` et la `local_key` pour chaque appareil détecté sur ton réseau local.

{%- include alert.html type="warning" text="La local_key peut changer si tu associes ou dissocies un appareil depuis l'application Smart Life. Dans ce cas, relance la configuration de Tuya Local pour la mettre à jour." %}

---

## Étape 2 — Ajouter le fichier device Poolex Aqualyser dans Tuya Local

Tuya Local reconnaît les appareils grâce à des **fichiers de configuration YAML** décrivant leurs data points (DPs). J'ai créé et maintenu le fichier de reconnaissance pour le **Poolex {{ page.ref }}**, couvrant l'ensemble des données et commandes de l'appareil.

### Le fichier device `poolex_aqualyser.yaml`

Voici le fichier de description du device que j'ai rédigé et qui couvre l'ensemble des data points de l'appareil :

{% highlight yaml %}
name: Salt chlorinator
products:
  - id: uabbsm8ioqunhgos
    manufacturer: Poolex
    model: Aqualyser Multi
    model_id: B3CR

entities:
  # Interrupteur principal (dp 101)
  - entity: switch
    dps:
      - id: 101
        name: switch
        type: boolean

  # Niveau de production remonté (dp 102, lecture seule)
  - entity: sensor
    name: Output
    dps:
      - id: 102
        type: integer
        name: sensor
        unit: "%"
        class: measurement

  # Volume du bassin (dp 103)
  - entity: number
    name: Pool volume
    category: config
    icon: "mdi:pool"
    dps:
      - id: 103
        type: integer
        name: value
        unit: m³
        range:
          min: 5
          max: 200
        mapping:
          - step: 5

  # Durée de chloration (dp 104)
  - entity: number
    name: Chlorination time
    category: config
    icon: "mdi:timer-outline"
    dps:
      - id: 104
        type: integer
        name: value
        unit: h
        range:
          min: 1
          max: 24

  # Intervalle d'inversion de polarité (dp 105)
  - entity: number
    name: Reverse interval
    category: config
    icon: "mdi:swap-vertical"
    dps:
      - id: 105
        type: integer
        name: value
        unit: h
        range:
          min: 2
          max: 8
        mapping:
          - step: 2

  # Mode BOOST (dp 106)
  - entity: switch
    name: Boost
    icon: "mdi:car-turbocharger"
    category: config
    dps:
      - id: 106
        name: switch
        type: boolean

  # Niveau de production - réglage (dp 107)
  - entity: number
    name: Output level
    category: config
    icon: "mdi:signal"
    dps:
      - id: 107
        type: integer
        name: value
        unit: "%"
        range:
          min: 20
          max: 100
        mapping:
          - step: 20
{% endhighlight %}

### Vérifier la reconnaissance

Une fois l'intégration configurée avec la bonne IP et local_key, Tuya Local va tenter de reconnaître automatiquement le device via son `product_id`. Si le Poolex {{ page.ref }} est correctement détecté, tu verras apparaître toutes les entités listées dans la section **Appareils et services** de Home Assistant.

{%- include alert.html type="success" text="Si la reconnaissance automatique échoue, tu peux sélectionner manuellement le device dans la liste lors de la configuration. Cherche 'Poolex Aqualyser Multi' ou 'Salt chlorinator'." %}

---

## Étape 3 — Créer les Helpers nécessaires

Le blueprint d'automatisation a besoin de **deux helpers** dans Home Assistant. Crée-les avant d'importer le blueprint.

### Helper 1 — Timer de Filtration *(Obligatoire)*

Ce timer est utilisé par le blueprint pour gérer l'arrêt automatisé de la pompe de filtration. Sa durée est calculée et injectée dynamiquement par le blueprint — **pas besoin de définir une durée par défaut**.

{% include homeassistantlink.html configure_integration="timer" %}

1. Aller dans **Paramètres → Appareils et services → Entrées (Helpers)**
2. Cliquer sur **+ Créer une entrée** → **Minuteur (Timer)**
3. Renseigner :
   - **Nom :** `Timer Filtration`
   - **Durée par défaut :** laisser vide ou `0`
   - **Restaurer au redémarrage :** ✅ activé
4. Cliquer sur **Créer**

### Helper 2 — Forte Fréquentation *(Optionnel)*

Ce helper de type **interrupteur (toggle)** permet de basculer entre le mode fréquentation normale et forte fréquentation. Il impacte les durées de chloration et de filtration sur la tranche 28–30°C.

1. Aller dans **Paramètres → Appareils et services → Entrées (Helpers)**
2. Cliquer sur **+ Créer une entrée** → **Bascule (Toggle)**
3. Renseigner :
   - **Nom :** `Piscine Forte Fréquentation`
4. Cliquer sur **Créer**

{%- include alert.html type="info" text="Si tu ne crées pas le helper de forte fréquentation, le blueprint fonctionnera tout de même en mode fréquentation normale par défaut. Tu pourras toujours l'ajouter plus tard." %}

---

## Étape 4 — Importer le Blueprint d'automatisation

Voici la partie qui fait toute la puissance de cette intégration : **le blueprint d'automatisation complet** développé spécifiquement pour le Poolex {{ page.ref }}.

### Ce que fait le blueprint

Ce blueprint automatise **entièrement** la gestion du chlorinateur en respectant les **préconisations officielles du fabricant Poolex** :

**Sécurités intégrées :**
- ❄️ **Sécurité hiver** : l'Aqualyser et la pompe s'éteignent automatiquement si la température de l'eau descend sous 10°C
- 🔄 **Redémarrage automatique** : si l'Aqualyser est éteint manuellement (depuis l'app ou physiquement), il redémarre automatiquement dès que la température repasse au-dessus de 10°C

**Chloration adaptative selon la température :**

|Température|Fréquentation normale|Forte fréquentation|
|---|---|---|
|T° < 10°C|Aqualyser OFF + Pompe OFF|—|
|10°C ≤ T° < 20°C|2h|—|
|20°C ≤ T° < 25°C|4h|—|
|25°C ≤ T° < 28°C|6h|—|
|28°C ≤ T° < 30°C|8h|12h|
|T° ≥ 30°C|24h|BOOST 100% / 24h|

**Filtration adaptative selon la température (granulaire) :**

|Température|Durée filtration|
|---|---|
|≥ 10°C|5h|
|≥ 12°C|6h|
|≥ 14°C|7h|
|≥ 16°C|8h|
|≥ 18°C|9h|
|≥ 20°C|10h|
|≥ 22°C|11h|
|≥ 23°C|12h|
|≥ 25°C|12h|
|≥ 26°C|14h|
|≥ 27°C|15h|
|≥ 28°C|16h|
|≥ 29°C|20h (forte fréq. : 24h)|
|≥ 30°C|24h|

**Taux de production selon le volume du bassin :**

|Volume|Taux de production|
|---|---|
|≤ 15 m³|20%|
|≤ 30 m³|40%|
|≤ 50 m³|60%|
|≤ 60 m³|80%|
|≤ 80 m³|100%|

**Inversion de polarité selon la dureté de l'eau (TH) :**

|Dureté TH|Intervalle d'inversion|
|---|---|
|TH < 30°f|8h|
|TH < 40°f|6h|
|TH < 50°f|4h|
|TH ≥ 50°f|2h|

**Déclencheurs pris en charge :**
- ⏰ Démarrage quotidien à heure programmable
- 🌡️ Franchissement de chaque seuil de température (15 seuils de 10°C à 30°C)
- 🏠 Démarrage de Home Assistant
- 👥 Changement du switch de forte fréquentation
- 🔌 Détection de l'extinction de l'Aqualyser → redémarrage auto si T° ≥ 10°C (avec debounce 5s)
- ⏱️ Fin du timer de filtration → arrêt de la pompe

### Importer le blueprint

Clique sur le bouton ci-dessous pour importer directement le blueprint dans ton Home Assistant :

{% include homeassistantlink.html blueprint_import="https%3A%2F%2Fgithub.com%2Fhaade-administrator%2Fblueprint_poolex_aqualyser%2Fblob%2Fmain%2Fpoolex_aqualyser_blueprint.yaml" %}

Ou depuis l'interface Home Assistant : **Paramètres → Automatisations et scènes → Blueprints → Importer un blueprint** puis colle l'URL :

```
https://github.com/haade-administrator/blueprint_poolex_aqualyser/blob/main/poolex_aqualyser_blueprint.yaml
```

---

## Étape 5 — Créer l'automatisation depuis le Blueprint

Une fois le blueprint importé, il ne reste plus qu'à créer l'automatisation et la configurer avec tes entités.

Va dans **Paramètres → Automatisations et scènes → + Créer une automatisation → Depuis un blueprint** puis sélectionne **"Poolex Aqualyser - Filtration & Chlorination Management"**.

**Paramètres à renseigner :**

1. **Aqualyser switch** → entité `switch` du Poolex (interrupteur principal)
2. **Boost switch** → entité `switch.boost` du Poolex
3. **Chlorination time number** → entité `number.chlorination_time`
4. **Output level number** → entité `number.output_level`
5. **Reverse interval number** → entité `number.reverse_interval`
6. **Pompe de filtration** → entité switch de ta pompe
7. **Capteur de température** → ton capteur de température d'eau de piscine
8. **Timer Filtration** → le helper timer créé à l'étape 3
9. **Heure de démarrage** → l'heure à laquelle le cycle doit démarrer chaque jour
10. **Volume du bassin** → le volume de ta piscine en m³
11. **Dureté de l'eau (TH)** → la dureté de ton eau en degrés français
12. **Forte fréquentation** *(optionnel)* → le helper toggle créé à l'étape 3

{%- include alert.html type="warning" text="Vérifie que le capteur de température que tu utilises remonte bien la température de l'eau de la piscine et non la température ambiante. Un capteur sonde immergée ou en sortie de filtration sera le plus précis." %}

Active l'automatisation et **Home Assistant gère désormais ta piscine de façon entièrement autonome**, en adaptant les durées de traitement et de filtration en temps réel selon la température de l'eau.

---

## Fonctionnement concret en pratique

Voici un exemple de ce que le blueprint déclenche **lors d'une chaude journée d'été** avec une piscine de 30 m³, une eau à 27°C et une dureté à 25°f :

1. À l'heure programmée, le cycle démarre
2. Le blueprint lit la température (27°C) et calcule :
   - Durée de **chloration** : **6h**
   - Durée de **filtration** : **15h**
   - **Taux de production** : **40%** (bassin de 30 m³)
   - **Intervalle d'inversion de polarité** : **8h** (TH < 30°f)
3. L'Aqualyser est allumé avec les bons paramètres injectés via Tuya Local
4. La pompe de filtration est démarrée et le timer de 15h est lancé
5. Après 6h de chloration, l'Aqualyser s'éteint automatiquement
6. Après 15h, le timer expire et la pompe s'arrête

Si entre-temps **la température franchit un seuil** (passage de 27°C à 28°C par exemple), le blueprint **recalcule immédiatement** et met à jour les durées de traitement en conséquence — sans intervention de ta part.

{%- include alert.html type="success" text="Le mode BOOST s'active automatiquement si la température dépasse 30°C et que le helper de forte fréquentation est activé. Dans ce cas, l'Aqualyser tourne à 100% de production pendant 24h sans interruption." %}

---

## Tutoriels vidéo officiels Poolex

Poolex met à disposition sur sa chaîne YouTube des **tutoriels complets d'installation et de configuration** de l'Aqualyser. Je te recommande de les visionner avant de te lancer dans l'installation physique.

### Installation et connexion de l'Aqualyser Total — Tuto complet

Ce premier tutoriel officiel Poolex couvre **l'intégralité de l'installation en 8 étapes** : déballage, installation hydraulique et électrique, configuration initiale, étalonnage des sondes, test de la pompe pH et connexion Wi-Fi à l'application.

{% include videoPlayer.html youtubeId="To0kqeNGyxM" %}

{%- include alert.html type="info" text="Ce tutoriel concerne la version Total (compacte). Si tu possèdes la version Flex (modulaire), Poolex propose également un guide complet d'installation et de configuration dédié à ce modèle sur la même chaîne YouTube." %}

### Guide complet installation Aqualyser Flex

Pour les propriétaires de la version Flex, destinée aux salles techniques traditionnelles, Poolex propose un guide vidéo dédié couvrant les spécificités de son installation modulaire.

{% include videoPlayer.html youtubeId="V8s4m8YMvw8" %}

{%- include alert.html type="warning" text="L'installation électrique et hydraulique de l'Aqualyser doit impérativement être réalisée par un professionnel qualifié. Ces vidéos sont données à titre indicatif. Toute installation non conforme peut entraîner l'annulation de la garantie." %}


**Corriger le PH qui chute - Aqualyser-total**

Dans ce tutoriel, nous vous montrons comment corriger un problème de pH qui chute instantanément sur l’Aqualyser Total.

{% include videoPlayer.html youtubeId="KvDHGp4aVCU" %}

## Avis clients et retours d'expérience

Avant d'intégrer l'Aqualyser Multi dans Home Assistant, je me suis naturellement documenté sur les retours des utilisateurs. Voici un tableau de bord honnête de ce qui ressort des forums et des avis vérifiés.

### Ce que les utilisateurs apprécient

Les retours positifs reviennent de façon récurrente sur plusieurs points forts :

**La polyvalence tout-en-un** est unanimement saluée. L'Aqualyser est à la fois électrolyseur, contrôleur ORP et pompe pH — une combinaison qui simplifie radicalement l'installation technique et réduit le nombre d'appareils en local technique.

**L'automatisation** est le second point fort. La régulation automatique du chlore et du pH en fonction des mesures en temps réel est perçue comme une vraie liberté. Plusieurs utilisateurs témoignent ne plus toucher manuellement à leur traitement d'eau pendant toute la saison.

**L'application Poolex** reçoit de bons retours pour sa lisibilité et ses alertes en cas d'anomalie. La consultation à distance des graphiques de pH, ORP et température rassure les propriétaires qui partent en vacances.

**La cellule en titane garantie 10 000 heures** est également un argument de confiance, surtout comparé à d'autres marques dont les cellules s'usent plus rapidement avec une eau calcaire.

### Les points à connaître avant d'acheter

{%- include alert.html type="warning" text="Le SAV Poolstar (groupe Poolex) est signalé comme parfois lent à répondre dans les périodes de forte activité (printemps/été). Il est recommandé de se rapprocher d'un revendeur agréé local pour un suivi plus réactif." %}

**Qualité des sondes** : quelques utilisateurs rapportent des sondes pH ou REDOX qui nécessitent un réétalonnage plus fréquent en eau très calcaire (TH > 40°f). Le protocole d'inversion de polarité du blueprint est justement conçu pour contrer ce phénomène.

**Compatibilité réseau** : l'Aqualyser ne prend en charge que le **Wi-Fi 2,4 GHz**. Si ton local technique est éloigné de ta box internet, un répéteur Wi-Fi ou une connexion en point d'accès séparé sera nécessaire.

**L'intégration Home Assistant résout plusieurs limites de l'application officielle** : pas d'historique long terme dans Poolex, pas d'adaptation automatique à la température de l'eau, pas de mode forte fréquentation. Avec le blueprint, ces lacunes disparaissent totalement.

### Retour d'expérience personnel

Pour ma part, l'intégration via Tuya Local est **remarquablement stable**. La communication locale directe élimine toute dépendance au cloud Tuya — ce qui signifie que même si les serveurs Poolex sont indisponibles, ton automatisation continue de tourner parfaitement. C'est un avantage considérable par rapport au pilotage via l'application seule.

Les data points remontés (taux de production, température, mode boost) permettent en plus de construire dans Home Assistant des **tableaux de bord de suivi complets**, voire des automatisations croisées (arrêt de l'Aqualyser si tu détectes une coupure de pompe, notification si la température dépasse un seuil, etc.).

---

## Questions fréquentes

**Puis-je utiliser ce blueprint avec la version Aqualyser Total (non Multi) ?**
Le blueprint a été conçu pour le modèle Multi qui expose les data points de production, boost et chloration via Tuya. La version Total peut avoir des DPs différents — consulte le dépôt GitHub pour les éventuelles évolutions.

**Mon Aqualyser est déjà appairé à l'application Poolex. Est-ce que ça pose problème ?**
Non, tu peux garder l'application Poolex installée. Tuya Local et l'application officielle coexistent sans conflit. En revanche, les commandes envoyées depuis l'app peuvent parfois être écrasées par le blueprint quelques secondes après — c'est normal.

**Est-ce que le blueprint fonctionne si Home Assistant redémarre en plein cycle de filtration ?**
Oui. Le Timer helper de filtration est configuré en mode "restauration au redémarrage". Au prochain démarrage de HA, le timer reprend là où il en était.

**Puis-je modifier les durées de filtration ou de chloration calculées par le blueprint ?**
Le blueprint suit strictement les préconisations Poolex. Si tu souhaites personnaliser les valeurs, il faudra éditer le YAML du blueprint directement — ce qui est tout à fait possible pour les utilisateurs avancés.

---

## Conclusion

L'intégration du **Poolex {{ page.ref }} dans Home Assistant** via Tuya Local est une vraie réussite. Là où l'application officielle se limite à un simple pilotage manuel, Home Assistant transforme cet électrolyseur en un **système de traitement entièrement autonome, intelligent et adaptatif**.

Ce que j'apprécie particulièrement dans cette solution :
- ✅ **Communication 100% locale** — pas de cloud, pas de latence, pas de risque de coupure
- ✅ **Respect des préconisations fabricant** — les durées et taux sont calculés selon le guide officiel Poolex
- ✅ **Résistance aux redémarrages** — le timer survit aux relances de Home Assistant
- ✅ **Zéro code à écrire** — tout se configure via l'interface graphique du blueprint
- ✅ **Modularité** — le mode forte fréquentation s'active d'un switch pour les jours de baignade intensive
- ✅ **Suivi avancé** — les données Tuya permettent de construire des dashboards complets dans HA

Le fichier device tuya-local et le blueprint sont **librement disponibles sur GitHub**, maintenus et ouverts aux contributions. **Si tu as un Poolex Aqualyser Multi et Home Assistant, tu n'as plus aucune raison de gérer ta piscine à la main.**

> Bon bain ! 🏊‍♂️

