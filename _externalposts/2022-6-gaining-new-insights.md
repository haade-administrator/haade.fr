---
title: "2022.6 - Gaining new insights!"
date: 2022-06-01 00:00:00 +0000
dateadded: 2023-02-02 08:54:04 +0100
description: "<p><a href='http://www.home-assistant.io/integrations/#version/2022.6'><img src='http://www.home-assistant.io/images/blog/2022-06/social.png' style='border: 0;box-shadow: none;'></a></p>
<p>👋  Hi there, Home Assistant Core 2022.6!</p>
<p>The June release brings insights! Insights on how you are doing with your
energy usage, and insights into what all the devices in your home are up to!</p>
<p>But that is not all June has to bring. Besides this release and <a href="https://www.youtube.com/watch?v=LVDex3IV44M">the release party</a>,
we have two additional events lined up for you this month!</p>
<p>On June 15, we will be hosting a <a href="http://www.home-assistant.io/blog/2022/05/29/matter-in-home-assistant-workshop-announcement/">Matter in Home Assistant workshop</a>!</p>
<p>The workshop will show you what we’ve been up to and allow you to actually test it out by adding your first Matter device to your own instance!
I’m excited for this one; I’ve ordered <a href="http://www.home-assistant.io/blog/2022/05/29/matter-in-home-assistant-workshop-announcement/">the parts listed in the workshop details</a>
for myself 🤗.</p>
<p>The day after, June 16, the second event: <a href="https://www.youtube.com/watch?v=SEH-DxOsywg">Let’s get loud!</a></p>
<p>This event is all about a new approach to home audio and music in an open
solution that values the Open Home. Join this event for the latest news and
audio demos from Home Assistant, <a href="https://esphome.io">ESPHome</a>,
<a href="https://raspiaudio.com">Raspiaudio</a>, and… something new!</p>
<p>Also: Hi Jacqueline Raaflaub! 👋 Jacqueline has joined
Nabu Casa; she will help out with support and assist in moderating our community.
We are excited to have you, and welcome!</p>
<p>Anyways, this Home Assistant Core release is a nice release with a couple of
new features and lots of cleanups under the hood. Together with the upcoming
events, this is going to be one exciting month!</p>
<p>Enjoy the release (and upcoming events)!</p>
<p>../Frenck</p>
<!--more-->
<ul>
<li><a href="#comparing-data-in-the-energy-dashboard">Comparing data in the energy dashboard</a></li>
<li><a href="#logbooks-have-never-been-better">Logbooks have never been better!</a></li>
<li><a href="#streamlining-the-oauth2-experience">Streamlining the OAuth2 experience</a></li>
<li><a href="#calendar-triggers-with-offsets">Calendar triggers with offsets</a></li>
<li><a href="#improved-scene-editor">Improved scene editor</a></li>
<li><a href="#database-performance">Database performance</a></li>
<li><a href="#other-noteworthy-changes">Other noteworthy changes</a></li>
<li><a href="#new-integrations">New Integrations</a></li>
<li><a href="#integrations-now-available-to-set-up-from-the-ui">Integrations now available to set up from the UI</a></li>
<li><a href="#release-202261---june-2">Release 2022.6.1 - June 2</a></li>
<li><a href="#release-202262---june-4">Release 2022.6.2 - June 4</a></li>
<li><a href="#release-202263---june-6">Release 2022.6.3 - June 6</a></li>
<li><a href="#release-202264---june-7">Release 2022.6.4 - June 7</a></li>
<li><a href="#release-202265---june-10">Release 2022.6.5 - June 10</a></li>
<li><a href="#release-202266---june-14">Release 2022.6.6 - June 14</a></li>
<li><a href="#release-202267---june-22">Release 2022.6.7 - June 22</a></li>
<li><a href="#need-help-join-the-community">Need help? Join the community!</a></li>
<li><a href="#breaking-changes">Breaking Changes</a></li>
<li><a href="#farewell-to-the-following">Farewell to the following</a></li>
<li><a href="#all-changes">All changes</a></li>
</ul>
<p>Missed our release party live stream on YouTube? Don’t worry! You can watch
the recording of it right here!</p>
<p><lite-youtube videoid="LVDex3IV44M" videotitle="Home Assistant 2022.6 Release Party"></lite-youtube></p>
<h2>Comparing data in the energy dashboard</h2>
<p>Did you use less or more energy than… Yesterday? Last week? Month? Year?
We all want to know if we are on the right track, right?</p>
<p>This release introduces the capability to compare energy data against the
previous period directly from the energy dashboard!</p>
<p>Clicking the “Compare data” button in the top right of your
<a href='https://my.home-assistant.io/redirect/energy' class='my' target='_blank'>energy dashboard</a> will instantly compare the period you
are currently viewing with the same period before that. It adds the
previous period to the graphs using a lighter bar color.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-06/energy-compare-usage.png' alt='Screenshot showing energy usage being compared from last week with the week before that'>
<p>In the above screenshot, my energy usage of this week is compared with the week
before; since, a week is selected as the period to view.</p>
<p>The same also works for other graphs; for example, the screenshot below
shows the solar energy production for today compared with yesterday.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-06/energy-compare-solar.png' alt='Screenshot showing solar energy production data compared with the day before'>
<p><a href='https://my.home-assistant.io/redirect/energy' class='my badge' target='_blank'><img src='https://my.home-assistant.io/badges/energy.svg' /></a></p>
<h2>Logbooks have never been better!</h2>
<p>The logbook received a significant overhaul this release. The backend of the
logbook got a lot of optimizations. Data processing has been polished and
optimized to make logbooks load super fast, creating an experience
that is as smooth as possible.</p>
<p>We added the logbook to more places as well. It is now shown on device and
area pages. That way, you can instantly see the last activity for that specific
device or, in case of an area, of all the devices in that area.</p>
<p>And on top of all that: Logbooks are now live! You can see events live on your
screen, while the logbook updates instantly when events are happing!</p>
<p class='img'>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-06/live-device-logbook.gif' alt='Screen recording showing a live logbook feed on the device page'>
The logbook on this device page, when motion is detected the logbook updates in real-time.
</p>
<p>Also new: The logbook can now show device events too! This is helpful
for entity-less logs, like device events of button presses. <a href="http://www.home-assistant.io/integrations/deconz">deCONZ</a>,
<a href="http://www.home-assistant.io/integrations/elkm1">Elk-M1 Control</a>, <a href="http://www.home-assistant.io/integrations/hue">Philips Hue</a>, <a href="http://www.home-assistant.io/integrations/lutron_caseta">Lutron Caséta</a>, <a href="http://www.home-assistant.io/integrations/shelly">Shelly</a>,
and the <a href="http://www.home-assistant.io/integrations/mobile_app">Mobile App</a> added support for this new feature.</p>
<p>Thanks <a href="https://github.com/bdraco">@bdraco</a>, for your hard work on the logbooks!</p>
<h2>Streamlining the OAuth2 experience</h2>
<p>Home Assistant has quite a few integrations that use the OAuth2 standard
to authenticate your Home Assistant instance with a third-party service. Some
examples are Home Connect, Spotify, Netatmo, Xbox, Withings, and Google Calendars.</p>
<p>OAuth2 can be pretty complex, as services often implement additional
requirements on top of the OAuth2 specifications. So, if “OAuth Redirect URI”
gives you the shivers, you definitely will know what drama we are talking about.
Additionally, for most, you need to register a developer account, create
an application, get the client ID and secret and configure YAML 🥴</p>
<p>This release aims to make this all easier and streamline this experience A LOT.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-06/application-credentials.png' alt='Screenshot showing adding OAuth2 application credentials can now be done via the UI'>
<p><a href="https://github.com/allenporter">@allenporter</a> has been busy adding support for managing OAuth2
application credentials directly from the UI! (screenshot above.) This removes
the need to edit YAML (and restart Home Assistant). Additionally, the UI
will now guide you through this all when setting up the integration. Awesome!</p>
<p>Also, we have extended My Home Assistant to be able to support OAuth2
authentication redirects! It’s fast, simple, privacy-aware, and nothing
for you to set up. It just works! No more redirect URI frustrations. 🤘</p>
<p>We have updated the documentation of all integrations using OAuth2 to reflect
all these changes.</p>
<h2>Calendar triggers with offsets</h2>
<p>The last release, <a href="http://www.home-assistant.io/blog/2022/05/04/release-20225/">we introduced the calendar trigger</a>;
in this release, the calendar trigger is extended with offset support!</p>
<p>Offsets can be helpful for use in automations, as it allows you to alert
ahead of the actual calendar event happening. For example, triggering a
notification the evening before trash day, a birthday reminder a week early,
or a reminder 15 minutes before a meeting.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-06/calendar-offset.png' alt='Screenshot showing the calendar trigger using an offset'>
<div class='note' data-title=" / Pro-tip!">
  <b>Use the calendar trigger to schedule anything in your home!</b><br>
  <br>
  Create a calendar and add events to it as a schedule, for example, for your
  thermostat or lights, and use an automation to trigger and adjust
  these devices based on the plan you have defined in that calendar!<br>
  <br>
  This way, you can create complex schedules with repeating patterns
  and schedule exceptions, with the ease of using your calendar.
</div>
<h2>Improved scene editor</h2>
<p>Scenes are great for restoring states of multiple devices to a previous state,
e.g., to quickly set a lighting mood in a room, using an automation, script,
or a button on your dashboard.</p>
<p>When creating scenes, it creates those scenes based on the state of a whole
device (including all of its entities). However, what if you want to add
a specific entity to a scene and not the entire device?</p>
<p>Well, now you can!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-06/scene-editor-individual-entities.png' alt='Screenshot showing the scene editor adding a single entity to the scene'>
<p>It is a small but welcome improvement that makes it possible to include single
entities into a scene without adding the whole device. Of course, you can also
still add the entire device if you want to.</p>
<h2>Database performance</h2>
<p>This release builds on <a href="http://www.home-assistant.io/blog/2022/04/06/release-20224/#database-performance">the database improvements from 2022.4</a>.
Disk writes have been reduced to preserve SD card lifetimes and new APIs have been added,
which get event/historical data to the frontend even faster.</p>
<p>The database storage format is further optimized, with an additional size
reduction ranging from 25-40% for most installs on top of what has been gained
in previous releases. This is achieved by storing events more efficiently.</p>
<p>Data stored in the database before upgrading to this release isn’t compacted.
The size reduction will occur over time when new data gets recorded, and older
data gets purged.</p>
<p>If you are using SQLite (default) or MySQL, you will benefit from a faster date
parser, which speeds up multi-hour history and logbooks.</p>
<p>We recommend not to miss this release to ensure that future database changes
and migrations will be faster.</p>
<h2>Other noteworthy changes</h2>
<p>There is much more juice in this release; here are some of the other
noteworthy changes this release:</p>
<ul>
<li>The <a href='https://my.home-assistant.io/redirect/system_health' class='my' target='_blank'>System Health</a> menu now shows database
information, including versions and estimated database size. The version
number of the OS Agent is now also listed. Thanks, <a href="https://github.com/bdraco">@bdraco</a> &amp; <a href="https://github.com/ludeeus">@ludeeus</a>.</li>
<li>The “Preload Camera” setting shown on every camera feed has been moved! It
is now part of the entity settings, preventing unintentional toggling.
Thanks <a href="https://github.com/bramkragten">@bramkragten</a>!</li>
<li><a href="https://github.com/goyney">@goyney</a> upgraded the <a href="https://pictogrammers.github.io/@mdi/font/6.7.96/">Material Design Icons</a> to version v6.7.96, providing
us with 100 new, fresh, and really useful icons! Thank you!</li>
<li>The <code>this</code> variable in <a href="http://www.home-assistant.io/integrations/template">template</a> entities is now also available for use in
their actions! Thanks, <a href="https://github.com/emontnemery">@emontnemery</a>.</li>
<li>A big shout out to <a href="https://github.com/yosilevy">@yosilevy</a>, who has been improving support for
RTL languages (Right to Left) in the UI! Thank you!</li>
<li><a href="https://github.com/balloob">@balloob</a> added support for the media browser to the <a href="http://www.home-assistant.io/integrations/gstreamer">GStreamer</a> and
<a href="http://www.home-assistant.io/integrations/vlc">VLC media player</a> integrations.</li>
<li>The <a href="http://www.home-assistant.io/docs/configuration/templating/#time"><code>as_timedelta</code></a> template
filter/function, added by <a href="https://github.com/eifinger">@eifinger</a>, allows you to convert many time strings
(including ISO8601) into a timedelta object. Awesome!</li>
<li>Lots of you asked for it; the “YAML” tab is now the first tab
shown in the developer tools.</li>
<li><a href="https://github.com/Noltari">@Noltari</a> has been extending the <a href="http://www.home-assistant.io/integrations/qnap_qsw">QNAP QSW</a> integration, adding support
for diagnostics, a reboot button, and binary sensors for anomaly detection.</li>
<li>Got a <a href="http://www.home-assistant.io/integrations/ring">Ring</a> doorbell? And want to fool the others in your house someone is
at the door? Now you can! Thanks to <a href="https://github.com/grablair">@grablair</a> you can now trigger the ding!
This is useful for notifications, of course ;)</li>
<li><a href="http://www.home-assistant.io/integrations/tasmota">Tasmota</a> covers now support tilting, thanks <a href="https://github.com/emontnemery">@emontnemery</a>!</li>
<li><a href="https://github.com/rappenze">@rappenze</a> added support for garage doors to <a href="http://www.home-assistant.io/integrations/fibaro">Fibaro</a>, nice!</li>
<li>The <a href="http://www.home-assistant.io/integrations/qrcode/">QR Code</a> integration now works on all installation types,
thanks <a href="https://github.com/cliffordwhansen">@cliffordwhansen</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/venstar">Venstar</a> now has CO2 and IAQ sensors when the thermostat supports it,
awesome <a href="https://github.com/hall">@hall</a>!</li>
<li>Using a <a href="http://www.home-assistant.io/integrations/netgear">NETGEAR</a>? <a href="https://github.com/starkillerOG">@starkillerOG</a> added the speed test sensors!</li>
</ul>
<h2>New Integrations</h2>
<p>We welcome the following new integrations this release:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/application_credentials">Application Credentials</a>, added by<a href="https://github.com/allenporter">@allenporter</a></li>
<li><a href="http://www.home-assistant.io/integrations/baf">Big Ass Fans</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/geocaching">Geocaching</a>, added by <a href="https://github.com/Sholofly">@Sholofly</a> &amp; <a href="https://github.com/reinder83">@reinder83</a></li>
<li><a href="http://www.home-assistant.io/integrations/ialarm_xr">iAlarmXR</a>, added by <a href="https://github.com/bigmoby">@bigmoby</a></li>
<li><a href="http://www.home-assistant.io/integrations/laundrify">laundrify</a>, added by <a href="https://github.com/xLarry">@xLarry</a></li>
<li><a href="http://www.home-assistant.io/integrations/ws66i/">Soundavo WS66i 6-Zone Amplifier</a>, added by <a href="https://github.com/ssaenger">@ssaenger</a></li>
<li><a href="http://www.home-assistant.io/integrations/yolink">YoLink</a>, added by <a href="https://github.com/matrixd2">@matrixd2</a></li>
</ul>
<h2>Integrations now available to set up from the UI</h2>
<p>The following integrations are now available via the Home Assistant UI:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/aladdin_connect">Aladdin Connect</a>, done by <a href="https://github.com/mkmer">@mkmer</a></li>
<li><a href="http://www.home-assistant.io/integrations/here_travel_time">HERE Travel Time</a>, done by <a href="https://github.com/eifinger">@eifinger</a></li>
<li><a href="http://www.home-assistant.io/integrations/slack">Slack</a>, done by <a href="https://github.com/tkdrob">@tkdrob</a></li>
</ul>
<h2>Release 2022.6.1 - June 2</h2>
<ul>
<li>Cleanup and use new MQTT_BASE_SCHEMA constants (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/72283">#72283</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Move MQTT config schemas and client to separate modules (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/71995">#71995</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Update MQTT tests to use the config entry setup (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/72373">#72373</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Remove announce workaround for Sonos (<a href="https://github.com/jjlawren">@jjlawren</a> - <a href="https://github.com/home-assistant/core/pull/72854">#72854</a>) (<a href="http://www.home-assistant.io/integrations/sonos/">sonos docs</a>)</li>
<li>Update frontend to 20220601.0 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/72855">#72855</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
<li>Ensure recorder shuts down when its startup future is canceled out from under it (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72866">#72866</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>)</li>
<li>Fix logbook not setting up with an recorder filter that has empty fields (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72869">#72869</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>) (<a href="http://www.home-assistant.io/integrations/logbook/">logbook docs</a>)</li>
<li>Only present history_stats state as unknown if the time is in the future (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72880">#72880</a>) (<a href="http://www.home-assistant.io/integrations/history_stats/">history_stats docs</a>)</li>
<li>Fix migration of MySQL data when InnoDB is not being used (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72893">#72893</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>)</li>
<li>Fix performance of logbook entity and devices queries with large MySQL databases (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72898">#72898</a>) (<a href="http://www.home-assistant.io/integrations/logbook/">logbook docs</a>)</li>
<li>Fix reload of MQTT yaml config (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/72901">#72901</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Bump yolink-api to 0.0.6 (<a href="https://github.com/matrixd2">@matrixd2</a> - <a href="https://github.com/home-assistant/core/pull/72903">#72903</a>) (<a href="http://www.home-assistant.io/integrations/yolink/">yolink docs</a>)</li>
<li>Fix logging &amp; exit code reporting to S6 on HA shutdown (<a href="https://github.com/nojocodex">@nojocodex</a> - <a href="https://github.com/home-assistant/core/pull/72921">#72921</a>)</li>
<li>Fix bug in caldav and avoid unnecessary copy of dataclass (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/72922">#72922</a>) (<a href="http://www.home-assistant.io/integrations/caldav/">caldav docs</a>)</li>
<li>Fix Hive authentication (<a href="https://github.com/KJonline">@KJonline</a> - <a href="https://github.com/home-assistant/core/pull/72929">#72929</a>) (<a href="http://www.home-assistant.io/integrations/hive/">hive docs</a>)</li>
<li>Only sync when HA is started up as we already sync at startup (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/72940">#72940</a>) (<a href="http://www.home-assistant.io/integrations/cloud/">cloud docs</a>)</li>
<li>Fix misalignments between sql based filtering with the entityfilter based filtering (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72936">#72936</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>)</li>
<li>Only create auto comfort entities for BAF devices that support them (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72948">#72948</a>) (<a href="http://www.home-assistant.io/integrations/baf/">baf docs</a>)</li>
</ul>
<h2>Release 2022.6.2 - June 4</h2>
<ul>
<li>Fix statistics_during_period being incorrectly cached (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72947">#72947</a>) (<a href="http://www.home-assistant.io/integrations/history/">history docs</a>)</li>
<li>Allow <code>log</code> template function to return specified <code>default</code> on math domain error (<a href="https://github.com/XaF">@XaF</a> - <a href="https://github.com/home-assistant/core/pull/72960">#72960</a>)</li>
<li>Bump pynetgear to 0.10.4 (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/72965">#72965</a>) (<a href="http://www.home-assistant.io/integrations/netgear/">netgear docs</a>)</li>
<li>Bump bimmer_connected to 0.9.4 (<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/72973">#72973</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive/">bmw_connected_drive docs</a>)</li>
<li>fjaraskupan: Don’t filter anything in backend (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/72988">#72988</a>) (<a href="http://www.home-assistant.io/integrations/fjaraskupan/">fjaraskupan docs</a>)</li>
<li>Check ISY994 climate for unknown humidity value on Z-Wave Thermostat (<a href="https://github.com/shbatm">@shbatm</a> - <a href="https://github.com/home-assistant/core/pull/72990">#72990</a>) (<a href="http://www.home-assistant.io/integrations/isy994/">isy994 docs</a>)</li>
<li>Fix google calendar bug where expired tokens are not refreshed (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/72994">#72994</a>) (<a href="http://www.home-assistant.io/integrations/google/">google docs</a>)</li>
<li>Provide Sonos media position if duration not available (<a href="https://github.com/jjlawren">@jjlawren</a> - <a href="https://github.com/home-assistant/core/pull/73001">#73001</a>) (<a href="http://www.home-assistant.io/integrations/sonos/">sonos docs</a>)</li>
<li>Bump pypck to 0.7.15 (<a href="https://github.com/alengwenus">@alengwenus</a> - <a href="https://github.com/home-assistant/core/pull/73009">#73009</a>) (<a href="http://www.home-assistant.io/integrations/lcn/">lcn docs</a>)</li>
<li>Fix missing historical context data in logbook for MySQL and PostgreSQL (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73011">#73011</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>)</li>
<li>Fix history stats not comparing all times in UTC (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73040">#73040</a>) (<a href="http://www.home-assistant.io/integrations/history_stats/">history_stats docs</a>)</li>
</ul>
<h2>Release 2022.6.3 - June 6</h2>
<ul>
<li>Throttle multiple requests to the velux gateway (<a href="https://github.com/marcelveldt">@marcelveldt</a> - <a href="https://github.com/home-assistant/core/pull/72974">#72974</a>) (<a href="http://www.home-assistant.io/integrations/velux/">velux docs</a>)</li>
<li>Bump wallbox to 0.4.9 (<a href="https://github.com/hesselonline">@hesselonline</a> - <a href="https://github.com/home-assistant/core/pull/72978">#72978</a>) (<a href="http://www.home-assistant.io/integrations/wallbox/">wallbox docs</a>)</li>
<li>Fix fibaro cover detection (<a href="https://github.com/rappenze">@rappenze</a> - <a href="https://github.com/home-assistant/core/pull/72986">#72986</a>) (<a href="http://www.home-assistant.io/integrations/fibaro/">fibaro docs</a>)</li>
<li>Reduce branching in generated lambda_stmts (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73042">#73042</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>)</li>
<li>Send an empty logbook response when all requested entity_ids are filtered away (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73046">#73046</a>) (<a href="http://www.home-assistant.io/integrations/logbook/">logbook docs</a>)</li>
<li>Bump aiolookup to 0.1.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73048">#73048</a>) (<a href="http://www.home-assistant.io/integrations/lookin/">lookin docs</a>)</li>
<li>Bump simplisafe-python to 2022.06.0 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/73054">#73054</a>) (<a href="http://www.home-assistant.io/integrations/simplisafe/">simplisafe docs</a>)</li>
<li>Fix unhandled exception when RainMachine coordinator data doesn’t exist (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/73055">#73055</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Bump regenmaschine to 2022.06.0 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/73056">#73056</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Fix incompatiblity with live logbook and google_assistant (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73063">#73063</a>) (<a href="http://www.home-assistant.io/integrations/logbook/">logbook docs</a>)</li>
<li>Fix elk attributes not being json serializable (<a href="https://github.com/gwww">@gwww</a> - <a href="https://github.com/home-assistant/core/pull/73096">#73096</a>) (<a href="http://www.home-assistant.io/integrations/elkm1/">elkm1 docs</a>)</li>
<li>Mark counter domain as continuous to exclude it from logbook (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73101">#73101</a>) (<a href="http://www.home-assistant.io/integrations/logbook/">logbook docs</a>)</li>
<li>Tomorrowio utc fix (<a href="https://github.com/lymanepp">@lymanepp</a> - <a href="https://github.com/home-assistant/core/pull/73102">#73102</a>) (<a href="http://www.home-assistant.io/integrations/tomorrowio/">tomorrowio docs</a>)</li>
<li>Remove available property from Kodi (<a href="https://github.com/Bikonja">@Bikonja</a> - <a href="https://github.com/home-assistant/core/pull/73103">#73103</a>) (<a href="http://www.home-assistant.io/integrations/kodi/">kodi docs</a>)</li>
<li>Point iAlarm XR at PyPI fork (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/73143">#73143</a>) (<a href="http://www.home-assistant.io/integrations/ialarm_xr/">ialarm_xr docs</a>)</li>
<li>Fix state_changes_during_period history query when no entities are passed (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73139">#73139</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>)</li>
<li>Remove unused code from logbook (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72950">#72950</a>) (<a href="http://www.home-assistant.io/integrations/logbook/">logbook docs</a>)</li>
</ul>
<h2>Release 2022.6.4 - June 7</h2>
<ul>
<li>Fix errors when unjoining multiple Sonos devices simultaneously (<a href="https://github.com/jjlawren">@jjlawren</a> - <a href="https://github.com/home-assistant/core/pull/73133">#73133</a>) (<a href="http://www.home-assistant.io/integrations/sonos/">sonos docs</a>)</li>
<li>Bump async-upnp-client==0.31.1 (<a href="https://github.com/StevenLooman">@StevenLooman</a> - <a href="https://github.com/home-assistant/core/pull/73135">#73135</a>) (<a href="http://www.home-assistant.io/integrations/upnp/">upnp docs</a>) (<a href="http://www.home-assistant.io/integrations/yeelight/">yeelight docs</a>) (<a href="http://www.home-assistant.io/integrations/dlna_dmr/">dlna_dmr docs</a>) (<a href="http://www.home-assistant.io/integrations/samsungtv/">samsungtv docs</a>) (<a href="http://www.home-assistant.io/integrations/ssdp/">ssdp docs</a>) (<a href="http://www.home-assistant.io/integrations/dlna_dms/">dlna_dms docs</a>)</li>
<li>Use default None for voltage property of FritzDevice in Fritz!Smarthome (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/73141">#73141</a>) (<a href="http://www.home-assistant.io/integrations/fritzbox/">fritzbox docs</a>)</li>
<li>Fix KeyError from ESPHome media players on startup (<a href="https://github.com/jesserockz">@jesserockz</a> - <a href="https://github.com/home-assistant/core/pull/73149">#73149</a>) (<a href="http://www.home-assistant.io/integrations/esphome/">esphome docs</a>)</li>
<li>Fix bugs with RainMachine zone run time sensors (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/73179">#73179</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Fix creating unique IDs for WiFi switches in Fritz!Tools (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/73183">#73183</a>) (<a href="http://www.home-assistant.io/integrations/fritz/">fritz docs</a>)</li>
<li>Bump pywemo to 0.9.1 (<a href="https://github.com/esev">@esev</a> - <a href="https://github.com/home-assistant/core/pull/73186">#73186</a>) (<a href="http://www.home-assistant.io/integrations/wemo/">wemo docs</a>)</li>
<li>Remove sqlalchemy lambda_stmt usage from history, logbook, and statistics (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73191">#73191</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>) (<a href="http://www.home-assistant.io/integrations/logbook/">logbook docs</a>)</li>
</ul>
<h2>Release 2022.6.5 - June 10</h2>
<ul>
<li>Ensure netgear devices are tracked with one enabled config entry (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/72969">#72969</a>) (<a href="http://www.home-assistant.io/integrations/netgear/">netgear docs</a>)</li>
<li>Bump yolink-api to 0.0.8 (<a href="https://github.com/matrixd2">@matrixd2</a> - <a href="https://github.com/home-assistant/core/pull/73173">#73173</a>) (<a href="http://www.home-assistant.io/integrations/yolink/">yolink docs</a>)</li>
<li>Fix Feedreader Atom feeds using <code>updated</code> date (<a href="https://github.com/d0nni3q84">@d0nni3q84</a> - <a href="https://github.com/home-assistant/core/pull/73208">#73208</a>) (<a href="http://www.home-assistant.io/integrations/feedreader/">feedreader docs</a>)</li>
<li>Hive auth fix for users (<a href="https://github.com/KJonline">@KJonline</a> - <a href="https://github.com/home-assistant/core/pull/73247">#73247</a>) (<a href="http://www.home-assistant.io/integrations/hive/">hive docs</a>)</li>
<li>Fix handling of connection error during Synology DSM setup (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/73248">#73248</a>) (<a href="http://www.home-assistant.io/integrations/synology_dsm/">synology_dsm docs</a>)</li>
<li>Bump regenmaschine to 2022.06.1 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/73250">#73250</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Improve Netgear logging (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/73274">#73274</a>) (<a href="http://www.home-assistant.io/integrations/netgear/">netgear docs</a>)</li>
<li>Fix polling frequency for Starling integration (<a href="https://github.com/Dullage">@Dullage</a> - <a href="https://github.com/home-assistant/core/pull/73282">#73282</a>) (<a href="http://www.home-assistant.io/integrations/starlingbank/">starlingbank docs</a>)</li>
<li>Fix reloading themes crashing if no themes configured (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/73287">#73287</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
<li>Bump version of pyunifiprotect to 3.9.0 (<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/73168">#73168</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect/">unifiprotect docs</a>)</li>
<li>Bumps version of pyunifiprotect to 3.9.1 (<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/73252">#73252</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect/">unifiprotect docs</a>)</li>
<li>Bumps version of pyunifiprotect to 3.9.2 to fix compat with protect 2.1.1 (<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/73299">#73299</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect/">unifiprotect docs</a>)</li>
<li>Fix initial tilt value of MQTT cover (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/73308">#73308</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Fix wallbox sensor rounding (<a href="https://github.com/hesselonline">@hesselonline</a> - <a href="https://github.com/home-assistant/core/pull/73310">#73310</a>) (<a href="http://www.home-assistant.io/integrations/wallbox/">wallbox docs</a>)</li>
<li>Improve MQTT reload performance (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/73313">#73313</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Guard MySQL size calculation returning None (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/73331">#73331</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>)</li>
</ul>
<h2>Release 2022.6.6 - June 14</h2>
<ul>
<li>Filter out forced updates in live logbook when the state has not changed (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73335">#73335</a>) (<a href="http://www.home-assistant.io/integrations/logbook/">logbook docs</a>)</li>
<li>Fix zwave_js add node schemas (<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/73343">#73343</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Hive Bump pyhiveapi to 0.5.10 for credentials fix (<a href="https://github.com/KJonline">@KJonline</a> - <a href="https://github.com/home-assistant/core/pull/73365">#73365</a>) (<a href="http://www.home-assistant.io/integrations/hive/">hive docs</a>)</li>
<li>Fix reload race in yeelight when updating the ip address (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73390">#73390</a>) (<a href="http://www.home-assistant.io/integrations/yeelight/">yeelight docs</a>)</li>
<li>Only update unifiprotect ips from discovery when the console is offline (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73411">#73411</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect/">unifiprotect docs</a>)</li>
<li>Fix smart by bond detection with v3 firmware (<a href="https://github.com/marciogranzotto">@marciogranzotto</a> - <a href="https://github.com/home-assistant/core/pull/73414">#73414</a>) (<a href="http://www.home-assistant.io/integrations/bond/">bond docs</a>)</li>
<li>Bump aiohue to 4.4.2 (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/73420">#73420</a>) (<a href="http://www.home-assistant.io/integrations/hue/">hue docs</a>)</li>
<li>Fix fan support in nest, removing FAN_ONLY which isn’t supported (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/73422">#73422</a>) (<a href="http://www.home-assistant.io/integrations/nest/">nest docs</a>)</li>
<li>Guard withings accessing hass.data without it being set (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/73454">#73454</a>) (<a href="http://www.home-assistant.io/integrations/withings/">withings docs</a>)</li>
<li>Fix max_value access for number platform in Overkiz (<a href="https://github.com/tetienne">@tetienne</a> - <a href="https://github.com/home-assistant/core/pull/73479">#73479</a>) (<a href="http://www.home-assistant.io/integrations/overkiz/">overkiz docs</a>)</li>
</ul>
<h2>Release 2022.6.7 - June 22</h2>
<ul>
<li>Ensure metoffice daily are returned once daily (<a href="https://github.com/gordallott">@gordallott</a> - <a href="https://github.com/home-assistant/core/pull/72440">#72440</a>) (<a href="http://www.home-assistant.io/integrations/metoffice/">metoffice docs</a>)</li>
<li>Fix thumbnail issues in Twitch integration (<a href="https://github.com/bergdahl">@bergdahl</a> - <a href="https://github.com/home-assistant/core/pull/72564">#72564</a>) (<a href="http://www.home-assistant.io/integrations/twitch/">twitch docs</a>)</li>
<li>Bump aiobafi6 to 0.6.0 to fix logging performance (<a href="https://github.com/jfroy">@jfroy</a> - <a href="https://github.com/home-assistant/core/pull/73517">#73517</a>) (<a href="http://www.home-assistant.io/integrations/baf/">baf docs</a>) (dependency)</li>
<li>Use IP address instead of hostname in Brother integration (<a href="https://github.com/bieniu">@bieniu</a> - <a href="https://github.com/home-assistant/core/pull/73556">#73556</a>) (<a href="http://www.home-assistant.io/integrations/brother/">brother docs</a>)</li>
<li>Bump growattServer to 1.2.2 (<a href="https://github.com/muppet3000">@muppet3000</a> - <a href="https://github.com/home-assistant/core/pull/73561">#73561</a>) (<a href="http://www.home-assistant.io/integrations/growatt_server/">growatt_server docs</a>) (dependency)</li>
<li>Handle offline generators in oncue (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73568">#73568</a>) (<a href="http://www.home-assistant.io/integrations/oncue/">oncue docs</a>)</li>
<li>Don’t attempt to reload MQTT device tracker (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/73577">#73577</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Fix handling of illegal dates in onvif sensor (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/73600">#73600</a>) (<a href="http://www.home-assistant.io/integrations/onvif/">onvif docs</a>)</li>
<li>Fix voltage and current values for Fritz!DECT smart plugs (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/73608">#73608</a>) (<a href="http://www.home-assistant.io/integrations/fritzbox/">fritzbox docs</a>)</li>
<li>Fix MQTT config schema to ensure correct validation (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/73619">#73619</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Fix calling permanent off with nexia (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73623">#73623</a>) (<a href="http://www.home-assistant.io/integrations/nexia/">nexia docs</a>) (dependency)</li>
<li>Don’t verify ssl certificates for ssdp/upnp devices (<a href="https://github.com/StevenLooman">@StevenLooman</a> - <a href="https://github.com/home-assistant/core/pull/73647">#73647</a>) (<a href="http://www.home-assistant.io/integrations/upnp/">upnp docs</a>) (<a href="http://www.home-assistant.io/integrations/ssdp/">ssdp docs</a>)</li>
<li>Retry on SenseAPIException during sense config entry setup (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73651">#73651</a>) (<a href="http://www.home-assistant.io/integrations/sense/">sense docs</a>)</li>
<li>Fix AmbiClimate services definition (<a href="https://github.com/maxgashkov">@maxgashkov</a> - <a href="https://github.com/home-assistant/core/pull/73668">#73668</a>) (<a href="http://www.home-assistant.io/integrations/ambiclimate/">ambiclimate docs</a>)</li>
<li>Update aiomusiccast (<a href="https://github.com/micha91">@micha91</a> - <a href="https://github.com/home-assistant/core/pull/73694">#73694</a>) (<a href="http://www.home-assistant.io/integrations/yamaha_musiccast/">yamaha_musiccast docs</a>) (dependency)</li>
<li>Fix CSRF token for UniFi (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/73716">#73716</a>) (<a href="http://www.home-assistant.io/integrations/unifi/">unifi docs</a>)</li>
<li>Insteon bug fixes (<a href="https://github.com/teharris1">@teharris1</a> - <a href="https://github.com/home-assistant/core/pull/73791">#73791</a>) (<a href="http://www.home-assistant.io/integrations/insteon/">insteon docs</a>)</li>
<li>Fix Plugwise migration error (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/73812">#73812</a>) (<a href="http://www.home-assistant.io/integrations/plugwise/">plugwise docs</a>)</li>
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
<p>Below is a listing of the breaking changes for this release, per subject or
integration. Click on one of those to read more about the breaking change
for that specific item.</p>
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
      MQTT 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_0" hidden>
<p>Defining manually configured MQTT entities directly under the respective
platform keys (e.g., <code>fan</code>, <code>light</code>, <code>sensor</code>, etc.) is deprecated, and support
will be removed in Home Assistant Core 2022.9.</p>
<p>Manually configured MQTT entities should now be defined under the <code>mqtt</code>
configuration key in <code>configuration.yaml</code> instead of under the platform key.</p>
<p>As an example, this is now deprecated:</p>
<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight"><code data-lang="yaml"><span class="na">sensor</span><span class="pi">:</span>
  <span class="pi">-</span> <span class="na">platform</span><span class="pi">:</span> <span class="s2">"</span><span class="s">mqtt"</span>
    <span class="na">name</span><span class="pi">:</span> <span class="s2">"</span><span class="s">My</span><span class="nv"> </span><span class="s">sensor"</span>
    <span class="na">state_topic</span><span class="pi">:</span> <span class="s2">"</span><span class="s">some-state-topic"</span>
</code></pre></div></div>
<p>The configuration needs to be updated to this format:</p>
<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight"><code data-lang="yaml"><span class="na">mqtt</span><span class="pi">:</span>
  <span class="na">sensor</span><span class="pi">:</span>
    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s2">"</span><span class="s">My</span><span class="nv"> </span><span class="s">sensor"</span>
      <span class="na">state_topic</span><span class="pi">:</span> <span class="s2">"</span><span class="s">some-state-topic"</span>
</code></pre></div></div>
<p>(<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/71676">#71676</a> <a href="https://github.com/home-assistant/core/pull/72183">#72183</a> <a href="https://github.com/home-assistant/core/pull/72281">#72281</a> <a href="https://github.com/home-assistant/core/pull/72249">#72249</a> <a href="https://github.com/home-assistant/core/pull/72271">#72271</a> <a href="https://github.com/home-assistant/core/pull/72167">#72167</a> <a href="https://github.com/home-assistant/core/pull/72165">#72165</a> <a href="https://github.com/home-assistant/core/pull/72251">#72251</a> <a href="https://github.com/home-assistant/core/pull/72279">#72279</a> <a href="https://github.com/home-assistant/core/pull/72268">#72268</a> <a href="https://github.com/home-assistant/core/pull/72272">#72272</a> <a href="https://github.com/home-assistant/core/pull/72273">#72273</a> <a href="https://github.com/home-assistant/core/pull/72274">#72274</a> <a href="https://github.com/home-assistant/core/pull/72278">#72278</a> <a href="https://github.com/home-assistant/core/pull/72270">#72270</a>) (<a href="http://www.home-assistant.io/integrations/mqtt">documentation</a>)</p>
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
      Template filter/function defaults 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_1" hidden>
<p>The following template filters and functions will now error instead of returning
the input if the input is invalid and no default value is specified:</p>
<ul>
<li><code>acos</code></li>
<li><code>as_timestamp</code></li>
<li><code>asin</code></li>
<li><code>atan</code></li>
<li><code>atan2</code></li>
<li><code>cos</code></li>
<li><code>float</code></li>
<li><code>int</code></li>
<li><code>log</code></li>
<li><code>multiply</code></li>
<li><code>round</code></li>
<li><code>sin</code></li>
<li><code>sqrt</code></li>
<li><code>strptime</code></li>
<li><code>tan</code></li>
<li><code>timestamp_custom</code></li>
<li><code>timestamp_local</code></li>
<li><code>timestamp_utc</code></li>
</ul>
<p>Examples:</p>
<ul>
<li><code>{{ &quot;abc&quot; | float }}</code>: Will fail to render</li>
<li><code>{{ &quot;abc&quot; | float(default=5) }}</code>: Will render as 5, no warning will be logged</li>
<li><code>{{ float(&quot;abc&quot;) }}</code>: Will fail to render</li>
<li><code>{{ float(&quot;abc&quot;, default=5) }}</code>: Will render as 5, no warning will be logged</li>
</ul>
<p>(<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/71687">#71687</a>) (<a href="http://www.home-assistant.io/docs/configuration/templating/#numeric-functions-and-filters">documentation</a>)</p>
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
      OAuth2 (re-)authentications 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_2" hidden>
<p>Home Assistant will now use My Home Assistant to redirect the OAuth2 callback
over.</p>
<p>If you need to re-authenticate with an existing OAuth2 application in the future,
you might need to adjust the external application configuration. Please check
the documentation of the specific integration on how to configure this.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/72449">#72449</a>) (<a href="http://www.home-assistant.io/integrations/my">documentation</a>)</p>
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
      Home Assistant Container 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_3" hidden>
<p>If you run Home Assistant Container in Docker (e.g., using Portainer,
Docker (Compose), QNAP, and others), please make sure you are not specifying
an init process.</p>
<p>This can be an <code>init</code> configuration option in your Docker management tools or
Docker Compose, or the <code>--init</code> command line flag on the raw Docker command.
These should <strong>NOT</strong> be set, as Home Assistant ships with the S6 init system.</p>
<p>While you are at it, make sure you also do not set a <code>cmd</code> or <code>entrypoint</code>.
Setting these are not breaking, however, you should not set them.</p>
<p>(<a href="https://github.com/pvizeli">@pvizeli</a> - <a href="https://github.com/home-assistant/core/pull/72425">#72425</a>) (<a href="http://www.home-assistant.io/installation">documentation</a>)</p>
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
      1-Wire 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_4" hidden>
<p>Using the 1-Wire via SysBus, previously deprecated, has been removed;
this integration is being adjusted to comply with Architectural Decision
Record 0019; more information can be found here:</p>
<p><a href="https://github.com/home-assistant/architecture/blob/master/adr/0019-GPIO.md">https://github.com/home-assistant/architecture/blob/master/adr/0019-GPIO.md</a></p>
<p>ℹ️ Using the 1-Wire via OWServer is still supported!</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/71232">#71232</a>) (<a href="http://www.home-assistant.io/integrations/onewire">documentation</a>)</p>
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
      Aladdin Connect 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_5" hidden>
<p>The Aladdin Connect integration migrated to configuration
via the UI. Configuring Aladdin Connect via YAML configuration
has been deprecated and will be removed in a future Home Assistant release.</p>
<p>Your existing YAML configuration is automatically imported on upgrade to this
release; and thus can be safely removed from your YAML configuration
after upgrading.</p>
<p>(<a href="https://github.com/mkmer">@mkmer</a> - <a href="https://github.com/home-assistant/core/pull/68304">#68304</a>) (<a href="http://www.home-assistant.io/integrations/aladdin_connect">documentation</a>)</p>
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
      BMW Connected Drive 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_6" hidden>
<p>The <code>binary_sensor.&lt;your_vehicle&gt;_lights_parking</code> has been removed. It is not
provided by API anymore.</p>
<p>The following sensors have been renamed. Existing sensors with historical data
and automations should be migrated automatically:</p>
<ul>
<li><code>sensor.&lt;your_vehicle&gt;_charging_level_hv</code> to <code>sensor.&lt;your_vehicle&gt;_remaining_battery_percent</code></li>
<li><code>sensor.&lt;your_vehicle&gt;_fuel_percent</code> to <code>sensor.&lt;your_vehicle&gt;_remaining_fuel_percent</code></li>
</ul>
<p>(<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/71827">#71827</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive">documentation</a>)</p>
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
      Deluge 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_7" hidden>
<p>The previously deprecated YAML configuration of the Deluge
integration has been removed.</p>
<p>Deluge is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/71487">#71487</a>) (<a href="http://www.home-assistant.io/integrations/deluge">documentation</a>)</p>
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
      Discord 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_8" hidden>
<p>The previously deprecated YAML configuration of the Discord
integration has been removed.</p>
<p>Discord is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/71696">#71696</a>) (<a href="http://www.home-assistant.io/integrations/discord">documentation</a>)</p>
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
      DuneHD 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_9" hidden>
<p>The previously deprecated YAML configuration of the DuneHD
integration has been removed.</p>
<p>DuneHD is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/71694">#71694</a>) (<a href="http://www.home-assistant.io/integrations/dunehd">documentation</a>)</p>
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
      File Size 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_10" hidden>
<p>The previously deprecated YAML configuration of the File Size
integration has been removed.</p>
<p>File Size is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/71692">#71692</a>) (<a href="http://www.home-assistant.io/integrations/filesize">documentation</a>)</p>
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
      Google Calendars 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_11" hidden>
<p>The configuration of the OAuth application credentials for the Google Calendars
integration has migrated to configuration via the UI. Configuring Google Calendars
OAuth application credentials via YAML configuration has been deprecated
and will be removed in a future Home Assistant release.</p>
<p>Your existing OAuth application credentials in the YAML configuration is
automatically imported on upgrade to this release; and thus can be safely
removed from your YAML configuration after upgrading.</p>
<p>All entity tracking state has been migrated to use the standard Home Assistant
entity enable/disable features in the user interface and system options.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/72288">#72288</a>) (<a href="http://www.home-assistant.io/integrations/google">documentation</a>)</p>
<hr />
<p>The <code>found_calendar</code> service has been removed from Google Calendars.
This service is an internal implementation detail of the integration
used for creating calendars found from the API,
which is now no longer exposed as a service.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/72260">#72260</a>) (<a href="http://www.home-assistant.io/integrations/google">documentation</a>)</p>
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
      HERE Travel Time 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_12" hidden>
<p>The HERE Travel Time integration migrated to configuration
via the UI. Configuring HERE Travel Time via YAML configuration
has been deprecated and will be removed in a future Home Assistant release.</p>
<p>Your existing YAML configuration is automatically imported on upgrade to this
release; and thus can be safely removed from your YAML configuration
after upgrading.</p>
<p>(<a href="https://github.com/eifinger">@eifinger</a> - <a href="https://github.com/home-assistant/core/pull/69212">#69212</a>) (<a href="http://www.home-assistant.io/integrations/here_travel_time">documentation</a>)</p>
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
      Home Connect 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_13" hidden>
<p>The configuration of the OAuth application credentials for the Home Connect
integration has migrated to configuration via the UI. Configuring Home Connect
OAuth application credentials via YAML configuration has been deprecated
and will be removed in a future Home Assistant release.</p>
<p>Your existing OAuth application credentials in the YAML configuration is
automatically imported on upgrade to this release; and thus can be safely
removed from your YAML configuration after upgrading.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/71988">#71988</a>) (<a href="http://www.home-assistant.io/integrations/home_connect">documentation</a>)</p>
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
      Honeywell Lyric 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_14" hidden>
<p>The configuration of the OAuth application credentials for the Honeywell Lyric
integration has migrated to configuration via the UI. Configuring Honeywell Lyric
OAuth application credentials via YAML configuration has been deprecated
and will be removed in a future Home Assistant release.</p>
<p>Your existing OAuth application credentials in the YAML configuration is
automatically imported on upgrade to this release; and thus can be safely
removed from your YAML configuration after upgrading.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/72335">#72335</a>) (<a href="http://www.home-assistant.io/integrations/lyric">documentation</a>)</p>
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
      International Space Station (ISS) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_15" hidden>
<p>The previously deprecated YAML configuration of the International Space Station (ISS)
integration has been removed.</p>
<p>International Space Station (ISS) is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/71693">#71693</a>) (<a href="http://www.home-assistant.io/integrations/iss">documentation</a>)</p>
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
      Jandy iAqualink 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_16" hidden>
<p>The previously deprecated YAML configuration of the Jandy iAqualink
integration has been removed.</p>
<p>Jandy iAqualink is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/72404">#72404</a>) (<a href="http://www.home-assistant.io/integrations/iaqualink">documentation</a>)</p>
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
      KNX 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_17" hidden>
<p>A new configuration key for KNX covers <code>invert_updown</code> can be set to
invert the up-down payload (binary) of covers independently of the
position percentage.</p>
<p>Previously up-down (<code>move_long_address</code>) payloads were inverted
when <code>invert_position: true</code> was configured. This now only inverts
the <code>position_address</code> and <code>position_state_address</code> payloads (%).</p>
<p>If you have used <code>invert_position: true</code> for covers, you would need to
add the new key to your YAML config to have the same behaviour as before.</p>
<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight"><code data-lang="yaml"><span class="na">knx</span><span class="pi">:</span>
  <span class="na">cover</span><span class="pi">:</span>
    <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s2">"</span><span class="s">Example</span><span class="nv"> </span><span class="s">cover"</span>
      <span class="na">move_long_address</span><span class="pi">:</span> <span class="s2">"</span><span class="s">3/0/0"</span>
      <span class="na">move_short_address</span><span class="pi">:</span> <span class="s2">"</span><span class="s">3/0/1"</span>
      <span class="na">position_address</span><span class="pi">:</span> <span class="s2">"</span><span class="s">3/0/3"</span>
      <span class="na">position_state_address</span><span class="pi">:</span> <span class="s2">"</span><span class="s">3/0/2"</span>
      <span class="na">invert_updown</span><span class="pi">:</span> <span class="no">true</span>  <span class="c1"># &lt;- add this line to keep inversion of up/down payload</span>
      <span class="na">invert_position</span><span class="pi">:</span> <span class="no">true</span>
</code></pre></div></div>
<p>(<a href="https://github.com/farmio">@farmio</a> - <a href="https://github.com/home-assistant/core/pull/72012">#72012</a>) (<a href="http://www.home-assistant.io/integrations/knx">documentation</a>)</p>
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
      Litter-Robot 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_18" hidden>
<p>The Litter-Robot vacuum entity will now enter an unavailable state when the
robot hasn’t sent an update recently.</p>
<p>(<a href="https://github.com/natekspencer">@natekspencer</a> - <a href="https://github.com/home-assistant/core/pull/70810">#70810</a>) (<a href="http://www.home-assistant.io/integrations/litterrobot">documentation</a>)</p>
<hr />
<p>The <code>clean_cycle_wait_time_minutes</code>, <code>status_code</code>, and <code>last_seen</code> attributes
have been removed from the vacuum entity as they are now available as individual
entities.</p>
<p>(<a href="https://github.com/natekspencer">@natekspencer</a> - <a href="https://github.com/home-assistant/core/pull/71760">#71760</a>) (<a href="http://www.home-assistant.io/integrations/litterrobot">documentation</a>)</p>
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
      Logbook 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_19" hidden>
<p>If the stop and start event were fired within the exact same minute, we would
previously show it as <code>restarted</code>  in the logbook. When events crossed the
minute boundary (i.e., we fired stop at 11:30:59 and start at 11:31:04), it
would show separately as <code>stopped</code> and then <code>start</code>.</p>
<p>This change eliminates the inconstancy by always showing them as <code>stopped</code> and
<code>started</code>, which allows us to simplify how we generate logbook rows.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/71600">#71600</a>) (<a href="http://www.home-assistant.io/integrations/logbook">documentation</a>)</p>
<hr />
<p>The entity name in the logbook is now always shown with the current name instead
of the old name if it was renamed. If the entity no longer exists, we now show
the original entity_id instead, which aligns with the warning icon we already
display in the frontend when a state is missing or removed.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/71895">#71895</a>) (<a href="http://www.home-assistant.io/integrations/logbook">documentation</a>)</p>
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
      Neato Botvac 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_20" hidden>
<p>The configuration of the OAuth application credentials for the Neato Botvac
integration has migrated to configuration via the UI. Configuring Neato Botvac
OAuth application credentials via YAML configuration has been deprecated
and will be removed in a future Home Assistant release.</p>
<p>Your existing OAuth application credentials in the YAML configuration is
automatically imported on upgrade to this release; and thus can be safely
removed from your YAML configuration after upgrading.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/72175">#72175</a>) (<a href="http://www.home-assistant.io/integrations/neato">documentation</a>)</p>
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
      Netatmo 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_21" hidden>
<p>The configuration of the OAuth application credentials for the Netatmo
integration has migrated to configuration via the UI. Configuring Netatmo
OAuth application credentials via YAML configuration has been deprecated
and will be removed in a future Home Assistant release.</p>
<p>Your existing OAuth application credentials in the YAML configuration is
automatically imported on upgrade to this release; and thus can be safely
removed from your YAML configuration after upgrading.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/71884">#71884</a>) (<a href="http://www.home-assistant.io/integrations/netatmo">documentation</a>)</p>
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
      Nexia 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_22" hidden>
<p>The zone status attribute has been removed from the climate entity. The zone
status is already available as a separate sensor, and it was producing duplicate
data in the state machine.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72176">#72176</a>) (<a href="http://www.home-assistant.io/integrations/nexia">documentation</a>)</p>
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
      Nexia/American Standard/Trane 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_23" hidden>
<p>Remove non-standard <code>humidify_supported</code> and <code>dehumidify_supported</code> attributes
from Nexia.</p>
<p>These attributes can already be inferred from the <code>dehumidify_setpoint</code>
or <code>humidify_setpoint</code> attributes.</p>
<p>As they took up space in the database every time any of the values changes, they
have now been removed.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/71248">#71248</a>) (<a href="http://www.home-assistant.io/integrations/nexia">documentation</a>)</p>
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
      nVent RAYCHEM SENZ 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_24" hidden>
<p>The configuration of the OAuth application credentials for the nVent RAYCHEM SENZ
integration has migrated to configuration via the UI. Configuring nVent RAYCHEM SENZ
OAuth application credentials via YAML configuration has been deprecated
and will be removed in a future Home Assistant release.</p>
<p>Your existing OAuth application credentials in the YAML configuration is
automatically imported on upgrade to this release; and thus can be safely
removed from your YAML configuration after upgrading.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/72338">#72338</a>) (<a href="http://www.home-assistant.io/integrations/senz">documentation</a>)</p>
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
      Recorder 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_25" hidden>
<p>De-duplicate event data into a new <code>event_data</code> table</p>
<p>Data is no longer stored in the <code>event.event_data</code> column and instead
deduplicated into the <code>event_data.shared_data</code> column and joined on
<code>event.data_id==event_data.data_id</code>.</p>
<p>This is the same as we did with state attributes in 2022.4, as we can reduce
the size of the events table by ~8-14% on avg.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/71135">#71135</a>) (<a href="http://www.home-assistant.io/integrations/recorder">documentation</a>)</p>
<hr />
<ul>
<li>All the data needed to fetch a <code>state_changed</code> event is now available in
the <code>states</code> table (along with <code>state_attributes</code> if needed).</li>
<li>Reduces overall database size by ~27%</li>
<li>Refactors logbook to work without the need for the <code>state_changed</code> <code>events</code>
rows (fetched from <code>states</code>).</li>
<li>Refactors purge to work without the need for linking the <code>state_changed</code> event.</li>
<li>Origin is now stored as an integer.</li>
</ul>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/71165">#71165</a>) (<a href="http://www.home-assistant.io/integrations/recorder">documentation</a>)</p>
<hr />
<p>The following attributes are no longer recorded for <code>group</code> entities:</p>
<ul>
<li><code>entity_id</code></li>
<li><code>order</code></li>
<li><code>auto</code></li>
</ul>
<p>These attributes provide no historical value since they are already
contained in the YAML configuration and only fill up the database.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/71256">#71256</a>) (<a href="http://www.home-assistant.io/integrations/recorder">documentation</a>)</p>
<hr />
<p>The recorder now refuses to set up if the database dialect is unsupported
or if the database dialect is supported, but the version is too old.</p>
<p>(<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/70888">#70888</a>) (<a href="http://www.home-assistant.io/integrations/recorder">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_26" aria-expanded="false">
      Scrape 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_26" hidden>
<p>The scape integration performance has been improved by using the <code>lxml</code> parser.</p>
<p>Testing (YMMV based on content and nesting):</p>
<ul>
<li>For large documents (5000k tags) it was at least an order of magnitude faster.</li>
<li>For small documents, it was ~3x faster.</li>
</ul>
<p>Users who are <strong>not</strong> using Home Assistant Operating System or Home Assistant
Container will need to ensure <code>libxml2</code> and <code>libxslt</code> are installed.</p>
<p>For example, on Debian based Home Assistant Core installs, run:
<code>sudo apt install libxml2</code></p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/71087">#71087</a>) (<a href="http://www.home-assistant.io/integrations/scrape">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_27" aria-expanded="false">
      Slack 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_27" hidden>
<p>The Slack integration migrated to configuration
via the UI. Configuring Slack via YAML configuration
has been deprecated and will be removed in a future Home Assistant release.</p>
<p>Your existing YAML configuration is automatically imported on upgrade to this
release; and thus can be safely removed from your YAML configuration
after upgrading.</p>
<p>(<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/69880">#69880</a>) (<a href="http://www.home-assistant.io/integrations/slack">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_28" aria-expanded="false">
      Somfy 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_28" hidden>
<p>Somfy has replaced their Somfy Open API (cloud-based) with a local API
(which we Home Assistant users absolutely love). Somfy has now decided
to shut down its cloud API after June 21st, 2022.</p>
<p>Please migrate to use the <a href="http://www.home-assistant.io/integrations/overkiz">Overkiz integration</a>
as a replacement.</p>
<p>Unfortunately, a migration to Overkiz is not possible due to differences in the
authentication mechanism.</p>
<p>(<a href="https://github.com/iMicknl">@iMicknl</a> - <a href="https://github.com/home-assistant/core/pull/71653">#71653</a>) (<a href="http://www.home-assistant.io/integrations/somfy">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_29" aria-expanded="false">
      Sonos 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_29" hidden>
<p>The <code>sonos.join</code> and <code>sonos.unjoin</code> services will be removed in 2022.8 in favor
of the standard <code>media_player.join</code> and <code>media_player.unjoin</code> services.</p>
<p>(<a href="https://github.com/jjlawren">@jjlawren</a> - <a href="https://github.com/home-assistant/core/pull/71226">#71226</a>) (<a href="http://www.home-assistant.io/integrations/sonos">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_30" aria-expanded="false">
      Spotify 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_30" hidden>
<p>The configuration of the OAuth application credentials for the Spotify
integration has migrated to configuration via the UI. Configuring Spotify
OAuth application credentials via YAML configuration has been deprecated
and will be removed in a future Home Assistant release.</p>
<p>Your existing OAuth application credentials in the YAML configuration is
automatically imported on upgrade to this release; and thus can be safely
removed from your YAML configuration after upgrading.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/71871">#71871</a>) (<a href="http://www.home-assistant.io/integrations/spotify">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_31" aria-expanded="false">
      Squeezebox (Logitech Media Server) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_31" hidden>
<p>The Squeezebox player synchronization framework has been updated to use the
standard <code>media_player.join</code> and <code>media_player.unjoin</code> services. The
list of synchronized players is now stored in the <code>group_members</code> state
attribute.</p>
<p>The  <code>squeezebox.sync</code> and <code>squeezebox.unsync</code> services are now deprecated,
and will be removed in two releases in favor of the standard
services listed above.</p>
<p>The <code>sync_group</code> state attribute is deprecated in favor of <code>group_members</code>,
and will also be removed in two releases.</p>
<p>(<a href="https://github.com/rajlaud">@rajlaud</a> - <a href="https://github.com/home-assistant/core/pull/70962">#70962</a>) (<a href="http://www.home-assistant.io/integrations/squeezebox">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_32" aria-expanded="false">
      Templates 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_32" hidden>
<p>Support for <code>white_value</code> is deprecated in template <code>light</code> and will be removed
in Home Assistant Core 2022.9.</p>
<p>(<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/71044">#71044</a>) (<a href="http://www.home-assistant.io/integrations/template">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_33" aria-expanded="false">
      Trafikverket Train 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_33" hidden>
<p>The previously deprecated YAML configuration of the Trafikverket Train
integration has been removed.</p>
<p>Trafikverket Train is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> - <a href="https://github.com/home-assistant/core/pull/71410">#71410</a>) (<a href="http://www.home-assistant.io/integrations/trafikverket_train">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_34" aria-expanded="false">
      Universal Devices ISY994 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_34" hidden>
<p>The auxiliary sensors for each Insteon device are now their own sensor entity
instead of an attribute on the parent entity. This makes them easier to find
and allows attributes to be de-duplicated in the database.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/71254">#71254</a>) (<a href="http://www.home-assistant.io/integrations/isy994">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_35" aria-expanded="false">
      Vera 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_35" hidden>
<p>The Vera integration previously migrated to configuration
via the UI. Configuring Vera via YAML configuration
has been deprecated and will be removed in a future Home Assistant release.</p>
<p>Your existing YAML configuration has already been automatically imported;
and thus can be safely removed from your YAML configuration
after upgrading.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/72418">#72418</a>) (<a href="http://www.home-assistant.io/integrations/vera">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_36" aria-expanded="false">
      Version 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_36" hidden>
<p>The Boards “Intel NUC”, “RaspberryPi” (Raspberry Pi 1 devices),
and “RaspberryPi Zero-W” are no longer supported in Home Assistant OS.</p>
<p>They are also no longer available in the version integration.
Please remove the version integrations for those boards.</p>
<p>(<a href="https://github.com/agners">@agners</a> - <a href="https://github.com/home-assistant/core/pull/72085">#72085</a>) (<a href="http://www.home-assistant.io/integrations/version">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_37" aria-expanded="false">
      Viessmann ViCare 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_37" hidden>
<p>The previously deprecated YAML configuration of the Viessmann ViCare
integration has been removed.</p>
<p>Viessmann ViCare is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/72408">#72408</a>) (<a href="http://www.home-assistant.io/integrations/vicare">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_38" aria-expanded="false">
      Withings 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_38" hidden>
<p>The configuration of the OAuth application credentials for the Withings
integration has migrated to configuration via the UI. Configuring Withings
OAuth application credentials via YAML configuration has been deprecated
and will be removed in a future Home Assistant release.</p>
<p>Your existing OAuth application credentials in the YAML configuration is
automatically imported on upgrade to this release; and thus can be safely
removed from your YAML configuration after upgrading.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/71990">#71990</a>) (<a href="http://www.home-assistant.io/integrations/withings">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_39" aria-expanded="false">
      WLED 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_39" hidden>
<p>The previously deprecated WLED update button entity has been removed.
Please use the newly provided <code>update</code> entity instead.</p>
<p>(<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/71775">#71775</a>) (<a href="http://www.home-assistant.io/integrations/wled">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_40" aria-expanded="false">
      Xbox 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_40" hidden>
<p>The configuration of the OAuth application credentials for the Xbox
integration has migrated to configuration via the UI. Configuring Xbox
OAuth application credentials via YAML configuration has been deprecated
and will be removed in a future Home Assistant release.</p>
<p>Your existing OAuth application credentials in the YAML configuration is
automatically imported on upgrade to this release; and thus can be safely
removed from your YAML configuration after upgrading.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/71908">#71908</a>) (<a href="http://www.home-assistant.io/integrations/xbox">documentation</a>)</p>
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
    <button class='details-block-title' onclick='showDetails(this)' aria-controls="content_41" aria-expanded="false">
      Z-Wave JS 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_41" hidden>
<p>With this release, you will need to update your zwave-js-server instance.</p>
<ul>
<li>If you use the zwave_js add-on, you need to have at least version <code>0.1.60</code>.</li>
<li>If you use the Z-Wave JS 2 MQTT add-on, you need to have at least version <code>0.41.0</code>.</li>
<li>If you use the zwavejs2mqtt Docker container, you need to have at least version <code>6.10.0</code>.</li>
<li>If you run your own Docker container, or some other installation method,
you will need to update your zwave-js-server instance to at least <code>1.17.0</code>.</li>
</ul>
<p>(<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/72395">#72395</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js">documentation</a>)</p>
</div>
  </div>
</div>
<p>If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
<a href="https://developers.home-assistant.io/blog/">developer blog</a>. The following are the most notable for this release:</p>
<ul>
<li><a href="https://developers.home-assistant.io/blog/2022/05/24/entity_matches_only_removed_logbook_card">Logbook API removal of <code>entity_matches_only</code> flag</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/05/31/media-player-updates/">Media Player updates: enqueue changes, announce added</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/05/12/s6-overlay-base-images">S6-Overlay 3.x update on our docker base images</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/05/03/serviceinfo-model-improvements">ServiceInfo model improvements and deprecations</a></li>
</ul>
<h2>Farewell to the following</h2>
<p>The following integrations are also no longer available as of this release:</p>
<ul>
<li><strong>Raspberry Pi GPIO</strong> has been previously deprecated and now removed.
More information can be found in <a href="https://github.com/home-assistant/architecture/blob/master/adr/0019-GPIO.md">Architectural Decision Record 0019</a>.</li>
</ul>
<h2>All changes</h2>
<p>Of course, there is a lot more in this release. You can find a list of
all changes made here: <a href="http://www.home-assistant.io/changelogs/core-2022.6">Full changelog for Home Assistant Core 2022.6</a></p>
"
link: "https://www.home-assistant.io/blog/2022/06/01/release-20226/"
category:
---
