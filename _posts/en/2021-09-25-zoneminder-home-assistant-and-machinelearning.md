---
guid: 21
title: "Zoneminder, home assistant and Machinelearning"
layout: post
author: Nico
date: "2021-09-25"
last_modified_at:
categories: [Security, Haade-lab]
image: "zoneminder_homeassistant-1.png"
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: en_GB
redirect_from: 
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/zoneminder-home-assistant-et-machinelearning/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/securite/zoneminder-home-assistant-et-machinelearning/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/securite/zoneminder-home-assistant-et-machinelearning/2/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/securite/zoneminder-home-assistant-et-machinelearning/3/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/securite/zoneminder-home-assistant-et-machinelearning/4/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/securite/zoneminder-home-assistant-et-machinelearning/5/
---

[Dlandon](https://hub.docker.com/r/dlandon/zoneminder.machine.learning){:target="_blank"} this year released a Docker image complete with Zoneminder and Machinelearning, integration into home assistant is complete. This is why this article absolutely had to see the light of day. For less than a year, installation under docker has been greatly simplified. In addition, **machinelearning is very complete** thanks to object detection, facial detection, facial recognition, plate recognition, etc ....

## Prerequis:

- Home assistant core or HAOS installed and functional
- Traditional computer with HDD or NAS type
- Docker installed and functional on the computer
- Know how to use the docker environment to install and configure Zoneminder

## The installation environment:

Zoneminder will be installed on a NAS running Openmediavault with docker. This choice is almost essential, on the one hand the CPU / GPU processor is relatively powerful, moreover the storage of videos can become very invasive. I do not recommend installing Zoneminder on a Raspberry Pi, not powerful enough for zm and active Machinelearning.

when the home assistant OS, it is installed on a Raspberry pi since can, before I used the home-assistant core which was running in a container on the NAS.

below we find the [docker command that we find in the documentation of the github repository](https://github.com/dlandon/zoneminder.machine.learning){:target="_blank"} .

{% highlight docker %}
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
{% endhighlight %}

Example of custom configurations "the one I use" for Openmediavault, you have to think about customizing the TZ timezone as well as any mounting volume. You can install ZM unsecured with the port **\-p 8080: 80** , however I strongly advise to install in ssl, letsencrypt is part of the container. Bye!

{% highlight docker %}
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
{% endhighlight %}

After launching the image, the installation is done quickly thanks to dlandon's work on the image. Previously with the old image of Zoneminder you had to wait 20 to 40 minutes, the ES and ML part took a lot of time. **Now Zoneminder and The ZMEventnotification package** install **in less than 5 minutes** .

PS: If you want to use a [installation under docker-compose you will find the code here.](https://github.com/dlandon/zoneminder.machine.learning/blob/master/docker-compose.yaml){:target="_blank"}

## 1 - Preparation of Zoneminder for Home assistant and Machinelearning ML

## Zoneminder password protection

Change the default user **Admin** in options >>> users and set a password

Then in Options >>> Systems

Check the boxes like the image below and enter a Hashsecret code for more security

1. OPT-USE\_AUTH: password authentication
2. AUTH\_HASH\_SECRET: Additional code ( [you can generate a code here](https://www.md5hashgenerator.com/) )
3. AUTH\_HASH\_LOGINS: take into account double security
4. OPT\_USE\_API: Activate the Zoneminder API
5. OPT\_USE\_LEGACI\_API\_AUTH: enable API authentication
6. OPT\_USE\_EVENTNOTIFICATION: Consideration of machine learning

{% picture posts/{{ page.guid }}/capture-options-systemes-zoneminder.png --img width="820" height="738" --alt zoneminder option settings %}

## Setup for Home Assistant

Then you have to create a user dedicated to Homeassistant with an opening to the Zoneminder API:

Options >>> Users >> Add users

{% picture posts/{{ page.guid }}/capture-utilisateur-zoneminder.png --img width="820" height="694" --alt zoneminder user settings %}

## 2 - Machinelearning configuration (ZMEVENTNOTIFICATION)

To begin with, all the documentation is available at this address [https://zmeventnotification.readthedocs.io/](https://zmeventnotification.readthedocs.io/){:target="_blank"}

For the learning machine we have 3 files to customize for these 3 files there is also a duplicate example. So these are the secret.ini files which contain all the passwords and objectconfig.ini contains each setting for each camera. Basically we indicate what we want Zmeventnotification to analyze according to each camera.

secrets.ini should look like this (**in my config I don't use** the ML API, OpenAlpr, Escontrol, Mqtt and Pushover)

{% highlight shell %}
# your secrets file
[secrets]

# fid can have the following values:
# a particular <frameid>, alarm or snapshot
# starting ZM 1.35, you can also specify
# objdetect_mp4, objdetect_gif or objdetect_image
# this needs create_animation enabled in objectconfig.ini and associated flags
ZMES_PICTURE_URL=https://example.com/zm/index.php?view=image&eid=EVENTID&fid=objdetect&width=600 # TO CUSTOMIZE

ZM_USER=haos # TO CUSTOMIZE
ZM_PASSWORD=JaImEin3t3rdesMoTs # TO CUSTOMIZE
ES_ADMIN_INTERFACE_PASSWORD=i3i3gr0tUiY # TO CUSTOMIZE

ZM_PORTAL=https://example.com/zm # TO CUSTOMIZE
ZM_API_PORTAL=https://example.com/zm/api # TO CUSTOMIZE

ES_CERT_FILE=/etc/apache2/ssl/zoneminder.crt
ES_KEY_FILE=/etc/apache2/ssl/zoneminder.key

ML_USER=your_mlapi_user
ML_PASSWORD=your_mlapi_password
PLATEREC_ALPR_KEY=your_platerec_api_key # that i use
OPENALPR_ALPR_KEY=your_openalpr_api_key

ESCONTROL_INTERFACE_PASSWORD=yourescontrolpassword

MQTT_USERNAME=your_mqtt_username
MQTT_PASSWORD=your_mqtt_password

PUSHOVER_APP_TOKEN=your_pushover_app_token
PUSHOVER_USER_KEY=your_pushover_user_key
{% endhighlight %}

Next to **objectconfig.ini** which should look like the code below. With the new version of ZMeventnotification, the configuration of monitors has been greatly simplified

[Click here if you want to read the official doc.](https://zmeventnotification.readthedocs.io/en/latest/guides/hooks.html){:target="_blank"}

For these settings, do not hesitate to write to me but in the first place it is a question of modifying the **\[monitor-x\]** indeed we do not put the name of its camera but if this is in the first position, we will call it monitor-1 and so on, below is an example of garage monitoring.

{% highlight shell %}
[monitor-1]
# mon Door
model_sequence=alpr,object
object_detection_pattern=(person|car|motorbike)

[monitor-2]
#doorbell
model_sequence=face,object
object_detection_pattern=(person)

[ml]
use_sequence= yes # Important for the support of the new system
{% endhighlight %}

in order to be able to use the capture of images by person you must create a folder if it does not exist in ... named known\_faces and integrate inside a subfolder named nicolas then integrate photos of you which will be named 1.webp, 2.webp, etc. architecture direct link [https://zmeventnotification.readthedocs.io/en/latest/guides/hooks.html?highlight=known#known-faces-images](https://zmeventnotification.readthedocs.io/en/latest/guides/hooks.html?highlight=known#known-faces-images){:target="_blank"}

[

Once all the images have been inserted or as soon as you add a new image, you will have to generate the train\_face, so let's go into the docker zoneminder:

{% highlight docker %}
docker exec -it zoneminder /bin/bash
{% endhighlight %}

Once all the images are integrated in the folder or in case of adding images, run the following command to generate the trainface:

{% highlight shell %}
sudo -u www-data /var/lib/zmeventnotification/bin/zm_train_faces.py
{% endhighlight %}

restart the service

{% highlight shell %}
sudo service zoneminder restart
{% endhighlight %}

and voila if everything went well Zmeventnotification should be functional.

## 3 - Integration of Zoneminder in Home Assistant

[zmeventnotification known-faces](https://zmeventnotification.readthedocs.io/en/latest/guides/hooks.html?highlight=known#known-faces-images){:target="_blank"}

[the lines of codes below are to be entered in the configuration.yaml of home-assistant to know all the parameters consult this official page:](https://zmeventnotification.readthedocs.io/en/latest/guides/hooks.html?highlight=known#known-faces-images){:target="_blank"} [Intéegrate Zoneminder and Home assistant](https://www.home-assistant.io/integrations/zoneminder/){:target="_blank"}.

{% picture posts/{{ page.guid }}/detail-ha-zm.png --img width="820" height="460" --alt interface zoneminder in home assistant %}

full zoneminder interface in home assistant

In addition to this integration into home-assistant Zoneminder allows a service called **zoneminder.set\_run\_state**. Allows to Change the state of Zoneminder.

## What is a state in Zoneminder:

A state in Zoneminder allows you to manage the Camera Modes as we see fit, just by switching to this state.

By default there are 3 states in Zm:

1. **Stopped:** unactive all cameras
2. **Reboot:** reboot all cameras
3. **Default** default setting

For Home Assistant I created two new states, HOME is a state when I am at home, and AWAY when I am away, these states are used as part of an automation by alarm management

1. **HOME:** when I am at home the indoor cameras are in Monitor mode and the exteriors in Modect.
2. **AWAY:** when I am away they all switch to Modect.

**IMPORTANT !** the camera modes must be configured before recording a new state, see the Gif below.

**ADVANTAGE:** Compared to the Zm binary-sensor which allows you to switch from one mode to another in HA, the change of state is very practical when you want to choose another mode, when you are full of cameras and above all simplifies automations in HA call a service without needing to call each camera or create a binary\_sensor Home or Away group in HA group.yaml.

![Setting up a report in zoneminder]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/zoneminder-etat-820.webp{{ cachebuster }}){: width="820" height="394"}

## 4 - How Modes work in Zoneminder:

- **None:** Monitor disabled. No flow visualized nor any event generated.
- **Nodect:** This is a special mode designed to work with external triggers. In Nodect, no motion detection takes place but the events are recorded on external triggers
- **Monitor:** The monitor is only available for live streaming. Without image or event analysis.
- **Mocord:** The monitor records continuously, with any movement evidenced in these events.
- **Modect:** The monitor analyzes images and generates events. The video records in motion for a specified time.
- **Record:** The monitor records continuously. Events of fixed duration are generated regardless of movement, much like conventional time-lapse video recording. **No motion detection takes place in this mode.**

## How Zones work in Zoneminder

An article is dedicated to zones and presets, click here!

## How filters work in Zoneminder

An article is dedicated to filters, click here!

## In Conclusion

Finally, **Zoneminder** may not have the most beautiful interface, but thanks to its free and stable nature it is certainly the best camera management tool around. Once you have mastered the various aspects, it then becomes practical, intuitive and essential from a security point of view, **integration into Home assistant is a significant plus.**
