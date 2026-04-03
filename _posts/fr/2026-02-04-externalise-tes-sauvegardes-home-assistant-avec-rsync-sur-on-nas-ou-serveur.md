---
guid: 170
title: "Externalise Facilement ta sauvegarde Home-Assistant"
description: "Grâce à Rsync externalise automatiquement et facilement tes sauvegardes Home Assistant"
ref: ""
layout: post
authors: [Nico]
date: 2026-02-04 10:40
last_modified_at: 
categories: [Securite, Home-Assistant, Haade-lab, NAS]
tags: []
video: 
image: 'external-homeassistant-backup-with-rsync-nas-omv.png'
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
rating: 5.0
sourcelink:
  - https://rsync.samba.org/
  - https://github.com/RsyncProject/rsync
---

A l'époque déjà, **externaliser la sauvegarde Home Assistant me préoccupait**, Dixit mon installation à base de raspberry **mise tout sur la carte SD**, de ce fait en 2023 **j'avais rédigé un article:** [comment externaliser sa sauvegarde avec syncthing]({% post_url fr/2023-05-22-simple-sauvegarde-externe-homeassistant-syncthing-plus-gestion-backup %}), cette méthode fonctionne toujours mais **syncthing est tout de même une usine à gaz**.

Je m'explique Haade propose un **module qui te permet de te connecter via une adresse web et ce gratuitement**, je propose aussi à tout mon réseau de sauvegarder leurs dernières sauvegardes sur un serveur externe. Il me fallait installer quelque chose de plus simple.

Entre 2023 et aujourd'hui de l'eau a coulée sous les ponts et **home assistant à énormément évolué**. Depuis la gestion des **sauvegardes est entièrement gérée par l'application.** Il est possible entre autre d'ajouter un stockage réseau prise en charge **protocoles smb/nfs**, qui est à usage d'un réseau interne, **mais avec la gestion wireguard on pourrait envisager l'export des sauvegardes sur un serveur externe.**

{% picture posts/{{ page.guid }}/sauvegarde-externe-home-assistant-smb-nfs-defaut.png --alt Paramétrage sauvegarde externe Home Assistant --img width="940" height="589" %}

Rsync utilitaire opensource **sert à copier ou déplacer des répertoires**, à l'instar de mv ou cp, mais fournit en plus des **fonctionnalités complètes** de synchronisation et de transfert distant **(reposant sur SSH)**. Ainsi il peut aussi être utilisé de manière plus avancée pour maintenir un double d'un espace de stockage, pour mettre en place des systèmes rudimentaires de sauvegarde distante.

> **Le tout avec une simple ligne** de commande le rendant simple à utiliser

Pour suivre ce tuto il faut avoir quelques bases, mais n'ayez craintes rien d'insurmontable !

## Prérequis

- Home Assistant OS
- un NAS avec openmediavault de préférence
- module complémentaire File editor pour HA
- module complémentaire Rsync pour HA
- ouvrir le port 22 de sa box
- avoir une adresse ip externe fixe ( de préférence )

## Installation Rsync dans HAOS

Ne perdons pas de temps et commençons par ajouter le dépôt de Poeschl au gestionnaire de module. Aller dans: **Paramètres > modules complémentaires > Boutiques des modules complémentaires > Menu > dépôts**

{% picture posts/{{ page.guid }}/ajout-depot-poeschl-module-complementaire-homeassistant.png --alt Ajout du répertoire de module Poeschl --img width="940" height="522" %}

Pour ajouter les dépôts clic directement sur le lien ci-dessous ou ajoute-le manuellement.

[![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FPoeschl-HomeAssistant-Addons%2Frepository)

Lien direct du répertoire: **https://github.com/Poeschl-HomeAssistant-Addons/repository** et clic sur Ajouter.

Actualise **la page des modules complémentaires**, rends toi à l'onglet Poeschl et **installe Rsync**.

{% picture posts/{{ page.guid }}/page-modules-complementaires-poeschl.png --alt Page des modules complémentaires Poeschl et recherche rsync --img width="940" height="522" %}

## Utilisation et paramétrage du module Rsync

**Une fois Rsync installé, démarre-le** sans toucher la configuration ce qui va **générer dans un premier temps les clés ssh** dans le dossier **/ssh/rsync/id_rsa**. Ce sont ces clés que nous allons récupérer afin de pouvoir se connecter à notre NAS ou serveur distant.

{% picture posts/{{ page.guid }}/generation-cle-ssh-premier-lancement-rsync.png --alt Logs Rsync génération clé ssh --img width="940" height="522" %}

> Voilà maintenant passons au **paramétrage du module rsync.**

{% picture posts/{{ page.guid }}/parametrage-rsync-fichiers-local-distant.png --alt Paramétrage du module Rsync côté Home Assistant --img width="940" height="522" %}

1. répertoire ou sont stockés les clés ssh
2. user est le nom d'utilisateur rsync **doit correspondre** à l'utilisateur dans omv j'ai mis **Nicotest**
3. paramétrage des dossiers locaux et distants + options si nécessaire
  1. **local:** ( il s'agit du dossier des sauvegardes dans HA par défaut **/backup** )
  2. **remote:** il s'agit du dossier distant pour moi les sauvegardes seront enregistrées dans **/export/data/Backup/Nicotest**
  3. les [options complémentaires](https://man7.org/linux/man-pages/man1/rsync.1.html?utm_source=chatgpt.com){: target="_blank"} lors de transferts rsync
  4. la direction: pull ou **push** par défaut ( **push =** pousse des données de HA ver sources extérieurs )
4. remote_host: Adresse ip/http serveur externe.

**En Conclusion**: côté OMV je vais créer un utilisateur **Nicotest avec son répertoire personnel** , donc **dans rsync pour Homeassistant** l'user doit être **Nicotest et le répertoire distant sera au final Nicotest**

## Récupération de la clé SSH

Maintenant **il faut récupérer la clé ssh indispensable** à la connection distante des deux systèmes. Rien de bien compliqué on va pour celà utiliser le célèbre module **file editor** dispo par défaut dans la bas des modules complémentaires de Home Assistant. 

{% picture posts/{{ page.guid }}/file-editor-home-assistant-recuperation-cle-ssh-rsync.png --alt Utilisation file editor pour home assistant --img width="940" height="522" %}

Si tu ne l'a pas installé clic sur le lien ci-dessous

[![Open your Home Assistant instance and show the dashboard of an add-on.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=file_editor)

Ensuite pour avoir accès à la racine des dossiers dans le module file editor et oui **par défaut tu as accès seulement au sous-dossiers /config**, pour rappel nous avons vbesoin d'accéder au sous dossier **/ssl/rsync/id_pub.rsa**.

Donc rien de plus simple rends-toi dans la configuration du module et **déselectionne Enforce Basepath**. Ensuite redémarre le module.

{% picture posts/{{ page.guid }}/suppression-acces-limite-file-editor-recuperer-cle-ssh-rsync.png --alt désactive l'option enforce basepath dans file editor --img width="940" height="522" %}

Ouvrons **maintenant l'interface file editor** et navigue jusqu'au fichier il ne te restera plus qu'à faire un `ctrl-c` et le tour est joué 👌

{% picture posts/{{ page.guid }}/racine-file-editor-homeassistant-ssl-rsync-folder.png --alt désactive l'option enforce basepath dans file editor --img width="940" height="313" %}


## Paramétrage côté NAS

Direction NAS, **je pars du principe que tu maitrises ce merveilleux logiciel de gestions de contenus** !. Allez go ! onglet utilisateurs > paramètres et coche la case répertoires personnels des utilisateurs ainsi l'utilisateur créé **Nicotest** aura un répertoire dans **/export/data/Backup/Nicotest**, tu n'es pas obligé de créer ces répertoires automatiquement si tu ne le souhaite pas, **et tu peux le créer automatiquement**, cependant n'oubli pas de donner les droits correspondants en récursifs aux sous dossiers et fichiers pour se faire suis les étapes.

{% highlight shell %}
ssh -p 22 xxx.xxx.xxx.xxx -l root # connection en ssh au NAS
mkdir ../../Nicotest
chown -R Nicotest:users Nicotest
{% endhighlight %}

{% picture posts/{{ page.guid }}/activer-repertoire-personnel-des-utilisateurs-omv.png --alt Activer le répertoire personnel dans OMV --img width="940" height="446" %}

**Passons à l'étape de création de l'utilisateur:**
- Nom: Nicotest
- Mot de passe
- Groupe: **sélectionne bien _ssh**

Ensuite valide et vérifie bien que ton utilisateur **a bien les droits pour _ssh et users**

{% picture posts/{{ page.guid }}/parametrer-utilisateurs-omv.png --alt Paramétrage de l'utilisateur final dans OMV --img width="940" height="446" %}

Maintenant **il faut copier la clé ssh** précédemment prise dans Home assistant.

{%- include alert.html type="warning" text="lors de la copie de la clé dans home assistant un retour à la ligne est copiée avec, il faudra supprimr ce retour à la ligne dans OMV pour que la clé soit correctement reconnue sans ça tu ne pourras l'ajouter" %}

{% picture posts/{{ page.guid }}/parametrer-utilisateurs-omv-cle-ssh.png --alt Colle la clé ssh pour l'utilisateur dan OMV --img width="940" height="453" %}

**Maintenant tu peux enregistrer l'utilisateur.**

{% picture posts/{{ page.guid }}/generation-utilisateur-final-omv.png --alt Génération de l'utilisateur omv compatible Rsync --img width="940" height="446" %}

Voilà tout ce que tu as a créer côté OMV, simple rapide et efficace, **il n'est pas utilie d'installer l'extension Rsync pour OMV.**

## Check avant lancement

Passons en revue les étapes avant le **démarrage final** rsync pour Home assistant

### Sauvegardes Home Assistant

Il faut bien sûr avoir des **sauvegardes sur Home assistant** pour vérifier le bon fonctionnement de l'ensemble, et oui nativement Home Assistant gère les sauvegardes.

Rendez-vous dans **Paramètres > Systèmes > Sauvegardes**, si les *sauvegardes automatiques ne sont pas configurés je te conseil vivement de le faire*

{% picture posts/{{ page.guid }}/configuration-sauvegarde-home-assistant.png --alt Sauvegarde disponible dans Home assistant --img width="940" height="522" %}

Tu peux voir sur ma config ci-dessus que je n'ai pas de sauvegardes automatiques de créé, normal c'est une installation test, mais j'ai tout de même deux sauvegardes de paramétrées.

### Rsync dans Home Assistant

Nous sommes prêt désormais à lancer une seconde fois rsync ( comme dit plus haut une fois la tâche réalisée Rsync s'arrête il faudra créer ultérieurement une automatisation )

{% picture posts/{{ page.guid }}/desactivation-automatique-rsync-apres-demarrage.png --alt désactivation automatique de rsync après synchronisation --img width="940" height="522" %}

> une fois le démarrage fait **consultons les logs**

{% picture posts/{{ page.guid }}/logs-final-rsync-home-assistant-tout-fonctionne.png --alt Logs rsync tout fonctionne --img width="940" height="522" %}

**Alors décorticons la ligne de commande**

{% highlight shell %}
rsync --archive --recursive --compress --delete --prune-empty-dirs \
-e 'ssh -p 22 -i /ssl/rsync/id_rsa -oStrictHostKeyChecking=no' \
/backup
{% endhighlight %}

**Cette commande :**

1. Synchronise /backup
2. En mode sauvegarde complète (droits, dates, etc.)
3. Via SSH avec clé privée
4. Avec compression
5. En supprimant les fichiers obsolètes côté destination
6. En nettoyant les dossiers vides
7. Sans interaction utilisateur (idéal pour un cron)

> Complet et efficace.

En ssh je me connecte au serveur NAS et effectivement tout est enregistré **dans un dossier backup/**

{% picture posts/{{ page.guid }}/verification-copies-fichiers-dans-arborescence-omv.png --alt Vérifications copies sur serveur NAS --img width="662" height="472" %}

> Les fichiers **sont biens copiés et vérifiés côté OMV**

## Création d'une automatisation Home Assistant

**Maintenant nous allons créé une automatisation** qui se lancera **x fois** par jours et démarrera le module complémentaire rsync.

Je sais c'est pas pratique mais du fait de la simplification des automatisations sur les dernières versions de Home-Assistant *j'ai tout de même décidé de réaliser un gif animé. *

![Création d'une automatisation tâche crom et lancement module rsync]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/creation-automatisation-lancement-rsync-backup-home-assistant-demarrage-module-complementaire.webp{{ cachebuster }}){: width="940" height="522" class="lazyload pictaninpost"}{: target="_blank"}

## Conclusion

Rsync est une façon simple d'externaliser les sauvegardes home assistant sur un NAS, *bien moins lourdes que syncthing*, de préférence équipé d'openmediavault. Merci Poeschl, merci OMV, la sécurité avant tout. 🫵




