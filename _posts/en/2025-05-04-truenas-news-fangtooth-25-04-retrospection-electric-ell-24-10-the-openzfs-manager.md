---
guid: 162
title: "TrueNAS Scale OS Update: The Best NAS Manager of the Moment!"
description: "TrueNAS scale is reaching maturity and is announcing major advances that now allow me to leave OMV, my old NAS manager."
ref: ""
layout: post
authors: [Nico]
date: 2025-05-04 18:30
last_modified_at: 
categories: [News, Security]
tags: []
video: 
image: 'truenas-ameliration-24-et-25-fangtooth-edition-logiciel-par-excellence.png'
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
  - https://www.truenas.com/blog/
---

How time flies! It's been over a year now since I last looked at the embedded system for Nas, [TrueNAS](https://www.truenas.com/){: target="_blank"}. As you know, few open source operating systems are dedicated to Nas, **personally I only see two** that are valid [**Openmediavault**](https://www.openmediavault.org/){: target="_blank"} and [**TrueNAS**](https://www.truenas.com/){: target="_blank"} **(formerly Freenas)**. To get back to the point [in November 2023, I wrote an article on the progress of version 23]({% post_url /en/2023-11-12-truenas-scale-cobia-23-10-finally-released %}){: target="_blank"}, but **since then, two other major versions** have been released. **Electric Eel** in **24.10** and, more recently (April 2025), **Fangtooth** for version **25.04**.

> And I can now say that **TrueNas is the best NAS OS** for **RaidZ** management thanks to the advances in **openZFS**.

If you read my [previous article]({% post_url /en/2023-11-12-truenas-scale-cobia-23-10-finally-released  %}){: target="_blank"}, you already know that **I've been using OMV for several years**, using **openzfs management** via the proxmox kernel to manage my hard drives. **But I'll soon be switching to TrueNAS**, which uses openZFS version 2.3.2, while on omv, the only version of openZFS offered is from September 2023 (2.1.13). **There have been so many advances that I can't afford to miss it anymore?**

## TrueNAS Electric Eel 24.10

Let's start with the progress of version 24.10. First of all, this version is the logical continuation of Dragonfish 24.04, which was officially released on October 24, 2024, just over six months ago. [You can follow all the developments of this version via this link](https://www.truenas.com/docs/scale/24.10/gettingstarted/scalereleasenotes/){: target="_blank"} in the official documentation.

Major advancements and management via OpenZFS were announced with Electric Eel:

1. **RaidZ Extension**: It is now easy to expand your RaidZ storage.
2. **Docker by Default**{: .blue}: TrueNAS 24.10 migrates the previous Kubernetes-based application backend to the simpler Docker Compose solution, while seamlessly migrating and preserving data from existing application installations.
3. **RaidZ Fast Deduplication**{: .blue}: Aimed at improving the data reduction capabilities of OpenZFS, including virtualization and desktop file storage where files can be copied to multiple locations by end users. However, with legacy OpenZFS deduplication algorithms, the overhead of maintaining in-memory deduplication metadata tables at all times led to performance and usability issues at scale. Now, thanks to a more efficient metadata structure, a log-based write queue, and the pruning of non-duplicate entries, all combine to reduce the memory footprint of **deduplication by up to 90%.**
4. **Global Search and Customizable Dashboard Widgets**: The search engine allows you to find the desired page in just a few clicks and navigate to it with a single click. Now you can customize the dashboard and put your most crucial information front and center, ready as soon as you log in. (similar to OMV, but with a better design)
5. **Added the S.M.A.R.T. feature**: an essential disk monitoring and testing standard for a NAS
6. **Upgrading a storage pool**: the pool upgrade feature is now integrated

**Electric Eel is an important release** because it significantly reduces **RAM memory usage, which is the major flaw of the ZFS system**. TrueNAS has replaced **Kubernete with Docker** and the **Docker Compose** manager. Now I can say it's time to switch to TrueNAS, **because under OMV, ZFS and Docker applications currently use 25GB of memory out of 32GB, or 80%, which is huge.**

**The latest version** of Electric Eel is [version 24.10.2.1](http://truenas.com/docs/scale/24.10/gettingstarted/scalereleasenotes/#241021){: target="_blank"} which wipes many bugs

## TrueNAS Fangtooth 25.04

Fangtooth 25.04 [was released on April 15, 2025](https://www.truenas.com/blog/truenas-fangtooth-25-04-release/){: target="_blank"}, the major new feature is virtualization of virtual machines. [You can follow all the updates in this version via this link](https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/){: target="_blank"}

**Among the major new features are:**

1. **Virtualization Change**{: .blue}: Replaces the old implementation of **libvirt** (TrueNAS 24.10 and earlier) with **Incus** for virtual machine (VM) deployment. It also introduces support for Linux System Containers (LXC), enabling lightweight isolation similar to TrueNAS CORE jails.
2. **Instance Improvements** (still in testing)
3. **Application Service Improvements**: including per-application IP address selection (see TrueNAS Apps in the release notes). 
4. U**ser-linked API keys** ([see API Key Management](https://www.truenas.com/docs/scale/25.04/scaletutorials/toptoolbar/managingapikeys/){: target="_blank"} )
5. Improved **UI login** experience
6. **Enabled support** for **ZFS Fast Deduplication** (a logical extension of Electric Eel)

#### VM Migration:

{%- include alert.html type="info" text="Due to configuration incompatibilities between the previous libvirt implementation (TrueNAS 24.10 and earlier) and Incus in TrueNAS 25.04, existing VM configurations are not automatically transferred during upgrade. However, TrueNAS retains storage Zvol files, allowing you to manually recreate previous VM configurations and bring them back online.

<b>Instances</b> are an experimental feature intended for community testing only. Users of production VMs on TrueNAS 24.10 should not upgrade to TrueNAS 25.04 until this experimental feature is stabilized in a future TrueNAS release." link="https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/" textlink="Fangtooth 25.04 Infos" %}

## Conclusion

**TrueNAS Scale is taking a major step forward in its OS**. More than 10,000 users have tested the Electric Eel version. **Thanks to community feedback**, TrueNAS Scale now includes very interesting features like **Docker** and **improved ZFS pool storage management by significantly reducing RAM usage in such a system**, which, in my opinion, is the biggest drawback of ZFS.

> It's time for me to switch from OMV to TrueNAS Scale.

**I'll provide feedback** on this migration. Count on me 👌


