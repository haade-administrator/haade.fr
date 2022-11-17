---
guid: 29
title: 'Explication des Zones dans ZM'
description: ""
date: '2022-11-09 19:49'
last_modified_at: 
categories: [Docker, Domotique, Haade-lab]
tags: []
image: 'zoneminder-les-zones.png'
toc: false
beforetoc: ''
author: Nico
layout: post
published: true
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
---

C’est l’un des concepts les plus importants de ZoneMinder et vous avez le choix entre six choix.

**1 - Active:**{: .red} **Déclenche une alarme lorsqu’un mouvement y est détecté**. C’est le type de zone que vous utiliserez le plus souvent et qui sera défini pour votre zone par défaut. Seules les zones actives et exclusives peuvent déclencher une alarme.

{% picture posts/{{ page.guid }}/zone-active-zoneminder.png --alt zone active dans Zoneminder --img width="932" height="522" %}

**2 - Inclusive:**{: style="color: red"} **Ce type de zone peut être utilisé pour toutes les zones pour lesquelles vous souhaitez déclencher une alarme uniquement si au moins une autre zone active en a déjà déclenché une.** Cela peut être par exemple pour couvrir une zone de l’image comme **une plante ou un arbre** qui bouge beaucoup et qui déclencherait de nombreuses alarmes. Peut-être que c’est derrière une zone que vous souhaitez surveiller, dans ce cas, vous créeriez une zone active couvrant les parties non mobiles et une zone inclusive couvrant l’arbre peut-être avec des paramètres de détection moins sensibles également. Si quelque chose déclenchait une alarme dans la zone active et également dans la zone inclusive, ils seraient tous deux enregistrés et l’alarme résultante serait beaucoup plus grande que si vous l’aviez complètement effacée.

{% picture posts/{{ page.guid }}/zone-inclusive-zoneminder.png --alt zone inclusive dans ZM --img width="932" height="522" %}

**3 - <span style="color:black">Exclusive:</span>** Déclenche une alarme lorsqu’un mouvement y est détecté, tant qu’aucune alarme n’a déjà été déclenchée dans une zone active. Il s’agit du type de zone le plus spécialisé. Par exemple, dans la caméra couvrant mon jardin, je surveille un hérisson qui visite la plupart des nuits et se moque de la nourriture des bols de mon chat. En créant une zone exclusive sensible dans cette zone, je peux m’assurer qu’une alarme de hérisson ne se déclenchera que s’il y a une activité dans cette petite zone. Si quelque chose de beaucoup plus gros se produit, comme quelqu’un qui passe à côté, cela déclenchera une alarme régulière et non une alarme de la zone exclusive. Ainsi, je peux m’assurer que je reçois des alarmes pour les grands événements et aussi les petits événements spéciaux, mais pas le bruit entre les deux.

{% picture posts/{{ page.guid }}/zone-exclusive-zoneminder.png --alt zone exclusive dans ZM --img width="932" height="522" %}


**4 - <span style="color:blue">Preclusive:</span>** Ce type de zone est relativement récent. On l’appelle une zone de préclusion car **si elle est déclenchée, elle empêche en fait la génération d’une alarme** pour cette image. Ainsi, les mouvements ou autres changements qui se produisent dans une zone de préclusion auront pour effet de garantir qu’aucune alarme ne se déclenche du tout. L’application de ce type de zone est principalement un raccourci pour détecter un éclairage général à grande échelle ou d’autres changements. En général, cela peut être réalisé en limitant le nombre maximum de pixels d’alarme ou d’une autre mesure dans une zone active. Cependant, dans certains cas, cette zone peut couvrir une zone où la zone d’éclairage variable se produit à différents endroits lorsque le soleil et / ou les ombres se déplacent et il peut donc être difficile de trouver des valeurs générales. Aditionellement, si le soleil sort rapidement, bien que le changement initial puisse être ignoré de cette manière lorsque l’image de référence rattrape, une alarme peut finalement être déclenchée lorsque l’image devient moins différente. L’utilisation d’une ou de plusieurs zones de préclusion offre une approche différente. Les zones de préclusion sont conçues pour être assez petites, même de quelques pixels de diamètre, avec des seuils d’alarme assez bas. Ils doivent être situés dans des zones de l’image qui sont moins susceptibles de provoquer un mouvement, par exemple en hauteur sur un mur ou dans un coin. Si un changement général de l’éclairage se produisait, il serait déclenché au moins dès les zones actives et empêcherait toute autre zone de générer une alarme. De toute évidence, un placement soigneux est nécessaire pour s’assurer qu’elles n’annulent aucune alarme authentique ou qu’elles ne sont pas si proches les unes des autres que tout mouvement saute simplement d’une zone de préclusion à une autre. Les zones de préclusion peuvent également être utilisées pour réduire le temps de traitement en en situant une sur une zone active. La zone de préclusion est traitée en premier; s’il est petit et qu’il est déclenché, le reste de la zone / image ne sera pas traité. Voir Prolonger le nombre de trames d’alarme ci-dessous pour savoir comment maintenir la zone d’exclusion active pendant une période prolongée.

{% picture posts/{{ page.guid }}/zone-preclusive-zoneminder.png --alt zone preclusive dans ZM --img width="932" height="522" %}

**5 – Inactif:** Supprime la détection de mouvement en son sein. **Elle peut être superposée** à tout autre type de zone, empêchant le mouvement dans la zone inactive d’être efficace pour tout autre type de zone. Utilisez des zones inactives pour couvrir des zones dans lesquelles rien de notable ne se produira ou où vous recevez de fausses alarmes qui ne concernent pas ce que vous essayez de surveiller. Les zones inactives peuvent être superposées sur d’autres zones pour masquer les zones, et sont traitées en premier (à l’exception des zones de confidentialité, voir ci-dessous). En règle générale, vous devez essayer de faire en sorte que les zones soient contiguës les unes aux autres au lieu de se chevaucher pour éviter le traitement répété en double de la même zone.

**6 – Confidentialité:** **Noircit les pixels qu’il contient. Cela peut être utilisé si vous souhaitez masquer certaines régions de l’image si la situation ne permet pas une autre solution.** Ce type de zone est différent de tous les autres en ce sens qu’il est traité dès que possible lors de la capture (même avant que l’horodatage n’entre dans l’image) et non dans le processus d’analyse. Ainsi, si vous ajoutez, modifiez ou supprimez une zone de confidentialité, vous ne voyez pas les modifications dans l’image tant que le processus de capture n’est pas redémarré. Cela se fera automatiquement, mais prendra quelques secondes.

**Préréglage**

Le sélecteur de préréglage définit des valeurs par défaut sensibles en fonction des besoins de calcul (rapide vs meilleur) et de la sensibilité (faible, moyen, élevé). Il n’est pas nécessaire que vous sélectionniez un préréglage, et vous pouvez modifier l’un des paramètres après avoir choisi un préréglage. Pour un petit nombre de moniteurs avec ZoneMinder fonctionnant sur un équipement moderne, la meilleure sensibilité élevée peut être choisie comme un bon point de départ.

Il est important de comprendre que les préréglages disponibles ne sont qu’un simple point de départ. Étant donné que la vue de chaque caméra est unique, elles ne sont pas garanties de fonctionner correctement dans tous les cas. Les préréglages ont tendance à fonctionner de manière acceptable pour les caméras intérieures, où les objets d’intérêt sont relativement proches et il y a généralement peu ou pas d’objets indésirables se déplaçant dans la vue de la caméra. Les préréglages, en revanche, ont tendance à ne pas fonctionner de manière acceptable pour les caméras extérieures, où le champ de vision est généralement beaucoup plus large, les objets d’intérêt sont plus éloignés et les changements de conditions météorologiques peuvent provoquer de faux déclencheurs. Pour les caméras extérieures en particulier, vous devrez presque certainement régler votre zone de détection de mouvement pour obtenir les résultats souhaités. Veuillez consulter [ce guide](https://wiki.zoneminder.com/index.php/Understanding_ZoneMinder%27s_Zoning_system_for_Dummies) pour savoir comment procéder.Unités

- Pixels – La sélection de cette option permettra de saisir (ou de visualiser) plusieurs des valeurs suivantes en unités de pixels.
- Pourcentage – La sélection de cette option permettra de saisir (ou d’afficher) les valeurs suivantes sous forme de pourcentage. Le sens des valeurs de pourcentage fait référence à la zone de la zone et non à l’image dans son ensemble. Cela rend plus facile d’essayer de déterminer les tailles nécessaires.