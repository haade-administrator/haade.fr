---
guid: 156
title: "Test de l'interface du chauffage Tado°"
description: "Deuxième étape de présentation de l'univers Tado, je vais te montrer tout le processus d'utilisation de l'interface Tado et de ses particularités"
ref: ""
layout: post
authors: [Nico]
date: 2025-03-05 11:00
last_modified_at: 
categories: [Tests, Videos, Haade-lab]
tags: []
video:
image: 'controle-ton-installation-tado-par-application-officielle.png'
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
rating:  
sourcelink:
  - https://support.tado.com/fr/articles/4190245-comment-debuter-avec-l-application-tado
---

**Voilà dans une continuité de présentation de l'univers Tado°** suite à la présentation du [robinet thermostatique Tado° X]({% post_url /fr/2025-02-12-test-du-robinet-thermostatique-tado-x-proche-de-la-perfection-compatible-thread %}){: target="_blank"}, je vais aujourd'hui te présenter l'application Tado° de ses particularités et **surtout ce qui différencie la gestion du Chauffage Tado° et la gestion par rapport aux autres marques**.

Comme **présenté précedemment ce qui différencie les produits Tado° des autres marques** commence par **l'intégration du protocole Thread** associé à la gestion d'objet Matter. Couplé à des **produits bien finis** et complémentaires qui font de **cette marque un incontournable** en gestion de Chauffage et totalement autonome. En gros tu n'auras pas particulièrement besoin d'un Gestionnaire Opensource comme Home Assistant pour faire **de belles économies sur ta facture de gaz ou fioul**.

{% include product-embed.html image="tado-x-kit-demarrage-thermostat-filaire-bridge.png" title="Kit de démarrage Tado X filaire" brand="Tado°" description="Kit de démarrage Tado-X, thermostat filaire et bridge, connecte le thermostat en contact-sec directement à la chaudière" amazlink="3EsAZKE" %}

**Pour rappel**, si tu achètes juste des robinets thermostatiques que tu pourras allumer ou éteindre à ta **convenance tu ne feras que 15% maximum d'économies sur ta facture**. **Là ou Tado° se différencie** et sur le fait qu'il te permettra de **contrôler directement ta chaudière** et grâce à ça tu pourras faire **jusqu'à 40% d'économies**, ce qui est très intéressant surtout pour un retour sur investissement qui sera beaucoup plus rapide.

**Dans divers articles et vidéos avec August** nous avons parlé à de nombreuses reprises **d'une installation similaire avec Home Assistant** et des robinets thermostatiques qui contrôlent ta chaudière, **et ça fonctionne alors décorticons l'univers Tado°.**

> Je dois dire que l'application est très bien faite

## Vidéo de présentation

**Souvent demandé, jamais réalisé**, je me lance dans un nouveau format explicatif qui accompagnera l'article associé, certains lecteur m'ont fait remonter la difficulté à suivre les **articles accompagnés de gifs animés**, qui me semble être un constat évident, ainsi je vais faire l'effort d'alimenter plus souvent la [chaîne Youtube Haade](https://www.youtube.com/channel/UCcXJ1ZsjEvQxuWJy7gH-A6w){: target="_blank"}.

{% include videoPlayer.html youtubeId="bJK9krRC90Q" %}

## Installation de l'app Tado°

Ne perdons pas de temps passons à l'installation de l'application sur Smartphone.

### Pour Android

Scan simplement le QRCode ci-dessous pour accéder directement à l'installation sur ton tél. À l'heure ou j'écris ces quelques lignes **l'application est noté 4,5/5 avec plus de 5000 votants,** ce qui est très bien noté.

{% include qrlink.html qrlink="https://play.google.com/store/apps/details?id=com.tado&hl=fr" text="télécharger l'application Tado° sur le playstore" realtextlink="https://play.google.com/store/apps/details?id=com.tado&hl=fr" %}

### Pour Iphone

Scan simplement le QRCode ci-dessous pour accéder directement à l'installation sur ton tél. **Et là aussi** à l'heure ou j'écris ces quelques lignes **l'application est noté 4,5/5 avec plus de 5000 votants,** ce qui est très bien noté.

{% include qrlink.html qrlink="https://apps.apple.com/fr/app/tado/id574418486" text="télécharger l'application Tado° sur l'appstore" realtextlink="https://apps.apple.com/fr/app/tado/id574418486" %}

> Bonne nouvelle l'application est déjà très bien noté

## Comment débuter avec l'application Tado°

Pour [commencer le support Tado° a très bien documenté](https://support.tado.com/fr/){: target="_blank"} l'ensemble de son univers, [notamment comment débuter avec l'application](https://support.tado.com/fr/articles/4190245-comment-debuter-avec-l-application-tado){: target="_blank"} hormis cet article tu trouveras tout ce qu'il faut pour apprendre à commander ton chauffage.

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

{% include product-embed.html image="lot-de-3-robinets-tado-x-thermostatique-matter-thread.png" title="Lot de 3 Robinets thermostatique Tado° X" brand="Tado°" description="Lot de 3x Robinets thermostatique Tado° X, probablement le robinet le plus abouti du marché, compatible matter over thread" amazlink="3X45Fsn" %}

### Première étape

Il faudra créer un compte si ce n'est déjà fait, sinon si tu veux tester l'application avant de passer le cap de l'achat. Tado° a mis à **disposition un compte démo**.

Le compte Demo est une interface qui n'est pas complète car tu n'auras pas accès aux paramétrages des modules seulement à la gestion du frontend (tu n'as pas accès aux modifications de pièeces etc.... ), mais c'st déjà pas mal pour tester l'univers Tado.

{% picture posts/{{ page.guid }}/premiere-connection-application-tado-inscription-mode-demo.png --alt Première utilisation du de l'application Tado accès à une démo, utilisateur existant ou création de compte --img width="940" height="509" %}

**Lors de ta première connection**, tu n'auras pas comme sur l'image ci-dessous un appareil de connecté. Mais si comme moi tu t'es déjà connecté d'un appareil alors tu retrouveras la liste des appareils enrregistrés il te suffira d'en sélectionner l'un ou l'autre pour reprendre la configuration, ou **tout simplement d'en créer un** si c'est ton premier appareil.
Ensuite Tado° te demander d'accepter la géolocalisation, comme beaucoup d'applications Tado prendra en compte la présence ou non des personnes dans le logement.

{% picture posts/{{ page.guid }}/premiere-connection-application-tado-enregistrement-donnees-cloud.png --alt Première connection de l'application Tado avec compte utilisateur existant, geolocalisation et enregistrement données cloud --img width="940" height="509" %}

## Ajouter son premier appareil

**L'ajout d'appareil dans Tado** suit la logique d'intégration Matter, **si tu as déjà intégré un appareil Matter** auparavant, l'ajout d'un appareil dans Tado° est identique. Si au contraire c'est la première fois que tu intègres un appareil Matter.
**Alors en étape 1** il faudra **scanner le qrcode** disponible avec la boite ou derrière le produit. Je te conseil fortement de garder les étiquettes Matter qui sont beaucoup plus facile à Scanner. **Mais sâche que si tu n'arrives pas à scanner le QRCode** tu pourras aussi utiliser le code disponible en dessous à 11 chiffres: **XXXX-XXX-XXXX**.

{% picture posts/{{ page.guid }}/ajout-du-premier-appareil-matter-tado.png --alt Ajout du premier appareil Tado compatible Thread Matter dans l'application Tado --img width="940" height="522" %}

La capture d'écran **ci-dessus n'affiche que 4 étapes**, sur les 8 réellements défini par Matter, mais ce sont comme tu peux te le douter les étapes importantes pour l'intégration dans Matter.
**J'ai volontairement commencé par le bridge** car c'est lui qui **intègre le protocole Thread** sans lui tu ne pourras guère intégré de robinet thermostatique Tado°.
**Ensuite je vais installer un robinet thermostatique** et un thermostat de contrôle de la chaudière.

## Tour d'horizon des paramètres de l'appli Tado°

Paramétrer une application est essentielle pour comprendre et optimiser son fonctionnement, l'application Tado° est comme annoncée plus tôt, **très bien faite**, alors il y a pas mal de paramétrages, **mais pas trop compliquer à comprendre**.

![Page des Paramètres application Tado°]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/pages-des-parametres-appli-tado.webp{{ cachebuster }}){: width="340" height="746" class="lazyload pictaninpost"} 

**J'ai détaillé en 3 étapes clés l'application TADO°:**

1. les paramètres
2. la fonction plus
3. la page d'accueil

> Alors oui, **il y a beaucoup de captures d'écrans**, limite indigeste, et encore je ne suis même pas sûre à 100% **de ne pas avoir oublié quelque chose** !

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Robinet thermostatique Tado° X" brand="Tado°" description="Robinet thermostatique Tado° X, probablement le robinet le plus abouti du marché, compatible matter over thread" amazlink="4i2glzz" %}

### Pièces et Appareils

Cet onglet reprend **les appareils inclus dans l'application** comme ( la tête Thermostatique, le thermostat intelligent ainsi que le bridge ).

> La fonction de pièces dans Tado° est une fonction très importante

**Lors de l'ajout d'un appareil** Tado ajoute cet appareil **dans une pièce** à nombre aléatoire systématiquement différente, il faudra ensuite **renommer cette pièce** ou alors déplacer l'appareil dans une pièce existante.

En cliquant sur les **3 petits points** en haut à droite tu pourras **supprimer l'appareil**{: .red} si tu le désire

Ci dessous dans pièces et appareils tu peux voir que le **robinet thermostatique** est dans la pièce renommé **Salon** et le **thermostat intelligent** dans la pièce nommée **couloir**.

{% picture posts/{{ page.guid }}/parametrage-piece-e-appareil-tado.png --alt Paramétrage pièces et appareils Tado --img width="940" height="522" %}

**Quand tu clics sur la pièce tu pourras:**

1. **renommer** la pièce
2. **controler la fonction chauffage** par pièces avec 3 sous fonctions ( jusqu'au prochain bloc horaire, par minuterie, ou jusqu'à la réactivation de la programmation )
3. Enfin dernière fonction tu pourras **associer la pièce à un thermostat intelligent** ( bref un controleur de chaudière )

> Chez Tado° **c'est la pièce qui prime sur l'appareil** et en greos les automatisations se passent par pièces.

{% picture posts/{{ page.guid }}/parametrage-appareil-tado.png --alt Paramétrage des appareils enregistrés Tado --img width="940" height="522" %}

Voilà dans les paramétrages des appareils end Devices ( robinet et thermostat ) tu pourras:

1. voir la connectivité et l'état de la pile
2. changer le nom de la pièce ou déplacer l'appareil vers une nouvelle pièce
3. Activer ou non la sécurité enfant

{% picture posts/{{ page.guid }}/suite-parametrage-appareil-tado.png --alt Suite des Paramétrage des appareils enregistrés Tado --img width="940" height="522" %}

4. Afficher les instructions d'installations (peut être utilie )
5. Modifier le facteur de compensation de la rlève de température
6. Lier l'appareil à un hub matter ( utile si tu chagnge de bridge ou si tu passes sur home Assistant )

Voilà **les paramétrages sont identiques pour les thermostats intelligent**, quand au bridge tu ne pourras que le configurer s'il décroche du du réseau wifi.

{% include product-embed.html image="lot-de-3-robinets-tado-x-thermostatique-matter-thread.png" title="Lot de 3 Robinets thermostatique Tado° X" brand="Tado°" description="Lot de 3x Robinets thermostatique Tado° X, probablement le robinet le plus abouti du marché, compatible matter over thread" amazlink="3X45Fsn" %}

### Détail de la maison

Dans le détail de la maison, là aussi rien de bien compliqué:

1. tu **changer le nom "Maison"** par autre chose
2. rentrer l'adresse principale **déterminant pour la géolocalisation**
3. **Modifie les coordonnées** du résidant

{% picture posts/{{ page.guid }}/detail-parametres-maison-tado.png --alt Suite des Paramétrage des détails du paramètre maison Tado --img width="940" height="522" %}

**Pour la gestion des personnes** c'est différent d'un système domotique traditionnel, bienentendu **tu pourras modifier ton compte** normal tu l'as créé lors de ta première connection TADO°, **mais tu ne pourras créer d'autres comptes**, par contre tu peux **inviter** des personnes à télécharger l'application et **à créer un compte pour ton environnement**.

> l'application Tado° **c'est du 100% Cloud**, un point que je n'aime pas, **mais bon c'est comme ça !**

{% picture posts/{{ page.guid }}/detail-parametres-les-personnes-tado.png --alt Suite des Paramétrage des personnes dans Tado --img width="940" height="522" %}

### Auto-Assist

**Auto-Assist est un skills**, un module complémentaire, en cliquant dessus je me rend compte que **c'est payant**. **C'est comme si l'on faisait payer les automatisations dans home Assistant ce serait une hérésie**. **Mais qui dit Cloud dit stockage et utilisation serveur du coup tu payes du transfert d'infos et l'entreprise a accès aux informations sur ton chauffage**{: .red}.

{% picture posts/{{ page.guid }}/parametres-tado-auto-assist.png --alt L'automatisation payante chez Tado avec Auto-Assist --img width="630" height="700" %}

[Explication Auto-Assist par Tado°](https://support.tado.com/fr/articles/3387221-qu-est-ce-que-auto-assist){: target="_blank"}

### Geolocalisation

L'onglet Géolocalisation reprend les paramétrages de l'emplacement de ton habitation ( essentielle pour les automatisations de chauffages quand personne n'est présent à la maison ), **à condition d'avoir l'abonnement Auto-Assist !**{: .red}, dans cet onglet tu peux aussi paramétrer le smartphone qui sera associé à la présence, **car tu peux paramétrer plusieurs appareils pour un seul compte.**

{% picture posts/{{ page.guid }}/parametres-tado-geolocalisation.png --alt Les paramètres de la Géolocalisation dans Tado --img width="630" height="700" %}

### Détection fenêtre ouvertes

Dans les paramétrages tu trouveras aussi **la fonction fenêtre ouverte**, *pour rappel quand la température chute rapidement l'application estime qu'une fenêtre est ouverte et coupe automatiquement les robinets thermostatiques*, la fonction est **paramétrable par pièces** et tu pourras aussi paramétrer une durée de coupures. **Mais pour un arrêt automatique il faudra là aussi l'abonnement Auto-Assist**{: .red}, sinon tu n'auras qu'une **notification sur ton smartphone** et il faudra que tu coups manuellement le chauffage.

{% picture posts/{{ page.guid }}/parametres-detection-fenetres-ouvertes-tado.png --alt Paramétrages de la détection des fenêtres ouvertes dans Tado avec une gestion par pièce --img width="630" height="700" %}

### La Programmation intelligente

Gros pavet de la gestion de chauffage, la programmation **s'effectue là aussi par pièces** et non par appareils, **par défaut** Tado° crée un programme journalier avec des blocs horaires prédéfinis, dans la gestion **tu pourras aussi paramétrer le mode absence**.

{% picture posts/{{ page.guid }}/parametres-programmation-intelligente-tado.png --alt Paramétrages de la programmation intelligente dans Tado avec une gestion par pièce --img width="630" height="700" %}

**En mode absent tu pourras:**

- paramétrer une température
- si désactivée une fonction hors gel prend le relais.

**En mode présence**
- tu pourras créer ou supprimer des blocs horaires
- et copier la programmation pour la dupliquer dans une autre pièce.

{% picture posts/{{ page.guid }}/parametres-suite-programmation-intelligente-tado.png --alt Suite Paramétrages de la programmation intelligente dans Tado avec une gestion par pièce --img width="940" height="522" %}

### Les fonctions sans remontées d'infos !

dans les paramétrages certains skills ne présentent rien comme:

- l'application météo
- le bien être ambiant
- les analyse et statistiques

> Bizarre surtout pour des fonctions existantes et gratuites, pourquoi avoir mis ces onglets !

{% picture posts/{{ page.guid }}/parametres-les-fonctions-vides-tado.png --alt Suite Paramétrages les fonctions sans remontées d'informations --img width="940" height="522" %}

### Notifications et Apparences

Les **notifications sont essentielles** surtout **si tu ne possèdes pas l'abonnement Auto-Assist** tu pourras **activer/désactiver**:

- l'indicateur de batteries faibles
- rappel mode absent/présent
- rappel fenêtre ouverte
- rappel énergies et cockpit

En ce qui concerne **l'apparence** il existe un **mode clair et sombre ainsi que le mode automatique.**

{% picture posts/{{ page.guid }}/parametres-notification-et-apparence-tado.png --alt Paramétrages notifications et Apparences dans Tado --img width="630" height="700" %}

## Onglet Plus

L'onglet plus regroupe:

- les informations de ton **compte qui sont modifiables**
- des liens vers les centres d'aides tado et communautaires
- une option pour installer la version beta

Ensuite sont regroupés les fonctions d'analyses, **tu pourras désactiver la fonction de comportement d'utilisation**, mais cette fonction ne bloque pas toutes les infos envoyées à Tado°, **ils enregistrent certainement toutes les informations de températures et de consommations !**

{% picture posts/{{ page.guid }}/Onglets-plus-dans-tado.png --alt Onglet Plus dans Tado --img width="940" height="522" %}

## Onglet Principal "Maison"

Venons à l'onglet qui intéresse tout le monde, la page d'accueil regorge de fonctions très utiles

### fonctions off-programmation-boost

1. Le **système off** permet d'un simple clic de **couper tous les modules de chauffages**.
2. **Le système programmation** permet de basculer d'un simple clic **tous les appareils sur le mode programmation**
3. **La fonction Boost** est une fonction très intéressante car elle te permet d'un simple clic de **mettre tous les appareil en chauffage forcé pour une période de 30 minutes** afin de permettre au logement de monter en température rapidement.

{% picture posts/{{ page.guid }}/fonction-off-programmation-boost-tado-application.png --alt 3 fonctions  contrôle de la température off, programmation et boost dans l'application Tado --img width="940" height="522" %}

{% include product-embed.html image="tado-x-kit-demarrage-thermostat-filaire-bridge.png" title="Kit de démarrage Tado X filaire" brand="Tado°" description="Kit de démarrage Tado-X, thermostat filaire et bridge, connecte le thermostat en contact-sec directement à la chaudière" amazlink="3EsAZKE" %}

#### Fonction boost

**J'ai repris en capture la fonction boost** afin de te montrer comment celle-ci fonctionne. **Tado° à implémenter nativement une fonction très demandée** sur les forums, là ou il faut créer une automatisation dans Home-Assistant, **Tado à su simplifier la chose**.

{% picture posts/{{ page.guid }}/fonction-boost-mise-en-chauffe-express-30-min.png --alt Fonction Boost mise en chauffe rapide pour 30 minutes dans Tado --img width="630" height="700" %}

### Gestion température options

Quand tu rentres dans l'interface de la gestion des appareils, **en plus d'augmenter la température manuellement**, de passer en **mode programmation** tu as acceès à deux autres fonctions:

1. **directement** à la page de programmation globale
2. **accès à l'historique** de chauffe qui te permettra de voir en un clin d'oeil les courbes de chauffages et d'humidités.

{% picture posts/{{ page.guid }}/fonction-programme-statistique-dans-gestion-chauffage-par-pieces-app-tado.png
 --alt Gestion programmation et affichage statistiques dans contrôle chauffe avec l'app Tado --img width="940" height="522" %}

### Mode Manuel changement taquet horaire

La fonction jusqu'au prochain bloc horaire peut être modifiée, raccourci ou augmentée jusqu'à l'infini.

{% picture posts/{{ page.guid }}/mode-manuel-changement-taquet-horaire-programmation-predefini-appli-tado.png --alt Fonction dispo mode manuel changement taquet fin de mode par rapport à programmation dans Tado --img width="630" height="700" %}

L'aspect sympa de l'application tado° **réside aussi sur la modification de la couleur des fonds d'écrans** en fonction de la température de la pièce ou de la modification de la température cible.

{% picture posts/{{ page.guid }}/affichage-control-temperature-tado.png --alt Contrôle de la température dans l'application Tado --img width="940" height="522" %}

### Réorgnisation des Pièces

Comme tu peux le voir sur l'image ci-dessous, l'organisation des pièces est biensûre **modifiable, par simple glisser/déposer**, l'organisation se verra directement sur l'interface home.

{% picture posts/{{ page.guid }}/reorganisation-des-pieces-dans-app-tado.png --alt Importance et reorganisation des pieces dans Tado --img width="630" height="700" %}

### Modification des appareils par pièces

Comme je l'ai dit à plusieurs reprises, tado° gère la **priorité du chauffage par pièces et non par appareils**. Une des forces de Tado° réside là aussi **dans la combinaison des appareils par pièces**.

- Sur la capture ci-dessous tu peux **voir sur l'image de gauche** un seul groupe d'appareil Salon ( car j'ai mis le thermostat intelligent dans la même pièce que le robinet thermostatique ).
- **Sur l'image de droite** les deux appareils sont situés dans une pièce différente

Quand une seule pièce est paramétrée **l'ongle "modification des pièces" disparait.**

{% picture posts/{{ page.guid }}/reorganisation-des-pieces-dans-app-tado-fonctionnement.png --alt Fonctionnement modifications des pieces dans Tado --img width="630" height="700" %}

Sur la capture suivante je temontre pas à pas la modification de la pièce couloir de l'appareil "kit intelligent" en la transférant dans Salon.

{% picture posts/{{ page.guid }}/reorganisation-des-pieces-par-appareils-dans-app-tado.png --alt Réorganisation des pièces par appareils dans l'application Tado --img width="940" height="522" %}

Une fois modifiée tu retrouveras sur l'interface principale **avec plus qu'un seul icone salon**, et ce qui est **magique** est le fait que **l'application n'utilise plus la relève de température du robinet thermostatique mais celle du kit thermostat fixé au mur**.
D'un **simple changement de pièces** te permet d'utiliser la fonction de la température du kit qui est beaucoup *plus juste que celle du robinet situé à proximité du corps de Chauffe*.
**C'est une fonction ultra intéressante** et simple à mettre en place.

> Alors que sous **home assistant il faudrait intégrer une automatisation** qui calibre la température du robinet thermostatique avec une sonde déportée.

{% picture posts/{{ page.guid }}/resultat-reorganisation-des-pieces-par-appareils-dans-app-tado.png --alt Après une reorganisation des pieces par appareils deux appreils dans la même pièce n'affiche plus qu'un seul écran dans Tado --img width="630" height="700" %}

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Robinet thermostatique Tado° X" brand="Tado°" description="Robinet thermostatique Tado° X, probablement le robinet le plus abouti du marché, compatible matter over thread" amazlink="4i2glzz" %}

### Auto-Assist Sur l'onglet principal

Sur l'onglet principal on retrouve là aussi la fameuse fonction auto-assist payante. D'un simple coup d'oeil tu pourras voir les avantages de souscrire à un tel abonnement.

> Les automatisations avec Tado° sont payantes et c'est bien dommage.

{% picture posts/{{ page.guid }}/auto-assist-app-tado-onglet-principal.png --alt Auto-assist-avantages-et-inconvenients dans Tado --img width="630" height="700" %}

### Onglet bien-être

**Alors que dans les paramètres l'onglet bien-être ne remonte aucune informations**, sur la page principale il en est tout autre.
Tu vas pouvoir visualiser **toutes les infos sur la qualité d'air et d'humidité** de ton logement et ceux par pièces.
**La couleur du fond d'écran** changera en fonction du ressenti de la pièce.

> tu peux aussi apercevoir en haut à droite la **température extérieur de ton logement**, la fonction adaptation météo fonctionne bel et bien.

{% picture posts/{{ page.guid }}/affichage-bien-etre-onglet-tado-infos.png --alt Avantages onglet bien être dans Tado --img width="630" height="700" %}

### Onglet Maison

L'onglet maison te permet d'un **simple clic de passer du mode présent à absent** et ainsi couper le chauffage *( pour rappel tu pourras changer la consigne de chauffe en mode absence dans les paramètres de la programmation )*.

> Je regrette tout de même que **cette fonction ne soit pas disponible** directement en haut de la page principale.

{% picture posts/{{ page.guid }}/affichage-onglet-maison-tado-infos.png --alt Affichage onglet maison présent-absent dans Tado --img width="630" height="700" %}

### Onglet Energy-Cockpit

L'onglet energy-cockpit malheureusement payante te fait tout de même remonter le pourcentage d'économie d'énergie réalisée.
Pour les **fonctions d'historique** et  **simulateurs de coût** là tu peux te brosser ou alors **met la main au portefeuille** .

{% picture posts/{{ page.guid }}/onglet-energy-cockpit-affichage-propose-appli-tado.png --alt Affichage onglet energy cockpit dans Tado --img width="630" height="700" %}

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Robinet thermostatique Tado° X" brand="Tado°" description="Robinet thermostatique Tado° X, probablement le robinet le plus abouti du marché, compatible matter over thread" amazlink="4i2glzz" %}

## **les + de l'application** {{ page.ref }}
{: .blue}

- **bien noté** sur les plateformes **Playstore et Appstore**
- **Interface simple** à prendre en main
- **changement des couleurs** en fonction des températures
- une **programmation simple**
- Une fonction **Boost**
- Une **combinaison des températures** par pièces automatisées
- beaucoup de liens d'entraides
- Certaines automatisations disponibles par défaut

## **les - de l'application** {{ page.ref }}
{: .red}

- Les **automatisations** pour la plupart **sont payantes** par Auto-Assist
- absence de gestion par appareils
- impossibilité d'ajouter manuellement un utilisateur
- obligé d'utiliser **l'application pas de Webapp**
- **Application 100% Cloud**

## Conclusion

Voilà une application de **gestion du chauffage ludique** qui te permettra de réaliser facilement de **belles économies d'énergies**, unique à Tado°, **je déplore tout de même** *l'abonnement mensuel obligatoire* pour accéder à l'ensemble des automatisations et des retours des informations d'économies d'énergies.
**Autre point négatif** Tado° **c'est du 100% Cloud,** ton chauffage fonctionnera parfaitement en local, **le reste se passe sur les serveurs Tado°**