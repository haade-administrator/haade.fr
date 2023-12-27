---
guid: 101
title: "Installing HAOS with Armbian Bookworm 12"
description: "2024 - Tutorials installing home assistant OS on a cubietruck armv7 with Armbian version Debian 12 Bookworm all easily and without errors"
ref: ""
layout: post
author: Nico
date: 2023-12-26 10:54
last_modified_at: 
categories: [Haade-lab]
tags: []
image: 'installation-haos-armbian-cubietruck-2024.png'
toc: true
beforetoc: ''
published: false
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: en_GB
comments: true
rating:  
sourcelink:
  - https://github.com/armbian
  - https://github.com/home-assistant/supervised-installer
---
It's almost 2024 and it's still difficult to install Home Assistant OS on unsupported cards. For the sake of product testing I need to install HAOS on a dedicated card. That's good, I still have an old Cubietruck card in the boxes so I'll be able to save money and not invest in a Raspberry pi.

This tutorial will allow you to easily install Home Assistant OS using ARMBIAN and one of the cards supported by this system, all without having an error message in Home Assistant and thus using 100% of the potential of this home assistant .

# Prerequisites
- A card supported by Armbian
- A quality SD card
- know how to use a terminal
- know a minimum of the SSH connection

{%- include alert.html type="info" text="this tutorial is valid for all cards working with Armbian, you just need to adapt the download of images according to the architecture." link="https://www.armbian.com/" textlink="Armbian official website" %}

> Follow the steps carefully and everything should go well 👌

## 1st step install Armbian

I'm lucky the Armbian community is still developing an image for the old Cubietruck card, in this case Debian 12 "Bookworm".

{% include product-embed.html image="https://ae01.alicdn.com/kf/H1f8d2bf230484fbf90ab3443ba2c4a18C/SanDisk-Ultra-A1-carte-m-moire-Microsd-256-go-128-go-64-go-32-go-16.jpg_640x640.jpg_.webp" title="Sdcard Sandisk" brand="Sandisk" description="SanDisk Ultra A1 Microsd Memory Card 256GB 128GB 64GB 32GB 16GB microSDHC/SDXC UHS-I U3 V30 TF micro sd card memory card" affiliate="_DFKKLEt" %}

Nothing could be simpler [go to the dedicated page](https://www.armbian.com/cubietruck/){: target="_blank"}, download the image and copy it onto a microsd using [ Rufus](https://rufus.ie/){: target="_blank"} or [Balena Etcher](https://etcher.balena.io/){: target="_blank"}.

If you also have a cubietruck card and out of curiosity about the hardware you will find information on it on the site [Sunxi](https://linux-sunxi.org/Cubietech_Cubietruck){: target="_blank"}

Once the image has been copied, insert it and launch the machine, wait around ten minutes before connecting to the system via SSH or via graphical interface if you prefer. Personally, the tutorial is written using a terminal and by ssh.

If you don't know Armbian, check out the official presentation video:

{% include videoPlayer.html youtubeId="hFrdyLc4g50?si=IuvHm3JgeHnWwiUM" %}

## SSH connection and first launch

You will need to find the IP address of your installation. Throw a little

{%highlight sh%}
ssh -p 22 ton-ip -l root
{% endhighlight %}

Then the default password for the **root** user is **1234**{: .red}

For more information on further configuration [you can follow the official documentation](https://docs.armbian.com/User-Guide_Getting-Started/#how-to-login){: target="_blank"}

**Armbian will ask you to:**
- set a new password for the **root** user
- choose to install a zsh or bash shell command system **at your convenience**
- create a user **(optional)**
- create a password for this user
- to configure a user language system **(optional)**

## Preparing for HAOS

Once restarted, **reconnect via ssh** and go to the **Armbian config**

{%highlight sh%}
armbian-config
{% endhighlight %}

[armbian-config user guide](https://docs.armbian.com/User-Guide_Armbian-Config/){: target="_blank"}

{% include videoPlayer.html youtubeId="i9KyATAmfwQ?si=v0E-ELgtGnr9IuUZ" %}

If you have the [possibility of installing the system on an emmc type internal memory](https://docs.armbian.com/User-Guide_Getting-Started/#how-to-install-to-emmc-sata-nvme-usb){: target="_blank"} did it, this is not my case, because the cubietruck uses **NAND memory** and I would have to put a **very very old kernel** for it to work.

### Armbian-config steps

1. Firmware update **"equivalent update and upgrade"** (system > firmware)
2. **Restart**
3. Choice of static or dynamic IP (network > ip)
4. Bluetooth installation (network > BT install)
5. configure the wifi connection if necessary (network > wifi)

## Preparation for HAos

### 1 - cgroupv1

exit Armbian in order to be able to configure in cgroupv1. By default Armbian works in cgrouv2 but it turns out that home assistant os runs in cgroupv1 so nothing could be simpler, go to the file **armbianEnv.txt**
{%highlight sh%}
nano /boot/armbianEnv.txt
{% endhighlight %}

and paste this code at the bottom of the script, don't forget to save ```Ctrl+X``` et Y

{%highlight sh%}
extraargs=systemd.unified_cgroup_hierarchy=0
{% endhighlight %}

**Which will give you an example:**
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

Change the name of the distribution so that it is recognized by HAOS

{%highlight sh%}
nano /etc/os-release
{% endhighlight %}

**change** PRETTY_NAME="Armbian 23.02.2 Jammy" by **PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"**{: .blue}

don't forget to save ```Ctrl+X``` and Y

**Which will give you an example:**
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

## find the right architecture

If you don't know the ARM architecture of your card or if you're not 100% sure, you can consult these two links below, these are ARM architecture wikis with a complete table.

[Architecture arm aarch32](https://en.wikipedia.org/wiki/ARM_architecture_family#AArch32){: target="_blank"}
[Architecture arm cortex external link](https://en.wikipedia.org/wiki/ARM_Cortex-A7#External_links){: target="_blank"}


## Home Assistant OS installation

Home Assistant has set up an installation tutorial that you can follow to the letter, you just need to choose the right distributions to install in my case the cubietruck is built around an armv7 so I chose:
- OS-Agent in **armv7**
- installing the supervised-installer in **qemuarm**

[supervised-installer installation](https://github.com/home-assistant/supervised-installer){: target="_blank"}

**Little reminder:** armbian is already in **root** mode by default

### 1 - install dependencies

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

### 2 - Reboot system

{%highlight sh%}
reboot
{% endhighlight %}

### 3 - Install Docker
{%highlight sh%}
curl -fsSL get.docker.com | sh
{% endhighlight %}

You will get a message that will tell you that you are using docker as a non-root user which will bring up an error message in Home Assistant during the first launch. **But don't worry, you just have to restart Home Assistant and it will correct the situation automatically.**{: .red}

{%highlight sh%}
To run Docker as a non-privileged user, consider setting up the
Docker daemon in rootless mode for your user:
...
WARNING: Access to the remote API on a privileged Docker daemon is equivalent
         to root access on the host. Refer to the 'Docker daemon attack surface'
         documentation for details: https://docs.docker.com/go/attack-surface/
{% endhighlight %}

If installing docker on Armbian intrigues you, don't hesitate to consult the information [on the official doc](https://docs.armbian.com/User-Guide_Advanced-Features/#how-to-run-docker){: target="_blank"}.

### 4 - Installation OS-Agent

{%- include alert.html type="warning" text="Download the <b>latest release</b> that concerns you, it's the <b>armv7</b>" link="https://github.com/home-assistant/os-agent/releases/latest" textlink="Release OS-Agent" %}

**preparing the temporary download file:**
{%highlight sh%}
mkdir /tmp/download/
chown -Rv _apt:root /tmp/download/
chmod -Rv 700 /tmp/download/
cd /tmp/download/
{% endhighlight %}

**Download the latest release:**
{%highlight sh%}
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_armv7.deb
{% endhighlight %}

**Install there:**
{%highlight sh%}
dpkg -i os-agent_1.6.0_linux_armv7.deb
{% endhighlight %}

**Check installation:**

{%highlight sh%}
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
{% endhighlight %}

**You should see a bunch of lines like below:**
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

### 5 - Install the supervised installer

Last step of the installation, the supervised-installer script will install **all the containers necessary for the proper functioning of Home Assistant**

{%highlight sh%}
wget -O homeassistant-supervised.deb https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
apt install ./homeassistant-supervised.deb
{% endhighlight %}

finally when the script asks you, choose the architecture corresponding to your needs in my case **qemuarm**.

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

## Finally patience

Depending on the power of your Home Assistant card it may take more or less time to install so be patient in my case it took around 20 minutes, **you can follow the process by going to the address indicated at the end of supervisor script**{: .green}

## to not forget

Once you have configured Home Assistant, don't forget to check for updates and as indicated above you should have a docker error ```non-root user```, don't panic ***just restart homeassistant***. Personally I restarted the entire system.

{% picture posts/{{ page.guid }}/non-privilege-docker.png --alt non-privileged docker user error --img width="653" height="148" %}

**Reboots the entire system from Home Assistant**
- user account > activate advanced mode
- setting > system > restart home assistant > advanced option > restart system

{% include product-embed.html image="https://ae01.alicdn.com/kf/H1f8d2bf230484fbf90ab3443ba2c4a18C/SanDisk-Ultra-A1-carte-m-moire-Microsd-256-go-128-go-64-go-32-go-16.jpg_640x640.jpg_.webp" title="Sdcard Sandisk" brand="Sandisk" description="SanDisk Ultra A1 Microsd Memory Card 256GB 128GB 64GB 32GB 16GB microSDHC/SDXC UHS-I U3 V30 TF micro sd card memory card" affiliate="_DFKKLEt" %}

## Conclusion

This is an **effective way to install Home Assistant OS on Armbian** using a compatible card without having to worry. If like me you need to use this magnificent system that is Home Assistant on a recycling card to carry out all types of tests then this tutorial is for you.

