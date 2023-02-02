---
title: "2022.7 - A stunning performance"
date: 2022-07-06 00:00:00 +0000
dateadded: 2023-02-02 08:54:04 +0100
description: "<img src='http://www.home-assistant.io/images/blog/2022-07/social.png' style='border: 0;box-shadow: none;'>
<p>Home Assistant Core 2022.7! ☀️</p>
<p>This was one exciting and busy month! In case you’ve missed it, there was
a <a href="https://www.youtube.com/watch?v=9fOHBl5w0_k">Matter in Home Assistant workshop</a>
and a <a href="https://www.youtube.com/watch?v=SEH-DxOsywg">Let’s get loud!</a> event
about bringing audio to the <a href="https://building.open-home.io/">Open Home</a>.
If you have missed those, it is worthwhile to check those recordings out.</p>
<p>Meanwhile, preparations are happening for the upcoming Matter and of course,
the soon-to-be-released <a href="http://www.home-assistant.io/yellow">Home Assistant Yellow</a>! 💛 More about that soon™.</p>
<p>This release is definitely representing the “streamlining experiences”
motto we have been using. The performance improvements in this release are
once more: stunning! Furthermore, there are some wonderful new features to
explore too.</p>
<p>This release has the perfect mix! I’m sure there is something in here you
like. So without further due: Enjoy the release!</p>
<p>../Frenck</p>
<!--more-->
<ul>
<li><a href="#improved-stability-and-performance-and-python-310">Improved stability and performance, and Python 3.10</a></li>
<li><a href="#update-z-wave-devices-directly-from-home-assistant">Update Z-Wave devices directly from Home Assistant</a></li>
<li><a href="#the-about-page-is-now-beautiful-too">The about page is now beautiful too!</a></li>
<li><a href="#change-any-weather-unit-to-your-preference">Change any weather unit to your preference</a></li>
<li><a href="#labels-instead-of-values-for-gauge-cards-segments">Labels instead of values for gauge cards segments</a></li>
<li><a href="#code-editors-now-auto-complete-mdi-icons">Code editors now auto-complete MDI icons</a></li>
<li><a href="#filter-the-history-panel">Filter the history panel</a></li>
<li><a href="#easily-convert-values-to-booleans-in-templates">Easily convert values to booleans in templates</a></li>
<li><a href="#other-noteworthy-changes">Other noteworthy changes</a></li>
<li><a href="#new-integrations">New Integrations</a></li>
<li><a href="#integrations-now-available-to-set-up-from-the-ui">Integrations now available to set up from the UI</a></li>
<li><a href="#release-202271---july-7">Release 2022.7.1 - July 7</a></li>
<li><a href="#release-202272---july-8">Release 2022.7.2 - July 8</a></li>
<li><a href="#release-202273---july-10">Release 2022.7.3 - July 10</a></li>
<li><a href="#release-202274---july-13">Release 2022.7.4 - July 13</a></li>
<li><a href="#release-202275---july-14">Release 2022.7.5 - July 14</a></li>
<li><a href="#release-202276---july-20">Release 2022.7.6 - July 20</a></li>
<li><a href="#release-202277---july-26">Release 2022.7.7 - July 26</a></li>
<li><a href="#need-help-join-the-community">Need help? Join the community!</a></li>
<li><a href="#breaking-changes">Breaking Changes</a></li>
<li><a href="#farewell-to-the-following">Farewell to the following</a></li>
<li><a href="#all-changes">All changes</a></li>
</ul>
<p>Don’t forget to <a href="https://www.youtube.com/watch?v=HnA_pZQyZAs">join our release party live stream on YouTube</a> today at 12:00 PDT / 21:00 CET!</p>
<p><lite-youtube videoid="HnA_pZQyZAs" videotitle="Home Assistant 2022.7 Release Party"></lite-youtube></p>
<h2>Improved stability and performance, and Python 3.10</h2>
<p>The quest to improve the performance of Home Assistant continues. For many
releases, <a href="https://github.com/bdraco">@bdraco</a> has been analyzing every single aspect of
Home Assistant and manages to make it faster every single release.</p>
<p>Usually, we have a section at the end of our release notes informing you
about the performance improvements made. The improvements in this release,
however, are a big deal.</p>
<p>Our YAML &amp; JSON tooling improved, using faster libraries and methods.
JSON is used internally and for communication with the frontend, which is
A LOT snappier now. If you use lots of YAML, you will undoubtedly notice this
when starting Home Assistant or reloading things like your automations 🚀.</p>
<p>Devices with an integration error during startup that can self-recover
will now do that instantly as soon as the device is discovered.</p>
<p>We now use a better and faster encryption method for the HomeKit Accessory
Protocol (HAP). It improves the performance of the HomeKit, HomeKit Controller,
and Apple TV integrations and prepares Home Assistant for iOS 16.</p>
<p>Lastly, <a href="https://github.com/pvizeli">@pvizeli</a> has been working hard to ship Home Assistant on Python 3.10!
Which also brings quite a performance improvement. If you run the Home Assistant
Operating System or use our container installation method, you will
automatically get this; there is no need to do anything. 🚀</p>
<h2>Update Z-Wave devices directly from Home Assistant</h2>
<p>All software has bugs, including the software on your Z-Wave devices. But how
to update those? Have no fear! As of today, we have a solution for this!</p>
<p>Thanks to the hard work and collaboration between <a href="https://github.com/AlCalzone">@AlCalzone</a> from Z-Wave JS
and <a href="https://github.com/raman325">@raman325</a> from Home Assistant, you can now install updates on your
Z-Wave devices directly from the Home Assistant interface!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-07/zwave-updating-firmware.png' alt='Screenshot showing the new upload firmware item on the device page of a Z-Wave device page'>
<p>On the device page of your Z-Wave device, there is now a menu item allowing
you to install Z-Wave firmware updates onto your device manually.</p>
<p>Get a software update for your Z-Wave device from the manufacturer,
and start an update in Home Assistant, which allows you to upload the
update file you got from the manufacturer. The rest is pure magic!</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-07/zwave-installing-firmware-update.png' alt='Screenshot showing the a Z-Wave device that has firmware installation in progress'>
<p>During update installation, you’ll be presented with the update’s progress.</p>
<p>It is that easy 💪</p>
<h2>The about page is now beautiful too!</h2>
<p>Have you ever looked at the about page in the Home Assistant settings menu?</p>
<p>It was probably one of the least visually appealing pages still in our menus,
and <a href="https://github.com/@zsarnett">@zsarnett</a> seemed to agree. He made it a lot more cleaner and functional.</p>
<p>It now clearly shows the versions of the different components your instance is
made up of, and provides a clean menu to all kinds of Home Assistant related
links.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-07/about-home-assistant.png' alt='Screenshot the new about page from the settings menu'>
<p><a href='https://my.home-assistant.io/redirect/info' class='my badge' target='_blank'><img src='https://my.home-assistant.io/badges/info.svg' /></a></p>
<h2>Change any weather unit to your preference</h2>
<p>Home Assistant has many <a href="http://www.home-assistant.io/integrations/#weather">weather services</a> that can be integrated; it is
great to have a choice! The differences between those are often their
accuracy for your region and the  units of measurement used for the
different weather data points.</p>
<p>But what if you’d like the barometric pressure unit to be in mbar instead of
hPa? Or maybe use m/s or knots instead of km/h for wind speed? No problem!</p>
<p>You can now change the units each weather entity uses! Not just temperature,
but for all of the values a weather entity provides. When changing a unit,
Home Assistant will take care of converting the values for you.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-07/weather-units.png' alt='Screenshot showing energy usage being compared from last week with the week before that'>
<p>On a similar note, number entities that represent a temperature are now converted to
the temperature unit used by the configured unit system.</p>
<p>Thanks <a href="https://github.com/emontnemery">@emontnemery</a> and <a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> for adding this and updating
all existing weather integrations to support this 👍.</p>
<h2>Labels instead of values for gauge cards segments</h2>
<p>When displaying an entity gauge card on your dashboard, it would show the
gauge with the sensor value. For example, if you’d use a humidity sensor,
it shows the humidity percentage in the middle of the gauge.</p>
<p>In the <a href="http://www.home-assistant.io/blog/2022/05/04/release-20225/#gauge-card-segment-colors">2022.5 release</a>, we added segment support to our gauge card.
In this release, <a href="https://github.com/kristjanbjarni">@kristjanbjarni</a> added label support to those segments!</p>
<p>This means that if your segment has a label, the gauge card will show
that label instead of the sensor value when it is in that range.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-07/gauge-labels.png' alt='Screenshot showing the new gauge labels'>
<p>For more information, check out our <a href="http://www.home-assistant.io/dashboards/gauge/">gauge card documentation</a>.</p>
<h2>Code editors now auto-complete MDI icons</h2>
<p>All of our code editors in the frontend now have auto-completions for
MDI icons. Just start typing <code>mdi:</code> and it will help you find the exact icon
you need.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-07/icon-auto-complete.png' alt='Screenshot demonstrating auto-complete for MDI icons in the code editors'>
<p>Like the normal icon picker, it supports searching on parts of the icon
name, its aliases and categories. Additionally, it will show a little preview
of the icon you are about to select, so you know you got the right one.</p>
<p>Thank you <a href="https://github.com/bramkragten">@bramkragten</a>, this is a really nice addition!</p>
<h2>Filter the history panel</h2>
<p>If you have lots of devices and entities then the
<a href='https://my.home-assistant.io/redirect/history' class='my' target='_blank'>history panel</a> can be long! Actually,
it would become so large, that it becomes unpractical. You could always
filter it down to a single entity, but that is fairly limited as well.
For this release, <a href="https://github.com/D3v01dZA">@D3v01dZA</a> improved these filters.</p>
<p>The history can now be filtered by one or more entities, by all entities of
one or more areas, or by all entities of one or more devices.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-07/history-panel.png' alt='Screenshot demonstrating the history panel; it is now possible to select what you want to see'>
<p>This is super helpful, as you can now view the history of all entities in,
for example, your living room area quick and easy.</p>
<p><a href='https://my.home-assistant.io/redirect/history' class='my badge' target='_blank'><img src='https://my.home-assistant.io/badges/history.svg' /></a></p>
<h2>Easily convert values to booleans in templates</h2>
<p>If you are into templates, <a href="https://github.com/pyos">@pyos</a> has a surprise for you: We now have a <code>bool</code>
function that can be used as a filter too!</p>
<p>If you are a bit into coding, this is not the standard <code>bool()</code>, but one that
is very specific for Home Assistant, making it very useful.</p>
<p>This <code>bool</code> method converts a value into a boolean and considers
Home Assistant’s specific rules for truthy values. Some examples: <code>&quot;on&quot;</code> will
be considered true, and <code>&quot;disabled&quot;</code> will be considered false.</p>
<img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-07/bool.png' alt='Screenshot demonstrating auto-complete for MDI icons in the code editors'>
<p>Using <code>bool</code> as a filter and combined with and <a href="http://www.home-assistant.io/docs/configuration/templating/#immediate-if-iif"><code>iif</code></a>
filter, you can quickly change, for example, binary sensors values into any
text you’d like.</p>
<p>For more information, check out our <a href="http://www.home-assistant.io/docs/configuration/templating/#numeric-functions-and-filters">Templating documentation</a>.</p>
<h2>Other noteworthy changes</h2>
<p>There is much more juice in this release; here are some of the other
noteworthy changes this release:</p>
<ul>
<li>The Material Design Icons have been updated to v6.9.96, giving you
<a href="https://pictogrammers.github.io/@mdi/font/6.8.96/">100</a> and another
<a href="https://pictogrammers.github.io/@mdi/font/6.9.96/">100</a> brand new icons
to use 🤩 .</li>
<li>You can now control the loudness and various additional surround-related
settings of your <a href="http://www.home-assistant.io/integrations/sonos">Sonos</a> speakers, thanks <a href="https://github.com/jjlawren">@jjlawren</a>! 🔊</li>
<li>You can now trigger <a href="http://www.home-assistant.io/integrations/alexa">Alexa</a> routines from switches, toggles, and buttons
without the need to wrap them into a binary template sensor first.
Fantastic addition, <a href="https://github.com/mdegat01">@mdegat01</a>!</li>
<li>The logbook live feeds will now automatically pause when you start
scrolling and resume when you are back at the top again. Thanks, <a href="https://github.com/bdraco">@bdraco</a>!</li>
<li><a href="https://github.com/matrixd2">@matrixd2</a> extended <a href="http://www.home-assistant.io/integrations/yolink">YoLink</a>; It now supports thermostats, valve controllers,
locks, and vibration, CO, and Smoke Sensors!</li>
<li><a href="http://www.home-assistant.io/integrations/jellyfin">Jellyfin</a> now supports movie collections in the media browser, thanks <a href="https://github.com/j-stienstra">@j-stienstra</a>!</li>
<li>Thanks to <a href="https://github.com/dmulcahey">@dmulcahey</a>, the widely discussed Aqara FP1 sensor is now
supported by <a href="http://www.home-assistant.io/integrations/zha">ZHA</a>!</li>
<li><a href="https://github.com/ghedo">@ghedo</a> has been busy improving the <a href="http://www.home-assistant.io/dashboards/area/">Area Card</a>. It can now show
moisture/flood alerts, humidity, and shows an icon for temperature. Nice!</li>
<li><a href="https://github.com/kingy444">@kingy444</a> added support for Top/Down, Bottom/Up to <a href="http://www.home-assistant.io/integrations/hunterdouglas_powerview">Hunter Douglas PowerView</a>.
Additionally, buttons to calibrate and jog (identify) have been added. <a href="https://github.com/bdraco">@bdraco</a>
added support for polling in case the device is mains powered.</li>
<li>Thanks to <a href="https://github.com/thrawnarn">@thrawnarn</a>, you can now send polls via <a href="http://www.home-assistant.io/integrations/telegram_bot">Telegram bot</a>!</li>
<li>The <a href="http://www.home-assistant.io/integrations/home_connect">Home Connect</a> integration now has whole collection of new services
that can be used to control and configure options of device programs.
Really nice, <a href="https://github.com/BraveChicken1">@BraveChicken1</a>!</li>
<li>If you have <a href="http://www.home-assistant.io/integrations/wiz">WiZ</a> power plugs with power monitoring, these are now supported,
thanks to <a href="https://github.com/bdraco">@bdraco</a> ⚡️.</li>
<li><a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> added lots of love to <a href="http://www.home-assistant.io/integrations/sensibo">Sensibo</a> this release. Support for
(split) timers, Pure Boost, improvements to setting temperature, bug fixes,
and many more. Nice work!</li>
<li><a href="https://github.com/@iAutom8">@iAutom8</a> made his first-time-ever open source contribution ❤️; And added
support for additional temperature sensors in <a href="http://www.home-assistant.io/integrations/vicare">ViCare</a>.</li>
</ul>
<h2>New Integrations</h2>
<p>This release does not include new integrations.</p>
<h2>Integrations now available to set up from the UI</h2>
<p>The following integrations are now available via the Home Assistant UI:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/eight_sleep">Eight Sleep</a>, done by <a href="https://github.com/raman325">@raman325</a></li>
<li><a href="http://www.home-assistant.io/integrations/radiotherm">Radio Thermostat</a>, done by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/simplepush">Simplepush</a>, done by <a href="https://github.com/engrbm87">@engrbm87</a></li>
<li><a href="http://www.home-assistant.io/integrations/skybell">SkyBell</a>, done by <a href="https://github.com/tkdrob">@tkdrob</a></li>
</ul>
<h2>Release 2022.7.1 - July 7</h2>
<ul>
<li>Bump deCONZ dependency to v96 (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/74460">#74460</a>) (<a href="http://www.home-assistant.io/integrations/deconz/">deconz docs</a>)</li>
<li>Bump satel_integra to 0.3.7 to fix compat with python 3.10 (<a href="https://github.com/c-soft">@c-soft</a> - <a href="https://github.com/home-assistant/core/pull/74543">#74543</a>) (<a href="http://www.home-assistant.io/integrations/satel_integra/">satel_integra docs</a>)</li>
<li>fjaraskupan: Make sure we stop bleak on home assistant stop (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/74545">#74545</a>) (<a href="http://www.home-assistant.io/integrations/fjaraskupan/">fjaraskupan docs</a>)</li>
<li>Minimize Sonos <code>media_player.unjoin</code> timeout (<a href="https://github.com/jjlawren">@jjlawren</a> - <a href="https://github.com/home-assistant/core/pull/74549">#74549</a>) (<a href="http://www.home-assistant.io/integrations/sonos/">sonos docs</a>)</li>
<li>Bump aioskybell to 22.7.0 (<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/74559">#74559</a>) (<a href="http://www.home-assistant.io/integrations/skybell/">skybell docs</a>)</li>
<li>Bump pyenvisalink version to 4.6 (<a href="https://github.com/ufodone">@ufodone</a> - <a href="https://github.com/home-assistant/core/pull/74561">#74561</a>) (<a href="http://www.home-assistant.io/integrations/envisalink/">envisalink docs</a>)</li>
<li>ElkM1 bump lib to support Python 3.10 SSL (<a href="https://github.com/gwww">@gwww</a> - <a href="https://github.com/home-assistant/core/pull/74569">#74569</a>) (<a href="http://www.home-assistant.io/integrations/elkm1/">elkm1 docs</a>)</li>
<li>Fix openweathermap hourly forecast (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/74578">#74578</a>) (<a href="http://www.home-assistant.io/integrations/openweathermap/">openweathermap docs</a>)</li>
<li>Fix mix of aiohttp and requests in Bloomsky (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/74598">#74598</a>) (<a href="http://www.home-assistant.io/integrations/bloomsky/">bloomsky docs</a>)</li>
<li>Update aiokafka to 0.7.2 (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/74601">#74601</a>) (<a href="http://www.home-assistant.io/integrations/apache_kafka/">apache_kafka docs</a>)</li>
<li>Poll cast groups when media player is added or reconnected (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/74610">#74610</a>) (<a href="http://www.home-assistant.io/integrations/cast/">cast docs</a>)</li>
<li>Ikea Starkvind support all models (<a href="https://github.com/arnemauer">@arnemauer</a> - <a href="https://github.com/home-assistant/core/pull/74615">#74615</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Update frontend to 20220707.0 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/74625">#74625</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
<li>Fix mix of aiohttp and requests in ZAMG (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/74628">#74628</a>) (<a href="http://www.home-assistant.io/integrations/zamg/">zamg docs</a>)</li>
<li>Fix smart energy polling for Tuya plugs (<a href="https://github.com/TheJulianJES">@TheJulianJES</a> - <a href="https://github.com/home-assistant/core/pull/74640">#74640</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Fix exception in doorbird logbook during startup (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/74649">#74649</a>) (<a href="http://www.home-assistant.io/integrations/doorbird/">doorbird docs</a>)</li>
<li>Update kaiterra-async-client to 1.0.0 (<a href="https://github.com/Michsior14">@Michsior14</a> - <a href="https://github.com/home-assistant/core/pull/74677">#74677</a>) (<a href="http://www.home-assistant.io/integrations/kaiterra/">kaiterra docs</a>)</li>
</ul>
<h2>Release 2022.7.2 - July 8</h2>
<ul>
<li>Add missing strings for here_travel_time (<a href="https://github.com/eifinger">@eifinger</a> - <a href="https://github.com/home-assistant/core/pull/74641">#74641</a>) (<a href="http://www.home-assistant.io/integrations/here_travel_time/">here_travel_time docs</a>)</li>
<li>Add ssh-rsa as acceptable an host key algorithm (<a href="https://github.com/siyuan-nz">@siyuan-nz</a> - <a href="https://github.com/home-assistant/core/pull/74684">#74684</a>) (<a href="http://www.home-assistant.io/integrations/unifi_direct/">unifi_direct docs</a>)</li>
<li>Fix ZHA group not setting the correct color mode (<a href="https://github.com/TheJulianJES">@TheJulianJES</a> - <a href="https://github.com/home-assistant/core/pull/74687">#74687</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Bump deconz dependency to fix #74523 (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/74710">#74710</a>) (<a href="http://www.home-assistant.io/integrations/deconz/">deconz docs</a>)</li>
<li>Bump atomicwrites (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/74758">#74758</a>)</li>
<li>Bump regenmaschine to 2022.07.0 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/74680">#74680</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Fix error with HDD temperature report in Freebox integration (<a href="https://github.com/BenoitAnastay">@BenoitAnastay</a> - <a href="https://github.com/home-assistant/core/pull/74718">#74718</a>) (<a href="http://www.home-assistant.io/integrations/freebox/">freebox docs</a>)</li>
</ul>
<h2>Release 2022.7.3 - July 10</h2>
<ul>
<li>Fix Vicare One Time Charge (<a href="https://github.com/oischinger">@oischinger</a> - <a href="https://github.com/home-assistant/core/pull/74872">#74872</a>) (<a href="http://www.home-assistant.io/integrations/vicare/">vicare docs</a>)</li>
<li>Fix KeyError from zwave_js diagnostics (<a href="https://github.com/kpine">@kpine</a> - <a href="https://github.com/home-assistant/core/pull/74579">#74579</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Update systembridgeconnector to 3.3.2 (<a href="https://github.com/timmo001">@timmo001</a> - <a href="https://github.com/home-assistant/core/pull/74701">#74701</a>) (<a href="http://www.home-assistant.io/integrations/system_bridge/">system_bridge docs</a>)</li>
<li><code>air_quality</code> and <code>filter_life</code> fixes for Pur131S (<a href="https://github.com/jetpacktuxedo">@jetpacktuxedo</a> - <a href="https://github.com/home-assistant/core/pull/74740">#74740</a>) (<a href="http://www.home-assistant.io/integrations/vesync/">vesync docs</a>)</li>
<li>Update pyCEC to version 0.5.2 (<a href="https://github.com/inytar">@inytar</a> - <a href="https://github.com/home-assistant/core/pull/74742">#74742</a>) (<a href="http://www.home-assistant.io/integrations/hdmi_cec/">hdmi_cec docs</a>)</li>
<li>Bump pyezviz to 0.2.0.9 (<a href="https://github.com/regevbr">@regevbr</a> - <a href="https://github.com/home-assistant/core/pull/74755">#74755</a>) (<a href="http://www.home-assistant.io/integrations/ezviz/">ezviz docs</a>)</li>
<li>Update aioqsw to v0.1.1 (<a href="https://github.com/Noltari">@Noltari</a> - <a href="https://github.com/home-assistant/core/pull/74784">#74784</a>) (<a href="http://www.home-assistant.io/integrations/qnap_qsw/">qnap_qsw docs</a>)</li>
<li>Bump python-gammu to 3.2.4 with Python 3.10 support (<a href="https://github.com/PaulAnnekov">@PaulAnnekov</a> - <a href="https://github.com/home-assistant/core/pull/74797">#74797</a>) (<a href="http://www.home-assistant.io/integrations/sms/">sms docs</a>)</li>
<li>Bump deCONZ dependency to fix #74791 (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/74804">#74804</a>) (<a href="http://www.home-assistant.io/integrations/deconz/">deconz docs</a>)</li>
<li>Bump regenmaschine to 2022.07.1 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/74815">#74815</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Fixed unit of measurement. #70121 (<a href="https://github.com/StephanU">@StephanU</a> - <a href="https://github.com/home-assistant/core/pull/74838">#74838</a>) (<a href="http://www.home-assistant.io/integrations/edl21/">edl21 docs</a>)</li>
<li>Bump rokuecp to 0.17.0 (<a href="https://github.com/ctalkington">@ctalkington</a> - <a href="https://github.com/home-assistant/core/pull/74862">#74862</a>) (<a href="http://www.home-assistant.io/integrations/roku/">roku docs</a>)</li>
<li>Bump pymazda to 0.3.6 (<a href="https://github.com/bdr99">@bdr99</a> - <a href="https://github.com/home-assistant/core/pull/74863">#74863</a>) (<a href="http://www.home-assistant.io/integrations/mazda/">mazda docs</a>)</li>
<li>Fix Vicare One Time Charge (<a href="https://github.com/oischinger">@oischinger</a> - <a href="https://github.com/home-assistant/core/pull/74872">#74872</a>) (<a href="http://www.home-assistant.io/integrations/vicare/">vicare docs</a>)</li>
<li>Bump pysml to 0.0.8 (fixes #74382) (<a href="https://github.com/DavidMStraub">@DavidMStraub</a> - <a href="https://github.com/home-assistant/core/pull/74875">#74875</a>) (<a href="http://www.home-assistant.io/integrations/edl21/">edl21 docs</a>)</li>
<li>Bump afsapi to 0.2.5 (<a href="https://github.com/wlcrs">@wlcrs</a> - <a href="https://github.com/home-assistant/core/pull/74907">#74907</a>) (<a href="http://www.home-assistant.io/integrations/frontier_silicon/">frontier_silicon docs</a>)</li>
</ul>
<h2>Release 2022.7.4 - July 13</h2>
<ul>
<li>Migrate ecobee to native_* (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/74043">#74043</a>) (<a href="http://www.home-assistant.io/integrations/ecobee/">ecobee docs</a>)</li>
<li>Migrate homematicip_cloud to native_* (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/74385">#74385</a>) (<a href="http://www.home-assistant.io/integrations/homematicip_cloud/">homematicip_cloud docs</a>)</li>
<li>Update pyialarm to 2.2.0 (<a href="https://github.com/RyuzakiKK">@RyuzakiKK</a> - <a href="https://github.com/home-assistant/core/pull/74874">#74874</a>) (<a href="http://www.home-assistant.io/integrations/ialarm/">ialarm docs</a>)</li>
<li>Correctly handle device triggers for missing ZHA devices (<a href="https://github.com/Adminiuga">@Adminiuga</a> - <a href="https://github.com/home-assistant/core/pull/74894">#74894</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Remove pip –prefix workaround (<a href="https://github.com/henryptung">@henryptung</a> - <a href="https://github.com/home-assistant/core/pull/74922">#74922</a>)</li>
<li>Fix Pyload request content type headers (<a href="https://github.com/iMarkus">@iMarkus</a> - <a href="https://github.com/home-assistant/core/pull/74957">#74957</a>) (<a href="http://www.home-assistant.io/integrations/pyload/">pyload docs</a>)</li>
<li>JSON serialize NamedTuple subclasses with aiohttp (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/74971">#74971</a>)</li>
<li>Fix mix of aiohttp and requests in ClickSend TTS (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/74985">#74985</a>) (<a href="http://www.home-assistant.io/integrations/clicksend_tts/">clicksend_tts docs</a>)</li>
<li>Do not spam log when Life360 member location is missing (<a href="https://github.com/pnbruckner">@pnbruckner</a> - <a href="https://github.com/home-assistant/core/pull/75029">#75029</a>) (<a href="http://www.home-assistant.io/integrations/life360/">life360 docs</a>)</li>
<li>Upgrade huawei-lte-api to 1.6.1 (<a href="https://github.com/scop">@scop</a> - <a href="https://github.com/home-assistant/core/pull/75030">#75030</a>) (<a href="http://www.home-assistant.io/integrations/huawei_lte/">huawei_lte docs</a>)</li>
<li>Fix Ruckus Unleashed SSH connection failures (<a href="https://github.com/gabe565">@gabe565</a> - <a href="https://github.com/home-assistant/core/pull/75032">#75032</a>) (<a href="http://www.home-assistant.io/integrations/ruckus_unleashed/">ruckus_unleashed docs</a>)</li>
<li>Bump afsapi to 0.2.6 (<a href="https://github.com/wlcrs">@wlcrs</a> - <a href="https://github.com/home-assistant/core/pull/75041">#75041</a>) (<a href="http://www.home-assistant.io/integrations/frontier_silicon/">frontier_silicon docs</a>)</li>
<li>Bump homematicip to 1.0.4 (<a href="https://github.com/hahn-th">@hahn-th</a> - <a href="https://github.com/home-assistant/core/pull/75053">#75053</a>) (<a href="http://www.home-assistant.io/integrations/homematicip_cloud/">homematicip_cloud docs</a>)</li>
<li>Bump AIOAladdinConnect to 0.1.23 (<a href="https://github.com/mkmer">@mkmer</a> - <a href="https://github.com/home-assistant/core/pull/75065">#75065</a>) (<a href="http://www.home-assistant.io/integrations/aladdin_connect/">aladdin_connect docs</a>)</li>
<li>Fix Insteon thermostat issues (<a href="https://github.com/teharris1">@teharris1</a> - <a href="https://github.com/home-assistant/core/pull/75079">#75079</a>) (<a href="http://www.home-assistant.io/integrations/insteon/">insteon docs</a>)</li>
<li>Fix missing ordered states in universal media player (<a href="https://github.com/Drafteed">@Drafteed</a> - <a href="https://github.com/home-assistant/core/pull/75099">#75099</a>) (<a href="http://www.home-assistant.io/integrations/universal/">universal docs</a>)</li>
<li>Make sure device tuple is a list on save (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/75103">#75103</a>) (<a href="http://www.home-assistant.io/integrations/rfxtrx/">rfxtrx docs</a>)</li>
<li>Fix Powerview top shade open position (<a href="https://github.com/kingy444">@kingy444</a> - <a href="https://github.com/home-assistant/core/pull/75110">#75110</a>) (<a href="http://www.home-assistant.io/integrations/hunterdouglas_powerview/">hunterdouglas_powerview docs</a>)</li>
<li>Bump ZHA dependencies (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/75133">#75133</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Ensure SimpliSafe diagnostics redact the <code>code</code> option (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/75137">#75137</a>) (<a href="http://www.home-assistant.io/integrations/simplisafe/">simplisafe docs</a>)</li>
<li>Block bad pubnub version (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/75138">#75138</a>)</li>
</ul>
<h2>Release 2022.7.5 - July 14</h2>
<ul>
<li>Address Blebox uniapi review sidenotes (<a href="https://github.com/riokuu">@riokuu</a> - <a href="https://github.com/home-assistant/core/pull/74298">#74298</a>) (<a href="http://www.home-assistant.io/integrations/blebox/">blebox docs</a>)</li>
<li>Fix Alexa: Only trigger doorbell event on actual state change to “ON” (<a href="https://github.com/Tho85">@Tho85</a> - <a href="https://github.com/home-assistant/core/pull/74924">#74924</a>) (<a href="http://www.home-assistant.io/integrations/alexa/">alexa docs</a>)</li>
<li>Fix Blebox light scenes (<a href="https://github.com/riokuu">@riokuu</a> - <a href="https://github.com/home-assistant/core/pull/75106">#75106</a>) (<a href="http://www.home-assistant.io/integrations/blebox/">blebox docs</a>)</li>
<li>Fix playback of hls cameras in stream (<a href="https://github.com/uvjustin">@uvjustin</a> - <a href="https://github.com/home-assistant/core/pull/75166">#75166</a>) (<a href="http://www.home-assistant.io/integrations/stream/">stream docs</a>)</li>
<li>Bump version of pyunifiprotect to 4.0.10 (<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/75180">#75180</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect/">unifiprotect docs</a>)</li>
<li>Bumped AIOAladdin Connect to 0.1.24 (<a href="https://github.com/mkmer">@mkmer</a> - <a href="https://github.com/home-assistant/core/pull/75182">#75182</a>) (<a href="http://www.home-assistant.io/integrations/aladdin_connect/">aladdin_connect docs</a>)</li>
<li>Bump zigpy from 0.47.2 to 0.47.3 (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/75194">#75194</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Skip <code>iso4217</code> version 1.10, which includes a broken <code>__init__.pyi</code> file (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/75200">#75200</a>)</li>
<li>Fix Hive power unit of measurement (<a href="https://github.com/KJonline">@KJonline</a> - <a href="https://github.com/home-assistant/core/pull/75210">#75210</a>) (<a href="http://www.home-assistant.io/integrations/hive/">hive docs</a>)</li>
<li>Bump frontend to 20220707.1 (<a href="https://github.com/@zsarnett">@zsarnett</a> - <a href="https://github.com/home-assistant/core/pull/75232">#75232</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
<li>Bump AIOAladdinConnect to 0.1.25 (<a href="https://github.com/mkmer">@mkmer</a> - <a href="https://github.com/home-assistant/core/pull/75235">#75235</a>) (<a href="http://www.home-assistant.io/integrations/aladdin_connect/">aladdin_connect docs</a>)</li>
<li>Bump pylitterbot to 2022.7.0 (<a href="https://github.com/natekspencer">@natekspencer</a> - <a href="https://github.com/home-assistant/core/pull/75241">#75241</a>) (<a href="http://www.home-assistant.io/integrations/litterrobot/">litterrobot docs</a>)</li>
<li>Remove nest mac prefix that matches cast devices (<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/75108">#75108</a>) (<a href="http://www.home-assistant.io/integrations/nest/">nest docs</a>)</li>
</ul>
<h2>Release 2022.7.6 - July 20</h2>
<ul>
<li>Fix ZHA light turn on issues (<a href="https://github.com/dmulcahey">@dmulcahey</a> - <a href="https://github.com/home-assistant/core/pull/75220">#75220</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Fix aruba ssh host key algorithm (<a href="https://github.com/apaperclip">@apaperclip</a> - <a href="https://github.com/home-assistant/core/pull/75224">#75224</a>) (<a href="http://www.home-assistant.io/integrations/aruba/">aruba docs</a>)</li>
<li>Force <code>_attr_native_value</code> to metric in bmw_connected_drive (<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/75225">#75225</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive/">bmw_connected_drive docs</a>)</li>
<li>Bump venstarcolortouch to 0.18 (<a href="https://github.com/craftyguy">@craftyguy</a> - <a href="https://github.com/home-assistant/core/pull/75237">#75237</a>) (<a href="http://www.home-assistant.io/integrations/venstar/">venstar docs</a>) (dependency)</li>
<li>Improve UniFi Protect unauth handling (<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/75269">#75269</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect/">unifiprotect docs</a>)</li>
<li>Update pyotgw to 2.0.0 (<a href="https://github.com/mvn23">@mvn23</a> - <a href="https://github.com/home-assistant/core/pull/75285">#75285</a>) (<a href="http://www.home-assistant.io/integrations/opentherm_gw/">opentherm_gw docs</a>) (dependency)</li>
<li>Add fixes for hive light (<a href="https://github.com/KJonline">@KJonline</a> - <a href="https://github.com/home-assistant/core/pull/75286">#75286</a>) (<a href="http://www.home-assistant.io/integrations/hive/">hive docs</a>)</li>
<li>Bump bimmer_connected to 0.10.1 (<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/75287">#75287</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive/">bmw_connected_drive docs</a>) (dependency)</li>
<li>Bump simplisafe-python to 2022.07.0 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/75294">#75294</a>) (<a href="http://www.home-assistant.io/integrations/simplisafe/">simplisafe docs</a>) (dependency)</li>
<li>Upgrade ness_alarm dependencies (<a href="https://github.com/nickw444">@nickw444</a> - <a href="https://github.com/home-assistant/core/pull/75298">#75298</a>) (<a href="http://www.home-assistant.io/integrations/ness_alarm/">ness_alarm docs</a>)</li>
<li>Use the orjson equivalent default encoder when save_json is passed the default encoder (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/74377">#74377</a>)</li>
<li>Use default encoder when saving storage (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/75319">#75319</a>)</li>
<li>Apply filter to libav.hls logging namespace (<a href="https://github.com/uvjustin">@uvjustin</a> - <a href="https://github.com/home-assistant/core/pull/75330">#75330</a>) (<a href="http://www.home-assistant.io/integrations/stream/">stream docs</a>)</li>
<li>Handle (and better log) more AirVisual cloud API errors (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/75332">#75332</a>) (<a href="http://www.home-assistant.io/integrations/airvisual/">airvisual docs</a>)</li>
<li>Fix HKC device triggers (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/75371">#75371</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Bump AIOAladdinConnect to 0.1.27 (<a href="https://github.com/mkmer">@mkmer</a> - <a href="https://github.com/home-assistant/core/pull/75400">#75400</a>) (<a href="http://www.home-assistant.io/integrations/aladdin_connect/">aladdin_connect docs</a>) (dependency)</li>
<li>Bump pytomorrowio to 0.3.4 (<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/75478">#75478</a>) (<a href="http://www.home-assistant.io/integrations/tomorrowio/">tomorrowio docs</a>) (dependency)</li>
<li>Bump pySwitchbot to 0.14.1 (<a href="https://github.com/pascalwinters">@pascalwinters</a> - <a href="https://github.com/home-assistant/core/pull/75487">#75487</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>) (dependency)</li>
<li>Fix Netgear update entity (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/75496">#75496</a>) (<a href="http://www.home-assistant.io/integrations/netgear/">netgear docs</a>)</li>
<li>Fix - Forcast.solar issue on saving settings in options flow without api key (<a href="https://github.com/klaasnicolaas">@klaasnicolaas</a> - <a href="https://github.com/home-assistant/core/pull/75504">#75504</a>) (<a href="http://www.home-assistant.io/integrations/forecast_solar/">forecast_solar docs</a>)</li>
<li>Fix failure to raise on bad YAML syntax from include files (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/75510">#75510</a>)</li>
<li>Fix incorrect Ambient PWS lightning strike sensor state classes (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/75520">#75520</a>) (<a href="http://www.home-assistant.io/integrations/ambient_station/">ambient_station docs</a>)</li>
<li>Bump aioshelly to 2.0.1 (<a href="https://github.com/thecode">@thecode</a> - <a href="https://github.com/home-assistant/core/pull/75523">#75523</a>) (<a href="http://www.home-assistant.io/integrations/shelly/">shelly docs</a>) (dependency)</li>
</ul>
<h2>Release 2022.7.7 - July 26</h2>
<ul>
<li>Fix hvv departures authentication (<a href="https://github.com/vigonotion">@vigonotion</a> - <a href="https://github.com/home-assistant/core/pull/75146">#75146</a>) (<a href="http://www.home-assistant.io/integrations/hvv_departures/">hvv_departures docs</a>)</li>
<li>Fix Epson wrong volume value (<a href="https://github.com/pszafer">@pszafer</a> - <a href="https://github.com/home-assistant/core/pull/75264">#75264</a>) (<a href="http://www.home-assistant.io/integrations/epson/">epson docs</a>)</li>
<li>Change monoprice config flow to sync (<a href="https://github.com/OnFreund">@OnFreund</a> - <a href="https://github.com/home-assistant/core/pull/75306">#75306</a>) (<a href="http://www.home-assistant.io/integrations/monoprice/">monoprice docs</a>)</li>
<li>Round up for stream record lookback (<a href="https://github.com/uvjustin">@uvjustin</a> - <a href="https://github.com/home-assistant/core/pull/75580">#75580</a>) (<a href="http://www.home-assistant.io/integrations/stream/">stream docs</a>)</li>
<li>Revert SimpliSafe auth flow to the quasi-manual OAuth method from 2021.11.0 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/75641">#75641</a>) (<a href="http://www.home-assistant.io/integrations/simplisafe/">simplisafe docs</a>)</li>
<li>Update pyotgw to 2.0.1 (<a href="https://github.com/mvn23">@mvn23</a> - <a href="https://github.com/home-assistant/core/pull/75663">#75663</a>) (<a href="http://www.home-assistant.io/integrations/opentherm_gw/">opentherm_gw docs</a>) (dependency)</li>
<li>Fix AssertionError in RainMachine (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/75668">#75668</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
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
<a href="https://github.com/home-assistant/core/pull/58768"></a>other news about building an Open Home; straight into your inbox.</p>
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
      Python 3.10 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_0" hidden>
<p>Home Assistant now ships with Python 3.10 for the following installation methods:</p>
<ul>
<li>Home Assistant Operating System</li>
<li>Home Assistant Container</li>
<li>Home Assistant Supervised</li>
</ul>
<p>You don’t have to do anything; this will all happen automatically. However,
this might be a breaking change in case you are using custom integration
that does not support Python 3.10 yet.</p>
<p>(<a href="https://github.com/pvizeli">@pvizeli</a> - <a href="https://github.com/home-assistant/core/pull/73830">#73830</a>) (<a href="http://www.home-assistant.io/integrations/recorder/#configure-filter">documentation</a>)</p>
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
      Bluetooth (multiple integrations) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_1" hidden>
<p>Home Assistant is upgrading to Python 3.10 this release and comes
with a breaking change affecting multiple integrations.</p>
<p>Known affected integrations at the time of writing:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/beewi_smartclim">BeeWi SmartClim BLE sensor</a></li>
<li><a href="http://www.home-assistant.io/integrations/bluetooth_tracker">Bluetooth Tracker</a></li>
<li><a href="http://www.home-assistant.io/integrations/avea">Elgato Avea</a></li>
<li><a href="http://www.home-assistant.io/integrations/eq3btsmart">EQ3 Bluetooth Smart Thermostats</a></li>
<li><a href="http://www.home-assistant.io/integrations/decora">Leviton Decora</a></li>
<li><a href="http://www.home-assistant.io/integrations/miflora">Mi Flora</a></li>
<li><a href="http://www.home-assistant.io/integrations/switchmate">Switchmate SimplySmart Home</a></li>
<li><a href="http://www.home-assistant.io/integrations/zengge">Zengge</a></li>
</ul>
<p>These integrations rely on the <code>bluepy</code> and <code>pybluez</code> libraries, which no longer
work in newer versions of Python. <code>bluepy</code> has seen its last update in
<a href="https://pypi.org/project/bluepy/#history">December 2018</a> and hasn’t
kept up with changes in the Python world.
<a href="https://pypi.org/project/pybluez/#history">Similar story</a> with <code>pybluez</code>.</p>
<p>We can’t mitigate this issue. If you are using one of these integrations,
these will no longer work. We rather wanted to see a non-breaking solution,
but we saw no backward compatible path or other solutions to aid this.</p>
<p>If you would like to help fix or upgrade one of these integrations, we
would be grateful. We recommend migrating these integrations onto the
<a href="https://pypi.org/project/bleak/">Bleak</a> library instead.</p>
<p>(<a href="https://github.com/pvizeli">@pvizeli</a> - <a href="https://github.com/home-assistant/core/pull/73830">#73830</a>) (<a href="http://www.home-assistant.io/integrations/recorder/#configure-filter">documentation</a>)</p>
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
      Entity filters (multiple integrations) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_2" hidden>
<p>All entity filters, as used by the following integrations:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/apache_kafka">Apache Kafka</a></li>
<li><a href="http://www.home-assistant.io/integrations/azure_event_hub">Azure Event Hub</a></li>
<li><a href="http://www.home-assistant.io/integrations/google_pubsub">Google Pub/Sub</a></li>
<li><a href="http://www.home-assistant.io/integrations/history">History</a></li>
<li><a href="http://www.home-assistant.io/integrations/influxdb">InfluxDB</a></li>
<li><a href="http://www.home-assistant.io/integrations/logbook">Logbook</a></li>
<li><a href="http://www.home-assistant.io/integrations/recorder">Recorder</a></li>
</ul>
<p>Have been adjusted to make entity filters handle includes stronger than excludes.</p>
<p>Filters are now applied as follows when there are domain and glob includes
(may also have excludes):</p>
<ul>
<li>Entity listed in entities include: include</li>
<li>Otherwise, entity listed in entities exclude: exclude</li>
<li>Otherwise, entity matches glob include: include</li>
<li>Otherwise, entity matches glob exclude: exclude</li>
<li>Otherwise, entity matches domain include: include</li>
<li>Otherwise: exclude</li>
</ul>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/74080">#74080</a>) (<a href="http://www.home-assistant.io/integrations/recorder/#configure-filter">documentation</a>)</p>
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
      Weather (multiple integrations) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_3" hidden>
<p>This applies to all (weather) integrations providing weather entities.</p>
<p>Previously the units for Weather had not been corresponding correctly with
the documentation. These units are now aligned for pressure and wind speed:</p>
<ul>
<li>If the unit system is metric, the default pressure unit is <code>hPa</code>,
and the default wind speed unit is <code>km/h</code>.</li>
<li>If the unit system is imperial, the default pressure unit is <code>inHg</code>,
and the default wind speed unit is <code>mi/h</code>.</li>
</ul>
<p>(<a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> - <a href="https://github.com/home-assistant/core/pull/73707">#73707</a>) (<a href="http://www.home-assistant.io/integrations/weather">documentation</a>)</p>
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
      Eight Sleep 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_4" hidden>
<p>The Eight Sleep integration migrated to configuration
via the UI. Configuring Eight Sleep via YAML configuration
has been deprecated and will be removed in a future Home Assistant release.</p>
<p>Your existing YAML configuration is automatically imported on upgrade to this
release; and thus can be safely removed from your YAML configuration
after upgrading.</p>
<p>(<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/72570">#72570</a>) (<a href="http://www.home-assistant.io/integrations/eight_sleep">documentation</a>)</p>
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
      Glances 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_5" hidden>
<p>The previously deprecated YAML configuration of the Glances
integration has been removed.</p>
<p>Glances is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/engrbm87">@engrbm87</a> - <a href="https://github.com/home-assistant/core/pull/72706">#72706</a>) (<a href="http://www.home-assistant.io/integrations/glances">documentation</a>)</p>
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
      Google Calendars 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_6" hidden>
<p>The Google Calendar <code>google.scan_for_calendars</code> service has been removed.
Similar functionality can be achieved with the
<code>homeassistant.reload_config_entry</code> service, which will reload the
integration and load all new calendars from the API.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/73010">#73010</a>) (<a href="http://www.home-assistant.io/integrations/google">documentation</a>)</p>
<hr />
<p>The Google Calendar <code>add_event</code> service is deprecated and will be removed in
a future Home Assistant release.</p>
<p>A new service <code>create_event</code> with equivalent functionality is its replacement,
which is an entity-based service that takes an entity as a target
(rather than a Google Calendar ID).</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/72473">#72473</a>) (<a href="http://www.home-assistant.io/integrations/google">documentation</a>)</p>
<hr />
<p>Google Calendars no longer supports entity customizations in the UI
when <code>google_calendars.yaml</code> specifies the same entity multiple times.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/73715">#73715</a>) (<a href="http://www.home-assistant.io/integrations/google">documentation</a>)</p>
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
      Hunter Douglas PowerView 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_7" hidden>
<p>Top Down/Bottom Up shades will now have an entity to control each motor.
You will need to manually remove any old entities by selecting the unavailable
entities from the Home Assistant Interface, selecting “REMOVE ENTITY”, and
then confirming the removal by clicking “REMOVE”.</p>
<ul>
<li>If you have automations to set shade position based on entity ID, you will
need to reconfigure these as the new entities will be named differently.</li>
<li>If you only have automations set to trigger scenes you <strong>do not</strong> need to
reconfigure automations.</li>
</ul>
<p>(<a href="https://github.com/kingy444">@kingy444</a> - <a href="https://github.com/home-assistant/core/pull/62788">#62788</a>) (<a href="http://www.home-assistant.io/integrations/hunterdouglas_powerview">documentation</a>)</p>
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
      Islamic Prayer Times 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_8" hidden>
<p>The previously deprecated YAML configuration of the Islamic Prayer Times
integration has been removed.</p>
<p>Islamic Prayer Times is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/engrbm87">@engrbm87</a> - [#7287248332]) (<a href="http://www.home-assistant.io/integrations/islamic_prayer_times">documentation</a>)</p>
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
      Kostal Plenticore 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_9" hidden>
<p>The Kostal Plenticore now has number entities. Two existing sensors entities
have been promoted to this platform: “Battery min Soc” and
“Battery min Home Consumption”.</p>
<p>If you use these sensors entities in your automation, scripts, or dashboards,
you will need to adjust these for this change.</p>
<p>(<a href="https://github.com/stegm">@stegm</a> - <a href="https://github.com/home-assistant/core/pull/64927">#64927</a>) (<a href="http://www.home-assistant.io/integrations/kostal_plenticore">documentation</a>)</p>
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
      LG Soundbars 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_10" hidden>
<p>The LG Soundbars integration migrated to configuration
via the UI. The automatic discovery of the integration via legacy discovery
has been removed.</p>
<p>This change has no possible migration path; therefore, if you use this
integration, you will have to re-add it manually via the user interface.</p>
<p>(<a href="https://github.com/MasonCrawford">@MasonCrawford</a> - <a href="https://github.com/home-assistant/core/pull/71153">#71153</a>) (<a href="http://www.home-assistant.io/integrations/lg_soundbar">documentation</a>)</p>
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
      Life360 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_11" hidden>
<h3>Overview</h3>
<p>The Life360 integration has been converted from the old “legacy”
implementation (which uses <code>known_devices.yaml</code>) to the newer entity based
design, similar to what was done back in the 0.94.0 release to many other
device tracker integrations.</p>
<p>Due to this change, all your existing Life360 entities will become
non-functional, and there will be new entities, with different entity IDs,
that <em>are</em> functional.</p>
<h3>Steps to replace old entities with new ones</h3>
<ol>
<li>Edit the <code>known_devices.yaml</code> file in your configuration directory to
remove any Life360-related entries. Or, if there are only Life360 entries in
this file, simply delete the file entirely.</li>
<li>Restart Home Assistant. All the old, non-functional Life360 entities
should now be gone. (If you are still seeing the old entities, try refreshing
your browser.)</li>
<li>Go to the Entities page (under Settings -&gt; Devices &amp; Services -&gt; Entities)
and change the entity IDs for the new Life360 entities as desired.</li>
</ol>
<h3>Removed/changed functionality</h3>
<p>The previously deprecated YAML configuration of the Life360
integration has been removed.</p>
<p>Life360 is now configured via the UI. Any “advanced” options in
YAML configuration will be imported. Once the migration is complete,
any <code>life360</code> entries in YAML configuration should be removed.</p>
<p>The following options are no longer supported:</p>
<ul>
<li><code>circles</code></li>
<li><code>members</code></li>
<li><code>error_threshold</code></li>
<li><code>warning_threshold</code></li>
<li><code>max_update_wait</code> (including the <code>life360_update_overdue</code> &amp; <code>life360_update_restored</code> events)</li>
<li><code>show_as_state: moving</code></li>
</ul>
<p>Additionally, the following entity attributes have been changed:</p>
<ul>
<li>Renamed: <code>battery</code> -&gt; <code>battery_level</code></li>
<li>Removed: <code>moving</code>, <code>raw_speed</code></li>
</ul>
<p>If you have been using these attributes in your automations or script, you’ll
need to adapt them to this change.</p>
<p>(<a href="https://github.com/pnbruckner">@pnbruckner</a> - <a href="https://github.com/home-assistant/core/pull/72461">#72461</a> <a href="https://github.com/home-assistant/core/pull/73904">#73904</a>) (<a href="http://www.home-assistant.io/integrations/life360">documentation</a>)</p>
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
      Mazda Connected Services 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_12" hidden>
<p>The <code>start_engine</code>, <code>stop_engine</code>, <code>turn_on_hazard_lights</code>,
<code>turn_off_hazard_lights</code>, <code>start_charging</code>, and <code>stop_charging</code> services are
removed from the Mazda integration.</p>
<p>They were deprecated in 2022.4 and replaced by button and switch entities.</p>
<p>(<a href="https://github.com/bdr99">@bdr99</a> - <a href="https://github.com/home-assistant/core/pull/73403">#73403</a>) (<a href="http://www.home-assistant.io/integrations/mazda">documentation</a>)</p>
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
      Met Office 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_13" hidden>
<p>Met Office doesn’t provide precise visibility distance, only ranges - i.e.,
something like “Very good - 20-40 km”.</p>
<p>This doesn’t fit into the weather entity model, so it’s now removed.
The old value is still available in a separate sensor provided
by this integration.</p>
<p>(<a href="https://github.com/avee87">@avee87</a> - <a href="https://github.com/home-assistant/core/pull/74314">#74314</a>) (<a href="http://www.home-assistant.io/integrations/metoffice">documentation</a>)</p>
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
      Mikrotik 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_14" hidden>
<p>The previously deprecated YAML configuration of the Mikrotik
integration has been removed.</p>
<p>Mikrotik is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/engrbm87">@engrbm87</a> - <a href="https://github.com/home-assistant/core/pull/72581">#72581</a>) (<a href="http://www.home-assistant.io/integrations/mikrotik">documentation</a>)</p>
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
      MySensors 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_15" hidden>
<p>The previously deprecated YAML configuration of the MySensors
integration has been removed.</p>
<p>MySensors is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/MartinHjelmare">@MartinHjelmare</a> - <a href="https://github.com/home-assistant/core/pull/72761">#72761</a>) (<a href="http://www.home-assistant.io/integrations/mysensors">documentation</a>)</p>
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
      Nest 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_16" hidden>
<p>The Nest authentication method called “Desktop”, “Installed App” or “OOB” auth
has been <a href="https://developers.googleblog.com/2022/02/making-oauth-flows-safer.html#disallowed-oob">deprecated</a>
by Google and is scheduled to break existing users in October.</p>
<p>As a result, the Home Assistant Nest integration setup has been streamlined
to help make the transition easier for users. See the integration
documentation for details.</p>
<p>The configuration of the OAuth application credentials for the Nest integration
has migrated to configuration via the UI. Configuring Nest OAuth application
credentials via YAML configuration has been deprecated and will be removed in
a future Home Assistant release.</p>
<p>If you were already using Web Auth, your existing Nest application credentials
in the YAML configuration are automatically imported on upgrade to this release;
and thus can be safely removed from your YAML configuration after upgrading.</p>
<p>(<a href="https://github.com/allenporter">@allenporter</a> - <a href="https://github.com/home-assistant/core/pull/73050">#73050</a>) (<a href="http://www.home-assistant.io/integrations/nest">documentation</a>)</p>
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
      Notifications for Android TV / Fire TV 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_17" hidden>
<p>The previously deprecated YAML configuration of the Notifications for
Android TV / Fire TV integration has been removed.</p>
<p>Notifications for Android TV / Fire TV is now configured via the UI,
any existing YAML configuration has been imported in previous releases and
can now be safely removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/engrbm87">@engrbm87</a> - <a href="https://github.com/home-assistant/core/pull/73227">#73227</a>) (<a href="http://www.home-assistant.io/integrations/nfandroidtv">documentation</a>)</p>
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
      NZBGet 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_18" hidden>
<p>The previously deprecated YAML configuration of the NZBGet
integration has been removed.</p>
<p>NZBGet is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/72424">#72424</a>) (<a href="http://www.home-assistant.io/integrations/nzbget">documentation</a>)</p>
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
      Radio Thermostat 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_19" hidden>
<p>The Radio Thermostat integration migrated to configuration
via the UI. Configuring Radio Thermostat via YAML configuration
has been deprecated and will be removed in a future Home Assistant release.</p>
<p>Your existing YAML configuration is automatically imported on upgrade to this
release; and thus can be safely removed from your YAML configuration
after upgrading.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/72874">#72874</a>) (<a href="http://www.home-assistant.io/integrations/radiotherm">documentation</a>)</p>
<hr />
<p>Radio Thermostat’s hold mode is now configured using a switch. This replaces
the original YAML configuration option named <code>hold_temp</code>.</p>
<p>The integration now only synchronizes time when loaded if the hold mode
is not active. Synchronizing the time when the hold mode is active causes
the hold mode to disable unexpectedly.</p>
<p>(<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/73104">#73104</a>) (<a href="http://www.home-assistant.io/integrations/radiotherm">documentation</a>)</p>
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
      Scrape 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_20" hidden>
<p>The default scan interval of the scape sensor has been changed from 30 seconds
to a more reasonable 10 minutes; This prevents unneeded hammering of
websites by default.</p>
<p>(<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/74285">#74285</a>) (<a href="http://www.home-assistant.io/integrations/scrape">documentation</a>)</p>
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
      Simplepush 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_21" hidden>
<p>The Simplepush integration migrated to configuration
via the UI. Configuring Simplepush via YAML configuration
has been deprecated and will be removed in a future Home Assistant release.</p>
<p>Your existing YAML configuration is automatically imported on upgrade to this
release; and thus can be safely removed from your YAML configuration
after upgrading.</p>
<p>(<a href="https://github.com/engrbm87">@engrbm87</a> - <a href="https://github.com/home-assistant/core/pull/73471">#73471</a>) (<a href="http://www.home-assistant.io/integrations/simplepush">documentation</a>)</p>
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
      SkyBell 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_22" hidden>
<p>The SkyBell integration migrated to configuration
via the UI. Configuring SkyBell via YAML configuration
has been deprecated and will be removed in a future Home Assistant release.</p>
<p>Your existing YAML configuration is automatically imported on upgrade to this
release; and thus can be safely removed from your YAML configuration
after upgrading.</p>
<p>After upgrading, each Skybell will now have a device for each doorbell.
Also, it has become unnecessary to prefix all entities with “SkyBell”,
this may change you existing entities after upgrading and you need to adjust
your automation, scripts and dashboard for this change.</p>
<p>(<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/70887">#70887</a>) (<a href="http://www.home-assistant.io/integrations/skybell">documentation</a>)</p>
<hr />
<p>The following SkyBell entity attributes have been split out into their own
sensors: last motion event, last button event, last check-in, motion threshold,
video profile, Wi-Fi SSID, Wi-Fi status.</p>
<p>If you rely on these attributes in your automations or scripts, you will need
to adapt them to this change.</p>
<p>(<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/73089">#73089</a>) (<a href="http://www.home-assistant.io/integrations/skybell">documentation</a>)</p>
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
      SmartThings 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_23" hidden>
<p>The following power entity attributes from the climate entity for SmartThings
Air Conditioner have been removed and added as separate sensors:</p>
<ul>
<li><code>power_consumption_start</code></li>
<li><code>power_consumption_end</code></li>
<li><code>power_consumption_power</code></li>
<li><code>power_consumption_energy</code></li>
</ul>
<p>If you currently use these attributes in your automation or scripts,
you’ll need to adapt them to this change.</p>
<p>(<a href="https://github.com/mbo18">@mbo18</a> - <a href="https://github.com/home-assistant/core/pull/72594">#72594</a>) (<a href="http://www.home-assistant.io/integrations/smartthings">documentation</a>)</p>
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
      SMS notifications via GSM-modem 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_24" hidden>
<p>GSM signal sensor entity was replaced with a set of more granular ones.
The old entity will become unavailable after updating to this release.</p>
<p>(<a href="https://github.com/PaulAnnekov">@PaulAnnekov</a> - <a href="https://github.com/home-assistant/core/pull/70486">#70486</a>) (<a href="http://www.home-assistant.io/integrations/sms">documentation</a>)</p>
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
      System Bridge 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_25" hidden>
<ul>
<li>This integration now requires System Bridge 3.1.2 and above. Any older
version will no longer work.</li>
<li>BIOS Version, Idle, System, and User Load sensors have been removed.
These are no longer available from System Bridge data modules.</li>
<li>Command service has been removed. This has been removed from System Bridge
due to potential security issues.</li>
<li>Open path and URL are now separate services. If you are using the
old <code>system_bridge.open</code> service, you will need to update your
automation to use the new service(s).</li>
<li>GPU entities are from a new source, so they may have changed names slightly.
Any automations using these entities may need to be updated.</li>
<li>GPU fan speed is now measured in RPM instead of %.</li>
</ul>
<p>(<a href="https://github.com/timmo001">@timmo001</a> - <a href="https://github.com/home-assistant/core/pull/71218">#71218</a>) (<a href="http://www.home-assistant.io/integrations/system_bridge">documentation</a>)</p>
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
      Tautulli 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_26" hidden>
<p>The previously deprecated YAML configuration of the Tautulli
integration has been removed.</p>
<p>Tautulli is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/ludeeus">@ludeeus</a> - <a href="https://github.com/home-assistant/core/pull/74172">#74172</a>) (<a href="http://www.home-assistant.io/integrations/tautulli">documentation</a>)</p>
<hr />
<p>Entity attributes of Tautulli entities have now been moved to their own sensors.</p>
<p>If you currently use these attributes in your automation or scripts,
you’ll need to adapt them to this change.</p>
<p>(<a href="https://github.com/tkdrob">@tkdrob</a> - <a href="https://github.com/home-assistant/core/pull/71712">#71712</a>) (<a href="http://www.home-assistant.io/integrations/tautulli">documentation</a>)</p>
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
      Transmission 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_27" hidden>
<p>The previously deprecated YAML configuration of the Transmission
integration has been removed.</p>
<p>Transmission is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/engrbm87">@engrbm87</a> - <a href="https://github.com/home-assistant/core/pull/72832">#72832</a>) (<a href="http://www.home-assistant.io/integrations/transmission">documentation</a>)</p>
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
      UniFi Protect 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_28" hidden>
<p>The new disk sensors pull from completely different data than the old ones.
They should be largely compatible for functionality, but orphaned sensors may
still be created. Any orphaned sensors can be safely deleted.</p>
<p>The sensors’ naming format has also changed to match what is shown in UniFi
Protect. Additionally, the extra state attribute for the model has
been completely removed since now the slot numbers match what UniFi
Protect displays.</p>
<p>(<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/73104">#73104</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect">documentation</a>)</p>
<hr />
<p>Entities that provided an “edit” configuration interface for Protect devices
(like the HDR Switch or Recording Mode Select) have all now been replaced by
regular sensor entities; if you do not have write access to that UniFi Protect
Device.</p>
<p>These switches, select entities, etc., never actually worked previously since
the user did not have permission to change them, but you could read the status.</p>
<p>Any entities that are orphaned by this can be safely deleted.</p>
<p>(<a href="https://github.com/AngellusMortis">@AngellusMortis</a> - <a href="https://github.com/home-assistant/core/pull/73765">#73765</a>) (<a href="http://www.home-assistant.io/integrations/unifiprotect">documentation</a>)</p>
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
      Universal Media Player 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_29" hidden>
<p>An “order of importance” between the states of the children of
Universal Media Player has been added. The active media player might change
if some of the children are in “playing” and “paused” states,
depending on the children’s order.</p>
<p>(<a href="https://github.com/koying">@koying</a> - <a href="https://github.com/home-assistant/core/pull/68036">#68036</a>) (<a href="http://www.home-assistant.io/integrations/universal">documentation</a>)</p>
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
      UPnP/IGD 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_30" hidden>
<p>The previously deprecated YAML configuration of the UPnP/IGD
integration has been removed.</p>
<p>UPnP/IGD is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files.</p>
<p>(<a href="https://github.com/epenet">@epenet</a> - <a href="https://github.com/home-assistant/core/pull/72410">#72410</a>) (<a href="http://www.home-assistant.io/integrations/upnp">documentation</a>)</p>
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
      VeSync 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_31" hidden>
<p>The <code>air_quality</code> and <code>filter_life</code> attributes have been removed from the fan
entities. Dedicated sensor entities have replaced these attributes.</p>
<p>If you are currently using these attributes in your automation or scripts,
you’ll need to adapt them to this change.</p>
<p>(<a href="https://github.com/jetpacktuxedo">@jetpacktuxedo</a> - <a href="https://github.com/home-assistant/core/pull/72658">#72658</a>) (<a href="http://www.home-assistant.io/integrations/vesync">documentation</a>)</p>
<hr />
<p>Vesync switches that support energy monitoring will have their:</p>
<ul>
<li>Voltage attribute moved from the switch entity to a dedicated Voltage Sensor
entity</li>
<li>Weekly, monthly and yearly moved from the switch entity attributes into new
energy sensors.</li>
</ul>
<p>If you used these entity attributes in your automation or scripts, you’d need
to adapt them to this change.</p>
<p>(<a href="https://github.com/b3nj1">@b3nj1</a> - <a href="https://github.com/home-assistant/core/pull/72570">#72570</a>) (<a href="http://www.home-assistant.io/integrations/vesync">documentation</a>)</p>
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
      Z-Wave JS 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_32" hidden>
<p>With this release, you will need to update your zwave-js-server instance.</p>
<ul>
<li>If you use the zwave_js add-on, you need at least version <code>0.1.64</code>.</li>
<li>If you use the Z-Wave JS 2 MQTT add-on, you need at least version <code>0.44.0</code>.</li>
<li>If you use the zwavejs2mqtt Docker container, you need at least version <code>6.13.0</code>.</li>
<li>If you run your own Docker container or some other installation method,
you will need to update your zwave-js-server instance to at least <code>1.20.0</code>.</li>
</ul>
<p>(<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/73707">#73707</a> <a href="https://github.com/home-assistant/core/pull/73904">#73904</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js">documentation</a>)</p>
</div>
  </div>
</div>
<p>If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
<a href="https://developers.home-assistant.io/blog/">developer blog</a>. The following are the most notable for this release:</p>
<ul>
<li><a href="https://developers.home-assistant.io/blog/2022/06/13/unsafe_reloads_during_entry_setup">Avoiding reloading config entries while they are setting up</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/06/07/dataflow-constants-deprecation">Deprecating Data Entry Flow constants</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/06/14/number_entity_refactoring">Number entity refactoring to support unit conversion</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/06/27/weather_entity_refactoring">Weather entity refactoring to support unit conversions</a></li>
</ul>
<h2>Farewell to the following</h2>
<p>The following integrations are also no longer available as of this release:</p>
<ul>
<li><strong>iAlarm XR</strong> has been removed on request by Antifurto365 (manufacturer).</li>
<li><strong>Somfy</strong> has been previously deprecated and now removed. Its cloud API was
shut down on June 21st, 2022. Use the <a href="http://www.home-assistant.io/integrations/overkiz">Overkiz integration</a>
as a replacement.</li>
</ul>
<h2>All changes</h2>
<p>Of course, there is a lot more in this release. You can find a list of
all changes made here: <a href="http://www.home-assistant.io/changelogs/core-2022.7">Full changelog for Home Assistant Core 2022.7</a></p>
"
link: "https://www.home-assistant.io/blog/2022/07/06/release-20227/"
category:
---
