---
guid: 101
title: "Installation HAOS avec Armbian Bookworm 12"
description: "2024 - Tutos installation de home assistant OS sur un cubietruck armv7 avec Armbian version Debian 12 Bookworm le tout facilement et sans erreurs"
ref: ""
layout: post
authors: Nico
date: 2023-12-26 10:54
last_modified_at: 
categories: [Haade-lab]
tags: []
image: 'installation-haos-armbian-cubietruck-2024.png'
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
  - https://github.com/armbian
  - https://github.com/home-assistant/supervised-installer
---
Nous sommes bientôt en 2024 et il est toujours aussi difficile d'installer Home Assistant OS sur des cartes non prises en charges. Pour le bien des test produits j'ai comme besoin d'installer HAOS sur une carte dédiée. Ça tombe bien il me reste dans les cartons une vieille carte Cubietruck donc je vais pouvoir faire des économies et ne pas investir dans un Raspberry pi.

Ce tuto te permettra d'installer facilement Home Assistant OS en utilisant ARMBIAN et l'une des cartes prises en charges par ce système, le tout sans avoir un message d'erreur dans Home Assistant et ainsi utiliser 100% du potentiel de cet assistant domestique.

# Prérequis
- Une carte prise en charge par Armbian
- Une Sdcard de qualité
- savoir utiliser un terminal
- connaître un minimum la connection en SSH

{%- include alert.html type="info" text="ce tuto est valable pour toutes les cartes fonctionnant avec Armbian il suffira d'adapter le téléchargement des images en fonction de l'architecture." link="https://www.armbian.com/" textlink="Site officiel Armbian" %}

> Suis scrupuleusement les étapes et tout devrait bien se passer 👌

## 1ère étape installer Armbian

J'ai de la chance la communauté Armbian développe toujours une image pour la vieille carte Cubietruck, en l'occurance Debian 12 "Bookworm".

{% include product-embed.html image="https://ae01.alicdn.com/kf/H1f8d2bf230484fbf90ab3443ba2c4a18C/SanDisk-Ultra-A1-carte-m-moire-Microsd-256-go-128-go-64-go-32-go-16.jpg_640x640.jpg_.webp" title="Sdcard Sandisk" brand="Sandisk" description="SanDisk Ultra A1 carte mémoire Microsd 256 go 128 go 64 go 32 go 16 go microSDHC/SDXC UHS-I U3 V30 TF carte micro sd carte mémoire" affiliate="_DFKKLEt" %}

Rien de plus simple [va sur la page dédiée](https://www.armbian.com/cubietruck/){: target="_blank"}, télécharge l'image et copie là sur une microsd à l'aide de [Rufus](https://rufus.ie/){: target="_blank"} ou [Balena Etcher](https://etcher.balena.io/){: target="_blank"}.

Si toi aussi tu possèdes une carte cubietruck et par curiosité du matériel tu trouveras des infos sur celle-ci sur le site [Sunxi](https://linux-sunxi.org/Cubietech_Cubietruck){: target="_blank"}

Une fois l'image copiée, insère là et lance la machine, patiente une dizaine de minutes avant de te connecter sur le système en SSH ou par interface graphique si tu préfères. Perso le tuto est rédigé en utilisant un terminal et par ssh.

Si tu ne connais pas Armbian découvre la vidéo officielle de présentation:

{% include videoPlayer.html youtubeId="hFrdyLc4g50?si=IuvHm3JgeHnWwiUM" %}

## Connection SSH et premier lancement

Il te faudra trouver l'adresse IP de ton installation. Lance un petit

{%highlight sh%}
ssh -p 22 ton-ip -l root
{% endhighlight %}

Ensuite le mot de passe par défaut de l'utilisateur **root** est **1234**{: .red}

Pour plus d'infos sur la suite du paramétrage [tu peux suivre la documentation officielle](https://docs.armbian.com/User-Guide_Getting-Started/#how-to-login){: target="_blank"}

**Armbian va te demander de:**
- paramétrer un nouveau mot de passe pour l'utilisateur **root**
- de choisir d'installer un système de commande shell zsh ou bash **à ta convenance**
- de créer un utilisateur **(facultatif)**
- de créer un mot de passe pour cet utilisateur
- de paramétrer un système de langue utilisateur **(facultatif)**

## Préparation pour HAOS

Une fois relancée, **reconnecte toi en ssh** et rend toi dans la **config Armbian**

{%highlight sh%}
armbian-config
{% endhighlight %}

[Guide utilisateur armbian-config](https://docs.armbian.com/User-Guide_Armbian-Config/){: target="_blank"}

{% include videoPlayer.html youtubeId="i9KyATAmfwQ?si=v0E-ELgtGnr9IuUZ" %}

Si tu as la [possibilitée d'installer le système sur une mémoire interne de type emmc](https://docs.armbian.com/User-Guide_Getting-Started/#how-to-install-to-emmc-sata-nvme-usb){: target="_blank"} fait le, ce n'est pas mon cas, car le cubietruck utilise une **mémoire NAND** et je devrais mettre un **très très vieux kernel** pour que celà fonctionne.

### les étapes Armbian-config

1. Mise à jour du firmware **"équivalent update et upgrade"** (système > firmware)
2. **Redémarrer**
3. Choix de l'ip static ou dynamique (network > ip)
4. Installation du bluetooth (network > BT install)
5. paramétrage de la connection wifi si nécessaire (network > wifi)

## Préparation pour HAos

### 1 - cgroupv1

sors de Armbian afin de pouvoir paramétrer en cgroupv1. Par défaut Armbian fonctionne en cgrouv2 mais il se trouve que home assistant os tourne en cgroupv1 alors rien de plus simple rends toi dans le fichier **armbianEnv.txt**
{%highlight sh%}
nano /boot/armbianEnv.txt
{% endhighlight %}

et colle ce code en bas du script, n'oublie pas d'enregistrer ```Ctrl+X``` et Y

{%highlight sh%}
extraargs=systemd.unified_cgroup_hierarchy=0
{% endhighlight %}

**Ce qui te donnera en exemple:**
{%highlight sh%}
verbosity=1
bootlogo=false
console=both
disp_mode=1920x1080p60
overlay_prefix=sun7i-a20
rootdev=UUID=a0e57adf-e76d-46bf-80a3-2752008cb59f
rootfstype=ext4
usbstoragequirks=0x2537:0x1066:u,0x2537:0x1068:u
extraargs=systemd.unified_cgroup_hierarchy=0
{% endhighlight %}

### 2 - Pretty_Name

Modifie le nom de la distribution afin qu'elle soit reconnue par HAOS

{%highlight sh%}
nano /etc/os-release
{% endhighlight %}

**change** PRETTY_NAME="Armbian 23.02.2 Jammy" par **PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"**{: .blue}

n'oublie pas d'enregistrer ```Ctrl+X``` et Y

**Ce qui te donnera en exemple:**
{%highlight sh%}
PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"
NAME="Debian GNU/Linux"
VERSION_ID="12"
VERSION="12 (bookworm)"
VERSION_CODENAME=bookworm
ID=debian
HOME_URL="https://www.armbian.com"
SUPPORT_URL="https://forum.armbian.com"
BUG_REPORT_URL="https://www.armbian.com/bugs"
ARMBIAN_PRETTY_NAME="Armbian 23.11.1 bookworm"
{% endhighlight %}

## trouver la bonne architecture

Si tu ne connais pas l'architecture ARM de ta carte ou si tu n'es pas sûre à 100%, tu pourras consulter ces deux liens ci-dessous, ce sont des wiki des architectures ARM avec tableau complet.

[Architecture arm aarch32](https://en.wikipedia.org/wiki/ARM_architecture_family#AArch32){: target="_blank"}
[Architecture arm cortex liens externe](https://en.wikipedia.org/wiki/ARM_Cortex-A7#External_links){: target="_blank"}


## Installation Home Assistant OS

Home Assistant a mis en place un tuto d'installation que tu peux suivre à la lettre il te suffiras de choisir les bonnes distributions à installer dans mon cas le cubietruck est construit autour d'une armv7 donc j'ai choisi:
- OS-Agent en **armv7**
- l'installation du supervised-installer en **qemuarm**

[installation de supervised-installer](https://github.com/home-assistant/supervised-installer){: target="_blank"}

**Petit rappel:** armbian est déjà en mode **root** par défaut

### 1 - installe les dépendances

{% highlight sh %}
apt install \
apparmor \
cifs-utils \
curl \
dbus \
jq \
libglib2.0-bin \
lsb-release \
network-manager \
nfs-common \
systemd-journal-remote \
systemd-resolved \
udisks2 \
wget -y
{% endhighlight %}

### 2 - Redémarre le système

{%highlight sh%}
reboot
{% endhighlight %}

### 3 - Installe Docker
{%highlight sh%}
curl -fsSL get.docker.com | sh
{% endhighlight %}

Tu auras un message qui te diras que tu utilise docker en non-root user qui fera remonter un message d'erreur dans Home Assistant lors du premier lancement. **Mais pas d'inquiétude il n'y aura qu'à redémarrer Home Assistant et il rectifiera le tir automatiquement.**{: .red}

{%highlight sh%}
To run Docker as a non-privileged user, consider setting up the
Docker daemon in rootless mode for your user:
...
WARNING: Access to the remote API on a privileged Docker daemon is equivalent
         to root access on the host. Refer to the 'Docker daemon attack surface'
         documentation for details: https://docs.docker.com/go/attack-surface/
{% endhighlight %}

Si l'installation de docker sur Armbian t'intrigue n'hésite pas à consulter les infos [sur la doc officielle](https://docs.armbian.com/User-Guide_Advanced-Features/#how-to-run-docker){: target="_blank"}.

### 4 - Installation OS-Agent

{%- include alert.html type="warning" text="Télécharge la <b>dernière release</b> qui te concerne moi c'est l'<b>armv7</b>" link="https://github.com/home-assistant/os-agent/releases/latest" textlink="Release OS-Agent" %}

**préparation du fichier temporaire de téléchargement:**
{%highlight sh%}
mkdir /tmp/download/
chown -Rv _apt:root /tmp/download/
chmod -Rv 700 /tmp/download/
cd /tmp/download/
{% endhighlight %}

**Télécharge la dernière release:**
{%highlight sh%}
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_armv7.deb
{% endhighlight %}

**Installe là:**
{%highlight sh%}
dpkg -i os-agent_1.6.0_linux_armv7.deb
{% endhighlight %}

**Vérifie l'installation:**

{%highlight sh%}
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
{% endhighlight %}

**Tu devrais y voir un tas de lignes comme ci-dessous:**
{%highlight sh%}
node /io/hass/os {
  interface org.freedesktop.DBus.Introspectable {
    methods:
      Introspect(out s out);
    signals:
...
    signals:
    properties:
      @org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
      readonly s Version = '1.6.0';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("true")
      readwrite b Diagnostics = false;
  };
};
{% endhighlight %}

### 5 - Installe le supervised installer

Dernière étape de l'installation, le script supervised-installer va t'installer **tous les containers nécessaire au bon fonctionnement de Home Assistant**

{%highlight sh%}
wget -O homeassistant-supervised.deb https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
apt install ./homeassistant-supervised.deb
{% endhighlight %}

enfin lorsque le script te le demandera, choisi l'architecture correspondant à tes besoins dans mon cas  **qemuarm**.

{%highlight sh%}
[info] Install supervisor startup scripts
[info] Install AppArmor scripts
[info] Start Home Assistant Supervised
[info] Installing the 'ha' cli
[warn] Could not find /etc/default/grub or /boot/firmware/cmdline.txt failed to 
switch to cgroup v1
[info] Within a few minutes you will be able to reach Home Assistant at:
[info] http://homeassistant.local:8123 or using the IP address of your
[info] machine: http://ton-ip:8123
{% endhighlight %}

## Enfin de la patience

Suivant la puissance de ta carte Home Assistant peut mettre plus ou moins de temps pour s'installer alors sois patient dans mon cas ça a pris environ 20 minutes, **tu peux suivre le process en te rendant sur l'adresse indiqué en fin de script du superviseur**{: .green}

## à ne pas oublier

Une fois que tu auras paramétrer Home Assistant, n'oublie pas de vérifier les mises à jours et comme indiqué plus haut tu devrais avoir une erreur docker ```non-root user```, pas de panique ***il suffit de redémarrer homeassistant***. Perso j'ai redémarré tout le système.

{% picture posts/{{ page.guid }}/non-privilege-docker.png --alt erreur non privilege docker utilisateur --img width="653" height="148" %}

**Redémarre tout le système à partir de Home Assistant**
- compte utilisateur > activer mode avancé
- paramètre > système > redémarrer home assistant > option avancé > Redémarrer le système

{% include product-embed.html image="https://ae01.alicdn.com/kf/H1f8d2bf230484fbf90ab3443ba2c4a18C/SanDisk-Ultra-A1-carte-m-moire-Microsd-256-go-128-go-64-go-32-go-16.jpg_640x640.jpg_.webp" title="Sdcard Sandisk" brand="Sandisk" description="SanDisk Ultra A1 carte mémoire Microsd 256 go 128 go 64 go 32 go 16 go microSDHC/SDXC UHS-I U3 V30 TF carte micro sd carte mémoire" affiliate="_DFKKLEt" %}

## Conclusion

Voilà une façon **efficace d'installer Home Assistant OS sur Armbian** en utilisant une carte compatible sans avoir besoin de se prendre la tête. Si comme moi tu as besoin d'utiliser ce magnifique système qu'est Home Assistant sur une carte à recycler pour effectuer tous types de tests alors ce tuto est fait pour toi.

