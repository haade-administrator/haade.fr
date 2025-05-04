---
guid: 162
title: "Mise à jour de l'OS TrueNAS scale le meilleur gestionnaire de NAS du moment !"
description: "TrueNAS scale arrive à maturité et annonce de grandes avancées qui me permettent désormais de quitter OMV mon ancien gestionnaire de NAS."
ref: ""
layout: post
authors: [Nico]
date: 2025-05-04 18:30
last_modified_at: 
categories: [Securite, Haade-lab]
tags: []
video: 
image: 'truenas-ameliration-24-et-25-fangtooth-edition-logiciel-par-excellence.png'
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
  - https://www.truenas.com/blog/
---

Que le temps passe vite ! voilà maintenant plus d'un an que je ne me suis plus attardé sur le système embarqué pour Nas, [TrueNAS](https://www.truenas.com/){: target="_blank"}. Comme tu le sais peu de systèmes d'exploitations opensource sont dédiés aux Nas, **perso j'en vois que deux** qui sont valables [**Openmediavault**](https://www.openmediavault.org/){: target="_blank"} et [**TrueNAS**](https://www.truenas.com/){: target="_blank"} **( anciennement Freenas )**. Pour revenir à nos moutons [en Novembre 2023 j'avais rédigé un article sur les avancées de la version 23]({% post_url /fr/2023-11-12-truenas-scale-cobia-23-10-enfin-sorti %}){: target="_blank"}, mais **depuis deux autres versions majeures** sont sortis. **Electric Eel** en **24.10** et récemment ( Avril 2025 ), **Fangtooth** pour la version **25.04**.

> Et je peux affirmer maintenant que **TrueNas est le meilleur OS NAS** pour la gestion **RaidZ** grâce aux avancées **openZFS**

Si tu as lu mon [précédent article]({% post_url /fr/2023-11-12-truenas-scale-cobia-23-10-enfin-sorti %}){: target="_blank"} tu sais déjà que **je suis depuis plusieurs années sur OMV**, j'utilise la **gestion openzfs** par le noyau proxmox pour la gestion de mes disques durs. **Mais prochainement je vais basculer sur TrueNAS** qui utilises la version 2.3.2 de openZFS alors que sur omv la seule version proposée de openZFS date de septembre 2023 (2.1.13), **il y a eu tellement d'avancées que je ne peux plus me permettre de manquer ça ?**

## TrueNAS Electric Eel 24.10

Commençons par les avancées de la version 24.10. Tout d'abord cette version est la suite logique de Dragonfisch 24.04, elle est sorti officiellement le 24 Octobre 2024, il y a à peine plus de 6 mois. [Tu peux suivres via ce lien toutes les évolutions de cette version](https://www.truenas.com/docs/scale/24.10/gettingstarted/scalereleasenotes/){: target="_blank"} sur la documentation officielle.

De **grandes avancées et gestions via OpenZFS** ont été annoncées avec Electric Eel:

1. **Extension RaidZ:** il est désormais possible facilement d'étendre son stockage RaidZ
2. **Docker par défaut:**{: .blue} TrueNAS 24.10 migre le back-end d'application précédent basé sur Kubernetes vers la solution Docker Compose plus simple, tout en migrant et en préservant de manière transparente les données des installations d'applications existantes.
3. **Déduplication rapide RaidZ**{: .blue}: visant à améliorer les capacités de réduction des données d'OpenZFS, notamment la virtualisation et le stockage de fichiers de bureau où les fichiers peuvent être copiés vers plusieurs emplacements par les utilisateurs finaux. Cependant, avec les algorithmes de déduplication OpenZFS hérités, la surcharge liée à la maintenance des tables de métadonnées de **déduplication en mémoire** à tout moment entraînait des problèmes de performances et de convivialité à grande échelle. Désormais grâce à la gestion d'une structure de métadonnées plus efficace, une file d'attente d'écriture basée sur les journaux et l'élagage des entrées non dupliquées, l'ensemble se combinent pour réduire l'empreinte mémoire de la **déduplication jusqu'à 90 %.**
4. **Recherche globale et widgets de tableau de bord personnalisables**: le moteur de recherche te permet en quelques clics, trouvez la page souhaitée et accédez-y d'un simple clic. Maitenant tu peux personnaliser le tableau de bord etplacer vos informations les plus cruciales au premier plan, prêtes dès que tu te connectes. ( similaire à OMV en plus design )
5. **Ajout de la fonction S.M.A.R.T**: norme de surveillance et de test des disques incontournable pour un NAS
6. **Mise à niveau d'un pool de stockage**: la fonction upgrading d'un pool est désormais intégrée

**Electric Eel est une version importante** car elle réduit considérablement **l'absorption de mémoire RAM qui est le gros défaut du système ZFS**, et TrueNAS à remplacé **Kubernete par docker** et le gestionnaire **Docker compose**, maintenant je peux dire qu'il est temps de passer à TrueNAS, **car sous OMV, ZFS et les applications Docker absorbent actuellement 25GB de mémoire sur 32GB soit 80% ce qui est énorme.**

**La dernière version en date** de Electric Eel est la [version 24.10.2.1](http://truenas.com/docs/scale/24.10/gettingstarted/scalereleasenotes/#241021){: target="_blank"} qui essuie de nombreux bugs

## TrueNAS Fangtooth 25.04

Fangtooth 25.04 [est sorti le 15 Avril 2025](https://www.truenas.com/blog/truenas-fangtooth-25-04-release/){: target="_blank"}, la grande nouveautée réside dans la virtualisation des machines virtuelles. [Tu peux suivres via ce lien toutes les évolutions de cette version](https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/){: target="_blank"}

**Parmi les grandes nouveautées on retrouve:**

1. **Changement de la virtualisation**{: .blue}: remplace l'ancienne implémentation de **libvirt** (TrueNAS 24.10 et versions antérieures) par **Incus** pour le déploiement de machines virtuelles (VM). Il introduit également **la prise en charge des conteneurs système Linux (LXC)**, permettant une isolation légère similaire aux jails de TrueNAS CORE.
2. **Amélioration des Instances** ( encore en phase de tests )
3. Amélioration du service d'application: notamment la sélection d'adresses IP par application (voir [Applications TrueNAS](https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/#truenas-apps){: target="_blank"} dans les notes de mise à niveau).
4. Clés API liées à l'utilisateur ([voir Gestion des clés API](https://www.truenas.com/docs/scale/25.04/scaletutorials/toptoolbar/managingapikeys/){: target="_blank"} )
5. Expérience de connexion à l'interface utilisateur améliorée
6. Activation la prise en charge de la **déduplication rapide ZFS** ( suite logique de Electric Eel)

#### Migration VM:

{%- include alert.html type="info" text="En raison d'incompatibilités de configuration entre l'implémentation précédente de libvirt (TrueNAS 24.10 et versions antérieures) et Incus dans TrueNAS 25.04, les configurations de VM existantes ne sont pas transférées automatiquement lors de la mise à niveau. Cependant, TrueNAS conserve les fichiers Zvol de stockage, ce qui vous permet de recréer manuellement les configurations de VM précédentes et de les remettre en ligne.

<b>Les instances</b> sont une fonctionnalité expérimentale destinée uniquement aux tests communautaires. Les utilisateurs de machines virtuelles de production sur TrueNAS 24.10 ne doivent pas effectuer la mise à niveau vers TrueNAS 25.04 avant la stabilisation de cette fonctionnalité expérimentale dans une future version de TrueNAS." link="https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/" textlink="Infos Fangtooth 25.04" %}

## Conclusion

**TrueNAS scale engage un tournant important de son OS**, plus de 10000 utilisateurs ont testés la **version Electric Eel**, **grâce à une écoute de sa communauté** TrueNAS scale intègre désormais des fonctions très intéressantes comme **Docker** et l'amélioration de la **gestion de stockage des pools ZFS** par la **diminution considérable de l'utilisation de la ram** dans un tel système qui est selon moi le gros point noir ZFS.

> Il est temps pour moi de basculer d'OMV à TrueNAS scale.

**Je ferais un retour sur cette migration** comptez sur moi 👌


