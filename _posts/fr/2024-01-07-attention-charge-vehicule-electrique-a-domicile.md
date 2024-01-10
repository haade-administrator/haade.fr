---
guid: 103
title: "Attention à la charge des véhicules électriques à domicile"
description: "Retour d'expérience sur les risques d'incendies des recharges des véhicules électriques à domicile et surveiller le problème grâce à la domotique."
ref: "TO-Q-SY2-JZT"
layout: post
author: Nico
date: 2024-01-06 10:13
last_modified_at: 
categories: [Securite, Tests, News]
tags: []
image: 'attention-risque-incendie-charge-ve-domicile.png'
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
rating: 4.4 
sourcelink:
  - https://fr.elcb.net/Les-produits/disjoncteur-intelligent-zigbee-protection-contre-les-surintensit%C3%A9s-sous-tension-%C3%A0-q-sy2-jzt/
  - https://forum.hacf.fr/t/disjoncteur-en-zigbee-vos-retours/28150/11
  - https://hackaday.com/2021/04/18/diy-wireless-serial-adapter-speaks-true-rs-232/
---
**Attention ! risque d'incendie des Wallbox sur les recharges à domiciles des véhicules éléctriques !**

Comme de plus en plus de personnes sur cette planète je possède un véhicule éléctrique que je charge exclusivement depuis plus de 5ans à domicile à l'aide d'un chargeur EV de marque [VE-tronic](http://ve-tronic.fr/store/wallbox){: target="_blank"}.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S8baef31dc3a5412982ec410791e4e5f2J/Disjoncteur-intelligent-Tuya-MCB-mesure-de-la-puissance-interrupteur-de-t-l-commande-protection-contre-les.jpg_.webp" title="Disjoncteur intelligent Tongou" brand="Tongou" description="Disjoncteur intelligent Tuya MCB, mesure de la puissance, interrupteur intelligent, protection contre les surintensités et les sous-tensions, WiFi, Zigbee, 1-63A, protection contre la surchaleur" affiliate="_DddSzXJ" %}

## Mésaventure

J'ai bientendu respecté la notice de pose sachant que l'ensemble fait passer 7200w, alors la liaison au tableau éléctrique est réalisée avec du **3G10** protégé par un interrupteur diférentiel de 40A **type A**{: .blue} et reliée à un disjoncteur Legrand de 40A en courbe C.

> Durant 5 ans je n'ai rencontré aucun soucis, la wallbox étant équipée de la téléinformation la surcharge d'intensité du domicile est évitée.

{% picture posts/{{ page.guid }}/disjoncteur-differentiel-legrand-brule-wallbox-garage.png --alt attention branchement wallbox disjoncteur 40A legrand a brulé suite à une surchauffe --img width="940" height="529" %}

**Et pourtant ce mois d'octobre 2023** le Disjoncteur 40A de marque Legrand a brûlé emportant le différentiel et fort heureusement une disjonction au niveau du compteur principal a eu lieu, le feu ne s'est pas propagé dans le tableau électrique.

> Alors que s'est-il passé et comment y remédier.

Pour commencer j'ai remplacé ce qui a brûlé **(différentiel type A/disjoncteur courbe C)**, j'ai baissé sur la wallbox l'ampérage de charge maximal. 
Si j'ai baissé l'ampérage de charge c'est pour éviter la chaleur au niveau du disjoncteur car je pense qu'une surchauffe est à l'origine de cette anomalie. 

avant de domotiser le système de charge j'ai mesuré la température lors de charges prolongées. **En chargant au maximum 32A la température s'élève à 55°C** dans tout le circuit de charge ( disjoncteur/différentiel 40A Legrand/cable/cablot de charge ).

**A 26A la température relevée est de 39°C**

Mais voilà je n'ai plus confiance en cette méthode de branchement **Legrand** du moins pour la charge du véhicule. Alors que faire pour surveiller ce type de risque et éviter l'incendie du logement, surtout qhe le logement est tout électrique et que je charge la plupart du temps le véhicule la nuit.

Premièrement j'ai installé à proximité du tableau électrique une sirène zigbee à incendie.

{% include product-embed.html guid="2175" %}

J'ai rajouté en plus du différentiel/disjoncteur 40A un commutateur intelligent zigbee avec de nombreuses fonctions le Tongou {{ page.ref }}.

> A là tu te dis, il n'a pas confiance en Legrand et il rajoute au circuit une marque chinoise !

Effectivement tu n'as pas tort, pour respecter j'ai d'abord cherché du côté des grandes marques mais **je n'ai pas trouvé un disjoncteur de 40A et qui mesure la chaleur.** Alors je me suis tourné vers Aliexpress et j'ai vu ce commutateur {{ page.ref }} qui fonctionne sous le protocole Zigbee et Tuya. Pour me rassurer j'ai fait des recherches sur le Net et le Tongou {{ page.ref }} est [fabriqué par la société ELCB](https://fr.elcb.net/faq/){: target="_blank"}, elle fabrique du matériel éléctrique depuis 30 ans et travail entre autre avec les marques (Thyssenkrupp, Haski, STD, HL, Vistar...).

## Rappel

{%- include alert.html type="warning" text="Vous allez devoir travailler au voisinage d'une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique. Prenez garde à vos manipulations, en cas de doute coupez l'alimentation électrique." %}

Un **différentiel** est là pour protéger les personnes **en cas de fuites de courants** supérieur à 30ma
Un **disjoncteur** protège le matériel contre **les surintensités ou les court-circuits**

[Info Norme Ce des disjoncteurs pour la France](https://fr.electrical-installation.org/frwiki/Normes_et_description_des_disjoncteurs#:~:text=Les%20disjoncteurs%20industriels%20doivent%20%C3%AAtre,conformes%20aux%20normes%20CEI%2060898.){: target="_blank"}

## Présentation du Tongou {{ page.ref }}

Pour commencer comme j'ai pu le lire ici et là et dans certains titres du produit:
> ce module n'est pas un **disjoncteur mais un commutateur**, il doit être branché en complément de celui-ci, car il ne joue pas le rôle de coupe circuit.

Le {{ page.ref }} a des caractéristiques exceptionnelles. **Pour commencer la qualité est très correcte du moins sur l'aspect visuel**, *je ne l'ai pas ouvert.* Les caractéristiques du module sont nombreuses, la plus intéressante concerne le réglage de l'ampérage paramétrable entre 1 et 63A. 
La notice fournie avec le module est très bien rédigée **tu pourras la télécharger un peu plus bas.**

{% picture posts/{{ page.guid }}/presentation-switch-rail-din-tongou-TO-Q-SY2-JZT.png --alt présentation du switch rail-din tongou TO-Q-SY2-JZT --img width="940" height="529" %}

**La façade noir du module affiche les infos du module:**
1. l'ampérage maximal de 1 à 63A réglable via l'appli officielle ou ton assistant
2. Le voyant de connection au réseau Zigbee (bleu fixe) lorsqu'il est connecté
3. L'interrupteur physique le voyant central passe au rouge


{% picture posts/{{ page.guid }}/descriptif-facade-switch-tongou-TO-Q-SY2-JZT.png --alt descriptif façade du switch rail-din tongou TO-Q-SY2-JZT --img width="940" height="529" %}

### Comparaison avec un disjoncteur NF Legrand

De face les modules se ressemblent de part les dimension et c'est une bonne chose, l'aspect le plus choquant et la couleur noir du commutateur, mais ça n'a que peu d'importance à mes yeux.

{% picture posts/{{ page.guid }}/comparatif-tongou-TO-Q-SY2-JZT-disjoncteur-legrand-c40.png --alt comparatif façade du switch rail-din tongou TO-Q-SY2-JZT et disjoncteur NF Legrand --img width="940" height="529" %}

Tu pourras te rendre compte que le Tongou {{ page.ref }} affiche toutes les normes CE sur le module et l'entreprise est aux normes ISO9001

{% picture posts/{{ page.guid }}/comparatif-tongou-TO-Q-SY2-JZT-disjoncteur-legrand-c40-coté.png --alt comparatif façade du switch rail-din tongou TO-Q-SY2-JZT et disjoncteur NF Legrand sur le côté --img width="940" height="529" %}

C'est au niveau des borniers que l'on notera une différence entre l'écart du neutre et de la phase par rapport aux normes NF, ce qui pourrait poser problème en théorie si tu utilises des peignes en branchement. Mais pour le Tongou {{ page.ref }} ça n'importe peu, du fait qu'il se branche en complément d'un disjoncteur à la sortie de celui-ci. Ci-dessous une capture du branchement au niveau du tableau éléctrique **( j'ai utilisé du 3G10 pour la charge VE )**

{% picture posts/{{ page.guid }}/comparatif-bornier-tongou-TO-Q-SY2-JZT-legrand-disjoncteur.png --alt comparatif façade du switch rail-din tongou TO-Q-SY2-JZT et disjoncteur NF Legrand face bornier --img width="940" height="529" %}

### Quel intérêt du Tongou {{ page.ref }}

Pour moi l'intérêt est de mesurer la température à l'intérieur des composants et de domotiser une coupure en fonction d'une éventuelle surchauffe. Et le Tongou {{ page.ref }} mesure la température 👍. 

> Et peut-être de baisser la température de charge du système qui sait ...

### Caractéristique du {{ page.ref }}

**Le commutateur intelligent Tongou {{ page.ref }} protège:**

- le circuit contre les surcharges
- le circuit contre les surtensions
- le circuit contre les soutensions
- le circuit contre les surintensités
- le circuit contre les températures élevées

### Contrôle par la domotique

**Et c'est là que le module est fort intéressant**, il concerne le nombre de fonctionnalitées paramétrable et controlable à distance grâce à ton assistant préféré.

**Tu pourras dans ZHA, Zigbee2mqtt, Tuya et smartlife:**

1. contrôler l'allumage
2. la mémoire en cas de coupure du courant
3. paramétrer le mode de l'éclairage de l'interrupteur de fonctionnement
4. mesurer la puissance instantanée
5. mesurer l'ampérage instantané
6. faire remonter dans le dashboard l'énergie cumulée ( home assistant )
7. la température interne
8. la coupure en cas de température élevée ainsi que le seuil de cette température
9. la coupure en cas de surcharges ainsi que le seuil de surcharge
10. la coupure en cas de surintensité ainsi que le seuil d'ampérage
11. la coupure en cas de surtension ainsi que le seuil
12. la coupure en cas de soutension ainsi que le seuil
13. la qualité du lien zigbee (Z2M et Tuya)

> Alors là c'est très impressionnant surtout que j'ai acheté ce commutateur 15€ et il est garantie 2ans.

{% include videoPlayer.html youtubeId="XdC2B13nKRg?si=U1b3yoDo5KX1b4sd" %}

## Intégration dans Zigbee2mqtt

Dans cet article j'ai repris que l'intégration dans Zigbee2mqtt pour éviter de surcharger la rédaction. Bref au moins tu pourras te rendre compte du nombre d'infos pouvant être utilisé grâce à Z2M.

Pour commencer l'inclusion est simple, rapide et stable. Le commutateur et bien reconnu **comme routeur**.

{% picture posts/{{ page.guid }}/tongou-TO-Q-SY2-JZT-onglet-infos-fonction-zigbee2mqtt.png --alt intégration zigbee2mqtt onglet info façade du switch rail-din tongou TO-Q-SY2-JZT --img width="940" height="647" %}

Au niveau des expositions des commandes, je sais la liste est longue rien de mieux qu'une image pour les énumérer.
- J'ai inversé l'indicateur du bouton physique

**mis une extinction du module en cas de:**

- température supérieur à 60°C
- si la puissance est supérieur à 8kw
- si l'ampérage est supérieur à 33A
- si le voltage est inférieur à 215 ou supérieur à 245V

{% picture posts/{{ page.guid }}/tongou-TO-Q-SY2-JZT-onglet-expose-fonction-zigbee2mqtt.png --alt intégration zigbee2mqtt onglet fonctions dispos du switch rail-din tongou TO-Q-SY2-JZT --img width="940" height="1022" %}

## Qu'est-ce qui aurait pu être amélioré

Mise à part la partie du visuel hardware qui aurait pu être plus conforme aux **standard Legrand/hager**, ce qui me dérange le plus se situe au niveau de l'éclairage de la Led d'affichage de la connectivité Zigbee.

**Après inclusion dans ton système préféré la Led reste bleu et d'ailleurs assez intense. La gestion aurais-pu être moins voyante par exemple chez Legrand Netatmo.**
Le voyant est:
- rouge quand le module est hors réseau
- vert quand le module est intégré
- s'éteint après intégration totale du module
- se rallume en vert quand tu met ton système en mode inclusion

**Mais bon un tel module coûte entre 55 et 80€**

Deuxième chose qui aurait pu être amélioré est le rajout d'entrées pour paramétrer **ton système d'éclairage de type télérupteur** 

> Enfin Le Tongou {{ page.ref }} aurait pu être un disjoncteur et non un commutateur afin d'éviter la surcharge de module dans le tableau éléctrique

## Mesure des températures

{% include product-embed.html image="https://ae01.alicdn.com/kf/S8baef31dc3a5412982ec410791e4e5f2J/Disjoncteur-intelligent-Tuya-MCB-mesure-de-la-puissance-interrupteur-de-t-l-commande-protection-contre-les.jpg_.webp" title="Disjoncteur intelligent Tongou" brand="Tongou" description="Disjoncteur intelligent Tuya MCB, mesure de la puissance, interrupteur intelligent, protection contre les surintensités et les sous-tensions, WiFi, Zigbee, 1-63A, protection contre la surchaleur" affiliate="_DddSzXJ" %}

### Branchement sans disjoncteur

Pour réaliser ce test le temps de relever la température j'ai branché le différentiel et directement le commutateur {{ page.ref }} en laissant un espace entre les deux.
Lors d'une phase de charge du véhicule à 32A Le Tongou {{ page.ref }} passe de 20°C à 37°C maximum comme le montre le graphique ci-dessous.

{% picture posts/{{ page.guid }}/mesure-charge-temperature-tongou-seul-sans-disjoncteur.png --alt mesure des températures lors d'une charge ve du tongou TO-Q-SY2-JZT --img width="940" height="250" %}

### Branchement avec disjoncteur

Ensuite j'ai branché le **disjoncteur** en plus du différentiel et du commutateur le tout accolé dans le tableau éléctrique ( pour rappel la température mesurée sur le disjoncteur Legrand branché sans le Tongou s'élevait à **55°C**{: .red} en pleine charge )
Lors d'une phase de charge du véhicule à 32A la température passe de 22 à **46°C**{: .orange} comme le montre le graphique ci-dessous.

{% picture posts/{{ page.guid }}//mesure-charge-temperature-tongou-avec-disjoncteur.png --alt mesure des températures lors d'une charge ve du tongou TO-Q-SY2-JZT accolé disjoncteur --img width="940" height="230" %}

### Récap

1. différentiel + disjoncteur **55°C**{: .red}
2. différentiel + commutateur tongou **37°C**{: .blue}
3. différentiel + disjoncteur + commutateur **46°C**{: .orange}

## Documents Tongou {{ page.ref }}

{% include doclink.html pdf="SY2-wi-fi-zigbee-Tongou-manuel-utilisation.pdf" title="Manuel d'utilisation du disjoncteur Tongou TO-Q-SY2-JZT" %}

{% include doclink.html pdf="SY1-SY2-Smart-Switch-EMC-CE-certificate.pdf" title="Certification CE EMC disjoncteur Tongou TO-Q-SY2-JZT" %}

{% include doclink.html pdf="SY1-SY2-wi-fi-Smart-Switch-CE-RED-LVD-EMC-certificate.pdf" title="Certification CE RED LVD disjoncteur Tongou TO-Q-SY2-JZT" %}

## Caractéristiques techniques {{ page.ref }}

|Type de produit ou de composant|TO-Q-SY2-JZT|
|Application|Vie intelligente, électrique intelligent, Tuya|
|Support tiers|Home Assistant, Zigbee2MQTT|
|Description des pôles|1P+N (Pôle Direct N)|
|Fonction|Minutage, compte à rebours, synchronisation de boucle, mesure, surintensité, sous-tension, surtension, surpuissance, protection contre les hautes températures.|
|Courant nominal (In)|1 – 63A|
|Plage de tension de fonctionnement|AC 90V – 280V|
|Fréquence nominale|50 Hz/60 Hz|
|Type de contrôle|À distance, manuel|
|Protocole de communication|Zigbee 3.0|
|Prise en charge du système d'exploitation|Android, iOS, HarmonyOS|
|Passerelle Zigbee|(Sans fil / Filaire)|
|Langue de fonctionnement|Avec langue système|
|Langue de l'application|Suivez la langue du système d'exploitation|
|Assistance vocale|Amazon Alexa, Yandex Alice, Google Assistant..|

## **les + du produit** {{ page.ref }}
{: .blue}

- le **prix** environ 16€
- compatible zigbee 3.0
- compatible Zigbee2mqtt (Home Assistant, Gladys, Jeedom)
- compatible ZHA
- compatible Tuya/Smartlife
- ne surchauffe pas
- Google Assistant
- Amazon Alexa
- **Très Nombreuses fonctions**
- Normes CEI 60947-1
- Garantie 2 ans


## **les - du produit** {{ page.ref }}
{: .red}

- n'assure pas le rôle de court-circuit
- n'est pas considéré comme un disjoncteur mais d'un commutateur
- la gestion de la Led de connectivité Zigbee n'est pas paramétrable
- n'assure pas le rôle de télérupteur
- en amont doit être branché un différentiel et un disjoncteur dédié par circuit.

## Prochaine étape domotiser la Wallbox ve-tronic

**La Wallbox à 5 ans et elle n'est pas par défaut domotisable**, mais j'ai une possibilité de le faire en RS232 et je vais m'y atteler ainsi je pourrais commander l'allumage ou l'extinction, mais aussi modifier l'ampérage, ainsi en cas de surchauffe au lieu de couper le courant de la Wallbox je n'aurai qu'à demander à abaisser l'ampérage et ce sera top.

Depuis peu **C4Software** à sorti un répertoire pour pouvoir domotiser la Wallbox ce-tronic avec un RS232 et esp8266, [il est consultable ici](https://github.com/c4software/vetronic-esphome){: target="_blank"}

## Gros coup de gueule

**On nous rabâche constamment que Legrand, c'est de la qualité**, suivant certains c'est le top NF, mais là je ne peux qu'exploser, rien que le prix totalement démentiel de plus ces disjoncteur ne sont même pas capable de maintenir une température décente **alors qu'un module chinois fait mieux**.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S8baef31dc3a5412982ec410791e4e5f2J/Disjoncteur-intelligent-Tuya-MCB-mesure-de-la-puissance-interrupteur-de-t-l-commande-protection-contre-les.jpg_.webp" title="Disjoncteur intelligent Tongou" brand="Tongou" description="Disjoncteur intelligent Tuya MCB, mesure de la puissance, interrupteur intelligent, protection contre les surintensités et les sous-tensions, WiFi, Zigbee, 1-63A, protection contre la surchaleur" affiliate="_DddSzXJ" %}

## Conclusion

Si comme moi tu recharges sur une borne dédiée à ton véhicule éléctrique, je te conseil vivement de surveiller la chaleur des composants du tableau. Vu le prix des modules Legrand la chauffe est considérable et selon moi c'est une part inadmissible. Le fait de brancher un commutateur supplémentaire au circuit pourras te permettre de commander l'extinction de la charge en cas de surchauffe mais aussi de mesurer la consommation sur un circuit à part.
Concernant **le switch Tongou {{ page.ref }} je ne peux que te le conseiller**, tu pourras en rajouter pour commander les prises, l'éclairage, le chauffe eau etc ... et ça pour un prix plus que correcte. *Actuellement c'est le module Tuya qui fait remonter le plus d'informations dans Zigbee2mqtt.*

