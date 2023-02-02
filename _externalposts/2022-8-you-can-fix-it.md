---
title: "2022.8 - You can fix it!"
date: 2022-08-03 00:00:00 +0000
dateadded: 2023-02-02 08:54:04 +0100
description: "<p><a href='http://www.home-assistant.io/integrations/#version/2022.8'><img src='http://www.home-assistant.io/images/blog/2022-08/social.png' style='border: 0;box-shadow: none;'></a></p>
<p>Home Assistant Core 2022.8! 🏖</p>
<p>While many of you enjoy a well-deserved vacation around this time, it seems
like it didn’t slow down the development/contributions made to Home Assistant.
What a beautifully packed release this is again!</p>
<p>I’m super stoked about the added Bluetooth support, opening up a whole new
world of devices to Home Assistant. I’m even more excited about the new repairs
and supported brands features. Those are going to help out A LOT 😃.</p>
<p>Do you know what is really great about this release? All the major features and
changes announced in this release are a step forward to our current goal:
Streamlining experiences.</p>
<p>Enjoy the release!</p>
<p>../Frenck</p>
<!--more-->
<ul>
<li><a href="#introducing-repairs-you-can-fix-it">Introducing Repairs: You can fix it!</a></li>
<li><a href="#first-class-bluetooth-support">First-class Bluetooth support</a></li>
<li><a href="#homekit-bluetooth-support">HomeKit Bluetooth support</a></li>
<li><a href="#finding-the-integration-supporting-your-device">Finding the integration supporting your device</a></li>
<li><a href="#better-map-colors">Better map colors</a></li>
<li><a href="#other-noteworthy-changes">Other noteworthy changes</a></li>
<li><a href="#new-integrations">New Integrations</a></li>
<li><a href="#integrations-now-available-to-set-up-from-the-ui">Integrations now available to set up from the UI</a></li>
<li><a href="#release-202281---august-4">Release 2022.8.1 - August 4</a></li>
<li><a href="#release-202282---august-7">Release 2022.8.2 - August 7</a></li>
<li><a href="#release-202283---august-9">Release 2022.8.3 - August 9</a></li>
<li><a href="#release-202284---august-12">Release 2022.8.4 - August 12</a></li>
<li><a href="#release-202285---august-15">Release 2022.8.5 - August 15</a></li>
<li><a href="#release-202286---august-17">Release 2022.8.6 - August 17</a></li>
<li><a href="#release-202287---august-25">Release 2022.8.7 - August 25</a></li>
<li><a href="#need-help-join-the-community">Need help? Join the community!</a></li>
<li><a href="#breaking-changes">Breaking Changes</a></li>
<li><a href="#farewell-to-the-following">Farewell to the following</a></li>
<li><a href="#all-changes">All changes</a></li>
</ul>
<p>Missed our release party live stream on YouTube? Don’t worry! You can watch
the recording of it right here!</p>
<p><lite-youtube videoid="m9gKFH8WlzY" videotitle="Home Assistant 2022.8 Release Party"></lite-youtube></p>
<h2>Introducing Repairs: You can fix it!</h2>
<p>A completely new feature we hope you are going to love: <strong>Repairs</strong>! 👷‍♂️</p>
<p>The repairs dashboard can be found in the settings menu and is a place where
Home Assistant can notify you of issues that you can (and should) fix!</p>
<p>From detected current issues on your system to future issues, e.g., caused
by the use of a feature that will be removed, and anything in between.
The problems reported by the repair dashboard are actionable and resolvable
by you.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-08/repairs.png' alt='Screenshot showing the repairs dashboard, with some reported and repairable issues'>
<p>These repairable issues reported can be anything and are specifically tailored
to your Home Assistant instance. Clicking on an issue will show you more
information about it and tell you what you need to do to fix it.</p>
<p>Sometimes, this needs manual intervention by, for example, updating your YAML
configuration; Other times, it will automatically fix an issue for you after it
asks you to confirm it or after asking you to make a choice.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-08/repairs-issue-details.png' alt='Screenshot showing details shown by a repairable issue, providing information on how to resolve it.'>
<p>This release can detect about 25 issues now, and additionally, if a
<a href="http://www.home-assistant.io/integrations/homeassistant_alerts">Home Assistant Alert</a> is found that matches your system, it will also show up
in the repairs dashboard.</p>
<p>There are many use cases for the new repairs feature, and you can expect
it to be extended a lot, with more issue detections, in the near future.</p>
<h2>First-class Bluetooth support</h2>
<p>Today, we proudly announce that Home Assistant now has <strong>first-class</strong>
Bluetooth support! 🥇</p>
<p>A brand new <a href="http://www.home-assistant.io/integrations/bluetooth">Bluetooth integration</a> has been added, which provides absolutely
amazing Bluetooth support to Home Assistant, including automatic discovery of
new devices and the ability to push device updates.</p>
<p>Integrations that implement device support can easily be built on top of these
features, meaning we now have a solid base in Home Assistant to unlock
support for many Bluetooth devices out there!</p>
<p>The screenshot below shows that the Bluetooth integration is set up, and it
discovered a new device. In this case, it discovered a Mi Flora Flower
care sensor device.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-08/bluetooth.png' alt='Screenshot showing the integration page, with an active Bluetooth integration and a Mi Flora plant sensor device being discovered'>
<p>A good example is the <a href="http://www.home-assistant.io/integrations/switchbot">SwitchBot</a> integration. It has been updated to support
the new Bluetooth integration, and because of that, is now a push-based
integration providing a much more stable experience.</p>
<p>This release adds five integrations built on this: <a href="http://www.home-assistant.io/integrations/sensorpush">SensorPush</a>,
<a href="http://www.home-assistant.io/integrations/govee_ble">Govee</a>, <a href="http://www.home-assistant.io/integrations/inkbird">INKBIRD</a>, <a href="http://www.home-assistant.io/integrations/moat">Moat</a>, and <a href="http://www.home-assistant.io/integrations/xiaomi_ble">Xiaomi BLE</a>. The latter also provides
support for the reasonably popular Mi Flora plant sensors.</p>
<p>Suppose you are using the Home Assistant OS on a Raspberry Pi 3 or 4, or are
using a <a href="http://www.home-assistant.io/integrations/bluetooth#installing-a-usb-bluetooth-adapter">supported Bluetooth adapter</a>. In that case, the Bluetooth integration
will work out of the box for new installations and is automatically discovered
on existing setups.</p>
<p>Shout out to <a href="https://github.com/bdraco">@bdraco</a> for creating this fantastic new addition, <a href="https://github.com/Ernst79">@Ernst79</a> for
providing implementation feedback, and his excellent work on the
<a href="https://github.com/custom-components/ble_monitor">ble_monitor</a> custom integration, which was an inspiration for the
Bluetooth integration. Lastly, a shout out to <a href="https://github.com/Jc2k">@Jc2k</a> for implementing the
<a href="http://www.home-assistant.io/integrations/xiaomi_ble">Xiaomi BLE</a> integration that greatly helped with testing. Thanks guys! 🙏</p>
<h2>HomeKit Bluetooth support</h2>
<p>To continue the story on Bluetooth, the <a href="http://www.home-assistant.io/integrations/homekit_controller">HomeKit Controller</a> now also
supports Bluetooth and leverages the above-mentioned new Bluetooth
integration 🎉</p>
<p>In case you didn’t know, the <a href="http://www.home-assistant.io/integrations/homekit_controller">HomeKit Controller</a> integration allows you
to connect to HomeKit-capable devices and integrate them directly into
Home Assistant. Allowing you to monitor and control these devices,
they support push-based updates and, above all: Are entirely local!</p>
<p>You don’t need to own or have an Apple phone or computer to use this!</p>
<p>Supporting HomeKit Bluetooth-capable devices is fantastic! It makes a lot of
devices out there compatible with Home Assistant that have no other way of
integrating. There are lots of door locks, wall plugs, and other smart devices
that you can use now.</p>
<p>Thanks for the work on this <a href="https://github.com/Jc2k">@Jc2k</a> and <a href="https://github.com/bdraco">@bdraco</a>!</p>
<h2>Finding the integration supporting your device</h2>
<p>Some integrations work with multiple different brands. This can happen because,
for example, those devices share a communication protocol, are white-labeled
and sold under numerous brand names, or may carry different brand names
depending on where in the world they are sold.</p>
<p>For example, if you have a Luxaflex cover, you can actually use it using the
Hunter Douglas PowerView integration. And this is not the only example;
there are many more! The problem is, how would one know that?</p>
<p>To make setting up things in Home Assistant easier, integrations can now
support multiple brands! So, if you now add an integration in Home Assistant
and search for Luxaflex, you will find one!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-08/supported-brands.png' alt='Screenshot demonstrating the supported brands; it is now possible to search for a brand that is supported by another integration'>
<p>When you add a new integration that is supported by another integration,
Home Assistant will tell you which integration provides the support and
guide you to set up that integration.</p>
<h2>Better map colors</h2>
<p>Maps shown in Home Assistant have had a slight makeover and now use a new color
palette. These new colors provide much greater contrast and significantly
improve their readability.</p>
<p>Especially if you are using the dark mode in the user interface of
Home Assistant, you will notice a big difference.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-08/maps-colors.png' alt='Screenshot demonstrating the new map colors in both light and dark mode'>
<p>Thanks to <a href="https://github.com/KTibow">@KTibow</a> for getting the ball rolling on this one, <a href="https://github.com/matthiasdebaat">@matthiasdebaat</a>
for providing UX feedback, and <a href="https://github.com/bramkragten">@bramkragten</a> for making this change.</p>
<h2>Other noteworthy changes</h2>
<p>There is much more juice in this release; here are some of the other
noteworthy changes this release:</p>
<ul>
<li>“Z-Wave JS” is now shown and known as “Z-Wave” in Home Assistant.</li>
<li>The “System Health” setting menu item, has been moved to the “Repairs”
dashboard, in the overflow menu (three dots in the top right).</li>
<li>In the background, a project has been started to standardize the names of entities and
devices. This work is in progress and will take a long time to complete,
as each possible entity has to be adjusted. But it will streamline experiences!</li>
<li>You can now change the shown unit of measurement of number entities that
provide a temperature. Thanks, <a href="https://github.com/emontnemery">@emontnemery</a>!</li>
<li><a href="https://github.com/frenck">@frenck</a> updated the events developer tools to use YAML instead of JSON
and added syntax highlighting.</li>
<li>The <a href="http://www.home-assistant.io/integrations/lifx">LIFX</a> integration got a significant overhaul, making it much more
reliable. Thanks for the work on this in the past releases
<a href="https://github.com/bdraco">@bdraco</a> and <a href="https://github.com/Djelibeybi">@Djelibeybi</a>!</li>
<li>The <a href="http://www.home-assistant.io/integrations/unifi">UniFi Network</a> now has update entities, allowing you to update the
firmware of UniFi devices directly from Home Assistant. Great addition <a href="https://github.com/J3173">@J3173</a>!</li>
<li>The Material Design Icons have been updated to v7.0.96, giving you
<a href="https://pictogrammers.github.io/@mdi/font/7.0.96/">100</a> brand new icons
to use 🤩 Thanks, <a href="https://github.com/goyney">@goyney</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/switchbot">SwitchBot</a> now supports Hygrometers (thanks <a href="https://github.com/murtas">@murtas</a>) and door/contact
sensors (thanks <a href="https://github.com/bdraco">@bdraco</a>)!</li>
<li><a href="https://github.com/Noltari">@Noltari</a> added update entities to the <a href="http://www.home-assistant.io/integrations/qnap_qsw">QNAP QSW</a> integration! Nice!</li>
<li><a href="https://github.com/frenck">@frenck</a> added multifactor authentication support for <a href="http://www.home-assistant.io/integrations/verisure">Verisure</a>. So now you
can add more security to your Verisure alarm system.</li>
<li><a href="http://www.home-assistant.io/integrations/homewizard">HomeWizard Energy</a> added support for Watermeters! Thanks, <a href="https://github.com/DCSBL">@DCSBL</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/yolink">Yolink</a> now supports garage doors, nice <a href="https://github.com/matrixd2">@matrixd2</a>!</li>
<li><a href="https://github.com/simeon-simsoft">@simeon-simsoft</a> for bidirectional <a href="http://www.home-assistant.io/integrations/wallbox">Wallbox</a> chargers, thank you!</li>
<li>You can now view your current network connection details in the
Network settings screen. Thanks, <a href="https://github.com/zsarnett">@zsarnett</a>!</li>
<li><a href="http://www.home-assistant.io/integrations/lutron_caseta">Lutron Caséta</a> now supports the Lutron RA3 Sunnata Keypads. Thanks, <a href="https://github.com/danaues">@danaues</a>!</li>
<li><a href="https://github.com/mkmer">@mkmer</a> added a battery level sensor to <a href="http://www.home-assistant.io/integrations/aladdin_connect">Aladdin Connect</a>, thank you!</li>
<li>The <a href="http://www.home-assistant.io/integrations/sensibo">Sensibo</a> integration now supports the AirQ sensor. Thanks, <a href="https://github.com/gjohansson-ST">@gjohansson-ST</a>!</li>
</ul>
<h2>New Integrations</h2>
<p>We welcome the following new integrations in this release:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/bluetooth">Bluetooth</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/govee_ble">Govee Bluetooth</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/homeassistant_alerts">Home Assistant Alerts</a>, added by <a href="https://github.com/emontnemery">@emontnemery</a> &amp; <a href="https://github.com/balloob">@balloob</a></li>
<li><a href="http://www.home-assistant.io/integrations/inkbird">INKBIRD</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/moat">Moat</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/nextdns">NextDNS</a>, added by <a href="https://github.com/bieniu">@bieniu</a></li>
<li><a href="http://www.home-assistant.io/integrations/repairs">Repairs</a>, added by <a href="https://github.com/emontnemery">@emontnemery</a></li>
<li><a href="http://www.home-assistant.io/integrations/rhasspy">Rhasspy</a>, added by <a href="https://github.com/balloob">@balloob</a></li>
<li><a href="http://www.home-assistant.io/integrations/sensorpush">SensorPush</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/xiaomi_ble">Xiaomi BLE</a>, added by <a href="https://github.com/Jc2k">@Jc2k</a></li>
</ul>
<h2>Integrations now available to set up from the UI</h2>
<p>The following integrations are now available via the Home Assistant UI:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/anthemav">Anthem A/V Receivers</a>, done by <a href="https://github.com/Hyralex">@Hyralex</a></li>
<li><a href="http://www.home-assistant.io/integrations/soundtouch">Bose SoundTouch</a>, done by <a href="https://github.com/kroimon">@kroimon</a></li>
</ul>
<h2>Release 2022.8.1 - August 4</h2>
<ul>
<li>Fix zwave_js addon info (<a href="https://github.com/MartinHjelmare">@MartinHjelmare</a> - <a href="https://github.com/home-assistant/core/pull/76044">#76044</a>) (<a href="http://www.home-assistant.io/integrations/hassio/">hassio docs</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Bump bleak to 0.15.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76136">#76136</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Allow climate operation mode fan_only as custom mode in Alexa (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/76148">#76148</a>) (<a href="http://www.home-assistant.io/integrations/alexa/">alexa docs</a>)</li>
<li>Remove icon attribute if device class is set (<a href="https://github.com/dgomes">@dgomes</a> - <a href="https://github.com/home-assistant/core/pull/76161">#76161</a>) (<a href="http://www.home-assistant.io/integrations/integration/">integration docs</a>)</li>
<li>Fix flux_led ignored entries not being respected (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76173">#76173</a>) (<a href="http://www.home-assistant.io/integrations/flux_led/">flux_led docs</a>)</li>
<li>Fix race in bluetooth async_process_advertisements (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76176">#76176</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Add repair item to remove no-longer-functioning Flu Near You integration (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/76177">#76177</a>) (<a href="http://www.home-assistant.io/integrations/flunearyou/">flunearyou docs</a>) (deprecation)</li>
<li>Fix arm away in Risco (<a href="https://github.com/OnFreund">@OnFreund</a> - <a href="https://github.com/home-assistant/core/pull/76188">#76188</a>) (<a href="http://www.home-assistant.io/integrations/risco/">risco docs</a>)</li>
<li>Fix nullable ip_address in mikrotik (<a href="https://github.com/engrbm87">@engrbm87</a> - <a href="https://github.com/home-assistant/core/pull/76197">#76197</a>) (<a href="http://www.home-assistant.io/integrations/mikrotik/">mikrotik docs</a>)</li>
<li>Mark RPI Power binary sensor as diagnostic (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/76198">#76198</a>) (<a href="http://www.home-assistant.io/integrations/rpi_power/">rpi_power docs</a>)</li>
<li>BLE pairing reliablity fixes for HomeKit Controller (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76199">#76199</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>) (dependency)</li>
<li>Bump NextDNS library (<a href="https://github.com/bieniu">@bieniu</a> - <a href="https://github.com/home-assistant/core/pull/76207">#76207</a>) (<a href="http://www.home-assistant.io/integrations/nextdns/">nextdns docs</a>)</li>
<li>Bump AIOAladdin Connect to 0.1.41 (<a href="https://github.com/mkmer">@mkmer</a> - <a href="https://github.com/home-assistant/core/pull/76217">#76217</a>) (<a href="http://www.home-assistant.io/integrations/aladdin_connect/">aladdin_connect docs</a>) (dependency)</li>
<li>Fix spelling of OpenWrt in luci integration manifest (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/76219">#76219</a>) (<a href="http://www.home-assistant.io/integrations/luci/">luci docs</a>)</li>
<li>Fix Life360 recovery from server errors (<a href="https://github.com/pnbruckner">@pnbruckner</a> - <a href="https://github.com/home-assistant/core/pull/76231">#76231</a>) (<a href="http://www.home-assistant.io/integrations/life360/">life360 docs</a>)</li>
<li>More explicitly call out special cases with SimpliSafe authorization code (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/76232">#76232</a>) (<a href="http://www.home-assistant.io/integrations/simplisafe/">simplisafe docs</a>)</li>
<li>Enable strict typing for HomeKit Controller config flow module (<a href="https://github.com/Jc2k">@Jc2k</a> - <a href="https://github.com/home-assistant/core/pull/76233">#76233</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Fix some homekit_controller pylint warnings and (local only) test failures (<a href="https://github.com/Jc2k">@Jc2k</a> - <a href="https://github.com/home-assistant/core/pull/76122">#76122</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
</ul>
<h2>Release 2022.8.2 - August 7</h2>
<ul>
<li>Update gree to use the network component to set discovery interfaces (<a href="https://github.com/Jc2k">@Jc2k</a> - <a href="https://github.com/home-assistant/core/pull/75812">#75812</a>) (<a href="http://www.home-assistant.io/integrations/gree/">gree docs</a>)</li>
<li>Use stored philips_js system data on start (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/75981">#75981</a>) (<a href="http://www.home-assistant.io/integrations/philips_js/">philips_js docs</a>)</li>
<li>Ensure bluetooth recovers if Dbus gets restarted (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76249">#76249</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Fix default sensor names in NextDNS integration (<a href="https://github.com/bieniu">@bieniu</a> - <a href="https://github.com/home-assistant/core/pull/76264">#76264</a>) (<a href="http://www.home-assistant.io/integrations/nextdns/">nextdns docs</a>)</li>
<li>Bump ZHA dependencies (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/76275">#76275</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Bump pydeconz to v102 (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/76287">#76287</a>) (<a href="http://www.home-assistant.io/integrations/deconz/">deconz docs</a>)</li>
<li>Fix ZHA light color temp support (<a href="https://github.com/dmulcahey">@dmulcahey</a> - <a href="https://github.com/home-assistant/core/pull/76305">#76305</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Bump pySwitchbot to 0.18.4 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76322">#76322</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump aiobafi6 to 0.7.2 to unblock #76328 (<a href="https://github.com/jfroy">@jfroy</a> - <a href="https://github.com/home-assistant/core/pull/76330">#76330</a>) (<a href="http://www.home-assistant.io/integrations/baf/">baf docs</a>)</li>
<li>Postpone broadlink platform switch until config entry is ready (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/76371">#76371</a>) (<a href="http://www.home-assistant.io/integrations/broadlink/">broadlink docs</a>)</li>
</ul>
<h2>Release 2022.8.3 - August 9</h2>
<ul>
<li>Add debug logging for unknown Notion errors (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/76395">#76395</a>) (<a href="http://www.home-assistant.io/integrations/notion/">notion docs</a>)</li>
<li>Automatically enable common RainMachine restriction entities (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/76405">#76405</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Fix bug where RainMachine entity states don’t populate on startup (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/76412">#76412</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Fix Govee 5185 Meat Thermometers with older firmware not being discovered (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76414">#76414</a>) (<a href="http://www.home-assistant.io/integrations/govee_ble/">govee_ble docs</a>)</li>
<li>Fix iCloud listeners (<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/76437">#76437</a>) (<a href="http://www.home-assistant.io/integrations/icloud/">icloud docs</a>)</li>
<li>Bump version of pyunifiprotect to 4.0.12 (<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/76465">#76465</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect/">unifiprotect docs</a>)</li>
<li>Bump aiohomekit to 1.2.6 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76488">#76488</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Fix inkbird ibbq2s that identify with xbbq (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76492">#76492</a>) (<a href="http://www.home-assistant.io/integrations/inkbird/">inkbird docs</a>)</li>
<li>Bump govee-ble to 0.14.0 to fix H5052 sensors (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76497">#76497</a>) (<a href="http://www.home-assistant.io/integrations/govee_ble/">govee_ble docs</a>)</li>
<li>Fix pairing with HK accessories that do not provide format for vendor chars (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76502">#76502</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Fix #76283 (<a href="https://github.com/ocalvo">@ocalvo</a> - <a href="https://github.com/home-assistant/core/pull/76531">#76531</a>) (<a href="http://www.home-assistant.io/integrations/sms/">sms docs</a>)</li>
<li>Bump aiohomekit to 1.2.8 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76532">#76532</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
</ul>
<h2>Release 2022.8.4 - August 12</h2>
<ul>
<li>Bump ZHA dependencies (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/76565">#76565</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Replaces aiohttp.hdrs CONTENT_TYPE with plain string for the Swisscom integration (<a href="https://github.com/DeeVeX">@DeeVeX</a> - <a href="https://github.com/home-assistant/core/pull/76568">#76568</a>) (<a href="http://www.home-assistant.io/integrations/swisscom/">swisscom docs</a>)</li>
<li>Fix homekit_controller not noticing ip and port changes that zeroconf has found (<a href="https://github.com/Jc2k">@Jc2k</a> - <a href="https://github.com/home-assistant/core/pull/76570">#76570</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Fix Spotify deviding None value in current progress (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/76581">#76581</a>) (<a href="http://www.home-assistant.io/integrations/spotify/">spotify docs</a>)</li>
<li>Improve code quality in huawei_lte (<a href="https://github.com/a-p-z">@a-p-z</a> - <a href="https://github.com/home-assistant/core/pull/76583">#76583</a>) (<a href="http://www.home-assistant.io/integrations/huawei_lte/">huawei_lte docs</a>)</li>
<li>Fix Govee 5181 with old firmware (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76600">#76600</a>) (<a href="http://www.home-assistant.io/integrations/govee_ble/">govee_ble docs</a>)</li>
<li>Fix evohome preset modes (<a href="https://github.com/MartinHjelmare">@MartinHjelmare</a> - <a href="https://github.com/home-assistant/core/pull/76606">#76606</a>) (<a href="http://www.home-assistant.io/integrations/evohome/">evohome docs</a>)</li>
<li>Add missing _abort_if_unique_id_configured to ble integrations (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76624">#76624</a>) (<a href="http://www.home-assistant.io/integrations/govee_ble/">govee_ble docs</a>) (<a href="http://www.home-assistant.io/integrations/sensorpush/">sensorpush docs</a>) (<a href="http://www.home-assistant.io/integrations/inkbird/">inkbird docs</a>) (<a href="http://www.home-assistant.io/integrations/xiaomi_ble/">xiaomi_ble docs</a>) (<a href="http://www.home-assistant.io/integrations/moat/">moat docs</a>)</li>
<li>Fix non-awaited coroutine in BMW notify (<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/76664">#76664</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive/">bmw_connected_drive docs</a>)</li>
</ul>
<h2>Release 2022.8.5 - August 15</h2>
<ul>
<li>Update systembridgeconnector to 3.4.4 (<a href="https://github.com/timmo001">@timmo001</a> - <a href="https://github.com/home-assistant/core/pull/75362">#75362</a>) (<a href="http://www.home-assistant.io/integrations/system_bridge/">system_bridge docs</a>)</li>
<li>🐛 Fix “The request content was malformed” error in home_connect (<a href="https://github.com/hansgoed">@hansgoed</a> - <a href="https://github.com/home-assistant/core/pull/76411">#76411</a>) (<a href="http://www.home-assistant.io/integrations/home_connect/">home_connect docs</a>)</li>
<li>Bump pySwitchbot to 0.18.5 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76640">#76640</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump pySwitchbot to 0.18.6 to fix disconnect race (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76656">#76656</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump pySwitchbot to 0.18.10 to handle empty data and disconnects (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76684">#76684</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Fix google calendar disabled entity handling (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/76699">#76699</a>) (<a href="http://www.home-assistant.io/integrations/google/">google docs</a>)</li>
<li>Motion Blinds fix OperationNotAllowed (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/76712">#76712</a>) (<a href="http://www.home-assistant.io/integrations/motion_blinds/">motion_blinds docs</a>)</li>
<li>Update xknx to 1.0.0 🎉 (<a href="https://github.com/marvin-w">@marvin-w</a> - <a href="https://github.com/home-assistant/core/pull/76734">#76734</a>) (<a href="http://www.home-assistant.io/integrations/knx/">knx docs</a>)</li>
<li>Bump aiohomekit to 1.2.10 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76738">#76738</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Fix bad data with inkbird bbq sensors (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76739">#76739</a>) (<a href="http://www.home-assistant.io/integrations/inkbird/">inkbird docs</a>)</li>
<li>Bump bimmer_connected to 0.10.2 (<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/76751">#76751</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive/">bmw_connected_drive docs</a>)</li>
<li>Bump aiohue to 4.5.0 (<a href="https://github.com/marcelveldt">@marcelveldt</a> - <a href="https://github.com/home-assistant/core/pull/76757">#76757</a>) (<a href="http://www.home-assistant.io/integrations/hue/">hue docs</a>)</li>
<li>Fix stale data with SensorPush sensors (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76771">#76771</a>) (<a href="http://www.home-assistant.io/integrations/sensorpush/">sensorpush docs</a>)</li>
<li>Bump homeconnect to 0.7.2 (<a href="https://github.com/BraveChicken1">@BraveChicken1</a> - <a href="https://github.com/home-assistant/core/pull/76773">#76773</a>) (<a href="http://www.home-assistant.io/integrations/home_connect/">home_connect docs</a>)</li>
<li>Bump aiohomekit to 1.2.11 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76784">#76784</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Fix bluetooth callback registration not surviving a reload (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76817">#76817</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Correct referenced entities and devices for event triggers (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/76818">#76818</a>) (<a href="http://www.home-assistant.io/integrations/automation/">automation docs</a>)</li>
<li>Fix lifx homekit discoveries not being ignorable or updating the IP (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76825">#76825</a>) (<a href="http://www.home-assistant.io/integrations/lifx/">lifx docs</a>)</li>
</ul>
<h2>Release 2022.8.6 - August 17</h2>
<ul>
<li>Fix displayed units for BMW Connected Drive (<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/76613">#76613</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive/">bmw_connected_drive docs</a>)</li>
<li>Fix Overkiz startup order to prevent unnamed device showing up (<a href="https://github.com/iMicknl">@iMicknl</a> - <a href="https://github.com/home-assistant/core/pull/76695">#76695</a>) (<a href="http://www.home-assistant.io/integrations/overkiz/">overkiz docs</a>)</li>
<li>Bump pynetgear to 0.10.7 (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/76754">#76754</a>) (<a href="http://www.home-assistant.io/integrations/netgear/">netgear docs</a>)</li>
<li>Correct restoring of mobile_app sensors (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/76886">#76886</a>) (<a href="http://www.home-assistant.io/integrations/mobile_app/">mobile_app docs</a>)</li>
<li>Fix acmeda set cover tilt position (<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/76927">#76927</a>) (<a href="http://www.home-assistant.io/integrations/acmeda/">acmeda docs</a>)</li>
<li>Fix race in notify setup (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/76954">#76954</a>) (<a href="http://www.home-assistant.io/integrations/notify/">notify docs</a>)</li>
<li>Pass the real config for Discord (<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/76959">#76959</a>) (<a href="http://www.home-assistant.io/integrations/discord/">discord docs</a>)</li>
<li>Pass the real config for Slack (<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/76960">#76960</a>) (<a href="http://www.home-assistant.io/integrations/slack/">slack docs</a>)</li>
</ul>
<h2>Release 2022.8.7 - August 25</h2>
<ul>
<li>Add edl21 sensor unit mapping for Hz (<a href="https://github.com/StephanU">@StephanU</a> - <a href="https://github.com/home-assistant/core/pull/76783">#76783</a>) (<a href="http://www.home-assistant.io/integrations/edl21/">edl21 docs</a>)</li>
<li>Change growatt server URL (<a href="https://github.com/coffeedave">@coffeedave</a> - <a href="https://github.com/home-assistant/core/pull/76824">#76824</a>) (<a href="http://www.home-assistant.io/integrations/growatt_server/">growatt_server docs</a>)</li>
<li>Bump pySwitchbot to 0.18.12 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/77040">#77040</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump pySwitchbot to 0.18.14 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/77090">#77090</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Protect against an exception in Shelly climate platform (<a href="https://github.com/bieniu">@bieniu</a> - <a href="https://github.com/home-assistant/core/pull/77102">#77102</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>)</li>
<li>Bump ZHA dependencies (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/77125">#77125</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Minor deCONZ clean up (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/76323">#76323</a>) (<a href="http://www.home-assistant.io/integrations/deconz/">deconz docs</a>)</li>
<li>Fix level controllable output controls in deCONZ (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/77223">#77223</a>) (<a href="http://www.home-assistant.io/integrations/deconz/">deconz docs</a>)</li>
<li>Fix Aladdin connect multiple doors on one device (<a href="https://github.com/mkmer">@mkmer</a> - <a href="https://github.com/home-assistant/core/pull/77226">#77226</a>) (<a href="http://www.home-assistant.io/integrations/aladdin_connect/">aladdin_connect docs</a>)</li>
<li>Fix met_eireann default wind speed unit (<a href="https://github.com/donoghdb">@donoghdb</a> - <a href="https://github.com/home-assistant/core/pull/77229">#77229</a>) (<a href="http://www.home-assistant.io/integrations/met_eireann/">met_eireann docs</a>)</li>
<li>Update xknx to 1.0.1 (<a href="https://github.com/farmio">@farmio</a> - <a href="https://github.com/home-assistant/core/pull/77244">#77244</a>) (<a href="http://www.home-assistant.io/integrations/knx/">knx docs</a>)</li>
<li>Fix grid_export_limit unit for DT inverters (<a href="https://github.com/mletenay">@mletenay</a> - <a href="https://github.com/home-assistant/core/pull/77290">#77290</a>) (<a href="http://www.home-assistant.io/integrations/goodwe/">goodwe docs</a>)</li>
<li>Add BLE sensor to Aladdin_connect (<a href="https://github.com/mkmer">@mkmer</a> - <a href="https://github.com/home-assistant/core/pull/76221">#76221</a>) (<a href="http://www.home-assistant.io/integrations/aladdin_connect/">aladdin_connect docs</a>)</li>
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
      Advantage Air 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_0" hidden>
<p>Each AC will have its own device, different from the one previously created.
Any automations or scripts that target the device will need to be corrected.</p>
<p>(<a href="https://github.com/Bre77">@Bre77</a> - <a href="https://github.com/home-assistant/core/pull/75395">#75395</a>) (<a href="http://www.home-assistant.io/integrations/advantage_air">documentation</a>)</p>
<hr />
<p>The previsouly deprecated service <code>advantage_air.set_myzone</code> has been removed.
Use the available MyZone select entity instead.</p>
<p>(<a href="https://github.com/Bre77">@Bre77</a> - <a href="https://github.com/home-assistant/core/pull/75160">#75160</a>) (<a href="http://www.home-assistant.io/integrations/advantage_air">documentation</a>)</p>
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
      Calendar 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_1" hidden>
<p>Calendar description attributes are no longer written into the recorder database.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/75375">#75375</a>) (<a href="http://www.home-assistant.io/integrations/calendar">documentation</a>)</p>
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
      HERE Travel Time 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_2" hidden>
<p>The single HERE Travel Time sensor with attributes is split up into separate
sensors for Duration, Duration in Traffic, Route, Distance, Origin, Destination.</p>
<p>If you used the entity attributes in your automation or scripts, you will need
to adapt them to this change.</p>
<p>(<a href="https://github.com/eifinger">@eifinger</a> - <a href="https://github.com/home-assistant/core/pull/72405">#72405</a>) (<a href="http://www.home-assistant.io/integrations/here_travel_time">documentation</a>)</p>
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
      HomeKit Controller 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_3" hidden>
<p>The ecobee Fan mode number entity has been removed as HomeKit Controller
<a href="http://www.home-assistant.io/integrations/climate/#service-climateset_fan_mode">now implements fan mode</a>
on the climate entity which replaces this functionality.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/74440">#74440</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller">documentation</a>)</p>
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
      LIFX 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_4" hidden>
<p>Each LIFX device now has its own integration entry. The existing entry will be
migrated to separate entries automatically as each device is discovered,
and will automatically be removed once all devices are found.</p>
<p>Migrating to an integration entry per device allows Home Assistant to
take care of discovery IP updates and retries, dramatically improving the
integration’s reliability.</p>
<p>LIFX can now be configured manually by IP address. DHCP, HomeKit,
and native discovery are supported for updating IP addresses to
ensure we never lose track of a device.</p>
<p>Advanced YAML configuration is deprecated and will be removed
in a future release. Advanced YAML configuration is no longer necessary as the
integration now fully utilizes <a href="http://www.home-assistant.io/integrations/network/">Network Configuration</a>,
and can also function without working discovery.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/74316">#74316</a>) (<a href="http://www.home-assistant.io/integrations/lifx">documentation</a>)</p>
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
      Logger 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_5" hidden>
<p>Timestamps in the Home Assistant log file now include millisecond-level
resolution.</p>
<p>Scripts or external log system that rely on this will need to be updated
to handle the extra decimal places.</p>
<p>(<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/74518">#74518</a>) (<a href="http://www.home-assistant.io/integrations/logger">documentation</a>)</p>
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
      Material Design Icons 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_6" hidden>
<p>In the latest Material Design Icons update,
<a href="https://pictogrammers.com/docs/library/mdi/releases/changelog/#version-7096">several icons have been renamed or removed</a>.
Removed and renamed icons will continue to work for the next two releases.</p>
<p>Please make sure you update any use of the following MDI icons:</p>
<p>Removed:</p>
<ul>
<li><code>mdi:android-messages</code> - Use <code>mdi:message-text</code> instead.</li>
<li><code>mdi:book-variant-multiple</code> - Use <code>mdi:bookmark-box-multiple</code> instead.</li>
<li><code>mdi:desktop-mac</code> - Use <code>mdi:monitor</code> instead.</li>
<li><code>mdi:desktop-mac-dashboard</code> - Use <code>mdi:monitor-dashboard</code> instead.</li>
<li><code>mdi:discord</code></li>
<li><code>mdi:google-home</code></li>
<li><code>tablet-android</code> - Use <code>mdi:tablet</code> instead.</li>
</ul>
<p>Renamed:</p>
<ul>
<li><code>mdi:diving-scuba</code> to <code>mdi:diving-scuba-mask</code></li>
<li><code>mdi:email-send</code> to <code>mdi:email-arrow-right</code></li>
<li><code>mdi:email-send-outline</code> to <code>mdi:email-arrow-right-outline</code></li>
<li><code>mdi:email-receive</code> to <code>mdi:email-arrow-left</code></li>
<li><code>mdi:email-receive-outline</code> to <code>mdi:email-arrow-left-outline</code></li>
<li><code>mdi:format-textdirection-r-to-l</code> to <code>mdi:format-pilcrow-arrow-left</code></li>
<li><code>mdi:format-textdirection-l-to-r</code> to <code>mdi:format-pilcrow-arrow-right</code></li>
<li><code>mdi:globe-light</code> to <code>mdi:globe-light-outline</code></li>
<li><code>mdi:google-controller</code> to <code>mdi:controller</code></li>
<li><code>mdi:google-controller-off</code> to <code>mdi:controller-off</code></li>
<li><code>mdi:lecturn</code> to <code>mdi:lectern</code></li>
<li><code>mdi:mosque</code> to <code>mdi:mosque-outline</code></li>
<li><code>mdi:receipt</code> to <code>mdi:receipt-text</code></li>
<li><code>mdi:receipt-outline</code> to <code>mdi:receipt-text-outline</code></li>
<li><code>mdi:silo</code> to <code>mdi:silo-outline</code></li>
<li><code>mdi:text-to-speech</code> to <code>mdi:microphone-message</code></li>
<li><code>mdi:text-to-speech-off</code> to <code>mdi:microphone-message-off</code></li>
<li><code>mdi:timeline-help</code> to <code>mdi:timeline-question</code></li>
<li><code>mdi:timeline-help-outline</code> to <code>mdi:timeline-question-outline</code></li>
<li><code>mdi:vector-point</code> to <code>mdi:vector-point-select</code></li>
</ul>
<p>(<a href="https://github.com/goyney">@goyney</a> - <a href="https://github.com/home-assistant/frontend/pull/13175">#13175</a>)</p>
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
      Sonos 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_7" hidden>
<p>The previously deprecated <code>sonos.join</code> and <code>sonos.unjoin</code> services have been
removed in favor of the standard <code>media_player.join</code> and <code>media_player.unjoin</code>
services.</p>
<p>(<a href="https://github.com/jjlawren">@jjlawren</a> - <a href="https://github.com/home-assistant/core/pull/74476">#74476</a>) (<a href="http://www.home-assistant.io/integrations/sonos">documentation</a>)</p>
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
      SwitchBot 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_8" hidden>
<p>The <a href="http://www.home-assistant.io/integrations/bluetooth">Bluetooth integration</a> must be enabled before
switchbot can be used. Bluetooth is automatically discovered in most cases,
but can be manually added from <a href="http://www.home-assistant.io/integrations/bluetooth">the integrations page</a>
if it is not.</p>
<p>The <code>Time between updates (seconds)</code> and <code>How long to scan for advertisement data</code>
options have been removed as they are no longer needed since the integration
is now push instead of polling.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/75645">#75645</a>) (<a href="http://www.home-assistant.io/integrations/switchbot">documentation</a>)</p>
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
      Z-Wave 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_9" hidden>
<p>Carbon Monoxide binary sensors have changed their device class from
<code>gas</code> to <code>co</code>.</p>
<p>(<a href="https://github.com/EnochPrime">@EnochPrime</a> - <a href="https://github.com/home-assistant/core/pull/75649">#75649</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js">documentation</a>)</p>
</div>
  </div>
</div>
<p>If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
<a href="https://developers.home-assistant.io/blog/">developer blog</a>. The following are the most notable for this release:</p>
<ul>
<li><a href="https://developers.home-assistant.io/blog/2022/07/08/generic-store">Store is now a Generic class</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/07/08/config_entry_forwards">Waiting for config entry platforms</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/07/10/entity_naming">Adopting a new way to name entities</a></li>
</ul>
<h2>Farewell to the following</h2>
<p>The following integrations are also no longer available as of this release:</p>
<ul>
<li><strong>XBee</strong></li>
<li><strong>SoChain</strong></li>
<li><strong>Google Play Music Desktop Player (GPMDP)</strong></li>
</ul>
<p>All three were previously disabled due to incompatibilities and have now been
removed.</p>
<h2>All changes</h2>
<p>Of course, there is a lot more in this release. You can find a list of
all changes made here: <a href="http://www.home-assistant.io/changelogs/core-2022.8">Full changelog for Home Assistant Core 2022.8</a></p>
"
link: "https://www.home-assistant.io/blog/2022/08/03/release-20228/"
category:
---
