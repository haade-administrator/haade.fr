---
layout: firstheader
title: Contact
comments: false
locale: fr_FR
locale_reference: contact
published: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
order: 3
redirect_from:
  - /contact/
  - /ajout-d-articles/
---

{%- if jekyll.environment == 'production' %}
<form action="https://formsubmit.co/{{site.formcoprod}}" method="POST">
{%- else %}
<form action="https://formsubmit.co/{{site.formcodev}}" method="POST">
{%- endif %} 
<input type="hidden" name="_next" value="{{ site.url }}{{site.baseurl}}/{{ page.locale | slice: 0,2 }}/contact-success">
<input type="hidden" name="_template" value="table">
<input type="hidden" name="_subject" value="Nouvelle soumission !">
<!-- Honeypot -->
<input type="text" name="_honey" style="display:none">
<!-- Disable captcha -->
<input type="hidden" name="_captcha" value="false">
<!-- Autoresponse mail box -->
<input type="hidden" name="_autoresponse" value="Nous avons bien reçu votre message et vous répondrons dans les meilleurs délai">

<p class="mb-4">S'il vous plait envoyez votre message à {{site.name}}. Nous vous répondrons dès que possible!</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="Nom" placeholder="Nom*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="email" placeholder="Adresse E-mail*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="Message" placeholder="Message*" required></textarea>    
<input class="btn btn-dark" type="submit" value="Envoyer">
</form>