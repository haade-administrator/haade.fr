---
guid: 179
title: "Test Nuki Smart Lock Ultra, Fob et Door Sensor la serrure connectée ultime"
description: "Test complet de la serrure connectée Nuki Smart Lock Ultra avec le Fob et le Door Sensor, intégration Home Assistant via Matter et MQTT, services Airbnb et location saisonnière, comparatif avec la Tedee Go"
ref: "Nuki Smart Lock Ultra"
layout: post
authors: [Nico]
date: 2026-07-13 17:00
last_modified_at: 
categories: [Tests, Securite, Home-Assistant]
tags: []
video: 
image: 'test-nuki-smart-lock-ultra-fob-opener-serrure-connectee-home-assistant.png'
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
rating:  
sourcelink:
  - https://nuki.io/fr/smart-lock-ultra/
  - https://nuki.io/fr/fob/
  - https://nuki.io/fr/opener/
  - https://developer.nuki.io/
  - https://www.home-assistant.io/integrations/nuki/
---

Il y a quelque temps j'ai testé la [serrure connectée Tedee Go et ses accessoires]({% post_url /fr/2024-04-22-test-de-la-serrure-connectee-tedee-go-et-des-accessoires %}). Le produit m'avait laissé un **goût d'inachevé** : bruyante (70dB !), énergivore et limitée en connectivité. Aujourd'hui je m'attaque à ce qui se fait de mieux sur le marché européen : la **{{ page.ref }}**. Et je ne viens pas seul, j'ai aussi le **Nuki Fob** (télécommande Bluetooth) et le **Nuki Door Sensor** (capteur d'ouverture de porte).

Après plusieurs semaines d'utilisation quotidienne, je peux te dire que **Nuki a placé la barre très haut**. Moteur brushless ultra-rapide, design compact en acier inoxydable, WiFi + Thread/Matter + MQTT intégrés, pas besoin de bridge... **c'est probablement la serrure connectée la plus complète du marché.** Mais est-ce que ça justifie les 349€ ? C'est ce qu'on va voir ensemble.

{% include product-embed.html image="nuki-smart-lock-ultra-serrure-connectee.png" title="Nuki Smart Lock Ultra" brand="Nuki" description="Serrure connectée Nuki Smart Lock Ultra, moteur brushless, WiFi, Thread/Matter, MQTT, cylindre universel SKG***, acier inoxydable" amazlink="" %}

## La marque Nuki

**Nuki** a été fondée en **2014 à Graz, en Autriche** par les frères **Martin et Jürgen Pansy**. L'aventure a démarré en 2015 avec une campagne **Kickstarter** réussie, et le premier produit a vu le jour en 2016. Depuis, Nuki s'est imposée comme **la marque de référence européenne** des serrures connectées.

Ce qui fait la force de Nuki, c'est sa philosophie **"Made in Europe"** : développement et fabrication sont volontairement maintenus en Europe pour garantir la qualité, raccourcir les cycles de développement et assurer une chaîne d'approvisionnement durable. Dans un marché dominé par les fabricants asiatiques et américains, **c'est un vrai gage de confiance**.

{%- include alert.html type="info" text="Nuki est compatible avec <b>Apple Home (HomeKit), Google Home, Amazon Alexa, Samsung SmartThings</b> et bien sûr <b>Home Assistant</b>. L'écosystème est l'un des plus complets du marché." %}

L'évolution de la gamme Smart Lock est impressionnante. En 10 ans, Nuki est passé d'un gros boîtier en plastique à un cylindre compact en acier inoxydable avec moteur brushless. La {{ page.ref }} représente clairement **un saut technologique par rapport à toutes les générations précédentes**.

## Déballage {{ page.ref }}

Le packaging Nuki est soigné et premium. À l'ouverture, tu retrouves :

- la serrure {{ page.ref }}
- le **cylindre universel Nuki** (modulable selon les dimensions de ta porte)
- 2 bagues de base interchangeables (blanche et noire)
- le câble de charge magnétique USB-C propriétaire
- 5 clés de secours
- les outils de montage (tournevis, vis de fixation)
- le guide d'installation rapide

{% picture posts/{{ page.guid }}/deballage-nuki-smart-lock-ultra-contenu-boite.png --alt déballage et contenu de la boîte de la Nuki Smart Lock Ultra --img width="940" height="529" %}

La première impression est celle d'un **produit haut de gamme**. Le corps en acier inoxydable brossé inspire immédiatement confiance. On est très loin du plastique ABS de la Tedee Go. Le cylindre est compact, les finitions sont irréprochables et le poids de 250g donne une sensation de solidité.

{% picture posts/{{ page.guid }}/nuki-smart-lock-ultra-design-acier-inoxydable.png --alt design en acier inoxydable de la Nuki Smart Lock Ultra avec bagues interchangeables --img width="940" height="529" %}

> Les deux bagues de base (blanche et noire) incluses permettent d'adapter le style de la serrure à ta porte. Un détail esthétique appréciable.

## La serrure {{ page.ref }}

### Design et dimensions

La {{ page.ref }} se présente sous la forme d'un **cylindre compact de 57 mm de diamètre** pour seulement **58 mm de profondeur**. Avec ses **250 grammes**, c'est un concentré de technologie qui se fait discret sur ta porte. L'acier inoxydable brossé lui confère un look premium et une robustesse certaine.

{% picture posts/{{ page.guid }}/dimensions-nuki-smart-lock-ultra-compact.png --alt dimensions compactes de la Nuki Smart Lock Ultra diamètre 57mm --img width="940" height="529" %}

Un anneau LED circulaire en périphérie indique l'état de la serrure :
- **Vert** : déverrouillée
- **Rouge** : verrouillée / en charge
- **Bleu** : en cours de connexion
- **Orange** : batterie faible

### Le moteur brushless : la vraie révolution

C'est **LA** grande innovation de cette génération. Nuki a intégré un **moteur brushless** (sans balais), une technologie que l'on retrouve dans les véhicules électriques et les drones. C'est une **première mondiale dans une serrure connectée**.

Les avantages sont immédiats :

1. **Ultra-rapide** : 3 modes de vitesse
2. **Plus silencieux** que les moteurs à balais classiques
3. **Plus durable** : pas d'usure mécanique des balais
4. **Plus efficient** : meilleure autonomie batterie

{% picture posts/{{ page.guid }}/moteur-brushless-nuki-smart-lock-ultra-3-modes.png --alt moteur brushless de la Nuki Smart Lock Ultra avec les 3 modes de vitesse --img width="940" height="529" %}

Les **3 modes de vitesse** sont un vrai plus :

|Mode|Temps (double tour)|Usage|
|**Insane**|< 1.5 seconde|Au quotidien, quand tu es pressé|
|**Standard**|2 secondes|Usage normal, bon compromis|
|**Gentle**|3.3 secondes|La nuit, optimisé pour le silence|

{%- include alert.html type="help" text="Le mode <b>Gentle</b> est un game changer. Si tu as des enfants qui dorment ou des voisins proches, tu apprécies de pouvoir verrouiller ta porte à 23h sans réveiller tout le monde." %}

### Le bruit, justement 🔊

Puisque j'avais été particulièrement critique sur le **bruit de la Tedee Go** (mesure à ~70dB à 60cm), autant aborder le sujet frontalement avec la Nuki Ultra.

**Verdict : nettement mieux.** Le moteur brushless produit un son plus **doux et moins aigu** que les moteurs à balais classiques. En mode **Gentle**, la serrure est remarquablement discrète. En mode **Insane**, tu entends le mécanisme mais ça reste dans des niveaux très acceptables.

Quelques nuances importantes :
- Le niveau de bruit **dépend beaucoup de ta porte et de ton cylindre**. Un mécanisme grippé ou un cylindre qui force augmentera le bruit perçu
- Certains utilisateurs rapportent des cliquetis occasionnels, généralement résolus par une **recalibration** via l'application
- Comparé à la Tedee Go, c'est **le jour et la nuit**

> Pour être honnête, aucune serrure motorisée ne sera totalement silencieuse. Mais la Nuki Ultra avec son mode Gentle est ce que j'ai entendu de plus discret à ce jour. Si le bruit de la Tedee Go m'avait fait bondir, ici je n'ai rien à redire.

### Batterie et autonomie

Contrairement à la Tedee Go et ses piles CR123 coûteuses, la {{ page.ref }} embarque une **batterie Lithium Polymer rechargeable intégrée**. L'autonomie annoncée est de **~6 mois en usage standard**.

La recharge se fait via un **câble magnétique USB-C propriétaire** qui se clipse sur la serrure. Comptez **environ 2 heures** pour une charge complète. Pendant la charge, l'anneau LED passe au rouge.

{% picture posts/{{ page.guid }}/cable-charge-magnetique-nuki-smart-lock-ultra.png --alt câble de charge magnétique USB-C propriétaire de la Nuki Smart Lock Ultra --img width="940" height="529" %}

{%- include alert.html type="warning" text="Le câble de charge est <b>propriétaire</b>. Ce n'est pas un USB-C standard. Si tu le perds, il faudra en racheter un chez Nuki. C'est le point négatif le plus souvent relevé par les testeurs." %}

> Les retours long terme sont excellents. LoKan (blogger tech) rapporte une autonomie remarquable même avec 20+ cycles d'ouverture/fermeture par jour après 4 mois d'utilisation.

### Caractéristiques techniques {{ page.ref }}

**Design**

|Dimensions|⌀ 57 mm × 58 mm|
|Poids|250 g|
|Matériau|Acier inoxydable brossé|
|Couleurs|Bagues interchangeables (noir / blanc)|
|Température de fonctionnement|10°C à 40°C|

**Moteur**

|Type|Brushless (sans balais)|
|Mode Insane|< 1.5 seconde (double tour)|
|Mode Standard|2 secondes|
|Mode Gentle|3.3 secondes (optimisé silence)|

**Connectivité**

|Bluetooth|BLE (Bluetooth Low Energy)|
|WiFi|2.4 GHz intégré (pas besoin de Bridge)|
|Thread|Oui (Matter over Thread)|
|Matter|Oui|
|MQTT|Oui (intégré, auto-discovery)|
|Zigbee|❌ Non|

**Batterie**

|Type|Lithium Polymer rechargeable intégrée|
|Autonomie|~6 mois (usage standard)|
|Recharge|Câble magnétique USB-C propriétaire (~2h)|

**Cylindre**

|Cylindre|Nuki Universal Cylinder (inclus)|
|Certification|SKG*** (haute sécurité)|
|Clés|5 clés de secours incluses|
|Urgence|Ouverture physique possible même serrure installée|

**Fonctionnalités**

|Auto Unlock|Déverrouillage automatique par géolocalisation|
|Auto Lock|Verrouillage automatique après délai configurable|
|Journal d'activité|Historique complet des ouvertures/fermetures|
|Autorisations|Jusqu'à 200 utilisateurs|

#### **les + du produit** {{ page.ref }}
{: .blue}

- Design compact et premium en acier inoxydable
- Moteur brushless ultra-rapide (< 1.5s en mode Insane)
- 3 modes de vitesse (Insane, Standard, Gentle)
- WiFi intégré (pas besoin de Bridge = économie ~100€)
- Thread/Matter natif
- MQTT intégré avec auto-discovery
- Cylindre universel SKG*** inclus
- Batterie rechargeable (~6 mois d'autonomie)
- Auto Unlock fiable par géolocalisation
- Compatible Apple Home, Google Home, Alexa, SmartThings, Home Assistant
- Made in Europe (Autriche)

#### **les - du produit** {{ page.ref }}
{: .red}

- Prix élevé (~349€)
- Changement de cylindre obligatoire (vs retrofit Tedee/Nuki Pro 5)
- Batterie non amovible (charge en place)
- Câble de charge magnétique propriétaire (pas USB-C standard)
- Température de fonctionnement limitée (10-40°C)
- Pas de Zigbee

## Installation

### Remplacement du cylindre

C'est **la différence majeure** avec la Tedee Go ou la Nuki Smart Lock Pro 5 qui se fixent sur le cylindre existant. Ici, tu dois **remplacer ton cylindre actuel** par le **cylindre universel Nuki**.

{%- include alert.html type="warning" text="Le remplacement du cylindre implique de <b>retirer ton ancien cylindre</b> et de mesurer précisément les côtes intérieures et extérieures de ta porte. L'application Nuki te guide pas à pas pour assembler le cylindre modulable aux bonnes dimensions." %}

**Les étapes en résumé :**

1. **Mesurer** ton ancien cylindre (côté intérieur et extérieur)
2. **Assembler** le cylindre universel Nuki aux dimensions mesurées (système modulaire ingénieux)
3. **Insérer** le nouveau cylindre dans ta porte
4. **Fixer** la plaque de base avec la vis de serrage
5. **Clipser** la Smart Lock Ultra sur la plaque
6. **Calibrer** via l'application Nuki

{% picture posts/{{ page.guid }}/installation-nuki-smart-lock-ultra-cylindre-universel.png --alt installation de la Nuki Smart Lock Ultra avec le cylindre universel modulable --img width="940" height="529" %}

L'installation prend **moins de 15 minutes** pour quelqu'un d'un peu bricoleur. Pas besoin de percer, un simple tournevis suffit. L'application te guide avec des vidéos à chaque étape.

> Le cylindre universel Nuki est certifié **SKG*** (3 étoiles)**, c'est le niveau de sécurité le plus élevé de la certification néerlandaise. C'est un vrai argument face aux critiques sur le changement de cylindre : tu remplaces potentiellement un cylindre basique par un cylindre haute sécurité.

### Point important : la clé physique

Contrairement à ce qu'on pourrait craindre, **la clé physique fonctionne toujours** depuis l'extérieur, même avec la serrure installée. Nuki fournit **5 clés de secours** avec le cylindre universel. En cas de panne de batterie, tu peux toujours rentrer chez toi avec ta clé. C'est rassurant.

## L'application Nuki

L'application Nuki (iOS et Android) est **la tour de contrôle** de ton écosystème. Elle est **intuitive, bien conçue et complète**.

{% picture posts/{{ page.guid }}/application-nuki-smart-lock-ultra-interface.png --alt interface de l'application Nuki pour la Smart Lock Ultra --img width="940" height="529" %}

### Fonctionnalités principales

- **Verrouiller / Déverrouiller** en un tap
- **Auto Unlock** : la serrure se déverrouille automatiquement quand tu approches de chez toi (géolocalisation GPS + Bluetooth). Tu quittes une zone de 100m, quand tu reviens le Bluetooth se met en scan pendant 20 minutes. Dès que tu es à portée (~10m), la porte se déverrouille
- **Auto Lock** : verrouillage automatique après un délai configurable (30s, 1min, 5min...)
- **Journal d'activité** : qui a ouvert, quand, comment (app, clé, Fob, Keypad, auto...)
- **Gestion des accès** : jusqu'à 200 autorisations, temporaires ou permanentes
- **3 modes de vitesse** du moteur
- **Calibration** et diagnostic du mécanisme
- **Mise à jour firmware** OTA

{%- include alert.html type="help" text="L'<b>Auto Unlock</b> est probablement la fonctionnalité la plus appréciée au quotidien. Tu rentres chez toi les mains chargées de courses, la porte se déverrouille toute seule. Après quelques jours, tu ne peux plus t'en passer." %}

## Le Nuki Fob

Le **Nuki Fob** est une **télécommande Bluetooth de poche** en forme de porte-clés. Son usage principal : permettre aux personnes **sans smartphone** de déverrouiller la porte.

{% picture posts/{{ page.guid }}/nuki-fob-telecommande-bluetooth.png --alt Nuki Fob télécommande Bluetooth en porte-clés --img width="940" height="529" %}

### Caractéristiques du Fob

|Dimensions|55 × 24 × 6 mm|
|Poids|~9 g (avec pile)|
|Communication|Bluetooth 5 (compatible BT 4.0+)|
|Portée|Jusqu'à 15 mètres|
|Pile|1× CR1632 (incluse)|
|Sécurité|Chiffrement bout-en-bout (niveau banque en ligne)|
|Capacité|1 Fob → jusqu'à 100 Smart Locks|

### Usage concret

Un appui sur le bouton et la porte se déverrouille. C'est **idéal pour** :
- les **enfants** qui n'ont pas de smartphone
- les **personnes âgées** peu à l'aise avec la technologie
- le **personnel de ménage** ou les aides à domicile
- un **backup physique** en cas de panne de smartphone

En cas de perte, l'autorisation peut être **révoquée instantanément** depuis l'application Nuki.

{% include product-embed.html image="nuki-fob-telecommande-porte-cle-bluetooth-pour-smart-lock-nuki.png" title="Nuki Fob" brand="Nuki" description="Télécommande Bluetooth Nuki Fob pour Smart Lock, portée 15m, chiffrement bout-en-bout, pile CR1632" amazlink="44qWci0" domlink="controle-acces/4399-nuki-fob-telecommande-porte-cle-bluetooth-pour-smart-lock-nuki-9120072084058.html" %}

#### **les + du produit** Nuki Fob
{: .blue}

- Ultra compact et léger (9g)
- Fonctionne sans smartphone
- Chiffrement bout-en-bout
- Appairage facile via l'app
- Révocation instantanée en cas de perte
- Pile CR1632 longue durée

#### **les - du produit** Nuki Fob
{: .red}

- Portée Bluetooth limitée à 15m (doit être à proximité)
- Un seul bouton (pas de feedback visuel)
- Pas de localisation GPS en cas de perte

## Le Nuki Door Sensor

Le **Nuki Door Sensor** est le complément idéal de la Smart Lock Ultra. Ce petit capteur se fixe **à l'intérieur de ta porte** et permet de savoir en temps réel si la porte est **ouverte, fermée ou verrouillée**. C'est un accessoire que je considère comme indispensable pour une installation complète.

{% picture posts/{{ page.guid }}/nuki-door-sensor-capteur-ouverture-porte.png --alt Nuki Door Sensor capteur d'ouverture de porte installé --img width="940" height="529" %}

### Caractéristiques du Door Sensor

|Dimensions|Compact (se fixe sur le cadre de porte)|
|Communication|Bluetooth Low Energy|
|Alimentation|Pile (longue durée)|
|Installation|Adhésif 3M (pas de perçage, pas de vis)|
|Compatibilité|Nuki Smart Lock 3.0 et supérieur (dont Ultra)|
|Usage|Intérieur uniquement|
|Couleur|Blanc|

### Fonctionnalités

Le Door Sensor remonte des informations précieuses :

- **État de la porte** : ouverte ou fermée, en temps réel dans l'application Nuki
- **Détection de verrouillage** : sait si la porte est verrouillée (pas juste fermée)
- **Notifications intelligentes** : alerte si la porte reste ouverte trop longtemps
- **Détection de sabotage** : alerte en cas de tentative de retrait du capteur
- **Historique** : journal complet des ouvertures/fermetures

{%- include alert.html type="info" text="Le Door Sensor améliore la fiabilité de l'<b>Auto Lock</b>. Sans lui, la Smart Lock verrouille après un délai fixe. Avec le Door Sensor, elle ne verrouille <b>que quand la porte est effectivement fermée</b>, évitant de verrouiller sur une porte entrouverte." %}

> C'est un détail qui change tout au quotidien : tu sais en un coup d'œil dans Home Assistant si ta porte est ouverte, fermée ou verrouillée. Et les automatisations deviennent bien plus fiables.

{% include product-embed.html image="nuki-door-sensor.png" title="Nuki Door Sensor" brand="Nuki" description="Nuki Door Sensor, capteur d'ouverture de porte Bluetooth, détection ouverte/fermée/verrouillée, installation adhésive sans perçage" amazlink="" %}

#### **les + du produit** Nuki Door Sensor
{: .blue}

- État porte ouverte/fermée/verrouillée en temps réel
- Améliore la fiabilité de l'Auto Lock
- Détection de sabotage intégrée
- Installation ultra simple (adhésif, pas de perçage)
- Notifications si porte restée ouverte
- Petit et discret

#### **les - du produit** Nuki Door Sensor
{: .red}

- Usage intérieur uniquement
- Bluetooth uniquement (nécessite la Smart Lock à proximité)
- Adhésif qui peut se décoller sur certaines surfaces
- Prix ~59€ pour un capteur de porte

## Le Nuki Keypad 2.0 (accessoire clé)

Je ne l'ai pas testé personnellement mais il mérite d'être mentionné car il est **indispensable pour la location saisonnière**. Le **Nuki Keypad 2.0** permet l'ouverture par **code PIN** ou **empreinte digitale** sans smartphone.

|Dimensions|118 × 29 × 21 mm|
|Communication|Bluetooth 5.0|
|Protection|IP54 (usage extérieur)|
|Empreintes|Jusqu'à 20|
|Codes PIN|Jusqu'à 200 codes à 6 chiffres|
|Alimentation|4× AAA (~12 mois)|
|Température|-20°C à +70°C|
|Prix|~159€|

> C'est l'accessoire qui transforme la {{ page.ref }} en solution complète pour la **location Airbnb** : tu génères un code temporaire qui expire automatiquement au checkout du locataire. Sans smartphone, sans clé, sans contact.

## Intégration Home Assistant

C'est un point crucial pour les lecteurs de haade.fr. La {{ page.ref }} offre **deux méthodes d'intégration excellentes** dans Home Assistant, toutes deux 100% locales.

### Méthode 1 : MQTT (recommandée)

C'est la méthode la plus simple et la plus éprouvée. La {{ page.ref }} intègre nativement un **client MQTT avec auto-discovery**.

**Configuration :**

1. Dans l'application Nuki → **Fonctions & Configuration** → **Smart Home** → **MQTT**
2. Renseigne l'IP de ton broker Mosquitto, le nom d'utilisateur et le mot de passe
3. La serrure apparaît **automatiquement** dans Home Assistant via MQTT Discovery

{% picture posts/{{ page.guid }}/integration-nuki-ultra-home-assistant-mqtt.png --alt intégration MQTT de la Nuki Smart Lock Ultra dans Home Assistant --img width="940" height="529" %}

Tu obtiens :
- une entité **lock** (verrouiller/déverrouiller/ouvrir le loquet)
- des capteurs d'**état** (verrouillée, déverrouillée, en mouvement)
- le niveau de **batterie**
- le dernier **événement**

{%- include alert.html type="info" text="Le MQTT est <b>entièrement local</b>, ultra-rapide et très stable. C'est la méthode privilégiée par la communauté Home Assistant pour les produits Nuki." %}

### Méthode 2 : Matter over Thread

Si tu as un **Thread Border Router** (Home Assistant Connect ZBT-1/ZBT-2, Apple TV 4K, HomePod Mini, Google Nest Hub), tu peux intégrer la {{ page.ref }} via **Matter**.

1. Dans l'application Nuki, active **Matter**
2. Dans Home Assistant → **Paramètres** → **Appareils** → **Ajouter** → **Matter**
3. Scanne le QR code ou entre le code d'appairage

{% include homeassistantlink.html integration="matter" %}

L'avantage de Matter c'est l'interopérabilité : la même serrure fonctionne avec Home Assistant, Apple Home, Google Home et Alexa **simultanément** sans configuration supplémentaire.

> **Mon conseil** : utilise **MQTT** si tu es uniquement sur Home Assistant (plus rapide, plus de fonctionnalités). Utilise **Matter** si tu as un écosystème multi-plateformes (Apple Home + HA par exemple).

### Automatisations possibles

Avec la {{ page.ref }} dans Home Assistant, les possibilités sont vastes :

- **Verrouillage automatique** à l'heure du coucher
- **Notification** quand la porte reste déverrouillée plus de X minutes
- **Allumage des lumières** quand la porte se déverrouille la nuit
- **Désactivation de l'alarme** quand tu déverrouilles
- **Dashboard** avec état de toutes les serrures et historique d'accès

## Airbnb et location saisonnière

C'est un cas d'usage où la {{ page.ref }} **excelle véritablement**. Le combo **Smart Lock Ultra + Keypad 2.0** est la solution idéale pour les propriétaires qui font de la location courte durée.

{% picture posts/{{ page.guid }}/nuki-airbnb-location-saisonniere-acces-autonome.png --alt utilisation Nuki Smart Lock Ultra pour Airbnb et location saisonnière avec accès autonome --img width="940" height="529" %}

### Pourquoi Nuki pour la location ?

1. **Check-in autonome 24h/24** : plus besoin de se déplacer pour remettre les clés
2. **Codes PIN temporaires** (via Keypad 2.0) : tu génères un code qui **expire automatiquement** à la date de checkout
3. **Pas d'application requise** pour le locataire : un code suffit
4. **Gestion du ménage** : tu attribues un accès permanent au personnel de ménage avec des plages horaires
5. **Journal d'activité** : tu sais exactement quand le locataire est arrivé et parti
6. **Accès à distance** : tu gères tout depuis ton canapé via le WiFi intégré

### Nuki Smart Hosting

Nuki propose le service **Smart Hosting** qui s'intègre directement avec les plateformes de location :

- **Airbnb**
- **BookingSync**
- **Smoobu**
- et d'autres channel managers

Le principe : tu connectes ton calendrier de réservation et **les codes d'accès sont générés et envoyés automatiquement** au locataire avant son arrivée. Plus de gestion manuelle, c'est totalement automatisé.

### Nuki Web API pour les développeurs

Pour les plus techniques, Nuki fournit une **API REST complète** (api.nuki.io) qui permet :
- de verrouiller/déverrouiller à distance
- de gérer les utilisateurs et les codes
- d'accéder aux journaux d'activité
- d'intégrer avec n'importe quel système de gestion locative custom

{%- include alert.html type="info" text="Le WiFi intégré de la Nuki Smart Lock Ultra permet l'accès distant <b>sans Bridge</b>. C'est un avantage considérable par rapport aux générations précédentes qui nécessitaient un Nuki Bridge à ~99€." %}

> **Comparaison avec la Tedee pour la location** : chez Tedee, le partage d'accès nécessite que l'invité **installe l'application Tedee**. Avec le Nuki Keypad 2.0, **un simple code PIN suffit**. Pour de la location saisonnière avec des turnover fréquents, c'est incomparablement plus pratique.

## Comparatif {{ page.ref }} vs Tedee Go

Puisque j'ai testé les deux produits, voici un comparatif honnête et objectif.

|Caractéristique|**{{ page.ref }}**|**Tedee Go**|
|**Prix**|~349€ (cylindre inclus)|~165€ (seul)|
|**Matériau**|Acier inoxydable brossé|Plastique ABS|
|**Poids**|250 g|214 g|
|**Installation**|Remplacement du cylindre|Retrofit sur cylindre existant|
|**Moteur**|Brushless (< 1.5s mode Insane)|Moteur classique (plus lent)|
|**Bruit**|Discret (mode Gentle = très silencieux)|Bruyant (~70dB)|
|**Batterie**|Li-Po rechargeable (~6 mois)|3× CR123 piles (~5 mois, coûteuses)|
|**WiFi**|✅ Intégré|❌ Nécessite Bridge (79€)|
|**Thread/Matter**|✅ Oui|❌ Non|
|**MQTT**|✅ Intégré|❌ Non|
|**Home Assistant**|MQTT + Matter (local)|API via Bridge (cloud/local)|
|**Application**|Excellente|Excellente|
|**Auto Unlock**|✅ Fiable|✅ Fonctionnel|
|**Cylindre**|SKG*** inclus|Utilise l'existant|
|**Accès sans app**|Fob (40€) ou Keypad 2 (159€)|Clavier code (99€)|

### Verdict du comparatif

La {{ page.ref }} est **objectivement supérieure** sur tous les points techniques : moteur, bruit, connectivité, autonomie. Mais elle coûte aussi **2 fois plus cher** et impose de changer de cylindre.

La Tedee Go reste pertinente si :
- tu as un **budget limité** 
- tu veux un **retrofit sans changer de cylindre**
- la connectivité smart home n'est pas ta priorité

Pour tous les autres cas, **la {{ page.ref }} est le meilleur choix**.

## Tarifs de l'écosystème Nuki

|Produit|Prix|
|**Nuki Smart Lock Ultra**|~349€|
|**Nuki Smart Lock Pro 5** (garde le cylindre)|~289€|
|**Nuki Fob**|~49€|
|**Nuki Door Sensor**|~59€|
|**Nuki Keypad 2.0**|~159€|
|**Nuki Bridge** (non nécessaire avec Ultra)|~99€|

> Un pack complet **Ultra + Keypad 2.0** revient à environ **508€**. C'est un investissement conséquent, mais si tu fais de la location saisonnière, le ROI est rapide : plus de serrurerie, plus de clés perdues, plus de déplacements pour les check-in.

{% include product-embed.html image="nuki-smart-lock-ultra-serrure-connectee.png" title="Nuki Smart Lock Ultra" brand="Nuki" description="Serrure connectée Nuki Smart Lock Ultra, moteur brushless, WiFi, Thread/Matter, MQTT, cylindre universel SKG***, acier inoxydable" amazlink="4wLkrnj" domlink="controle-d-acces-sans-fil/7882-nuki-smart-lock-ultra-serrure-intelligente-matter-alexa-google-home-homekit-smartthings-homey-9120072083969.html" %}

## Conclusion

La **{{ page.ref }}** mérite son nom. C'est aujourd'hui **la serrure connectée la plus aboutie du marché européen**. Le moteur brushless est une vraie révolution : rapide, silencieux en mode Gentle, et durable. Le WiFi, Thread/Matter et MQTT intégrés font de cette serrure un **rêve pour les utilisateurs Home Assistant** — plus besoin de bridge, tout est local et instantané.

Là où [la Tedee Go m'avait déçu]({% post_url /fr/2024-04-22-test-de-la-serrure-connectee-tedee-go-et-des-accessoires %}) sur le bruit et la connectivité, la {{ page.ref }} **comble toutes les lacunes**. Le design en acier inoxydable est premium, l'application est exemplaire, et l'écosystème d'accessoires (Fob, Door Sensor, Keypad) couvre tous les besoins.

Les points de friction existent : le **prix** (349€), le **changement de cylindre obligatoire** et le **câble de charge propriétaire** sont les critiques les plus légitimes. Mais ces compromis sont largement compensés par la qualité globale du produit.

**Pour qui ?**
- Tu es **passionné de domotique** et tu veux une intégration parfaite dans Home Assistant → **fonce**
- Tu fais de la **location Airbnb** et tu veux automatiser les check-in → **c'est LA solution** (avec le Keypad 2.0)
- Tu veux simplement **oublier tes clés** au quotidien avec fiabilité → **tu ne seras pas déçu**

> Si tu cherches **le meilleur** et que le budget n'est pas ton premier critère, la {{ page.ref }} est la serrure connectée qu'il te faut. Si le budget est serré, la Nuki Smart Lock Pro 5 (~289€) offre le même moteur brushless sans changer de cylindre, c'est un excellent compromis.
