---
title: "2022.11 - A heck of a release!"
date: 2022-11-02 00:00:00 +0000
dateadded: 2023-02-02 08:54:04 +0100
description: "<p><a href='http://www.home-assistant.io/integrations/#version/2022.11'><img src='http://www.home-assistant.io/images/blog/2022-11/social.png' style='border: 0;box-shadow: none;'></a></p>
<p>Home Assistant Core 2022.11! 🎉</p>
<p>This November already feels a lot like Christmas 🎄, what a heck of a
release! Quite a few suggestions from the <a href="http://www.home-assistant.io/blog/2022/09/30/the-month-of-what-the-heck">Month of “What the Heck?!”</a>
already landed! Ready to unpack the presents? 🎁</p>
<p>Talking about the WTH month, it ended. Well, sort of, at least. It is now closed
for new topics/suggestions, but <a href="https://community.home-assistant.io/c/what-the-heck/56">existing ones</a>
remain open for discussion and can be voted on. I’m curious to see more of
these WTHs being resolved in the upcoming releases.</p>
<p>This release has so much goodness that I have a hard time picking a favorite.
Water usage, maybe? I’m really not sure, so I’m going to cut this intro short.
Let me know your favorite in the comments below!</p>
<p>Enjoy the release!</p>
<p>../Frenck</p>
<p>PS: There will be no release party live stream this month,
instead <a href="https://www.youtube.com/watch?v=D936T1Ze8-4">join us</a> at the
<a href="https://www.youtube.com/watch?v=D936T1Ze8-4">State of the Open Home</a> on
Sunday, November 13, 2022 (11:00 AM PST / 20:00 CET).</p>
<!--more-->
<ul>
<li><a href="#tile-card">Tile card</a></li>
<li><a href="#statistic-card">Statistic card</a></li>
<li><a href="#smarter-reloading-of-automation--scripts">Smarter reloading of automation &amp; scripts</a></li>
<li><a href="#getting-insights-into-water-usage">Getting insights into water usage</a></li>
<li><a href="#color-temperatures-in-kelvin">Color temperatures in Kelvin</a></li>
<li><a href="#long-term-statistics-in-the-entity-dialogs">Long-term statistics in the entity dialogs</a></li>
<li><a href="#the-first-day-of-the-week">The first day of the week</a></li>
<li><a href="#new-templating-features">New templating features</a></li>
<li><a href="#other-noteworthy-changes">Other noteworthy changes</a></li>
<li><a href="#new-integrations">New Integrations</a></li>
<li><a href="#integrations-now-available-to-set-up-from-the-ui">Integrations now available to set up from the UI</a></li>
<li><a href="#release-2022111---november-3">Release 2022.11.1 - November 3</a></li>
<li><a href="#release-2022112---november-8">Release 2022.11.2 - November 8</a></li>
<li><a href="#release-2022113---november-16">Release 2022.11.3 - November 16</a></li>
<li><a href="#release-2022114---november-20">Release 2022.11.4 - November 20</a></li>
<li><a href="#release-2022115---november-30">Release 2022.11.5 - November 30</a></li>
<li><a href="#need-help-join-the-community">Need help? Join the community!</a></li>
<li><a href="#breaking-changes">Breaking Changes</a></li>
<li><a href="#all-changes">All changes</a></li>
</ul>
<h2>Tile card</h2>
<p>This release introduces a new Dashboard card: the “Tile”!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-11/tile-card.png' alt='Screenshot showing a couple of tile cards'>
<p>The tile card is a lovely little card that provides a quick overview of an
entity. The icon can be tapped to toggle the entity, and the rest of the card
brings up the “more info” dialog.</p>
<p><a href="http://www.home-assistant.io/dashboards/tile">Read more about the Tile card in the documentation</a>.</p>
<p>This first iteration of the Tile card is one of the first cards added this
release, that brings in a new style of card into Home Assistant.</p>
<p>Curious to find out what else will be coming? Join us for the State
of the Open Home live stream. <a href="https://www.youtube.com/watch?v=D936T1Ze8-4">Go to YouTube and click the bell 🔔</a>
so you get notified when we go live!</p>
<h2>Statistic card</h2>
<p>More cards! We already have the <a href="http://www.home-assistant.io/dashboards/statistics-graph">Statistics Graph card</a>,
which can be used to display graphs of long-term statistics of an entity.
This release brings the “Statistic” card!</p>
<p>The “Statistic” card, as the name implies, can show a single value of an entity,
based on the long-term statistics stored of that entity.</p>
<p>For example, want to display the average temperature of your living room this
week on your dashboard? The average power usage of your home today? The peak
power production of your solar panels today?</p>
<p>Yes, all of the above, this card can do!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-11/statistic-card.png' alt='Screenshot showing the UI editor of the statistic card and all of its options'>
<p><a href="http://www.home-assistant.io/dashboards/statistic">Read more about the Statistic card in the documentation</a>.</p>
<h2>Smarter reloading of automation &amp; scripts</h2>
<blockquote>
<p><a href="https://community.home-assistant.io/t/wth-do-all-automatons-get-reloaded-when-you-change-any-of-them/467270">WTH do all automations get reloaded when you change any of them?</a></p>
</blockquote>
<p>Good question! And that WTH topic got over 180+ votes as well!</p>
<p>When you change a single automation or script via the editors in the user
interface (or reload your YAML-based ones), they all get reloaded. This
means if they are running, waiting for something (a delay, an event, or for an
entity to be in a certain state for X time), they would all be reset.</p>
<p>This release changes this behavior, resolving that WTH! Only automations that
are actually changed are reloaded. All others will remain running and untouched.</p>
<p>This works when editing an automation in the UI, and even when reloading your
YAML-based automations in any split YAML setup you might have.</p>
<p>Oh, as an added bonus: We applied the exact same for scripts too!</p>
<h2>Getting insights into water usage</h2>
<p>Since Home Assistant added energy management, tracking the usage of water🚰
has been requested quite a bit. It was <a href="https://community.home-assistant.io/t/wth-do-we-have-energy-dashboard-and-no-water-dashboard/467168">raised again during this month of WTH</a>,
and with over 370 votes, it is clearly wanted a lot.</p>
<p>This release adds the ability to monitor your water usage in the energy dashboard!</p>
<p>Although water is not strictly “energy”, it is still a <a href="https://en.wikipedia.org/wiki/Water_resources">valuable resource</a>
to track. It is often tightly coupled with energy usage (like gas) when using
hot water, and the gained insight can help you reduce your ecological footprint
by using less water 🌎.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-11/water-usage.png' alt='The energy dashboard now includes your water usage'>
<p>Some integrations, like <a href="http://www.home-assistant.io/integrations/flo">Flo</a>, <a href="http://www.home-assistant.io/integrations/flume">Flume</a>, and
<a href="http://www.home-assistant.io/integrations/homewizard">HomeWizard Energy</a>, have been adjusted to support
tracking water. Furthermore, you can create your own using templates, MQTT,
or ESPHome (requires <a href="https://www.esphome.io/changelog/2022.10.0.html#release-2022-10-1-october-26">ESPHome version 2022.10.1</a> or newer).</p>
<p><a href="http://www.home-assistant.io/docs/energy/water">Check out the documentation</a> for the hardware options
available to track your water usage or how to build your own water usage
sensors.</p>
<h2>Color temperatures in Kelvin</h2>
<p>Another <a href="https://community.home-assistant.io/t/wth-is-light-temperature-not-in-kelvin/467449">WTH topic</a>
that was voted for almost 150 times! Why doesn’t Home Assistant use Kelvin
for color temperatures?</p>
<p>Well, a small piece of history: The Home Assistant story started using Philips
Hue a long, long time ago. And Hue uses mired for its color temperature,
not Kelvin.</p>
<p>But today, Kelvin is much more commonly used. It is even on packages of the
bulbs you buy. So, as of today, Home Assistant uses Kelvin too!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-11/kelvin.png' alt='Screenshot showing the UI now uses the Kelvin unit to set the color temperature'>
<p>Kelvin is now the primary color temperature unit. This means all lights
and everything color temperature related shown in the user interface,
are now in Kelvin.</p>
<p>We still do support the good old mired. Mireds are still working and
automatically converted when needed, so this is not a breaking change 🎉</p>
<p>Additionally, integrations can now optionally use Kelvin directly if the
device or service accepts that. <a href="http://www.home-assistant.io/integrations/homekit">HomeKit</a>, <a href="http://www.home-assistant.io/integrations/shelly">Shelly</a>,
<a href="http://www.home-assistant.io/integrations/fritzbox">AVM FRITZ!SmartHome</a>, and <a href="http://www.home-assistant.io/integrations/lifx">LIFX</a> are all now using Kelvin natively.</p>
<h2>Long-term statistics in the entity dialogs</h2>
<p>The “more info” dialogs of entities now use long-term statistics for
the graphs shown. It makes those dialogs a lot faster, especially on
mobile devices.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-11/long-term-stats-more-info-dialog.png' alt='Screenshot showing you can now set the day of the week from your user profile page'>
<h2>The first day of the week</h2>
<p>The start of the week can differ for many of us. Your week will start on
Saturday, Sunday, or Monday based on where you are, your locale, or maybe
personal preference. As pointed out in
<a href="https://community.home-assistant.io/t/wth-week-starts-on-sunday/468998">this WTH topic</a>.</p>
<p>Home Assistant will try to auto-detect the correct day to start the week
based on information provided by your browser. However, if it cannot detect it,
or in case you have a personal preference, you can now set it on your user profile.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-11/first-day-of-the-week.png' alt='Screenshot showing you can now set the day of the week from your user profile page'>
<p>You can now set the day to start the week at <a href='https://my.home-assistant.io/redirect/profile' class='my' target='_blank'>in your user profile</a>.</p>
<p>Setting it means that all date inputs, date range pickers, schedules, calendars,
and even time conditions in automations, will take this into account when
displaying weeks.</p>
<h2>New templating features</h2>
<p>We also have some great new advanced features added to templating this release!</p>
<p>Originating from <a href="https://community.home-assistant.io/t/wth-state-based-jinja-functions-are-not-filters-or-tests/468187">this WTH topic</a>:
You can now use the <code>state_attr()</code> and <code>states()</code> functions as a filter,
and the <code>is_state()</code> and <code>is_state_attr()</code> functions can now be used as tests.</p>
<p>The <code>average()</code> function now accepts a default value, which can be helpful
if no average can be calculated.</p>
<p>Lastly, the <code>config_entry_id()</code> template method has been added, which allows
you to look up native IDs of integration configuration entries using one
of the entities it provides.</p>
<p>For more information on these new features and the Home Assistant templating
capabilities in general, <a href="http://www.home-assistant.io/docs/configuration/templating">check out the documentation</a>.</p>
<h2>Other noteworthy changes</h2>
<p>There is much more juice in this release; here are some of the other
noteworthy changes this release:</p>
<ul>
<li>The default dashboard theme has been adjusted to move a little closer to the
new Material Design 3 guidelines. Borders around cards are now outlined
(instead of having a shadow), and corners are a little more rounded.</li>
<li>The automations and the devices dashboards now have icons on each row, making
them look all nice and shiny. Thanks, <a href="https://github.com/bramkragten">@bramkragten</a> &amp; <a href="https://github.com/frenck">@frenck</a>.</li>
<li>The unit of measurement for entities providing Gas can now be changed and
converted from the UI. Thanks, <a href="https://github.com/emontnemery">@emontnemery</a>!</li>
<li>Home Assistant is now discoverable via UPnP/SSDP, meaning your instance will
show up in your Windows Network. Thanks, <a href="https://github.com/StevenLooman">@StevenLooman</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/shelly">Shelly</a> Gen2 devices that sleep (battery-powered) are now supported!
Thanks, <a href="https://github.com/thecode">@thecode</a>!</li>
<li>You can now use sensors providing Gigajoule (GJ) with the energy dashboard.
Thanks, <a href="https://github.com/emontnemery">@emontnemery</a>!</li>
<li>The <a href="http://www.home-assistant.io/integrations/update.mqtt">MQTT</a> integration now has support for <a href="http://www.home-assistant.io/integrations/update">update entities</a>! Thanks, <a href="https://github.com/bieniu">@bieniu</a>!</li>
<li>Media player support was added to the <a href="http://www.home-assistant.io/integrations/jellyfin">Jellyfin</a> integration. Thanks, <a href="https://github.com/Ongy">@Ongy</a>!</li>
<li>The statistics card now supports “week” as a possible period. Thanks, <a href="https://github.com/mib1185">@mib1185</a>!</li>
<li>The <a href="http://www.home-assistant.io/docs/scripts/conditions/#sun-condition">Sun condition</a> can now handle setting both before &amp; after at the same
time. Thanks, <a href="https://github.com/janick">@janick</a>!</li>
<li>The “forked-daapd” project was renamed to “Owntone”. The integration was now
renamed <a href="http://www.home-assistant.io/integrations/forked_daapd">Owntone</a> too! Thanks, <a href="https://github.com/uvjustin">@uvjustin</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/fully_kiosk">Fully Kiosk Browser</a> now provides a service to remotely change URLs on your
wall-mounted tablet. Thanks, <a href="https://github.com/cgarwood">@cgarwood</a>!</li>
<li>The <a href="http://www.home-assistant.io/integrations/xiaomi_miio">Xiaomi Miio</a> integration now supports the Xiaomi Purifier 4 Lite and
the Roborock S7 MaxV. Thanks, <a href="https://github.com/alexdrl">@alexdrl</a> &amp; <a href="https://github.com/starkillerOG">@starkillerOG</a>!</li>
<li>The <a href="http://www.home-assistant.io/integrations/unifi">UniFi</a> integration now provides individual PoE control per port for
the client and device PoE (switches are disabled by default).
Thanks, <a href="https://github.com/Kane610">@Kane610</a>!</li>
<li>The <a href="http://www.home-assistant.io/integrations/homekit_controller">HomeKit Controller</a> integration now supports encrypted Bluetooth
notifications, reducing state change latency and the number of active BLE
connections made to devices.</li>
<li>When setting up a new <a href="http://www.home-assistant.io/integrations/generic">Generic Camera</a>, you will be presented with a preview
of the camera showing you if it works. Nice! Thanks, <a href="https://github.com/davet2001">@davet2001</a>!</li>
<li>Support for <code>unique_id</code>s was added to the following (YAML capable) integrations:
<ul>
<li><a href="http://www.home-assistant.io/integrations/bayesian">Bayesian</a>, added by <a href="https://github.com/HarvsG">@HarvsG</a></li>
<li><a href="http://www.home-assistant.io/integrations/min_max">Min/Max</a>, added by <a href="https://github.com/gjohansson-ST">@gjohansson-ST</a></li>
<li><a href="http://www.home-assistant.io/integrations/scrape">Scrape</a>, added by <a href="https://github.com/epenet">@epenet</a></li>
</ul>
</li>
</ul>
<h2>New Integrations</h2>
<p>We welcome the following new integrations in this release:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/airthings_ble">Airthings BLE</a>, added by <a href="https://github.com/vincegio">@vincegio</a></li>
<li><a href="http://www.home-assistant.io/integrations/oralb">Oral-B</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/snooz">SNOOZ</a>, added by <a href="https://github.com/AustinBrunkhorst">@AustinBrunkhorst</a></li>
</ul>
<h2>Integrations now available to set up from the UI</h2>
<p>The following integrations are now available via the Home Assistant UI:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/apcupsd">APC UPS Daemon</a>, done by <a href="https://github.com/yuxincs">@yuxincs</a></li>
<li><a href="http://www.home-assistant.io/integrations/zamg">Zentralanstalt für Meteorologie und Geodynamik (ZAMG)</a>, done by <a href="https://github.com/killer0071234">@killer0071234</a></li>
</ul>
<h2>Release 2022.11.1 - November 3</h2>
<ul>
<li>Update energyflip-client dependency to 0.2.2 (<a href="https://github.com/dennisschroer">@dennisschroer</a> - <a href="https://github.com/home-assistant/core/pull/81426">#81426</a>) (<a href="http://www.home-assistant.io/integrations/huisbaasje/">huisbaasje docs</a>)</li>
<li>Update pysnooz to 0.8.3 (<a href="https://github.com/AustinBrunkhorst">@AustinBrunkhorst</a> - <a href="https://github.com/home-assistant/core/pull/81428">#81428</a>) (<a href="http://www.home-assistant.io/integrations/snooz/">snooz docs</a>)</li>
<li>Fix eight sleep client creation (<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/81440">#81440</a>) (<a href="http://www.home-assistant.io/integrations/eight_sleep/">eight_sleep docs</a>)</li>
<li>Skip flume devices with location missing (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81441">#81441</a>) (<a href="http://www.home-assistant.io/integrations/flume/">flume docs</a>)</li>
<li>Fix SSDP failure to start on missing URLs (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/81453">#81453</a>) (<a href="http://www.home-assistant.io/integrations/ssdp/">ssdp docs</a>)</li>
<li>Bump aiohomekit to 2.2.14 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81454">#81454</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Update cryptography to 38.0.3 (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/81455">#81455</a>)</li>
<li>Fix HomeKit thermostat to take priority over fans (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81473">#81473</a>) (<a href="http://www.home-assistant.io/integrations/homekit/">homekit docs</a>)</li>
<li>Bump AIOAladdinConnect to 0.1.47 (<a href="https://github.com/mkmer">@mkmer</a> - <a href="https://github.com/home-assistant/core/pull/81479">#81479</a>) (<a href="http://www.home-assistant.io/integrations/aladdin_connect/">aladdin_connect docs</a>)</li>
</ul>
<h2>Release 2022.11.2 - November 8</h2>
<ul>
<li>Fix scrape scan interval (<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/81763">#81763</a>) (<a href="http://www.home-assistant.io/integrations/scrape/">scrape docs</a>)</li>
<li>Fix ignored upnp discoveries not being matched when device changes its unique identifier (<a href="https://github.com/StevenLooman">@StevenLooman</a> - <a href="https://github.com/home-assistant/core/pull/81240">#81240</a>) (<a href="http://www.home-assistant.io/integrations/upnp/">upnp docs</a>)</li>
<li>Align esphome ble client notify behavior to match BlueZ (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81463">#81463</a>) (<a href="http://www.home-assistant.io/integrations/esphome/">esphome docs</a>)</li>
<li>Bump nexia to 2.0.6 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81474">#81474</a>) (<a href="http://www.home-assistant.io/integrations/nexia/">nexia docs</a>)</li>
<li>Bump oralb-ble to 0.10.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81491">#81491</a>) (<a href="http://www.home-assistant.io/integrations/oralb/">oralb docs</a>) (dependency)</li>
<li>Fix lifx.set_state so it works with kelvin and color_temp_kelvin and color names (<a href="https://github.com/Djelibeybi">@Djelibeybi</a> - <a href="https://github.com/home-assistant/core/pull/81515">#81515</a>) (<a href="http://www.home-assistant.io/integrations/lifx/">lifx docs</a>)</li>
<li>Add additional coverage for adding multiple elkm1 instances (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81528">#81528</a>) (<a href="http://www.home-assistant.io/integrations/elkm1/">elkm1 docs</a>)</li>
<li>Bump oralb-ble to 0.10.2 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81537">#81537</a>) (<a href="http://www.home-assistant.io/integrations/oralb/">oralb docs</a>) (dependency)</li>
<li>Bump pyairvisual to 2022.11.1 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/81556">#81556</a>) (<a href="http://www.home-assistant.io/integrations/airvisual/">airvisual docs</a>)</li>
<li>Bump gcal_sync to 4.0.0 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/81562">#81562</a>) (<a href="http://www.home-assistant.io/integrations/google/">google docs</a>) (dependency)</li>
<li>Fix Shelly Plus HT missing battery entity (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/81564">#81564</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Fix watermeter issue for old P1 Monitor versions (<a href="https://github.com/klaasnicolaas">@klaasnicolaas</a> - <a href="https://github.com/home-assistant/core/pull/81570">#81570</a>) (<a href="http://www.home-assistant.io/integrations/p1_monitor/">p1_monitor docs</a>) (dependency)</li>
<li>Bump pylitterbot to 2022.11.0 (<a href="https://github.com/natekspencer">@natekspencer</a> - <a href="https://github.com/home-assistant/core/pull/81572">#81572</a>) (<a href="http://www.home-assistant.io/integrations/litterrobot/">litterrobot docs</a>) (dependency)</li>
<li>Fix HomeKit reset accessory procedure (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81573">#81573</a>) (<a href="http://www.home-assistant.io/integrations/homekit/">homekit docs</a>)</li>
<li>Ensure HomeKit temperature controls appear before fan controls on thermostat accessories (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81586">#81586</a>) (<a href="http://www.home-assistant.io/integrations/homekit/">homekit docs</a>)</li>
<li>Bump ZHA quirks and associated changes (<a href="https://github.com/dmulcahey">@dmulcahey</a> - <a href="https://github.com/home-assistant/core/pull/81587">#81587</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>) (dependency)</li>
<li>Always use Celsius in Shelly integration, part 2 (<a href="https://github.com/bieniu">@bieniu</a> - <a href="https://github.com/home-assistant/core/pull/81602">#81602</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Bump PyXiaomiGateway to 0.14.3 (<a href="https://github.com/syssi">@syssi</a> - <a href="https://github.com/home-assistant/core/pull/81603">#81603</a>) (dependency)</li>
<li>Fix invalid min and max color temp in bad ZHA light devices (<a href="https://github.com/dmulcahey">@dmulcahey</a> - <a href="https://github.com/home-assistant/core/pull/81604">#81604</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Fix repeating SSDP errors by checking address scope_ids and proper hostname (<a href="https://github.com/StevenLooman">@StevenLooman</a> - <a href="https://github.com/home-assistant/core/pull/81611">#81611</a>) (<a href="http://www.home-assistant.io/integrations/upnp/">upnp docs</a>) (<a href="http://www.home-assistant.io/integrations/yeelight/">yeelight docs</a>) (<a href="http://www.home-assistant.io/integrations/dlna_dmr/">dlna_dmr docs</a>) (<a href="http://www.home-assistant.io/integrations/samsungtv/">samsungtv docs</a>) (<a href="http://www.home-assistant.io/integrations/ssdp/">ssdp docs</a>) (<a href="http://www.home-assistant.io/integrations/dlna_dms/">dlna_dms docs</a>) (dependency)</li>
<li>Bump plugwise to v0.25.7 (<a href="https://github.com/bouwew">@bouwew</a> - <a href="https://github.com/home-assistant/core/pull/81612">#81612</a>) (<a href="http://www.home-assistant.io/integrations/plugwise/">plugwise docs</a>) (dependency)</li>
<li>Fix homekit bridge iid allocations (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81613">#81613</a>) (<a href="http://www.home-assistant.io/integrations/homekit/">homekit docs</a>)</li>
<li>Bump venstarcolortouch to 0.19 to fix API rev 3 devices (<a href="https://github.com/garbled1">@garbled1</a> - <a href="https://github.com/home-assistant/core/pull/81614">#81614</a>)</li>
<li>Ignore unspecified addresses from zeroconf (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81620">#81620</a>) (<a href="http://www.home-assistant.io/integrations/zeroconf/">zeroconf docs</a>)</li>
<li>Bump aiohomekit to 2.2.16 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81621">#81621</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>) (dependency)</li>
<li>Bump oralb-ble to 0.13.0 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81622">#81622</a>) (<a href="http://www.home-assistant.io/integrations/oralb/">oralb docs</a>) (dependency)</li>
<li>Fix creating multiple ElkM1 systems with TLS 1.2 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81627">#81627</a>) (<a href="http://www.home-assistant.io/integrations/elkm1/">elkm1 docs</a>)</li>
<li>Fix situation where deCONZ sensor platform setup would fail (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/81629">#81629</a>) (<a href="http://www.home-assistant.io/integrations/deconz/">deconz docs</a>)</li>
<li>Add missing h2 dep to iaqualink (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81630">#81630</a>) (<a href="http://www.home-assistant.io/integrations/iaqualink/">iaqualink docs</a>)</li>
<li>Bump pyatmo to 7.4.0 (<a href="https://github.com/cgtobi">@cgtobi</a> - <a href="https://github.com/home-assistant/core/pull/81636">#81636</a>) (<a href="http://www.home-assistant.io/integrations/netatmo/">netatmo docs</a>)</li>
<li>Fix Bravia TV options flow when device is off (<a href="https://github.com/Drafteed">@Drafteed</a> - <a href="https://github.com/home-assistant/core/pull/81644">#81644</a>) (<a href="http://www.home-assistant.io/integrations/braviatv/">braviatv docs</a>)</li>
<li>Bump aiohomekit to 2.2.17 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81657">#81657</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>) (dependency)</li>
<li>Fix missing RainMachine restrictions switches (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/81673">#81673</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Bump bluetooth-adapters to 0.7.0 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81576">#81576</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>) (dependency)</li>
<li>Bump bleak-retry-connector to 2.8.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81675">#81675</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>) (dependency)</li>
<li>Bump aioesphomeapi to 11.4.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81676">#81676</a>) (<a href="http://www.home-assistant.io/integrations/esphome/">esphome docs</a>) (dependency)</li>
<li>Bump bleak to 0.19.2 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81688">#81688</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>) (dependency)</li>
<li>Restore negative values for shelly power factors (<a href="https://github.com/chemelli74">@chemelli74</a> - <a href="https://github.com/home-assistant/core/pull/81689">#81689</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Bump aiohomekit to 2.2.18 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81693">#81693</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>) (dependency)</li>
<li>Bump aiopyarr to 22.11.0 (<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/81694">#81694</a>) (<a href="http://www.home-assistant.io/integrations/sonarr/">sonarr docs</a>) (<a href="http://www.home-assistant.io/integrations/radarr/">radarr docs</a>) (<a href="http://www.home-assistant.io/integrations/lidarr/">lidarr docs</a>) (dependency)</li>
<li>Fix flapping logbook tests (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81695">#81695</a>) (<a href="http://www.home-assistant.io/integrations/logbook/">logbook docs</a>)</li>
<li>Adjust REST schema validation (<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/81723">#81723</a>) (<a href="http://www.home-assistant.io/integrations/rest/">rest docs</a>)</li>
<li>Fix check for duplicate config entry reauth when context is passed or augmented (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81753">#81753</a>)</li>
<li>Use more efficient async_progress_by_handler call in async_start_reauth (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81757">#81757</a>)</li>
<li>Partially revert google local sync for search cases (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/81761">#81761</a>) (<a href="http://www.home-assistant.io/integrations/google/">google docs</a>)</li>
<li>Fix rest import (<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/81784">#81784</a>) (<a href="http://www.home-assistant.io/integrations/rest/">rest docs</a>)</li>
<li>Update frontend to 20221108.0 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/81787">#81787</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
<li>Retry tibber setup (<a href="https://github.com/ztamas83">@ztamas83</a> - <a href="https://github.com/home-assistant/core/pull/81785">#81785</a>) (<a href="http://www.home-assistant.io/integrations/tibber/">tibber docs</a>)</li>
<li>Fix off by one in HomeKit iid allocator (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81793">#81793</a>) (<a href="http://www.home-assistant.io/integrations/homekit/">homekit docs</a>)</li>
</ul>
<h2>Release 2022.11.3 - November 16</h2>
<ul>
<li>Fix UniFi block client switches on 2022.11.2 (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/81884">#81884</a>) (<a href="http://www.home-assistant.io/integrations/unifi/">unifi docs</a>)</li>
<li>Fix Z-Wave JS cover stop support (<a href="https://github.com/Yukon">@Yukon</a> - <a href="https://github.com/home-assistant/core/pull/78723">#78723</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Fix instability with HomeKit trigger accessories (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/80703">#80703</a>) (<a href="http://www.home-assistant.io/integrations/homekit/">homekit docs</a>)</li>
<li>Fix accelerator sensor in fibaro integration (<a href="https://github.com/rappenze">@rappenze</a> - <a href="https://github.com/home-assistant/core/pull/81237">#81237</a>) (<a href="http://www.home-assistant.io/integrations/fibaro/">fibaro docs</a>)</li>
<li>Fix Fully Kiosk start application service field (<a href="https://github.com/chpego">@chpego</a> - <a href="https://github.com/home-assistant/core/pull/81738">#81738</a>) (<a href="http://www.home-assistant.io/integrations/fully_kiosk/">fully_kiosk docs</a>)</li>
<li>Fix ibeacon source attribute not being updated (<a href="https://github.com/multigcs">@multigcs</a> - <a href="https://github.com/home-assistant/core/pull/81740">#81740</a>) (<a href="http://www.home-assistant.io/integrations/ibeacon/">ibeacon docs</a>)</li>
<li>Upgrade huawei-lte-api to 1.6.7, fixes empty username issues (<a href="https://github.com/scop">@scop</a> - <a href="https://github.com/home-assistant/core/pull/81751">#81751</a>) (<a href="http://www.home-assistant.io/integrations/huawei_lte/">huawei_lte docs</a>) (dependency)</li>
<li>Change life360 timeouts &amp; retries (<a href="https://github.com/pnbruckner">@pnbruckner</a> - <a href="https://github.com/home-assistant/core/pull/81799">#81799</a>) (<a href="http://www.home-assistant.io/integrations/life360/">life360 docs</a>)</li>
<li>Fix switchbot not becoming available again after unavailable (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81822">#81822</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Fix statistic_during_period for data with holes (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/81847">#81847</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>)</li>
<li>Fix rest schema (<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/81857">#81857</a>) (<a href="http://www.home-assistant.io/integrations/rest/">rest docs</a>)</li>
<li>Bump aiohomekit to 2.2.19 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81867">#81867</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>) (dependency)</li>
<li>Fix homekit_controller climate entity not becoming active when changing modes (<a href="https://github.com/Jc2k">@Jc2k</a> - <a href="https://github.com/home-assistant/core/pull/81868">#81868</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Bump oralb-ble to 0.14.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81869">#81869</a>) (<a href="http://www.home-assistant.io/integrations/oralb/">oralb docs</a>) (dependency)</li>
<li>Bump gcal_sync to 4.0.1 to fix Google Calendar config flow (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/81873">#81873</a>) (<a href="http://www.home-assistant.io/integrations/google/">google docs</a>) (dependency)</li>
<li>Fix ZHA configuration APIs (<a href="https://github.com/dmulcahey">@dmulcahey</a> - <a href="https://github.com/home-assistant/core/pull/81874">#81874</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Revert google calendar back to old API for free/busy readers (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/81894">#81894</a>) (<a href="http://www.home-assistant.io/integrations/google/">google docs</a>)</li>
<li>Fix bluetooth adapters with missing firmware patch files not being discovered (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81926">#81926</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Bump aioridwell to 2022.11.0 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/81929">#81929</a>) (<a href="http://www.home-assistant.io/integrations/ridwell/">ridwell docs</a>) (dependency)</li>
<li>Fix esphome bleak client seeing disconnects too late (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81932">#81932</a>) (<a href="http://www.home-assistant.io/integrations/esphome/">esphome docs</a>)</li>
<li>Bump bleak-retry-connector to 2.8.4 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81937">#81937</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>) (dependency)</li>
<li>Bump PySwitchbot to 0.20.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81938">#81938</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>) (dependency)</li>
<li>Fix ONVIF subscription errors (<a href="https://github.com/dgomes">@dgomes</a> - <a href="https://github.com/home-assistant/core/pull/81965">#81965</a>) (<a href="http://www.home-assistant.io/integrations/onvif/">onvif docs</a>)</li>
<li>Bump ZHA quirks lib to 0.0.86 (<a href="https://github.com/dmulcahey">@dmulcahey</a> - <a href="https://github.com/home-assistant/core/pull/81966">#81966</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>) (dependency)</li>
<li>Increasing device usage update interval for Flume (<a href="https://github.com/jeeftor">@jeeftor</a> - <a href="https://github.com/home-assistant/core/pull/81968">#81968</a>) (<a href="http://www.home-assistant.io/integrations/flume/">flume docs</a>)</li>
<li>Bump oralb-ble to 0.14.2 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/81969">#81969</a>) (<a href="http://www.home-assistant.io/integrations/oralb/">oralb docs</a>) (dependency)</li>
<li>Bump gcal_sync 4.0.2 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/82017">#82017</a>) (<a href="http://www.home-assistant.io/integrations/google/">google docs</a>)</li>
<li>Bump airthings-ble to 0.5.3 (<a href="https://github.com/vincegio">@vincegio</a> - <a href="https://github.com/home-assistant/core/pull/82033">#82033</a>) (<a href="http://www.home-assistant.io/integrations/airthings_ble/">airthings_ble docs</a>) (dependency)</li>
<li>Make sure the config_flow key is set for brands (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82038">#82038</a>)</li>
<li>Bump pySwitchbot to 0.20.4 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82055">#82055</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>) (dependency)</li>
<li>Restore color_temp handling for lifx.set_state (<a href="https://github.com/Djelibeybi">@Djelibeybi</a> - <a href="https://github.com/home-assistant/core/pull/82067">#82067</a>) (<a href="http://www.home-assistant.io/integrations/lifx/">lifx docs</a>)</li>
<li>Bump growattServer to 1.2.4 (<a href="https://github.com/muppet3000">@muppet3000</a> - <a href="https://github.com/home-assistant/core/pull/82071">#82071</a>) (<a href="http://www.home-assistant.io/integrations/growatt_server/">growatt_server docs</a>)</li>
<li>Bump PySwitchbot to 0.20.5 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82099">#82099</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>) (dependency)</li>
<li>Update sqlalchemy to 1.4.44 (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/82129">#82129</a>) (<a href="http://www.home-assistant.io/integrations/recorder/">recorder docs</a>) (<a href="http://www.home-assistant.io/integrations/sql/">sql docs</a>) (dependency)</li>
<li>Always update attributes on an update for MQTT update (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/82139">#82139</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Add missing strings in Onvif (<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/82141">#82141</a>) (<a href="http://www.home-assistant.io/integrations/onvif/">onvif docs</a>)</li>
<li>Fix Google Sheets formula input (<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/82157">#82157</a>) (<a href="http://www.home-assistant.io/integrations/google_sheets/">google_sheets docs</a>)</li>
<li>Fix Growatt incorrect energy dashboard values for grid import (<a href="https://github.com/muppet3000">@muppet3000</a> - <a href="https://github.com/home-assistant/core/pull/82163">#82163</a>) (<a href="http://www.home-assistant.io/integrations/growatt_server/">growatt_server docs</a>)</li>
<li>Fix static version in homekit tests (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82201">#82201</a>) (<a href="http://www.home-assistant.io/integrations/homekit/">homekit docs</a>)</li>
<li>Fix missing await in nexia emergency heat (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82207">#82207</a>) (<a href="http://www.home-assistant.io/integrations/nexia/">nexia docs</a>)</li>
</ul>
<h2>Release 2022.11.4 - November 20</h2>
<ul>
<li>Fix moving average for 0 values (<a href="https://github.com/daanbeverdam">@daanbeverdam</a> - <a href="https://github.com/home-assistant/core/pull/80476">#80476</a>) (<a href="http://www.home-assistant.io/integrations/filter/">filter docs</a>)</li>
<li>Solve Modbus reload issue (<a href="https://github.com/janiversen">@janiversen</a> - <a href="https://github.com/home-assistant/core/pull/82253">#82253</a>) (<a href="http://www.home-assistant.io/integrations/modbus/">modbus docs</a>)</li>
<li>Add kilo watts unit mapping for nibe_heatpump (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/82284">#82284</a>) (<a href="http://www.home-assistant.io/integrations/nibe_heatpump/">nibe_heatpump docs</a>)</li>
<li>Bump <code>regenmaschine</code> to 2022.11.0 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/82337">#82337</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Bump pysma to version 0.7.3 (<a href="https://github.com/rklomp">@rklomp</a> - <a href="https://github.com/home-assistant/core/pull/82343">#82343</a>) (<a href="http://www.home-assistant.io/integrations/sma/">sma docs</a>)</li>
<li>Bump flux_led to 0.28.34 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82347">#82347</a>) (<a href="http://www.home-assistant.io/integrations/flux_led/">flux_led docs</a>)</li>
<li>Fix invalid configuration_url in Netatmo (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/82372">#82372</a>) (<a href="http://www.home-assistant.io/integrations/netatmo/">netatmo docs</a>)</li>
<li>Bump PyViCare to 2.19.0 (<a href="https://github.com/TheJulianJES">@TheJulianJES</a> - <a href="https://github.com/home-assistant/core/pull/82381">#82381</a>) (<a href="http://www.home-assistant.io/integrations/vicare/">vicare docs</a>)</li>
<li>Bump bleak-retry-connector to 2.8.5 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82387">#82387</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Update xknx to 1.2.1 (<a href="https://github.com/marvin-w">@marvin-w</a> - <a href="https://github.com/home-assistant/core/pull/82404">#82404</a>) (<a href="http://www.home-assistant.io/integrations/knx/">knx docs</a>)</li>
<li>Attempt to fix occasional Flo timeouts (<a href="https://github.com/dmulcahey">@dmulcahey</a> - <a href="https://github.com/home-assistant/core/pull/82408">#82408</a>) (<a href="http://www.home-assistant.io/integrations/flo/">flo docs</a>)</li>
<li>Prevent powerwall from switching addresses if its online (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82410">#82410</a>) (<a href="http://www.home-assistant.io/integrations/powerwall/">powerwall docs</a>)</li>
</ul>
<h2>Release 2022.11.5 - November 30</h2>
<ul>
<li>Bump pyotgw to 2.1.3 (<a href="https://github.com/mvn23">@mvn23</a> - <a href="https://github.com/home-assistant/core/pull/82430">#82430</a>)</li>
<li>Bump ZHA dependencies (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/82509">#82509</a>)</li>
<li>Ensure esphome client tasks await cancelation (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82547">#82547</a>)</li>
<li>Bump gcal_sync to 4.0.3 (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/82606">#82606</a>)</li>
<li>Fix iBeacons with infrequent random mac address changes unexpectedly going unavailable (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82668">#82668</a>)</li>
<li>Fix homekit controller triggers not attaching when integration is setup after startup (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/82717">#82717</a>)</li>
<li>Bump pysensibo to 1.0.21 (<a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> - <a href="https://github.com/home-assistant/core/pull/82023">#82023</a>)</li>
<li>Bump pysensibo to 1.0.22 (<a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> - <a href="https://github.com/home-assistant/core/pull/82738">#82738</a>)</li>
<li>Update pyTibber to 0.26.1 (<a href="https://github.com/Danielhiversen">@Danielhiversen</a> - <a href="https://github.com/home-assistant/core/pull/82787">#82787</a>)</li>
<li>Add missing SimpliSafe keypad battery sensor (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/82797">#82797</a>)</li>
<li>Add missing SimpliSafe alarm states (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/82813">#82813</a>)</li>
<li>Bump <code>simplisafe-python</code> to 2022.11.2 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/82943">#82943</a>)</li>
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
<p>Below is a listing of the breaking change for this release, per subject or
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
      Unit: Revolutions per minute (rpm) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_0" hidden>
<p>Multiple integrations provide sensors with the revolutions per minute unit.
Two units have been used throughout Home Assistant to indicate this:
<code>RPM</code> and <code>rpm</code>.</p>
<p>This release standardizes all integrations to use the lowercase <code>rpm</code> variant.
The following integrations have been adjusted:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/baf">Big Ass Fans</a></li>
<li><a href="http://www.home-assistant.io/integrations/danfoss_air">Danfoss Air</a></li>
<li><a href="http://www.home-assistant.io/integrations/glances">Glances</a></li>
<li><a href="http://www.home-assistant.io/integrations/system_bridge">System Bridge</a></li>
<li><a href="http://www.home-assistant.io/integrations/isy994">Universal Devices ISY994</a></li>
<li><a href="http://www.home-assistant.io/integrations/vallox">Vallox</a></li>
</ul>
<p>Home Assistant automatically handles this change of units. However, if you
record history externally (for example, using InfluxDB), you might need to
adjust to this change.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/79986">#79986</a> <a href="https://github.com/home-assistant/core/pull/79987">#79987</a> <a href="https://github.com/home-assistant/core/pull/79988">#79988</a> <a href="https://github.com/home-assistant/core/pull/79989">#79989</a> <a href="https://github.com/home-assistant/core/pull/79990">#79990</a> <a href="https://github.com/home-assistant/core/pull/79992">#79992</a>)</p>
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
      Android IP Webcam 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_1" hidden>
<p>The previously deprecated YAML configuration of the Android IP Webcam
integration has been removed.</p>
<p>Android IP Webcam is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/engrbm87">@engrbm87</a> - <a href="https://github.com/home-assistant/core/pull/80875">#80875</a>) (<a href="http://www.home-assistant.io/integrations/android_ip_webcam">documentation</a>)</p>
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
      Anthem A/V Receivers 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_2" hidden>
<p>The previously deprecated YAML configuration of the Anthem A/V Receivers
integration has been removed.</p>
<p>Anthem A/V Receivers are now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> - <a href="https://github.com/home-assistant/core/pull/79931">#79931</a>) (<a href="http://www.home-assistant.io/integrations/anthemav">documentation</a>)</p>
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
<p>The <code>UPS Last Self Test</code> sensor is renamed to <code>UPS Self Test Result</code> and
a new <code>UPS Last Self Test</code> sensor reports time instead of the result.</p>
<p>You may need to replace <code>sensor.ups_last_self_test</code> with
<code>sensor.ups_self_test_result</code> in automations and scripts
referencing the <code>sensor.ups_last_self_test</code> entity.</p>
<p>(<a href="https://github.com/definitio">@definitio</a> - <a href="https://github.com/home-assistant/core/pull/80773">#80773</a>) (<a href="http://www.home-assistant.io/integrations/apcupsd">documentation</a>)</p>
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
      Brother Printer 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_4" hidden>
<p>The <code>counter</code> and <code>remaining pages</code> attributes of the sensors
<code>drum remaining life</code>, <code>black drum remaining life</code>, <code>cyan drum remaining life</code>,
<code>magenta drum remaining life</code>, and <code>yellow drum remaining life</code> have been
migrated to their own dedicated sensor entities.</p>
<p>If you are using these attributes in your automation or script, you will need
to adopt those for this change.</p>
<p>(<a href="https://github.com/bieniu">@bieniu</a> - <a href="https://github.com/home-assistant/core/pull/79932">#79932</a>) (<a href="http://www.home-assistant.io/integrations/brother">documentation</a>)</p>
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
      ClickSend TTS 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_5" hidden>
<ul>
<li>The <code>caller</code> option from <code>ClickSend TTS</code> notify service has been removed, as
it prevented calls from being actually made.</li>
<li>The default name has been changed to <code>clicksend_tts</code> instead of an empty name; otherwise
the service would appear as <code>notify.notify</code>. Now it will, by default, appear
as <code>notify.clicksend_tts</code>. This might impact your automation or script.</li>
<li>The recipient’s phone number now must match E.164 format.</li>
</ul>
<p>(<a href="https://github.com/CharlieBailly">@CharlieBailly</a> - <a href="https://github.com/home-assistant/core/pull/76669">#76669</a>) (<a href="http://www.home-assistant.io/integrations/clicksend_tts">documentation</a>)</p>
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
      Coinbase 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_6" hidden>
<p>The previously deprecated YAML configuration of the Coinbase
integration has been removed.</p>
<p>Coinbase is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/80084">#80084</a>) (<a href="http://www.home-assistant.io/integrations/coinbase">documentation</a>)</p>
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
      Dark Sky 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_7" hidden>
<p>When Darksky is configured to report in US units, the unit of measurement
for precipitation intensity has been corrected from inches to inches per hour.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/80611">#80611</a>) (<a href="http://www.home-assistant.io/integrations/darksky">documentation</a>)</p>
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
      ecobee 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_8" hidden>
<p>Setting up the <code>notify</code> platform of the ecobee integration by a platform section
using YAML configuration is no longer supported. The <code>ecobee</code> platform section
under <code>notify:</code> can be safely removed from your YAML configuration files.</p>
<p>The thermostat index can be specified by using the <code>target</code> parameter in the
notify service call instead.</p>
<p>(<a href="https://github.com/kevdliu">@kevdliu</a> - <a href="https://github.com/home-assistant/core/pull/78558">#78558</a>) (<a href="http://www.home-assistant.io/integrations/ecobee">documentation</a>)</p>
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
      HERE Travel Time 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_9" hidden>
<p>The route sensor has been removed, as it could contain more data than
the Home Assistant state engine is able to hold. Make sure you update any
automations or scripts that use this sensor.</p>
<p>(<a href="https://github.com/eifinger">@eifinger</a> - <a href="https://github.com/home-assistant/core/pull/79211">#79211</a>) (<a href="http://www.home-assistant.io/integrations/here_travel_time">documentation</a>)</p>
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
      HomeKit 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_10" hidden>
<p>HomeKit instance ID assignments are now stable between restarts to comply
with the HomeKit specifications. This prevents accessories from losing
track of services between restarts, and improves stability with using
Siri especially with apple watches.</p>
<p>This change may dramatically improve the stability and re-sync times of
<code>media_player</code> entities (all), <code>camera</code> entities (all), <code>fan</code> entities (presets),
<code>remote</code> entities (activity ones), <code>switch</code> entities (power strips)
triggers (all) between restarts which was especially
apparent when the home has many accessories.</p>
<p>Because the assignments were previously unstable, it may be necessary to make
a one-time adjustment of accessory room assignments, favorites,
or re-pair camera accessories after upgrading.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/79913">#79913</a>) (<a href="http://www.home-assistant.io/integrations/homekit">documentation</a>)</p>
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
      HomeKit Controller 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_11" hidden>
<p>As older versions did not correctly set service identifier values, it may be
necessary to unpair and re-pair some BLE devices or to delete duplicate
entities manually.</p>
<p>If the service identifiers were loaded incorrectly when the device was paired
with an older version, operations might raise <code>StopIteration</code> or <code>RuntimeError</code>
errors. You can correct those by deleting the integration for that device,
and doing a one-time re-pairing.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/80798">#80798</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller">documentation</a>)</p>
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
      Hunter Douglas PowerView 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_12" hidden>
<p>This change ceases creating battery sensors for hardwired shades.
Existing sensor entities need to be manually deleted.</p>
<p>(<a href="https://github.com/kingy444">@kingy444</a> - <a href="https://github.com/home-assistant/core/pull/81013">#81013</a>) (<a href="http://www.home-assistant.io/integrations/hunterdouglas_powerview">documentation</a>)</p>
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
      IntelliFire 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_13" hidden>
<p>The backing unit and the API
of the device itself uses <code>0-4</code> as a flame height setting. Through discussion
on the forums the community has decided <code>1-5</code> is a much more logical setting
for flame height, and accordingly, this has been implemented.</p>
<p>If you set the flame height using automations or scripts, you will  need to
adapt those to this change.</p>
<p>(<a href="https://github.com/jeeftor">@jeeftor</a> - <a href="https://github.com/home-assistant/core/pull/79901">#79901</a>) (<a href="http://www.home-assistant.io/integrations/intellifire">documentation</a>)</p>
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
      Logger 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_14" hidden>
<p><code>logger</code> no longer changes the default log level of Home Assistant to <code>debug</code>
if used without a value for <a href="http://www.home-assistant.io/integrations/logger/#default"><code>default</code></a>. It
will now only change the default log level of Home Assistant from a
<code>warning</code> to something else if the <code>default</code> is explicitly specified.</p>
<p>If you do not specify <code>default</code> and want Home Assistant to have a
default log level of <code>debug</code>, you will need to add this to your YAML configuration:</p>
<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight"><code data-lang="yaml"><span class="na">logger</span><span class="pi">:</span>
  <span class="na">default</span><span class="pi">:</span> <span class="s">debug</span>
</code></pre></div></div>
<p>(<a href="https://github.com/mdegat01">@mdegat01</a> - <a href="https://github.com/home-assistant/core/pull/80033">#80033</a>) (<a href="http://www.home-assistant.io/integrations/logger">documentation</a>)</p>
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
      Open Exchange Rates 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_15" hidden>
<p>The previously deprecated YAML configuration of the Open Exchange Rates
integration has been removed.</p>
<p>Open Exchange Rates is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> - <a href="https://github.com/home-assistant/core/pull/79856">#79856</a>) (<a href="http://www.home-assistant.io/integrations/openexchangerates">documentation</a>)</p>
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
      Scrape 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_16" hidden>
<p>Previously, scrape would return the last correct value if an HTTP request
for updating failed. This has been adjusted to now mark the sensor
as <code>unavailable</code> instead.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/80593">#80593</a>) (<a href="http://www.home-assistant.io/integrations/scrape">documentation</a>)</p>
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
      Templates (fan) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_17" hidden>
<p>Template fans no longer change their state to <code>on</code> when <code>set_percentage</code> or
<code>set_preset_mode</code> is called when a <code>value_template</code> has been configured.</p>
<p>(<a href="https://github.com/Petro31">@Petro31</a> - <a href="https://github.com/home-assistant/core/pull/75656">#75656</a>) (<a href="http://www.home-assistant.io/integrations/template">documentation</a>)</p>
</div>
  </div>
</div>
<p>If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
<a href="https://developers.home-assistant.io/blog/">developer blog</a>. The following are the most notable for this release:</p>
<ul>
<li><a href="https://developers.home-assistant.io/blog/2022/10/25/new-precipitation-intensity-units">Add new precipitation intensity units</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/10/14/deprecate-unit-system">Deprecate IMPERIAL_SYSTEM unit system and linked constants and properties</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/10/21/code-owner-commands">GitHub Commands for Code Owners</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/10/26/new-unit-enumerators/">Introducing new unit enumerators</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/10/24/hubs-devices-services-virtual-integrations">Introducing virtual integrations and differentiating hubs, devices, and services</a></li>
</ul>
<h2>All changes</h2>
<p>Of course, there is a lot more in this release. You can find a list of
all changes made here: <a href="http://www.home-assistant.io/changelogs/core-2022.11">Full changelog for Home Assistant Core 2022.11</a></p>
"
link: "https://www.home-assistant.io/blog/2022/11/02/release-202211/"
category:
---
