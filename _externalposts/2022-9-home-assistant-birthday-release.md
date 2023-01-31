---
title: "2022.9 - Home Assistant Birthday Release!"
date: 2022-09-07 02:00:00 +0000
dateadded: 2023-01-31 09:17:01 +0100
description: "  
 Home Assistant Core 2022.9! ���� 
 If you don���t know yet, this month is Home Assistant���s birthday! �������� On September 17th, 2013 Paulus Schoutsen made the first commit for Home Assistant that started a snowball of Home Automation enthusiasts willing to contribute to the open-source project. 9 Years later, Home Assistant is actively used by more than 500,000 people and growing every day. Nabu Casa also turns 4 this month. Turning 4 years old and gaining a new full-time employee ����. This month it seems everyone was in the birthday spirit as we have a jam-packed release! 
 The automation engine is a big reason why Home Assistant has so many users. So in the spirit of Streamlining Experiences, we thought a revamp was due. You will notice some huge improvements to the look and feel of the Automation Editor that we think will greatly improve its usability. I know I for sure see a huge difference! 
 Now I know that everyone usually expects @frenck to be writing these release notes, but he took a well deserved vacation! And now you are stuck with me. Zack ����. I hope you enjoy the release and everything that was packed into it! 
 ��� Zack 

 
 Paul Bottein joins Nabu Casa 
 Streamlining automations 
 New helper: Weekly schedule 
 Bluetooth everywhere 
 Z-Wave Firmware updates now live 
 Zigbee backup and restore + migration 
 Processor and memory usage 
 Other noteworthy changes 
 New Integrations 
 Integrations now available to set up from the UI 
 Release 2022.9.1 - September 8 
 Release 2022.9.2 - September 11 
 Release 2022.9.3 - September 13 
 Release 2022.9.4 - September 14 
 Release 2022.9.5 - September 18 
 Release 2022.9.6 - September 22 
 Release 2022.9.7 - September 26 
 Need help? Join the community 
 Breaking Changes 
 All changes 
 
 Don���t forget to join our release party live stream on YouTube today at 12:00 PDT / 21:00 CET! 
  
 Paul Bottein joins Nabu Casa 
 We are excited to announce the newest member of the Nabu Casa team, Paul Bottein. 
 Paul is most known for his Mushroom cards and a few additions to Home Assistant frontend like the Icon Picker. Paul is an incredible developer and his expertise in dashboard design will bring a lot to the Home Assistant frontend. 
 Welcome aboard and excited to see what Paul will bring to Home Assistant! 
 Streamlining automations 
 We felt that there were quite a few improvements we could do in order to better streamline automation creation. That���s why this release, we really
took a long look at some of the main user experience issues. The new automation editor improvements focus on readability and ease of use. This
will also make editing automations on your phone much easier! 
 First, you will notice the biggest change, collapsible cards for triggers, conditions, and actions. This change allows you to really focus on what you
are currently working on instead of having everything open all at once. When you first open your automation in the editor, you will see all cards collapsed with
an auto-generated explanation of what that section is doing. This allows you to easily choose which section you want to edit and focus in on it. 
   
 Next, there were a few items and options moved. You can see most of these in the top right overflow menu. For example, if you want to rename or update the description
of your automation you can do that via the overflow menu &gt; Rename. Moving these items to the overflow ensures that the main editor page is used for the main functions of
your automation. 
   
 Last, but definitely not least, Frenck added some long requested features to the automation forms. State and Attribute value auto-completion! Now if you are adding a
state trigger, you can choose from a list of known states for that device type. These are also all translated into your language. Now there is no need to remember or find
the states possible or format the state that needs to be entered. Just choose a state from the dropdown and let your worries wisp away! 
   
 New helper: Weekly schedule 
 Have you ever wanted to run a schedule-based automation for the same time each week or day? Well, you are now in luck! With the addition of the Schedule helper, you are now able
to easily create these schedules to build more consistent automations and timings. 
   
  
 Bluetooth everywhere 
 Last release we introduced the Bluetooth integration. This release, it���s on fire ���� Not only do we now support multiple Bluetooth adapters, we also support ESPHome devices acting as Bluetooth proxies for your home. Wait what?! 
 Yes ����. You can now greatly expand the Bluetooth reach of Home Assistant using ordinary ESP32 devices. No extra hardware needed. 
   
 To get a proxy up and running, head over to the Bluetooth proxy installer website and install one straight from your browser. 
 Bluetooth proxies are currently limited to forwarding passive data. Active connections are coming in a future release. Bluetooth integrations in Home Assistant will transparently use Bluetooth proxies without any extra coding! 
 Most integrations now support using the adapter with the best signal to connect devices that need an active connection. Extension cables, USB-Ethernet extenders, or USB-IP coupled with an additional Bluetooth adapter can significantly extend your active connection range. 
 There is more! Besides 9 new supported brands, there is also support for a new open standard: BTHome by @Ernst79. It is automatically discovered by Home Assistant, devices can run over a year on a single battery and it supports data encryption. 
 Finally, suppose you are using the Home Assistant Operating System. In that case, we recommend upgrading to version 9 or later when it is released, as it comes with a faster D-Bus broker and newer Bluetooth firmware which can significantly enhance Bluetooth performance. 
 Thanks to @bdraco, @Ernst79, @JesseRockz, @jc2k for all the hard, amazing and epic work ����. 
 Z-Wave Firmware updates now live 
   
 In 2022.7, we added support for updating Z-Wave device firmware, but the catch was that you needed the firmware files from the manufacturer in order to complete the update. @AlCalzone wasn���t satisfied with this approach and began working on a better solution. That better solution is here with the introduction of the Z-Wave JS Firmware Update Service! For supported manufacturers, Z-Wave JS can now automatically detect, download, and install a firmware update if it is available for your device. This will be done the same way you are currently updating Home Assistant. You will see a notification in your settings menu and you can update right from there. Thanks @raman325 
 For now, only Jasco products are supported. Nabu Casa has been talking to other manufacturers to get more devices supported. To ensure our users can take advantage of this feature, we added update entities for your devices that will check once a day for new firmware updates. Nifty! 
 Zigbee backup and restore + migration 
 The Zigbee Home Automation (ZHA) integration now supports network backups and migrating between Zigbee coordinators. Backups are taken automatically but can also be manually created from the configuration page. After restoring a Home Assistant backup, you can re-configure ZHA and migrate to a new Zigbee coordinator without any loss of your settings or devices that were connected. This is helpful if your current radio fails or a new radio comes out that you may want to migrate to. 
   
 Processor and memory usage 
 The Hardware page just got a lot more interesting. You can go check out live statistics on your Memory and Processor usage when you load the Hardware page in your system menu. These statistics will represent your entire Home Assistant instance, giving you insight in how your hardware is handling your day to day tasks. This will not show any history but will display 5 minutes of live data once you load the page. 
   
 Other noteworthy changes 
 There is much more juice in this release; here are some of the other
noteworthy changes this release: 
 
 Entity more info dialog merged with entity settings. Thanks @balloob 
 You can now enable local control of your Awair Element device. Thanks @zachberger 
 MiFlora now supports polling of the Battery sensor. Thanks @bdraco 
 August locks are now supported under the Yale Access Bluetooth integration. Thanks @bdraco 
 Many more Bluetooth adapters are now supported for the Bluetooth integration. Thanks @bdraco 
 The SwitchBot integration now supports the Color Bulb and Light strips. Thanks @bdraco 
 Automations, Scripts and Scenes tables received a new overflow menu that will allow for more actions directly from the picker. Thanks @bramkragten and @piitaya 
 You can now reorder automation elements using drag and drop. Thanks @piitaya 
 Icons have been added to more menus throughout the UI. Thanks @frenck 
 Automation triggers can now be aliased. Thanks @frenck 
 
 New Integrations 
 We welcome the following new integrations in this release: 
 
 BlueMaestro, added by @bdraco 
 BThome, added by @Ernst79 
 Ecowitt, added by @pvizeli 
 Escea, added by @lazdavila 
 File Upload, added by @balloob 
 Fully Kiosk Browser, added by @cgarwood 
 JustNimbus, added by @kvanzuijlen 
 LaCrosse View, added by @IceBotYT 
 Landis+Gyr Heat Meter, added by @vpathuis 
 LED BLE, added by  @bdraco 
 Melnor Bluetooth, added by @vanstinator 
 PrusaLink, added by @balloob 
 Qingping, added by @bdraco 
 Schedule, added by @frenck 
 SensorPro, added by @bdraco 
 ThermoBeacon, added by @bdraco 
 ThermoPro, added by @bdraco 
 Yale Access Bluetooth, added by @bdraco 
 
 Integrations now available to set up from the UI 
 The following integrations are now available via the Home Assistant UI: 
 
 Android IP Webcam, done by @engrbm87 
 LaMetric, done by @frenck 
 Open Exchange Rates, done by @MartinHjelmare 
 Pushover, done by @engrbm87 
 Volvo On Call, done by @y34hbuddy 
 
 Release 2022.9.1 - September 8 
 
 Show progress for zwave_js.update entity (@raman325 - #77905) (zwave_js docs) 
 Fix len method typo for Osram light (@Vaskivskyi - #78008) (osramlightify docs) 
 Add value ID to zwave_js device diagnostics (@raman325 - #78015) (zwave_js docs) 
 Fix zwave_js default emulate hardware in options flow (@MartinHjelmare - #78024) (zwave_js docs) 
 Extract lametric device from coordinator in notify (@ludeeus - #78027) (lametric docs) 
 Bump velbus-aio to 2022.9.1 (@Cereal2nd - #78039) (velbus docs) 
 Fix zwave_js device re-interview (@MartinHjelmare - #78046) (zwave_js docs) 
 Bump bluetooth-adapters to 0.3.5 (@bdraco - #78052) (bluetooth docs) 
 Bump bluetooth-auto-recovery to 0.3.2 (@bdraco - #78063) (bluetooth docs) 
 Fix bug with 1st gen RainMachine controllers and unknown API calls (@bachya - #78070) (rainmachine docs) 
 Bump pylitterbot to 2022.9.1 (@natekspencer - #78071) (litterrobot docs) 
 Allow OpenWeatherMap config flow to test using old API to pass (@jbouwh - #78074) (openweathermap docs) 
 Fix Ecobee remote sensors not updating (@rlippmann - #78035) (ecobee docs) 
 
 Release 2022.9.2 - September 11 
 
 Fix reload of MQTT config entries (@jbouwh - #76089) (mqtt docs) 
 Clear MQTT discovery topic when a disabled entity is removed (@jbouwh - #77757) (mqtt docs) 
 Improve warning messages on invalid received modes (@jbouwh - #77909) (mqtt docs) 
 Handle missing supported brands (@balloob - #78090) (websocket_api docs) 
 Fix switchbot writing state too frequently (@bdraco - #78094) (switchbot docs) 
 Fix LIFX light turning on while fading off (@amelchio - #78095) (lifx docs) 
 Fix zwave_js update entity (@raman325 - #78116) (zwave_js docs) 
 Improve unique_id collision checks in entity_platform (@emontnemery - #78132) 
 Allow non-integers in threshold sensor config flow (@emontnemery - #78137) (threshold docs) 
 Bump bluetooth-adapters to 0.3.6 (@bdraco - #78138) (bluetooth docs) 
 Add missing strings for errors in amberelectric config flow (@Vaskivskyi - #78140) (amberelectric docs) 
 Bump aioecowitt to 2022.09.1 (@pvizeli - #78142) (ecowitt docs) 
 Add missing moisture sensor to xiaomi_ble (@Jc2k - #78160) (xiaomi_ble docs) 
 Bump pySwitchbot to 0.19.1 (@bdraco - #78168) (switchbot docs) 
 Bump aiohomekit to 1.5.3 (@bdraco - #78170) (homekit_controller docs) 
 Fix ecowitt typing (@balloob - #78171) (ecowitt docs) 
 Fix sending notification to multiple targets in Pushover (@engrbm87 - #78111) (pushover docs) 
 Add dependencies to ecowitt (@pvizeli - #78187) (ecowitt docs) 
 Bump led-ble to 0.8.3 (@bdraco - #78188) (led_ble docs) 
 Fix switchbot not setting up when already connected at startup (@bdraco - #78198) (switchbot docs) 
 Fix Yale Access Bluetooth not setting up when already connected at startup (@bdraco - #78199) (yalexs_ble docs) 
 Bump ZHA dependencies (@puddly - #78201) (zha docs) 
 Close stale switchbot connections at setup time (@bdraco - #78202) (switchbot docs) 
 Bump aiohomekit to 1.5.4 to handle stale ble connections at startup (@bdraco - #78203) (homekit_controller docs) 
 Landis+Gyr integration: increase timeout and add debug logging (@vpathuis - #78025) (landisgyr_heat_meter docs) 
 Bump bluetooth-adapters to 0.4.1 (@bdraco - #78205) (bluetooth docs) 
 Bump regenmaschine to 2022.09.1 (@bachya - #78210) (rainmachine docs) 
 Bump led_ble to 0.8.5 (@bdraco - #78215) (led_ble docs) 
 Bump pysensibo to 1.0.20 (@gjohansson-ST - #78222) (sensibo docs) 
 Bump PySwitchbot to 0.19.5 (@bdraco - #78224) (switchbot docs) 
 Bump yalexs-ble to 1.8.1 (@bdraco - #78225) (yalexs_ble docs) 
 Bump led-ble to 0.9.1 (@bdraco - #78226) (led_ble docs) 
 Bump aiohomekit to 1.5.6 (@bdraco - #78228) (homekit_controller docs) 
 
 Release 2022.9.3 - September 13 
 
 Move up setup of service to make it more robust when running multiple instances of deCONZ (@Kane610 - #77621) (deconz docs) 
 Bump blinkpy to 0.19.2 (@Vaskivskyi - #78097) (blink docs) 
 Bump PyViCare==2.17.0 (@TheJulianJES - #78232) (vicare docs) 
 Fix missing dependency for dbus_next (@d-walsh - #78235) (bluetooth docs) 
 Bump bluetooth-auto-recovery to 0.3.3 (@bdraco - #78245) (bluetooth docs) 
 Bump aiodiscover to 1.4.13 (@bdraco - #78253) (dhcp docs) 
 Bump pySwitchbot to 0.19.6 (@bdraco - #78304) (switchbot docs) 
 Make yalexs_ble matcher more specific (@bdraco - #78307) (yalexs_ble docs) 
 Fix sengled bulbs in ZHA (@dmulcahey - #78315) (zha docs) 
 Fix calculating gas cost for gas measured in ft3 (@emontnemery - #78327) (energy docs) 
 Bump bleak to 0.17.0 (@bdraco - #78333) (bluetooth docs) 
 Drop initial when loading input_number from storage (@emontnemery - #78354) (input_number docs) 
 Don���t allow partial update of input_number settings (@emontnemery - #78356) (input_number docs) 
 Bump PySwitchbot to 0.19.8 (@bdraco - #78361) (switchbot docs) 
 Bump yalexs-ble to 1.9.0 (@bdraco - #78362) (yalexs_ble docs) 
 Bump xiaomi-ble to 0.9.3 (@bdraco - #78301) (xiaomi_ble docs) 
 Bump xiaomi-ble to 0.10.0 (@bdraco - #78365) (xiaomi_ble docs) 
 Bump led-ble to 0.10.0 (@bdraco - #78367) (led_ble docs) 
 Bump aiohomekit to 1.5.7 (@bdraco - #78369) (homekit_controller docs) 
 Don���t allow partial update of counter settings (@emontnemery - #78371) (counter docs) 
 Don���t allow partial update of input_boolean settings (@emontnemery - #78372) (input_boolean docs) 
 Don���t allow partial update of input_datetime settings (@emontnemery - #78373) (input_datetime docs) 
 Don���t allow partial update of input_button settings (@emontnemery - #78374) (input_button docs) 
 Don���t allow partial update of input_select settings (@emontnemery - #78376) (input_select docs) 
 Don���t allow partial update of input_text settings (@emontnemery - #78377) (input_text docs) 
 Don���t allow partial update of timer settings (@emontnemery - #78378) (timer docs) 
 Unregister EcoWitt webhook at unload (@pvizeli - #78388) (ecowitt docs) 
 Fix flapping system log test (@bdraco - #78391) (system_log docs) 
 Fix CI workflow caching (@cdce8p - #78398) 
 Update frontend to 20220907.1 (@bramkragten - #78404) (frontend docs) 
 Bump govee-ble to 0.17.3 (@bdraco - #78405) (govee_ble docs) 
 Fix bug with RainMachine update entity (@bachya - #78411) (rainmachine docs) 
 Retry on unavailable IPMA api (@dgomes - #78332) (ipma docs) 
 
 Release 2022.9.4 - September 14 
 
 Update frontend to 20220907.2 (@bramkragten - #78431) (frontend docs) 
 
 Release 2022.9.5 - September 18 
 
 Fix fan speed regression for some xiaomi fans (@peteh - #78406) (xiaomi_miio docs) 
 Only redact zwave_js values that are worth redacting (@raman325 - #78420) (zwave_js docs) 
 Prevent deleting blueprints which are in use (@emontnemery - #78444) (automation docs) (script docs) (blueprint docs) 
 Bump bleak-retry-connector to 0.17.1 (@bdraco - #78474) (bluetooth docs) 
 Bump python-songpal to 0.15.1 (@rytilahti - #78481) (songpal docs) 
 Bump PySwitchbot to 0.19.9 (@bdraco - #78504) (switchbot docs) 
 Bump yalexs_ble to 1.9.2 (@bdraco - #78508) (yalexs_ble docs) 
 Bump led-ble to 0.10.1 (@bdraco - #78511) (led_ble docs) 
 Bump aiohomekit to 1.5.8 (@bdraco - #78515) (homekit_controller docs) 
 Fix zwave_js update entity startup state (@raman325 - #78563) (zwave_js docs) 
 Bump pyrisco to v0.5.5 (@OnFreund - #78566) (risco docs) 
 Fix WebSocket condition testing (@frenck - #78570) (websocket_api docs) 
 Fix switchbot not accepting the first advertisement (@bdraco - #78610) (switchbot docs) 
 Fix reconnect race in HomeKit Controller (@bdraco - #78629) (homekit_controller docs) 
 Bump qingping-ble to 0.7.0 (@skgsergio - #78630) (qingping docs) 
 Add a helpful message to the config_entries.OperationNotAllowed exception (@bdraco - #78631) 
 Update demetriek to 0.2.4 (@frenck - #78646) (lametric docs) 
 Handle multiple files properly in zwave_js update entity (@raman325 - #78658) (zwave_js docs) 
 Remove mDNS iteration from Plugwise unique ID (@frenck - #78680) (plugwise docs) 
 Fix bluetooth callback matchers when only matching on connectable (@bdraco - #78687) (bluetooth docs) 
 Bump thermobeacon-ble to 0.3.2 (@bdraco - #78693) (thermobeacon docs) 
 
 Release 2022.9.6 - September 22 
 
 Handle Modalias missing from the bluetooth adapter details on older BlueZ (@bdraco - #78716) (bluetooth docs) 
 Refactor MQTT tests to use modern platform schema part 1 (@jbouwh - #77387) (mqtt docs) 
 Refactor MQTT tests to use modern platform schema part 2 (@jbouwh - #77525) (mqtt docs) 
 Refactor common MQTT tests to use modern schema (@jbouwh - #77583) (mqtt docs) 
 Make hass.data[���mqtt���] an instance of a DataClass (@jbouwh - #77972) (mqtt docs) 
 Add status codes 23 and 26 to Xiaomi Miio vacuum (@starkillerOG - #78289) (xiaomi_miio docs) 
 Link manually added MQTT entities the the MQTT config entry (@jbouwh - #78547) (mqtt docs) 
 Drop PARALLEL_UPDATES from switchbot (@bdraco - #78713) (switchbot docs) 
 Bump aioimaplib to 1.0.1 (@N1c093 - #78738) (imap docs) (dependency) 
 Fix bug wherein RainMachine services use the wrong controller (@bachya - #78780) (rainmachine docs) 
 Guard Guardian switches from redundant on/off calls (@bachya - #78791) (guardian docs) 
 Bump dbus-fast to 1.5.1 (@bdraco - #78802) (bluetooth docs) (dependency) 
 If brightness is not available, don���t set a value (@elupus - #78827) (google_assistant docs) 
 Pin Python patch versions [ci] (@cdce8p - #78830) 
 Fix parsing Eve Energy characteristic data (@Jc2k - #78880) (homekit_controller docs) 
 Check Surveillance Station permissions during setup of Synology DSM integration (@mib1185 - #78884) (synology_dsm docs) 
 Handle default RSSI values from bleak in bluetooth (@bdraco - #78908) (bluetooth docs) 
 Disable force update Netatmo (@balloob - #78913) (netatmo docs) 
 Correct return typing for catch_log_exception (@jbouwh - #78399) 
 Fix samsungtv to abort when ATTR_UPNP_MANUFACTURER is missing (@bdraco - #78895) (samsungtv docs) 
 Handle timeout fetching bond token in config flow (@bdraco - #78896) (bond docs) 
 Bump bimmer_connected to 0.10.4 (@rikroe - #78910) (bmw_connected_drive docs) (dependency) 
 
 Release 2022.9.7 - September 26 
 
 Bump pyipma to 3.0.5 (@dgomes - #78936) (ipma docs) 
 Bump motionblinds to 0.6.13 (@starkillerOG - #78946) (motion_blinds docs) 
 Set OWM default mode to hourly legacy API (@jbouwh - #78951) (openweathermap docs) 
 Bump yalexs to 1.2.2 (@bdraco - #78978) (august docs) 
 Fix velbus matching ignored entries in config flow (@Cereal2nd - #78999) (velbus docs) 
 Bumped boschshcpy 0.2.30 to 0.2.35 (@tschamm - #79017) (bosch_shc docs) 
 Fix failing LaMetric pairing message during config flow (@frenck - #79031) (lametric docs) 
 Fix MQTT device_tracker generating unique id-s - regression on #78547 (@jbouwh - #79033) (mqtt docs) 
 Bump govee-ble to 0.19.0 (@bdraco - #79038) (govee_ble docs) 
 Always install requirements of after_dependencies (@emontnemery - #79094) 
 Pin pyOpenSSL to 22.0.0 (@balloob - #79066) 
 
 Need help? Join the community 
 Home Assistant has a great community of users who are all more than willing
to help each other out. So, join us! 
 Our very active Discord chat server is an excellent place to be
at, and don���t forget to join our amazing forums. 
 Found a bug or issue? Please report it in our issue tracker,
to get it fixed! Or, check our help page for guidance for more
places you can go. 
 Are you more into email? Sign-up for our Building the Open Home Newsletter
to get the latest news about features, things happening in our community and
other news about building an Open Home; straight into your inbox. 
 Breaking Changes 
 Below is a listing of the breaking change for this release, per subject or
integration. Click on one of those to read more about the breaking change
for that specific item. 

 
   
    
      BMW Connected Drive 
       
      
      
       
    
     
 Entity sensor.&lt;your_vehicle&gt;_charging_time_label (disabled by default) has
been removed as it is not provided by the upstream library/API anymore. 
 (@rikroe - #76616) (documentation) 
 
 The attribute charging_status of binary_sensor.&lt;your_car&gt;_charging_status
has been removed. Please use sensor.charging_status instead. 
 (@rikroe - #74921) (documentation) 
 
   
 

 
   
    
      HomeKit 
       
      
      
       
    
     
 The Homekit PM2.5 ��g/m3 mappings in the HomeKit integration now use the values
based on the US AQI set by the EPA. 



HomeKit
Previous PM2.5 ��g/m3
New PM2.5 ��g/m3




Excellent
&lt;= 25
&lt;= 12


Good
&lt;= 50
&lt;= 35.4


Fair
&lt;= 100
&lt;= 55.4


Inferior
&lt;= 300
&lt;= 150.4


Poor
&gt; 300
&gt; 150.4



 (@sarabveer - #76358) (documentation) 
 
   
 

 
   
    
      International Space Station (ISS) 
       
      
      
       
    
     
 It will no longer be possible to know if the international space station (ISS)
is above you nor the timestamp for the next rise of the station as these
features have been removed in the underlying API. 
 The binary sensor will be removed and all automations relying on this will no
longer work. Unfortunately there is no substitute for this. Instead we have
introduced a new sensor, that still tells you the location of the ISS,
while showing how many people are in space, as main state. 
 (@DurgNomis-drol - #77218) (documentation) 
 
   
 

 
   
    
      Litter-Robot 
       
      
      
       
    
     
 The previously deprecated reset_waste_drawer and set_wait_time services from
the litterrobot vacuum entity, have been removed. 
 (@natekspencer - #77052) (documentation) 
 
   
 

 
   
    
      MQTT 
       
      
      
       
    
     
 Support for MQTT climate hold and away modes, which was deprecated in
Home Assistant Core 2022.3.0, has been removed. The hold and away modes
are replaced by preset_mode. 
 (@jbouwh - #76299) (documentation) 
 
   
 

 
   
    
      Open Exchange Rates 
       
      
      
       
    
     
 The sensor now has a unit of measurement according to the exchange rate quote. 
 (@MartinHjelmare - #76017) (documentation) 
 
   
 

 
   
    
      Roku 
       
      
      
       
    
     
 Roku media player will indicate IDLE instead of HOME when at home screen.
You can still detect home screen by looking at app_id attribute. 
 (@elupus - #77385) (documentation) 
 
   
 

 
   
    
      SMS notifications via GSM-modem 
       
      
      
       
    
     
 Setting up the notify platform of the SMS integration by a platform section in
YAML configuration is no longer supported. The sms platform section
under notify: can be removed from your YAML configuration files. 
 A recipient can be specified by using the target parameter in the notify
service call instead. 
 (@ocalvo - #76733) (documentation) 
 
   
 

 
   
    
      Utility Meter 
       
      
      
       
    
     
 The previously deprecated utility_meter entities, used to change tariffs,
have been removed. Please use the provided select entity instead. 
 (@dgomes - #76480) (documentation) 
 
   
 

 
   
    
      Z-Wave 
       
      
      
       
    
     
 You must use zwave-js-server 1.22.1 or greater (schema 22). 
 With this release, you will need to update your zwave-js-server instance. 
 
 If you use the zwave_js addon, you need to have at least version 0.1.66. 
 If you use the zwavejs2mqtt addon, you need to have at least version 0.46.0. 
 If you use the zwavejs2mqtt Docker container, you need to have at least version 7.0.0. 
 If you run your own Docker container, or some other installation method, you will need to update your zwave-js-server instance to at least 1.22.1. 
 
 (@raman325 - #75795 #76903) (documentation) 
 
   
 
 If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
developer blog. The following are the most notable for this release: 
 
 AutomationActionType deprecation for 2022.9 
 Bluetooth passive sensor API changes for 2022.9 
 Device tracker deprecations for 2022.9 
 Globally available HomeAssistant object (hass) 
 LightEntity no longer supports white_value 
 The issue registry has been moved to homeassistant.helpers 
 
 All changes 
 Of course, there is a lot more in this release. You can find a list of
all changes made here: Full changelog for Home Assistant Core 2022.9 
"
link: "https://www.home-assistant.io/blog/2022/09/07/release-20229/"
category:
---
