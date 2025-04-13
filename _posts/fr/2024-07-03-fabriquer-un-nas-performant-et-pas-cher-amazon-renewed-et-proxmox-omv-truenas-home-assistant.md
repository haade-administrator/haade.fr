---
guid: 132
title: "NAS performant et pas cher multi-services Proxmox"
description: "Petit tutos comment fabriquer un NAS pas cher multi-disques d'occasion grâce à Amazon renewed et installer un serveur VM proxmox pour OMV ou TrueNAS avec HomeAssistant OS et Frigate NVR"
ref: ""
layout: post
authors: [Nico]
date: 2024-07-03 21:20
last_modified_at: 
categories: [Haade-lab, News, Home-Assistant, Securite]
tags: []
video: 
image: 'monter-nas-pas-cher-et-performant-proxmox-sans-disque-dur.png'
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
  - https://www.proxmox.com/en/
  - https://www.domo-blog.fr/creer-serveur-virtualisation-proxmox-installer-home-assistant-simplement/
  - https://www.cachem.fr/home-assistant-installation-proxmox/
---

Tu trouveras sur internet **plusieurs façons des NAS à base de mini-pc** performant mais pour une performance **équivalente à de l'intel i5 ou i7** les prix peuvent vite s'envoler. 
*Ce type de tutos n'est pas le premier sur la toile* mais je vais te proposer une façon simple de faire un NAS à base de matériel intel i5 **reconditionnés** et pas cher et te montrer comment installer OMV ou Truenas sur proxmox pour la gestion de l'ensemble. **Petite cerise sur le gâteau** tu pourras en parallèle installer de manière simple HomeAssistant OS (HAOS) et le gestionnaire NVR Frigate grâce aux VM Proxmox et ainsi Allier facilement NAS et Domotique sur le système.

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Prérequis

- Un Mini **PC Lenovo ou HP** reconditionné avec Intel I5 minimum
- 8 GO DDram minimum
- 128-256GO de disque dur
- Une station d'accueil DD avec **USB 3.0**
- une clé USB (pour intégrer Proxmox)

## Le Coeur du système

**Beaucoup de sites vantent les mérites de mini-pc à la puissance surréaliste**, mais souvent quand tu veux investir dans l'achat d'un tel appareil équipé d'un processeur i5 ou équivalent **les prix s'envolent**. Mais tu pourrais aussi bien t'équiper d'un mini-pc puissant **reconditionné**. Il y en a plein sur le marché comme le Lenovo thinkcentre M7X ou HP EliteDesk 800 et si tu te débrouille bien tu pourrais en acquérir un pour **à peine plus de 100€**, ils ont l'avantage d'être complet et adapté aux serveurs multi-services pouvant accueillir un gestionnaire NAS des plus performants.

### Lenovo Thinkcentre

Le Lenovo thinkcentre est petit tu pourras faire évoluer la capacité de la mémoire RAM et même y intégrer un [google Coral M2 A+E](https://buyzero.de/products/google-coral-m-2-accelerator-a-e-key?_pos=2&_sid=938384f21&_ss=r){: target="_blank"} à la place de la carte wifi M2 key A+E. De plus le boitier est en acier, et **les ports usb sont tous en 3.2 qui peuvent atteindre un taux de vitesse théorique de 20Gbs**.

{% include product-embed.html image="lenovo-thincentre-M710Q.png" brand="Lenovo" description="<b>(155€)</b> Lenovo ThinkCentre M710q Tiny Intel Quad Core i5 256 Go SSD 8 Go Mémoire Windows 11 Pro avec W-LAN Business Desktop Computer Mini PC (reconditionné)" amazlink="3RLQGRe" %}

### HP Elitedesk 800

Comme pour le Lenovo, le HP Elitedesk et très petit, tu pourras aussi faire évoluer la mémoire **jusqu'à 32GO** facilement. Il dispose aussi d'une carte wifi M2 A+E donc là aussi tu pourrais y intégrer un google [Coral M2 A+E](https://buyzero.de/products/google-coral-m-2-accelerator-a-e-key?_pos=2&_sid=938384f21&_ss=r){: target="_blank"}, le boitier est aussi en acier et tous **les ports USB sont en 3.0 avec un débit théorique maxi de 5Gbs**.

[Fiche technique HP Elitedesk 88 g2](https://support.hp.com/ch-fr/document/c04849385){: target="_blank"}

{% include product-embed.html image="hp-elitedesk-800-G2-i5.png" brand="HP" description="<b>(114€)</b> HP EliteDesk 800 G2 Ordinateur de Bureau Mini USDT Intel Quad Core i5 256 Go SSD 8 Go Win 10 Pro MAR Ultra Slim Mini PC (reconditionné)" amazlink="4cFkff9" %}

### Le Stockage disque NAS

Aucun des deux cités ci-dessus ne peuvent intégrer de disques durs 3,5", néanmoins ils peuvent intégrer en plus du disque du Nvme un **second disque dur de format SSD**. Si tu désires faire un NAS il te faudra plus de stockages de secours alors tu pourras t'équiper d'une **station d'accueil Orico** par exemple qui te permettras de connecter plusieurs disques en usb 3.0.

> Ça a l'avantage de ne pas avoir besoin de bricoler, tu connectes et c'est parti.

{% include product-embed.html image="orico-bay-5-disques-SATA-usb3.png" brand="Orico" description="<b>(87 - 119€)</b> ORICO Station d'accueil <b>USB 3.0</b> pour Disques Durs/SSD 2,5 et 3,5 pouces, HDD Dock Externe sans Outil, Prise en Charge Clonage Hors Ligne, Capacité Jusqu'à 5 x 18TB (6558US3-C)" affiliate="_DERFPQJ" amazlink="4bpk6LW" %}

{% include product-embed.html image="station-accueil-sabrent.png" brand="Sabrent" description="<b>(89€)</b> Station d'accueil du Disque Dur SATA 2,5 et 3,5 pouces Pouces, 4 Baies Adaptateur SSD/HDD vers <b>USB 3.2</b>, Boitier externe pour Disque Dur, clonage Hors Ligne, Supporte UASP, câble USB Inclus (DS-U3B4)" amazlink="4eXQp7I" %}

### Les disques durs

Un NAS a besoin de disques particuliés, qui sont des **disques Durs RED**, et c'est ce qui est le plus cher en terme d'équipement d'un NAS. Avec le **Seagate 4TO** tu pourras pour environ 400€ acheter 4dd et faire ton NAS.

{% include product-embed.html image="dd-red-nas-seagate-4GB.png" brand="Seagate" description="<b>(4 x 105€)</b> IronWolf Pro 4 To, Disque dur interne NAS HDD, CMR 3,5 pouces SATA 6 Gbit/s 7 200 tr/min, 128 Mo de mémoire cache, pour NAS RAID, services Rescue valables 3 ans (ST4000NE001)" amazlink="4criGSc" %}

### Le tarif Final

Pour en revenir à nos moutons si tu suis ce modèle d'achat, l'installation **te coûtera 240€** environ sans les DD **et 640€ avec**. Si tu décides de modifier la RAM il faudra **rajouter 86€ pour 32 GO** et si tu veux rajouter un **google Coral compte 45€ Livré**.

Bref **pour 771€** tu auras un système complet avec 16To de stockage et pouvant accueillir **OMV** ou **TrueNAS** pour le serveur NAS, **Frigate** pour la partie NVR et **Home Assistant version OS** pour le côté domotique. **Pas si cher pour un tout en un.**

## L'installation

### Proxmox

{%- include alert.html type="info" text="Si tu utilises ZFS sur Proxmox ou à travers Proxmox ( Truenas ou Omv ) je te conseil vivement d'augmenter la capacité de mémoire à 32GO" link="https://amzn.to/3XIbUDe" textlink="Mémoire Crucial SODIMM DDR4" %}

Pour **l'installation de Proxmox rien de bien compliqué**, commence par télécharger le fichier ISO , copie le sur une clé USB à l'aide de l'utilitaire [Rufus](https://rufus.ie/fr/){: target="_blank"}/[Ventoy](https://www.ventoy.net/en/index.html){: target="_blank"}/[Balenaetcher](https://etcher.balena.io/){: target="_blank"}, redémarre le pc et boot sur la clé USB ( souvent touche F8 ), ensuite répond aux deux trois questions et le tour est joué. Pour terminer connecte toi ```Adresse-ip:8006```

[Lien téléchargement Proxmox VE 8.2.X au format iso](https://www.proxmox.com/en/downloads){: target="_blank"}

Retrouve ci dessous la page du site regroupant les scripts d'installations VM ou LXC des différents soft à installer pour les étapes suivantes.

[Script d'installations shel automatisés pour Proxmox VE](https://community-scripts.github.io/ProxmoxVE/scripts){: target="_blank"}

#### Changer les dépots 

Par défaut les dépôts de mises à jours **Proxmox intègrent des dépôts entreprises** soumis à un abonnement payant. Donc dans le gif animé ci-dessous je te montre comment désactiver les déôts entreprises et rajouter simplement un dépôt **No-Subscription**. Pour terminer actualise les paquets et fait les mises à jours Proxmox.

Rends-toi dans l'onglet **Proxmox > Mises à jours > Dépots** pour changer les dépots, ensuite va dans mise à jour clic sur rafraîchir et mettre à jour.

![Suppression des dépôts entreprise Proxmox et ajout d'un dépôt No-Subscription]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/mise-a-jour-des-depots-proxmox-et-desactiver-depots-entreprises.webp{{ cachebuster }}){: width="940" height="472" class="lazyload pictaninpost"}

{%- include alert.html type="info" text="Proxmox te déconseil d'utiliser le dépôt no-subscription dans un environnement de production, car moins suivi que le dépôt entreprise normal" %}

#### Désactiver l’affichage sur l’écran du serveur au bout de 60 secondes

Afin **d'optimiser l'économie d'énergie** il est possible de désactiver l’affichage de l’écran au bout de 60 secondes.

**Pour cela, éditez le fichier suivant:**

{% highlight shell %}
nano /etc/default/grub
{% endhighlight %}

Puis modifie la ligne **GRUB_CMDLINE_LINUX=””** par:

{% highlight shell %}
GRUB_CMDLINE_LINUX="consoleblank=60"
{% endhighlight %}

Enfin, applique le changement:

{% highlight shell %}
update-grub
{% endhighlight %}

Pour terminer **redémarre le système**

{% highlight shell %}
reboot
{% endhighlight %}

### Avant de poursuivre les étapes suivantes

Il existe de nombreuses façons d'installer des images dans un container:

- soit directement avec les container LXC Proxmox
- soit d'installer un container docker LXC  avec portainer et d'installer au travers ce container OMV et/ou Frigate.
- si tu installes OMV tu peux décider d'intégrer Docker dans OMV et installer Frigate dans l'architecture.

**Toutes les façons sont bonnes à prendre**, à toi de voir comment tu veux monter ton architecture.

### OMV

L'installation d'omv est **ultra simplifiée** grâce au script **tteck**. Rends toi dans l'onglet Proxmox et clic sur shell, pour accéder au terminal ensuite colle le script et lance le tout, après quelques minutes l'installation est terminée. Tu pourras te rendre sur OMV.

[Script d'installations shell OMV automatisés pour Proxmox VE](https://community-scripts.github.io/ProxmoxVE/scripts?id=omv){: target="_blank"}

En **règle général 8GO de mémoire sodimm DDR4 en 2133Mhz** suffisent pour faire tourner ces 1 Machine virtuelle, et deux containers LXC. Le plus gourmand reste Frigate cependant si tu décides d'avoir un système qui ne se retranche pas dans ses limites ou si tu décides de monter un système **RAID en ZFS** il te faudra davantage de mémoires je te conseil donc d'en rajouter/remplacer suivant le pc choisi.

![Installation en 1 clic de openmediavault dans un container LXC sous Proxmox]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/installation-openmediavault-proxmox-container.webp{{ cachebuster }}){: width="940" height="472" class="lazyload pictaninpost"}

**Regarde les caractéristiques de ton PC dans mon cas ce sont des SODIMM DDR4 2666Mhz:**

{% include product-embed.html image="ram-crusial-sodimm-2666-2x16GO.png" brand="Crucial" description="<b>(86€)</b> Crucial RAM CT2K16G4SFRA32A 32Go Kit (2x16Go) DDR4 3200MHz CL22 (ou 2933MHz ou 2666MHz) Mémoire Portable" amazlink="3xENAHO" %}

### TrueNas Scale

Contrairement à OMV l'installation de **Truenas n'est pas automatisé** dans Proxmox il faudra créer une Machine virtuelle à partir de l'image **.iso** de Truenas Scale.

![Installation en 3 clics de Truenas sur Proxmox VE à l'aide de l'image officielle d'installation]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/installation-truenas-proxmox-nas-pas-cher.webp{{ cachebuster }}){: width="940" height="470" class="lazyload pictaninpost"}

Aussi **Truenas Scale s'installe dans une VM** qui est beaucoup plus gourmand qu'un container de plus le système de gestion des disques n'est possible qu'en RAID ZFS, donc il faudra absolument augmenter la taille de la mémoire et passer sur **au moins 16GO** mais je te conseil **32GO**.

> À choisir je te conseil OMV par rapport à TrueNAS qui sera dans l'ensemble moins gourmand car il peut s'installer dans un container.

Ci-dessous une vidéo de **Zatoufly** qui reprend l'installation de Truenas en passtrought dans Proxmox.

{% include videoPlayer.html youtubeId="va99DvC2rdk" %}


### Home Assistant

Comme pour OMV ou Frigate l'installation de Homeassistant OS est tout aussi simple grâce au **script de tteck**, tu auras même plusieurs script pour installer Home Assistant mais un seul te permettras d'installer HAOS. 

{%- include alert.html type="info" text="Attention à bien régler le nombre de coeur et la RAM en fonction des deux autres pour la stabilité de ton système." %}

[Script d'installation shell HAOS automatisés pour Proxmox VE](https://community-scripts.github.io/ProxmoxVE/scripts?id=haos-vm){: target="_blank"}

![Installation en 1 clic de Home Assistant OS comme machine virtuelle sur Proxmox VE à l'aide du script]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/installation-homeassistant-os-proxmox-lxc.webp{{ cachebuster }}){: width="940" height="472" class="lazyload pictaninpost"}

### Frigate NVR

Là aussi il existe un script pour installer Frigate dans un container LXC Proxmox, suis les étapes et tu auras un résultat positif. 

Si suite à ça tu rencontres des difficultés avec l'accélération matérielle tu peux installer frigate à travers docker en installant [docker dans Proxmox](https://community-scripts.github.io/ProxmoxVE/scripts?id=docker){: target="_blank"}. Ainsi tu pourras paramétrer aux petits oignons l'instance Frigate avec toutes les options nécessaires.

[Script d'installations shell Frigate automatisés pour Proxmox VE](https://community-scripts.github.io/ProxmoxVE/scripts?id=frigate){: target="_blank"}

> Mais si tu décides d'utiliser OMV comme NAS alors je te conseil de l'installer au travers du container LXC docker à côté de frigate et non via le script.

{% picture posts/{{ page.guid }}/resultat-installation-frigate-proxmox.png --alt Installation frigate dans proxmox VE --img width="940" height="472" %}

**Ci dessous quelques liens d'informations concernant Frigate**

[Frigate NVR](https://frigate.video/){: target="_blank"}

[Frigate NVR Documentation](https://docs.frigate.video/){: target="_blank"}

[Frigate google Coral](https://docs.frigate.video/){: target="_blank"}

#### Google Coral A+E M2 key

Si tu utilises Frigate **je te conseil vivement d'utiliser un Google Coral** et si comme moi tu utilises un PC Lenovo Thinkcentre M710Q tu pourras connecter le coral à la place de la carte WIFI M2 interne enfin si tu n'as pas besoin du WIFI ( certains pc n'ont pas la carte wifi intégré mais le socket est bien présent. )

[Achat google coral tarif intéressant A+E M2 key sur BuyZero 45€ livré](https://buyzero.de/products/google-coral-m-2-accelerator-a-e-key?_pos=2&_sid=938384f21&_ss=r){: target="_blank"}

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Performance

Afin de se rendre compte de la charge du serveur et la gestion de la RAM je te met les captures d'écrans en fonctions des services installés, ils tiennent compte du pc lenovo thinkcentre avec 4 coeurs et 8GO de RAM total.

### OMV-Frigate-HomeAssistant

{% picture posts/{{ page.guid }}/stat-perf-omv-frigate-haos.png --alt Statistique performance omv, frigate, homeassistant OS installé dans proxmox --img width="940" height="471" %}

### TrueNas-Frigate-HomeAssistant

{% picture posts/{{ page.guid }}/stat-perf-truenas-frigate-haos.png --alt Statistique performance truenas, frigate, homeassistant OS installé dans proxmox --img width="940" height="471" %}

### OMV-HomeAssistant

{% picture posts/{{ page.guid }}/stat-perf-omv-haos.png --alt Statistique performance OMV et homeassistant OS installé dans proxmox --img width="940" height="471" %}

### Frigate-HomeAssistant

{% picture posts/{{ page.guid }}/stat-perf-frigate-haos.png --alt Statistique performance frigate NVR et homeassistant OS installé dans proxmox --img width="940" height="454" %}

## Conclusion

Voilà une façon simple de travailler avec un mini pc reconditionné et de l'utiliser comme NAS, NVR et serveur Domotique en même temps. Et ainsi optimser le coût de reviens d'un tel système.
Par ordre Alphabétique les plus gourmands en mémoires RAM sont:
1. TrueNAS (16Go mini)
2. Frigate ( dépend de l'intégration d'un google Coral )
3. OMV (dépend de RAID ou ZFS soit de 4Go à 16Go mini)
4. Home Assistant ( 2Go mini )

> Je te conseil tout de même d'augmenter la mémoire RAM qui est souvent de 8Go et de la passer à 32Go ainsi tu pourras cumuler les VM.