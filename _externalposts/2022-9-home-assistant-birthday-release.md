---
title: "2022.9 - Home Assistant Birthday Release!"
date: 2022-09-07 02:00:00 +0000
dateadded: 2023-02-02 08:54:04 +0100
description: "<p><a href='http://www.home-assistant.io/integrations/#version/2022.9'><img src='http://www.home-assistant.io/images/blog/2022-09/social.png' style='border: 0;box-shadow: none;'></a></p>
<p>Home Assistant Core 2022.9! 🎂</p>
<p>If you don’t know yet, this month is Home Assistant’s birthday! 🎉🎉 On September 17th, 2013 <a href="https://twitter.com/balloob">Paulus Schoutsen</a> made the first commit for Home Assistant that started a snowball of Home Automation enthusiasts willing to contribute to the open-source project. 9 Years later, Home Assistant is actively used by more than 500,000 people and growing every day. Nabu Casa also turns 4 this month. Turning 4 years old and gaining a new full-time employee 🍄. This month it seems everyone was in the birthday spirit as we have a jam-packed release!</p>
<p>The automation engine is a big reason why Home Assistant has so many users. So in the spirit of <a href="https://www.home-assistant.io/blog/2022/01/19/streamlining-experiences/">Streamlining Experiences</a>, we thought a revamp was due. You will notice some huge improvements to the look and feel of the Automation Editor that we think will greatly improve its usability. I know I for sure see a huge difference!</p>
<p>Now I know that everyone usually expects <a href="https://github.com/frenck">@frenck</a> to be writing these release notes, but he took a well deserved vacation! And now you are stuck with me. Zack 😀. I hope you enjoy the release and everything that was packed into it!</p>
<p>– Zack</p>
<!--more-->
<ul>
<li><a href="#paul-bottein-joins-nabu-casa">Paul Bottein joins Nabu Casa</a></li>
<li><a href="#streamlining-automations">Streamlining automations</a></li>
<li><a href="#new-helper-weekly-schedule">New helper: Weekly schedule</a></li>
<li><a href="#bluetooth-everywhere">Bluetooth everywhere</a></li>
<li><a href="#z-wave-firmware-updates-now-live">Z-Wave Firmware updates now live</a></li>
<li><a href="#zigbee-backup-and-restore--migration">Zigbee backup and restore + migration</a></li>
<li><a href="#processor-and-memory-usage">Processor and memory usage</a></li>
<li><a href="#other-noteworthy-changes">Other noteworthy changes</a></li>
<li><a href="#new-integrations">New Integrations</a></li>
<li><a href="#integrations-now-available-to-set-up-from-the-ui">Integrations now available to set up from the UI</a></li>
<li><a href="#release-202291---september-8">Release 2022.9.1 - September 8</a></li>
<li><a href="#release-202292---september-11">Release 2022.9.2 - September 11</a></li>
<li><a href="#release-202293---september-13">Release 2022.9.3 - September 13</a></li>
<li><a href="#release-202294---september-14">Release 2022.9.4 - September 14</a></li>
<li><a href="#release-202295---september-18">Release 2022.9.5 - September 18</a></li>
<li><a href="#release-202296---september-22">Release 2022.9.6 - September 22</a></li>
<li><a href="#release-202297---september-26">Release 2022.9.7 - September 26</a></li>
<li><a href="#need-help-join-the-community">Need help? Join the community</a></li>
<li><a href="#breaking-changes">Breaking Changes</a></li>
<li><a href="#all-changes">All changes</a></li>
</ul>
<p>Don’t forget to <a href="https://www.youtube.com/watch?v=UTltO1-d56s">join our release party live stream on YouTube</a> today at 12:00 PDT / 21:00 CET!</p>
<p><lite-youtube videoid="UTltO1-d56s" videotitle="Home Assistant 9th Birthday Release Party (2022.9)"></lite-youtube></p>
<h2>Paul Bottein joins Nabu Casa</h2>
<p>We are excited to announce the newest member of the Nabu Casa team, <a href="https://github.com/piitaya">Paul Bottein</a>.</p>
<p>Paul is most known for his <a href="https://github.com/piitaya/lovelace-mushroom">Mushroom cards</a> and a few additions to Home Assistant frontend like the Icon Picker. Paul is an incredible developer and his expertise in dashboard design will bring a lot to the Home Assistant frontend.</p>
<p>Welcome aboard and excited to see what Paul will bring to Home Assistant!</p>
<h2>Streamlining automations</h2>
<p>We felt that there were quite a few improvements we could do in order to better streamline automation creation. That’s why this release, we really
took a long look at some of the main user experience issues. The new automation editor improvements focus on readability and ease of use. This
will also make editing automations on your phone much easier!</p>
<p>First, you will notice the biggest change, collapsible cards for triggers, conditions, and actions. This change allows you to really focus on what you
are currently working on instead of having everything open all at once. When you first open your automation in the editor, you will see all cards collapsed with
an auto-generated explanation of what that section is doing. This allows you to easily choose which section you want to edit and focus in on it.</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-09/automation_editor_new.png' alt='Screenshot showing the new automation editor with an easier overview'><br></p>
<p>Next, there were a few items and options moved. You can see most of these in the top right overflow menu. For example, if you want to rename or update the description
of your automation you can do that via the overflow menu &gt; Rename. Moving these items to the overflow ensures that the main editor page is used for the main functions of
your automation.</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-09/automation_overflow.png' alt='Screenshot showing the new automation editor overflow menus'><br></p>
<p>Last, but definitely not least, Frenck added some long requested features to the automation forms. <strong>State and Attribute value auto-completion!</strong> Now if you are adding a
state trigger, you can choose from a list of known states for that device type. These are also all translated into your language. Now there is no need to remember or find
the states possible or format the state that needs to be entered. Just choose a state from the dropdown and let your worries wisp away!</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-09/automation_state_selector.gif' alt='Screenshot showing the new automation editor state and attribute value selector'><br></p>
<h2>New helper: Weekly schedule</h2>
<p>Have you ever wanted to run a schedule-based automation for the same time each week or day? Well, you are now in luck! With the addition of the Schedule helper, you are now able
to easily create these schedules to build more consistent automations and timings.</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-09/create_schedule.gif' alt='A gif showcasing the new schedule helper and how to use the user interface'><br></p>
<p><a href='https://my.home-assistant.io/redirect/config_flow_start?domain=schedule' class='my badge' target='_blank'><img src='https://my.home-assistant.io/badges/config_flow_start.svg' /></a></p>
<h2>Bluetooth everywhere</h2>
<p>Last release we introduced the Bluetooth integration. This release, it’s on fire 🔥 Not only do we now support multiple Bluetooth adapters, we also support ESPHome devices acting as <a href="https://esphome.io/components/bluetooth_proxy.html">Bluetooth proxies</a> for your home. Wait what?!</p>
<p>Yes 😎. You can now greatly expand the Bluetooth reach of Home Assistant using ordinary ESP32 devices. No extra hardware needed.</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-09/bluetooth-proxy-overview.png' alt='Picture of a home showing how Bluetooth data is proxied via ESPHome devices to Home Assistant'><br></p>
<p>To get a proxy up and running, head over to the <a href="https://esphome.github.io/bluetooth-proxies/">Bluetooth proxy installer website</a> and install one straight from your browser.</p>
<p>Bluetooth proxies are currently limited to forwarding passive data. Active connections are coming in a future release. Bluetooth integrations in Home Assistant will transparently use Bluetooth proxies without any extra coding!</p>
<p>Most integrations now support using the adapter with the best signal to connect devices that need an active connection. Extension cables, USB-Ethernet extenders, or USB-IP coupled with an additional Bluetooth adapter can significantly extend your active connection range.</p>
<p>There is more! Besides 9 new supported brands, there is also support for a new open standard: <a href="https://bthome.io">BTHome</a> by <a href="https://github.com/Ernst79">@Ernst79</a>. It is automatically discovered by Home Assistant, devices can run over a year on a single battery and it supports data encryption.</p>
<p>Finally, suppose you are using the Home Assistant Operating System. In that case, we recommend upgrading to version 9 or later when it is released, as it comes with a faster D-Bus broker and newer Bluetooth firmware which can significantly enhance Bluetooth performance.</p>
<p>Thanks to <a href="https://github.com/bdraco">@bdraco</a>, <a href="https://github.com/Ernst79">@Ernst79</a>, <a href="https://github.com/jesserockz">@JesseRockz</a>, <a href="https://github.com/jc2k">@jc2k</a> for all the hard, amazing and epic work 🙏.</p>
<h2>Z-Wave Firmware updates now live</h2>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-09/zwave_updates.png' alt='Screenshot showing zwave device updates in the settings page'><br></p>
<p>In 2022.7, we added support for updating Z-Wave device firmware, but the catch was that you needed the firmware files from the manufacturer in order to complete the update. <a href="https://github.com/alcalzone">@AlCalzone</a> wasn’t satisfied with this approach and began working on a better solution. That better solution is here with the introduction of the Z-Wave JS Firmware Update Service! For supported manufacturers, Z-Wave JS can now automatically detect, download, and install a firmware update if it is available for your device. This will be done the same way you are currently updating Home Assistant. You will see a notification in your settings menu and you can update right from there. Thanks <a href="https://github.com/raman325">@raman325</a></p>
<p>For now, only Jasco products are supported. Nabu Casa has been talking to other manufacturers to get more devices supported. To ensure our users can take advantage of this feature, we added update entities for your devices that will check once a day for new firmware updates. Nifty!</p>
<h2>Zigbee backup and restore + migration</h2>
<p>The Zigbee Home Automation (ZHA) integration now supports network backups and migrating between Zigbee coordinators. Backups are taken automatically but can also be manually created from the configuration page. After restoring a Home Assistant backup, you can re-configure ZHA and migrate to a new Zigbee coordinator without any loss of your settings or devices that were connected. This is helpful if your current radio fails or a new radio comes out that you may want to migrate to.</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-09/zigbee.png' alt='Screenshot showing the Zigbee Home Automation configuration page and the new backup functionality'><br></p>
<h2>Processor and memory usage</h2>
<p>The Hardware page just got a lot more interesting. You can go check out live statistics on your Memory and Processor usage when you load the Hardware page in your system menu. These statistics will represent your entire Home Assistant instance, giving you insight in how your hardware is handling your day to day tasks. This will not show any history but will display 5 minutes of live data once you load the page.</p>
<p><img class="no-shadow" src='http://www.home-assistant.io/images/blog/2022-09/hardware_page.png' alt='Screenshot showing the processor and memory usage on the hardware page'><br></p>
<h2>Other noteworthy changes</h2>
<p>There is much more juice in this release; here are some of the other
noteworthy changes this release:</p>
<ul>
<li>Entity more info dialog merged with entity settings. Thanks <a href="https://github.com/balloob">@balloob</a></li>
<li>You can now enable local control of your Awair Element device. Thanks <a href="https://github.com/zachberger">@zachberger</a></li>
<li>MiFlora now supports polling of the Battery sensor. Thanks <a href="https://github.com/bdraco">@bdraco</a></li>
<li>August locks are now supported under the Yale Access Bluetooth integration. Thanks <a href="https://github.com/bdraco">@bdraco</a></li>
<li>Many more Bluetooth adapters are now supported for the Bluetooth integration. Thanks <a href="https://github.com/bdraco">@bdraco</a></li>
<li>The SwitchBot integration now supports the Color Bulb and Light strips. Thanks <a href="https://github.com/bdraco">@bdraco</a></li>
<li>Automations, Scripts and Scenes tables received a new overflow menu that will allow for more actions directly from the picker. Thanks <a href="https://github.com/bramkragten">@bramkragten</a> and <a href="https://github.com/piitaya">@piitaya</a></li>
<li>You can now reorder automation elements using drag and drop. Thanks <a href="https://github.com/piitaya">@piitaya</a></li>
<li>Icons have been added to more menus throughout the UI. Thanks <a href="https://github.com/frenck">@frenck</a></li>
<li>Automation triggers can now be aliased. Thanks <a href="https://github.com/frenck">@frenck</a></li>
</ul>
<h2>New Integrations</h2>
<p>We welcome the following new integrations in this release:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/bluemaestro">BlueMaestro</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/bthome">BThome</a>, added by <a href="https://github.com/Ernst79">@Ernst79</a></li>
<li><a href="http://www.home-assistant.io/integrations/ecowitt">Ecowitt</a>, added by <a href="https://github.com/pvizeli">@pvizeli</a></li>
<li><a href="http://www.home-assistant.io/integrations/escea">Escea</a>, added by <a href="https://github.com/lazdavila">@lazdavila</a></li>
<li><a href="http://www.home-assistant.io/integrations/file_upload">File Upload</a>, added by <a href="https://github.com/balloob">@balloob</a></li>
<li><a href="http://www.home-assistant.io/integrations/fully_kiosk">Fully Kiosk Browser</a>, added by <a href="https://github.com/cgarwood">@cgarwood</a></li>
<li><a href="http://www.home-assistant.io/integrations/justnimbus">JustNimbus</a>, added by <a href="https://github.com/kvanzuijlen">@kvanzuijlen</a></li>
<li><a href="http://www.home-assistant.io/integrations/lacrosse_view">LaCrosse View</a>, added by <a href="https://github.com/IceBotYT">@IceBotYT</a></li>
<li><a href="http://www.home-assistant.io/integrations/landisgyr_heat_meter">Landis+Gyr Heat Meter</a>, added by <a href="https://github.com/vpathuis">@vpathuis</a></li>
<li><a href="http://www.home-assistant.io/integrations/led_ble">LED BLE</a>, added by  <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/melnor">Melnor Bluetooth</a>, added by <a href="https://github.com/vanstinator">@vanstinator</a></li>
<li><a href="http://www.home-assistant.io/integrations/prusalink">PrusaLink</a>, added by <a href="https://github.com/balloob">@balloob</a></li>
<li><a href="http://www.home-assistant.io/integrations/qingping">Qingping</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/schedule">Schedule</a>, added by <a href="https://github.com/frenck">@frenck</a></li>
<li><a href="http://www.home-assistant.io/integrations/sensorpro">SensorPro</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/thermobeacon">ThermoBeacon</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/thermopro">ThermoPro</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
<li><a href="http://www.home-assistant.io/integrations/yalexs_ble">Yale Access Bluetooth</a>, added by <a href="https://github.com/bdraco">@bdraco</a></li>
</ul>
<h2>Integrations now available to set up from the UI</h2>
<p>The following integrations are now available via the Home Assistant UI:</p>
<ul>
<li><a href="http://www.home-assistant.io/integrations/android_ip_webcam">Android IP Webcam</a>, done by <a href="https://github.com/engrbm87">@engrbm87</a></li>
<li><a href="http://www.home-assistant.io/integrations/lametric">LaMetric</a>, done by <a href="https://github.com/frenck">@frenck</a></li>
<li><a href="http://www.home-assistant.io/integrations/openexchangerates">Open Exchange Rates</a>, done by <a href="https://github.com/MartinHjelmare">@MartinHjelmare</a></li>
<li><a href="http://www.home-assistant.io/integrations/pushover">Pushover</a>, done by <a href="https://github.com/engrbm87">@engrbm87</a></li>
<li><a href="http://www.home-assistant.io/integrations/volvooncall">Volvo On Call</a>, done by <a href="https://github.com/y34hbuddy">@y34hbuddy</a></li>
</ul>
<h2>Release 2022.9.1 - September 8</h2>
<ul>
<li>Show progress for zwave_js.update entity (<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/77905">#77905</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Fix <code>len</code> method typo for Osram light (<a href="https://github.com/Vaskivskyi">@Vaskivskyi</a> - <a href="https://github.com/home-assistant/core/pull/78008">#78008</a>) (<a href="http://www.home-assistant.io/integrations/osramlightify/">osramlightify docs</a>)</li>
<li>Add value ID to zwave_js device diagnostics (<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/78015">#78015</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Fix zwave_js default emulate hardware in options flow (<a href="https://github.com/MartinHjelmare">@MartinHjelmare</a> - <a href="https://github.com/home-assistant/core/pull/78024">#78024</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Extract lametric device from coordinator in notify (<a href="https://github.com/ludeeus">@ludeeus</a> - <a href="https://github.com/home-assistant/core/pull/78027">#78027</a>) (<a href="http://www.home-assistant.io/integrations/lametric/">lametric docs</a>)</li>
<li>Bump velbus-aio to 2022.9.1 (<a href="https://github.com/Cereal2nd">@Cereal2nd</a> - <a href="https://github.com/home-assistant/core/pull/78039">#78039</a>) (<a href="http://www.home-assistant.io/integrations/velbus/">velbus docs</a>)</li>
<li>Fix zwave_js device re-interview (<a href="https://github.com/MartinHjelmare">@MartinHjelmare</a> - <a href="https://github.com/home-assistant/core/pull/78046">#78046</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Bump bluetooth-adapters to 0.3.5 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78052">#78052</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Bump bluetooth-auto-recovery to 0.3.2 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78063">#78063</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Fix bug with 1st gen RainMachine controllers and unknown API calls (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/78070">#78070</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Bump pylitterbot to 2022.9.1 (<a href="https://github.com/natekspencer">@natekspencer</a> - <a href="https://github.com/home-assistant/core/pull/78071">#78071</a>) (<a href="http://www.home-assistant.io/integrations/litterrobot/">litterrobot docs</a>)</li>
<li>Allow OpenWeatherMap config flow to test using old API to pass (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/78074">#78074</a>) (<a href="http://www.home-assistant.io/integrations/openweathermap/">openweathermap docs</a>)</li>
<li>Fix Ecobee remote sensors not updating (<a href="https://github.com/rlippmann">@rlippmann</a> - <a href="https://github.com/home-assistant/core/pull/78035">#78035</a>) (<a href="http://www.home-assistant.io/integrations/ecobee/">ecobee docs</a>)</li>
</ul>
<h2>Release 2022.9.2 - September 11</h2>
<ul>
<li>Fix reload of MQTT config entries (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/76089">#76089</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Clear MQTT discovery topic when a disabled entity is removed (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/77757">#77757</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Improve warning messages on invalid received modes (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/77909">#77909</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Handle missing supported brands (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/78090">#78090</a>) (<a href="http://www.home-assistant.io/integrations/websocket_api/">websocket_api docs</a>)</li>
<li>Fix switchbot writing state too frequently (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78094">#78094</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Fix LIFX light turning on while fading off (<a href="https://github.com/amelchio">@amelchio</a> - <a href="https://github.com/home-assistant/core/pull/78095">#78095</a>) (<a href="http://www.home-assistant.io/integrations/lifx/">lifx docs</a>)</li>
<li>Fix zwave_js update entity (<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/78116">#78116</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Improve unique_id collision checks in entity_platform (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78132">#78132</a>)</li>
<li>Allow non-integers in threshold sensor config flow (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78137">#78137</a>) (<a href="http://www.home-assistant.io/integrations/threshold/">threshold docs</a>)</li>
<li>Bump bluetooth-adapters to 0.3.6 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78138">#78138</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Add missing strings for errors in amberelectric config flow (<a href="https://github.com/Vaskivskyi">@Vaskivskyi</a> - <a href="https://github.com/home-assistant/core/pull/78140">#78140</a>) (<a href="http://www.home-assistant.io/integrations/amberelectric/">amberelectric docs</a>)</li>
<li>Bump aioecowitt to 2022.09.1 (<a href="https://github.com/pvizeli">@pvizeli</a> - <a href="https://github.com/home-assistant/core/pull/78142">#78142</a>) (<a href="http://www.home-assistant.io/integrations/ecowitt/">ecowitt docs</a>)</li>
<li>Add missing moisture sensor to xiaomi_ble (<a href="https://github.com/jc2k">@Jc2k</a> - <a href="https://github.com/home-assistant/core/pull/78160">#78160</a>) (<a href="http://www.home-assistant.io/integrations/xiaomi_ble/">xiaomi_ble docs</a>)</li>
<li>Bump pySwitchbot to 0.19.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78168">#78168</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump aiohomekit to 1.5.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78170">#78170</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Fix ecowitt typing (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/78171">#78171</a>) (<a href="http://www.home-assistant.io/integrations/ecowitt/">ecowitt docs</a>)</li>
<li>Fix sending notification to multiple targets in Pushover (<a href="https://github.com/engrbm87">@engrbm87</a> - <a href="https://github.com/home-assistant/core/pull/78111">#78111</a>) (<a href="http://www.home-assistant.io/integrations/pushover/">pushover docs</a>)</li>
<li>Add dependencies to ecowitt (<a href="https://github.com/pvizeli">@pvizeli</a> - <a href="https://github.com/home-assistant/core/pull/78187">#78187</a>) (<a href="http://www.home-assistant.io/integrations/ecowitt/">ecowitt docs</a>)</li>
<li>Bump led-ble to 0.8.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78188">#78188</a>) (<a href="http://www.home-assistant.io/integrations/led_ble/">led_ble docs</a>)</li>
<li>Fix switchbot not setting up when already connected at startup (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78198">#78198</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Fix Yale Access Bluetooth not setting up when already connected at startup (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78199">#78199</a>) (<a href="http://www.home-assistant.io/integrations/yalexs_ble/">yalexs_ble docs</a>)</li>
<li>Bump ZHA dependencies (<a href="https://github.com/puddly">@puddly</a> - <a href="https://github.com/home-assistant/core/pull/78201">#78201</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Close stale switchbot connections at setup time (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78202">#78202</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump aiohomekit to 1.5.4 to handle stale ble connections at startup (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78203">#78203</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Landis+Gyr integration: increase timeout and add debug logging (<a href="https://github.com/vpathuis">@vpathuis</a> - <a href="https://github.com/home-assistant/core/pull/78025">#78025</a>) (<a href="http://www.home-assistant.io/integrations/landisgyr_heat_meter/">landisgyr_heat_meter docs</a>)</li>
<li>Bump bluetooth-adapters to 0.4.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78205">#78205</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Bump <code>regenmaschine</code> to 2022.09.1 (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/78210">#78210</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Bump led_ble to 0.8.5 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78215">#78215</a>) (<a href="http://www.home-assistant.io/integrations/led_ble/">led_ble docs</a>)</li>
<li>Bump pysensibo to 1.0.20 (<a href="https://github.com/gjohansson-ST">@gjohansson-ST</a> - <a href="https://github.com/home-assistant/core/pull/78222">#78222</a>) (<a href="http://www.home-assistant.io/integrations/sensibo/">sensibo docs</a>)</li>
<li>Bump PySwitchbot to 0.19.5 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78224">#78224</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump yalexs-ble to 1.8.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78225">#78225</a>) (<a href="http://www.home-assistant.io/integrations/yalexs_ble/">yalexs_ble docs</a>)</li>
<li>Bump led-ble to 0.9.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78226">#78226</a>) (<a href="http://www.home-assistant.io/integrations/led_ble/">led_ble docs</a>)</li>
<li>Bump aiohomekit to 1.5.6 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78228">#78228</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
</ul>
<h2>Release 2022.9.3 - September 13</h2>
<ul>
<li>Move up setup of service to make it more robust when running multiple instances of deCONZ (<a href="https://github.com/Kane610">@Kane610</a> - <a href="https://github.com/home-assistant/core/pull/77621">#77621</a>) (<a href="http://www.home-assistant.io/integrations/deconz/">deconz docs</a>)</li>
<li>Bump blinkpy to 0.19.2 (<a href="https://github.com/Vaskivskyi">@Vaskivskyi</a> - <a href="https://github.com/home-assistant/core/pull/78097">#78097</a>) (<a href="http://www.home-assistant.io/integrations/blink/">blink docs</a>)</li>
<li>Bump PyViCare==2.17.0 (<a href="https://github.com/TheJulianJES">@TheJulianJES</a> - <a href="https://github.com/home-assistant/core/pull/78232">#78232</a>) (<a href="http://www.home-assistant.io/integrations/vicare/">vicare docs</a>)</li>
<li>Fix missing dependency for dbus_next (<a href="https://github.com/d-walsh">@d-walsh</a> - <a href="https://github.com/home-assistant/core/pull/78235">#78235</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Bump bluetooth-auto-recovery to 0.3.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78245">#78245</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Bump aiodiscover to 1.4.13 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78253">#78253</a>) (<a href="http://www.home-assistant.io/integrations/dhcp/">dhcp docs</a>)</li>
<li>Bump pySwitchbot to 0.19.6 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78304">#78304</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Make yalexs_ble matcher more specific (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78307">#78307</a>) (<a href="http://www.home-assistant.io/integrations/yalexs_ble/">yalexs_ble docs</a>)</li>
<li>Fix sengled bulbs in ZHA (<a href="https://github.com/dmulcahey">@dmulcahey</a> - <a href="https://github.com/home-assistant/core/pull/78315">#78315</a>) (<a href="http://www.home-assistant.io/integrations/zha/">zha docs</a>)</li>
<li>Fix calculating gas cost for gas measured in ft3 (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78327">#78327</a>) (<a href="http://www.home-assistant.io/integrations/energy/">energy docs</a>)</li>
<li>Bump bleak to 0.17.0 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78333">#78333</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Drop initial when loading input_number from storage (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78354">#78354</a>) (<a href="http://www.home-assistant.io/integrations/input_number/">input_number docs</a>)</li>
<li>Don’t allow partial update of input_number settings (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78356">#78356</a>) (<a href="http://www.home-assistant.io/integrations/input_number/">input_number docs</a>)</li>
<li>Bump PySwitchbot to 0.19.8 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78361">#78361</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump yalexs-ble to 1.9.0 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78362">#78362</a>) (<a href="http://www.home-assistant.io/integrations/yalexs_ble/">yalexs_ble docs</a>)</li>
<li>Bump xiaomi-ble to 0.9.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78301">#78301</a>) (<a href="http://www.home-assistant.io/integrations/xiaomi_ble/">xiaomi_ble docs</a>)</li>
<li>Bump xiaomi-ble to 0.10.0 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78365">#78365</a>) (<a href="http://www.home-assistant.io/integrations/xiaomi_ble/">xiaomi_ble docs</a>)</li>
<li>Bump led-ble to 0.10.0 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78367">#78367</a>) (<a href="http://www.home-assistant.io/integrations/led_ble/">led_ble docs</a>)</li>
<li>Bump aiohomekit to 1.5.7 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78369">#78369</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Don’t allow partial update of counter settings (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78371">#78371</a>) (<a href="http://www.home-assistant.io/integrations/counter/">counter docs</a>)</li>
<li>Don’t allow partial update of input_boolean settings (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78372">#78372</a>) (<a href="http://www.home-assistant.io/integrations/input_boolean/">input_boolean docs</a>)</li>
<li>Don’t allow partial update of input_datetime settings (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78373">#78373</a>) (<a href="http://www.home-assistant.io/integrations/input_datetime/">input_datetime docs</a>)</li>
<li>Don’t allow partial update of input_button settings (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78374">#78374</a>) (<a href="http://www.home-assistant.io/integrations/input_button/">input_button docs</a>)</li>
<li>Don’t allow partial update of input_select settings (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78376">#78376</a>) (<a href="http://www.home-assistant.io/integrations/input_select/">input_select docs</a>)</li>
<li>Don’t allow partial update of input_text settings (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78377">#78377</a>) (<a href="http://www.home-assistant.io/integrations/input_text/">input_text docs</a>)</li>
<li>Don’t allow partial update of timer settings (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78378">#78378</a>) (<a href="http://www.home-assistant.io/integrations/timer/">timer docs</a>)</li>
<li>Unregister EcoWitt webhook at unload (<a href="https://github.com/pvizeli">@pvizeli</a> - <a href="https://github.com/home-assistant/core/pull/78388">#78388</a>) (<a href="http://www.home-assistant.io/integrations/ecowitt/">ecowitt docs</a>)</li>
<li>Fix flapping system log test (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78391">#78391</a>) (<a href="http://www.home-assistant.io/integrations/system_log/">system_log docs</a>)</li>
<li>Fix CI workflow caching (<a href="https://github.com/cdce8p">@cdce8p</a> - <a href="https://github.com/home-assistant/core/pull/78398">#78398</a>)</li>
<li>Update frontend to 20220907.1 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/78404">#78404</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
<li>Bump govee-ble to 0.17.3 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78405">#78405</a>) (<a href="http://www.home-assistant.io/integrations/govee_ble/">govee_ble docs</a>)</li>
<li>Fix bug with RainMachine update entity (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/78411">#78411</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Retry on unavailable IPMA api (<a href="https://github.com/dgomes">@dgomes</a> - <a href="https://github.com/home-assistant/core/pull/78332">#78332</a>) (<a href="http://www.home-assistant.io/integrations/ipma/">ipma docs</a>)</li>
</ul>
<h2>Release 2022.9.4 - September 14</h2>
<ul>
<li>Update frontend to 20220907.2 (<a href="https://github.com/bramkragten">@bramkragten</a> - <a href="https://github.com/home-assistant/core/pull/78431">#78431</a>) (<a href="http://www.home-assistant.io/integrations/frontend/">frontend docs</a>)</li>
</ul>
<h2>Release 2022.9.5 - September 18</h2>
<ul>
<li>Fix fan speed regression for some xiaomi fans (<a href="https://github.com/peteh">@peteh</a> - <a href="https://github.com/home-assistant/core/pull/78406">#78406</a>) (<a href="http://www.home-assistant.io/integrations/xiaomi_miio/">xiaomi_miio docs</a>)</li>
<li>Only redact zwave_js values that are worth redacting (<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/78420">#78420</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Prevent deleting blueprints which are in use (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/78444">#78444</a>) (<a href="http://www.home-assistant.io/integrations/automation/">automation docs</a>) (<a href="http://www.home-assistant.io/integrations/script/">script docs</a>) (<a href="http://www.home-assistant.io/integrations/blueprint/">blueprint docs</a>)</li>
<li>Bump bleak-retry-connector to 0.17.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78474">#78474</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Bump python-songpal to 0.15.1 (<a href="https://github.com/rytilahti">@rytilahti</a> - <a href="https://github.com/home-assistant/core/pull/78481">#78481</a>) (<a href="http://www.home-assistant.io/integrations/songpal/">songpal docs</a>)</li>
<li>Bump PySwitchbot to 0.19.9 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78504">#78504</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump yalexs_ble to 1.9.2 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78508">#78508</a>) (<a href="http://www.home-assistant.io/integrations/yalexs_ble/">yalexs_ble docs</a>)</li>
<li>Bump led-ble to 0.10.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78511">#78511</a>) (<a href="http://www.home-assistant.io/integrations/led_ble/">led_ble docs</a>)</li>
<li>Bump aiohomekit to 1.5.8 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78515">#78515</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Fix zwave_js update entity startup state (<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/78563">#78563</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Bump pyrisco to v0.5.5 (<a href="https://github.com/OnFreund">@OnFreund</a> - <a href="https://github.com/home-assistant/core/pull/78566">#78566</a>) (<a href="http://www.home-assistant.io/integrations/risco/">risco docs</a>)</li>
<li>Fix WebSocket condition testing (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/78570">#78570</a>) (<a href="http://www.home-assistant.io/integrations/websocket_api/">websocket_api docs</a>)</li>
<li>Fix switchbot not accepting the first advertisement (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78610">#78610</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Fix reconnect race in HomeKit Controller (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78629">#78629</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Bump qingping-ble to 0.7.0 (<a href="https://github.com/skgsergio">@skgsergio</a> - <a href="https://github.com/home-assistant/core/pull/78630">#78630</a>) (<a href="http://www.home-assistant.io/integrations/qingping/">qingping docs</a>)</li>
<li>Add a helpful message to the config_entries.OperationNotAllowed exception (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78631">#78631</a>)</li>
<li>Update demetriek to 0.2.4 (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/78646">#78646</a>) (<a href="http://www.home-assistant.io/integrations/lametric/">lametric docs</a>)</li>
<li>Handle multiple files properly in zwave_js update entity (<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/78658">#78658</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js/">zwave_js docs</a>)</li>
<li>Remove mDNS iteration from Plugwise unique ID (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/78680">#78680</a>) (<a href="http://www.home-assistant.io/integrations/plugwise/">plugwise docs</a>)</li>
<li>Fix bluetooth callback matchers when only matching on connectable (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78687">#78687</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Bump thermobeacon-ble to 0.3.2 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78693">#78693</a>) (<a href="http://www.home-assistant.io/integrations/thermobeacon/">thermobeacon docs</a>)</li>
</ul>
<h2>Release 2022.9.6 - September 22</h2>
<ul>
<li>Handle Modalias missing from the bluetooth adapter details on older BlueZ (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78716">#78716</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Refactor MQTT tests to use modern platform schema part 1 (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/77387">#77387</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Refactor MQTT tests to use modern platform schema part 2 (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/77525">#77525</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Refactor common MQTT tests to use modern schema (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/77583">#77583</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Make hass.data[“mqtt”] an instance of a DataClass (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/77972">#77972</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Add status codes 23 and 26 to Xiaomi Miio vacuum (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/78289">#78289</a>) (<a href="http://www.home-assistant.io/integrations/xiaomi_miio/">xiaomi_miio docs</a>)</li>
<li>Link manually added MQTT entities the the MQTT config entry (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/78547">#78547</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Drop PARALLEL_UPDATES from switchbot (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78713">#78713</a>) (<a href="http://www.home-assistant.io/integrations/switchbot/">switchbot docs</a>)</li>
<li>Bump aioimaplib to 1.0.1 (<a href="https://github.com/N1c093">@N1c093</a> - <a href="https://github.com/home-assistant/core/pull/78738">#78738</a>) (<a href="http://www.home-assistant.io/integrations/imap/">imap docs</a>) (dependency)</li>
<li>Fix bug wherein RainMachine services use the wrong controller (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/78780">#78780</a>) (<a href="http://www.home-assistant.io/integrations/rainmachine/">rainmachine docs</a>)</li>
<li>Guard Guardian switches from redundant on/off calls (<a href="https://github.com/bachya">@bachya</a> - <a href="https://github.com/home-assistant/core/pull/78791">#78791</a>) (<a href="http://www.home-assistant.io/integrations/guardian/">guardian docs</a>)</li>
<li>Bump dbus-fast to 1.5.1 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78802">#78802</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>) (dependency)</li>
<li>If brightness is not available, don’t set a value (<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/78827">#78827</a>) (<a href="http://www.home-assistant.io/integrations/google_assistant/">google_assistant docs</a>)</li>
<li>Pin Python patch versions [ci] (<a href="https://github.com/cdce8p">@cdce8p</a> - <a href="https://github.com/home-assistant/core/pull/78830">#78830</a>)</li>
<li>Fix parsing Eve Energy characteristic data (<a href="https://github.com/jc2k">@Jc2k</a> - <a href="https://github.com/home-assistant/core/pull/78880">#78880</a>) (<a href="http://www.home-assistant.io/integrations/homekit_controller/">homekit_controller docs</a>)</li>
<li>Check Surveillance Station permissions during setup of Synology DSM integration (<a href="https://github.com/mib1185">@mib1185</a> - <a href="https://github.com/home-assistant/core/pull/78884">#78884</a>) (<a href="http://www.home-assistant.io/integrations/synology_dsm/">synology_dsm docs</a>)</li>
<li>Handle default RSSI values from bleak in bluetooth (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78908">#78908</a>) (<a href="http://www.home-assistant.io/integrations/bluetooth/">bluetooth docs</a>)</li>
<li>Disable force update Netatmo (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/78913">#78913</a>) (<a href="http://www.home-assistant.io/integrations/netatmo/">netatmo docs</a>)</li>
<li>Correct return typing for <code>catch_log_exception</code> (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/78399">#78399</a>)</li>
<li>Fix samsungtv to abort when ATTR_UPNP_MANUFACTURER is missing (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78895">#78895</a>) (<a href="http://www.home-assistant.io/integrations/samsungtv/">samsungtv docs</a>)</li>
<li>Handle timeout fetching bond token in config flow (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78896">#78896</a>) (<a href="http://www.home-assistant.io/integrations/bond/">bond docs</a>)</li>
<li>Bump bimmer_connected to 0.10.4 (<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/78910">#78910</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive/">bmw_connected_drive docs</a>) (dependency)</li>
</ul>
<h2>Release 2022.9.7 - September 26</h2>
<ul>
<li>Bump pyipma to 3.0.5 (<a href="https://github.com/dgomes">@dgomes</a> - <a href="https://github.com/home-assistant/core/pull/78936">#78936</a>) (<a href="http://www.home-assistant.io/integrations/ipma/">ipma docs</a>)</li>
<li>Bump motionblinds to 0.6.13 (<a href="https://github.com/starkillerOG">@starkillerOG</a> - <a href="https://github.com/home-assistant/core/pull/78946">#78946</a>) (<a href="http://www.home-assistant.io/integrations/motion_blinds/">motion_blinds docs</a>)</li>
<li>Set OWM default mode to hourly legacy API (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/78951">#78951</a>) (<a href="http://www.home-assistant.io/integrations/openweathermap/">openweathermap docs</a>)</li>
<li>Bump yalexs to 1.2.2 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/78978">#78978</a>) (<a href="http://www.home-assistant.io/integrations/august/">august docs</a>)</li>
<li>Fix velbus matching ignored entries in config flow (<a href="https://github.com/Cereal2nd">@Cereal2nd</a> - <a href="https://github.com/home-assistant/core/pull/78999">#78999</a>) (<a href="http://www.home-assistant.io/integrations/velbus/">velbus docs</a>)</li>
<li>Bumped boschshcpy 0.2.30 to 0.2.35 (<a href="https://github.com/tschamm">@tschamm</a> - <a href="https://github.com/home-assistant/core/pull/79017">#79017</a>) (<a href="http://www.home-assistant.io/integrations/bosch_shc/">bosch_shc docs</a>)</li>
<li>Fix failing LaMetric pairing message during config flow (<a href="https://github.com/frenck">@frenck</a> - <a href="https://github.com/home-assistant/core/pull/79031">#79031</a>) (<a href="http://www.home-assistant.io/integrations/lametric/">lametric docs</a>)</li>
<li>Fix MQTT device_tracker generating unique id-s - regression on #78547 (<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/79033">#79033</a>) (<a href="http://www.home-assistant.io/integrations/mqtt/">mqtt docs</a>)</li>
<li>Bump govee-ble to 0.19.0 (<a href="https://github.com/bdraco">@bdraco</a> - <a href="https://github.com/home-assistant/core/pull/79038">#79038</a>) (<a href="http://www.home-assistant.io/integrations/govee_ble/">govee_ble docs</a>)</li>
<li>Always install requirements of after_dependencies (<a href="https://github.com/emontnemery">@emontnemery</a> - <a href="https://github.com/home-assistant/core/pull/79094">#79094</a>)</li>
<li>Pin pyOpenSSL to 22.0.0 (<a href="https://github.com/balloob">@balloob</a> - <a href="https://github.com/home-assistant/core/pull/79066">#79066</a>)</li>
</ul>
<h2>Need help? Join the community</h2>
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
      BMW Connected Drive 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_0" hidden>
<p>Entity <code>sensor.&lt;your_vehicle&gt;_charging_time_label</code> (disabled by default) has
been removed as it is not provided by the upstream library/API anymore.</p>
<p>(<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/76616">#76616</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive">documentation</a>)</p>
<hr />
<p>The attribute <code>charging_status</code> of <code>binary_sensor.&lt;your_car&gt;_charging_status</code>
has been removed. Please use <code>sensor.charging_status</code> instead.</p>
<p>(<a href="https://github.com/rikroe">@rikroe</a> - <a href="https://github.com/home-assistant/core/pull/74921">#74921</a>) (<a href="http://www.home-assistant.io/integrations/bmw_connected_drive">documentation</a>)</p>
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
      HomeKit 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_1" hidden>
<p>The Homekit PM2.5 µg/m3 mappings in the HomeKit integration now use the values
based on the <a href="https://www.epa.gov/sites/default/files/2016-04/documents/2012_aqi_factsheet.pdf">US AQI set by the EPA</a>.</p>
<table>
<thead>
<tr>
<th>HomeKit</th>
<th>Previous PM2.5 µg/m3</th>
<th>New PM2.5 µg/m3</th>
</tr>
</thead>
<tbody>
<tr>
<td>Excellent</td>
<td>&lt;= 25</td>
<td>&lt;= 12</td>
</tr>
<tr>
<td>Good</td>
<td>&lt;= 50</td>
<td>&lt;= 35.4</td>
</tr>
<tr>
<td>Fair</td>
<td>&lt;= 100</td>
<td>&lt;= 55.4</td>
</tr>
<tr>
<td>Inferior</td>
<td>&lt;= 300</td>
<td>&lt;= 150.4</td>
</tr>
<tr>
<td>Poor</td>
<td>&gt; 300</td>
<td>&gt; 150.4</td>
</tr>
</tbody>
</table>
<p>(<a href="https://github.com/sarabveer">@sarabveer</a> - <a href="https://github.com/home-assistant/core/pull/76358">#76358</a>) (<a href="http://www.home-assistant.io/integrations/homekit">documentation</a>)</p>
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
      International Space Station (ISS) 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_2" hidden>
<p>It will no longer be possible to know if the international space station (ISS)
is above you nor the timestamp for the next rise of the station as these
features have been removed in the underlying API.</p>
<p>The binary sensor will be removed and all automations relying on this will no
longer work. Unfortunately there is no substitute for this. Instead we have
introduced a new sensor, that still tells you the location of the ISS,
while showing how many people are in space, as main state.</p>
<p>(<a href="https://github.com/DurgNomis-drol">@DurgNomis-drol</a> - <a href="https://github.com/home-assistant/core/pull/77218">#77218</a>) (<a href="http://www.home-assistant.io/integrations/iss">documentation</a>)</p>
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
      Litter-Robot 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_3" hidden>
<p>The previously deprecated <code>reset_waste_drawer</code> and <code>set_wait_time</code> services from
the litterrobot vacuum entity, have been removed.</p>
<p>(<a href="https://github.com/natekspencer">@natekspencer</a> - <a href="https://github.com/home-assistant/core/pull/77052">#77052</a>) (<a href="http://www.home-assistant.io/integrations/litterrobot">documentation</a>)</p>
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
      MQTT 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_4" hidden>
<p>Support for MQTT climate <code>hold</code> and <code>away</code> modes, which was deprecated in
Home Assistant Core 2022.3.0, has been removed. The <code>hold</code> and <code>away</code> modes
are replaced by <code>preset_mode</code>.</p>
<p>(<a href="https://github.com/jbouwh">@jbouwh</a> - <a href="https://github.com/home-assistant/core/pull/76299">#76299</a>) (<a href="http://www.home-assistant.io/integrations/mqtt">documentation</a>)</p>
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
      Open Exchange Rates 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_5" hidden>
<p>The sensor now has a unit of measurement according to the exchange rate quote.</p>
<p>(<a href="https://github.com/MartinHjelmare">@MartinHjelmare</a> - <a href="https://github.com/home-assistant/core/pull/76017">#76017</a>) (<a href="http://www.home-assistant.io/integrations/openexchangerates">documentation</a>)</p>
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
      Roku 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_6" hidden>
<p>Roku media player will indicate <code>IDLE</code> instead of <code>HOME</code> when at home screen.
You can still detect home screen by looking at <code>app_id</code> attribute.</p>
<p>(<a href="https://github.com/elupus">@elupus</a> - <a href="https://github.com/home-assistant/core/pull/77385">#77385</a>) (<a href="http://www.home-assistant.io/integrations/roku">documentation</a>)</p>
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
      SMS notifications via GSM-modem 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_7" hidden>
<p>Setting up the notify platform of the SMS integration by a platform section in
YAML configuration is no longer supported. The <code>sms</code> platform section
under <code>notify:</code> can be removed from your YAML configuration files.</p>
<p>A recipient can be specified by using the <code>target</code> parameter in the notify
service call instead.</p>
<p>(<a href="https://github.com/ocalvo">@ocalvo</a> - <a href="https://github.com/home-assistant/core/pull/76733">#76733</a>) (<a href="http://www.home-assistant.io/integrations/sms">documentation</a>)</p>
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
      Utility Meter 
      <div class='details-block-arrow'>
      <svg id="down" style="display: block;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <svg id="up" style="display: none;" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
      </div>
    </button>
    <div class='details-block-content' id="content_8" hidden>
<p>The previously deprecated <code>utility_meter</code> entities, used to change tariffs,
have been removed. Please use the provided <code>select</code> entity instead.</p>
<p>(<a href="https://github.com/dgomes">@dgomes</a> - <a href="https://github.com/home-assistant/core/pull/76480">#76480</a>) (<a href="http://www.home-assistant.io/integrations/utility_meter">documentation</a>)</p>
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
<p>You must use zwave-js-server 1.22.1 or greater (schema 22).</p>
<p>With this release, you will need to update your zwave-js-server instance.</p>
<ul>
<li>If you use the zwave_js addon, you need to have at least version <code>0.1.66</code>.</li>
<li>If you use the zwavejs2mqtt addon, you need to have at least version <code>0.46.0</code>.</li>
<li>If you use the zwavejs2mqtt Docker container, you need to have at least version <code>7.0.0</code>.</li>
<li>If you run your own Docker container, or some other installation method, you will need to update your zwave-js-server instance to at least <code>1.22.1</code>.</li>
</ul>
<p>(<a href="https://github.com/raman325">@raman325</a> - <a href="https://github.com/home-assistant/core/pull/75795">#75795</a> <a href="https://github.com/home-assistant/core/pull/76903">#76903</a>) (<a href="http://www.home-assistant.io/integrations/zwave_js">documentation</a>)</p>
</div>
  </div>
</div>
<p>If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
<a href="https://developers.home-assistant.io/blog/">developer blog</a>. The following are the most notable for this release:</p>
<ul>
<li><a href="https://developers.home-assistant.io/blog/2022/08/15/automation-action-type-deprecation">AutomationActionType deprecation for 2022.9</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/08/08/bluetooth-api-changes">Bluetooth passive sensor API changes for 2022.9</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/07/29/device-tracker_source-type-deprecation/">Device tracker deprecations for 2022.9</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/08/24/globally_accessible_hass">Globally available HomeAssistant object (hass)</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/08/18/light_white_value_removed">LightEntity no longer supports white_value</a></li>
<li><a href="https://developers.home-assistant.io/blog/2022/08/25/issue_registry_moved_to_helpers">The issue registry has been moved to homeassistant.helpers</a></li>
</ul>
<h2>All changes</h2>
<p>Of course, there is a lot more in this release. You can find a list of
all changes made here: <a href="http://www.home-assistant.io/changelogs/core-2022.9">Full changelog for Home Assistant Core 2022.9</a></p>
"
link: "https://www.home-assistant.io/blog/2022/09/07/release-20229/"
category:
---
