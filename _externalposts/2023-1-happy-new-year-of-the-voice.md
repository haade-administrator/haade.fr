---
title: "2023.1 - Happy New Year of the voice!"
date: 2023-01-04 00:00:00 +0000
dateadded: 2023-01-31 09:17:01 +0100
description: "  
 Happy New Year! ���� 
 We wish you, and all the loved ones around you, all the best for 2023! ���� 
 2023: What an exciting year this will be; The year of the voice!
And not just that, many exciting things are expected this year. More spoilers
can be found in the State of the Open Home 2022
recording on YouTube. 
 Starting this amazing year with: Home Assistant Core 2023.1! ���� 
 A fairly small release, as we all enjoyed our Holidays. Yet, the first traces
of the voice project are already visible: support for entity aliases! 
 Still, this release contains over 800 changes, most of which are
quality improvements, bug and stability fixes, and other minor improvements.
The perfect release to start the year with, an easy upgrade worth doing. 
 Enjoy the release! 
 ../Frenck 
 PS: Did you know Home Assistant is now on Mastodon too? 

 
 The year of the voice! 
 Entity aliases for voice assistants 
 Progress on Matter 
 Extending calendar support 
 Translation improvements for entities 
 Other noteworthy changes 
 New Integrations 
 Release 2023.1.1 - January 5 
 Release 2023.1.2 - January 8 
 Release 2023.1.3 - January 10 
 Release 2023.1.4 - January 12 
 Release 2023.1.5 - January 17 
 Release 2023.1.6 - January 19 
 Release 2023.1.7 - January 22 
 Need help? Join the community! 
 Breaking Changes 
 Farewell to the following 
 All changes 
 
 Don���t forget to join our release party live stream on YouTube 4 January 2023, at 12:00 PST / 21:00 CET! 
  
 The year of the voice! 
 You should have heard about it by now; 2023 is Home Assistant���s year of Voice!
It is our goal for 2023 to let users control Home Assistant in their own
language. As covered by The Verge,
ArsTechnica,
and many others. 
 The work on voice has already started by collecting intents in all the different
languages we want to support. Intents describe the user���s intention with what
they���ve said (or written), so Home Assistant can understand what to do,
like the action to take and which devices are involved. 
 All the different possible intent sentences are now being collected in the
Intents for Home Assistant GitHub
repository, and we are looking for contributions!
So, feel free to jump in and help out! 
 An overview of the current status of all intents and languages can be found on
this page. The page gives insight
into the parts we need help with. 
 Lastly, we are also looking for language leaders! Each language is maintained
by one or more language leaders. Language leaders are responsible for reviewing
their language���s contributions and making sure they are grammatically correct. 
 Anyone can apply to become one. If you want to apply to be a language leader,
join us in #devs_voice on Discord or open a discussion topic. 
 Entity aliases for voice assistants 
 The first little thing related to the voice project found in Home Assistant:
Aliases for entity names are now configurable via the UI. 
 Currently, configured aliases are used by Google Assistant and, of course, can
later be used by our own voice assistant. 
 These aliases are helpful in case you call the same device by multiple names
or when using a voice assistant in multiple languages at the same time. 

 The new aliases feature can be found on each entity���s more information dialog
in the settings tab in the advanced section. If you use
Home Assistant Cloud, you can also manage your
entity aliases (and the devices to expose to Google Assistant) in your
Home Assistant Cloud settings. 
 Multi-language can be an important factor when using Google Assistant, as those
can be configured to support two languages at the same time. For example,
English and Dutch simultaneously. Aliases allow you to provide names
for translations as an alias. For instance, I have added
���Woonkamer stofzuiger��� (Dutch) as an alias to my living room vacuum. 

 It was previously possible to configure Google Assistant-specific aliases via
YAML as well, and this remains working. You can use either YAML or easily manage
them via the UI. 
 Progress on Matter 
 Last December release, we introduced Matter support,
and progress has been made since then. The code base has seen many fixes and
improvements, and much effort has been put into adding more automated
tests and quality assurance. 
 There are also notable improvements; commissioning Matter devices have been
improved (and fixed). So, adding your first Matter device
to Home Assistant should be a much better experience now. 
 Lastly, the Home Assistant Companion app for Android
with support for pairing Matter devices has been released! Thanks to the fantastic
work by @jpelgrom on the Android app, the
commissioning experience is now even better! Here is a quick video showing
how that works: 
  
 This does require your Android device to be updated with Matter support which
Google is rolling out within the Google Home app in recent Android versions. 
 Support for pairing Matter devices using our iOS Companion app is being worked
on. 
 Extending calendar support 
 The last release introduced the local calendar,
which included the capability to manage calendar events from Home Assistant.
These features have now been added to the Google Calendar
integration as well! 
 Meaning you can now create a new event in your Google Calendar, straight
from within Home Assistant. Neat! 
 Furthermore, the local calendar has been extended to provide editing support for existing
events ���� 

 Lastly, support for monthly variations in the recurrence rules has been
added. This includes repetitions like: on the 20th day or the first Wednesday of
the month. The latter, of course, is helpful to put the Home Assistant
release day on your calendar ���� 
 Translation improvements for entities 
 The support for translations for entities has been improved, especially those
of entity attributes! A relatively small change that is improving the UI
experience quite a bit. 
 Some entities provide additional properties, for example, climate entities
provide presets or fan modes. Integrations can now offer translations for
those attribute values. 
 Additionally, textual sensor entities can now provide a list of possible states
they can be in, for which, of course, translations can be provided for now too. 

 In the above screenshot, on the left, you can see how the presets of my
thermostat now show up nicely in a human-readable format (instead of, for example,
���anti_frost��� in previous releases). 
 On the right, the Moon sensor used in an automation
trigger, Home Assistant can now suggest states you can use in those cases.
Those suggestions will also be translated into the language you are using. 
 Other noteworthy changes 
 There is much more juice in this release; here are some of the other
noteworthy changes this release: 
 
 @epenet added a bunch of new device classes for sensors! We now have support
for data size, data rate, irradiance, sound pressure, and atmospheric pressure. 
 The Shelly integration now supports the Shelly Plus WallDimmer US,
thanks @thecode! 
 Configuration errors of automations and scripts with device automations have
been significantly improved, providing you with much more detail to help
you fix the problem. Thanks, @emontnemery! 
 @AngellusMortis added a text entity to the UniFi Protect, so you can now
set the message displayed on your doorbell. Awesome! 
 Google Translate has been extended with dialect support, thanks @toddejohnson! 
 Yale Access Bluetooth now has support for battery status, thanks @bdraco! 
 Three nice new additions to SwitchBot, @konikoni428 added support for power
monitor of wallplugs, @bdraco added initial humidifier support, and
@dsypniewski added support for SwitchBot locks! Awesome! 
 @FuzzyMistborn, added support for ecobee Smart Enhanced thermostats,
thank you! 
 KNX expose now has a cooldown option, which can be used to limit bus load.
Thanks, @farmio! 
 
 New Integrations 
 We welcome the following new integrations in this release: 
 
 AirVisual Pro, added by @bachya 
 Google Assistant SDK, added by @tronikos 
 PurpleAir, added by @bachya 
 Reolink, added by @starkillerOG 
 
 Release 2023.1.1 - January 5 
 
 Limit calls in UniFi to write state (@Kane610 - #85248) (unifi docs) 
 Only subscribe to relevant IDs for state updates (@Kane610 - #85252) (unifi docs) 
 Bump pyeconet to 0.1.18 to fix energy usage (@w1ll1am23 - #85094) (econet docs) 
 Fix lacrosse_view fetching of latest data (@nijel - #85117) (lacrosse_view docs) 
 Bump bthome-ble to 2.4.1 (@Ernst79 - #85153) (bthome docs) 
 Bump hatasmota to 0.6.2 (@emontnemery - #85182) (tasmota docs) 
 Remove invalid AQI unit from Environment Canada (@frenck - #85183) (environment_canada docs) 
 Adjust valid energy units (@epenet - #85190) (energy docs) 
 Remove invalid device class for RSSI sensors (@epenet - #85191) (zha docs) 
 Fix device class for DSMR gas sensors providing energy readings (@frenck - #85202) (dsmr docs) 
 Improve error reporting when switchbot auth fails (@bdraco - #85244) (switchbot docs) 
 bump reolink-aio to 0.1.2 (@starkillerOG - #85247) (reolink docs) 
 Bump bimmer_connected to 0.12.0 (@rikroe - #85255) (bmw_connected_drive docs) 
 Reject the WiFI AP when considering to update a shelly config entry from zeroconf (@bdraco - #85265) (shelly docs) 
 Fix Fully Kiosk service call config entry handling (@cgarwood - #85275) (fully_kiosk docs) 
 
 Release 2023.1.2 - January 8 
 
 Allow SensorDeviceClass.POWER_FACTOR unit None (@epenet - #85287) (sensor docs) (number docs) 
 Retry ZHA config entry setup when ENETUNREACH is caught (@puddly - #84615) (zha docs) 
 Fix dsmr_reader peak hour consumption unit of measurement (@Glodenox - #85301) (dsmr_reader docs) 
 Bump reolink-aio to 0.1.3 (@starkillerOG - #85309) (reolink docs) 
 Bump life360 package to 5.5.0 (@pnbruckner - #85322) (life360 docs) 
 Switch play pause method in philips js (@elupus - #85343) (philips_js docs) 
 Bump ZHA dependencies (@puddly - #85355) (zha docs) 
 Add note to SwitchBot locks that usernames are case sensitive (@bdraco - #85359) (switchbot docs) 
 Bump pySwitchbot to 0.36.3 (@bdraco - #85360) (switchbot docs) 
 Increase Hydrawise default scan interval (@mobilutz - #85398) (hydrawise docs) 
 Bump ical to 4.2.9 (@allenporter - #85401) (local_calendar docs) 
 Bump gcal_sync to 4.1.1 (@allenporter - #85453) (google docs) 
 
 Release 2023.1.3 - January 10 
 
 Bump pyunifiprotect to 4.6.0 (@AngellusMortis - #85483) (unifiprotect docs) 
 Remove invalid Signal Strength device class from NETGEAR (@frenck - #85510) (netgear docs) 
 Restore Netgear signal strength icon (@starkillerOG - #85512) 
 Remove invalid state class in Subaru sensor (@epenet - #85520) (subaru docs) 
 Bump sense_energy to 0.11.1 (@kbickar - #85533) (sense docs) (emulated_kasa docs) 
 Bump pyunifiprotect to 4.6.1 (@AngellusMortis - #85547) (unifiprotect docs) 
 Do not check ble scanner state for sleepy shelly devices (@bdraco - #85566) (shelly docs) 
 Remove no-longer-needed invalid API key monitor for OpenUV (@bachya - #85573) (openuv docs) 
 Bump aioshelly to 5.2.1 to fix Task exception was never retrieved (@thecode - #85575) (shelly docs) 
 Bump gcal-sync to 4.1.2 (@allenporter - #85631) (google docs) 
 Bump hatasmota to 0.6.3 (@emontnemery - #85633) (tasmota docs) 
 Update frontend to 20230110.0 (@piitaya - #85640) (frontend docs) 
 
 Release 2023.1.4 - January 12 
 
 Upgrade aionanoleaf to 0.2.1 (@milanmeu - #83669) (nanoleaf docs) 
 Improve Huawei LTE SSDP inclusion (@scop - #85572) (huawei_lte docs) 
 Remove oauth2client dependency in Google Sheets (@tkdrob - #85637) (google_sheets docs) 
 Upgrade huawei-lte-api to 1.6.11 (@scop - #85669) (huawei_lte docs) 
 Update pyTibber to 0.26.8 (@Danielhiversen - #85702) (tibber docs) 
 Bump pylitterbot to 2023.1.0 (@natekspencer - #85484) (litterrobot docs) 
 Use built in polling for litterrobot update entity (@natekspencer - #84678) (litterrobot docs) 
 Fix Litter-Robot 4 firmware versions reported while updating (@natekspencer - #85710) (litterrobot docs) 
 Use jemalloc in Docker builds (@frenck - #85738) 
 Bump aiowebostv to 0.3.0 (@thecode - #85756) (webostv docs) 
 
 Release 2023.1.5 - January 17 
 
 Make API key mandatory for PI-Hole (@mib1185 - #85885) (pi_hole docs) 
 Reolink check for admin (@starkillerOG - #85570) (reolink docs) (dependency) 
 Remove sky connect config entry if USB stick is not plugged in (@emontnemery - #85765) (usb docs) (homeassistant_sky_connect docs) 
 Remove WAQI unsupported UOM (@yuvalabou - #85768) (waqi docs) 
 Bump pySwitchbot to 0.36.4 (@bdraco - #85777) (switchbot docs) (dependency) 
 Remove oauth2client dependency in Google Assistant SDK (@tronikos - #85785) (google_assistant_sdk docs) 
 Fix WebOS TV image fetch SSL verify failure (@thecode - #85841) (webostv docs) 
 Bump aiohomekit to 2.4.4 (@bdraco - #85853) (homekit_controller docs) (dependency) 
 Skip over files without mime type in Jellyfin (@j-stienstra - #85874) (jellyfin docs) 
 Bump google-nest-sdm to 2.1.2 (@allenporter - #84926) (nest docs) (dependency) 
 Bump google-nest-sdm to 2.2.2 (@allenporter - #85899) (nest docs) (dependency) 
 Add a timeout during OAuth token exchange and additional debug logging (@allenporter - #85911) (nest docs) 
 Bump aiowebostv to 0.3.1 to fix support for older devices (@thecode - #85916) (webostv docs) (dependency) 
 Fix webOS TV SSDP discovery missing friendly name (@thecode - #85917) (webostv docs) 
 Update webOS TV codeowners (@thecode - #85959) (webostv docs) 
 Bump aiowebostv to 0.3.2 (@thecode - #86031) (webostv docs) (dependency) 
 Handle ignored shelly entries when discovering via zeroconf (@bdraco - #86039) (shelly docs) 
 Update pyTibber to 0.26.8 (@Danielhiversen - #86044) (tibber docs) (dependency) 
 bump reolink-aio to 0.2.1 (@starkillerOG - #85571) (reolink docs) (dependency) 
 
 Release 2023.1.6 - January 19 
 
 Fix Matter unique_id generation (@marcelveldt - #86046) (matter docs) 
 Code styling tweaks to the Matter integration (@frenck - #86096) (matter docs) 
 Bump govee-ble to 0.21.1 (@bdraco - #86103) (govee_ble docs) 
 Adjust device registry for Matter devices (@marcelveldt - #86108) (matter docs) 
 Fix live logbook stalling when there are no historical events with a high commit interval (@bdraco - #86110) (logbook docs) 
 Fix Shelly sleeping Gen2 device updates (@thecode - #86198) (shelly docs) 
 Update allowlisted OAuth redirect URIs for Wear OS in China (@jpelgrom - #86247) (auth docs) 
 
 Release 2023.1.7 - January 22 
 
 Support password less PI-Hole installations (@mib1185 - #86183) (pi_hole docs) 
 Bump odp-amsterdam to v5.0.1 (@klaasnicolaas - #86252) (garages_amsterdam docs) (dependency) 
 Fix Shelly sleeping Gen2 - do not refresh from zeroconf discovery (@thecode - #86296) (shelly docs) 
 Bump recommended esphome version for bluetooth proxies to 2022.12.4 (@bdraco - #86308) (esphome docs) 
 Update pyTibber to 0.26.11 (@Danielhiversen - #86316) (tibber docs) (dependency) 
 Pass frag_duration as integer (@uvjustin - #86375) (stream docs) 
 
 Need help? Join the community! 
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

 
   
    
      Image Upload / Default Config 
       
      
      
       
    
     
 The image integration domain was renamed to image_upload. 
 This change would only affect you when you have removed the
default_config from your configuration.
In that case, you need to manually adjust your configuration to rename image
to image_upload. 
 The rename was done to free up the image domain for future use. 
 (@frenck - #84063) (documentation) 
 
   
 

 
   
    
      air-Q 
       
      
      
       
    
     
 The unit for noise has been adjusted from dBa to dBA. 
 (@epenet - #83581) (documentation) 
 
   
 

 
   
    
      AirVisual (Pro) 
       
      
      
       
    
     
 AirVisual Pro units now have their own Home Assistant integration (as opposed
to be included with the original AirVisual integration that uses the AirVisual
cloud API). 
 Pro devices will automatically be migrated; as part of that migration,
the Pro���s device ID will change. 
 If you utilize entity IDs belonging to a Pro in automations or scripts, you
don���t need to do anything; if, however, you utilize a Pro���s device ID,
please update those automations or scripts accordingly. 
 (@bachya - #83583) (documentation) 
 
   
 

 
   
    
      APC UPS Daemon 
       
      
      
       
    
     
 The previously deprecated YAML configuration of the APC UPS Daemon integration
has been removed. 
 APC UPS Daemon is now configured via the UI. Any existing YAML configuration
has been imported in previous releases and can now be safely removed from your
YAML configuration files. 
 (@yuxincs - #83801) (documentation) 
 
   
 

 
   
    
      Awair 
       
      
      
       
    
     
 The unit for sound level has been adjusted from dBa to dBA. 
 (@epenet - #83582) (documentation) 
 
   
 

 
   
    
      deCONZ 
       
      
      
       
    
     
 An issue with the mapping of triggers of Styrbar has been discovered and fixed.
As a result, any automations relying on these triggers will need to be
manually adjusted/re-configured to adjust to this change. 
 (@Kane610 - #84257) (documentation) 
 
   
 

 
   
    
      Fitbit 
       
      
      
       
    
     
 Units of measurements for length, mass, time, and volume have been aligned
with standard Home Assistant units. 
 (@epenet - #83936) (documentation) 
 
   
 

 
   
    
      Minut Point 
       
      
      
       
    
     
 The unit for sound has been adjusted from dBa to dBA. 
 (@epenet - #83580) (documentation) 
 
   
 

 
   
    
      Speedtest.net 
       
      
      
       
    
     
 The update frequency option has been removed. The default frequency is now 60
minutes. If you like to customize the polling: disable polling update from
system options and use the update_entity service in an automation to manually
update it at your own custom schedule. 
 (@engrbm87 - #84295) (documentation) 
 
   
 

 
   
    
      Tankerkoenig 
       
      
      
       
    
     
 The previously deprecated YAML configuration of the Tankerkoenig
integration has been removed. 
 Tankerkoenig is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files. 
 (@mib1185 - #84711) (documentation) 
 
   
 

 
   
    
      Tomorrow.io 
       
      
      
       
    
     
 The imperial unit for Global Horizontal Irradiance has been adjusted from BTU/(h��ft��) to BTU/(h���ft��) 
 (@epenet - #83574) (documentation) 
 
   
 

 
   
    
      Universal Devices ISY994 
       
      
      
       
    
     
 The unit for weighted decibels has been adjusted from dBa to dBA. 
 (@epenet - #83583) (documentation) 
 
   
 
 If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
developer blog. The following are the most notable for this release: 
 
 Add more unit enumerators 
 Multi-pan temporarily disabled 
 Summary of unit system related changes 
 Translating the state of entities 
 
 Farewell to the following 
 The following integrations are also no longer available as of this release: 
 
 Deutsche Bahn has been removed. It relied on web scraping, which is no
longer allowed. 
 
 All changes 
 Of course, there is a lot more in this release. You can find a list of
all changes made here: Full changelog for Home Assistant Core 2023.1 
"
link: "https://www.home-assistant.io/blog/2023/01/04/release-20231/"
category:
---
