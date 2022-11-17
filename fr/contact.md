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
redirect_from:
  - /contact/
  - /ajout-d-articles/
---


<form action="https://formsubmit.co/{{site.formsubmitco}}" method="POST">
<input type="hidden" name="_next" value="{{ site.url }}{{site.baseurl}}/{{ page.locale | slice: 0,2 }}/contact-success">
<input type="hidden" name="_template" value="table">
<input type="hidden" name="_subject" value="Nouvelle soumission !">
<!-- Honeypot -->
<input type="text" name="_honey" style="display:none">
<!-- Disable captcha -->
<input type="hidden" name="_captcha" value="false">
<!-- Autoresponse mail box -->
<input type="hidden" name="_autoresponse" value="Nous avons bien reçu votre message et vous répondrons dans les meilleurs délai">
    <div class="contentact">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Addresse</div>
          <div class="text-one">29 rue des greniers à grains</div>
          <div class="text-two">67350 Ettendorf</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Téléphone</div>
          <div class="text-one">+0033 6 99 40 15 86</div>
          <div class="text-two"></div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">administrateur[@]haade.fr</div>
          <div class="text-two">nico[@]haade.fr</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Envoyez-nous un message</div>
        <p>Tu veux me poser une question, tu es sur la bonne page. C'est avec plaisir que je te répondrai.</p>
        <div class="input-box">
          <input type="text" name="Nom" placeholder="Ton Nom *" required>
        </div>
        <div class="input-box">
          <input type="email" name="email" placeholder="Ton adresse Mail *" required>
        </div>
        <div class="input-box">
        <input type="text" name="_subject" placeholder="Sujet *" value="" required>
        </div>
        <div class="input-box message-box">
          <textarea name="Message" placeholder="Message *" required></textarea>    
        </div>
        <div
  class="g-recaptcha"
  data-sitekey="6LexaRQjAAAAAEGlmHkRT1kSFy-6qDzyJ9fiPrlV"
  data-callback="onRecaptchaSuccess"
  data-expired-callback="onRecaptchaResponseExpiry"
  data-error-callback="onRecaptchaError"
>
</div>
        <div class="button">
          <input type="submit" value="Envoyer" >
        </div>
      </div>
    </div></form>