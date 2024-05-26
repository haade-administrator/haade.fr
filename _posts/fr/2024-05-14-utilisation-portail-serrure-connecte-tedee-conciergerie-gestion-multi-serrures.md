---
guid: 126
title: "Portail serrures Tedee"
description: "Tutos sur l'utilisation du portail Tedee pour la gestion de plusieurs serrures connectées Tedee Go et Pro idéal quand tu possèdes plusieurs serures ou pour les professionnels de l'hébergement et conciergeries"
ref: "Tedee"
layout: post
authors: [Nico]
date: 2024-05-15 00:10
last_modified_at: 
categories: [News, Haade-lab, Mini-tutos]
tags: []
video: 
image: '126.png'
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
  - https://portal.tedee.com/
---

Après une brève présentation de la serrure connectée Tedee GO et l'intégration via l'application Smartphone, je te propose d'approfondir les connaissances à travers une gestion des données plus complètes des serrures connectées Tedee et ce grâce au cloud de le marque et à une gestion à [travers le portail web](https://portal.tedee.com/){: target="_blank"}.

Alors pourquoi dédier un article sur ce portail, tout simplement parce qu'il propose des paramétrages plus poussés que l'application. Grâce à ce portail les professionnels de la location pourrot gérer l'accès à distance des logements.

**Avantages du portail Tedee**

- Visibilité des données
- créations d'organisations comme des conciergeries
- création d'utilisateurs supplémentaires
- associer des appareils Tedee/Blebox à des organisations
- visualiser le journal

## Prérequis

- L'application Tedee pour Smartphone
- Un compte Tedee créé et validé
- des appareils tedee intégré dans l'application

## Articles dédiés

> Pour t'aider j'ai déjà rédigé deux articles de tests concernant l'univers Tedee.

### Tedee Go

[Découverte et test de la serrure Tedee Go]({% post_url /fr/2024-04-22-test-de-la-serrure-connectee-tedee-go-et-des-accessoires %})

{% include product-embed.html guid="2193" %}

### Blebox Doorbox v2

[Découverte test et inclusion du micro-module NO/NC Blebox Doorbox v2]({% post_url /fr/2024-05-07-test-et-installation-module-relais-contact-sec-blebox-doorbox-tedee-et-home-assistant %})

{% include product-embed.html guid="2197" %}

## Accès aux services de la serrure intelligente Tedee

Rentrons dans le vif du sujet et détaillons les onglets du portail Tedee, et surtout pourquoi l'utiliser

### Vérifier les status des services Tedee

Important! que tu sois un **particulier**, un **professionnel** de l'hébergement, si tu rencontres des soucis de gestions à distances des serrures connectées Tedee, avant de paniquer et te déplacer ou de reprendre ton installation vérifie **les status des services** Tedee. **Et Oui acheter Tedee c'est aussi être dépendant du Cloud, 100% sécurisé** 😸

Et même mieux [inscris-toi](https://status.tedee.com/){: target="_blank"} pour être au courant des évolutions des services.

{% include videoPlayer.html thumbnail="126.png" localId="pages-status-tedee-service.mp4" localIdWm="pages-status-tedee-service.webm" %}

### Accès au Portail Tedee

Maintenant que tu sais visionner les status des services Tedee, rendez-vous sur le portail, [rien de plus simple clic ici](https://portal.tedee.com/){: target="_blank"} ou rends toi sur le site officiel Tedde et rends toi dans le pied de page de la page principal tous les liens sont dispos. D'ailleurs en complément de ce tuto tu peux trouver la [documentation du portail Tedee en ligne](https://tedee.com/fr/knowledge-base/portail-tedee/){: target="_blank"}

Ci-dessous une petite vidéo qui reprend la connection.

{% include videoPlayer.html localId="acces-portail-tedee.mp4" %}

{%- include alert.html type="Warning" text="Tu dois utiliser le même compte sur le portail que celui que t'as créé lors de l'utilisation de l'app Tedee sur Smartphone, Logique !" %}

## Étape 1, ajout d'une Organisation

Pour faire simple *pas de créations d'organisations* pas de paramétrages des appareils Tedee sur le portail **À part déverouiller la serrure**. *Donc perdons pas de temps et ajoutons une organisation.*

{% include videoPlayer.html localId="creation-organisation.mp4" %}

**Alors pour revenir à nos moutons**, que tu sois particulier ou pro tu t'es connecté au portail au statut propriétaire, créer une organisation va te permettre d'orienter des paramétrages pour cet organisation. Je pars du principe que je crée une organisation nommé loc'ett qui gère plusieurs logements.

Une fois créé tu auras accès à de nouveaux onglets.

## Étape 2, Création d'un utilisateur externe

Maintenant tu peux créer un utilisateur supplémentaire qui peut avoir un accès **invité** ou **administrateur** en gros un utilisateur invité pourra activer les appareils proposés selon les paramétrages effectués, tandis qu'un utilisateur administrateur pourra modifier les paramètres des appareils dont l'accès lui a été laissé.

{% include videoPlayer.html localId="creation-utilisateur-tedee-portail.mp4" %}

**À la création d'un utilisateur**, celui-ci **reçoit un mail** lui demandant de télécharger l'application Tedee pour smartphone et de créer un compte avec le mail enregistré dans le portail. Une fois créé il aura accès aux appareils et apparaitra sur le portail en tant **qu'utilisateurs confirmé.**

## Étape 3, Ajouter des Appareils à l'organisation

À cette étape ni l'organisation ni un utilisateur ne peuvent contrôler des appareils Tedee. Pour ce faire il faut attitrer des appareils à l'organisation et tu pourras te rendre compte que la Doorbox v2 de blebox et paramétrable, hum ça commence à être intéressant.

{% include videoPlayer.html localId="ajouter-des-appareils-organisation-tedee.mp4" %}

## Étape 4, Accorder des accès Appareils par utilisateurs

L'organisation et l'utilisateur créé, il te faudra maintenant donner des accès invité/administrateur à l'utilisateur sinon sur l'application Tedee il ne pourras pas activer ou paramétrer les appareils.

{% include videoPlayer.html localId="accorder-acces-par-utilisateurs.mp4" %}

## Création de Liens d'utilisations

**Voilà un onglet très intéressant**, pourquoi, tout simplement parce que tu peux générer des accès pour des locataires sans qu'ils aient besoin d'utiliser une application tiers, et ça c'est top. 

Visionne la vidéo ci-dessous et tu pourras voir comment sont affichés les liens que tu pourrais envoyer tout simplement par mail. Le client final aura juste besoin d'un smartphone avec internet.

{% include videoPlayer.html localId="creation-lien-utilisation-pour-locataire.mp4" %}

## (Journalisation) suivi des activités

Encore un onglet fort intéressant surtout pour un gestionnaire principal qui pourra surveiller toutes les activités liées aux appareils Tedee, et tu pourras t'aider d'une recherche par filtre (utilisateur,appareil,activité). Le portail est vraiment complet

{% include videoPlayer.html localId="suivi-activite-tedee-portail.mp4" %}

## Connection à un système de réservation externe

Pour terminer si tu utilises les systèmes de réservations externes comme [Smoobu](https://www.smoobu.com/){: target="_blank"} ou [Guesty](https://www.guesty.com/){: target="_blank"}, et bien sache que tu pourras intégrer ces gestionnaires dans Tedee et rendre le tout interconnectable

{% include videoPlayer.html localId="connection-système-reservation-tedee-portail.mp4" %}

{% include product-embed.html guid="2193" %}

## Conclusion

J'avais envie de rédiger cet article pour te montrer de quoi Tedee est fait, pour te dire qu'ils ne se sont pas contenté de faire un produit aux facettes plutôt réussis, **mais de faire un gestionnaire ultra complet** qui pourra même ravir les pros de la location.
Pour terminer le fait de pouvoir **créer des liens** à destination des locataires **sans qu'ils aient besoin de télécharger quoique ce soit est un gros plus.**

> L'interface de gestion des serrures Tedee est facile à prendre en main 👍

{% include product-embed.html guid="2197" %}



