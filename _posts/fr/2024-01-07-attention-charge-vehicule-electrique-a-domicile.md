---
guid: 103
title: "Attention à la charge des véhicules électriques à domicile"
description: "Retour d'expérience sur les risques d'incendies des recharges des véhicules électriques à domicile et surveiller le problème grâce à la domotique."
ref: "TO-Q-SY2-JZT"
layout: post
author: Nico
date: 2024-01-06 10:13
last_modified_at: 
categories: [Sécurité, News]
tags: []
image: 'attention-risque-incendie-charge-ve-domicile.png'
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
  - https://fr.elcb.net/Les-produits/disjoncteur-intelligent-zigbee-protection-contre-les-surintensit%C3%A9s-sous-tension-%C3%A0-q-sy2-jzt/
---

Comme de plus en plus de personnes sur cette planète je possède un véhicule éléctrique que je charge exclusivement depuis plus de 5ans à domicile à l'aide d'un chargeur EV de marque [VE-tronic](http://ve-tronic.fr/store/wallbox){: target="_blank"}.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S8baef31dc3a5412982ec410791e4e5f2J/Disjoncteur-intelligent-Tuya-MCB-mesure-de-la-puissance-interrupteur-de-t-l-commande-protection-contre-les.jpg_.webp" title="Disjoncteur intelligent Tongou" brand="Tongou" description="Disjoncteur intelligent Tuya MCB, mesure de la puissance, interrupteur intelligent, protection contre les surintensités et les sous-tensions, WiFi, Zigbee, 1-63A, protection contre la surchaleur" affiliate="_DddSzXJ" %}

J'ai bientendu respecté la notice de pose sachant que l'ensemble fait passer 7200w, alors la liaison au tableau éléctrique est réalisée avec du 3G10 protégé par un interrupteur diférentiel de 40A **type A**{: .blue} et reliée à un disjoncteur Legrand de 40A en courbe C.



Durant 5 ans je n'ai rencontré aucun soucis, la wallbox étant équipée de la téléinformation la surcharge d'intensité du domicile est évitée.

Et pourtant ce mois de Novembre 2023 le Disjoncteur 40A de marque Legrand a brûlé emportant le différentiel et fort heureusement une disjonction du différentiel du compteur principal a eu lieu, le feu ne s'est pas propagé dans le tableau électrique.

> Alors que s'est-il passé et comment y remédier.

Pour commencer j'ai remplacé ce qui a brûlé **(différentiel type A/disjoncteur courbe C)**, j'ai baissé sur la wallbox l'ampérage de charge maximal. 
Si j'ai baissé l'ampérage de charge c'est pour éviter la chaleur au niveau du disjoncteur car je pense qu'une surchauffe est à l'origine de cette anomalie. 

avant de domotiser le système de charge j'ai mesuré la température lors de charges prolongées. **En chargant au maximum 32A la température s'élève à 55°C** dans tout le circuit de charge ( disjoncteur 40A Legrand/cable/cablot de charge ).

**A 26A la température relevée est de 39°C**

Mais voilà je n'ai plus confiance en cette méthode de branchement **Legrand** du moins pour la charge du véhicule. Alors que faire pour surveiller ce type de risque et éviter l'incendie du logement, surtout qhe le logement est tout électrique et que je charge la plupart du temps le véhicule la nuit.

Premièrement j'ai installé à proximité du tableau électrique une sirène zigbee à incendie.

{% include product-embed.html guid="2175" %}

J'ai rajouté au différentiel/disjoncteur 40A un commutateur intelligent zigbee avec de nombreuses fonctions le Tongou {{ page.ref }}.

> A là tu te dis, il n'a pas confiance en Legrand et il rajoute au circuit une marque chinoise !

Effectivement tu n'as pas tort, pour respecter j'ai d'abord cherché du côté des grandes marques mais **je n'ai pas trouvé un disjoncteur de 40A et qui mesure la chaleur.** Alors je me suis tourné vers Aliexpress et j'ai vu ce disjoncteur {{ page.ref }} qui fonctionne sous le protocole Zigbee et Tuya. Pour me rassurer j'ai fait des recherches sur le Net et le Tongou {{ page.ref }} est [fabriqué par la société ELCB](https://fr.elcb.net/faq/){: target="_blank"}, elle fabrique du matériel éléctrique depuis 30 ans et travail entre autre avec les marques (Thyssenkrupp, Haski, STD, HL, Vistar...).

## Rappel
Un différentiel est là pour protéger les personnes en cas de fuites de courants supérieur à 30ma
Un disjoncteur protège le matériel contre les surintensités ou les court-circuits

## Quel intérêt du Tongou {{ page.ref }}

Pour moi l'intérêt est de mesurer la température à l'intérieur des composants et de domotiser une coupoure en fonction d'une éventuelle surchauffe.

## Le commutateur intelligent Tongou {{ page.ref }} protège:

- le circuit contre les surcharges
- le circuit contre les surtensions
- le circuit contre les soutensions
- le circuit contre les surintensités
- le circuit contre les températures élevées

## Contrôle par la domotique

Et c'est là que le module est fort intéressant, ça concerne le nombre de fonctionnalités paramétrables et controlables à distance grâce à ton assistant préféré.

Tu pourras contrôler das ZHA, Zigbee2mqtt, Tuya et smartlife

- contrôler l'allumage
- la mémoire en cas de coupure du courant
- paramétrer le mode de léclairage de l'indicateur de fonctionnement
- mesurer la puissance instantanée
- mesurer l'ampérage en instantané
- faire remonter dans le dashboard l'énergie cumulée ( home assistant )
- la température interne
- la coupure en cas de température élevée ainsi que le seuil de cette température
- la coupure en cas de surcharges ainsi que le seuil de surcharge
- la coupure en cas de surintensité ainsi que le seuil d'ampérage
- la coupure en cas de surtension ainsi que le seuil
- la coupure en cas de soutension ainsi que le seuil
- la qualité du lien zigbee (Z2M et Tuya)

> Alors là c'est très impressionnant surtout que j'ai acheté ce commutateur 15€ et il est garantie 2ans.

{% include videoPlayer.html youtubeId="XdC2B13nKRg?si=U1b3yoDo5KX1b4sd" %}

## Intégration dans Zigbee2mqtt

[Info Norme Ce des disjoncteurs pour la France](https://fr.electrical-installation.org/frwiki/Normes_et_description_des_disjoncteurs#:~:text=Les%20disjoncteurs%20industriels%20doivent%20%C3%AAtre,conformes%20aux%20normes%20CEI%2060898.){: target="_blank"}

## Qu'est-ce qui aurait pu être amélioré

Mise à part la partie du visuel hardware qui aurait pu être plus conforme aux standards Legrand/hager, ce qui me dérange le plus se situe au niveau de l'éclairage de la Led d'affichage de la connectivité Zigbee.

Après inclusion dans ton système préféré la Led reste bleu et d'ailleurs assez intense. La gestion aurais-pu être moins voyante par exemple chez Legrand Netatmo.
Le voyant est:
- rouge quand le module est hors réseau
- vert quand le module est intégré
- s'éteint après intégration totale du module
- se rallume en vert quand tu met ton système en mode inclusion

Mais bon un tel module coûte entre 55 et _à€

Deuxième chose qui aurait pu être amélioré est le rajout d'entrées pour paramétrer **ton système d'éclairage de type télérupteur.** Le Tongou {{ page.ref }}

## Documents Tongou {{ page.ref }}

{% include doclink.html pdf="SY2-wi-fi-zigbee-Tongou-manuel-utilisation.pdf" title="Manuel d'utilisation du disjoncteur Tongou TO-Q-SY2-JZT" %}

{% include doclink.html pdf="SY1-SY2-Smart-Switch-EMC-CE-certificate.pdf" title="Certification CE EMC disjoncteur Tongou TO-Q-SY2-JZT" %}

{% include doclink.html pdf="SY1-SY2-wi-fi-Smart-Switch-CE-RED-LVD-EMC-certificate.pdf" title="Certification CE RED LVD disjoncteur Tongou TO-Q-SY2-JZT" %}

## Caractéristiques

|Product or component type|TO-Q-SY2-JZT|
|Application|Smart Life, Smart Electric, Tuya|
|Third party support|Home Assistant, Zigbee2MQTT|
|Poles description|1P+N (Direct N Pole)|
|Function|Timing, Countdown, Loop timing, Metering, Over Current, Under Voltage, Over Voltage, Over Power, High Temperature Protection.|
|Rated Current (In)|1 – 63A|
|Operating voltage Range|AC 90V – 280V|
|Rated Frequency|50Hz/60Hz|
|Control Type|Remote, Manual|
|Communication Protocol|Zigbee 3.0|
|Operating system support|Android, iOS, HarmonyOS|
|Gateway	Zigbee|(Wireless / Wired)|
|Operating Language|With system language|
|App Language|Follow the operating system language|
|Voice Support|Amazon Alexa, Yandex Alice, Google Assistant..|

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

{% include product-embed.html image="https://ae01.alicdn.com/kf/S8baef31dc3a5412982ec410791e4e5f2J/Disjoncteur-intelligent-Tuya-MCB-mesure-de-la-puissance-interrupteur-de-t-l-commande-protection-contre-les.jpg_.webp" title="Disjoncteur intelligent Tongou" brand="Tongou" description="Disjoncteur intelligent Tuya MCB, mesure de la puissance, interrupteur intelligent, protection contre les surintensités et les sous-tensions, WiFi, Zigbee, 1-63A, protection contre la surchaleur" affiliate="_DddSzXJ" %}

## **les + du produit** {{ page.ref }}
{: .blue}

- le **prix** environ 16€
- compatible zigbee 3.0
- compatible Zigbee2mqtt (Home Assistant, Gladys, Jeedom)
- compatible ZHA
- compatible Tuya/Smartlife
- Google Assistant
- Amazon Alexa
- **Très Nombreuses fonctions**
- Normes CEI 60947-1
- Garantie 2 ans


## **les - du produit** {{ page.ref }}
{: .red}

- n'assure pas le rôle de court-circuit
- n'est pas considéré comme un disjoncteur
- la gestion de la Led de connectivité Zigbee

