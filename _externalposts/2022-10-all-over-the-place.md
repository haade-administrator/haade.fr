---
title: "2022.10 - All over the place"
date: 2022-10-05 00:00:00 +0000
dateadded: 2023-02-02 08:54:04 +0100
description: "<p><a href='http://www.home-assistant.io/integrations/#version/2022.10'><img src='http://www.home-assistant.io/images/blog/2022-10/social.png' style='border: 0;box-shadow: none;'></a></p>
<p>Happy October! October is always a special month for the project. It is the
month everybody starts working on their home automations again, the month that
Hacktoberfest brings in lots of new contributions and contributors to the
project (👋 welcome!), and also this year: <a href="http://www.home-assistant.io/blog/2022/09/30/the-month-of-what-the-heck/">the Month of “What the Heck?!”</a>.</p>
<p>The Month of WTH already <a href="https://community.home-assistant.io/c/what-the-heck/56">looks very promising</a>,
and many good and interesting issues, ideas, and suggestions to streamline
have been proposed. Keep those topics and votes going ❤️.</p>
<p>Oh! And Home Assistant Core 2022.10! 🎉</p>
<p>Last month’s release was a big one; this month’s release mostly continues to
improving on that. I guess it is no surprise that the biggest improvement can
be found (once again) in Bluetooth! There is a lot more, though this release
is a bit “all over the place”, which is actually kinda nice.</p>
<p>Enjoy the release!</p>
<p>../Frenck</p>
<p>PS: I noticed the <a href="http://www.home-assistant.io/skyconnect/">Home Assistant SkyConnect is now available for pre-order</a> 🥳</p>
<!--more-->
<ul>
<li><a href="#marcel-van-der-veldt-joins-nabu-casa">Marcel van der Veldt joins Nabu Casa</a></li>
<li><a href="#active-bluetooth-everywhere">Active Bluetooth everywhere</a></li>
<li><a href="#support-for-ibeacons">Support for iBeacons</a></li>
<li><a href="#finding-the-right-integration">Finding the right integration</a></li>
<li><a href="#subviews-for-dashboards">Subviews for dashboards</a></li>
<li><a href="#all-dialogs-restyled">All dialogs restyled</a></li>
<li><a href="#viewing-yaml-automations-in-the-automation-editor">Viewing YAML automations in the automation editor</a></li>
<li><a href="#handling-version-numbers-in-templates">Handling version numbers in templates</a></li>
<li><a href="#google-sheets">Google Sheets</a></li>
<li><a href="#other-noteworthy-changes">Other noteworthy changes</a></li>
<li><a href="#new-integrations">New Integrations</a></li>
<li><a href="#integrations-now-available-to-set-up-from-the-ui">Integrations now available to set up from the UI</a></li>
<li><a href="#release-2022101---october-6">Release 2022.10.1 - October 6</a></li>
<li><a href="#release-2022102---october-9">Release 2022.10.2 - October 9</a></li>
<li><a href="#release-2022103---october-10">Release 2022.10.3 - October 10</a></li>
<li><a href="#release-2022104---october-14">Release 2022.10.4 - October 14</a></li>
<li><a href="#release-2022105---october-20">Release 2022.10.5 - October 20</a></li>
<li><a href="#need-help-join-the-community">Need help? Join the community!</a></li>
<li><a href="#breaking-changes">Breaking Changes</a></li>
<li><a href="#farewell-to-the-following">Farewell to the following</a></li>
<li><a href="#all-changes">All changes</a></li>
</ul>
<p>Don’t forget to <a href="https://www.youtube.com/watch?v=nlbwmnLi4Ms">join our release party live stream on YouTube</a> today at 12:00 PDT / 21:00 CET!</p>
<p><lite-youtube videoid="nlbwmnLi4Ms" videotitle="Home Assistant 2022.10 Release Party"></lite-youtube></p>
<h2>Marcel van der Veldt joins Nabu Casa</h2>
<p>We are excited to announce that <a href="https://github.com/marcelveldt">Marcel van der Veldt</a>
has joined <a href="https://www.nabucasa.com/">Nabu Casa</a>!</p>
<p>Marcel is known for his contributions to the <a href="http://www.home-assistant.io/integrations/zwave_js">Z-Wave integration</a>,
the rewrite of the <a href="http://www.home-assistant.io/integrations/hue">Hue integration</a>, the
<a href="https://github.com/music-assistant/hass-music-assistant">Music Assistant custom integration</a>,
and many more!</p>
<p>Marcel is going to be working on <a href="https://csa-iot.org/all-solutions/matter/">Matter</a>
support in Home Assistant. Just in case you missed it, Matter <a href="https://twitter.com/balloob/status/1576421490106384385">is now officially
available/released</a> 🎉.</p>
<p>Welcome aboard Marcel!</p>
<h2>Active Bluetooth everywhere</h2>
<p>Two releases back, we <a href="http://www.home-assistant.io/blog/2022/08/03/release-20228/#first-class-bluetooth-support">introduced the Bluetooth integration</a>.
The previous release we brought Bluetooth everywhere in your home by adding
support for <a href="http://www.home-assistant.io/blog/2022/09/07/release-20229/#bluetooth-everywhere">Bluetooth Proxies</a>.
Let’s not stop there!</p>
<p>In this release, those proxies now support active Bluetooth connections! 🤯</p>
<p>To explain this quickly: Previously, we could listen for Bluetooth devices
and only receive data via the proxies (passive connection); now, we can actively
set up a conversation with those devices and send data (active connection). This
adds the capability to extend the range of Bluetooth devices that can be
controlled 💙.</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-09/bluetooth-proxy-overview.png' alt='Picture of a home showing how Bluetooth data is proxied via ESPHome devices to Home Assistant'><br></p>
<p>For this occasion, ESPHome will have an additional release, which adds this
functionality. We have also updated our <a href="https://esphome.github.io/bluetooth-proxies/">Bluetooth proxy installer website</a>
to install with support for active connections.</p>
<p>So, you want to control that SwitchBot Bluetooth device on the other end of your
home that seems out of reach? Now you can by installing a proxy on
a simple ESP32 device.</p>
<p>Oh! Bonus: the Bluetooth performance has been improved too! Especially local
Bluetooth adapters should be quite a bit faster. 🚀</p>
<h2>Support for iBeacons</h2>
<p>This release also adds support for iBeacons. These are Bluetooth-enabled devices
that send out identifiers to announce their location. Home Assistant can
now pick those up and show an approximate distance to such an iBeacon.</p>
<p>iBeacons can open up a lot of awesome use cases for automations. For example,
you could attach an iBeacon to your car, so you’ll know the car is at home. Or,
on the trash can and use it to determine if the garbage is still sitting in the
garage on pick-up day and send out a notification.</p>
<p><a href="http://www.home-assistant.io/integrations/ibeacon">Read more about iBeacons in our documentation</a>.</p>
<h2>Finding the right integration</h2>
<p>Recently we <a href="http://www.home-assistant.io/blog/2022/08/03/release-20228/#finding-the-integration-supporting-your-device">introduced “Supported brands”</a>,
allowing you to find integrations available under different brandings.
Now, we are taking it a step further streamlining the experience of adding new
devices or services.</p>
<p>For some brands of devices, we have multiple integrations available.
For example, we have a lot of “Google” integrations. Some brands provide devices
that can work via Zigbee or their matching hub, meaning you’d have a choice
of integrating their hub or using the devices directly via Zigbee
(e.g., using <a href="http://www.home-assistant.io/integrations/zha">ZHA</a>).</p>
<p>To make it more clear on the choices available, you can now categorize
integrations by brand. Home Assistant will show the options available
for that specific brand. For example, the “Google” brand:</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-10/add-integration.png' alt='Screenshots showing adding an integration by the Google brands. Once you select Google, you will be offered all Google integrations'><br></p>
<p>This way, you no longer have to “find out” how your device could be integrated.
We now show if an integration uses “the cloud” or not, so you are aware upfront.</p>
<p>We often get questions about YAML-only integrations that cannot be found in the
user interface. While we love them to be available via the UI, we can
understand not finding them at all can be confusing.</p>
<p>To help with that, we now show <strong>all</strong> integrations when adding a new
integration, including those only available via YAML. While they cannot be
set up via the user interface, we now do provide links to the documentation
with the instructions on how to set it up.</p>
<h2>Subviews for dashboards</h2>
<p>This might be one of the coolest and most impactful features that has been
added to our Dashboards lately: Subviews!</p>
<p>Each view on a dashboard can now be marked as being a “Subview”:</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-10/subview-toggle.png' alt='Screenshot showing the new subview toggle in the view options'><br></p>
<p>Subviews won’t show up in the navigation bar of your dashboard, meaning
you can only navigate to them by using, for example, a navigation action on
a button.</p>
<p>When you navigate to a subview, the subview itself will not show the Dashboard
navigation bar. Instead, it will show a back button to the previous view
you came from.</p>
<p class='img'>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-10/subview-navigation.gif' alt='Screen recording showing a Kitchen subview in action'>
Screen recording showing a Kitchen subview in action.
</p>
<p>This allows for creating cool navigation concepts that are particularly helpful
on a mobile or tablet device.</p>
<h2>All dialogs restyled</h2>
<p>All dialogs that are shown in the Home Assistant have been slightly updated.</p>
<p>Most notably: The dialogs are now rounder on the edges, and the action buttons
have been styled and named more consistently. It brings Home Assistant closer
to version 3 of the Material Design that Home Assistant follows.</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-10/new-dialogs.png' alt='Screenshot showing one of the restyled dialogs.'><br></p>
<h2>Viewing YAML automations in the automation editor</h2>
<p>In the last release, we revamped our automation editor, and we are very
happy to read how many of you loved these changes ❤️</p>
<p>However, if you manage your automations manually in YAML, you’d always be
served an error message when trying to open an automation in the UI. Not very
helpful, right?</p>
<p>This has been improved! You can now open <strong>any</strong> automation (or script) in the
UI. This lets you view your automation, providing a quick glance at its
workings.</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-10/yaml-automation-editor.png' alt='Screenshot showing an YAML automation as read-only in the automation editor.'><br></p>
<p>Besides, as a bonus, if you have considered moving your automation to the UI,
you can now view and experience how it would look/work for those automations
and import them into the UI with the click of a button in the top right.</p>
<h2>Handling version numbers in templates</h2>
<p>A new <code>version()</code> template function/filter has been added, allowing you to do
awesome things with version numbers in templates.</p>
<p>It allows for getting information about a version number, comparing version
numbers, and even checking the difference between two versions.</p>
<ul>
<li>
<p><code>{{ version(&quot;2022.10.0&quot;) &gt; &quot;2022.9.7&quot; }}</code><br />
Returns true, as <code>2022.10.0</code> is newer.</p>
</li>
<li>
<p><code>{{ (version(&quot;2022.10.1&quot;) - &quot;2022.10.0&quot;).patch }}</code><br />
Returns true, as the patch number of the version changed.</p>
</li>
<li>
<p><code>{{ (version(&quot;2022.10.1&quot;) - &quot;2022.10.0&quot;).minor }}</code><br />
Returns false, as there is just a patch difference.</p>
</li>
<li>
<p><code>{{ version(&quot;2022.10.0b0&quot;).beta }}</code><br />
Return true, as this is a beta version.</p>
</li>
</ul>
<p><code>version()</code> can be helpful when building automations or Blueprints for
<a href="http://www.home-assistant.io/integrations/update">update</a> entities. You could, for example, easier
decide to automatically upgrade or send more detailed notification messages
in case a patch version is available.</p>
<h2>Google Sheets</h2>
<p>This release introduces a new way to export data from Home Assistant:
<strong><a href="http://www.home-assistant.io/integrations/google_sheets">Google Sheets</a></strong>.</p>
<p>With this integration, you can add new rows to a Google Sheet document
from a service call, allowing you to export data from automations for
further processing, visualization, or insights.</p>
<p class='img'>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-10/google-sheets.png' alt='Screenshots exporting energy data to Google Sheets from Home Assistant'>
Export anything you like to a sheet in Google Sheets, like your energy usage.
</p>
<p>Maybe you like to export your daily energy usage or keep track of the number
of diapers you have used in your baby feeding diary spreadsheet.</p>
<p>The possibilities with this are endless.</p>
<h2>Other noteworthy changes</h2>
<p>There is much more juice in this release; here are some of the other
noteworthy changes this release:</p>
<ul>
<li>The long-term statics card now uses the unit you have selected a sensor to
be in. So, if you’ve changed the sensor, it will now match! Also, more sensors
are now able to change/convert units. Thanks, <a href="https://github.com/emontnemery">@emontnemery</a> and <a href="https://github.com/epenet">@epenet</a>!</li>
<li>When removing integrations that use application credentials, we will now ask
if you want to clean up those credentials. Nice touch, <a href="https://github.com/allenporter">@allenporter</a>!</li>
<li>The <a href="http://www.home-assistant.io/integrations/netatmo">Netatmo</a> integration got lots of love! It now supports the Netatmo
Doorbell, modulating thermostats and now also supports devices from Legrand,
Bubendorff, BTicino and Smarther! Thank you <a href="https://github.com/cgtobi">@cgtobi</a>!</li>
<li>If you have a Prusa printer, you can now use the <a href="http://www.home-assistant.io/integrations/prusalink">PrusaLink</a> integration
to control your print job using the new job control buttons available!
Thanks, <a href="https://github.com/balloob">@balloob</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/bthome">BTHome</a> now supports binary sensors! Thanks, <a href="https://github.com/Ernst79">@Ernst79</a>!</li>
<li>The <a href="http://www.home-assistant.io/integrations/homekit_controller">HomeKit Controller</a> now supports <a href="https://en.wikipedia.org/wiki/Thread_(network_protocol)">Thread</a> transport. Thanks, <a href="https://github.com/roysjosh">@roysjosh</a>
and <a href="https://github.com/Jc2k">@Jc2k</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/forked_daapd">forked-daapd</a> (OwnTone) now supports the media browser and can leverage
the Spotify integration. Thanks, <a href="https://github.com/uvjustin">@uvjustin</a>!</li>
<li>The <a href="http://www.home-assistant.io/integrations/min_max">Min/Max</a> helper now supports calculating the statistical range. For
example, helpful if you want to show the difference between the coolest and
warmest rooms. Thanks, <a href="https://github.com/jsherman256">@jsherman256</a>!</li>
<li><a href="https://github.com/holysoles">@holysoles</a> added unique ID support to the <a href="http://www.home-assistant.io/integrations/universal">Universal Media Player</a>,
<a href="https://github.com/magic7s">@magic7s</a> added support for it to <a href="http://www.home-assistant.io/integrations/ohmconnect">OhmConnect</a>. Thanks!</li>
<li><a href="http://www.home-assistant.io/integrations/netgear">NETGEAR</a> now has a bunch of switches to control things like parental
controls, Wi-Fi availability, and access. Thanks, <a href="https://github.com/starkillerOG">@starkillerOG</a>!</li>
</ul>
<h2>New Integrations</h2>
<p>We welcome the following new integrations in this release:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/google_sheets">Google Sheets</a>, added by <a href="https://github.com/tkdrob">@tkdrob</a></li>
<li><a href="http://www.home-assistant.io/integrations/ibeacon">iBeacon Tracker</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/kegtron">Kegtron</a>, added by <a href="https://github.com/Ernst79">@Ernst79</a></li>
<li><a href="http://www.home-assistant.io/integrations/keymitt_ble">Keymitt MicroBot Push</a>, added by <a href="https://github.com/spycle">@spycle</a></li>
<li><a href="http://www.home-assistant.io/integrations/lidarr">Lidarr</a>, added by <a href="https://github.com/tkdrob">@tkdrob</a></li>
<li><a href="http://www.home-assistant.io/integrations/nibe_heatpump">Nibe Heat Pump</a>, added by <a href="https://github.com/elupus">@elupus</a></li>
<li><a href="http://www.home-assistant.io/integrations/nobo_hub">Nobø Ecohub</a>, added by <a href="https://github.com/oyvindwe">@oyvindwe</a></li>
<li><a href="http://www.home-assistant.io/integrations/switchbee">SwitchBee</a>, added by <a href="https://github.com/jafar-atili">@jafar-atili</a></li>
<li><a href="http://www.home-assistant.io/integrations/tilt_ble">Tilt Hydrometer Bluetooth</a>, added by <a href="https://github.com/apt-itude">@apt-itude</a></li>
</ul>
<h2>Integrations now available to set up from the UI</h2>
<p>The following integrations are now available via the Home Assistant UI:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/dsmr_reader">DSMR Reader</a>, done by <a href="https://github.com/Glodenox">@Glodenox</a></li>
<li><a href="http://www.home-assistant.io/integrations/radarr">Radarr</a>, done by <a href="https://github.com/tkdrob">@tkdrob</a></li>
</ul>
<h2>Release 2022.10.1 - October 6</h2>
<ul>
<li>Simplify long term statistics by always supporting unit conversion (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/79557">#79557</a>) (<a href="http://www.home-assistant.io/integrations/sensor/">sensor docs</a>)</li>
<li>ZHA radio migration: reset the old adapter (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/79663">#79663</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Fix bluetooth diagnostics on macos (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/79680">#79680</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Bump btsmarthub_devicelist to 0.2.3 (<a href="https://github.com/typhoon2099">@typhoon2099</a> - <a href="https://github.com/home-assistant/core/pull/79705">#79705</a>) (<a href="http://www.home-assistant.io/integrations/bt_smarthub/">bt_smarthub docs</a>)</li>
<li>Correct how unit used for statistics is determined (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/79725">#79725</a>) (<a href="http://www.home-assistant.io/integrations/sensor/">sensor docs</a>)</li>
<li>Update frontend to 20221006.0 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/79745">#79745</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
</ul>
<h2>Release 2022.10.2 - October 9</h2>
<ul>
<li>2022.10.0 (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/79659">#79659</a>)</li>
<li>2022.10.1 (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/79751">#79751</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>) (<a href="http://www.home-assistant.io/integrations/sensor/">sensor docs</a>) (<a href="http://www.home-assistant.io/integrations/bt_smarthub/">bt_smarthub docs</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Fix london_underground TUBE_LINES to match current API output (<a href="https://github.com/zhibek">@zhibek</a> - <a href="https://github.com/home-assistant/core/pull/79410">#79410</a>) (<a href="http://www.home-assistant.io/integrations/london_underground/">london_underground docs</a>)</li>
<li>Process abbreviated availability options in mqtt discovery payload (<a href="https://github.com/bertmelis">@bertmelis</a> - <a href="https://github.com/home-assistant/core/pull/79712">#79712</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Show all valid heatpump selections (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/79756">#79756</a>) (<a href="http://www.home-assistant.io/integrations/nibe_heatpump/">nibe_heatpump docs</a>)</li>
<li>Bump pydaikin version (<a href="https://github.com/fredrike">@fredrike</a> - <a href="https://github.com/home-assistant/core/pull/79761">#79761</a>) (<a href="http://www.home-assistant.io/integrations/daikin/">daikin docs</a>)</li>
<li>Fix Bluetooth failover when esphome device unexpectedly disconnects (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/79769">#79769</a>) (<a href="http://www.home-assistant.io/integrations/esphome/">esphome docs</a>)</li>
<li>Fix state updating for crossfade switch on Sonos (<a href="https://github.com/jjlawren">@jjlawren</a> - <a href="https://github.com/home-assistant/core/pull/79776">#79776</a>) (<a href="http://www.home-assistant.io/integrations/sonos/">sonos docs</a>)</li>
<li>Revert “Improve device_automation trigger validation” (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/79778">#79778</a>) (<a href="http://www.home-assistant.io/integrations/rfxtrx/">rfxtrx docs</a>) (<a href="http://www.home-assistant.io/integrations/webostv/">webostv docs</a>) (<a href="http://www.home-assistant.io/integrations/device_automation/">device_automation docs</a>)</li>
<li>Update pyoverkiz to 1.5.5 (<a href="https://github.com/cdce8p">@cdce8p</a> - <a href="https://github.com/home-assistant/core/pull/79798">#79798</a>) (<a href="http://www.home-assistant.io/integrations/overkiz/">overkiz docs</a>)</li>
<li>Fix realtime option for hvv_departures (<a href="https://github.com/lennart-k">@lennart-k</a> - <a href="https://github.com/home-assistant/core/pull/79799">#79799</a>) (<a href="http://www.home-assistant.io/integrations/hvv_departures/">hvv_departures docs</a>)</li>
<li>Fix keymitt_ble discovery (<a href="https://github.com/spycle">@spycle</a> - <a href="https://github.com/home-assistant/core/pull/79809">#79809</a>) (<a href="http://www.home-assistant.io/integrations/keymitt_ble/">keymitt_ble docs</a>)</li>
<li>Fix POE control port_idx error in UniFi (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/79838">#79838</a>) (<a href="http://www.home-assistant.io/integrations/unifi/">unifi docs</a>)</li>
<li>Update typing-extensions constraint to &gt;=4.4.0 (<a href="https://github.com/cdce8p">@cdce8p</a> - <a href="https://github.com/home-assistant/core/pull/79860">#79860</a>)</li>
<li>Bump ZHA dependencies (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/79898">#79898</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Bump pyatmo to 7.1.1 (<a href="https://github.com/cgtobi">@cgtobi</a> - <a href="https://github.com/home-assistant/core/pull/79918">#79918</a>) (<a href="http://www.home-assistant.io/integrations/netatmo/">netatmo docs</a>)</li>
</ul>
<h2>Release 2022.10.3 - October 10</h2>
<ul>
<li>Bump pyhiveapi to 0.5.14 (<a href="https://github.com/KJonline">@KJonline</a> - <a href="https://github.com/home-assistant/core/pull/79530">#79530</a>) (<a href="http://www.home-assistant.io/integrations/hive/">hive docs</a>) (dependency)</li>
<li>Bump bluetooth-auto-recovery to 0.3.4 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/79971">#79971</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>) (dependency)</li>
<li>Bump pySwitchbot to 0.19.15 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/79972">#79972</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>) (dependency)</li>
<li>Update to pygtfs 0.1.7 (<a href="https://github.com/molisani">@molisani</a> - <a href="https://github.com/home-assistant/core/pull/79975">#79975</a>) (<a href="http://www.home-assistant.io/integrations/gtfs/">gtfs docs</a>) (dependency)</li>
<li>Update frontend to 20221010.0 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/79994">#79994</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
<li>Remove system marker from Supervisor integration (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/79997">#79997</a>) (<a href="http://www.home-assistant.io/integrations/hassio/">hassio docs</a>)</li>
<li>Fix Eve Thermo always showing as heating in homekit_controller even when off (<a href="https://github.com/Jc2k">@Jc2k</a> - <a href="https://github.com/home-assistant/core/pull/80019">#80019</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Fix armed extra state attribute in fibaro entity (<a href="https://github.com/rappenze">@rappenze</a> - <a href="https://github.com/home-assistant/core/pull/80034">#80034</a>) (<a href="http://www.home-assistant.io/integrations/fibaro/">fibaro docs</a>)</li>
<li>Bump aiounifi to v39 (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/80043">#80043</a>) (<a href="http://www.home-assistant.io/integrations/unifi/">unifi docs</a>) (dependency)</li>
<li>Fix Netatmo device trigger (<a href="https://github.com/cgtobi">@cgtobi</a> - <a href="https://github.com/home-assistant/core/pull/80047">#80047</a>) (<a href="http://www.home-assistant.io/integrations/netatmo/">netatmo docs</a>)</li>
<li>Bump ZHA dependencies (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/80049">#80049</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>) (dependency)</li>
</ul>
<h2>Release 2022.10.4 - October 14</h2>
<ul>
<li>Fix state saving when sharing topics for MQTT entities (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/79421">#79421</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Fix nobo_hub presenting temperature in zone with one decimal (<a href="https://github.com/oyvindwe">@oyvindwe</a> - <a href="https://github.com/home-assistant/core/pull/79743">#79743</a>) (<a href="http://www.home-assistant.io/integrations/nobo_hub/">nobo_hub docs</a>)</li>
<li>Bump aioesphomeapi to 11.1.1 (<a href="https://github.com/jesserockz">@jesserockz</a> - <a href="https://github.com/home-assistant/core/pull/79762">#79762</a>) (<a href="http://www.home-assistant.io/integrations/esphome/">esphome docs</a>)</li>
<li>Fix wallbox jwt issue (<a href="https://github.com/hesselonline">@hesselonline</a> - <a href="https://github.com/home-assistant/core/pull/79948">#79948</a>) (<a href="http://www.home-assistant.io/integrations/wallbox/">wallbox docs</a>)</li>
<li>Fix audio detection for IP4m-1041 Amcrest camera (<a href="https://github.com/flacjacket">@flacjacket</a> - <a href="https://github.com/home-assistant/core/pull/80066">#80066</a>) (<a href="http://www.home-assistant.io/integrations/amcrest/">amcrest docs</a>)</li>
<li>Fix set humidity in Tuya (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/80132">#80132</a>) (<a href="http://www.home-assistant.io/integrations/tuya/">tuya docs</a>)</li>
<li>Correct units for sensors in nibe heatpump (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/80140">#80140</a>) (<a href="http://www.home-assistant.io/integrations/nibe_heatpump/">nibe_heatpump docs</a>)</li>
<li>Bump yalexs to 1.2.6 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/80142">#80142</a>) (<a href="http://www.home-assistant.io/integrations/august/">august docs</a>)</li>
<li>Fix incorrect deprecation year for conversion utils (<a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> - <a href="https://github.com/home-assistant/core/pull/80195">#80195</a>)</li>
<li>Fix nexia permanent hold when cool and heat temps are within 2 degrees (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/80297">#80297</a>) (<a href="http://www.home-assistant.io/integrations/nexia/">nexia docs</a>)</li>
<li>Bump HAP-python to fix pairing with iOS 16 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/80301">#80301</a>) (<a href="http://www.home-assistant.io/integrations/homekit/">homekit docs</a>)</li>
<li>Bump total_connect_client to 2022.10 (<a href="https://github.com/austinmroczek">@austinmroczek</a> - <a href="https://github.com/home-assistant/core/pull/80331">#80331</a>) (<a href="http://www.home-assistant.io/integrations/totalconnect/">totalconnect docs</a>)</li>
</ul>
<h2>Release 2022.10.5 - October 20</h2>
<ul>
<li>Handle ReadTimeout during wolflink setup (<a href="https://github.com/jjedelsky">@jjedelsky</a> - <a href="https://github.com/home-assistant/core/pull/78135">#78135</a>) (<a href="http://www.home-assistant.io/integrations/wolflink/">wolflink docs</a>)</li>
<li>Bump plugwise to v0.21.4 (<a href="https://github.com/bouwew">@bouwew</a> - <a href="https://github.com/home-assistant/core/pull/79831">#79831</a>) (<a href="http://www.home-assistant.io/integrations/plugwise/">plugwise docs</a>)</li>
<li>Fix Intellifire UDP timeout (<a href="https://github.com/jeeftor">@jeeftor</a> - <a href="https://github.com/home-assistant/core/pull/80204">#80204</a>) (<a href="http://www.home-assistant.io/integrations/intellifire/">intellifire docs</a>)</li>
<li>Fix solaredge missing data value (<a href="https://github.com/rozie">@rozie</a> - <a href="https://github.com/home-assistant/core/pull/80321">#80321</a>) (<a href="http://www.home-assistant.io/integrations/solaredge/">solaredge docs</a>)</li>
<li>Fix Shelly EM negative power factor (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/80348">#80348</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Fix updating Amcrest binary sensors (<a href="https://github.com/flacjacket">@flacjacket</a> - <a href="https://github.com/home-assistant/core/pull/80365">#80365</a>) (<a href="http://www.home-assistant.io/integrations/amcrest/">amcrest docs</a>)</li>
<li>Fix stream recorder with orientation transforms (<a href="https://github.com/uvjustin">@uvjustin</a> - <a href="https://github.com/home-assistant/core/pull/80370">#80370</a>) (<a href="http://www.home-assistant.io/integrations/stream/">stream docs</a>)</li>
<li>Skip webostv trigger validation before the domain is setup (<a href="https://github.com/dn0sar">@dn0sar</a> - <a href="https://github.com/home-assistant/core/pull/80372">#80372</a>) (<a href="http://www.home-assistant.io/integrations/webostv/">webostv docs</a>)</li>
<li>Fix “Unknown power_off command” for Samsung H6410 (<a href="https://github.com/definitio">@definitio</a> - <a href="https://github.com/home-assistant/core/pull/80386">#80386</a>) (<a href="http://www.home-assistant.io/integrations/samsungtv/">samsungtv docs</a>)</li>
<li>Handle TimeoutError during HKC setup attempts (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/80399">#80399</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Bump aiohomekit to 2.0.2 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/80402">#80402</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Bump ZHA quirks to 0.0.83 (<a href="https://github.com/dmulcahey">@dmulcahey</a> - <a href="https://github.com/home-assistant/core/pull/80489">#80489</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Don’t add RainMachine restriction switches if underlying data is missing (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/80502">#80502</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Add missed write state request for MQTT cover (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/80540">#80540</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Save last target temperature in Shelly climate platform (<a href="https://github.com/bieniu">@bieniu</a> - <a href="https://github.com/home-assistant/core/pull/80561">#80561</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Bump bluetooth-auto-recovery to 0.3.6 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/80643">#80643</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Pin uamqp==1.6.0 (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/80678">#80678</a>)</li>
<li>Fix bluetooth calls from automations in esphome (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/80683">#80683</a>) (<a href="http://www.home-assistant.io/integrations/esphome/">esphome docs</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
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
      Bayesian 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_0" hidden>
<p><code>prob_given_false</code> is now a required configuration variable. Previously it had a default value of <code>1 - prob_given_true</code>; this didn’t really have any mathematical basis and so has been removed. You can use this documentation to calculate what it should be, or to restore your previous functionality, set it to <code>1 - prob_given_true</code>.</p>
<p>The logic of Bayesian sensors has been significantly corrected. Previously the configs given in the examples above would not have worked as expected. For example, if the device <code>device_tracker.paulus</code> was <code>home</code>, this would not have updated the probability that <code>Paulus Home</code> was on. This is because Bayesian ignored observations that were false, even though that <em>should</em> update our probabilities.</p>
<p>Because of this, many users will have had to use either of two workarounds:</p>
<ol>
<li>Providing additional observations that evaluate to <code>True</code> when the other evaluates to <code>False</code>, effectively mirroring it. This forced Bayesian to take into account a negative observation.</li>
<li>Tweaking <code>prior</code>, <code>threshold</code>, and even sometimes <code>prob_given_true</code> and <code>prob_given_false</code> to get the desired functionality, often with the help of a community-provided spreadsheet for iterative testing.</li>
</ol>
<p>To solve (1), all you need do is delete the mirrored entry as shown below:</p>
<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight"><code data-lang="yaml"><span class="c1"># Example of a mirrored entry used a workaround</span>
<span class="na">binary_sensor</span><span class="pi">:</span>
  <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s2">"</span><span class="s">Heat</span><span class="nv"> </span><span class="s">On"</span>
    <span class="na">platform</span><span class="pi">:</span> <span class="s">bayesian</span>
    <span class="na">prior</span><span class="pi">:</span> <span class="m">0.2</span>
    <span class="na">probability_threshold</span><span class="pi">:</span> <span class="m">0.9</span>
    <span class="na">observations</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="na">platform</span><span class="pi">:</span> <span class="s">numeric_state</span>
        <span class="na">entity_id</span><span class="pi">:</span> <span class="s">sensor.outside_air_temperature_fahrenheit</span>
        <span class="na">prob_given_true</span><span class="pi">:</span> <span class="m">0.95</span>
        <span class="na">prob_given_false</span><span class="pi">:</span> <span class="m">0.05</span>
        <span class="na">below</span><span class="pi">:</span> <span class="m">50</span>
      <span class="pi">-</span> <span class="na">platform</span><span class="pi">:</span> <span class="s">numeric_state</span> <span class="c1"># line no longer needed - delete</span>
        <span class="na">entity_id</span><span class="pi">:</span> <span class="s">sensor.outside_air_temperature_fahrenheit</span> <span class="c1"># line no longer needed - delete</span>
        <span class="na">prob_given_true</span><span class="pi">:</span> <span class="m">0.05</span> <span class="c1"># line no longer needed - delete</span>
        <span class="na">prob_given_false</span><span class="pi">:</span> <span class="m">0.95</span> <span class="c1"># line no longer needed - delete</span>
        <span class="na">above</span><span class="pi">:</span> <span class="m">50</span> <span class="c1"># no longer needed - delete</span>
      <span class="pi">-</span> <span class="na">platform</span><span class="pi">:</span> <span class="s">state</span>
        <span class="na">entity_id</span><span class="pi">:</span> <span class="s">binary_sensor.house_occupied</span>
        <span class="na">prob_given_true</span><span class="pi">:</span> <span class="m">0.3</span>
        <span class="na">prob_given_false</span><span class="pi">:</span> <span class="m">0.05</span>
        <span class="na">to_state</span><span class="pi">:</span> <span class="s2">"</span><span class="s">on"</span>
      <span class="pi">-</span> <span class="na">platform</span><span class="pi">:</span> <span class="s">state</span> <span class="c1"># line no longer needed - delete</span>
        <span class="na">entity_id</span><span class="pi">:</span> <span class="s">binary_sensor.house_occupied</span> <span class="c1"># line no longer needed - delete</span>
        <span class="na">prob_given_true</span><span class="pi">:</span> <span class="m">0.7</span> <span class="c1"># line no longer needed - delete</span>
        <span class="na">prob_given_false</span><span class="pi">:</span> <span class="m">0.95</span> <span class="c1"># line no longer needed - delete</span>
        <span class="na">to_state</span><span class="pi">:</span> <span class="s2">"</span><span class="s">off"</span> <span class="c1"># line no longer needed - delete</span>
</code></pre></div></div>
<p>To solve (2), you need to re-estimate your probabilities using this documentation - this will likely result in better performance in the long term.</p>
<p>A hacky and <em>not recommended</em> workaround to restore your previous functionality would be to put in a mirrored entry for each observation where <code>prob_given_false</code> is equal to <code>prob_given_true</code>. This will induce the same behavior as before - the negative, counterfactual observation is essentially ignored. Be warned - this may break or cause errors in future versions and will not work for <code>template</code> or <code>numeric_state</code> observations. For templates, instead, make them return <code>None</code> where they would have returned <code>False</code> to induce Bayesian to ignore them.</p>
<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight"><code data-lang="yaml"><span class="na">binary_sensor</span><span class="pi">:</span>
  <span class="pi">-</span> <span class="na">name</span><span class="pi">:</span> <span class="s2">"</span><span class="s">Heat</span><span class="nv"> </span><span class="s">On"</span>
    <span class="na">platform</span><span class="pi">:</span> <span class="s">bayesian</span>
    <span class="na">prior</span><span class="pi">:</span> <span class="m">0.2</span>
    <span class="na">probability_threshold</span><span class="pi">:</span> <span class="m">0.9</span>
    <span class="na">observations</span><span class="pi">:</span>
      <span class="pi">-</span> <span class="na">platform</span><span class="pi">:</span> <span class="s">state</span>
        <span class="na">entity_id</span><span class="pi">:</span> <span class="s">binary_sensor.house_occupied</span>
        <span class="na">prob_given_true</span><span class="pi">:</span> <span class="m">0.3</span>
        <span class="na">prob_given_false</span><span class="pi">:</span> <span class="m">0.05</span>
        <span class="na">to_state</span><span class="pi">:</span> <span class="s2">"</span><span class="s">on"</span>
      <span class="pi">-</span> <span class="na">platform</span><span class="pi">:</span> <span class="s">state</span> <span class="c1"># not </span>
        <span class="na">entity_id</span><span class="pi">:</span> <span class="s">binary_sensor.house_occupied</span> <span class="c1"># not recommended</span>
        <span class="na">prob_given_true</span><span class="pi">:</span> <span class="m">0.5</span> <span class="c1"># not recommended</span>
        <span class="na">prob_given_false</span><span class="pi">:</span> <span class="m">0.5</span> <span class="c1"># not recommended</span>
        <span class="na">to_state</span><span class="pi">:</span> <span class="s2">"</span><span class="s">off"</span> <span class="c1"># not recommended</span>
</code></pre></div></div>
<p>(<a href="https://github.com/HarvsG">@HarvsG</a> - <a href="https://github.com/home-assistant/core/pull/67631">#67631</a>) (<a href="http://www.home-assistant.io/integrations/bayesian">documentation</a>)</p>
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
      Bluesound 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_1" hidden>
<p>When the player is grouped and isn’t master, the state no longer reports as
“grouped” but instead reports as “idle”.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/78096">#78096</a>) (<a href="http://www.home-assistant.io/integrations/bluesound">documentation</a>)</p>
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
      Elexa Guardian 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_2" hidden>
<p>The previously deprecated <code>guardian.reboot</code> and
<code>guardian.reset_valve_diagnostics</code> services have been removed and replaced
by button entities on the guardian valve controller device.</p>
<p>(<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/78663">#78663</a>) (<a href="http://www.home-assistant.io/integrations/guardian">documentation</a>)</p>
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
      Frontier Silicon 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_3" hidden>
<p>When the player is loading, the state no longer reports as “opening”,
but instead reports as “buffering”.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/78101">#78101</a>) (<a href="http://www.home-assistant.io/integrations/frontier_silicon">documentation</a>)</p>
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
<p>The previously deprecated YAML configuration of the HERE Travel Time
integration has been removed.</p>
<p>HERE Travel Time is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files</p>
<p>(<a href="https://github.com/eifinger">@eifinger</a> - <a href="https://github.com/home-assistant/core/pull/77959">#77959</a>) (<a href="http://www.home-assistant.io/integrations/here_travel_time">documentation</a>)</p>
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
      HomeKit Controller 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_5" hidden>
<p>When the player is not active, the state no longer reports as “problem”,
but instead reports as “off”.</p>
<p>When the player is active, but the state doesn’t match known states,
the state no longer reports as “ok” but instead reports as “on”.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/78105">#78105</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller">documentation</a>)</p>
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
      Radarr 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_6" hidden>
<p>Some breaking changes have been made in disabling the Movies count sensor out
of caution. This sensor can cause problems with massive databases.
If you still wish to use it, you may do so.</p>
<p>Movie names are no longer included as attributes in the movies sensor. Upcoming
has been removed. It is being modernized as calendar items should be.
Diskspace is now split into different sensors, one for each folder.
Status and commands have been removed as they don’t appear to have real
value for automations.</p>
<p>(<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/78965">#78965</a>) (<a href="http://www.home-assistant.io/integrations/radarr">documentation</a>)</p>
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
      Supervisor 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_7" hidden>
<p>In Home Assistant 2022.4, the binary sensors for showing an update from the
Supervisor integration were deprecated in favor of
<a href="http://www.home-assistant.io/integrations/hassio/#update-entities">update entities</a>.</p>
<p>These binary sensors for showing an update have now been removed.</p>
<p>(<a href="https://github.com/ludeeus">@ludeeus</a> - <a href="https://github.com/home-assistant/core/pull/60677">#60677</a>) (<a href="http://www.home-assistant.io/integrations/hassio">documentation</a>)</p>
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
      Synology DSM 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_8" hidden>
<p>In Home Assistant 2022.4 the binary sensor of Synology DSM for showing an
update was deprecated in favor of the newer update entity.</p>
<p>This binary sensor for showing an update has now been removed.</p>
<p>(<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/79509">#79509</a>) (<a href="http://www.home-assistant.io/integrations/synology_dsm">documentation</a>)</p>
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
      Workday 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_9" hidden>
<p>Due to changes in the upstream library, the following is no longer supported by
the Workday integration:</p>
<ul>
<li>UK subdivisions (Wales, Scotland, England…) can no longer be provided as
values to the <code>country</code> configuration key. They are still available for use as
values to the <code>province</code> setting.</li>
<li><code>IsleOfMan</code> is no longer a recognized province of the UK,
use the <code>IM</code> code for the <code>country</code> instead.</li>
<li>The extended Portuguese holiday set (<code>PortugalExt</code>) is no longer available
as a separate country; instead you should use the country code <code>PT</code> and
the province <code>Ext</code>.</li>
</ul>
<p>(<a href="https://github.com/TomBrien">@TomBrien</a> - <a href="https://github.com/home-assistant/core/pull/78832">#78832</a>) (<a href="http://www.home-assistant.io/integrations/workday">documentation</a>)</p>
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
      Z-Wave 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_10" hidden>
<p>You must use <code>zwave-js-server</code> 1.24.0 or greater (schema 24).</p>
<p>With this release, you will need to update your <code>zwave-js-server</code> instance.</p>
<ul>
<li>If you use the <code>Z-Wave JS</code> addon, you need to have at least version 0.1.74.</li>
<li>If you use the <code>Z-Wave JS UI</code> addon, you need to have at least version 1.1.0.</li>
<li>If you use the <code>Z-Wave JS UI</code> Docker container, you need to have at least version 8.1.0.</li>
<li>If you run your own Docker container, or some other installation method, you will need to update your <code>zwave-js-server</code> instance to at least 1.24.0.</li>
</ul>
<p>(<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/79342">#79342</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js">documentation</a>)</p>
<hr />
<p>The fan speed levels of Leviton ZW4SF fan controllers are now mapped correctly
to corresponding percentage levels in Home Assistant.</p>
<p>This may change which fan speed is selected at certain percentages.
You should adjust any automations and scripts that target these devices
as needed.</p>
<p>(<a href="https://github.com/mkowalchuk">@mkowalchuk</a> - <a href="https://github.com/home-assistant/core/pull/60677">#60677</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js">documentation</a>)</p>
</div>
  </div>
</div>
<p>If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
<a href="https://developers.home-assistant.io/blog/">developer blog</a>. The following are the most notable for this release:</p>
<ul>
<li><a href="https://developers.home-assistant.io/blog/2022/09/16/bluetooth-unavailable-api-changes">Bluetooth async_track_unavailable API changes</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/04/18/calendar-data-model/">Calendar Data Model improvements and deprecations</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/09/06/media-player-repeat-mode-deprecation">Deprecating media player constants</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/09/28/deprecate-conversion-utilities/">Deprecating unit conversion utilities</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/09/29/statistics_refactoring">Long term statistics now tracks the source entity’s unit</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/09/28/new_sensor_device_classes">New sensor device classes</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/08/25/issue_registry_moved_to_helpers">The issue registry has been moved to homeassistant.helpers</a></li>
</ul>
<h2>Farewell to the following</h2>
<p>The following integrations are also no longer available as of this release:</p>
<ul>
<li><strong>Ambee</strong> as it became impossible to get API keys for private use.</li>
<li><strong>Climacell</strong> has been replaced by <a href="http://www.home-assistant.io/integrations/tomorrowio">Tomorrow.io</a>.</li>
<li><strong>Flu Near You</strong> the resource is no longer available, causing the integration
no longer to work.</li>
<li><strong>U.S. Citizenship and Immigration Services (USCIS)</strong> the integration relied
on webscraping, which is no longer allowed.</li>
</ul>
<h2>All changes</h2>
<p>Of course, there is a lot more in this release. You can find a list of
all changes made here: <a href="http://www.home-assistant.io/changelogs/core-2022.10">Full changelog for Home Assistant Core 2022.10</a></p>
"
link: "https://www.home-assistant.io/blog/2022/10/05/release-202210/"
category:
---
