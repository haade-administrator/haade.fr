---
guid: 170
title: "Easily outsource your Home Assistant backup"
description: "Thanks to Rsync, automatically and easily offload your Home Assistant backups."
ref: ""
layout: post
authors: [Nico]
date: 2026-02-04 10:40
last_modified_at: 
categories: [Security, Home-Assistant, Haade-lab]
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
locale: en_GB
comments: true
rating: 5.0
sourcelink:
  - https://rsync.samba.org/
  - https://github.com/RsyncProject/rsync
---

Even back then, **outsourcing Home Assistant backups was a concern for me**. Given my Raspberry Pi setup, **everything was stored on the SD card**, I wrote an article in 2023: **How ​​to outsource your backup with Syncthing**({% post_url fr/2023-05-22-simple-sauvegarde-externe-homeassistant-syncthing-plus-gestion-backup %}). This method still works, but **Syncthing is still quite complex**.

Let me explain: Haade offers a **module that allows you to connect via a web address for free**, and I also offer my entire network the option to back up their latest backups to an external server. I needed to install something simpler.

Between 2023 and today, a lot has changed, and **Home Assistant has evolved considerably**. Since **backup management is entirely handled by the application.** It is possible, among other things, to add network storage supporting **SMB/NFS protocols**, which is for use on an internal network, **but with WireGuard management, it would be possible to export backups to an external server.**

{% picture posts/{{ page.guid }}/sauvegarde-externe-home-assistant-smb-nfs-defaut.png --alt Home Assistant external backup settings --img width="940" height="589" %}

Rsync, an open-source utility, **is used to copy or move directories**, similar to mv or cp, but also provides **comprehensive** synchronization and remote transfer features **(based on SSH)**. Therefore, it can also be used in more advanced ways to maintain a duplicate of a storage space, or to set up rudimentary remote backup systems.

> **All this with a single command line**, making it easy to use.

To follow this tutorial, you'll need some basic knowledge, but don't worry, it's nothing insurmountable!

## Prerequisites

- Home Assistant OS
- A NAS with OpenMediaVault (preferably)
- File Editor add-on for Home Assistant
- Rsync add-on for Home Assistant
- Open port 22 on your router
- Have a static external IP address (preferably)

## Installing Rsync in HAOS

Let's not waste any time and start by adding the Poeschl repository to the module manager. Go to: **Settings > Add-ons > Add-on Stores > Menu > Repositories**

{% picture posts/{{ page.guid }}/ajout-depot-poeschl-module-complementaire-homeassistant.png --alt Added the Poeschl module directory --img width="940" height="522" %}

To add repositories, click directly on the link below or add them manually.

[![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FPoeschl-HomeAssistant-Addons%2Frepository)

Direct link to the repository: **https://github.com/Poeschl-HomeAssistant-Addons/repository** and click Add.

Refresh the **add-ons page**, go to the Poeschl tab, and **install Rsync**.

{% picture posts/{{ page.guid }}/page-modules-complementaires-poeschl.png --alt Poeschl add-on module page and rsync search --img width="940" height="522" %}

## Using and Configuring the Rsync Module

**Once Rsync is installed, start it** without changing the configuration. This will **initially generate the SSH keys** in the **/ssh/rsync/id_rsa** directory. We will retrieve these keys to connect to our NAS or remote server.

{% picture posts/{{ page.guid }}/generation-cle-ssh-premier-lancement-rsync.png --alt Rsync logs, SSH key generation --img width="940" height="522" %}

Now let's move on to **configuring the rsync module.**

{% picture posts/{{ page.guid }}/parametrage-rsync-fichiers-local-distant.png --alt Configuring the Rsync module on the Home Assistant side --img width="940" height="522" %}

1. Directory where SSH keys are stored
2. `user` is the rsync username **must match** the user in omv. I used **Nicotest**.
3. Local and remote folder configuration + options if necessary
   1. **local:** (This is the backup folder in HA by default: **/backup**)
   2. **remote:** This is the remote folder. For me, backups will be saved in **/export/data/Backup/Nicotest**
   3. Additional options during rsync transfers
   4. Direction: pull or **push** by default (**push** pushes data from HA to external sources)
4. remote_host: IP/HTTP address of the external server.

**In Conclusion**: On the OMV side, I'm going to create a **Nicotest** user with their own home directory. Therefore, **in rsync for Home Assistant**, the user should be **Nicotest**, and the remote directory will ultimately be Nicotest**.

## Retrieving the SSH Key

Now, **we need to retrieve the SSH key, which is essential** for the remote connection between the two systems. It's quite simple; we'll use the popular **file editor** module, available by default in the Home Assistant add-ons section.

{% picture posts/{{ page.guid }}/file-editor-home-assistant-recuperation-cle-ssh-rsync.png --alt Using a file editor for Home Assistant --img width="940" height="522" %}

If you haven't installed it, click on the link below.

[![Open your Home Assistant instance and show the dashboard of an add-on.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=file_editor)

Next, to access the root directory in the file editor module, and yes, **by default you only have access to the /config subfolder**, remember we need to access the **/ssl/rsync/id_pub.rsa** subfolder.

So it's very simple: go to the module's configuration and **uncheck Enforce Basepath**. Then restart the module.

{% picture posts/{{ page.guid }}/suppression-acces-limite-file-editor-recuperer-cle-ssh-rsync.png --alt disable the enforce basepath option in the file editor --img width="940" height="522" %}

Now open the file editor interface and navigate to the file. Then simply press `ctrl-c` and you're done! 👌

{% picture posts/{{ page.guid }}/racine-file-editor-homeassistant-ssl-rsync-folder.png --alt disable the enforce basepath option in the file editor --img width="940" height="313" %}


## NAS Configuration

Heading to the NAS, **I'm assuming you're familiar with this wonderful content management software**! Let's go! Go to the Users tab > Settings and check the box for user home directories. This way, the user created **Nicotest** will have a directory in **/export/data/Backup/Nicotest**. You don't have to create these directories automatically if you don't want to, **and you can create them automatically**. However, don't forget to recursively grant the corresponding permissions to the subfolders and files. To do this, follow the steps.

{% highlight shell %}
ssh -p 22 xxx.xxx.xxx.xxx -l root # SSH connection to the NAS
mkdir ../../Nicotest
chown -R Nicotest:users Nicotest
{% endhighlight %}

{% picture posts/{{ page.guid }}/activer-repertoire-personnel-des-utilisateurs-omv.png --alt Activate the personal directory in OMV --img width="940" height="446" %}

**Let's move on to the user creation step:**

- Name: Nicotest
- Password
- Group: **be sure to select _ssh**

Then confirm and verify that your user **has the correct permissions for _ssh and users**

{% picture posts/{{ page.guid }}/parametrer-utilisateurs-omv.png --alt End-user configuration in OMV --img width="940" height="446" %}

Now **you need to copy the ssh key** previously taken from Home Assistant.

{%- include alert.html type="warning" text="When copying the key into Home Assistant, a line break is copied along with it. You will need to remove this line break in OMV for the key to be recognized correctly; otherwise, you will not be able to add it." %}

{% picture posts/{{ page.guid }}/parametrer-utilisateurs-omv-cle-ssh.png --alt Paste the SSH key for the user dan OMV --img width="940" height="453" %}

**Now you can register the user.**

{% picture posts/{{ page.guid }}/generation-utilisateur-final-omv.png --alt Rsync-compatible omv user generation --img width="940" height="446" %}

That's all you need to create on the OMV side; it's simple, quick, and efficient. **There's no need to install the Rsync extension for OMV.**

## Check before launching

Let's review the steps before the **final launch** of rsync for Home Assistant.

### Home Assistant Backups

You must, of course, have **backups in Home Assistant** to verify that everything is working correctly. Yes, Home Assistant natively manages backups.

Go to **Settings > System > Backups**. If *automatic backups are not configured, I strongly advise you to do so.*

{% picture posts/{{ page.guid }}/configuration-sauvegarde-home-assistant.png --alt Backup available in Home Assistant --img width="940" height="522" %}

As you can see from my configuration above, I don't have any automatic backups created. This is normal for a test installation, but I do have two backups configured.

### Rsync in Home Assistant

We are now ready to run rsync a second time (as mentioned above, once the task is completed, Rsync stops; you will need to create an automation later).

{% picture posts/{{ page.guid }}/desactivation-automatique-rsync-apres-demarrage.png --alt Automatic deactivation of rsync after synchronization --img width="940" height="522" %}

Once the startup is complete, **let's check the logs**

{% picture posts/{{ page.guid }}/logs-final-rsync-home-assistant-tout-fonctionne.png --alt rsync logs all work --img width="940" height="522" %}

**So let's break down the command line**

{% highlight shell %}
rsync --archive --recursive --compress --delete --prune-empty-dirs \
-e 'ssh -p 22 -i /ssl/rsync/id_rsa -oStrictHostKeyChecking=no' \
/backup
{% endhighlight %}

**This command:**

1. Synchronizes /backup
2. In full backup mode (permissions, dates, etc.)
3. Via SSH with a private key
4. With compression
5. Deleting obsolete files on the destination side
6. Cleaning up empty folders
7. Without user interaction (ideal for a cron job)

> Complete and efficient.

I connect to the NAS server via SSH and indeed everything is saved **in a backup/** folder

{% picture posts/{{ page.guid }}/verification-copies-fichiers-dans-arborescence-omv.png --alt NAS server copy checks --img width="662" height="472" %}

The files **have been successfully copied and verified on the OMV side**

## Creating a Home Assistant Automation

**Now we're going to create an automation** that will run **x times** per day and start the rsync add-on.

I know it's not very practical, but because automations have been simplified in the latest versions of Home Assistant, *I decided to create an animated GIF anyway.*

![Creating a crom task automation and launching the rsync module]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/creation-automatisation-lancement-rsync-backup-home-assistant-demarrage-module-complementaire.webp{{ cachebuster }}){: width="940" height="522" class="lazyload pictaninpost"}{: target="_blank"}

## Conclusion

Rsync is a simple way to offload Home Assistant backups to a NAS, *much lighter than Syncthing*, preferably one equipped with OpenMediaVault. Thanks Poeschl, thanks OMV, security first. 🫵




