---
guid: 54
title: "Conseil sur la domotisation d'une nouvelle maison"
description: "Afin de m'aider dans mes recherches je vais tenter de rédiger un article complet sur les conseils afin de ne rien oublier de domotiser quand on constrit une nouvelle maison, plus qu'un article un mémoire sur la construction et la domotique"
layout: post
authors: Nico
date: 2023-03-14 16:35
last_modified_at: 
categories: [Domotique, Haade-lab]
tags: [post]
image: 'conseil-domotisation-nouvelle-maison.png'
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
  - 
---
Lors d'une nouvelle construction il est difficile d'arriver à planifier son installation domotique, surtout quand on commence à découvrir cet univers ou de nombreux modules fonctionnant sous divers protocoles, sont présents sur le Marché. À travers cet article je vais essayer de détailler les différents types d'installations en fonction des protocoles et le montant d'une telle installation.

Contrairement à l'achat d'un habitat ancien où l'on adapte étape par étape son système domotique, la construction d'une maison neuve est plus délicate car en règle général on fait appel à un électricien qui est ou n'est pas formé domotique, et quand il l'est, il a souvent tendance à proposer des intégrations onéreuses de grande marque comme Legrand, Hager, etc... . Mais en fonction du choix de son installation on peut lui demander certaines spécificités de cablage qui peuvent te faire économiser des sous, tu le comprendras plus bas.

# ligne de conduite Générale:

1. Orienter son installation vers le **maximum de filaire** ( réseau rj45 et électrique )
2. Orienter son installation en **consultant le coût** ( très important lors d'une construction )
3. Si tu fais appel à un électricien essaye de te concentrer sur lu matériel connu ( [Gce electronics](https://www.domadoo.fr/fr/interface-domotique/5897-gce-electronics-automate-webserver-ipx800-v5.html?domid=39){: target="_blank"}, [cartelectronic](https://www.domadoo.fr/fr/suivi-energie/5224-cartelectronic-serveur-wes-v2-avec-ecran-antenne-rf-868-mhz.html?domid=39){: target="_blank"} ) par exemple.
4. **Fait un choix sur ton assistant multiprotocoles**, je te conseil Homeassistant ou Jeedom, Homeassistant car il est énormément développé par la communauté et les  modules sont tous gratuits, Jeedom car c'est le plus connu en france il est plus facile à mettre en place cependant l'interface manque de cachet et il faudra mettre dans certains cas la main à la poche pour l'achat de modules complémentaires.
5. Essaye d'intégrer ton [assistant domotique sur raildin]({% post_url /fr/2021-10-05-box-domotique-rail-din %}) dans ton tableau, souvent réalisable à base de raspberrypi.
6. prévoit un **onduleur** en cas de coupures de courant
7. évite de mélanger trop de protocoles max 2, un en filaire l'autre par onde.
8. prévoit des gaines supplémentaires 20mm pour les **(caméras, portails, sonnettes)**

Premièrement essaye d'orienter ton installation vers une intégration propre dit [(waf)](https://blog.jeedom.com/glossary/waf/){: target="_blank"} en français le facteur d'acceptation féminin **en gros si ça plait aux femmes tu auras gagné**.

# Étape 1 le tableau électrique
C'est le **coeur du système électrique** il faudra penser à l'intégration du cerveau domotique dans ce tableau grâce à des modules compatible raildin.
Essaye de prévoir:
1. un compartiment à proximité du tableau qui puisse accueillir un NAS afin de pouvoir enregistrer les vidéos
2. prévoit au moins 1 à deux rangées de libre pour accueillir les divers modules domotisés

# Éclairage
**ligne de conduite**
1. Oriente une intégration de type filaire
2. Évite les télérupteurs ( assez onéreux )
3. prévoit la phase sur chaque interrupteurs ( suivant le cas )

## 1 Domotisation au tableau

Se concentrer sur une intégration avec un automate tout en un est une bonne solution, entièrement autonome tu n'auras même pas besoin d'un assistant domotique, reliée par du rj45 la stabilité est au rendez-vous et le temps de réponse des actions seras instantané. 
- [Gce electronics](https://www.domadoo.fr/fr/interface-domotique/5897-gce-electronics-automate-webserver-ipx800-v5.html?domid=39){: target="_blank"}
- [cartelectronic](https://www.domadoo.fr/fr/suivi-energie/5224-cartelectronic-serveur-wes-v2-avec-ecran-antenne-rf-868-mhz.html?domid=39){: target="_blank"}
**Avantage:**
Certains installateurs connaissent ce type de systèmes, multi domaine d'activité tu pourras brancher tes lumières, volets, interrupteurs contact sec etc...
**l'inconvénient** il te faudra probablement rajouter des modules d'extensions et la facture peut vite devenir salé 500-700€, les branchements filaires se rapprochent du traditionnel donc tu n'économisera rien auprès de ton installateur.

## 2 domotisation à l'interrupteur

### Interrupteur connecté **( choix retenu )**
> Je penses que c'est la meilleur approche financière que tu puisses avoir !
Si tu décides de faire du tout en un c'est à dire de prendre directement un interrupteur connecté, tu en trouveras de très bonne qualité et de marque chinoise comme les Moes Star Ring à 20€ remisé, l'avantage est de demander à l'électricien de tirer une seule phase à l'ampoule par pièces et de tirer phase/neutre à chaque interrupteur le reste se fait par automatisation grâce au système domotique.
Même si tu utilises des interrupteurs libre de neutre dit enddevice, il te faudra tirer le neutre à l'interrupteur pour l'alimenter au final seul l'inter relié à l'ampoule pourra fonctionner sans. Je te conseil tout de même de choisir des interrupteurs de types router pour renforcer le maillage.

**Avantage:**
- économise la facturation des interrupteurs de marques legrand...
- le prix des interrupteurs intelligents
- économies de fils ( à l'ampoule ) y compris le va et vient et l'ajout de télérupteurs pour les pièces complexes.

**Inconvénient:**
- fonctionnement par automatisation et non filaire
- attention aux modules enddevices


### Module positionné derrière l'interrupteur

là ça veut dire que tu as déjà fait ton installation électrique ou que l'électricien ne te fais la pose qu'à ses conditions et tu veux tout de même domotiser l'éclairage.
Pense tout de même à demander des boîtes de dérivations adaptées aux modules domotiques.

**Avantage:**

- S'adapte à tous types d'installations
- trouve des micro modules libre de neutre

**Inconvénient:**

- Aucune économies réalisées auprès de ton installateur
- souvent l'installateur ne propose pas des boites de 60mm de fond ou de type BLM
- Surcoût pour la domotisation les lumières

# Mesure d'énergie

La mesure d'énergie est importante dans l'étape de domotisations d'une maison car elle permet de relever bien évidemment une valeur par rapport à une consommation et de voir si touts est conforme.
## Au tableau
Je te conseil au minimun de relever le conteur principal de ta maison linky ou anciens compteurs à l'aide de modules compatibles et pour ça tu n'as que l'embarras du choix. Si tu veux aller plus loin dans cette démarche alors relève par disjoncteur cette conso
les module tout en un type wes, ipx800 permettent ces relevés facilement.

## directement au modules ( notre choix )
du plus en plus de modules encastrés, d'interrupteurs et prises proposent ce typ de relevés, qui est très intéressant si tu souhaites cloisonner chaque mesure et savoir quel appareil exactement consomme cette énergie. **En complément pense à relever ton compteur principal**

# Secteur à domotiser
Malgré le thème des nouvelles constructions je vais aussi aborder les autres systèmes de chauffages car comme tu le sais depuis la RT2012 les système à énergies fossiles sont presques systématiquements bannis, et l'on te propose plus que pompes à chaleur air/air ou air/eau.

Si tu veux faire de réells éonomies d'énergies elles seront à réaliser sur le chauffage de ton logement et le chauffe-eau, cet onglet est très pratique et pourras te permettre d'amortir rapidement tes dépenses en domotique.
> Depuis la reprise de l'économie après la sortie du covid entre 2021 et 2022, grâce à homeassistant j'ai pu faire 6000KW d'économies ce qui est énorme.

**Chauffage:**
Domotiser son chauffage dépend énormément du facteur matériel. En france et dans la mjorité des cas on se chauffe à l'aide de:
- résistence électrique ( radiateur électrique, sèche serviette )
- circuit à eau ( gaz, fioul, pac et même électrique )
- circuit à air ( pac, VMC double flux )

**Dans tous les cas il faudra penser à domotiser le thermostat directement et non la prise ( disjoncteur )**

Résistence électrique:
- chauffage au sol tu trouveras tous types de résistences les Moes sont un bon choix ( attention à la charge du chauffage car la plupart des modules thermostatiques sont en rupture à 16A ) et il arrive que les grandes pièces comme le salon soit à 32A
- radiateur et sèche serviette, soit tu passes sur un module avec thermostat digitale grâce au fil pilote soit par l'intégration derrière le radiateur d'un micro-module compatible fil pilote. Pour la partie WAF je te conseil un thermostat Moes par exemple

# controlleur 
sur tableau
sur disjoncteur

# solaire
prévois les gaines en attentes et surtout choisis un onduleur domotisable

# volet
**Bannis les systèmes radio propriétaires et part sur du filaire**, facilement domotisable à moindre cout il te permettra de ne pas ajouter d'antennes rf433 ou 868 supplémentaires sur ton système embarqué, qui pourrait intéreférer

# garage, portail
prévoit les gaines en attente et concentre toi **sur des modules à contact sec**, si tu évois de mettre une sonnette au **portail** n'oublie pas de prévoir une gaine supplémentaire pour le RJ45 et ainsi installer une sonnette connectée

# Sécurité
## Caméra
Ici aussi prévoit en attente des gaines pour le rj45, rien de mieux pour la stabilité de réception et de contrôles des caméras.
