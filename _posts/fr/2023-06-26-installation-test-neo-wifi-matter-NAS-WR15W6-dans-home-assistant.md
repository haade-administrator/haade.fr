---
guid: 73
title: "Test et installation prise neo NAS-WR15W6 Matter dans Home-assistant"
description: "Une première dans cet article nous allons tester et integrer la prise Neo NAS-WR15W6 protocole Matter dans home assistant, google Home et Tuya"
ref: "NAS-WR15W6"
layout: post
authors: Nico
date: 2023-06-23 14:10
last_modified_at: 2023-06-26 11:00
categories: [Domotique, News, Tests, Matter, Home-Assistant]
tags: []
image: 'test-installation-matter-home-assistant-neo-smart-power-plug-NAS-WR15W6.png'
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
rating: 4.2
sourcelink:
  - https://www.szneo.com/en/products/show.php?id=275
  - https://www.home-assistant.io/integrations/matter/
  - https://csa-iot.org/all-solutions/matter/
  - https://www.frandroid.com/produits-android/maison-connectee/1597775_matter-fonctionnement-objets-connectes-compatibles-tout-savoir-sur-la-nouvelle-norme-universelle-des-objets-connectes
---

**Voilà une première pour le site Haade**, aujourd'hui je vais intégrer et tester la prise Neo smart power plug {{ page.ref}} controlleur Matter dans Home Assistant. *Merci à l'équipe Domadoo pour ce prêt*.

{% include product-embed.html guid="2165" %}

Jusqu'à présent **j'ai peu parlé** du nouveau controlleur Matter. Actuellement en version 1.0 ce controlleur est à ses débuts, si tu ne sais pas, il a été crée par des grosses sociétés sans citer certains GAFAM, pour faciliter l'intégration des modules compatibles dans nos systèmes domotiques et réseau. 

> Matter va ainsi permettre de lier les différents écosystèmes existants, et ainsi interconnecter les différents appareils que l’on possède sans distinction de marque. On pourrait par conséquent imaginer de contrôler un HomePod mini (compatible Thread) depuis l’application Google Home par exemple. Un usage difficile à envisager aujourd’hui avec le cloisonnement des différents écosystèmes. De plus, il ne nécessite pas forcément de passer par le cloud, ce qui permet en théorie d’accélérer le transfert d’informations.
<cite>Frandroid.com</cite>

Bon tu le sais déjà mais home assistant, Jeedom, Gladys, Openhab, domoticz, **lient déjà les divers écosystèmes** entre eux, mais tout le monde n'utilise pas un assistant domotique. Matter est là pour lier avant tout les modules fonctionnant sur les protocoles ip/wifi/thread/ et qui utiliseraient chacun un controlleur maître différent. Ainsi il n'y aurait plus besoin de divers controlleurs. Si tu utilises une seule technologie comme **le Zigbee ou Z-wave ce controleur ne t'apportera pas grand chose de plus**. Je tiens tout de même à dire que le protocole thread est très prometteur car chaque module peut être utilisé comme controlleur maître/esclave et ce de manière automatique.

D'un autre côté Zigbee développe le protocole **Zigbee Direct**, une nouvelle fonctionnalité de Zigbee qui simplifie l'intégration et le contrôle des Zigbee appareils directement via des appareils Bluetooth Low Energy.

{% picture posts/{{ page.guid }}/thread-home-network-scaled.png --alt schéma de fonctionnement du protocole Matter --img width="940" height="671" %}

Passons à l'étape d'installation de la prise smart power plug Neo {{ page.ref }} dans home assistant.

## Prérequis
- 1 module prise smart plug Neo compatible Matter
- Home assistant version opérationg système ( HAOS )

## Parlons de la prise Neo {{ page.ref }}

{% include product-embed.html guid="2165" %}

Relativement similaire aux autres prises de la marque, pour rappel Neo attribue une couleur par protocole, le rouge pour le zigbee, le bleu pour le z-wave et enfin le gris pour matter.

Comme tu peux le voir ci-dessous, la technologie évolue et chez Neo la taille des modules évolue aussi. E apperemment la nouvelle norme Matter ne permet pas de faire des modules de petites tailles du moins chez Neo.

{% picture posts/{{ page.guid }}/evolution-prise-neo-zigbee-zwave-matter.png --alt evolution des prises neo zigbee, z-wave et enfin Matter --img width="940" height="529" %}

Le module est livré dans une boite contenantune prise et la notice. tu trouveras sur le côté un bouton afin d'allumer/éteindre manuellement la prise, ce bouton te permet aussi d'effectuer un **reset en restant appuyé 5 secondes dessus**. Le voyant se mettra à clignoter afin de reprendre une intégration.

{% picture posts/{{ page.guid }}/prise-neo-smart-power-plug-matter-nas-wr15w6-detail.png --alt prise matter neo {{ page.ref }} detail packaging et code --img width="940" height="529" %}

### Qrcode ou code manuel

Afin de pouvoir intégrer un module dans Matter **celui-ci doit obligatoirement être fournis avec un qrcode d'intégration et un code à 11 chffres** ou au moins l'un des deux sinon il sera impossible d'utiliser le module.

{% picture posts/{{ page.guid }}/matter-module-neo-qrcode-code-manuel-integration-obligatoire.png --alt code intégration prise matter neo {{ page.ref }} --img width="940" height="529" %}

### Caractéristique technique

|Puissance nominale|CA 85~250V 50/60Hz|
|Courant nominal|16 A|
|Capacité de charge maximale|3 680 W|
|Consommation en veille|0,5 W|
|Protocole|IEEE 802.11b/g/n|
|Distance Wi-Fi|45 m (conditions idéales)|
|Matériel|PC/ABS (V0)|
|Taille du produit (D * W * H)|50x 50x 85mm|

### Compatibilité

- Amazon Echo
- Google Home
- Matter
- Tuya

### **les + du produit**
{: .blue}
- la qualité de fabrication
- certifié Matter
- le prix moins de 20€

### **les - du produit**
{: .red}
- compatible wifi 802.11 bgn
- la taille
- une seule fonction on/off
- pas de retour d'énergie

## Contrôle du neo {{ page.ref }} dans Home Assistant

**Pour contrôler ton premier module matter dans Home Assistant**, il y a deux étapes à réaliser au préalable.
La 1ère consiste à installer et activer un serveur Matter dans Home Assistant OS à l'aide des modules complémentaires.

### 1-Installation Serveur Matter

Clic sur l'icone ci-dessous installe et active le module

{% include homeassistantlink.html supervisor_addon="core_matter_server" %}

Ensuite il faudra installer l'intégration Matter afin de pouvoir gérer les divers modules Matter

### 2-Intégration Matter

Clic sur l'icone ci-dessous et ensuite clic sur ok pour configurer Matter (beta) rien de plus simple.

{% include homeassistantlink.html integration="matter" %}

Une fois ces deux intégrations effectuées il te suffira de cliquer sur **ajouter un appareil Matter à partir de ton téléphone**
{% include homeassistantlink.html add_matter_device="" %}
**et maintenant branche le module sur le secteur**{: .red}

### Video étape d'installation du module Neo {{ page.ref }}

**Comme une vidéo vaut mieux que dix mots**, regarde en image l'intégration du module Neo {{ page.ref }} ci-dessous.

![Intégration prise neo matter dans home assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/video-integration-switch-neo-dans-home-assistant-avec-matter.webp{{ cachebuster }}){: width="300" height="649" class="lazyload pictaninpost"}{: target="_blank"}

Et voilà tu peux enfin utiliser le module neo {{ page.ref }} dans home assistant, et tu pourras t'apercevoir ci-dessous que le contrôle de ce module se limite à l'interrupteur on/off, un peu léger selon moi.

{% picture posts/{{ page.guid }}/controle-prise-neo-matter-wr15w6-home-assistant.png --alt contrôle de la prise matter neo {{ page.ref }} dans home assistant --img width="940" height="495" %}

### Matter loin d'être parfait

Tout d'abord côté serveur Matter du module complémentaire, le module fait remonter dans le journal un certain nombre d'erreurs malgré le contrôle de la prise dans home assistant, des mises à jours ultérieurs devraient corriger ces erreurs.

{% picture posts/{{ page.guid }}/error-server-matter-home-assistant.png --alt prise matter neo {{ page.ref }} erreur journal matter server home assistant --img width="940" height="639" %}

Ensuite l'intégration **ne s'est pas faite du premier coup**, j'ai rencontré des soucis côté réseau wifi, alors ça ne vient pas directement de Matter mais du protocole wifi utilisé **par le module 802.11 b/g/n**, qui peut être capricieux.

Pour finir malgré une intégration dans Home assistant, quand tu débranches la prise et que tu la rebranche le temps de remontées d'infos dans ha peut mettre du temps et le lancement de l'application sur le téléphone pour configurer le module apparaît alors que ça ne devrait plus être le cas !.

## Contrôle du neo {{ page.ref }} dans Google Home

L'intégration avec l'application dans Google Home s'est fait sans soucis par contre si tu ne possèdes pas une enceinte google home, nest mini, nest audio ou un nest Hub ou nest wifi pro, tu ne pourras contrôler le module neo {{ page.ref }}.

{% picture posts/{{ page.guid }}/integration-matter-application-google-home.png --alt contrôle de la prise matter neo {{ page.ref }} dans google home --img width="940" height="509" %}

## Contrôle du neo {{ page.ref }} dans Tuya App

Dans Tuya App l'intégration ne s'effectue même pas jusqu'au bout si tu n'utilises pas un Hub Tuya, normal tu vas me dire.

{% picture posts/{{ page.guid }}/integration-matter-application-tuya-app.png --alt contrôle de la prise matter neo {{ page.ref }} dans tuya app --img width="940" height="509" %}

{% include product-embed.html guid="2165" %}

## Conclusion

Le module Neo {{ page.ref }} **fait le boulot et fonctionne sous Matter**, cependant les fonctions sont très limitées et c'est dommage. De plus la taille du module est *plus imposante que ceux sous Zigbee/z-wave.* Enfin la technologie Matter n'est pas encore au point et elle se démarquera surtout auprès des utilisateurs lambda qui ne passent pas par un logiciel domotique pour controller l'ensemble de ses modules.

{% include product-embed.html guid="2166" %}

