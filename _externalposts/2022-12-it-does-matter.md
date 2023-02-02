---
title: "2022.12 - It does matter!"
date: 2022-12-07 00:00:00 +0000
dateadded: 2023-02-02 08:54:04 +0100
description: "<p><a href='http://www.home-assistant.io/integrations/#version/2022.12'><img src='http://www.home-assistant.io/images/blog/2022-12/social.png' style='border: 0;box-shadow: none;'></a></p>
<p>Home Assistant Core 2022.12! 🎄</p>
<p>Already the last release of the year, right on time to bring you some cool
new features to work with during the upcoming Holidays!</p>
<p>2022 has been a fantastic year for the Home Assistant project. We became
one of the world’s largest and <a href="https://octoverse.github.com/2022/state-of-open-source">fastest-growing GitHub open source projects</a>! ❤️ Tons of new features <a href="http://www.home-assistant.io/blog/categories/core/">each month</a>, and not just that,
we matured a lot! Everything became more stable and faster, and
the UX made leaps forwards as well!</p>
<p>We looked back at 2022 during the <a href="https://www.youtube.com/watch?v=D936T1Ze8-4">State of the Open Home</a>,
and sneak peaked at 2023, with some great new UI concepts
and: <em>The year of the voice!</em> 🗣️ Missed it?
<a href="https://www.youtube.com/watch?v=D936T1Ze8-4">The full video is available on YouTube</a>.</p>
<p>But! The year isn’t over yet! This release really Matters! We are thrilled to
be one of the first in the world to roll out Matter support to the public! 🎉</p>
<p>No Matter devices yet? Don’t worry! There are tons of things in this release
that will keep you busy. The Tile card got “features”! You can now extend
your Bluetooth range using Shelly devices, and a long-requested feature lands:
Local Calendar. 🤩</p>
<p>For 2022, this is it! Thank you for joining our community. Thank you for
sharing, helping out, contributing, creating YouTube videos, blog articles,
and podcasts.</p>
<p><strong>Thank you for using Home Assistant!</strong> ❤️</p>
<p>Happy holidays and for the last time in 2022: Enjoy the release!</p>
<p>../Frenck</p>
<!--more-->
<ul>
<li><a href="#it-does-matter">It does Matter!</a></li>
<li><a href="#tile-card-gets-features">Tile card gets features</a></li>
<li><a href="#shiny-new-state-colors">Shiny new state colors!</a></li>
<li><a href="#local-calendar">Local calendar</a></li>
<li><a href="#bluetooth-proxy-using-shelly-devices">Bluetooth proxy using Shelly devices</a></li>
<li><a href="#new-entity-text">New entity: <code>text</code></a></li>
<li><a href="#summing-entities-without-templates">Summing entities without templates</a></li>
<li><a href="#other-noteworthy-changes">Other noteworthy changes</a></li>
<li><a href="#new-integrations">New Integrations</a></li>
<li><a href="#integrations-now-available-to-set-up-from-the-ui">Integrations now available to set up from the UI</a></li>
<li><a href="#release-2022121---december-8">Release 2022.12.1 - December 8</a></li>
<li><a href="#release-2022122---december-11">Release 2022.12.2 - December 11</a></li>
<li><a href="#release-2022123---december-11">Release 2022.12.3 - December 11</a></li>
<li><a href="#release-2022124---december-12">Release 2022.12.4 - December 12</a></li>
<li><a href="#release-2022125---december-13">Release 2022.12.5 - December 13</a></li>
<li><a href="#release-2022126---december-14">Release 2022.12.6 - December 14</a></li>
<li><a href="#release-2022127---december-17">Release 2022.12.7 - December 17</a></li>
<li><a href="#release-2022128---december-21">Release 2022.12.8 - December 21</a></li>
<li><a href="#release-2022129---january-2">Release 2022.12.9 - January, 2</a></li>
<li><a href="#need-help-join-the-community">Need help? Join the community!</a></li>
<li><a href="#breaking-changes">Breaking Changes</a></li>
<li><a href="#farewell-to-the-following">Farewell to the following</a></li>
<li><a href="#all-changes">All changes</a></li>
</ul>
<p>Don’t forget to <a href="https://www.youtube.com/watch?v=Ts-_BdFsvxI">join our release party live stream on YouTube</a> today at 12:00 PDT / 21:00 CET!</p>
<p><lite-youtube videoid="Ts-_BdFsvxI" videotitle="Home Assistant 2022.12 Release Party"></lite-youtube></p>
<h2>It does Matter!</h2>
<p>Does it Matter? Yes, Home Assistant does Matter!</p>
<p>Matter is a new smart home interoperability standard, an open-source protocol,
that defines how devices can communicate and work together. Read more about
Matter in this <a href="https://www.theverge.com/22832127/matter-smart-home-products-thread-wifi-explainer">comprehensive write-up from The Verge</a>.</p>
<p>Today we release the first iteration of the Matter integration for Home
Assistant. It is a big and important foundation that is probably best described
as “alpha” or maybe even a “developer preview” — allowing anyone to help
and jump in on the Matter development. For the first release,
we think that is a great start!</p>
<p>At this point, Matter-enabled products are not (yet) generally available.
However, if you can get a Matter-certified product, it can be commissioned!</p>
<p class='img'>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-12/matter.png' alt='A screenshot of a Matter device showing up in Home Assistant'>
A Matter device integrated with Home Assistant.
</p>
<p>Adding Matter devices (commissioning) can be done using our iOS and Android
Home Assistant Companion apps. Adding support for this to our apps is being
worked on and will become available in the upcoming weeks. The Android Companion
app supporting Matter, is currently available for <a href="https://play.google.com/apps/testing/io.homeassistant.companion.android">beta testing</a>.</p>
<p>Interested? We have made more details available <a href="http://www.home-assistant.io/integrations/matter">in our documentation</a>.</p>
<h2>Tile card gets features</h2>
<p>In the last release, we <a href="http://www.home-assistant.io/blog/2022/11/02/release-202211/#tile-card">introduced the Tile card</a>.
Today we extend the Tile card by adding support for “features”.</p>
<p>For the Tile card, “features” are additional extras that can be added to a Tile
card. For example, they can provide additional controls or information for
the entity the Tile card displays.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-12/tile-features.png' alt='Screenshot showing the new features that can be added to tile cards'>
<p>Multiple usable Tile features have been added:</p>
<ul>
<li>Command buttons for vacuum cleaners</li>
<li>Brightness slider for lights</li>
<li>Controls for opening/closing and tilting covers</li>
</ul>
<p><a href="http://www.home-assistant.io/dashboards/tile/#tile-features">Checkout the documentation for more information about Tile features</a></p>
<p>But that is not all! The Tile card also got colors! 🎨</p>
<p>Based on the entity’s state, the card will get different colors. This color
provides an additional visual indication of the entity’s state.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-12/tile-colors.png' alt='Screenshot showing the new state colors provided by the Tile card'>
<h2>Shiny new state colors!</h2>
<p>Those lovely new state colors added to the Tile card, as shown above, are not
just added to the tile card. This same color logic has now also been applied to
the state history and the logbook!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-12/state-colors.png' alt='Screenshot showing the new state colors in history and logbooks'>
<p>Previously, these colors would be random. Now they are predictable, recognizable
and, above all: just look a lot better 🤩</p>
<p>This same experience will also be visible on the dedicated Logbook and History
pages of course.</p>
<h2>Local calendar</h2>
<p>This is one of the longer outstanding and bigger requested features
of Home Assistant: A local calendar!</p>
<p>Building a calendar isn’t easy, but <a href="https://github.com/allenporter">Allen Porter</a> did it! And it is not
just a calendar with dates and descriptions… oh no! Allen went all in!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-12/local-calendar.png' alt='Screenshot adding an event to the local calendar'>
<p>We now have a full blown, local, built-in calendar, which can do all-day event
or recurring ones tuned to your liking. Even multiple different local calendars
are supported!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-12/local-calendar-repeating.png' alt='Screenshot adding recurring events to the local calendar'>
<p><a href='https://my.home-assistant.io/redirect/config_flow_start?domain=local_calendar' class='my badge' target='_blank'><img src='https://my.home-assistant.io/badges/config_flow_start.svg' /></a></p>
<h2>Bluetooth proxy using Shelly devices</h2>
<p>In the September release, we brought <a href="http://www.home-assistant.io/blog/2022/09/07/release-20229/#bluetooth-everywhere">Bluetooth everywhere</a>,
by adding Bluetooth proxy support, allowing any ESPHome device in your home
to relay Bluetooth traffic across your home.</p>
<p>This release adds support for using Shelly devices as a remote Bluetooth
adapter as well!</p>
<p>It works with all second-generation Shelly devices that use firmware 12.0 or
later. Those are able to forward Bluetooth advertisements to Home Assistant’s
<a href="http://www.home-assistant.io/integrations/bluetooth">Bluetooth integration</a>. Home Assistant is not able
to use Shelly devices to connect to devices, something that is necessry to
control devices via Bluetooth. For that, use our <a href="https://esphome.github.io/bluetooth-proxies/">Bluetooth Proxies</a>.</p>
<p>This can greatly help with extending the range of your Bluetooth network to
help with things like Bluetooth temperature or plant sensors in your home.</p>
<p>In other Bluetooth news: The performance of Bluetooth has, again, been improved
this release, and the memory usage should be lower. Always good!</p>
<h2>New entity: <code>text</code></h2>
<p>Say hello to a new entity: <code>text</code>! The text entity is very similar to the
<a href="http://www.home-assistant.io/integrations/input_text">Text helper</a> (also known as <code>input_text</code>).</p>
<p>The difference is that the helper is configured and managed by you, while the
new text entities are provided by integrations. This means integration can now
provide entities that ask for a textual input in the UI.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-12/text-entity.png' alt='Screenshot a text entity'>
<p>The first integrations that can now provide text entities as of this release are
<a href="http://www.home-assistant.io/integrations/knx#text">KNX</a> and <a href="http://www.home-assistant.io/integrations/text.mqtt">MQTT</a>.</p>
<h2>Summing entities without templates</h2>
<p>Let’s say you have two numeric sensor entities, and you like to have an
entity that shows the sum of those two; how would you do that? Creating a
template entity, right? Nope! 😁</p>
<p>You can now create a new helper entity that sums the values of two (or more)
sensor entities into a brand-new entity.</p>
<p>When creating a new helper, select “Combine the state of several sensors”,
pick the sensor you’d like to sum, and select “Sum” for the statistic
characteristic. Voila!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-12/sum.png' alt='Screenshot showing you can now combine and sum up multiple sensor entities'>
<p><a href='https://my.home-assistant.io/redirect/config_flow_start?domain=min_max' class='my badge' target='_blank'><img src='https://my.home-assistant.io/badges/config_flow_start.svg' /></a></p>
<p>You might have noticed that this looks like the “Min/Max” helper. True!
We have renamed “Min/Max” to “Combine the state of several sensors”,
to make it more descriptive as it gets more features.</p>
<h2>Other noteworthy changes</h2>
<p>There is much more juice in this release; here are some of the other
noteworthy changes this release:</p>
<ul>
<li>You can now set your country and default language Home Assistant should use
in the <a href='https://my.home-assistant.io/redirect/general' class='my' target='_blank'>general settings</a>. These new options allow
Home Assistant to consider those in future features.</li>
<li>Using <a href="http://www.home-assistant.io/integrations/twinkly">Twinkly</a> in your Christmas tree? 🎄 You can now control the effects!
Right on time! Thanks, <a href="https://github.com/Olen">@Olen</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/mqtt">MQTT</a> reached the gold level on the <a href="http://www.home-assistant.io/docs/quality_scale/">integration quality scale</a>! Nice work <a href="https://github.com/jbouwh">@jbouwh</a>!
But that is not all; it now supports MQTT v5 and WebSocket connections too!</li>
<li>NO2 and VOC sensor entities are now working with <a href="http://www.home-assistant.io/integrations/homekit">HomeKit</a>. Thanks, <a href="https://github.com/stackia">@stackia</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/shelly">Shelly</a> is now a <a href="http://www.home-assistant.io/docs/quality_scale/">platinum integration</a>! Thanks, <a href="https://github.com/thecode">@thecode</a>, <a href="https://github.com/bieniu">@bieniu</a>,
and <a href="https://github.com/chemelli74">@chemelli74</a> for your hard work on this integration 🥇</li>
<li><a href="http://www.home-assistant.io/integrations/zha">ZHA</a> now supports the new <a href="https://www.aqara.com/en/product/smart-pet-feeder-c1">Aqara c1 pet feeder</a>. Thanks <a href="https://github.com/dmulcahey">@dmulcahey</a> for
adding it, and thanks <a href="https://github.com/kirovilya">@kirovilya</a> figuring out the communication!</li>
<li>The <a href="http://www.home-assistant.io/dashboards/humidifier/">humidifier card</a>, now has on/off controls. Thanks, <a href="https://github.com/Shulyaka">@Shulyaka</a></li>
<li><a href="http://www.home-assistant.io/integrations/alexa">Amazon Alexa</a> now supports humidifiers. Thanks, <a href="https://github.com/jbouwh">@jbouwh</a>!</li>
<li><a href="https://bthome.io">BTHome</a> version 2 has been released and Home Assistant now supports it!
Thanks, <a href="https://github.com/Ernst79">@Ernst79</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/slack">Slack</a> now has a Do Not Disturb sensor you could automate on. Thanks, <a href="https://github.com/tkdrob">@tkdrob</a>!</li>
<li>Support for IP-Secure routing has been added to <a href="http://www.home-assistant.io/integrations/knx">KNX</a>. Thanks, <a href="https://github.com/farmio">@farmio</a>!</li>
<li>Are you using <a href="http://www.home-assistant.io/integrations/picnic">Picnic</a> for your groceries? You can now add products to your
order straight from Home Assistant. Thanks, <a href="https://github.com/corneyl">@corneyl</a>!</li>
</ul>
<h2>New Integrations</h2>
<p>We welcome the following new integrations in this release:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/airq">air-Q</a>, added by <a href="https://github.com/Sibgatulin">@Sibgatulin</a></li>
<li><a href="http://www.home-assistant.io/integrations/aranet">Aranet</a>, added by <a href="https://github.com/aschmitz">@aschmitz</a></li>
<li><a href="http://www.home-assistant.io/integrations/livisi">LIVISI SmartHome</a>, added by <a href="https://github.com/StefanIacobLivisi">@StefanIacobLivisi</a></li>
<li><a href="http://www.home-assistant.io/integrations/local_calendar">Local Calendar</a>, added by <a href="https://github.com/allenporter">@allenporter</a></li>
<li><a href="http://www.home-assistant.io/integrations/matter">Matter</a>, added by <a href="https://github.com/marcelveldt">@marcelveldt</a>, <a href="https://github.com/MartinHjelmare">@MartinHjelmare</a> and <a href="https://github.com/agners">@agners</a></li>
<li><a href="http://www.home-assistant.io/integrations/ruuvitag_ble">RuuviTag BLE</a>, added by <a href="https://github.com/akx">@akx</a></li>
<li><a href="http://www.home-assistant.io/integrations/sensirion_ble">Sensirion BLE</a>, added by <a href="https://github.com/akx">@akx</a></li>
<li><a href="http://www.home-assistant.io/integrations/text">Text</a>, added by <a href="https://github.com/raman325">@raman325</a></li>
</ul>
<h2>Integrations now available to set up from the UI</h2>
<p>The following integrations are now available via the Home Assistant UI:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/pushbullet">Pushbullet</a>, done by <a href="https://github.com/engrbm87">@engrbm87</a></li>
<li><a href="http://www.home-assistant.io/integrations/scrape">Scrape</a>, done by <a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> &amp; <a href="https://github.com/epenet">@epenet</a></li>
</ul>
<h2>Release 2022.12.1 - December 8</h2>
<ul>
<li>Set connectable as false for sensirion_ble (<a href="https://github.com/chkuendig">@chkuendig</a> - <a href="https://github.com/home-assistant/core/pull/83481">#83481</a>) (<a href="http://www.home-assistant.io/integrations/sensirion_ble/">sensirion_ble docs</a>)</li>
<li>Make sure super async_added_to_hass is called (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/83493">#83493</a>) (<a href="http://www.home-assistant.io/integrations/philips_js/">philips_js docs</a>)</li>
<li>Bump <code>simplisafe-python</code> to 2022.12.0 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/83497">#83497</a>) (<a href="http://www.home-assistant.io/integrations/simplisafe/">simplisafe docs</a>)</li>
<li>Bump python-matter-server to 1.0.7 (<a href="https://github.com/marcelveldt">@marcelveldt</a> - <a href="https://github.com/home-assistant/core/pull/83507">#83507</a>) (<a href="http://www.home-assistant.io/integrations/matter/">matter docs</a>)</li>
<li>Bump pyhik to 0.3.2 (<a href="https://github.com/mezz64">@mezz64</a> - <a href="https://github.com/home-assistant/core/pull/83517">#83517</a>) (<a href="http://www.home-assistant.io/integrations/hikvision/">hikvision docs</a>)</li>
<li>Bump ical to 4.2.2 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/83520">#83520</a>) (<a href="http://www.home-assistant.io/integrations/local_calendar/">local_calendar docs</a>)</li>
<li>Fix issue with Callable, Union, and Python 3.9 <a href="http://www.home-assistant.io/integrations/mqtt">mqtt</a> (<a href="https://github.com/cdce8p">@cdce8p</a> - <a href="https://github.com/home-assistant/core/pull/83547">#83547</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Update frontend to 20221208.0 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/83551">#83551</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
<li>Improve local calendar input validation error handling (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/83563">#83563</a>) (<a href="http://www.home-assistant.io/integrations/local_calendar/">local_calendar docs</a>)</li>
<li>Bump pip_check conflicts +1 (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/83536">#83536</a>)</li>
<li>Bump intellifire4py to 2.2.2 (<a href="https://github.com/jeeftor">@jeeftor</a> - <a href="https://github.com/home-assistant/core/pull/83589">#83589</a>) (<a href="http://www.home-assistant.io/integrations/intellifire/">intellifire docs</a>)</li>
<li>Bump bluetooth-auto-recovery to 0.5.5 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/83597">#83597</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Disable multi-pan (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/83603">#83603</a>) (<a href="http://www.home-assistant.io/integrations/homeassistant_yellow/">homeassistant_yellow docs</a>) (<a href="http://www.home-assistant.io/integrations/homeassistant_sky_connect/">homeassistant_sky_connect docs</a>) (<a href="http://www.home-assistant.io/integrations/homeassistant_hardware/">homeassistant_hardware docs</a>)</li>
</ul>
<h2>Release 2022.12.2 - December 11</h2>
<ul>
<li>Bump pyrisco to 0.5.7 (<a href="https://github.com/maartenweyns">@maartenweyns</a> - <a href="https://github.com/home-assistant/core/pull/83548">#83548</a>) (<a href="http://www.home-assistant.io/integrations/risco/">risco docs</a>)</li>
<li>Bump pychromecast to 13.0.2 (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/83625">#83625</a>) (<a href="http://www.home-assistant.io/integrations/cast/">cast docs</a>)</li>
<li>Fix fibaro climate unit (<a href="https://github.com/rappenze">@rappenze</a> - <a href="https://github.com/home-assistant/core/pull/83659">#83659</a>) (<a href="http://www.home-assistant.io/integrations/fibaro/">fibaro docs</a>)</li>
<li>Fix event sensor for UniFi Protect (<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/83663">#83663</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect/">unifiprotect docs</a>)</li>
<li>Add missing CONF_SPEED to sensor device_trigger SCHEMA (<a href="https://github.com/SukramJ">@SukramJ</a> - <a href="https://github.com/home-assistant/core/pull/83679">#83679</a>) (<a href="http://www.home-assistant.io/integrations/sensor/">sensor docs</a>)</li>
<li>Bump aioshelly to 5.1.1 (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/83680">#83680</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Fix delay setting up new Yale Access Bluetooth entries (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/83683">#83683</a>) (<a href="http://www.home-assistant.io/integrations/yalexs_ble/">yalexs_ble docs</a>)</li>
<li>Fix loading of Fritz!Smarthome issues on older Fritz!Box (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/83688">#83688</a>) (<a href="http://www.home-assistant.io/integrations/fritzbox/">fritzbox docs</a>)</li>
<li>Bump androidtv dependency of androitv component (<a href="https://github.com/chatziko">@chatziko</a> - <a href="https://github.com/home-assistant/core/pull/83707">#83707</a>) (<a href="http://www.home-assistant.io/integrations/androidtv/">androidtv docs</a>)</li>
<li>lifx: bump aiolifx_effects dependency to v0.3.1 (<a href="https://github.com/Djelibeybi">@Djelibeybi</a> - <a href="https://github.com/home-assistant/core/pull/83730">#83730</a>) (<a href="http://www.home-assistant.io/integrations/lifx/">lifx docs</a>)</li>
<li>Fix IPv6 sensor is only loaded when Fritz!Box is in router mode (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/83757">#83757</a>) (<a href="http://www.home-assistant.io/integrations/fritz/">fritz docs</a>)</li>
<li>Fix scan_interval in Scrape (<a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> - <a href="https://github.com/home-assistant/core/pull/83758">#83758</a>) (<a href="http://www.home-assistant.io/integrations/scrape/">scrape docs</a>)</li>
</ul>
<h2>Release 2022.12.3 - December 11</h2>
<ul>
<li>Drop aiohttp to 3.8.1 (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/83795">#83795</a>)</li>
</ul>
<h2>Release 2022.12.4 - December 12</h2>
<ul>
<li>Bump bluetooth-auto-recovery to 1.0.0 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/83800">#83800</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Update frontend to 20221212.0 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/83842">#83842</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
<li>Bump version of ZHA quirks to 0.0.89 (<a href="https://github.com/dmulcahey">@dmulcahey</a> - <a href="https://github.com/home-assistant/core/pull/83848">#83848</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Bump pychromecast to 13.0.3 (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/83861">#83861</a>) (<a href="http://www.home-assistant.io/integrations/cast/">cast docs</a>)</li>
<li>Move template check into fritzbox entry setup (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/83863">#83863</a>) (<a href="http://www.home-assistant.io/integrations/fritzbox/">fritzbox docs</a>)</li>
<li>Use the async_migrate_paypal_agreement function to get the migration URL (<a href="https://github.com/ludeeus">@ludeeus</a> - <a href="https://github.com/home-assistant/core/pull/83469">#83469</a>) (<a href="http://www.home-assistant.io/integrations/cloud/">cloud docs</a>)</li>
<li>Fix issue on Overkiz Domestic Hot water heater entities with away mode (<a href="https://github.com/nyroDev">@nyroDev</a> - <a href="https://github.com/home-assistant/core/pull/83684">#83684</a>) (<a href="http://www.home-assistant.io/integrations/overkiz/">overkiz docs</a>)</li>
<li>Bump pyoverkiz to 1.7.2 (<a href="https://github.com/nyroDev">@nyroDev</a> - <a href="https://github.com/home-assistant/core/pull/83866">#83866</a>) (<a href="http://www.home-assistant.io/integrations/overkiz/">overkiz docs</a>)</li>
<li>Fix bleak-retry-connector get_device hang with HAOS 9.4 and only proxies (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/83879">#83879</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Fix HomeKit media players when entity has duplicate sources (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/83890">#83890</a>) (<a href="http://www.home-assistant.io/integrations/homekit/">homekit docs</a>)</li>
</ul>
<h2>Release 2022.12.5 - December 13</h2>
<ul>
<li>Fix Just Nimbus error codes (<a href="https://github.com/kvanzuijlen">@kvanzuijlen</a> - <a href="https://github.com/home-assistant/core/pull/83856">#83856</a>) (<a href="http://www.home-assistant.io/integrations/justnimbus/">justnimbus docs</a>)</li>
<li>Fix saving options with missing ignored sources in BraviaTV (<a href="https://github.com/Drafteed">@Drafteed</a> - <a href="https://github.com/home-assistant/core/pull/83891">#83891</a>) (<a href="http://www.home-assistant.io/integrations/braviatv/">braviatv docs</a>)</li>
<li>Bump pychromecast to 13.0.4 (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/83896">#83896</a>) (<a href="http://www.home-assistant.io/integrations/cast/">cast docs</a>)</li>
<li>Update frontend to 20221213.0 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/83940">#83940</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
</ul>
<h2>Release 2022.12.6 - December 14</h2>
<ul>
<li>Do not add a Content-Type header to ingress (<a href="https://github.com/zeehio">@zeehio</a> - <a href="https://github.com/home-assistant/core/pull/83425">#83425</a>) (<a href="http://www.home-assistant.io/integrations/hassio/">hassio docs</a>)</li>
<li>Bump lupupy dependency to v0.2.3 (<a href="https://github.com/majuss">@majuss</a> - <a href="https://github.com/home-assistant/core/pull/83765">#83765</a>) (<a href="http://www.home-assistant.io/integrations/lupusec/">lupusec docs</a>)</li>
<li>Bump aioshelly to 5.1.2 to fix state updates not firing after reconnect (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/83950">#83950</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Bump aioesphomeapi to 13.0.2 to fix reconnects after bad protobuf message (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/83951">#83951</a>) (<a href="http://www.home-assistant.io/integrations/esphome/">esphome docs</a>)</li>
<li>Ignore certain device trigger validation errors (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/83972">#83972</a>) (<a href="http://www.home-assistant.io/integrations/device_automation/">device_automation docs</a>)</li>
</ul>
<h2>Release 2022.12.7 - December 17</h2>
<ul>
<li>Bump pySwitchbot to 0.23.2 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/84002">#84002</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Re-add missing Growatt TLX values (<a href="https://github.com/muppet3000">@muppet3000</a> - <a href="https://github.com/home-assistant/core/pull/84040">#84040</a>) (<a href="http://www.home-assistant.io/integrations/growatt_server/">growatt_server docs</a>)</li>
<li>Update frontend to 20221213.1 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/84058">#84058</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
<li>Bump govee-ble to 0.19.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/84062">#84062</a>) (<a href="http://www.home-assistant.io/integrations/govee_ble/">govee_ble docs</a>)</li>
<li>Update Tibber lib, improve realtime streaming (<a href="https://github.com/Danielhiversen">@Danielhiversen</a> - <a href="https://github.com/home-assistant/core/pull/84065">#84065</a>) (<a href="http://www.home-assistant.io/integrations/tibber/">tibber docs</a>)</li>
<li>Bump bluetooth-auto-recovery to 1.0.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/84075">#84075</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Make sure philips_hs remote entity calls parent added (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/84082">#84082</a>) (<a href="http://www.home-assistant.io/integrations/philips_js/">philips_js docs</a>)</li>
<li>Bump ical to 4.2.3 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/84104">#84104</a>) (<a href="http://www.home-assistant.io/integrations/local_calendar/">local_calendar docs</a>)</li>
<li>Fix check if Surveillance Station is available in Synology DSM (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/84140">#84140</a>) (<a href="http://www.home-assistant.io/integrations/synology_dsm/">synology_dsm docs</a>)</li>
<li>Fix KNX ConfigFlow for manual secure tunnel keys (<a href="https://github.com/farmio">@farmio</a> - <a href="https://github.com/home-assistant/core/pull/84155">#84155</a>) (<a href="http://www.home-assistant.io/integrations/knx/">knx docs</a>)</li>
</ul>
<h2>Release 2022.12.8 - December 21</h2>
<ul>
<li>Add missing preset for Overkiz atlantic electrical heater (<a href="https://github.com/nyroDev">@nyroDev</a> - <a href="https://github.com/home-assistant/core/pull/84080">#84080</a>) (<a href="http://www.home-assistant.io/integrations/overkiz/">overkiz docs</a>)</li>
<li>Fix connectable Bluetooth devices not going available after scanner recovers (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/84172">#84172</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Bump ical to 4.2.4 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/84248">#84248</a>) (<a href="http://www.home-assistant.io/integrations/local_calendar/">local_calendar docs</a>)</li>
<li>Bump bluetooth-data-tools to 0.3.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/84258">#84258</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>) (<a href="http://www.home-assistant.io/integrations/led_ble/">led_ble docs</a>)</li>
<li>Skip client metadata values that are None (<a href="https://github.com/ludeeus">@ludeeus</a> - <a href="https://github.com/home-assistant/core/pull/84293">#84293</a>) (<a href="http://www.home-assistant.io/integrations/cloud/">cloud docs</a>)</li>
<li>Improve Tibber rt Pulse streaming (<a href="https://github.com/Danielhiversen">@Danielhiversen</a> - <a href="https://github.com/home-assistant/core/pull/84313">#84313</a>) (<a href="http://www.home-assistant.io/integrations/tibber/">tibber docs</a>)</li>
<li>Fix attribute check in prometheus exporter (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/84321">#84321</a>) (<a href="http://www.home-assistant.io/integrations/prometheus/">prometheus docs</a>)</li>
</ul>
<h2>Release 2022.12.9 - January, 2</h2>
<ul>
<li>Handle not available add-on in hassio add-on manager (<a href="https://github.com/home-assistant/core/pull/84943">#84943</a> - <a href="https://github.com/MartinHjelmare">@MartinHjelmare</a>)</li>
<li>Fix failing HomeKit Controller diagnostics tests (<a href="https://github.com/home-assistant/core/pull/84936">#84936</a> - <a href="https://github.com/bdraco">@bdraco</a>)</li>
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
      Cloudflare 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_0" hidden>
<p>The Cloudflare integration no longer relies on ipify.org to determine your IP,
but instead is using the <a href="https://github.com/home-assistant/services.home-assistant.io">whoami service</a>.</p>
<p>This means that if you have configured your network only to allow traffic there,
you would need to adjust it to allow for the new situation.</p>
<p>(<a href="https://github.com/ludeeus">@ludeeus</a> - <a href="https://github.com/home-assistant/core/pull/81714">#81714</a>) (<a href="http://www.home-assistant.io/integrations/cloudflare">documentation</a>)</p>
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
      Elexa Guardian 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_1" hidden>
<p>The previously deprecated <code>guardian.disable_ap</code> and <code>guardian.enable_ap</code> service
and the corresponding binary sensor have now been removed.</p>
<p>(<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/81056">#81056</a>) (<a href="http://www.home-assistant.io/integrations/guardian">documentation</a>)</p>
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
      Glances 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_2" hidden>
<p>The scan interval (<code>scan_interval</code>) option in the Glances configuration is
removed, and the update interval will use the default value (60 seconds).</p>
<p>If you have already configured Glances integrations, the previously saved interval
option will still be used. To revert to the default update interval,
you need to re-add the integration.</p>
<p>You can use the <code>homeassistant.update_entity</code> service in an automation
for custom update intervals.</p>
<p>(<a href="https://github.com/engrbm87">@engrbm87</a> - <a href="https://github.com/home-assistant/core/pull/72748">#72748</a>) (<a href="http://www.home-assistant.io/integrations/glances">documentation</a>)</p>
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
      Groups 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_3" hidden>
<p>Media player groups containing players that provide an invalid media player
entity state, will now report a “Unknown” group state.</p>
<p>The list of valid media player states is available in our
<a href="https://developers.home-assistant.io/docs/core/entity/media-player/#states">developer documentation</a>.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/78465">#78465</a>) (<a href="http://www.home-assistant.io/integrations/group">documentation</a>)</p>
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
      HERE Travel Time 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_4" hidden>
<p>The HERE Travel Time integration now uses the HERE API v8.
Travelmode <code>publicTransportTimeTable</code> has been merged into <code>publicTransport</code>.
Your configuration will be migrated automatically;
no manual interaction is necessary.</p>
<p>(<a href="https://github.com/eifinger">@eifinger</a> - <a href="https://github.com/home-assistant/core/pull/80892">#80892</a>) (<a href="http://www.home-assistant.io/integrations/here_travel_time">documentation</a>)</p>
<hr />
<p>The unit system is no longer controlled by an options setting of the HERE
Traveltime integration but uses the built-in custom units configurable per
entity.</p>
<p>The distance sensor now uses kilometers as a default and must be manually
configured if it was previously using the imperial system.</p>
<p>(<a href="https://github.com/eifinger">@eifinger</a> - <a href="https://github.com/home-assistant/core/pull/79159">#79159</a>) (<a href="http://www.home-assistant.io/integrations/here_travel_time">documentation</a>)</p>
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
      Hikvision 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_5" hidden>
<p>The videoloss event has been removed from the supported list. The event has
always been used as a keep-alive for most Hikvision devices, and the library
uses it internally. Leaving it enabled as an option causes everything to break
if the event is actually processed, so it was removed to eliminate confusion.</p>
<p>Any customized options specified in the YAML configuration for a videoloss
event will need to be removed, and videoloss entities will no longer be
generated by the integration.</p>
<p>If you used any of these entities in your automations or scripts, you will
need to update those to remove the use of these entities.</p>
<p>(<a href="https://github.com/mezz64">@mezz64</a> - <a href="https://github.com/home-assistant/core/pull/81173">#81173</a>) (<a href="http://www.home-assistant.io/integrations/hikvision">documentation</a>)</p>
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
      HomeKit 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_6" hidden>
<p>The HomeKit Air quality PM10 mappings between Home Assistant and HomeKit,
have been updated to the latest <a href="https://www.airnow.gov/sites/default/files/2020-05/aqi-technical-assistance-document-sept2018.pdf">US AQI standard</a>.</p>
<p>(<a href="https://github.com/stackia">@stackia</a> - <a href="https://github.com/home-assistant/core/pull/81217">#81217</a>) (<a href="http://www.home-assistant.io/integrations/homekit">documentation</a>)</p>
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
      Logitech Harmony Hub 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_7" hidden>
<p>The <code>PowerOff</code> state of the select entity will be changed to <code>power_off</code>.</p>
<p>If you relied on this state value in your automations or script,
you must adjust to this change.</p>
<p>(<a href="https://github.com/bieniu">@bieniu</a> - <a href="https://github.com/home-assistant/core/pull/77491">#77491</a>) (<a href="http://www.home-assistant.io/integrations/harmony">documentation</a>)</p>
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
      Mobile Apps 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_8" hidden>
<p>The events fired when the mobile app scanned a Tag had an incorrect device ID;
This has been corrected.</p>
<p>As a result, the evens now contain a different but correct device ID. If you
relied on the device ID in your automations, you might need to adjust those
with the new device ID.</p>
<p>(<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/82820">#82820</a>) (<a href="http://www.home-assistant.io/integrations/mobile_app">documentation</a>)</p>
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
      Modbus 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_9" hidden>
<p>The name of the mapping keys used for defining HVAC modes in the Modbus
climate integration (introduced in 2022.11) has changed. This was needed
to fix an issue with the <code>off</code> key, which has a different meaning in YAML.</p>
<p>Instead of:</p>
<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight"><code data-lang="yaml"><span class="na">hvac_mode_register</span><span class="pi">:</span>
  <span class="na">address</span><span class="pi">:</span> <span class="s">...</span>
  <span class="na">values</span><span class="pi">:</span>
    <span class="na">off</span><span class="pi">:</span> <span class="m">0</span>
    <span class="na">heat</span><span class="pi">:</span> <span class="m">1</span>
    <span class="na">cool</span><span class="pi">:</span> <span class="m">2</span>
</code></pre></div></div>
<p>You now have to use:</p>
<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight"><code data-lang="yaml"><span class="na">hvac_mode_register</span><span class="pi">:</span>
  <span class="na">address</span><span class="pi">:</span> <span class="s">...</span>
  <span class="na">values</span><span class="pi">:</span>
    <span class="na">state_off</span><span class="pi">:</span> <span class="m">0</span>
    <span class="na">state_heat</span><span class="pi">:</span> <span class="m">1</span>
    <span class="na">state_cool</span><span class="pi">:</span> <span class="m">2</span>
</code></pre></div></div>
<p>(<a href="https://github.com/avishorp">@avishorp</a> - <a href="https://github.com/home-assistant/core/pull/81054">#81749</a>) (<a href="http://www.home-assistant.io/integrations/modbus">documentation</a>)</p>
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
      MQTT 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_10" hidden>
<p>YAML configuration of MQTT entities under the platform key (e.g., <code>light</code>),
which was deprecated in Home Assistant Core 2022.6, is no longer supported.
The configuration must instead be done under the <code>mqtt</code> key.</p>
<p>The legacy MQTT device tracker is no longer supported. See
<a href="http://www.home-assistant.io/integrations/device_tracker.mqtt/">the documentation</a> for the supported MQTT
device tracker configuration.</p>
<p>As of this release, you should now use the modern configuration schema for all
manually configured MQTT entities. Please note that this does not impact
MQTT discovery, for example, Zigbee2MQTT.</p>
<p>(<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/82102">#82102</a>) (<a href="http://www.home-assistant.io/integrations/mqtt">documentation</a>)</p>
<hr />
<p>The <code>encoding</code> configuration option for the MQTT camera set to <code>b64</code>
was previously deprecated and has now become an invalid configuration.</p>
<p>The new <code>image_encoding</code> configuration option is now used to set Base64 encoding.
Please use the new <code>image_encoding</code> config parameter (set to <code>b64</code>) instead.</p>
<p>(<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/82244">#82244</a>) (<a href="http://www.home-assistant.io/integrations/mqtt">documentation</a>)</p>
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
      OpenUV 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_11" hidden>
<p>The previously deprecated <code>openuv.update</code>, <code>openuv.update_uv_index</code>,
and <code>openuv.update_protection_data</code> services have now be removed.</p>
<p>(<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/81055">#81055</a>) (<a href="http://www.home-assistant.io/integrations/openuv">documentation</a>)</p>
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
      Radarr 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_12" hidden>
<p>The previously deprecated YAML configuration of the Radarr
integration has been removed.</p>
<p>Radarr is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/81210">#81210</a>) (<a href="http://www.home-assistant.io/integrations/radarr">documentation</a>)</p>
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
      RainMachine 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_13" hidden>
<p>The previously deprecated <code>extra_water_on_hot_days</code>  and <code>freeze_protection</code>
binary sensors, and <code>freeze_protection_temperature</code> sensor have now been removed.</p>
<p>(<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/81053">#81053</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine">documentation</a>)</p>
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
      Renault 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_14" hidden>
<p>The unit of measurement for the charging power sensor has been corrected.
As the unit has changed, it will create a long-term statistics warning
that you need to resolve in the statistics developers tools manually.</p>
<p><a href='https://my.home-assistant.io/redirect/developer_statistics' class='my badge' target='_blank'><img src='https://my.home-assistant.io/badges/developer_statistics.svg' /></a></p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/81412">#81412</a>) (<a href="http://www.home-assistant.io/integrations/renault">documentation</a>)</p>
<p>You will need to resolve the analytics warning by adjusting the previous unit.</p>
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
      Risco 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_15" hidden>
<p>The <code>bypassed</code> attribute in Risco zones has been removed and replaced with
a switch. The matching services have also been removed, and you can bypass
and un-bypass a zone using the regular switch services
(<code>turn_on</code> and <code>turn_off</code> respectively).</p>
<p>For example, if you had a call to:</p>
<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight"><code data-lang="yaml"><span class="na">service</span><span class="pi">:</span> <span class="s">risco.bypass_zone</span>
<span class="na">target</span><span class="pi">:</span>
  <span class="na">entity_id</span><span class="pi">:</span> <span class="s">binary_sensor.motion_bedroom</span>
</code></pre></div></div>
<p>You can replace it with:</p>
<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight"><code data-lang="yaml"><span class="na">service</span><span class="pi">:</span> <span class="s">switch.turn_on</span>
<span class="na">target</span><span class="pi">:</span>
  <span class="na">entity_id</span><span class="pi">:</span> <span class="s">switch.motion_bedroom_bypassed</span>
</code></pre></div></div>
<p>(<a href="https://github.com/OnFreund">@OnFreund</a> - <a href="https://github.com/home-assistant/core/pull/81137">#81137</a>) (<a href="http://www.home-assistant.io/integrations/risco">documentation</a>)</p>
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
      SimpliSafe 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_16" hidden>
<p>The previously deprecated <code>simplisafe.clear_notifications</code> service
has now been removed.</p>
<p>(<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/81054">#81054</a>) (<a href="http://www.home-assistant.io/integrations/simplisafe">documentation</a>)</p>
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
      Statistics 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_17" hidden>
<p>The <code>quantiles</code> <code>statistics</code> sensor characteristic has been removed and
replaced by the more versatile <code>percentile</code> characteristic.</p>
<p>If you use the <code>quantiles</code> characteristic, you will need to adapt your sensor
configuration to recreate identical values with the <code>percentile</code> characteristic.</p>
<p>(<a href="https://github.com/ThomDietrich">@ThomDietrich</a> - <a href="https://github.com/home-assistant/core/pull/81054">#81749</a>) (<a href="http://www.home-assistant.io/integrations/statistics">documentation</a>)</p>
<hr />
<p>The configuration of <code>statistics</code> sensors has changed:</p>
<p>The <code>state_characteristic</code> configuration setting is now mandatory.</p>
<p>The <code>sampling_size</code> configuration setting is now optional and no longer
defaults to the arbitrary value 20. You can now define <code>sampling_size</code>,
<code>max_age</code>, or both depending on your use case. Existing sensors won’t behave
differently by the change. However, you might want to check whether your
currently defined sensors have a meaningful <code>sampling_size</code> configured or if
you wish to remove this setting altogether.</p>
<p>(<a href="https://github.com/ThomDietrich">@ThomDietrich</a> - <a href="https://github.com/home-assistant/core/pull/81054">#81749</a>) (<a href="http://www.home-assistant.io/integrations/statistics">documentation</a>)</p>
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
      Subaru 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_18" hidden>
<p>The Subaru API has changed and no longer returns values required by two sensors:</p>
<ul>
<li>External temp</li>
<li>12V battery voltage</li>
</ul>
<p>These sensors have been removed from the Subaru integration.</p>
<p>(<a href="https://github.com/G-Two">@G-Two</a> - <a href="https://github.com/home-assistant/core/pull/83213">#83213</a>) (<a href="http://www.home-assistant.io/integrations/subaru">documentation</a>)</p>
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
      UniFi Network 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_19" hidden>
<p>As new PoE entities were introduced with 2022.11, this release, the old
troublesome PoE client implementation that these entities replaced,
has been removed. Upgrading will automatically remove the old entities.</p>
<p>Please note that the new PoE entities are disabled by default and represent
each PoE-capable port without mapping it to a client.</p>
<p>(<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/81054">#81749</a>) (<a href="http://www.home-assistant.io/integrations/unifi">documentation</a>)</p>
</div>
  </div>
</div>
<p>If you are a custom integration or theme developer and want to learn about
breaking changes and new features available for your integration: Be sure to
follow our <a href="https://developers.home-assistant.io/blog/">developer blog</a>.
The following are the most notable for this release:</p>
<ul>
<li><a href="https://developers.home-assistant.io/blog/2022/11/28/more-unit-enumerators">Add more unit enumerators</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/11/16/statistics_refactoring">Changes to long term statistics APIs</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/12/07/entity-color-changes">Entity state color changes</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/10/26/new-unit-enumerators">Introducing new unit enumerators</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/12/07/unit_system_changes">Summary of unit system related changes</a></li>
</ul>
<h2>Farewell to the following</h2>
<p>The following integrations are also no longer available as of this release:</p>
<ul>
<li><strong>Google Chat</strong> has been removed. It relied on the Google Hangouts APIs,
which have been shut down, rendering the integration unusable.</li>
</ul>
<h2>All changes</h2>
<p>Of course, there is a lot more in this release. You can find a list of
all changes made here: <a href="http://www.home-assistant.io/changelogs/core-2022.12">Full changelog for Home Assistant Core 2022.12</a></p>
"
link: "https://www.home-assistant.io/blog/2022/12/07/release-202212/"
category:
---
