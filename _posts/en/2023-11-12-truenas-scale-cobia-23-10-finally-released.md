---
guid: 94
title: "Eagerly awaited Truenas 'Cobia' is here!"
description: "We have been waiting for a long time for a new version of the free NAS management system Truenas scale version which runs under Debian, Truenas v23.10 Cobia"
ref: "Truenas 'Cobia'"
layout: post
authors: Nico
date: 2023-11-12 12:26
last_modified_at: 
categories: [Haade-lab, Security]
tags: []
image: 'truenas-scale-23-10-cobia.png'
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
  - https://www.truenas.com/truenas-scale/
  - https://www.truenas.com/docs/scale/23.10/gettingstarted/scalereleasenotes/
  - https://www.truenas.com/apps/
---

**TrueNAS like Openmediavault** is part of the very restricted world of software dedicated to managing a NAS. For two years the TrueNAS team decided to create a version running on Debian, like TrueNAS Core which runs on FreeBSD. Which makes TrueNAS Scale the only competing version of Openmediavault.

![Presentation of the display of cobia TrueNAS 23.10 modules]({{ site.baseurl }}/assets/images/posts/94/presentation-applications-truenas-cobia-23.webp{{ cachebuster }}){: width ="940" height="483" class="lazyload"}{: target="_blank"}

**TrueNAS SCALE “Cobia” 23.10** BETA version saw five times higher adoption than previous versions of TrueNAS CORE or SCALE. Even with more testers than ever before, relatively few major issues surfaced and these were then quickly resolved.

[Download Truenas Cobia by clicking here](https://www.truenas.com/download-truenas-scale/){: target="_blank"}

{% include videoPlayer.html youtubeId="tz5jeM4QwDQ?si=NZWQtCp-yui9coQ5" %}

## SME features in TrueNAS SCALE 23.10 release

**Server Message Block (SMB)** has become the most common file sharing protocol with strong support on Windows, MacOS, iPhone, Android and Linux clients. SMB features continue to improve with each TrueNAS release and update. In this release, we want to highlight the brand new features in SCALE 23.10.

###SME and NFSv4 compatibility:
Sharing the same data sets over SMB and NFS requires both protocols to have compatible ACLs, permissions, and locks. These features have been gradually added to SCALE, and with this release the final element of a common locking mechanism with NFSv4 has been added. This is a selectable profile in SMB sharing and can be enabled if desired.

### SMB share import:
Many users install TrueNAS to migrate from any other product that supports the SMB sharing protocol, including Windows, Netapp, and a myriad of other products. TrueNAS can now mount the SMB shares of these systems and extract this data into TrueNAS to share again.

### SMB file synchronization:
We have already described how Syncthing can be used to synchronize SMB and NFS shares between TrueNAS systems. It also works well for long-distance collaboration, metropolitan clusters, or data migration. With SCALE 23.10, there is also an option to sync with a third-party SMB server or storage system.

### Fast copying of files:
With the new ZFS block cloning feature, copies of SMB and NFS files and directories can be accelerated by 10x or more. When a directory is copied from one data share to another, only the metadata is copied and the data is treated as a snapshot and remains in place. This speeds up the necessary file copies and allows the administrator to reorganize their data without having to wait hours for the copies to be completed.

### SMB Performance and Scalability:
Several changes have been made to the protocol stack to improve performance and scalability. This includes increasing IOPS, number of users, and number of files per directory. OpenZFS and Samba modifications have been made to enable these improvements. The improvements are also aligned with work on NVMe performance (more information to follow).

**Updated summary of TrueNAS SCALE 23.10**
The TrueNAS SCALE 23.10.0 RELEASE release includes 200 more bug fixes and is feature-rich. Highlights of the 23.10 “Cobia” include:

## SCALE 23.10 (Cobia) Main Features

***Many new features and ongoing improvements have been made to the TrueNAS SCALE experience:***

1. Redesigned apps: A redesign of app screens and backend improvements provide a more complete experience.
2. Storage pool creation overhaul: Provides more details on pool configuration and supports larger SCALE deployments.
3. Disk count optimizations: SCALE 23.10 allows up to 1255 disks, or more than 25 PB under management on a single system.
4. Samba update and speed improvements.
5. SMB/NFSv4 multi-protocol dataset sharing.
6. Simplified comments and bug reports.
7. Linux kernel 6.1 and improved hardware support.
8. OpenZFS 2.2 with many contributions from iXsystems.
9. ZFS block cloning (deduplication type) for faster SMB and NFS file copies
10. ZFS dRAID pool layouts
11. Pause/resume ZFS cleanup checks
12. Reduced HA failover times by up to 70%
13. NVIDIA 535.54.03 driver updates.
14. Netdata back-end statistics collection. Scale to 1,200 disks and 25 PB+ on a single system
Web interface
1. SCALE Enterprise: ALUA iSCSI support is added to TrueNAS SCALE Enterprise.
2. System Service Replacements: Many system services built into SCALE Bluefin are rebuilt as optional TrueNAS SCALE applications.
3. System reports have been revamped and now use Netdata as a backend to provide system statistics to the reports screens.
4. Pause/resume ZFS cleanup checks.
5. ZFS block cloning (deduplication) for SMB and NFS file copies (requires pool upgrade for pools created in previous major releases before 23.10).
6. ZFS dRAID pool arrangements.
7. Importing SMB shares from other systems (coming soon!).
8. Simplified SMB cluster expansion via TrueCommand is planned with the release of TrueCommand 3.0 (coming soon!).

**Security updates** and Samba speed improvements
Simplified SME cluster expansion via TrueCommand 3.0 (coming soon!)
Importing SMB shares from other systems
File synchronization between NFS/SMB systems
iSCSI enhancements, including ALUA support
SMB and NFSv4 compatibility for common stocks
Early adopters are recommended to start with this release until there is more testing and feedback from the community. The TrueNAS software status page tracks quality and user type recommendations.

**TrueNAS Enterprise** and related applications are based on **TrueNAS 13.0 or Bluefin (22.12)**. Cobia (23.10) has been added and with improvements in quality, flexibility and security, it will soon replace Bluefin on devices.

The upcoming **TrueCommand 3.0** fully supports Cobia (23.10) and there are limitations when using TrueCommand 2.3. If TrueCommand functionality is a business requirement, it is recommended to delay updating the system until TrueCommand 3.0 is available, which is expected by December.

**TrueNAS 13.1** will inherit some improvements from **Cobia**
Now that TrueNAS SCALE Cobia is released, there will be a similar TrueNAS CORE & Enterprise update to TrueNAS 13.1. This update will include the many SMB and ZFS enhancements that have been implemented and tested in TrueNAS SCALE Cobia. TrueNAS 13.1 is scheduled for release in early 2024. Nightly builds have been made available for testers and those who wish to contribute to the development of TrueNAS. The link to nightly builds can be found on the TrueNAS software status page.

**TrueNAS 13.1** includes additional features to simplify “upgrading” from TrueNAS 13.1 to TrueNAS SCALE 23.10, especially for Enterprise.

## {{ page.ref }} in picture

{% picture posts/{{ page.guid }}/truenas-webui-app.png --alt presentation of truenas cobia 23.10 webui --img width="940" height="575" %}

{% picture posts/{{ page.guid }}/truenas-gestion-stockage-disque-23-10-cobia.png --alt presentation of truenas cobia 23.10 disk storage management --img width="940" height="788" %}

{% picture posts/{{ page.guid }}/truenas-Pool-Creation-zfs-cobia.png --alt presentation of truenas cobia 23.10 zfs pool management --img width="940" height="621" %}

