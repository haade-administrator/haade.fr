---
title: "2023.1 - Happy New Year of the voice!"
date: 2023-01-04 00:00:00 +0000
dateadded: 2023-02-02 08:54:04 +0100
description: "<p><a href='http://www.home-assistant.io/integrations/#version/2023.1'><img src='http://www.home-assistant.io/images/blog/2023-01/social.png' style='border: 0;box-shadow: none;'></a></p>
<p>Happy New Year! 🍾</p>
<p>We wish you, and all the loved ones around you, all the best for 2023! 🥂</p>
<p>2023: What an exciting year this will be; <a href="http://www.home-assistant.io/blog/2022/12/20/year-of-voice/">The year of the voice</a>!
And not just that, many exciting things are expected this year. More spoilers
can be found in the <a href="https://www.youtube.com/watch?v=D936T1Ze8-4">State of the Open Home 2022</a>
recording on YouTube.</p>
<p>Starting this amazing year with: Home Assistant Core 2023.1! 🎊</p>
<p>A fairly small release, as we all enjoyed our Holidays. Yet, the first traces
of the voice project are already visible: support for entity aliases!</p>
<p>Still, this release contains over 800 changes, most of which are
quality improvements, bug and stability fixes, and other minor improvements.
The perfect release to start the year with, an easy upgrade worth doing.</p>
<p>Enjoy the release!</p>
<p>../Frenck</p>
<p>PS: Did you know <a href="https://fosstodon.org/@homeassistant">Home Assistant is now on Mastodon</a> too?</p>
<!--more-->
<ul>
<li><a href="#the-year-of-the-voice">The year of the voice!</a></li>
<li><a href="#entity-aliases-for-voice-assistants">Entity aliases for voice assistants</a></li>
<li><a href="#progress-on-matter">Progress on Matter</a></li>
<li><a href="#extending-calendar-support">Extending calendar support</a></li>
<li><a href="#translation-improvements-for-entities">Translation improvements for entities</a></li>
<li><a href="#other-noteworthy-changes">Other noteworthy changes</a></li>
<li><a href="#new-integrations">New Integrations</a></li>
<li><a href="#release-202311---january-5">Release 2023.1.1 - January 5</a></li>
<li><a href="#release-202312---january-8">Release 2023.1.2 - January 8</a></li>
<li><a href="#release-202313---january-10">Release 2023.1.3 - January 10</a></li>
<li><a href="#release-202314---january-12">Release 2023.1.4 - January 12</a></li>
<li><a href="#release-202315---january-17">Release 2023.1.5 - January 17</a></li>
<li><a href="#release-202316---january-19">Release 2023.1.6 - January 19</a></li>
<li><a href="#release-202317---january-22">Release 2023.1.7 - January 22</a></li>
<li><a href="#need-help-join-the-community">Need help? Join the community!</a></li>
<li><a href="#breaking-changes">Breaking Changes</a></li>
<li><a href="#farewell-to-the-following">Farewell to the following</a></li>
<li><a href="#all-changes">All changes</a></li>
</ul>
<p>Don’t forget to <a href="https://www.youtube.com/watch?v=T8gpiGZKX6w">join our release party live stream on YouTube</a> 4 January 2023, at 12:00 PST / 21:00 CET!</p>
<p><lite-youtube videoid="T8gpiGZKX6w" videotitle="Home Assistant 2023.1 Release Party"></lite-youtube></p>
<h2>The year of the voice!</h2>
<p>You should have heard about it by now; 2023 is <a href="http://www.home-assistant.io/blog/2022/12/20/year-of-voice/">Home Assistant’s year of Voice</a>!
It is our goal for 2023 to let users control Home Assistant in their own
language. As covered by <a href="https://www.theverge.com/2022/12/27/23527790/home-assistant-voice-control-rhasspy-nabu-casa-smart-google-siri-alexa">The Verge</a>,
<a href="https://arstechnica.com/gadgets/2022/12/with-voice-assistants-in-trouble-home-assistant-starts-a-local-alternative/">ArsTechnica</a>,
and <a href="https://9to5google.com/2022/12/23/home-assistant-voice/">many others</a>.</p>
<p>The work on voice has already started by collecting intents in all the different
languages we want to support. Intents describe the user’s intention with what
they’ve said (or written), so Home Assistant can understand what to do,
like the action to take and which devices are involved.</p>
<p>All the different possible intent sentences are now being collected in the
<a href="https://github.com/home-assistant/intents">Intents for Home Assistant</a> GitHub
repository, and <a href="https://github.com/home-assistant/intents/blob/main/CONTRIBUTING.md">we are looking for contributions</a>!
So, feel free to jump in and help out!</p>
<p>An overview of the current status of all intents and languages can be found on
<a href="https://home-assistant.github.io/intents/">this page</a>. The page gives insight
into the parts we need help with.</p>
<p>Lastly, we are also looking for language leaders! Each language is maintained
by one or more language leaders. Language leaders are responsible for reviewing
their language’s contributions and making sure they are grammatically correct.</p>
<p>Anyone can apply to become one. If you want to apply to be a language leader,
join us in <a href="http://www.home-assistant.io/join-chat">#devs_voice on Discord</a> or <a href="https://github.com/home-assistant/intents/discussions">open a discussion topic</a>.</p>
<h2>Entity aliases for voice assistants</h2>
<p>The first little thing related to the voice project found in Home Assistant:
Aliases for entity names are now configurable via the UI.</p>
<p>Currently, configured aliases are used by Google Assistant and, of course, can
later be used by our own voice assistant.</p>
<p>These aliases are helpful in case you call the same device by multiple names
or when using a voice assistant in multiple languages at the same time.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2023-01/aliases.png' alt='Screenshot showing the alias editing capabilities added to the more info dialog of entities'>
<p>The new aliases feature can be found on each entity’s more information dialog
in the settings tab in the advanced section. If you use
<a href="https://www.nabucasa.com/">Home Assistant Cloud</a>, you can also manage your
entity aliases (and the devices to expose to Google Assistant) in your
<a href="https://my.home-assistant.io/redirect/cloud/">Home Assistant Cloud settings</a>.</p>
<p>Multi-language can be an important factor when using Google Assistant, as those
can be configured to support two languages at the same time. For example,
English and Dutch simultaneously. Aliases allow you to provide names
for translations as an alias. For instance, I have added
“Woonkamer stofzuiger” (Dutch) as an alias to my living room vacuum.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2023-01/aliases-cloud-multi-language.png' alt='Screenshot showing adding multiple languages as aliases via the Home Assistant Cloud manage entities screen'>
<p>It was previously possible to configure Google Assistant-specific aliases via
YAML as well, and this remains working. You can use either YAML or easily manage
them via the UI.</p>
<h2>Progress on Matter</h2>
<p>Last December release, we <a href="http://www.home-assistant.io/blog/2022/12/07/release-202212/#it-does-matter">introduced Matter support</a>,
and progress has been made since then. The code base has seen many fixes and
improvements, and much effort has been put into adding more automated
tests and quality assurance.</p>
<p>There are also notable improvements; commissioning Matter devices have been
improved (and fixed). So, adding <a href="https://nabucasa.github.io/matter-example-apps/">your first Matter device</a>
to Home Assistant should be a much better experience now.</p>
<p>Lastly, the <a href="https://play.google.com/store/apps/details?id=io.homeassistant.companion.android">Home Assistant Companion app for Android</a>
with support for pairing Matter devices has been released! Thanks to the fantastic
work by <a href="https://github.com/jpelgrom">@jpelgrom</a> on the Android app, the
commissioning experience is now even better! Here is a quick video showing
how that works:</p>
<p><lite-youtube videoid="ELBrpnbRT-8" videotitle="Commission a Matter device with Home Assistant using the Home Assistant Companion app for Android"></lite-youtube></p>
<p>This does require your Android device to be updated with Matter support which
Google is rolling out within the Google Home app in recent Android versions.</p>
<p>Support for pairing Matter devices using our iOS Companion app is being worked
on.</p>
<h2>Extending calendar support</h2>
<p>The last release introduced <a href="http://www.home-assistant.io/blog/2022/12/07/release-202212/#local-calendar">the local calendar</a>,
which included the capability to manage calendar events from Home Assistant.
These features have now been added to the <a href="http://www.home-assistant.io/integrations/google/">Google Calendar</a>
integration as well!</p>
<p>Meaning you can now create a new event in your Google Calendar, straight
from within Home Assistant. Neat!</p>
<p>Furthermore, the local calendar has been extended to provide editing support for existing
events 🤘</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2023-01/calendar.png' alt='Screenshots showing the new edit event and monthly recurrence of events capabilities'>
<p>Lastly, support for monthly variations in the recurrence rules has been
added. This includes repetitions like: on the 20th day or the first Wednesday of
the month. The latter, of course, is helpful to put the Home Assistant
release day on your calendar 😉</p>
<h2>Translation improvements for entities</h2>
<p>The support for translations for entities has been improved, especially those
of entity attributes! A relatively small change that is improving the UI
experience quite a bit.</p>
<p>Some entities provide additional properties, for example, climate entities
provide presets or fan modes. Integrations can now offer translations for
those attribute values.</p>
<p>Additionally, textual sensor entities can now provide a list of possible states
they can be in, for which, of course, translations can be provided for now too.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2023-01/entity-translations.png' alt='Screenshots showing the effects of having translated entity attributes'>
<p>In the above screenshot, on the left, you can see how the presets of my
thermostat now show up nicely in a human-readable format (instead of, for example,
“anti_frost” in previous releases).</p>
<p>On the right, the <a href="http://www.home-assistant.io/integrations/moon">Moon</a> sensor used in an automation
trigger, Home Assistant can now suggest states you can use in those cases.
Those suggestions will also be translated into the language you are using.</p>
<h2>Other noteworthy changes</h2>
<p>There is much more juice in this release; here are some of the other
noteworthy changes this release:</p>
<ul>
<li><a href="https://github.com/epenet">@epenet</a> added a bunch of new device classes for sensors! We now have support
for data size, data rate, irradiance, sound pressure, and atmospheric pressure.</li>
<li>The <a href="http://www.home-assistant.io/integrations/shelly">Shelly</a> integration now supports the Shelly Plus WallDimmer US,
thanks <a href="https://github.com/thecode">@thecode</a>!</li>
<li>Configuration errors of automations and scripts with device automations have
been significantly improved, providing you with much more detail to help
you fix the problem. Thanks, <a href="https://github.com/emontnemery">@emontnemery</a>!</li>
<li><a href="https://github.com/AngellusMortis">@AngellusMortis</a> added a text entity to the <a href="http://www.home-assistant.io/integrations/unifiprotect">UniFi Protect</a>, so you can now
set the message displayed on your doorbell. Awesome!</li>
<li><a href="http://www.home-assistant.io/integrations/google_translate">Google Translate</a> has been extended with dialect support, thanks <a href="https://github.com/toddejohnson">@toddejohnson</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/yalexs_ble">Yale Access Bluetooth</a> now has support for battery status, thanks <a href="https://github.com/bdraco">@bdraco</a>!</li>
<li>Three nice new additions to <a href="http://www.home-assistant.io/integrations/switchbot">SwitchBot</a>, <a href="https://github.com/konikoni428">@konikoni428</a> added support for power
monitor of wallplugs, <a href="https://github.com/bdraco">@bdraco</a> added initial humidifier support, and
<a href="https://github.com/dsypniewski">@dsypniewski</a> added support for SwitchBot locks! Awesome!</li>
<li><a href="https://github.com/FuzzyMistborn">@FuzzyMistborn</a>, added support for <a href="http://www.home-assistant.io/integrations/ecobee">ecobee</a> Smart Enhanced thermostats,
thank you!</li>
<li><a href="http://www.home-assistant.io/integrations/knx">KNX</a> expose now has a cooldown option, which can be used to limit bus load.
Thanks, <a href="https://github.com/farmio">@farmio</a>!</li>
</ul>
<h2>New Integrations</h2>
<p>We welcome the following new integrations in this release:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/airvisual_pro">AirVisual Pro</a>, added by <a href="https://github.com/bachya">@bachya</a></li>
<li><a href="http://www.home-assistant.io/integrations/google_assistant_sdk">Google Assistant SDK</a>, added by <a href="https://github.com/tronikos">@tronikos</a></li>
<li><a href="http://www.home-assistant.io/integrations/purpleair">PurpleAir</a>, added by <a href="https://github.com/bachya">@bachya</a></li>
<li><a href="http://www.home-assistant.io/integrations/reolink">Reolink</a>, added by <a href="https://github.com/starkillerOG">@starkillerOG</a></li>
</ul>
<h2>Release 2023.1.1 - January 5</h2>
<ul>
<li>Limit calls in UniFi to write state (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/85248">#85248</a>) (<a href="http://www.home-assistant.io/integrations/unifi/">unifi docs</a>)</li>
<li>Only subscribe to relevant IDs for state updates (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/85252">#85252</a>) (<a href="http://www.home-assistant.io/integrations/unifi/">unifi docs</a>)</li>
<li>Bump pyeconet to 0.1.18 to fix energy usage (<a href="https://github.com/w1ll1am23">@w1ll1am23</a> - <a href="https://github.com/home-assistant/core/pull/85094">#85094</a>) (<a href="http://www.home-assistant.io/integrations/econet/">econet docs</a>)</li>
<li>Fix lacrosse_view fetching of latest data (<a href="https://github.com/nijel">@nijel</a> - <a href="https://github.com/home-assistant/core/pull/85117">#85117</a>) (<a href="http://www.home-assistant.io/integrations/lacrosse_view/">lacrosse_view docs</a>)</li>
<li>Bump bthome-ble to 2.4.1 (<a href="https://github.com/Ernst79">@Ernst79</a> - <a href="https://github.com/home-assistant/core/pull/85153">#85153</a>) (<a href="http://www.home-assistant.io/integrations/bthome/">bthome docs</a>)</li>
<li>Bump hatasmota to 0.6.2 (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/85182">#85182</a>) (<a href="http://www.home-assistant.io/integrations/tasmota/">tasmota docs</a>)</li>
<li>Remove invalid AQI unit from Environment Canada (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/85183">#85183</a>) (<a href="http://www.home-assistant.io/integrations/environment_canada/">environment_canada docs</a>)</li>
<li>Adjust valid energy units (<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/85190">#85190</a>) (<a href="http://www.home-assistant.io/integrations/energy/">energy docs</a>)</li>
<li>Remove invalid device class for RSSI sensors (<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/85191">#85191</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Fix device class for DSMR gas sensors providing energy readings (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/85202">#85202</a>) (<a href="http://www.home-assistant.io/integrations/dsmr/">dsmr docs</a>)</li>
<li>Improve error reporting when switchbot auth fails (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/85244">#85244</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>bump reolink-aio to 0.1.2 (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/85247">#85247</a>) (<a href="http://www.home-assistant.io/integrations/reolink/">reolink docs</a>)</li>
<li>Bump bimmer_connected to 0.12.0 (<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/85255">#85255</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive/">bmw_connected_drive docs</a>)</li>
<li>Reject the WiFI AP when considering to update a shelly config entry from zeroconf (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/85265">#85265</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Fix Fully Kiosk service call config entry handling (<a href="https://github.com/cgarwood">@cgarwood</a> - <a href="https://github.com/home-assistant/core/pull/85275">#85275</a>) (<a href="http://www.home-assistant.io/integrations/fully_kiosk/">fully_kiosk docs</a>)</li>
</ul>
<h2>Release 2023.1.2 - January 8</h2>
<ul>
<li>Allow SensorDeviceClass.POWER_FACTOR unit None (<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/85287">#85287</a>) (<a href="http://www.home-assistant.io/integrations/sensor/">sensor docs</a>) (<a href="http://www.home-assistant.io/integrations/number/">number docs</a>)</li>
<li>Retry ZHA config entry setup when <code>ENETUNREACH</code> is caught (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/84615">#84615</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Fix dsmr_reader peak hour consumption unit of measurement (<a href="https://github.com/Glodenox">@Glodenox</a> - <a href="https://github.com/home-assistant/core/pull/85301">#85301</a>) (<a href="http://www.home-assistant.io/integrations/dsmr_reader/">dsmr_reader docs</a>)</li>
<li>Bump reolink-aio to 0.1.3 (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/85309">#85309</a>) (<a href="http://www.home-assistant.io/integrations/reolink/">reolink docs</a>)</li>
<li>Bump life360 package to 5.5.0 (<a href="https://github.com/pnbruckner">@pnbruckner</a> - <a href="https://github.com/home-assistant/core/pull/85322">#85322</a>) (<a href="http://www.home-assistant.io/integrations/life360/">life360 docs</a>)</li>
<li>Switch play pause method in philips js (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/85343">#85343</a>) (<a href="http://www.home-assistant.io/integrations/philips_js/">philips_js docs</a>)</li>
<li>Bump ZHA dependencies (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/85355">#85355</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Add note to SwitchBot locks that usernames are case sensitive (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/85359">#85359</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump pySwitchbot to 0.36.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/85360">#85360</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Increase Hydrawise default scan interval (<a href="https://github.com/mobilutz">@mobilutz</a> - <a href="https://github.com/home-assistant/core/pull/85398">#85398</a>) (<a href="http://www.home-assistant.io/integrations/hydrawise/">hydrawise docs</a>)</li>
<li>Bump ical to 4.2.9 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/85401">#85401</a>) (<a href="http://www.home-assistant.io/integrations/local_calendar/">local_calendar docs</a>)</li>
<li>Bump gcal_sync to 4.1.1 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/85453">#85453</a>) (<a href="http://www.home-assistant.io/integrations/google/">google docs</a>)</li>
</ul>
<h2>Release 2023.1.3 - January 10</h2>
<ul>
<li>Bump pyunifiprotect to 4.6.0 (<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/85483">#85483</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect/">unifiprotect docs</a>)</li>
<li>Remove invalid Signal Strength device class from NETGEAR (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/85510">#85510</a>) (<a href="http://www.home-assistant.io/integrations/netgear/">netgear docs</a>)</li>
<li>Restore Netgear signal strength icon (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/85512">#85512</a>)</li>
<li>Remove invalid state class in Subaru sensor (<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/85520">#85520</a>) (<a href="http://www.home-assistant.io/integrations/subaru/">subaru docs</a>)</li>
<li>Bump sense_energy to 0.11.1 (<a href="https://github.com/kbickar">@kbickar</a> - <a href="https://github.com/home-assistant/core/pull/85533">#85533</a>) (<a href="http://www.home-assistant.io/integrations/sense/">sense docs</a>) (<a href="http://www.home-assistant.io/integrations/emulated_kasa/">emulated_kasa docs</a>)</li>
<li>Bump pyunifiprotect to 4.6.1 (<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/85547">#85547</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect/">unifiprotect docs</a>)</li>
<li>Do not check ble scanner state for sleepy shelly devices (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/85566">#85566</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Remove no-longer-needed invalid API key monitor for OpenUV (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/85573">#85573</a>) (<a href="http://www.home-assistant.io/integrations/openuv/">openuv docs</a>)</li>
<li>Bump aioshelly to 5.2.1 to fix Task exception was never retrieved (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/85575">#85575</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Bump gcal-sync to 4.1.2 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/85631">#85631</a>) (<a href="http://www.home-assistant.io/integrations/google/">google docs</a>)</li>
<li>Bump hatasmota to 0.6.3 (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/85633">#85633</a>) (<a href="http://www.home-assistant.io/integrations/tasmota/">tasmota docs</a>)</li>
<li>Update frontend to 20230110.0 (<a href="https://github.com/piitaya">@piitaya</a> - <a href="https://github.com/home-assistant/core/pull/85640">#85640</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
</ul>
<h2>Release 2023.1.4 - January 12</h2>
<ul>
<li>Upgrade aionanoleaf to 0.2.1 (<a href="https://github.com/milanmeu">@milanmeu</a> - <a href="https://github.com/home-assistant/core/pull/83669">#83669</a>) (<a href="http://www.home-assistant.io/integrations/nanoleaf/">nanoleaf docs</a>)</li>
<li>Improve Huawei LTE SSDP inclusion (<a href="https://github.com/scop">@scop</a> - <a href="https://github.com/home-assistant/core/pull/85572">#85572</a>) (<a href="http://www.home-assistant.io/integrations/huawei_lte/">huawei_lte docs</a>)</li>
<li>Remove oauth2client dependency in Google Sheets (<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/85637">#85637</a>) (<a href="http://www.home-assistant.io/integrations/google_sheets/">google_sheets docs</a>)</li>
<li>Upgrade huawei-lte-api to 1.6.11 (<a href="https://github.com/scop">@scop</a> - <a href="https://github.com/home-assistant/core/pull/85669">#85669</a>) (<a href="http://www.home-assistant.io/integrations/huawei_lte/">huawei_lte docs</a>)</li>
<li>Update pyTibber to 0.26.8 (<a href="https://github.com/Danielhiversen">@Danielhiversen</a> - <a href="https://github.com/home-assistant/core/pull/85702">#85702</a>) (<a href="http://www.home-assistant.io/integrations/tibber/">tibber docs</a>)</li>
<li>Bump pylitterbot to 2023.1.0 (<a href="https://github.com/natekspencer">@natekspencer</a> - <a href="https://github.com/home-assistant/core/pull/85484">#85484</a>) (<a href="http://www.home-assistant.io/integrations/litterrobot/">litterrobot docs</a>)</li>
<li>Use built in polling for litterrobot update entity (<a href="https://github.com/natekspencer">@natekspencer</a> - <a href="https://github.com/home-assistant/core/pull/84678">#84678</a>) (<a href="http://www.home-assistant.io/integrations/litterrobot/">litterrobot docs</a>)</li>
<li>Fix Litter-Robot 4 firmware versions reported while updating (<a href="https://github.com/natekspencer">@natekspencer</a> - <a href="https://github.com/home-assistant/core/pull/85710">#85710</a>) (<a href="http://www.home-assistant.io/integrations/litterrobot/">litterrobot docs</a>)</li>
<li>Use jemalloc in Docker builds (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/85738">#85738</a>)</li>
<li>Bump aiowebostv to 0.3.0 (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/85756">#85756</a>) (<a href="http://www.home-assistant.io/integrations/webostv/">webostv docs</a>)</li>
</ul>
<h2>Release 2023.1.5 - January 17</h2>
<ul>
<li>Make API key mandatory for PI-Hole (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/85885">#85885</a>) (<a href="http://www.home-assistant.io/integrations/pi_hole/">pi_hole docs</a>)</li>
<li>Reolink check for admin (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/85570">#85570</a>) (<a href="http://www.home-assistant.io/integrations/reolink/">reolink docs</a>) (dependency)</li>
<li>Remove sky connect config entry if USB stick is not plugged in (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/85765">#85765</a>) (<a href="http://www.home-assistant.io/integrations/usb/">usb docs</a>) (<a href="http://www.home-assistant.io/integrations/homeassistant_sky_connect/">homeassistant_sky_connect docs</a>)</li>
<li>Remove WAQI unsupported UOM (<a href="https://github.com/yuvalabou">@yuvalabou</a> - <a href="https://github.com/home-assistant/core/pull/85768">#85768</a>) (<a href="http://www.home-assistant.io/integrations/waqi/">waqi docs</a>)</li>
<li>Bump pySwitchbot to 0.36.4 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/85777">#85777</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>) (dependency)</li>
<li>Remove oauth2client dependency in Google Assistant SDK (<a href="https://github.com/tronikos">@tronikos</a> - <a href="https://github.com/home-assistant/core/pull/85785">#85785</a>) (<a href="http://www.home-assistant.io/integrations/google_assistant_sdk/">google_assistant_sdk docs</a>)</li>
<li>Fix WebOS TV image fetch SSL verify failure (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/85841">#85841</a>) (<a href="http://www.home-assistant.io/integrations/webostv/">webostv docs</a>)</li>
<li>Bump aiohomekit to 2.4.4 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/85853">#85853</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>) (dependency)</li>
<li>Skip over files without mime type in Jellyfin (<a href="https://github.com/j-stienstra">@j-stienstra</a> - <a href="https://github.com/home-assistant/core/pull/85874">#85874</a>) (<a href="http://www.home-assistant.io/integrations/jellyfin/">jellyfin docs</a>)</li>
<li>Bump google-nest-sdm to 2.1.2 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/84926">#84926</a>) (<a href="http://www.home-assistant.io/integrations/nest/">nest docs</a>) (dependency)</li>
<li>Bump google-nest-sdm to 2.2.2 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/85899">#85899</a>) (<a href="http://www.home-assistant.io/integrations/nest/">nest docs</a>) (dependency)</li>
<li>Add a timeout during OAuth token exchange and additional debug logging (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/85911">#85911</a>) (<a href="http://www.home-assistant.io/integrations/nest/">nest docs</a>)</li>
<li>Bump aiowebostv to 0.3.1 to fix support for older devices (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/85916">#85916</a>) (<a href="http://www.home-assistant.io/integrations/webostv/">webostv docs</a>) (dependency)</li>
<li>Fix webOS TV SSDP discovery missing friendly name (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/85917">#85917</a>) (<a href="http://www.home-assistant.io/integrations/webostv/">webostv docs</a>)</li>
<li>Update webOS TV codeowners (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/85959">#85959</a>) (<a href="http://www.home-assistant.io/integrations/webostv/">webostv docs</a>)</li>
<li>Bump aiowebostv to 0.3.2 (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/86031">#86031</a>) (<a href="http://www.home-assistant.io/integrations/webostv/">webostv docs</a>) (dependency)</li>
<li>Handle ignored shelly entries when discovering via zeroconf (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/86039">#86039</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Update pyTibber to 0.26.8 (<a href="https://github.com/Danielhiversen">@Danielhiversen</a> - <a href="https://github.com/home-assistant/core/pull/86044">#86044</a>) (<a href="http://www.home-assistant.io/integrations/tibber/">tibber docs</a>) (dependency)</li>
<li>bump reolink-aio to 0.2.1 (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/85571">#85571</a>) (<a href="http://www.home-assistant.io/integrations/reolink/">reolink docs</a>) (dependency)</li>
</ul>
<h2>Release 2023.1.6 - January 19</h2>
<ul>
<li>Fix Matter unique_id generation (<a href="https://github.com/marcelveldt">@marcelveldt</a> - <a href="https://github.com/home-assistant/core/pull/86046">#86046</a>) (<a href="http://www.home-assistant.io/integrations/matter/">matter docs</a>)</li>
<li>Code styling tweaks to the Matter integration (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/86096">#86096</a>) (<a href="http://www.home-assistant.io/integrations/matter/">matter docs</a>)</li>
<li>Bump govee-ble to 0.21.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/86103">#86103</a>) (<a href="http://www.home-assistant.io/integrations/govee_ble/">govee_ble docs</a>)</li>
<li>Adjust device registry for Matter devices (<a href="https://github.com/marcelveldt">@marcelveldt</a> - <a href="https://github.com/home-assistant/core/pull/86108">#86108</a>) (<a href="http://www.home-assistant.io/integrations/matter/">matter docs</a>)</li>
<li>Fix live logbook stalling when there are no historical events with a high commit interval (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/86110">#86110</a>) (<a href="http://www.home-assistant.io/integrations/logbook/">logbook docs</a>)</li>
<li>Fix Shelly sleeping Gen2 device updates (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/86198">#86198</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Update allowlisted OAuth redirect URIs for Wear OS in China (<a href="https://github.com/jpelgrom">@jpelgrom</a> - <a href="https://github.com/home-assistant/core/pull/86247">#86247</a>) (<a href="http://www.home-assistant.io/integrations/auth/">auth docs</a>)</li>
</ul>
<h2>Release 2023.1.7 - January 22</h2>
<ul>
<li>Support password less PI-Hole installations (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/86183">#86183</a>) (<a href="http://www.home-assistant.io/integrations/pi_hole/">pi_hole docs</a>)</li>
<li>Bump odp-amsterdam to v5.0.1 (<a href="https://github.com/klaasnicolaas">@klaasnicolaas</a> - <a href="https://github.com/home-assistant/core/pull/86252">#86252</a>) (<a href="http://www.home-assistant.io/integrations/garages_amsterdam/">garages_amsterdam docs</a>) (dependency)</li>
<li>Fix Shelly sleeping Gen2 - do not refresh from zeroconf discovery (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/86296">#86296</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Bump recommended esphome version for bluetooth proxies to 2022.12.4 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/86308">#86308</a>) (<a href="http://www.home-assistant.io/integrations/esphome/">esphome docs</a>)</li>
<li>Update pyTibber to 0.26.11 (<a href="https://github.com/Danielhiversen">@Danielhiversen</a> - <a href="https://github.com/home-assistant/core/pull/86316">#86316</a>) (<a href="http://www.home-assistant.io/integrations/tibber/">tibber docs</a>) (dependency)</li>
<li>Pass frag_duration as integer (<a href="https://github.com/uvjustin">@uvjustin</a> - <a href="https://github.com/home-assistant/core/pull/86375">#86375</a>) (<a href="http://www.home-assistant.io/integrations/stream/">stream docs</a>)</li>
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
      Image Upload / Default Config 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_0" hidden>
<p>The <code>image</code> integration domain was renamed to <code>image_upload</code>.</p>
<p>This change would only affect you when you have removed the
<a href="http://www.home-assistant.io/integrations/default_config"><code>default_config</code></a> from your configuration.
In that case, you need to manually adjust your configuration to rename <code>image</code>
to <code>image_upload</code>.</p>
<p>The rename was done to free up the <code>image</code> domain for future use.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/84063">#84063</a>) (<a href="http://www.home-assistant.io/integrations/image_upload">documentation</a>)</p>
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
      air-Q 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_1" hidden>
<p>The unit for noise has been adjusted from <code>dBa</code> to <code>dBA</code>.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/83581">#83581</a>) (<a href="http://www.home-assistant.io/integrations/airq">documentation</a>)</p>
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
      AirVisual (Pro) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_2" hidden>
<p>AirVisual Pro units now have their own Home Assistant integration (as opposed
to be included with the original AirVisual integration that uses the AirVisual
cloud API).</p>
<p>Pro devices will automatically be migrated; as part of that migration,
the Pro’s device ID will change.</p>
<p>If you utilize entity IDs belonging to a Pro in automations or scripts, you
don’t need to do anything; if, however, you utilize a Pro’s device ID,
please update those automations or scripts accordingly.</p>
<p>(<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/83583">#83583</a>) (<a href="http://www.home-assistant.io/integrations/airvisual_pro">documentation</a>)</p>
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
      APC UPS Daemon 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_3" hidden>
<p>The previously deprecated YAML configuration of the APC UPS Daemon integration
has been removed.</p>
<p>APC UPS Daemon is now configured via the UI. Any existing YAML configuration
has been imported in previous releases and can now be safely removed from your
YAML configuration files.</p>
<p>(<a href="https://github.com/yuxincs">@yuxincs</a> - <a href="https://github.com/home-assistant/core/pull/83801">#83801</a>) (<a href="http://www.home-assistant.io/integrations/apcupsd">documentation</a>)</p>
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
      Awair 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_4" hidden>
<p>The unit for sound level has been adjusted from <code>dBa</code> to <code>dBA</code>.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/83582">#83582</a>) (<a href="http://www.home-assistant.io/integrations/awair">documentation</a>)</p>
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
      deCONZ 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_5" hidden>
<p>An issue with the mapping of triggers of Styrbar has been discovered and fixed.
As a result, any automations relying on these triggers will need to be
manually adjusted/re-configured to adjust to this change.</p>
<p>(<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/84257">#84257</a>) (<a href="http://www.home-assistant.io/integrations/deconz">documentation</a>)</p>
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
      Fitbit 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_6" hidden>
<p>Units of measurements for length, mass, time, and volume have been aligned
with standard Home Assistant units.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/83936">#83936</a>) (<a href="http://www.home-assistant.io/integrations/fitbit">documentation</a>)</p>
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
      Minut Point 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_7" hidden>
<p>The unit for sound has been adjusted from <code>dBa</code> to <code>dBA</code>.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/83580">#83580</a>) (<a href="http://www.home-assistant.io/integrations/point">documentation</a>)</p>
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
      Speedtest.net 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_8" hidden>
<p>The update frequency option has been removed. The default frequency is now 60
minutes. If you like to customize the polling: disable polling update from
system options and use the <code>update_entity</code> service in an automation to manually
update it at your own custom schedule.</p>
<p>(<a href="https://github.com/engrbm87">@engrbm87</a> - <a href="https://github.com/home-assistant/core/pull/84295">#84295</a>) (<a href="http://www.home-assistant.io/integrations/speedtestdotnet">documentation</a>)</p>
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
      Tankerkoenig 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_9" hidden>
<p>The previously deprecated YAML configuration of the Tankerkoenig
integration has been removed.</p>
<p>Tankerkoenig is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/84711">#84711</a>) (<a href="http://www.home-assistant.io/integrations/tankerkoenig">documentation</a>)</p>
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
      Tomorrow.io 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_10" hidden>
<p>The imperial unit for <code>Global Horizontal Irradiance</code> has been adjusted from <code>BTU/(h×ft²)</code> to <code>BTU/(h⋅ft²)</code></p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/83574">#83574</a>) (<a href="http://www.home-assistant.io/integrations/tomorrowio">documentation</a>)</p>
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
      Universal Devices ISY994 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_11" hidden>
<p>The unit for weighted decibels has been adjusted from <code>dBa</code> to <code>dBA</code>.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/83583">#83583</a>) (<a href="http://www.home-assistant.io/integrations/isy994">documentation</a>)</p>
</div>
  </div>
</div>
<p>If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
<a href="https://developers.home-assistant.io/blog/">developer blog</a>. The following are the most notable for this release:</p>
<ul>
<li><a href="https://developers.home-assistant.io/blog/2022/12/05/more-unit-enumerators">Add more unit enumerators</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/12/08/multi-pan-rollback">Multi-pan temporarily disabled</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/12/07/unit_system_changes">Summary of unit system related changes</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/12/01/entity_translations">Translating the state of entities</a></li>
</ul>
<h2>Farewell to the following</h2>
<p>The following integrations are also no longer available as of this release:</p>
<ul>
<li><strong>Deutsche Bahn</strong> has been removed. It relied on web scraping, which is no
longer allowed.</li>
</ul>
<h2>All changes</h2>
<p>Of course, there is a lot more in this release. You can find a list of
all changes made here: <a href="http://www.home-assistant.io/changelogs/core-2023.1">Full changelog for Home Assistant Core 2023.1</a></p>
"
link: "https://www.home-assistant.io/blog/2023/01/04/release-20231/"
category:
---
