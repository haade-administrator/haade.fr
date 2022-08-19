---
guid: 21
title: "Zoneminder, home assistant et Machinelearning"
description: "Intégration du système de gestion de caméra Zoneminder dans homeassistant avece activation du machinelearning"
layout: post
author: Nico
date: "2021-09-25"
last_modified_at:
categories: Domotique Securite
tags: Tutoriel Zoneminder Homeassistant
image: "zoneminder_homeassistant-1"
published: true
locale: fr_FR
toc: true
beforetoc:
comments: true
---
[Dlandon](https://hub.docker.com/r/dlandon/zoneminder.machine.learning){:target="_blank"} a sorti cette année une image Docker complète avec Zoneminder et le Machinelearning, l'intégration dans home assistant est complète. C'est pourqoui cet article devait absolument voir le jour. Depuis moins d'un an l'installation sous docker a été largement simplifié. De plus le **machinelearning est très complet** grâce à la détection d'objets, détection faciale, reconnaissance faciale, reconnaissance de plaques, etc... .

## Prérequis:

- Home assistant core ou HAOS d'installé et fonctionnel
- Ordinateur traditionnel avec DD ou de type NAS
- Docker installé et fonctionnel sur l'ordinateur
- Savoir utiliser l'environnement docker pour installer et configurer Zoneminder

## L'environnement d'installation:

Zoneminder va être installé sur un NAS qui tourne sous Openmediavault avec docker. Ce choix est presque indispensable, d'une part le processeur CPU/GPU est relativement puissant, de plus le stockage des vidéos peut devenir très envahissant. Je déconseille l'installation de Zoneminder sur un Raspberry pi, pas assez puissant pour zm et le Machinelearning actif.

quand à home assistant OS, il est installé sur un Raspberry pi depuis peut, avant j'utilisais home-assistant core qui tournait dans un container sur le NAS.

ci-dessous on retrouve la [commande docker que l'on retrouve dans la documentation du dépôt github](https://github.com/dlandon/zoneminder.machine.learning){:target="_blank"}.

```docker
docker run -d --name="Zoneminder" \
--net="bridge" \
--privileged="false" \
--shm-size="8G" \
-p 8443:443/tcp \
-p 9000:9000/tcp \
-e TZ="America/New_York" \
-e PUID="99" \
-e PGID="100" \
-e MULTI_PORT_START="0" \
-e MULTI_PORT_END="0" \
-v "/mnt/Zoneminder":"/config":rw \
-v "/mnt/Zoneminder/data":"/var/cache/zoneminder":rw \
dlandon/zoneminder.machine.learning
```

Exemple de configurations personnalisés "celle que j'utilise" pour Openmediavault, il faut penser à personnaliser le timezone TZ ainsi que tout volume de montage. Tu peux installer ZM non sécurisé avec le port **\-p 8080:80**, cependant je conseil vivement de faire l'installation en ssl, letsencrypt fait partie du container. Un plus !

```docker
docker run -d --name="Zoneminder" \
--net="bridge" \
--privileged="false" \
--shm-size="8G" \
-p 8443:443/tcp \
-p 9000:9000/tcp \
-e TZ="Europe/Paris" \
-e PUID="1000" \
-e PGID="100" \
-e MULTI_PORT_START="0" \
-e MULTI_PORT_END="0" \
-v "/sharedfolder/Appdata/Zoneminder":"/config":rw \
-v "/sharedfolder/Télésurveillance/Zoneminder":"/var/cache/zoneminder":rw \
dlandon/zoneminder.machine.learning
```

Après lancement de l'image l'installation se fait rapidement grâce au travail de dlandon sur l'image. Auparavant avec l'ancienne image de Zoneminder il fallait patienter 20 à 40 minutes, la partie ES et ML prenait pas mal de temps. **Maintenant Zoneminder et Le paquet ZMEventnotification** s'installent **en moins de 5 minutes**.

PS: Si tu veux utiliser une [installation sous docker-compose tu trouvera le code ici.](https://github.com/dlandon/zoneminder.machine.learning/blob/master/docker-compose.yaml){:target="_blank"}

## 1 - Préparation de Zoneminder pour Home assistant et Machinelearning ML

## Protection par mot de passe de Zoneminder

Modifier l'utilisateur par défaut **Admin** dan options >>> utilisateurs et paramétrez un mot de passe

Ensuite dans Options >>> Systèmes

Cochez les cases comme l'image ci-dessous et rentrez un code Hashsecret pour plus de sécurité

1. OPT-USE\_AUTH: authentification par mot de passe
2. AUTH\_HASH\_SECRET: Code supplémentaire ( [tu peux générer un code ici](https://www.md5hashgenerator.com/){:target="_blank"} )
3. AUTH\_HASH\_LOGINS: prendre en compte la double sécurisation
4. OPT\_USE\_API: Activer l'API Zoneminder
5. OPT\_USE\_LEGACI\_API\_AUTH: activer l'uthentification API
6. OPT\_USE\_EVENTNOTIFICATION: Prise en compte du machine learning

![paramétrage option zoneminder]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/capture-options-systemes-zoneminder-820.webp{{ cachebuster }})

## Mise en place pour Home Assistant

Ensuite il faut créer un utilisateur dédié à Homeassistant avec une ouverture aux API Zoneminder:

Options >>> Utilisateurs >> Ajouter utilisateurs

![paramétrage utilisateur zoneminder]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/capture-utilisateur-zoneminder-820.webp{{ cachebuster }})

## 2 - Paramétrage du Machinelearning ( ZMEVENTNOTIFICATION )

Pour commencer l'intégralité de la documentation est disponible à cette adresse [https://zmeventnotification.readthedocs.io/](https://zmeventnotification.readthedocs.io/){:target="_blank"}

Pour le machinelearning nous avons 3 fichiers à personnaliser pour ces 3 fichiers il existe d'ailleurs un doublon en exemple. Donc il s'agit des fichiers secret.ini qui contien tous les mots de passes et objectconfig.ini contient chaque paramétrage pour chaque caméra en gros on indique ce que l'on veut que Zmeventnotification analyse en fonction de chaque caméra.

secrets.ini doit ressembler à ça ( **dans ma config je n'utilise pas** l'api ML, OpenAlpr, Escontrol, Mqtt et Pushover )

```bash
# your secrets file
[secrets]

# fid can have the following values:
# a particular <frameid>, alarm or snapshot
# starting ZM 1.35, you can also specify
# objdetect_mp4, objdetect_gif or objdetect_image
# this needs create_animation enabled in objectconfig.ini and associated flags
ZMES_PICTURE_URL=https://example.com/zm/index.php?view=image&eid=EVENTID&fid=objdetect&width=600 # À PERSONNALISER

ZM_USER=haos # À PERSONNALISER
ZM_PASSWORD=JaImEin3t3rdesMoTs # À PERSONNALISER
ES_ADMIN_INTERFACE_PASSWORD=i3i3gr0tUiY # À PERSONNALISER

ZM_PORTAL=https://example.com/zm # À PERSONNALISER
ZM_API_PORTAL=https://example.com/zm/api # À PERSONNALISER

ES_CERT_FILE = /etc/apache2/ssl/zoneminder.crt
ES_KEY_FILE = /etc/apache2/ssl/zoneminder.key

ML_USER=your_mlapi_user
ML_PASSWORD=your_mlapi_password
PLATEREC_ALPR_KEY=your_platerec_api_key # celui que j'utilise
OPENALPR_ALPR_KEY=your_openalpr_api_key

ESCONTROL_INTERFACE_PASSWORD=yourescontrolpassword

MQTT_USERNAME=your_mqtt_username
MQTT_PASSWORD=your_mqtt_password

PUSHOVER_APP_TOKEN=your_pushover_app_token
PUSHOVER_USER_KEY=your_pushover_user_key
```

Au tour de **objectconfig.ini** qui doit ressembler au code ci-dessous. Avec la nouvelle version de ZMeventnotification, le paramétrage des moniteurs à été très simplifié

[Clic ici si tu veux lire la doc officielle.](https://zmeventnotification.readthedocs.io/en/latest/guides/hooks.html){:target="_blank"}

Pour ces paramétrages n'hésitez pas à m'écrire mais dans premier lieu il s'agit de modifier les **\[monitor-x\]** en effet on ne met pas le nom de sa caméra mais si celle-ci est en première position on l’appellera monitor-1 et ainsi de suite, ci-dessous un exemple de monitoring de garage.

```bash

[monitor-1]
# mon garage
model_sequence=alpr,object
object_detection_pattern=(person|car|motorbike)

[monitor-2]
#doorbell
model_sequence=face,object
object_detection_pattern=(person)

[ml]
use_sequence= yes # Important pour la prise en charge du nouveau système
```

afin de pouvoir utiliser la capture d'images par personne il faut crée un dossier s'il n'existe pas dans ... nommé known\_faces et intégrer à l'intérieur un sous dossier nommé nicolas ensuite intégrer des photos de vous qui serons nommé 1-820.webp{{ cachebuster }}, 2-820.webp{{ cachebuster }}, etc. lien direct de l'architecture [https://zmeventnotification.readthedocs.io/en/latest/guides/hooks.html?highlight=known#known-faces-images](https://zmeventnotification.readthedocs.io/en/latest/guides/hooks.html?highlight=known#known-faces-images){:target="_blank"}

Une fois toutes les images insérées ou dès que tu ajoutes une nouvelle image, il faudra générer le train\_face, donc rentrons dans le docker zoneminder:

```docker
docker exec -it zoneminder /bin/bash
```

Une fois toutes les images intégrées dans le dossier ou en cas de rajout d'images lance la commande suivante afin de générer le trainface:

```bash
sudo -u www-data /var/lib/zmeventnotification/bin/zm_train_faces.py
```

redémarre les service

```bash
sudo service zoneminder restart
```

et voilà si tout s'est bien passé Zmeventnotification devrait être fonctionnel.

## 3 - Intégration de Zoneminder dans Home Assistant

les lignes de codes ci-dessous sont à rentrer dans la configuration.yaml de home-assistant pour connaître tous les paramètres consulte cette page officielle: [Intégration Zoneminder et Homeassistant](https://www.home-assistant.io/integrations/zoneminder/){:target="_blank"}.

![interface zoneminder dans home assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/detail-ha-zm-820.webp{{ cachebuster }})

interface complète de zoneminder dans home assistant

En plus de cette intégration dans home-assistant Zoneminder permet de faire remonter un service appelé z**oneminder.set\_run\_state**. Permet de Changer l'état de Zoneminder.

## Qu'est-ce qu'un état dans Zoneminder:

Un état dans Zoneminder permet de gérer les Modes des caméras comme bon nous semble juste en basculant sur cet état.

Par défaut il existe 3 états dans Zm:

1. **Arrêté:** il désactive toutes les caméras
2. **Redémarré:** il redémarre les caméras
3. **Défaut, EN MARCHE:** réglage par défaut

Pour Home Assistant j'ai créé deux nouveaux états, HOME c'est un état quand je suis au domicile, et AWAY quand je suis absent, ces états sont utilisés dans le cadre d'une automatisation par gestion d'alarme.

1. **HOME:** quand je suis à la maison les caméras intérieurs sont en mode Monitor et les extérieurs en Modect
2. **AWAY:** quand je suis absent elles passent toutes en Modect.

**IMPORTANT !** les modes des caméras sont à paramétrer avant l'enregistrement d'un nouvel état voir le Gif ci-dessous.

**AVANTAGE:** Par rapport au binary-sensor Zm qui permet de passer d'un mode à l'autre dans HA, le changement d'état est très pratique lorsque l'on veut choisir un autre mode, lorsqu'on à pleins de caméra et surtout simplifie les automatisations dans HA appel à un service sans avoir besoin de faire appel à chaque caméra ou de créer un groupe binary\_sensor Home ou Away dans group.yaml de HA.

![Paramétrage d'un état dans zoneminder]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/zoneminder-etat.webp)

## 4 - Fonctionnement des Modes dans Zoneminder:

- **Aucun:** Moniteur désactivé. Aucun flux visualisé ni aucun événement généré.
- **Nodect:** Il s'agit d'un mode spécial conçu pour travailler avec des déclencheurs externes. Dans Nodect, aucune détection de mouvement n'a lieu mais les événements sont enregistrés sur déclencheurs externes
- **Monitor:** Le moniteur n'est disponible que pour la diffusion en direct. Sans analyse d'images ou évènements.
- **Mocord:** Le moniteur enregistre en continu, tout mouvement étant mis en évidence dans ces événements.
- **Modect:** Le moniteur analyse les images et génère des événements. La vidéo enregistre sur mouvement durant un temps déterminé.
- **Record:** Le moniteur enregistre en continu. Des événements d'une durée fixe se génèrent quel que soit le mouvement, de la même manière qu'un enregistrement vidéo à intervalle de temps conventionnel. **Aucune détection de mouvement n'a lieu dans ce mode.**

## Fonctionnement des Zones dans Zoneminder

Un article est dédié aux zones et préréglages, clic ici !

## Fonctionnement de Filtres dans Zoneminder

Un article est dédié aux filtres, clic ici !

## En Conclusion

Pour finir **Zoneminder** n'a peut être pas l'interface la plus belle mais par sa gratuité et la stabilité il est certainement le meilleur outil de gestion de caméra du moment. Une fois que l'on maîtrise bien les différents aspects, il devient alors pratique intuitif et indispensable du point de vue sécurité, **l'intégration dans Home assistant est un plus non négligeable.**
