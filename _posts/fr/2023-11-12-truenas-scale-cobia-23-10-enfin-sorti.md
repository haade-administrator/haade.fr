---
guid: 94
title: "Attendu avec impatience Truenas 'Cobia' est là !"
description: "Voilà un long moment qu'on attendait une nouvelle version du système de gestion pour NAS gratuit Truenas version scale qui tourne sous debian, Truenas v23.10 Cobia"
ref: "Truenas 'Cobia'"
layout: post
author: Nico
date: 2023-11-12 12:26
last_modified_at: 
categories: [Haade-lab, Securite]
tags: []
image: 'truenas-scale-23-10-cobia.png'
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
  - https://www.truenas.com/truenas-scale/
  - https://www.truenas.com/docs/scale/23.10/gettingstarted/scalereleasenotes/
  - https://www.truenas.com/apps/
---

**TrueNAS comme Openmediavault** fait partie du milieu très restreint des logiciels dédiés à la gestion d'un NAS. Depuis deux ans l'équipe TrueNAS a décidé de créer une version tournant sous debian, à l'instar de TrueNAS Core qui lui tourne sur FreeBSD. Ce qui fait de TrueNAS Scale la seule version concurrente de Openmediavault.

![Présentation de l'affichage des modules cobia TrueNAS 23.10]({{ site.baseurl }}/assets/images/posts/94/presentation-applications-truenas-cobia-23.webp{{ cachebuster }}){: width="940" height="483"}{: target="_blank"}

**TrueNAS SCALE « Cobia » 23.10** version BETA a connu une adoption cinq fois supérieure aux versions précédentes de TrueNAS CORE ou SCALE. Même avec un plus grand nombre de testeurs que jamais, relativement peu de problèmes majeurs sont apparus et ceux-ci ont ensuite été rapidement résolus.

[Télécharge Truenas Cobia en cliquant ici](https://www.truenas.com/download-truenas-scale/){: target="_blank"}

{% include videoPlayer.html youtubeId="tz5jeM4QwDQ?si=NZWQtCp-yui9coQ5" %}


## Fonctionnalités PME dans la version TrueNAS SCALE 23.10

**Server Message Block (SMB)** est devenu le protocole de partage de fichiers le plus courant avec une forte prise en charge sur les clients Windows, MacOS, iPhone, Android et Linux. Les fonctionnalités SMB continuent de s'améliorer avec chaque version et mise à jour de TrueNAS. Dans cette version, nous souhaitons mettre en évidence les toutes nouvelles fonctionnalités de SCALE 23.10 :

### Compatibilité PME et NFSv4:
Le partage des mêmes ensembles de données via SMB et NFS nécessite que les deux protocoles disposent d'ACL, d'autorisations et de verrous compatibles. Ces fonctionnalités ont été progressivement ajoutées à SCALE, et avec cette version, le dernier élément d'un mécanisme de verrouillage commun avec NFSv4 a été ajouté. Il s'agit d'un profil sélectionnable dans le partage SMB et peut être activé si vous le souhaitez.

### Importation de partage SMB:
De nombreux utilisateurs installent TrueNAS pour migrer à partir de tout autre produit prenant en charge le protocole de partage SMB, notamment Windows, Netapp et une myriade d'autres produits. TrueNAS peut désormais monter les partages SMB de ces systèmes et extraire ces données dans TrueNAS pour les partager à nouveau.

### Synchronisation de fichiers SMB:
Nous avons déjà décrit comment Syncthing peut être utilisé pour synchroniser les partages SMB et NFS entre les systèmes TrueNAS. Il fonctionne également bien pour la collaboration longue distance, les clusters métropolitains ou la migration de données. Avec SCALE 23.10, il existe également une option de synchronisation avec un serveur ou un système de stockage SMB tiers.

### Copie rapide des fichiers:
Grâce à la nouvelle fonctionnalité de clonage de blocs ZFS, les copies de fichiers et répertoires SMB et NFS peuvent être accélérées de 10 fois ou plus. Lorsqu'un répertoire est copié d'un partage de données à un autre, seules les métadonnées sont copiées et les données sont traitées comme un instantané et restent en place. Cela accélère les copies de fichiers nécessaires et permet à l'administrateur de réorganiser ses données sans avoir à attendre des heures pour que les copies soient terminées.

### Performances et évolutivité des PME:
Plusieurs modifications ont été apportées à la pile de protocoles pour améliorer les performances et l'évolutivité. Cela inclut l'augmentation des E/S par seconde, du nombre d'utilisateurs et du nombre de fichiers par répertoire. Des modifications OpenZFS et Samba ont été apportées pour permettre ces améliorations. Les améliorations sont également alignées sur les travaux sur les performances NVMe (plus d'informations à suivre).

**Résumé mis à jour de TrueNAS SCALE 23.10**
La version TrueNAS SCALE 23.10.0 RELEASE comprend 200 autres corrections de bogues et est complète en fonctionnalités. Les points forts du 23.10 « Cobia » comprennent :

## SCALE 23.10 (Cobia) Caractéristiques principales

***De nombreuses nouvelles fonctionnalités et améliorations continues ont été apportées à l'expérience TrueNAS SCALE :***

1. Applications repensées : une refonte des écrans des applications et des améliorations du backend offrent une expérience plus complète.
2. Refonte de la création du pool de stockage : fournit plus de détails sur la configuration du pool et prend en charge les déploiements SCALE plus importants.
3. Optimisations du nombre de disques : SCALE 23.10 autorise jusqu'à 1 255 disques, soit plus de 25 Po sous gestion sur un seul système.
4. Mise à jour de Samba et améliorations de la vitesse.
5. Partage d'ensembles de données multiprotocoles SMB/NFSv4.
6. Commentaires simplifiés et rapports de bogues.
7. Noyau Linux 6.1 et support matériel amélioré.
8. OpenZFS 2.2 avec de nombreuses contributions d'iXsystems.
9. Clonage de blocs ZFS (type de déduplication) pour des copies de fichiers SMB et NFS plus rapides
10. Dispositions de pool ZFS dRAID
11. Suspendre/reprendre les contrôles de nettoyage ZFS
12. Réduction des temps de basculement HA jusqu'à 70 %
13. Mises à jour du pilote NVIDIA 535.54.03.
14. Collecte de statistiques back-end Netdata. Évoluez jusqu'à 1 200 disques et 25 Po+ sur un seul système
Interface Web
1.  SCALE Enterprise : la prise en charge d'iSCSI ALUA est ajoutée à TrueNAS SCALE Enterprise.
2.  Remplacements de services système : de nombreux services système intégrés à SCALE Bluefin sont reconstruits en tant qu'applications TrueNAS SCALE facultatives.
3.  Les rapports système ont été remaniés et utilisent désormais Netdata comme backend pour fournir des statistiques système aux écrans de rapports.
4.  Mettre en pause/reprendre les contrôles de nettoyage ZFS.
5.  Clonage de blocs ZFS (déduplication) pour les copies de fichiers SMB et NFS (nécessite une mise à niveau du pool pour les pools créés dans les versions majeures précédentes avant 23.10).
6.  Dispositions de pool ZFS dRAID.
7.  Importation de partages SMB depuis d'autres systèmes (à venir !).
8.  L'expansion simplifiée du cluster SMB via TrueCommand est prévue avec la sortie de TrueCommand 3.0 (à venir !).


**Mises à jour de sécurité** et améliorations de la vitesse de Samba
Expansion simplifiée du cluster PME via TrueCommand 3.0 (à venir !)
Importation de partages SMB à partir d'autres systèmes
Synchronisation de fichiers entre les systèmes NFS/SMB
Améliorations iSCSI, y compris la prise en charge d'ALUA
Compatibilité SMB et NFSv4 pour les actions ordinaires
Il est recommandé aux premiers utilisateurs de commencer cette version jusqu'à ce qu'il y ait davantage de tests et de commentaires de la part de la communauté. La page d'état du logiciel TrueNAS assure le suivi des recommandations en matière de qualité et de type d'utilisateur.

**TrueNAS Enterprise** et les applications associées sont basées sur **TrueNAS 13.0 ou Bluefin (22.12)**. Cobia (23.10) a été ajouté et avec des améliorations en termes de qualité, de flexibilité et de sécurité, il remplacera bientôt Bluefin sur les appareils.

Le prochain **TrueCommand 3.0** prend entièrement en charge Cobia (23.10) et il existe des limitations lors de l'utilisation de TrueCommand 2.3. Si la fonctionnalité TrueCommand est une exigence opérationnelle, il est recommandé de retarder la mise à jour du système jusqu'à ce que TrueCommand 3.0 soit disponible, ce qui est attendu d'ici décembre.

**TrueNAS 13.1** héritera de certaines améliorations de **Cobia**
Maintenant que TrueNAS SCALE Cobia est publié, il y aura une mise à jour similaire TrueNAS CORE & Enterprise vers TrueNAS 13.1. Cette mise à jour inclura les nombreuses améliorations SMB et ZFS qui ont été implémentées et testées dans TrueNAS SCALE Cobia. La sortie de TrueNAS 13.1 est prévue pour début 2024. Des versions nocturnes ont été mises à disposition pour les testeurs et ceux qui souhaitent contribuer au développement de TrueNAS. Le lien vers les versions nocturnes se trouve sur la page d'état du logiciel TrueNAS.

**TrueNAS 13.1** inclut des fonctionnalités supplémentaires pour simplifier la « mise à niveau » de TrueNAS 13.1 vers TrueNAS SCALE 23.10, en particulier pour Enterprise.

## {{ page.ref }} en image

{% picture posts/{{ page.guid }}/truenas-webui-app.png --alt presentation de truenas cobia 23.10 webui --img width="940" height="575" %}

{% picture posts/{{ page.guid }}/truenas-gestion-stockage-disque-23-10-cobia.png --alt presentation de truenas cobia 23.10 gestion stockage de disque --img width="940" height="788" %}

{% picture posts/{{ page.guid }}/truenas-Pool-Creation-zfs-cobia.png --alt presentation de truenas cobia 23.10 gestion pool zfs --img width="940" height="621" %}

