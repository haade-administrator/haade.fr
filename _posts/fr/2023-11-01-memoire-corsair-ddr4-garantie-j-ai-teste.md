---
guid: 89
title: "J'ai testé la garantie à Vie Corsair"
description: "j'ai testé la prise en charge de la garantie à vie des mémoires corsair ddr4 vengeance, retour d'expérience"
ref: "Vengeance LPX"
layout: post
authors: Nico
date: 2023-11-01 15:40
last_modified_at: 
categories: [Tests, Haade-lab]
tags: []
image: 'garantie-memoire-corsair-ddr4-a-vie-j-ai-teste.png'
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
rating: 4.6
sourcelink:
  - https://www.corsair.com/fr/fr
  - https://help.corsair.com/hc/fr
  - https://s.click.aliexpress.com/e/_DBI3pAX
  - https://www.amazon.fr/s?k=corasir+vengeance+lpx&i=computers&camp=1642&creative=6746&linkCode=ur2&linkId=f8f98039c8a5393630e52926f92c9a9a&tag=haade0a-21
---

Je voulais te faire partager un retour d'expérience concernant **la garantie à vie proposée** par corsair sur la défailance d'une mémoire Corsair Vengeance LPX.
**Les faits:** En 2018 j'ai acheté sur Aliexpress un lot de deux barrettes ddr4 2x8GB 2666MHZ, elles ont été installées sur un NAS Diy monté par mes soins. Il y a peu de temps j'ai rencontré des instabilités sur le NAS, après un rapide test avec memtest86+ je me suis rendu compte qu'une des deux barrettes avait lâché. Et là je me suis dit, **mais biensûre Corasir garantie les barrettes Vengance LPX à vie ...**

Ces barrettes **ont fait le job durant 5 ans**. Souvent les fabriquant trouvent un subterfuge pour ne prendre en charge le matériel sosu garantie, **est-ce le cas chez Corsair ?**

{% include product-embed.html image="https://ae01.alicdn.com/kf/S4b27b6f183cd4541be0205b384fe869fs/CORSAIR-DDR4-RAM-M-moire-De-Bureau-Vengeance-16GB-8GB-3200MHz-3600MHz-Dimm-Memoria-Rams-PC4.jpg_640x640.jpg" title="Corsair vengeance LPX" brand="Corsair" description="Memoire corsair vengeance LPX ddr4" affiliate="_DBI3pAX" amazlink="40jjIdY" %}

## Caractéristiques Corsair {{ page.ref }}

Petit tour de présentation des barrettes Corsair {{ page.ref }}, tu pourras aussi les acheter directement sur leur site.

**CONÇU POUR UN OVERCLOCKING HAUTE PERFORMANCE**

La mémoire VENGEANCE LPX a été spécialement conçue pour l'overclocking haute performance. Le dissipateur thermique est composé d'aluminium pour une dissipation rapide de la chaleur, et le circuit imprimé taillé sur mesure gère la chaleur et offre une marge d'overclocking supérieure. Chaque circuit intégré est sélectionné individuellement pour assurer le potentiel de pics d'activité.

{% include videoPlayer.html youtubeId="8wbcW__ASbA?si=IG7L1FrrgIyxKrME" %}

## Préparation avant demande de prise en charge

Afin de préparer la demande de prise en charge de la garantie chez Corsair il faudra préparer au préalable:

1. La facture d'achat {{ page.ref }}
2. La référence des mémoires ( dans mon cas CMK16GM... )
3. Une copie du test memtest86+

> Si tu as acheté un lot de 2 ou 4 barrettes **il faudra retourner l'ensemble du lot**.

### Test memtest86+

Memtest86+ est un utilitaire qui se lance sur clé USB au démarrage du pc, grâce à lui tu pourras tester les barrettes de mémoires et ainsi voir celle qui est défaillante plus les problèmes rencontrés, un test en 2 passes suffira, à la fin un lien du test te sera fourni et tu pourras télécharger le résultat que tu soumettras à Corsair.

[Télécharge Memtest86+](https://memtest.org/){: target="_blank"}

{% picture posts/{{ page.guid }}/page-memtest-zone-telechargement.png --alt page de téléchargement memtest86+ --img width="940" height="600" %}

[Documentation Memtest86+](https://memtest.org/readme){: target="_blank"}

**Windows installation:** Branchez une clé USB standard au format FAT32, téléchargez et lancez le programme d'installation USB Windows et suivez les étapes rapides. Redémarrez votre ordinateur et sélectionnez la clé USB dans votre menu de démarrage.

**Linux installation:** L'image ISO doit être écrite directement (« vidée ») sur le périphérique brut, soit à l'aide de la commande dd, soit à l'aide d'un utilitaire offrant les mêmes fonctionnalités comme [balenaEtcher](https://www.balena.io/etcher/){: target="_blank"}.

**Mac Installation:** Nous recommandons [balenaEtcher](https://www.balena.io/etcher/){: target="_blank"} pour graver l'image sur une clé USB sous MacOS. PS : L'utilisation de la fonction Restaurer dans l'Utilitaire de disque d'Apple ne fonctionne pas.

## Faire une demande de prise en charge

Chez corsair pour faire une prise de demande sous garantie de prise en charge clic sur ce [lien demande de prise sous garantie Corsair](https://help.corsair.com/hc/fr){: target="_blank"} et sélectionne Warranty replacement, ensuite il ne te restera plus qu'à remplir le formulaire. Sous 48h tu auras une réponse.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S4b27b6f183cd4541be0205b384fe869fs/CORSAIR-DDR4-RAM-M-moire-De-Bureau-Vengeance-16GB-8GB-3200MHz-3600MHz-Dimm-Memoria-Rams-PC4.jpg_640x640.jpg" title="Corsair vengeance LPX" brand="Corsair" description="Memoire corsair vengeance LPX ddr4" affiliate="_DBI3pAX" amazlink="40jjIdY" %}

## Conclusion

La communication avec le service de Garantie Corsair s'est faite sans aucun soucis. Après avoir envoyé l'ensemble des infos concernant mon soucis rencontré et la confirmation de prise en charge il s'est passé une semaine. **Et 10 jours plus tard je réceptionnais un nouveau lot de barrettes dans son emballage d'origine et livré par DHL.** Voilà une prise en charge effectuée sans accrocs, **MERCI CORSAIR** 👏
