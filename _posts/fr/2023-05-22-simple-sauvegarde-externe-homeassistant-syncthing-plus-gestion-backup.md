---
guid: 66
title: "Gestion des Sauvegardes dans Homeassistant"
description: "Sauvegarde facilement Homeassistant sur n'importe quel support externe grâce à Syncthing et automatisation de la génération de sauvegardes très facilement dans Homeassistant"
layout: post
author: Nico
date: 2023-05-22 15:58
last_modified_at: 
categories: [Home-Assistant, Haade-lab, Domotique]
tags: []
image: 'simple-sauvegarde-externe-homeassistant-synthing-plus-gestion-sauvegarde.png'
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
  - https://community.home-assistant.io/t/syncthing-addon/320452
  - https://github.com/jcwillox/hass-auto-backup
  - https://jcwillox.github.io/hass-auto-backup/
  - https://docs.syncthing.net/
  - https://www.juanmtech.com/how-to-automatically-backup-home-assistant-to-google-drive/
---

Aujourd'hui je vais parler d'un aspect important à ne pas négliger en domotique: **La sauvegarde**. 
> Nombre d'entre nous ne songent pas à cette pratique hors il ne faut pas la négliger. 

Dans cet article je vais te montrer comment sauvegarder très facilement Homeassistant sur n'importe quel support externe privé et ceci très facilement. 
> Quand je dis n'importe quel support je parle de ton Nas, ton pc, ton téléphone ou ta tablette voir plus.

Mais en plus et grâce à un module complémentaire je vais aussi te montrer comment générer automatiquement une sauvegarde complète ou non de Homeassistant.

## Prérequis

- Homeassistant OS installé
- un support externe avec Syncthing d'installé
- HACS installé sur Homeassistant

## Syncthing

Pour ceux qui ne connaissent pas le principe c'est très simple. [Syncthing](https://syncthing.net/){: target="_blank"} est un logiciel opensource qui permet de synchroniser dossiers ou fichiers de bout à bout. Il s'installe tout aussi bien sur un pc ( windows, mac ou linux, docker ), sur un Nas ( docker, Truenas, Synology ) que sur un support mobile, **ça veut tout simplement dire qu'il peut s'installer sur tous les supports**. 

> Pas d'excuses pour ne pas l'utiliser.

La notion de serveur/client n'existe pas, chaque système ou [syncthing](https://syncthing.net/){: target="_blank"} est installé est un client, il faut donc paramétrer sur chaque client l'envoi et la réception de chaque dossiers/fichiers.
Très simple à paramétrer [syncthing](https://syncthing.net/){: target="_blank"} est accessible à tous et permet de se passer de cloud propriétaires comme Google drive, Amazon S3 etc...

Dans mon exemple j'ai installé [Syncthing](https://syncthing.net/){: target="_blank"} sur Homeassistant HAOS et sur un NAS Openmediavault avec Docker.

### Installation Syncthing dans HAOS

Commençons par ajouter le dépôt de Poeschl au gestionnaire de module.
Aller dans:
Paramètres > modules complémentaires > Boutiques des modules complémentaires > Menu > dépôts
1. colle le répertoire externe: **https://github.com/Poeschl/Hassio-Addons** et clic sur Ajouter.
2. Ensuite rafraichis la page et tu verras apparaître le répertoire: **Poeschl Home Assistant Add-ons**
Ce répertoire contiens pas mal de modules supplémentaires comme: Asterisk, Mpd, rsync, etc...
3. Clic sur Syncthing et sur installer, tu n'es pas obligé de changer les paramètres ça s'est cool.
4. Une fois installé il te suffit de cliquer sur ouvrir interface utlisateur web
et *voilà c'est terminé.*

{% picture posts/{{page.guid}}/syncthing-addons.png --alt installation syncthing dans home assistant --img width="940" height="529" %}

Passons au paramétrage du NAS:

l'étape du paramétrage d'un login et pass pour accéder à l'interface web n'est pas une obligation dans Homeassistant car il est lui même déjà paramétré avec un mot de passe.

{%- include alert.html type="warning" text="L'interface d'administration de Syncthing est paramétrée pour autoriser les accès à distance sans mot de passe. Ceci peut aisément permettre à un intrus de lire et modifier n'importe quel fichier de votre ordinateur. Veuillez définir un nom d'utilisateur et un mot de passe dans la fenêtre de Configuration." %}

**Commençons par ajouter un Appareil**, dans mon cas le NAS. 
Clic en bas à droite sur ajouter un Appareil, recherche l'identifiant de ton appareil.
Rien de plus simple va sur le serveur Syncthing installé sur ton nas adresse: http://[ip-du-nas]:8384, clic dans l'onglet action en haut à droite et sélectionne afficher mon ID. 
Ensuite copie l'ID et colle le das Syncthing Homeassistant, rentre un nom convivial, pour moi NAS et valide. 
Dernière étape retourne sur Syncthing du NAS et autorise dans l'onglet jaune la synchronisation des Appareils.

Ensuite **Ajoute un partage**, dans mon cas je voudrais partager le dossier ```/backup```. Met un nom de partage et dans l'onglet racine met en lien ```/backup```. Dernière étape rendez-vous dans Avancé > Type de partage > Envoi(lecture seule), pour terminer clic su enregistrer.

Va dans **Syncthing du NAS et accepte le partage**. Une fois accepté va dans l'onglet partagé qui porte le nom enregistré auparavant et clic sur gérer. Va dans l'onglet avancé > Type de partage réception(seulement), termine en cliquant sur Enregistrer.

> Voilà ton dossier Backup avec toutes tes sauvegardes sera synchronisé avec ton NAS.

## Auto backup [(hacs)](https://hacs.xyz/){:target="_blank"}

Maintenant que tu as appris à synchroniser facilement tes sauvegardes en externes grâce à syncthing passons à l'étape de créations de sauvegardes automatiques dans HomeAssistant.
Pour celà j'ai choisi d'installer Auto Backup un module disponible dans [HACS](https://hacs.xyz/docs/setup/prerequisites){:target="_blank"}.
Clic sur le lien ci-dessous pour **installer facilement auto-backup dans HACS**
{% include homeassistantlink.html creator="jcwillox" repertory="hass-auto-backup" %}

Ensuite une fois installé clic sur le lien ci-dessous pour **ajouter auto_backup** comme Appareil dans HA.
{% include homeassistantlink.html integration="auto_backup" %}

Une fois l'ensemble installé auto backup t'ouvres **les services suivant**:

{% highlight yaml %}
auto_backup.backup
auto_backup.backup_full
auto_backup.backup_partial
auto_backup.purge
{% endhighlight %}

ainsi que les évènements suivants:
{% highlight yaml %}
auto_backup.backup_start
auto_backup.backup_successful
auto_backup.backup_failed
auto_backup.purged_backups
{% endhighlight %}

**Avec ce module tu pourras:**

- paramétrer des [notifications de service](https://jcwillox.github.io/hass-auto-backup/services/){: target="_blank"} plus avancés et configurables.
- [Exclure les addons/dossiers](https://jcwillox.github.io/hass-auto-backup/services/){: target="_blank"} d'une sauvegarde.
- [Supprimez automatiquement les sauvegardes](https://jcwillox.github.io/hass-auto-backup/services/#keep-days){: target="_blank"} après un laps de temps spécifié individuellement.
- [Téléchargez les sauvegardes](https://jcwillox.github.io/hass-auto-backup/services/#download-path){: target="_blank"} dans un répertoire spécifié une fois terminées (par exemple, une clé USB).
- Permet l'utilisation de [noms d'addons au lieu d'alias](https://jcwillox.github.io/hass-auto-backup/services/#addon-and-folder-names){: target="_blank"}.
- Fournit une [entité](https://jcwillox.github.io/hass-auto-backup/sensors/){: target="_blank"} pour surveiller l'état de vos sauvegardes.
- Crée des [événements](https://jcwillox.github.io/hass-auto-backup/events/){: target="_blank"} lorsque les sauvegardes sont démarrées/créées/échouées/supprimées.
- Prend en charge les [schémas de sauvegarde](https://jcwillox.github.io/hass-auto-backup/advanced-examples/#generational-backups){: target="_blank"} générationnelle.

**Exemple d'intégration Blueprint pour la génération de sauvegardes:**

{% include homeassistantlink.html bluelink="https://raw.githubusercontent.com/jcwillox/home-assistant-blueprints/main/automation/automatic_backups.yaml" %}

**Exemple d'intégration Blueprint pour la génération d'une notification:**

{% include homeassistantlink.html bluelink="https://raw.githubusercontent.com/jcwillox/home-assistant-blueprints/main/automation/notify_auto_backup.yaml" %}

Mais **auto_backup** c'est aussi une documentation complète de disponible, [il te suffit de cliquer sur ce lien](https://jcwillox.github.io/hass-auto-backup/){: target="_blank"}.
Tu trouveras facilement des examples d'automatisations et notifications sous forme de Blueprint.

## Conclusion.

Voilà selon moi un tuto incontournable, alors je n'ai pas fournis de captures d'écran, avec un minimum de connaissance de homeassistant tu devrais pouvoir t'en sortir du moins je l'éspère. Si *Syncthing ne te conviens pas* tu as toujours la solutoin d'intégrer un [module compatible google drive](https://www.juanmtech.com/how-to-automatically-backup-home-assistant-to-google-drive/){: target="_blank"}, ce tuto est rédigé par Juanmi spécialiste Home Assistant. Pour terminer n'hésite pas à me contacter sur le forum ou en laissant un commentaire, je te répondrai rapidement 😉.