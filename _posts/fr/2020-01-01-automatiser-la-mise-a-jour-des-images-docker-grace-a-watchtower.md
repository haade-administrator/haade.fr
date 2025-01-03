---
guid: 2
date: '2020-01-01T19:16:57+00:00'
last_modified_at:
authors: Nico
categories: [Domotique, Haade-lab, Mini-tutos]
layout: post
image: automatiser-mise-a-jour-image-sur-docker-avec-watchtower-1.png
tags:
description: "Rendre automatique les mises à jour des images docker grâce à watchtower"
locale: fr_FR
addViews: 1085
published: true
noindex: false
beforetoc:
toc: true
comments: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
redirect_from:
  - /fr/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/docker-deployer-des-applications/automatiser-la-mise-a-jour-des-images-docker-grace-a-watchtower/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/docker-deployer-des-applications/automatiser-la-mise-a-jour-des-images-docker-grace-a-watchtower/
  - /blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/docker-deployer-des-applications/automatiser-la-mise-a-jour-des-images-docker-grace-a-watchtower/
  - /blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/automatiser-la-mise-a-jour-des-images-docker-grace-a-watchtower/
---
Pour commencer, l’utilisation de docker est d’une simplicité déconcertante, tellement déconcertante que l’on a tendance à ouvrir beaucoup de container à l’intérieur de notre propre système. Par exemple sur le NAS du domicile j’ai 12 containers qui tournent en même temps et tout ça n’utilise que 10% de mes ressources processeurs/mémoires. ***Alors utiliser docker c’est bien mais automatiser la mise à jour des images docker avec watchtower c’est primoridal pour la sécurité.*** C’est pourquoi j’ai installé l’image watchtower « tour de guet » en bon français.

## À quoi sert Watchtower

Alors que fait cette image. Avec watchtower, vous pouvez mettre à jour la version en cours d’exécution de votre application conteneurisée simplement en poussant une nouvelle image vers le Docker Hub ou votre propre registre d’images. Watchtower supprimera votre ancienne image, fermera gracieusement votre conteneur existant et le redémarrera avec les mêmes options que celles utilisées lors de son déploiement initial. Exécutez le conteneur Watchtower avec la commande suivante:

{% highlight docker %}
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower
{% endhighlight %}


watchtower fermera proprement votre container existant en enregistrant les options et arguments de son déploiement initial.

Ensuite tour de guet téléchargeras l’application nouvelle image , une fois la nouvelle image installée, l’ancienne image pourras être supprimée automatiquement.

pour finir watchtower ouvrira le container avec toutes ses options initialement déployées.

parmi les options que je trouve les plus intéressantes de watchtower on peut:

- choisir de supprimer l’ancienne image pratique car le stockage des images peut être conséquent
- être notifié par email par exemple lors d’une mise à jour
- lancer une tâche Caron la nuit par exemple de vérification pour ne pas surcharger ses ressources en pleins jours où bloquer l’accès à un de ses sites WordPress par exemple.
- choisir de ne mettre à jour que certaines images

### Documentation officielle de Watchtower

Ci joint la documentation officielle de Watchtower   
[Documentation officielle Watchtower](https://containrrr.github.io/watchtower/){: target="_blank"}

Liste des Arguments disponibles  
[Arguments Watchtower](https://containrrr.github.io/watchtower/arguments/){: target="_blank"}

Le code docker ci-dessous avec l’argument
`--schedule "0 2 * * *`
nous permet de programmer la recherche de mise à jour des images à 2h00 du matin afin de ne pas stopper les services des images en cours le jour.

### Générateur d’horaire Cron

[générateur crontab Watchtower](https://toolki.com/fr/crontab){: target="_blank"}

Ce qui pourrait être dérangeant si nous avons un site wordpress par exemple. L’argument `--cleanup` nous permet d’effacer l’ancienne image après une mise à jour réussi. Afin de ne pas saturer notre disque dur inutilement.

{% highlight docker %}
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    --restart always \
    containrrr/watchtower \
    --schedule "0 2 * * *" \
    --cleanup
{% endhighlight %}


Si On veut faire les mises à jours de certaines images il suffit de mettre le nom des **images containers concernées**. Ainsi dans l’exemple ci-dessous seul les images nommé [Jeedom]({% post_url /fr/2019-12-09-installation-complete-et-securisee-de-jeedom-sur-docker %}) et Homeassistant seront mises à jour.

{% highlight docker %}
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower \
    jeedom homeassistant
{% endhighlight %}

Pour Conclure j’utilise personnellement Watchtower depuis de nombreux mois sur une douzaine de containers et je n’ai jamais rencontré de problèmes suite à une mise à jour. ***C’est un indispensable de la virtualisation Docker***. Beaucoup d’images ont validés leurs compatibilités, comme celle générées par linuxserver.io
