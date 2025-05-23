---
guid: 11
title: 'Frp &#8211; accès à distance pour homeassistant.'
description: "Configurer simplement un accès à distance sécurisé et gratuit avec Home assistant et notre module frp"
categories: [Domotique, Securite, Haade-lab, Home-Assistant]
tags: frp module
date: '2021-06-18T20:05:56+00:00'
last_modified_at:
authors: Nico
layout: post
locale: fr_FR
addViews: 1074
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
beforetoc:
toc: true
image: addons-frp-fatdier-haade-remote-access-reverse-proxy.png
comments: true
redirect_from:
  - /fr/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/frp-configurer-acces-distance-homeassistant/
  - /blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/frp-configurer-acces-distance-homeassistant/
  - /blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/frp-configurer-acces-distance-homeassistant/2/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/frp-configurer-acces-distance-homeassistant/2/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/frp-configurer-acces-distance-homeassistant/
  - /blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/frp-configurer-acces-distance-homeassistant/
---

Éditer un tel article alors qu’il existe plusieurs façons de configurer un accès à distance pour homeassistant son assistant préféré. Pour une simple raison frp permet de configurer un accès par reverse proxy simplement et rapidement afin d’exposer homeassistant sur internet. la simplicité de mise en oeuvre, la rapidité d’exécution et le délai de connexion **est simplement époustouflant.**

{%- include alert.html type="info" text="à tous ceux qui souhaiteraient suivre ce tutoriel mais qui ne veulent pas <strong>investir dans un vps,</strong> haade propose ce service <strong>GRATUITEMENT</strong>, avec un lien de type <strong>.eu.haade.link</strong>, si tu souhaites bénéficier de ce service <strong>GRATUITEMENT</strong> rien de plus simple: laisse un <strong>commentaire</strong> en bas de cet article ou fait nous la demande par formulaire de contact.
<strong>Sans Engagement, ce service est susceptible de devenir payant.</strong>" link="https://www.haade.fr/contact/" textlink="formulaire de contact" %}

Il existe le duo **Nginx-letsencrypt** sur hassio mais 5 fois sur 6 tu vas rencontrer des soucis avec ta box internet ( orange, bbox, sfr, free ). Tu vas me dire qu’il existe une solution toute simple en installant le vpn wireguard, simple et rapide mais il faudra installer l’appli wireguard sur votre téléphone intelligent ou celui qui cri, mais là aussi il ne faudra pas oublier d’activer l’application pour se connecter. Encore dans le même style il existe aussi l’addons **onion par Tor**, hormis le fait que ce soit simple et sécurisé le temps d’accès est carrément long, long,long. Ah oui j’oubliais il y a aussi le service **d’home assistant Nabucasa** qui propose bel est bien un accès de n’importe où ? qui fonctionne bien et intègre d’autres services, un très bon service d’ailleurs qui est facturé 5€ par mois, je te conseil de le tester.

## Prérequis:

- homeassistant avec supervisor hassio d’installé
- installer notre addons FRPc (client): [lien github Haade](https://github.com/haade-administrator/haade-addons){: target="_blank"}
- un serveur linux de préférence vps connecté en permanence aux réseaux internet
- accéder à votre serveur en ssh
- ( Optionnel ) nom de domaine avec zone dns de type A paramétré sur l’adresse ip du vps

## Étape 1: Installer FRPc (client) sur home assistant avec les dépots haade-addons sur le supervisor:

pour se faire rendez-vous dans Supervisor &gt;&gt;&gt; Boutique des modules complémentaires &gt;&gt;&gt; **⋮** &gt;&gt;&gt; Dépôts

Colle ce lien [lien github Haade](https://github.com/haade-administrator/haade-addons){: target="_blank"} et clic sur **Ajouter**, ferme la popup et clic à nouveau sur **⋮** et **Recharger**.

Si t’as rien compris regarde le gif animé ci-dessous.

![ajout d'un dépot frp configurer l'accès à distance supplémentaire dans homeassistant supervisor avec hassio ]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/haade-depot.webp){: width="820" height="456"}

## Paramètre l’application FRPc

{% picture posts/{{ page.guid }}/parametrage-frp-haade.png --alt paramétrage frp par haade --img width="820" height="385" %}

capture du paramétrage pour accès à distance grâce à frp et créé pour homeassistant hassio
1. **server addr:** l’adresse ip de votre serveur vps
2. **server\_port:** le bind port paramétré sur votre serveur
3. **frp type:** par défaut http ( utilisé dans la majorité des cas ) en effet le ssl peut être paramétré sur votre serveur et laissé en http sur hassio
4. **custom\_name:** nom de votre service au choix si déjà utilisé il y aura un message d’erreur sur les logs
5. **token\_key:** clé de sécurité doit correspondre à celle du serveur
6. **local\_ip:** en général 127.0.0.1 ( par défaut )
7. **local\_port:** en général 8123 ( par défaut )
8. **use\_encryption et use\_compression:** true par (défaut) encryption de sécurité
9. **proxy\_protocol\_version:** v2 par défaut **n’est utilisé** que pour le **frp\_type https**.
10. **balancing\_group et balancing\_group\_key:** permet de cloisonner des utilisateurs et de mieux répartir la fluidité de connexion.
11. **domain\_protocol:** sous-domaine ou domaine suivant le paramétrage de votre serveur
12. **domains:** nom de votre domaine ou nom du sous domaine ( suivant votre serveur vps )

**Pour toutes questions sur le fonctionnement fatedier a rédigé une documentation complète, n’hésitez pas à la consulter:** [Lien github Fatedier frp original](https://github.com/fatedier/frp/blob/dev/README.md){: target="_blank"}

**IMPORTANT:** à tous ceux qui souhaiteraient suivre ce tutoriel mais qui ne veulent pas investir dans un vps, haade propose ce service **GRATUITEMENT**\*, avec un lien de type **\*.eu.haade.link**, si tu souhaites bénéficier de ce service **GRATUITEMENT** rien de plus simple: laisse un **commentaire** en bas de cet article et fait nous la demande par **[formulaire de contact](https://www.haade.fr/contact/)**

**\* Sans Engagement, ce service est susceptible de devenir payant.**

## 2: Paramétrer un serveur frp sur un vps

rien de plus simple, on commence par se connecter au serveur à l’aide d’un terminal ou de putty

{% highlight shell %}
ssh -p 22 135.122.X.X - l root
{% endhighlight %}

Rendez-vous sur la dernière release qui nous intéresse dans notre cas un amd64 ( serveur debian 10 ) [release frp Fatedier](https://github.com/fatedier/frp/releases){: target="_blank"}

{% highlight shell %}
cd /usr/lib/
wget https://github.com/fatedier/frp/releases/download/v0.37.0/frp_0.37.0_linux_amd64.tar.gz
tar zxvf frp_0.37.0_linux_amd64.tar.gz
mv frp_0.37.0_linux_amd64 /usr/lib/frp/
rm -rf frp_0.37.0_linux_amd64.tar.gz
cd /frp/
rm -rf frpc.ini frpc_full.ini frpc
nano frps.ini
{% endhighlight %}

Compléter tout simplement le fichier dans notre cas en sous domaine mais dans le fichier zippé il y a un **fichier frps\_full.ini avec toutes les commandes paramétrables**, n’hésite pas à le consulter.

{% highlight shell %}
[common]
 bind_port = 7000 // port par défaut
 subdomain_host = frp.haade.fr // domaine ou sous domaine dans notre cas un sous domaine
 vhost_http_port = 80 // port http si différent il faudrait paramétrer nginx sur le serveur
 vhost_https_port = 443 // idem en https
 authentication_method = token // méthode par clé de connexion
 token = 123456789 // clé de sécurité
 dashboard_port = 7500 // port de connexion à l\'interface frps
 dashboard_user = admin // nom d\'utilisateur
 dashboard_pwd = password // mot de passe
{% endhighlight %}

Enfin lancez la commande ci-dessous et c’est terminé côté serveur bien pour tester le retour de commande mais pas des plus pratique pour garder le service lancé.

{% highlight shell %}
./frps -c ./frps.ini
{% endhighlight %}

vérifie le résultat

{% highlight shell %}
2021/06/17 20:04:07 [I] [root.go:200] frps uses config file: ./frps.ini
 2021/06/17 20:04:07 [I] [service.go:192] frps tcp listen on 0.0.0.0:7000
 2021/06/17 20:04:07 [I] [service.go:235] http service listen on 0.0.0.0:80
 2021/06/17 20:04:07 [I] [service.go:250] https service listen on 0.0.0.0:8443
 2021/06/17 20:04:07 [I] [service.go:294] Dashboard listen on 0.0.0.0:7500
 2021/06/17 20:04:07 [I] [root.go:209] frps started successfully
{% endhighlight %}

Paramétrons un service pour pallier à ce soucis

{% highlight shell %}
sudo nano /usr/lib/systemd/system/frps.service
{% endhighlight %}

Colle le code ci-dessous:

{% highlight shell %}
[Unit]
 Description=The nginx HTTP and reverse proxy server
 After=network.target remote-fs.target nss-lookup.target
 [Service]
 Type=simple
 ExecStart=/usr/lib/frp/frps -c /usr/lib/frp/frps.ini
 KillSignal=SIGQUIT
 TimeoutStopSec=5
 KillMode=process
 PrivateTmp=true
 StandardOutput=syslog
 StandardError=inherit
 [Install]
 WantedBy=multi-user.target
{% endhighlight %}

relance le daemon et service

{% highlight shell %}
cd /usr/lib/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable frps
sudo systemctl start frps
{% endhighlight %}


vérifie si le service est bien lancé

{% highlight shell %}
sudo systemctl status frps
ou
sudo service frps status
{% endhighlight %}


Vérifie le résultat du service **Active: active (running)**, frps.service est bien actif, tu peux fermer le terminal et tester en live.

{% highlight shell %}
● frps.service - The nginx HTTP and reverse proxy server
    Loaded: loaded (/lib/systemd/system/frps.service; enabled; vendor preset: ena
    Active: active (running) since Thu 2021-06-17 19:37:04 UTC; 21min ago
  Main PID: 1210 (frps)
     Tasks: 4 (limit: 2319)
    Memory: 17.0M
    CGroup: /system.slice/frps.service
            └─1210 /usr/lib/frp/frps -c /usr/lib/frp/frps.ini
{% endhighlight %}

{%- include alert.html type="info" text="à tous ceux qui souhaiteraient suivre ce tutoriel mais qui ne veulent pas <strong>investir dans un vps,</strong> haade propose ce service <strong>GRATUITEMENT</strong>, avec un lien de type <strong>.eu.haade.link</strong>, si tu souhaites bénéficier de ce service <strong>GRATUITEMENT</strong> rien de plus simple: laisse un <strong>commentaire</strong> en bas de cet article ou fait nous la demande par formulaire de contact.
<strong>Sans Engagement, ce service est susceptible de devenir payant.</strong>" link="https://www.haade.fr/contact/" textlink="formulaire de contact" %}
