---
layout: firstheader
title: Contact
comments: false
locale: en_GB
locale_reference: contact
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
order: 3
---

<form action="https://formsubmit.co/{{site.formsubmitco}}" method="POST"> 
<input type="hidden" name="_next" value="{{ site.url }}{{site.baseurl}}/{{ page.locale | slice: 0,2 }}/contact-success">
<input type="hidden" name="_template" value="table">
<input type="hidden" name="_subject" value="New Submission !">
<!-- Honeypot -->
<input type="text" name="_honey" style="display:none">
<!-- Disable captcha -->
<input type="hidden" name="_captcha" value="false">
<!-- Autoresponse mail box -->
<input type="hidden" name="_autoresponse" value="We have received your message and will respond to you as soon as possible.">
    <div class="contentact">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">29 rue des greniers à grains</div>
          <div class="text-two">67350 Ettendorf</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
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
        <div class="topic-text">Send Us a Message</div>
        <p>You want to ask me a question, you are on the right page. It is with pleasure that I will answer you.</p>
        <div class="input-box">
          <input type="text" name="Name" placeholder="Your Name *" required>
        </div>
        <div class="input-box">
          <input type="email" name="email" placeholder="Your E-mail *" required>
        </div>
        <div class="input-box">
        <input type="text" name="_subject" placeholder="Subject *" value="" required>
        </div>
        <div class="input-box message-box">
          <textarea name="Message" placeholder="Message *" required></textarea>    
        </div>
        <div class="button">
          <input type="submit" value="Send us" >
        </div>
      </div>
    </div></form>