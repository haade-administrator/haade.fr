---
guid: 64
title: "Homeassistant automatic update"
description: "Thanks to a Blueprint, automates Homeassistant updates by creating an automation, this blueprint allows you to configure other updates. This very interesting manipulation is still to be used with a few tweezers"
layout: post
author: Nico
date: 2023-05-04 12:26
last_modified_at: 
categories: [Haade-lab, Automation]
tags: []
image: 'automate-update-of-homeassistant.png'
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
rating:  
sourcelink:
  - https://community.home-assistant.io/t/scheduled-auto-update-for-home-assistant/459281
---

**Here is a very interesting Blueprint**, it allows you to automate all kinds of Homeassistant updates (Homeassistant kernel and system, Hacs, Add-ons, cards, etc...), easily creating a complete automation based on entry planning and the first day of launch. All kinds of options detailed below allow you to configure what you want to update.

## Prerequisites

- Home Assistant installed minimum version 2022.09
- know how Blueprints work
- HACS installed (optional)

## Home Assistant Auto Update

For any questions or suggestions, use [this thread on the Home Assistant Community Portal](https://community.home-assistant.io/t/scheduled-auto-update-for-home-assistant/459281){: target="_blank"}.

{% include blueprint.html link="https://raw.githubusercontent.com/edwardtfn/HomeAssistant-Config/main/blueprints/automation/EdwardTFN/auto_update_scheduled.yaml" %}

## Facility
Nothing could be simpler: click on **the import blueprint image** above then on **open link**. Then you will find in settings > automations and scenes > Blueprint, a Blueprint named **Home Assistant Auto-update on a schedule base** before creating an automation I advise you first to create a schedule [see the schedule step below](./automatic-update-homeassistant#schedule-updates), then launch yourself with the automation and in planning choose the entity created previously.

## Blueprint feature

1. Hacs update (depending on parameter)
2. Create a full backup before running updates
3. Force the Home Assistant host to restart if an update requires it
4. Schedule updates
5. Choose a day of the month for updates
6. Update mode for Home Assistant kernel and OS updates
7. Device firmware update mode
8. Update mode for general updates
9. (optional) Exclusions
10. (optional) Pre-Update Actions
11. (optional) Pre-reboot actions
12. (optional) Post-Update Actions
13. (Optional) Pause feature editing

HACS updates NOT included. This may work if you enable [experimental features](https://hacs.xyz/docs/configuration/options/#options){: target="_blank"} on your HACS integration or when the HACS update feature is released.

**Create a full backup before running updates:** I strongly advise to activate it..

{% picture posts/{{ page.guid }}/option-save-ha.png --alt backup before update ha --img width="940" height="71" %}

**Force the Home Assistant host to reboot if an update requires it:** This will not affect updates where a reboot is automatic, but for updates that require a manual reboot (quite common on HACS), this plan can automatically force a reboot when updates are complete.

{% picture posts/{{ page.guid }}/option-restart-ha.png --alt reboot update ha --img width="940" height="81" %}

### Schedule updates

{% picture posts/{{ page.guid }}/schedule.png --alt planning to launch update automation in homeassistant --img width="940" height="97" %}

[More info on the Scheduling option](https://www.home-assistant.io/blog/2022/09/07/release-20229/#new-helper-weekly-schedule){: target="_blank"}

Aller dans Paramètres > Appareils et services > Entrées > Créer une entrée > Planification

![Planification d'une tâche dans homeassistant](https://www.home-assistant.io/images/blog/2022-09/create_schedule.gif)

**Choose a day of the month for updates**

Usually, a new major version of Home Assistant is released at the beginning of each month. Some people consider these releases not stable enough and prefer to avoid these releases, **only updating the system in the middle of the month (day 15)**.
> If you select a day greater than 28, updates will not run every month.

{% picture posts/{{ page.guid }}/first-month-day.png --alt first day of the month of launching update automation in homeassistant --img width="940" height="118" %}

**Update mode for Home Assistant kernel and OS updates**

Selects the update mode for Home Assistant kernel and Home Assistant OS updates.

{% picture posts/{{ page.guid }}/update-core-system-ha.png --alt option of system and kernel updates in homeassistant --img width="940" height="184" %}

**Device firmware update mode**

Selects firmware update mode in devices connected to Home Assistant (when supported as HA update).

{% picture posts/{{ page.guid }}/update-device-firmware.png --alt firmware updates option in homeassistant --img width="940" height="184" %}

**Update mode for general updates**

> Doesn't seem to work yet!

Selects the update mode for anything other than device firmware or a core component of Home Assistant.
This includes add-ons, HACS components, custom cards, etc.

{% picture posts/{{ page.guid }}/update-general-mode.png --alt general updates option in homeassistant --img width="940" height="201" %}

**(optional) Exclusions**

Select items that should NOT be included in automatic updates.

> Use this if you want to keep certain add-ons on a specific version and avoid automatic updates.

{% picture posts/{{ page.guid }}/exclusions-en.png --alt update exclusions option in homeassistant --img width="940" height="93" %}

**(optional) Pre-Update Actions**

**Actions to perform** before starting backup or any update.
You can use it to send notifications, turn devices on/off or activate scenes before starting updates.

> Note that all actions will be executed just before the update process, which can happen overnight. Take this into account when selecting your stocks.
Note => The "{{ updates_list }}" variable is available for your actions and contains the list of pending updates.

**(optional) Pre-Reboot Actions**

**Actions to perform** before the automation requests a restart.
You can use it to send notifications, turn devices on/off, or stop automations before restarting Home Assistant.

> Note that all actions will be executed just before the reboot process, which can happen overnight. Take this into account when selecting your stocks.
Note => Note that all restarts will be controlled by this automation, such as when a Core update is installed. These actions may not be executed in these cases.
Note => The "{{ updates_list }}" variable is available for your actions and contains the list of pending updates.

**(optional) Post-Update Actions**

**Actions to perform** AFTER the update process is complete.
You can use it to send notifications, turn devices on/off, or activate scenes after applying updates.

> Note that all actions will be executed right after the update process, which can happen overnight. Take this into account when selecting your stocks.
Note => The "{{ updates_list }}" variable is available for your actions and contains the list of pending updates.
IMPORTANT => Some updates will automatically restart Home Assistant, causing the automation to stop before completion, preventing post-update actions from being performed. If you have critical actions to perform after an update, consider including them in another Home Assistant startup-based automation as well.

**(Optional) Pause feature editing**

You can select one or more entities to pause updates. If one of the selected entities is "On" or "True", the system will not update at the scheduled time.
You can use it to keep your updates when you have a house party or when you are on vacation and don't want to worry about updates on Home Assistant.

{% picture posts/{{ page.guid }}/pause-update-entity.png --alt suspend entities from updates in homeassistant --img width="940" height="115" %}

{% include blueprint.html link="https://raw.githubusercontent.com/edwardtfn/HomeAssistant-Config/main/blueprints/automation/EdwardTFN/auto_update_scheduled.yaml" %}

## Conclusion

I wanted to thank **EdwardTFN** Edward Firmo, for sharing with the HA community this magnificent Blueprint which is in my opinion a must to install. 👍
   



