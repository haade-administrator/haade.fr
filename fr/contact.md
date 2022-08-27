---
layout: firstheader
title: Contact
comments: false
locale: fr_FR
locale_reference: contact
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
order: 3
---

<form action="https://formspree.io/{{site.email}}" method="POST">    
<p class="mb-4">S'il vous plait envoyez votre message à {{site.name}}. Nous vous répondrons dès que possible!</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="Nom*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="Adresse E-mail*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Message*" required></textarea>    
<input class="btn btn-dark" type="submit" value="Envoyer">
</form>
