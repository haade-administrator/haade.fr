---
guid: 168
title: "Installe facilement Google Coral"
description: "Installation automatisée des drivers google gasket sur debian 13 ou Ovh 8 et ainsi d'utiliser la force du Tensorflow"
ref: "google-coral"
layout: post
authors: [Nico]
date: 2026-01-16 23:00
last_modified_at: 
categories: [Mini-tutos, Haade-lab]
tags: []
video: 
image: 'installation-automatisee-google-coral-debian-13-trixie-gasket-driver.png'
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
  - https://github.com/markfrancisonly/frigate_debian_scripts
  - https://frigate.video/
---
Après une réinstallation suite à un passage râté d'Openmediavault 6 à 8 qui je le rappelle est basé sur debian trixie, je me suis vite rendu compte que le Google Coral intallé dans le NAS ne fonctionnait plus sur mon Docker Frigate, j'ai voulu réinstallé en suivant la [manipulation officielles](https://www.coral.ai/docs/accelerator/get-started/#runtime-on-linux){: target="_blank"} mais je me suis vite rendu compte que ça ne fonctionnait plus pour Trixie.

Après quelques heures de recherches j'ai trouvé un répertoire Github rédigé par [markfrancisonly](https://github.com/markfrancisonly){: target="_blank"} avec plusieurs scripts shell, je tiens à souligner ce travail qui m'a permis de recontruire gasket presque sans efforts.

## Prérequis

- Debian Trixie à jour (bare-metal ou VM Proxmox)
- Noyau Linux **6.17** ou **Proxmox kernel équivalent**
- Un Google Coral USB ou M.2
- Docker et Docker Compose installés
- Accès root ou sudo

## Installation des dépendances

Avant de lancer le script installe ces dépendances supplémentaires non reprises dans le script, si tu n'as pas d'accès sudo tu pourras enregistrer un utilisateur à la place.

{% highlight shell %}
sudo apt update
sudo apt upgrade
sudo apt install git debhelper dh-dkms
{% endhighlight %}

**Important:** n'oublie pas de mettre à jour toutes les dépendances avant lancement du script repris ci-dessus dans les lignes de commandes.

## Installation du script

Ensuite télécharge le script de préférence dans le dossier temporaire de ton architecture Trixie

{% highlight shell %}
cd /tmp/
wget https://github.com/markfrancisonly/frigate_debian_scripts/raw/refs/heads/master/install_coral_tpu.sh
{% endhighlight %}

Ensuite rien de plus simple que de lancer et l'installation se passera sans encombres

{% highlight shell %}
sudo bash ./install_coral_tpu.sh --install
{% endhighlight %}

> À la fin du script un reboot sera nécessaire

Ce n'est pas fini ce script offre plusieurs options selon moi la plus importante après le redémarrage est d'avoir le ```--status``` de cette installation
Si l'installation ne s'est pas bien réalisée lance l'option ```--reinstall```, si c'est la construction de gasket qui a échoué du peux la relancer avec l'option ```--rebuild```.
Retrouve ci-dessous la nomenclature de toutes les options.

## Liste des options

**Usage:** sudo bash ./install_coral_tpu.sh [OPTION]

**Options:**
|**--status**|Afficher l'état de l'installation|
|**--install**|Installer le pilote et la bibliothèque TPU|
|**--uninstall**|Désinstaller le pilote et la bibliothèque TPU|
|**--reinstall**|Réinstaller le pilote TPU à partir des sources|
|**--rebuild**|Recompiler le pilote TPU pour le noyau actuel|
|**--setup-non-root [nom_utilisateur]**|Configurer l'accès non root pour l'utilisateur spécifié|

## Conclusion

Voilà un script comme on les aiment, grâce à lui ton tensorflow retrouvera toute son importance dans le NVR préféré des domoticiens, [Frigate](https://frigate.video/){: target="_blank"}. Un pas de plus vers la simplicité. 👌