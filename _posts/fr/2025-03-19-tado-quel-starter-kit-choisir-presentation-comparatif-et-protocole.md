---
guid: 158
title: "Tado° quel starter kit choisir ?"
description: "Comparatif des deux starter kit de la marque Tado°, voici un article de présentation du matériel et de t'aider dans ton choix lors de l'achat, les kits de démarrages sont indispensables pour utiliser la gestion de chauffage Tado° dans l'application Tado°"
ref: ""
layout: post
authors: [Nico]
date: 2025-03-19 08:15
last_modified_at: 
categories: [Tests, Haade-lab]
tags: []
video: 
image: 'tado-quel-starter-kit-choisir-presentation-et-comparatif.png'
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
rating: 4.8 
sourcelink:
  - https://tado-rwknz.involve.me/productcompatibility-update-fa01a73abe00-ab546a5c19ba-copy-88cf43650695
  - https://www.opentherm.eu/
---
Après avoir présenté le [somptueux robinet thermostatique Tado° X]({% post_url /fr/2025-02-12-test-du-robinet-thermostatique-tado-x-proche-de-la-perfection-compatible-thread %}){: target="_blank"}, ainsi que [l'application Tado des plus réussis]({% post_url /fr/2025-03-05-utilisation-complete-de-l-interface-tado-gestion-chauffage-independant %}){: target="_blank"}, attaquons nous maintenant au coeur du système, je vais aujourd'hui te présenter les deux controleurs Tado° le **wireless smart thermostat X** et le **smart thermostat X**. Ces deux contrôleurs embarquent le **protocole border router Thread**. 

> **Alors quel starter kit choisir** pour son installation !

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Articles Connexes

{% include related-article.html guids="154,156" %}

## Présentation

Avant de rentrer dans le vif du sujet si tu veux vérifier la [compatibilité de ta chaudière Tado a mis en place un outil disponible](https://tado-rwknz.involve.me/productcompatibility-update-fa01a73abe00-ab546a5c19ba-copy-88cf43650695){: target="_blank"} en ligne.
Commençons par le smart thermostat X le contrôleur de chaudière filaire grâce au port **com/No/Nc**.

{% include doclink.html pdf="manuel-bridge-filaire-smart-thermostat-x.pdf" title="Manuel du thermostat contrôleur de chaudière sur pile du kit smart thermostat X Tado°" %}

### Smart thermostat X

{% include product-embed.html image="starter-kit-tado-smart-thermostat-x.png" title="Smart Thermostat X" brand="Tado°" description="starter kit pour contrôler ton chauffage Tado version filaire" amazlink="4bWSDTr" %}

Le **tado° smart starter X** est un kit de démarrage fourni avec:

- un **thermostat intelligent** digital intégrant la fonction de contrôleur de chaudière filaire avec un thermostat d'ambiance digital.
- un **bridge** intégrant le protocole border router **thread** à brancher sur prise.

{% picture posts/{{ page.guid }}/tado-smart-thermostat-x-starter-kit.png --alt Déballage tado smart starter X --img width="940" height="529" %}

Commençons par le déballage du thermostat. tu trouveras dans la **boîte un emballage propre et bien pensé**, bon ça tout le monde s'en fou, *mais je tenais à le souligner*. **Comme pour tout les produits tado° tu trouveras sous le couvercle un carton avec le qrcode Matter et le code d'authentification fait attention à bien le garder**, il pourrait t'être utile en cas de décrochage du système. Mais ça ne devrait pas arriver.

**À l'intérieur du carton tu trouveras:**

- le thermostat
- le **support murale** avec la connectique
- des autocollants de marquage filaire
- un ensemble de **visses, chevilles et autocollants** double face pour fixer le support au mur.

Tu noteras qu'il n'y a pas de **notices papiers** juste une petite notice générale ( non présente sur la photo ) mais pour avoir à la notice complète: rends toi dans l'applucation Tado: **Paramètres > pièces et appareils** ensuite **clic sur le produit concerné** et va sur **instructions d'installations**. 

{% picture posts/{{ page.guid }}/starter-kit-smart-thermostat-x.png --alt Déballage du thermostat intelligent(smart-starter-x) --img width="940" height="529" %}

Le contrôleur tado° **fonctionne avec 3 piles de type AAA** qui sont fournis, il fait aussi office de sonde de température et d'humidité, tu retrouveras sur la face arrière le **qrcode d'intégration Matter** ainsi que les picos de liaisons électriques.

{% picture posts/{{ page.guid }}/connectionface-arriere-chaudiere-starter-kit-smart-thermostat-x.png --alt Face arrière et connectique du thermostat intelligent(smart-starter-x) --img width="940" height="529" %}

#### Connection Chaudière

Les **autocollants fournis avec** son là pour numéroter les cables filaires. Tu trouveras en enlevant la petite visse l'espace pour relier les cables de communications de ta chaudière.

Tout d'abord il y a **Com/NC/NO/P1/P2**, tout ces branchements sont disponibles mais en général la plupart des chaudières classiques fonctionnent avec deux fils l'un pour le **port Com** et l'autre pour **NO ( normalement ouvert )**, pour P1 et P2 ils sont là pour les chaudières à 3 fils. 

Pour avoir le maximum [d'infos de branchements](https://help.tado.com/fr/articles/3387234-ou-puis-je-trouver-les-instructions-d-installation-pour-mes-appareils-de-chauffage-tado){: target="_blank"}, et surtout parce que la notice n'est pas fournis avec, rends toi dans l'application Tado: **Paramètres > pièces et appareils** ensuite **clic sur le produit concerné** et va sur **instructions d'installations**.

Ensuite il ya un branchement 2 fils pour le [protocole Opentherm](https://www.opentherm.eu/){: target="_blank"}, si ta chaudière fonctionne avec il faudra la connecter voir la notice de ta chaudière mais tu retrouves aussi ces infos dans les **instructions d'installations**.

{% picture posts/{{ page.guid }}/connection-chaudiere-starter-kit-smart-thermostat-x.png --alt Connection chaudière du thermostat intelligent(smart-starter-x) --img width="940" height="529" %}

#### Le bridge tado X

C'est le **bridge qui embarque le protocole de liaison Thread**, il n'est pas obligatoirement indispensable si tu possèdes déjà un autre bridge/dongle Matter/Thread, car pour rappel ce sont des protocoles ouvert avec une communication multi-marques. Mais si tu n'as pas de passerelle il faudra absolument connecter ce Bridge. **Il a un gros point négatif, il se connecte sur une prise donc il monopolisera une de tes prises**. pour le reste l'intégration est parfaite.

> Il est fourni avec deux adaptateurs Uk/Eu

{% include doclink.html pdf="manuel-bridge-smart-thermostat-x.pdf" title="Manuel du bridge du kit smart thermostat X Tado°" %}

{% picture posts/{{ page.guid }}/presentation-bridge-tado-x-prise.png --alt Présentation du bridge branchement secteur Tado X liaison Thread --img width="940" height="529" %}

Sur la face avant seul un bouton wps est disponible, **il te simplifiera la vie** pour te connecter sur le réseau domestique wifi, il sert aussi de bouton factory reset.

Quand **tu le branche** la lumière située en bas, correspond à la connection secteur, s'allume, la lumière juste au dessus clignote, celà t'indiques que le **bridge est prêt à s'appairer** dans l'envirronnement Matter. Une fois connecté à **l'appli Tado°, les 3 lumières apparaitrons** pour te dire que le bridge est dans la place .

{% picture posts/{{ page.guid }}/code-lumiere-bridge-tado.png --alt Code lumière du bridge branchement secteur Tado X liaison Thread --img width="940" height="529" %}

#### Réinitialisation usine

**Tous les produits tado sont réinitialisables**, pratique si tu rencontres des soucis d'intégrations dans l'application.

[rends toi sur cette page](https://help.tado.com/fr/articles/8943122-comment-puis-je-reinitialiser-mes-appareils-tado-x-aux-reglages-d-usine){: target="_blank"} pour trouver toutes les informations.

#### Caractéristiques techniques

|Dimensions|Thermostat Intelligent filaire X: 104 x 104 x 18 mm<br>Bridge X: 60 x 60 x 31 mm|
|Alimentation|Piles du Thermostat Intelligent X : 3 AAA (LR03) de 4,5 V, CC 1 200 mAh. Bridge X : tension de service 230 V, consommation d’énergie 0,7 W.|
|Connexion|Le Thermostat Intelligent X se connecte à Internet avec le Bridge X. Vous pouvez brancher le Bridge X dans une prise pour qu’il se connecte au routeur Wi-Fi. Pour installer tado°, votre appareil mobile doit être équipé au minimum d'iOS 16.4 ou d'Android 9.0.|
|finition|Thermostat Intelligent filaire X: PC, ABS. Bridge X: PC.|
|Interface|Thermostat Intelligent filaire X: Affichage 49 x 30mm LCD, rétro-éclairage LED; input : 3× pression. Bridge X: 4 x LED.|
|Garantie|Nous vous offrons une garantie de 10 ans sur tous les produits tado° X.|

#### **les + du smart thermostat X** {{ page.ref }}
{: .blue}

- Qualité des produits
- piles fournis
- Contrôle ta chaudière top pour les économies
- fonction sonde et thermostat ( température et humidité )
- Protocole Matter/Thread
- fonction thermostat central
- **Tado° garantie tout ses produits 10 ans**

#### **les - du smart thermostat X** {{ page.ref }}
{: .red}

- Le bridge Thread monopolise une prise
- l'écran thermostatique ne fonctionne que sur pile pas sur secteur
- l'écran ne contrôle que des chaudières à branchement d'ordres filaires (Com/No)
- ne permet pas de désactiver la fonction thermostat ( mais juste de l'éteindre )
- pas de notices papier
- le prix 200€

### Wireless smart thermostat X

{% include product-embed.html image="kit-wireless-smart-thermostat-x-tado.png" title="Wireless Smart Thermostat X" brand="Tado°" description="starter kit pour contrôler ta chaudière avec thermostat d'origine reliée sans fil Tado fonctionne aussi en filaire" amazlink="3DNUEoy" %}

Le **starter kit wireless** a des fonctionnalités proche du smart thermostat X, mais l'approche est différente.

**Dans ce pack** le contrôleur Thread est groupé avec le contrôleur de chaudière *( pour les systèmes de chaudières communiquant sans fil  entre le thermostat et la chaudière )*, **mais il permet aussi** de communiquer **avec la chaudière de façon filaire** comme le smart Thermostat X.
Il se différencie de son homologue grâce au déport **d'une sonde thermostatique**.

{% picture posts/{{ page.guid }}/kit-wireless-smart-thermostat-x.png --alt Contenu du kit de démarrage Wireless smart thermostat x par Tado° --img width="940" height="529" %}

> À l'intérieur du pack on trouve le contrôleur et une sonde thermostatique déportée.

{% picture posts/{{ page.guid }}/deballage-wireless-smart-thermostat-x.png --alt Déballage du kit de démarrage Wireless smart thermostat x par Tado° --img width="940" height="529" %}

#### Module wireless bridge

Le **module bridge du wireless pack** est relativement bien fait, à l'intérieur du pack tu trouveras un controleur avec un cable secteur que l'on peut dévisser, des autocollants, un kit de visses et chevilles, un jeu de 3 cables afin de connecter P1/P2 et P3. 

{% include doclink.html pdf="manuel-bridge-wireless-smart-thermostat-x.pdf" title="Manuel de branchement du bridge wireless smart thermostat X" %}

Sur la **face haute deux boutons sont disponibles**, l'un concerne la fonction wps et l'autre te permet d'enclancher la chaudière ou la fonction boost manuellement.

{% picture posts/{{ page.guid }}/kit-wireless-smart-thermostat-x-module-connection-chaudiere.png --alt Déballage du module de gestion chaudière avec protocole Thread du démarrage Wireless smart thermostat x par Tado° --img width="940" height="529" %}

**Pour accéder** à la connectique il te suffit de déboiter la coque de façon simple.
**Sous cette coque** on retrouve le qrcode d'appairage Matter ainsi que de nombreuses inscriptions au niveau des voyants.

{% picture posts/{{ page.guid }}/kit-wireless-smart-thermostat-x-module-connection-chaudiere-sous-le-capot.png --alt Présentation connectique et code lumière du module de gestion chaudière avec protocole Thread du démarrage Wireless smart thermostat x par Tado° --img width="940" height="529" %}

**Pour les voyants en partant de la gauche tu as:**

- le voyant d'alimentation
- les **3 voyants de connections** au réseau wifi domestique
- le voyant **reset/boost/chauffage**
- un voyant relay (il doit être lié soit aux entrées P1/2/3 ou à l'opentherm )
- un voyant pour la fonction **opentherm**

{% picture posts/{{ page.guid }}/kit-wireless-smart-thermostat-x-module-connection-chaudiere-explication.png --alt Explication connectique et code lumière du module de gestion chaudière avec protocole Thread du démarrage Wireless smart thermostat x par Tado° --img width="940" height="529" %}

**Pour la partie branchement en partant de la gauche tu as:**

- le branchement de la prise ( Neutre / Phase / Phase )
- un branchement com/Nc/No pour relier à la chaudière ( identique au smart thermostat X )
- un branchement P1/2/3 **( je n'ai pas trouvé d'infos de branchements à ce sujet )**
- un branchement modbus opentherm

#### sonde température déportée sur pile

La **sonde de température** fournis avec le wireless kit est similaire au thermostat digital tado, cependant comme elle fait office de sonde de température uniquement, **tu ne trouveras aucunes connectiques pour la chaudière ou branchements opentherm**.

{% picture posts/{{ page.guid }}/presentation-sonde-thermostatique-deporte-fournis-avec-wireless-smart-thermostat-x.png --alt présentation sonde thermostatique déporté fourni avec le kit de démarrage Wireless smart thermostat x par Tado° --img width="940" height="529" %}

{% include doclink.html pdf="sonde-de-temperature-tado-x-manuel.pdf" title="Manuel de branchement de la sonde déportée Tado°" %}

**Elle est livrée avec**:

- un support mural
- des visses et autocollants
- 3 x piles AAA
- carton d'information Matter.

{% include product-embed.html image="sonde-temperature-deporte-tado.png" title="Sonde de temperature déporté tado" brand="Tado°" description="Sonde de température déportée Tado communique directement avec les robinets thermostatiques Tado" amazlink="4hAdtt7" %}

**Dans l'envirronnement Tado°** ( en passant par l'application ), la **sonde de température** ou même le thermostat, **ont leurs importances**.
Lorsque tu les intègrent **dans la même pièce** qu'un ou plusieurs robinets thermostatiques tado X, **ce ne seras plus la température** du robinet qui sera relevé ( car elle peut être faussée du fait de la proximité des radiateurs ) **mais ce sera la température relevée par la sonde qui sera utilisé**. 

> Et ceux sans avoir besoin de remédier à une automatisation.

{% picture posts/{{ page.guid }}/explication-association-sonde-temperature-et-robinet-thermostatique-tado-x.png --alt explication du fonctionnement de la liaison directe entre une sonde de température déportée tado et un robinet thermostatique tado x --img width="940" height="529" %}


#### **les + du wireless smart thermostat X** {{ page.ref }}
{: .blue}

- Qualité des produits
- piles fournis avec la sonde déportée
- **Tado° garantie tout ses produits 10 ans si déclaré sur le site**
- la sonde de température peut être installée ou bon nous semblent
- le contrôleur peut être relié sur le 230v
- le contrôleur est compatible avec les **chaudières filaires et celles qui communiquent sans fil**

#### **les - du wireless smart thermostat X** {{ page.ref }}
{: .red}

- Impossibilité de le faire fonctionner sur pile
- le prix 200€

## Intégration dans Home Assistant

Il existe **plusieurs façons d'intégrer les thermostats, sondes et robinets Tado° dans Home Assistant** notemment par le biais d'une clé Thread externe au bridge Tado. 

Cependant si tu désires **concerver la fonction boost**{: .red} sans devoir créer une automatisation dans HA et **notemment la liaison entre la température des sondes ou thermostats avec les robinets thermostatiques** je te suggère de réaliser toute l'installation dans l'application Tado et **ensuite de partager les produits avec home assistant grâce à Matter.**

**Pour ce faire:**

**Vas dans l'app tado puis:**

- paramètres et appareils
- sélectionne un appareil sauf le bridge
- va en bas de la page et clic sur **liaison de l'appareil Matter**
- 
{% picture posts/{{ page.guid }}/partage-les-appareils-tado-avec-home-assistant-grace-a-matter.png --alt Je vais te montrer comment partager des appareils tado entre l'appli officielle et home assistant --img width="940" height="529" %}

**Ensuite apparait l'interface Matter sur smartphone:**

- clic sur **l'icone Home Assistant** si ça ne fonctionne pas tu peux aussi sélectionner une des deux autres intégrations.

> il te suffit ensuite **de suivre les étapes**.

{% picture posts/{{ page.guid }}/partage-les-appareils-tado-avec-home-assistant-grace-a-matter-2nd-etape.png --alt 2nd étape des appareils tado entre l'appli officielle et home assistant --img width="940" height="529" %}

**Maintenant les appareils sont partagés à home assistant**

Ci-dessous un gif animé de l'intégration du robinet thermostatique.

![Partage du robinet thermostatique Tado X dans home assistant]({{ site.baseurl }}/assets/images/posts/158/integration-robinet-thermostatique-tado-x-dans-home-assistant.webp{{ cachebuster }}){: width="940" height="716" class="lazyload pictaninpost"}{: target="_blank"}

Ci-dessous un gif animé de l'intégration du thermostat contenu dans le kit smart thermostat X.

![Partage du smart thermostat Tado X dans home assistant]({{ site.baseurl }}/assets/images/posts/158/integration-starter-kit-smart-thermostat-x.webp{{ cachebuster }}){: width="940" height="719" class="lazyload pictaninpost"}{: target="_blank"}

> **Voilà en deux temps, trois mouvements** nous avons partagés les appareils Tado° dans home assistant, **merci Matter.**

## Compréhesion sur les termes

Quand j'ai commandé les produits pour tester l'envirronnement, je t'avouerai que j'étais perdu **sur le choix du starter kit**, pourquoi, à cause des termes employés par Tado.

1. Le smart thermostat Kit est donné par Tado° comme un thermostat filaire mais celui-ci fonctionne sans fil ( pile AAA fourni).
2. Le smart thermostat X Wireless est donné par Tado° comme un thermostat sans fil mais le module fonctionne sur le secteur 230V

**Alors ce qu'annonce Tado° n'est pas faux, car ils parlent de la liaison entre le thermostat d'origine et la chaudière.** 
Mais ça il faut le savoir 😉

## Maintenant, lequel choisir ?

En te **posant les bonnes questions** tu pourras facilement choisir entre le kit de démarrage **Smart Thermostat X** ou le **Wireless Smart Thermostat X**.

1. Si la **liaison entre le thermostat d'origine et la chaudière est sans fil** et si celle-ci est compatible avec Tado° alors il n'y a pas de question à se poser, **il faudra prendre le Wireless Smart Thermostat X**.
2. Si ton thermostat d'origine fonctionne **sur pile et que tu n'as pas de 230v** à proximité il faudra prendre **le Smart Thermostat X**
3. Si l'emplacement de ton thermostat **n'est pas situé dans une pièce chauffée** ( couloir ... ) je te conseil **le Wireless smart thermostat X**
4. Si tu souhaites déporter la sonde de température de ton contrôleur de chaudière je te conseil **le Wireless smart thermostat X**
5. Si tu souhaites brancher le contrôleur Thread sur 230v hors prise je te conseil **le Wireless smart thermostat X**
6. Si la connection à ta chaudière est plus complexe avec branchement (p1, p2 et p3) je te conseil **le Wireless smart thermostat X**
7. Si ton **thermostat d'origine est situé dans une pièce chauffée** et s'il ne peut fonctionner qu'à l'aide de piles je te conseil **le smart thermostat X**

> Tu l'auras compris **comme les deux kits peuvent contrôler ta chaudière** à l'aide des ports **Com/No** dans la plupart des cas je te conseil de prendre le **kit de démarrage Wireless Smart Thermostat X**.

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Le prix dans tout ça ?

- Un kit de démarrage **Smart Tado X ou wireless coûte 200€** mais si tu es patient tado fait des offres promotionnelle allant de -40 à -50% y compris sur amazon.
- Un **robinet thermostatique tado X coûte 100€** là aussi si tu es patient tado fait des offres promotionnelle allant de -40 à -50% y compris sur amazon.
- Une **sonde thermostatique coûte 100€**

**Les tarifs sont élevés** mais Tado° a le mérite de **fabriquer actuellement les meilleurs produits du marché, facile à installer et à utiliser.**

{% include product-embed.html image="kit-wireless-smart-thermostat-x-tado.png" title="Wireless Smart Thermostat X" brand="Tado°" description="starter kit pour contrôler ta chaudière avec thermostat d'origine reliée sans fil Tado fonctionne aussi en filaire" amazlink="3DNUEoy" %}

## Conclusion

**Voilà un comparatif qui te permettra d'y voir plus claire** entre les deux kits de démarrages proposés par Tado°. Il faut retenir que le **kit wireless propose les mêmes fonctions que le kit Smart Thermostat Kit**, mais en plus il permet la liaison sans fil avec les chaudières compatibles. **Si ton contrôleur est dans une pièce non chauffée** comme c'est souvent le cas alors **je te conseil le kit wireless** à condition que tu puisses le brancher sur secteur. **Dans les autres cas je te conseil le smart thermostat X.**