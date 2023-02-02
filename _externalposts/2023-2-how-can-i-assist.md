---
title: "2023.2 - How can I Assist?"
date: 2023-02-01 00:00:00 +0000
dateadded: 2023-02-02 08:54:04 +0100
description: "<p><a href='http://www.home-assistant.io/integrations/#version/2023.2'><img src='http://www.home-assistant.io/images/blog/2023-02/social.png' style='border: 0;box-shadow: none;'></a></p>
<p>Home Assistant Core 2023.2! 🎉</p>
<p>This release covers the first month of development of 2023, and it is setting
one heck of a high bar for the rest of the year! 😅</p>
<p>Undoubtedly, the most spectacular features are related to the
<a href="http://www.home-assistant.io/blog/2023/01/26/year-of-the-voice-chapter-1/">first chapter of Year of the Voice</a>. 🎙️
It is hard to sum up all of this in this release blog, so I’m not even going
to try doing it in this introduction, but holy mother of smart homes: this is
exciting stuff! 😮</p>
<p>My personal favorite this release: huge steps into an even tighter integration
with our amazing sister project: <a href="https://esphome.io">ESPHome</a>. Creating
and maintaining your own secure DIY IoT devices just became a lot easier.</p>
<p>And since we are talking about awesomeness, have you noticed the large amount
of logos in the release image above? So many new integrations! 🤩</p>
<p>Enjoy the release!</p>
<p>../Frenck</p>
<p><em>PS: Just a reminder that valentine’s day is coming up. Be sure to share the love! ❤️</em></p>
<!--more-->
<ul>
<li><a href="#meet-assist">Meet: Assist!</a></li>
<li><a href="#streaming-history">Streaming history</a></li>
<li><a href="#grouping-sensors">Grouping sensors</a></li>
<li><a href="#now-even-tighter-integrated-with-esphome">Now even tighter integrated with ESPHome</a></li>
<li><a href="#other-noteworthy-changes">Other noteworthy changes</a></li>
<li><a href="#new-integrations">New Integrations</a></li>
<li><a href="#integrations-now-available-to-set-up-from-the-ui">Integrations now available to set up from the UI</a></li>
<li><a href="#need-help-join-the-community">Need help? Join the community!</a></li>
<li><a href="#breaking-changes">Breaking Changes</a></li>
<li><a href="#farewell-to-the-following">Farewell to the following</a></li>
<li><a href="#all-changes">All changes</a></li>
</ul>
<p>Don’t forget to <a href="https://www.youtube.com/watch?v=S3XRVsqRX9k">join our release party live stream on YouTube</a> 1 February 2023, at 12:00 PST / 21:00 CET!</p>
<p><lite-youtube videoid="S3XRVsqRX9k" videotitle="Home Assistant 2023.2 Release Party"></lite-youtube></p>
<h2>Meet: Assist!</h2>
<p>It’s <a href="http://www.home-assistant.io/blog/2022/12/20/year-of-voice/">Home Assistant’s Year of the Voice</a>, and
it’s our goal to let users control Home Assistant in their own language.
Together with the Home Assistant community, we have been hard at work building
the foundation for this.</p>
<p>Today we like you to meet:</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2023-02/assist.png' alt='Screenshot showing the new assist feature being used to turn on lights'>
<p><img src='http://www.home-assistant.io/images/assist/assist-icon.svg' alt='Assist icon' style='height: 32px' class='no-shadow'> Assist
allows you to use natural language to control Home Assistant. It is powered by
<a href="https://github.com/home-assistant/hassil">Hassil</a> and the sentences
(contributed by 112! people) from the
<a href="https://home-assistant.github.io/intents/">Home Assistant Intents</a> project.</p>
<p>We believe technology is meant to be played with, and projects should be
usable as soon as possible. Together with the community, we can then iterate
and refine. That’s why today, we’re delivering a basic experience supporting
a stunning 22! languages that work with Assist.</p>
<p>Go ahead, it is enabled by default; just tap the new Assist icon
<img src='http://www.home-assistant.io/images/assist/assist-icon.svg' alt='Assist icon' style='height: 32px' class='no-shadow'>
at the top right of your dashboard to start using it.</p>
<p>Oh, and we are also releasing some fun stuff we’ve cooked up along the way!
<a href="http://www.home-assistant.io/docs/assist/">Read more about Assist</a> and other released voice features in the
<a href="http://www.home-assistant.io/blog/2023/01/26/year-of-the-voice-chapter-1/">Chapter 1: Assist</a> blogpost
and a <a href="https://www.youtube.com/live/ixgNT3RETPg">video presentation (including live demos) on YouTube</a>.</p>
<p><lite-youtube videoid="ixgNT3RETPg" videotitle="Year of the Voice - Chapter 1"></lite-youtube></p>
<h2>Streaming history</h2>
<p>History cards now update live! We now stream the state changes while they are
happening and update the graphs in real-time 😲</p>
<p class='img'>
<img src='http://www.home-assistant.io/images/blog/2023-02/streaming-history-cards.gif' alt='Screenshot showing a history card presenting the power usage of a kitchen coffeemaker, updating live while brewing coffee'></a>
These history cards now show live power usage, while I'm brewing a cup of coffee.
</p>
<p>But this isn’t just limited to history cards, your
<a href='https://my.home-assistant.io/redirect/history' class='my' target='_blank'>history dashboard</a> is now live too!</p>
<p>As a result of this all, we can now write less frequently to the database in our
recorder. It took years of changes to get us to this point (thanks <a href="https://github.com/bdraco">@bdraco</a> 🙏).
It greatly reduces resource usage and increases storage lifetimes significantly.
The previously introduced live logbook and now the live history were the
last pieces that made this possible.</p>
<p>As a side-effect, it should also resolve the authentication errors some people
experienced re-opening the iOS companion app when using history cards.</p>
<h2>Grouping sensors</h2>
<p>The <a href="http://www.home-assistant.io/integrations/group">group helper</a> now supports sensors too! Sensor groups
can combine entities with a numeric state, like <a href="http://www.home-assistant.io/integrations/sensor">sensors</a>,
<a href="http://www.home-assistant.io/integrations/number">number</a>, and <a href="http://www.home-assistant.io/integrations/input_number">number helpers</a>
entities.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2023-02/sensor-groups.png' alt='Screenshot showing the process of adding a new sensor group'>
<p><a href='https://my.home-assistant.io/redirect/config_flow_start?domain=group' class='my badge' target='_blank'><img src='https://my.home-assistant.io/badges/config_flow_start.svg' /></a></p>
<p>This feature is a revised, improved, and more logical version of the
“Min/Max” integration / “Combine the state of several sensors” helper.
It is likely we are going to replace those with this new sensor group
in the future.</p>
<p>Compared to those previously mentioned methods, the sensor groups have the
additional options to hide their member entities and the option to ignore
sensors that currently are not in a numeric state (i.e., currently “unavailable”
or “unknown”).</p>
<h2>Now even tighter integrated with ESPHome</h2>
<p><a href="https://esphome.io">ESPHome</a> already works really well with Home Assistant.
Yet, this release makes it even better!</p>
<p>If you are using the ESPHome add-on, we have some great improvements for you.
The add-on and Home Assistant will now communicate with each other, bringing
in many new features.</p>
<p>When you set up a new device in ESPHome and next add it to Home Assistant,
they will be able to exchange encryption keys. Removing the need for you to
find, copy &amp; paste those. Just a single click and the setup is done! 🚀</p>
<p>But that is not all. What is really mind-blowing, is that the ESPHome
integration will now provide update entities when using the add-on!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2023-02/esphome-update-entities.png' alt='Screenshots, left one showing pending updates for ESPHome devices. Right one: an ESPHome device installing an update straight from Home Assistant'>
<p>Right now, the update entities will only indicate if a device needs updating.
However, when the next major release of ESPHome (2023.2) becomes available,
it will support updating them too! Yes, at that point, you can update your
ESPHome devices directly from Home Assistant and even automate it!</p>
<p>Also, ESPHome is deprecating the old password-based authentication for its
API in favor of the more secure encryption key. If one of your ESPHome devices
is still using a plain password, Home Assistant will notify you by creating
an issue in your <a href='https://my.home-assistant.io/redirect/repairs' class='my' target='_blank'>Repairs dashboard</a>.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2023-02/esphome-repairs-encryption-key.png' alt='Screenshot showing a raised repair issue for an ESPHome device still using the deprecated API password instead of an API encryption key'>
<p>We’ve also prepared for the next release of ESPHome (2023.2), in which you can
add a friendly, more human name to your ESPHome devices. Home Assistant will
pick those up, making your ESPHome devices look better out-of-the-box!</p>
<h2>Other noteworthy changes</h2>
<p>There is much more juice in this release; here are some of the other
noteworthy changes this release:</p>
<ul>
<li>You can now add aliases to your areas too! Our new Assist feature
leverages this.</li>
<li>Got an energy sensor in <code>Wh</code>, but you’d like it to be <code>kWh</code>? You can now
change the units of energy sensors in the entity settings.</li>
<li>Each entity in the frontend has its own color, which is based on the current
entity state. We now have <a href="http://www.home-assistant.io/integrations/frontend/#state-color">officially added support</a>
for themes to customize these.</li>
<li>The most awesome integration of all, got even better. <a href="https://github.com/Lash-L">@Lash-L</a> added support
for the battery state of your <a href="http://www.home-assistant.io/integrations/oralb">Oral-B</a> toothbrush!</li>
<li>The automations &amp; scripts UI now support selecting other entities for
above/below in the numeric state conditions &amp; triggers. Thanks, <a href="https://github.com/karwosts">@karwosts</a>!</li>
<li>The <a href="http://www.home-assistant.io/integrations/reolink">Reolink</a> integration now supports FLV streams, cameras can be discovered
on the network, but more importantly: binary sensors! For things
like motion, person, vehicle detection, and… Doorbell presses!
Thanks, <a href="https://github.com/starkillerOG">@starkillerOG</a>!</li>
<li>There is now a <a href="http://www.home-assistant.io/integrations/calendar/#services">service</a> that allows for the creation of calendar events. So,
you can now automate events to be added to your calendars! Amazing, <a href="https://github.com/allenporter">@allenporter</a>!</li>
<li>When selecting multiple entities from a list in the UI, it will now exclude
already added entities. No more accidentally added duplicates! Thanks, <a href="https://github.com/piitaya">@piitaya</a>!</li>
<li><a href="https://github.com/Kane610">@Kane610</a> added PoE power sensors to the <a href="http://www.home-assistant.io/integrations/unifi">UniFi Network</a> integrations, nice!</li>
<li>The <a href="http://www.home-assistant.io/dashboards/tile/">Tile card</a> now has a vertical option! Great, <a href="https://github.com/TheZoker">@TheZoker</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/jellyfin">Jellyfin</a> now works with TV shows in the media browser. Thanks, <a href="https://github.com/j-stienstra">@j-stienstra</a>!</li>
<li>We have bumped the CHIP/Matter SDK version used by our <a href="http://www.home-assistant.io/integrations/matter">Matter</a> implementation
to 1.0.0.2, which <a href="https://github.com/project-chip/connectedhomeip/releases/tag/v1.0.0.2">contains many fixes</a>.</li>
<li>From the Month of “What the heck?”: Old-style <a href="http://www.home-assistant.io/integrations/group#old-style-groups">groups</a> can now remove entities
from the group using the <code>group.set</code> service. Thanks, <a href="https://github.com/gjohansson-ST">@gjohansson-ST</a>!</li>
<li>You might have noticed a <a href="http://www.home-assistant.io/integrations/thread">Thread</a> and an <a href="http://www.home-assistant.io/integrations/otbr">Open Thread Border Router</a> integration
being added to this release. These are currently not for active use but for
initial early development.</li>
<li>The experimental multi-pan feature has been enabled again. Allowing to run
both Zigbee and Thread using the single radio found in both Home Assistant
Yellow and Home Assistant SkyConnect.</li>
<li>The following integrations now reached a <a href="http://www.home-assistant.io/docs/quality_scale/#platinum-">Platinum</a> level on the
<a href="http://www.home-assistant.io/docs/quality_scale/">integration quality scale</a>:
<ul>
<li><a href="http://www.home-assistant.io/integrations/renault">Renault</a> excellent job <a href="https://github.com/epenet">@epenet</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/homewizard">HomeWizard Energy</a> awesome work <a href="https://github.com/DCSBL">@DCSBL</a>!</li>
</ul>
</li>
</ul>
<h2>New Integrations</h2>
<p>We welcome the following new integrations in this release:</p>
<ul>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/energyzero">EnergyZero</a></strong>, added by <a href="https://github.com/klaasnicolaas">@klaasnicolaas</a><br />
Retrieves dynamic (hourly) energy &amp; gas prices from the Dutch utility company
EnergyZero.</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/eufylife_ble">EufyLife</a></strong>, added by <a href="https://github.com/bdr99">@bdr99</a><br />
Integrate Eufy smart scales over Bluetooth.</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/kitchen_sink">Everything but the Kitchen Sink</a></strong>, added by <a href="https://github.com/emontnemery">@emontnemery</a><br />
This is a test integration, which provides various odd and obscure entities.
It can be helpful for development purposes, but generally no use otherwise.</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/google_mail">Google Mail</a></strong>, added by <a href="https://github.com/tkdrob">@tkdrob</a><br />
Provides services to manage your Google Mail auto-response and provides
a notification service to send (or draft) emails.</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/ld2410_ble">LD2410 BLE</a></strong>, added by <a href="https://github.com/930913">@930913</a><br />
Integrates a <a href="https://www.aliexpress.com/item/1005004351593073.html">$4 LD2410 Bluetooth mmWave sensor</a>, which works with our
Bluetooth proxies!</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/mopeka">Mopeka</a></strong>, added by <a href="https://github.com/bdraco">@bdraco</a><br />
Works with your Mopeka BLE propane tank monitors.</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/openai_conversation">OpenAI Conversation</a></strong>, added by <a href="https://github.com/balloob">@balloob</a><br />
OpenAI integration that uses GPT-3 to showcase replacing the Home Assistant
conversation agent. Note: It cannot control anything in your home.</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/rympro">Read Your Meter Pro</a></strong>, added by <a href="https://github.com/OnFreund">@OnFreund</a><br />
Pull in your water usage/meter readings from your Read Your Meter Pro account.</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/ruuvi_gateway">Ruuvi Gateway</a></strong>, added by <a href="https://github.com/akx">@akx</a><br />
Integrates the Ruuvi Gateway that reads your Ruuvi sensors.</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/sfr_box">SFR Box</a></strong>, added by <a href="https://github.com/epenet">@epenet</a><br />
Offers integration with the SFR broadband routers.</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/starlink">Starlink</a></strong>, added by <a href="https://github.com/boswelja">@boswelja</a><br />
Starlink is a satellite internet constellation operated by SpaceX.
Integrate your Starlink dish with Home Assistant.</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/stookwijzer">Stookwijzer</a></strong>, added by <a href="https://github.com/fwestenberg">@fwestenberg</a><br />
Stookwijzer advises wether to burn pallets or wood, or to
use the barbecue. This can prevent health problems for people in the area
(NL only).</p>
</li>
<li>
<p><strong><a href="http://www.home-assistant.io/integrations/zeversolar">Zeversolar</a></strong>, added by <a href="https://github.com/kvanzuijlen">@kvanzuijlen</a><br />
Get power and energy information from your Zeversolar solar inverter locally.</p>
</li>
</ul>
<p>This release also has some new virtual integrations. Virtual integrations
are stubs that are handled by other (existing) integrations to help with
findability. These are new:</p>
<ul>
<li><strong><a href="http://www.home-assistant.io/integrations/anwb_energie">ANWB Energie</a></strong> provided by <a href="http://www.home-assistant.io/integrations/energyzero">EnergyZero</a>, added by <a href="https://github.com/klaasnicolaas">@klaasnicolaas</a></li>
<li><strong><a href="http://www.home-assistant.io/integrations/energie_vanons">Energie VanOns</a></strong> provided by <a href="http://www.home-assistant.io/integrations/energyzero">EnergyZero</a>, added by <a href="https://github.com/klaasnicolaas">@klaasnicolaas</a></li>
<li><strong><a href="http://www.home-assistant.io/integrations/mijndomein_energie">Mijndomein Energie</a></strong> provided by <a href="http://www.home-assistant.io/integrations/energyzero">EnergyZero</a>, added by <a href="https://github.com/klaasnicolaas">@klaasnicolaas</a></li>
<li><strong><a href="http://www.home-assistant.io/integrations/fire_tv">Fire TV</a></strong> provided by <a href="http://www.home-assistant.io/integrations/androidtv">Android TV</a>, added by <a href="https://github.com/jrieger">@jrieger</a></li>
</ul>
<h2>Integrations now available to set up from the UI</h2>
<p>The following integrations are now available via the Home Assistant UI:</p>
<ul>
<li><strong><a href="http://www.home-assistant.io/integrations/rainbird">Rain Bird</a></strong>, done by <a href="https://github.com/allenporter">@allenporter</a></li>
<li><strong><a href="http://www.home-assistant.io/integrations/imap">IMAP</a></strong>, done by <a href="https://github.com/engrbm87">@engrbm87</a></li>
<li><strong><a href="http://www.home-assistant.io/integrations/dlink">D-Link</a></strong>, done by <a href="https://github.com/tkdrob">@tkdrob</a></li>
</ul>
<h2>Need help? Join the community!</h2>
<p>Home Assistant has a great community of users who are all more than willing
to help each other out. So, join us!</p>
<p>Our very active <a href="http://www.home-assistant.io/join-chat">Discord chat server</a> is an excellent place to be
at, and don’t forget to join our amazing <a href="https://community.home-assistant.io/">forums</a>.</p>
<p>Found a bug or issue? Please report it in our <a href="https://github.com/home-assistant/core/issues">issue tracker</a>,
to get it fixed! Or, check <a href="http://www.home-assistant.io/help">our help page</a> for guidance for more
places you can go.</p>
<p>Are you more into email? <a href="http://www.home-assistant.io/newsletter">Sign-up for our Building the Open Home Newsletter</a>
to get the latest news about features, things happening in our community and
other news about building an Open Home; straight into your inbox.</p>
<h2>Breaking Changes</h2>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_0" aria-expanded="false">
      Python 3.9 support has been removed 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_0" hidden>
<p>Python 3.9 support has previously been deprecated and has now been removed.
Home Assistant now requires Python 3.10 to run.</p>
<p>If you are using Home Assistant OS, Home Assistant Container, or Home Assistant
Supervised installation method, you don’t have to do anything. In those cases,
we handle this all for you.</p>
<p>Your system has been using Python 3.10 for quite some time already.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/85456">#85456</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_1" aria-expanded="false">
      MariaDB 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_1" hidden>
<p>If you are using MariaDB with Home Assistant recorder, please make sure
you run <code>10.5.17</code> , <code>10.6.9</code>, <code>10.7.5</code>, <code>10.8.4</code> (depending on which major
release you are using). If you are using the MariaDB core add-on,
make sure to update it to the latest version: <code>2.5.2</code>.</p>
<p>Older versions of MariaDB suffer from a significant performance regression
when retrieving history data or purging the database.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/87040">#87040</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_2" aria-expanded="false">
      Automations & Scripts 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_2" hidden>
<p>A disabled condition, for example, in an automation or script, will no longer
always be a pass/<code>True</code> within an <code>OR</code> condition. Instead, in those
cases, the condition will now have no effect when disabled.</p>
<p>(<a href="https://github.com/karliemeads">@karliemeads</a> - <a href="https://github.com/home-assistant/core/pull/79718">#79718</a>) (<a href="http://www.home-assistant.io/integrations/automations">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_3" aria-expanded="false">
      AccuWeather 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_3" hidden>
<p>For the precipitation entity, the unit was changed from <code>mm</code> to <code>mm/h</code>
(<code>in</code> to <code>in/h</code>), resulting in the need to fix the unit for long-term
statistics. You can do that in <code>Developer Tools</code> -&gt; <code>Stats</code>.</p>
<p>(<a href="https://github.com/bieniu">@bieniu</a> - <a href="https://github.com/home-assistant/core/pull/86088">#86088</a>) (<a href="http://www.home-assistant.io/integrations/accuweather">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_4" aria-expanded="false">
      Airly 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_4" hidden>
<p>If the language in the Home Assistant settings is set to Polish, the language
of the <code>advice</code> and <code>description</code> attributes of the CAQI entity will change
from English to Polish.</p>
<p>If you are using these in your automations or scripts, you might need to adjust
them to match this change.</p>
<p>(<a href="https://github.com/bieniu">@bieniu</a> - <a href="https://github.com/home-assistant/core/pull/85655">#85655</a>) (<a href="http://www.home-assistant.io/integrations/airly">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_5" aria-expanded="false">
      Fitbit 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_5" hidden>
<p>The state values of the Fitbit sensor entities will change to remove any
thousands delimiters. For example, <code>1,500</code> will become <code>1500</code>.</p>
<p>If you’re using the state of these entities in automations or scripts,
you need to update them to handle the new state format.</p>
<p>(<a href="https://github.com/sw-carlos-cristobal">@sw-carlos-cristobal</a> - <a href="https://github.com/home-assistant/core/pull/85251">#85251</a>) (<a href="http://www.home-assistant.io/integrations/fitbit">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_6" aria-expanded="false">
      Flume 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_6" hidden>
<p>The scan/update interval for water values has been restored to match the Flume
app.</p>
<p>To stay under Flume’s API limits, the device connection is now checked hourly,
and notifications are checked every 5 minutes.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/86354">#86354</a>) (<a href="http://www.home-assistant.io/integrations/flume">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_7" aria-expanded="false">
      History 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_7" hidden>
<p>The <code>use_include_order</code> YAML configuration option has been removed.</p>
<p>This option was used to sort the history on the original history panel which,
is no longer used. As it no longer has a function and only serves to
slow down the response, it has been removed.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/86365">#86365</a>) (<a href="http://www.home-assistant.io/integrations/history">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_8" aria-expanded="false">
      IoTaWatt 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_8" hidden>
<p>The IoTAWatt integration no longer provides sensors with the “Accumulated”
suffix. The accumulated sensors have been introduced to support net energy
export/import metering.</p>
<p>Newer versions of IoTaWatt provide “Integrators”, which allow achieving the
same more efficiently and with higher accuracy.</p>
<p>You should configure <a href="https://docs.iotawatt.com/en/master/integrators.html">Integrators</a>
to calculate the net energy export and import.</p>
<p>(<a href="https://github.com/agners">@agners</a> - <a href="https://github.com/home-assistant/core/pull/86611">#86611</a>) (<a href="http://www.home-assistant.io/integrations/iotawatt">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_9" aria-expanded="false">
      Matter 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_9" hidden>
<p>The Matter integration now requires running Matter Server version <code>2.0.0</code>.</p>
<p>If you’re using the Matter Server add-on to run the Matter Server,
you will need version <code>3.0.0</code> of the add-on.</p>
<p>We had to change our vendor ID in the add-on; as a result, all devices
need to be recommissioned.</p>
<p>(<a href="https://github.com/MartinHjelmare">@MartinHjelmare</a> - <a href="https://github.com/home-assistant/core/pull/86470">#86470</a>) (<a href="http://www.home-assistant.io/integrations/matter">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_10" aria-expanded="false">
      Nettigo Air Monitor 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_10" hidden>
<p>The states of air quality sensors have been standardized to match Home Assistant
core rules. This affects two states of the sensors that NAM can provide:</p>
<ul>
<li><code>very low</code>, which now became <code>very_low</code></li>
<li><code>very high</code>, which now became <code>very_high</code></li>
</ul>
<p>If you used those states directly in your automations, scripts, or templates;
you would need to adjust those to match these changes.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/85245">#85245</a>) (<a href="http://www.home-assistant.io/integrations/nam">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_11" aria-expanded="false">
      Pentair ScreenLogic 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_11" hidden>
<p>The Pentair ScreenLogic integration now correctly categorizes all known lights.
Removing any lights that were previously incorrectly created as switch entities
may be necessary.</p>
<p>(<a href="https://github.com/dieselrabbit">@dieselrabbit</a> - <a href="https://github.com/home-assistant/core/pull/86608">#86608</a>) (<a href="http://www.home-assistant.io/integrations/screenlogic">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_12" aria-expanded="false">
      Pi-hole 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_12" hidden>
<p>The previously deprecated YAML configuration of the Pi-hole
integration has been removed.</p>
<p>Pi-hole is now configured via the UI. Any existing YAML configuration
has been imported in previous releases and can now be safely removed from your
YAML configuration files.</p>
<p>(<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/84803">#84803</a>) (<a href="http://www.home-assistant.io/integrations/pi_hole">documentation</a>)</p>
<hr />
<p>The extra state attribute “Domains blocked” has been removed from all sensors.
It is already exposed as its own dedicated sensor.</p>
<p>If you used the state attribute in your automations or scripts, you would
need to adjust them to use the dedicated sensor instead.</p>
<p>(<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/85424">#85424</a>) (<a href="http://www.home-assistant.io/integrations/pi_hole">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_13" aria-expanded="false">
      Rain Bird 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_13" hidden>
<p>Rainbird is now configured via the UI, and configuration from YAML has been
imported automatically.</p>
<p>However, there are a few notable changes:</p>
<ul>
<li>Custom per zone overrides for irrigation time are no longer supported.</li>
<li>The Rain delay <code>binary_sensor</code> that duplicates the Rain delay time <code>sensor</code>
has been removed. You should move all uses to the <code>sensor</code> value and check
for a non-zero value to get equivalent behavior.</li>
<li>The Rain <code>sensor</code> that duplicates the Rain <code>binary_sensor</code> has been removed.
You may check the <code>binary_sensor</code> state to get equivalent behavior.</li>
</ul>
<p>Also, the way the “Rain Delay” is managed has changed. The Rain Delay, which
pauses irrigation for a specified number of days, is now managed with a <code>number</code>
entity which can be controlled directly from the UI.</p>
<p>The existing service call <code>rainbird.set_rain_delay</code> and the Raindelay sensor
have been deprecated. Any existing automations or scripts that make service
calls to <code>rainbird.set_rain_delay</code> will need to be replaced with a call
to <code>number.set_value</code>. Additionally, the existing service call was updated to
require an integration entry configuration since it previously had undefined
behavior, so it is recommended to move directly to the new number service call.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/85271">#85271</a> <a href="https://github.com/home-assistant/core/pull/86208">#86208</a>) (<a href="http://www.home-assistant.io/integrations/rainbird">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_14" aria-expanded="false">
      Recorder 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_14" hidden>
<p>The recorder’s default commit interval has been increased to 5 seconds to
reduce disk I/O and increase storage longevity.</p>
<p>As the history and logbook integrations both support live streaming, which
avoids the need to read the database after the initial sync, there is no
remaining core functionality that needs a lower commit interval.</p>
<p>The <a href="http://www.home-assistant.io/integrations/recorder/#commit_interval"><code>commit_interval</code></a> can be adjusted
to a lower value in the event an integration has not been updated to watch for
events instead of reading the database and needs to read the database sooner.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/86115">#86115</a>) (<a href="http://www.home-assistant.io/integrations/recorder">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_15" aria-expanded="false">
      Renault 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_15" hidden>
<p>The previously deprecated <code>renault.charge_start</code> service has been removed.
Please use the dedicated start charge button entity to start the charge instead.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/86070">#86070</a>) (<a href="http://www.home-assistant.io/integrations/renault">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_16" aria-expanded="false">
      Sony Bravia TV 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_16" hidden>
<p>Sony Bravia TV media players no longer have fake (assumed) <code>playing</code> or <code>paused</code>
states, and those are replaced with the <code>on</code> state.</p>
<p>If you have automations or scripts that use the <code>playing</code> or <code>paused</code> state,
please update them to be compatible with this change.</p>
<p>(<a href="https://github.com/Drafteed">@Drafteed</a> - <a href="https://github.com/home-assistant/core/pull/84885">#84885</a>) (<a href="http://www.home-assistant.io/integrations/braviatv">documentation</a>)</p>
<hr />
<p>The <code>source_list</code> no longer contains a list of applications and TV channels.
Apps and channels have been separated from the input list and moved
to the Media Browser.</p>
<p>If you have automations or scripts that use <code>media_player.select_source</code> to
switch apps or channels on the Bravia TV, the automations need to be
updated to use <code>media_player.play_media</code> service instead.</p>
<p>The options flow has been removed from the integration, as the only
configurable setting <code>ignored_sources</code> was no longer relevant
and incompatible with this change.</p>
<p>(<a href="https://github.com/Drafteed">@Drafteed</a> - <a href="https://github.com/home-assistant/core/pull/85288">#85288</a>) (<a href="http://www.home-assistant.io/integrations/braviatv">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_17" aria-expanded="false">
      Spain electricity hourly pricing (PVPC) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_17" hidden>
<p>The previously deprecated YAML configuration of the Spain electricity hourly
pricing (PVPC) integration has been removed.</p>
<p>Spain electricity hourly pricing (PVPC) is now configured via the UI. Any
existing YAML configuration has been imported in previous releases and can now
be safely removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/azogue">@azogue</a> - <a href="https://github.com/home-assistant/core/pull/85614">#85614</a>) (<a href="http://www.home-assistant.io/integrations/pvpc_hourly_pricing">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_18" aria-expanded="false">
      Tado 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_18" hidden>
<p>The swing modes of Tado have changed. This is to standardize with other
integrations, and so it can support translations.</p>
<ul>
<li><code>ON</code> became the lowercase <code>on</code></li>
<li><code>OFF</code> became the lowercase <code>off</code></li>
</ul>
<p>If you used these swing modes in your automations or scripts, you might
need to adjust those to this change.</p>
<p>(<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/84278">#84278</a>) (<a href="http://www.home-assistant.io/integrations/tado">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_19" aria-expanded="false">
      Twinkly 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_19" hidden>
<p>All extra state attributes from Twinkly light entities have been removed.</p>
<p>They mostly added information about the device,
not the actual light state itself.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/84986">#84986</a>) (<a href="http://www.home-assistant.io/integrations/twinkly">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_20" aria-expanded="false">
      Universal Devices ISY/IoX 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_20" hidden>
<p>ISY/IoX Variables have been moved from <code>sensor</code> entities to <code>number</code> entities;
the existing <code>sensor</code> entities are deprecated and will be removed in a future
release.</p>
<p>The <code>isy994.set_variable</code> service has been deprecated in favor of using
the <code>number</code> entities to directly set the variable values.</p>
<p>Please update any dashboards, scripts, and automations that may be using these
entities or service.</p>
<p>(<a href="https://github.com/frenshbatmck">@shbatm</a> - <a href="https://github.com/home-assistant/core/pull/85511">#85511</a>) (<a href="http://www.home-assistant.io/integrations/isy994">documentation</a>)</p>
<hr />
<p>Entities for INSTEON Aux Properties and Device Communication Errors have been
removed for nodes that are not the main (load) node.</p>
<p>On Level and Ramp Rate sensors have been removed for non-dimmable (non-<code>light.</code>)
devices. Only load devices receive communication error updates and only
dimmable devices support <code>OL</code> and <code>RR</code> commands.</p>
<p>The other entities were previously added but did not receive valid states from
the ISY or end-devices. These sensors were disabled by default.</p>
<p>(<a href="https://github.com/frenshbatmck">@shbatm</a> - <a href="https://github.com/home-assistant/core/pull/85744">#85744</a>) (<a href="http://www.home-assistant.io/integrations/isy994">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_21" aria-expanded="false">
      Uptime 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_21" hidden>
<p>The previously deprecated YAML configuration of the Uptime
integration has been removed.</p>
<p>Uptime is now configured via the UI. Any existing YAML configuration has been
imported in previous releases and can now be safely removed from your YAML
configuration files.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/86292">#86292</a>) (<a href="http://www.home-assistant.io/integrations/uptime">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_22" aria-expanded="false">
      Yamaha Network Receivers 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_22" hidden>
<p>When there is a connection error with the receiver, the device will now
go into an unavailable state until the connection has been restored.</p>
<p>(<a href="https://github.com/sredna">@sredna</a> - <a href="https://github.com/home-assistant/core/pull/85018">#85018</a>) (<a href="http://www.home-assistant.io/integrations/yamaha">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_23" aria-expanded="false">
      Yamaha MusicCast 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_23" hidden>
<p>The raw state/option values of the Yamaha MusicCast zone sleep <code>select</code> entities
have been standardized to match Home Assistant core rules.</p>
<p>The following states/options have been changed</p>
<ul>
<li><code>120 min</code>, which now became <code>120_min</code></li>
<li><code>90 min</code>, which now became <code>90_min</code></li>
<li><code>60 min</code>, which now became <code>60_min</code></li>
<li><code>30 min</code>, which now became <code>30_min</code></li>
</ul>
<p>If you used those states/options directly in your automations, scripts,
or templates; you will need to adjust those to match these changes.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/85292">#85292</a>) (<a href="http://www.home-assistant.io/integrations/yamaha_musiccast">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_24" aria-expanded="false">
      Zentralanstalt für Meteorologie und Geodynamik (ZAMG) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_24" hidden>
<p>The previously deprecated YAML configuration of the Zentralanstalt für
Meteorologie und Geodynamik (ZAMG) integration has been removed.</p>
<p>Zentralanstalt für Meteorologie und Geodynamik (ZAMG) is now configured via the
UI. Any existing YAML configuration has been imported in previous releases and
can now be safely removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/killer0071234">@killer0071234</a> - <a href="https://github.com/home-assistant/core/pull/86113">#86113</a>) (<a href="http://www.home-assistant.io/integrations/zamg">documentation</a>)</p>
</div>
  </div>
</div>
<script>
function showDetails(el) {
  const content = el.parentElement.querySelector(".details-block-content");
  const up = el.querySelector("svg#up");
  const down = el.querySelector("svg#down");
  const shouldExpand = down.style.display === "block";
  up.style.display = shouldExpand ? "block" : "none";
  down.style.display = !shouldExpand ? "block" : "none";
  content.hidden = !shouldExpand;
  el.ariaExpanded = shouldExpand;
}
</script>
<div class="details-block">
  <div class='details-block-item'>
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_25" aria-expanded="false">
      Zigbee Home Automation 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_25" hidden>
<p>The <code>AnalogInput</code> sensor entities for certain Xiaomi plugs have been removed
from ZHA.</p>
<p>Properly working “Active power” and “Summation delivered” sensors are available
to replace the older entities. These newer sensor entities can also be used in
Home Assistant Energy dashboard.</p>
<p>(<a href="https://github.com/TheJulianJES">@TheJulianJES</a> - <a href="https://github.com/home-assistant/core/pull/86261">#86261</a>) (<a href="http://www.home-assistant.io/integrations/zha">documentation</a>)</p>
</div>
  </div>
</div>
<p>If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
<a href="https://developers.home-assistant.io/blog/">developer blog</a>. The following are the most notable for this release:</p>
<ul>
<li><a href="https://developers.home-assistant.io/blog/2023/01/12/bluetooth-adapters">Bluetooth updates for 2023.2 and later</a></li>
<li><a href="https://developers.home-assistant.io/blog/2023/01/20/cover-intent-deprecated">Cover intents deprecated</a></li>
<li><a href="https://developers.home-assistant.io/blog/2023/01/02/db-schema-v32">Database schema v32 updates</a></li>
<li><a href="https://developers.home-assistant.io/blog/2023/01/24/conversation-updates">Future proofing the Conversation integration</a></li>
<li><a href="https://developers.home-assistant.io/blog/2023/01/25/sensor_rounding">Sensor entity can now do rounding of numerical values</a></li>
</ul>
<h2>Farewell to the following</h2>
<p>The following integrations are also no longer available as of this release:</p>
<ul>
<li><strong>Almond</strong> has been removed. It is in a non-working state, and the services
have been shut down.</li>
<li><strong>OpenALPR Local</strong> was previously deprecated and has now been removed. It
doesn’t work correctly and has no usage, according to our public analytics.</li>
</ul>
<h2>All changes</h2>
<p>Of course, there is a lot more in this release. You can find a list of
all changes made here: <a href="http://www.home-assistant.io/changelogs/core-2023.2">Full changelog for Home Assistant Core 2023.2</a></p>
"
link: "https://www.home-assistant.io/blog/2023/02/01/release-20232/"
category:
---
