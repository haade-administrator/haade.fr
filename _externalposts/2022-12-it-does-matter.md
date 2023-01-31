---
title: "2022.12 - It does matter!"
date: 2022-12-07 00:00:00 +0000
dateadded: 2023-01-31 09:17:01 +0100
description: "  
 Home Assistant Core 2022.12! ���� 
 Already the last release of the year, right on time to bring you some cool
new features to work with during the upcoming Holidays! 
 2022 has been a fantastic year for the Home Assistant project. We became
one of the world���s largest and fastest-growing GitHub open source projects! ������ Tons of new features each month, and not just that,
we matured a lot! Everything became more stable and faster, and
the UX made leaps forwards as well! 
 We looked back at 2022 during the State of the Open Home,
and sneak peaked at 2023, with some great new UI concepts
and: The year of the voice! ������� Missed it?
The full video is available on YouTube. 
 But! The year isn���t over yet! This release really Matters! We are thrilled to
be one of the first in the world to roll out Matter support to the public! ���� 
 No Matter devices yet? Don���t worry! There are tons of things in this release
that will keep you busy. The Tile card got ���features���! You can now extend
your Bluetooth range using Shelly devices, and a long-requested feature lands:
Local Calendar. ���� 
 For 2022, this is it! Thank you for joining our community. Thank you for
sharing, helping out, contributing, creating YouTube videos, blog articles,
and podcasts. 
 Thank you for using Home Assistant! ������ 
 Happy holidays and for the last time in 2022: Enjoy the release! 
 ../Frenck 

 
 It does Matter! 
 Tile card gets features 
 Shiny new state colors! 
 Local calendar 
 Bluetooth proxy using Shelly devices 
 New entity: text 
 Summing entities without templates 
 Other noteworthy changes 
 New Integrations 
 Integrations now available to set up from the UI 
 Release 2022.12.1 - December 8 
 Release 2022.12.2 - December 11 
 Release 2022.12.3 - December 11 
 Release 2022.12.4 - December 12 
 Release 2022.12.5 - December 13 
 Release 2022.12.6 - December 14 
 Release 2022.12.7 - December 17 
 Release 2022.12.8 - December 21 
 Release 2022.12.9 - January, 2 
 Need help? Join the community! 
 Breaking Changes 
 Farewell to the following 
 All changes 
 
 Don���t forget to join our release party live stream on YouTube today at 12:00 PDT / 21:00 CET! 
  
 It does Matter! 
 Does it Matter? Yes, Home Assistant does Matter! 
 Matter is a new smart home interoperability standard, an open-source protocol,
that defines how devices can communicate and work together. Read more about
Matter in this comprehensive write-up from The Verge. 
 Today we release the first iteration of the Matter integration for Home
Assistant. It is a big and important foundation that is probably best described
as ���alpha��� or maybe even a ���developer preview��� ��� allowing anyone to help
and jump in on the Matter development. For the first release,
we think that is a great start! 
 At this point, Matter-enabled products are not (yet) generally available.
However, if you can get a Matter-certified product, it can be commissioned! 
 

A Matter device integrated with Home Assistant.
 
 Adding Matter devices (commissioning) can be done using our iOS and Android
Home Assistant Companion apps. Adding support for this to our apps is being
worked on and will become available in the upcoming weeks. The Android Companion
app supporting Matter, is currently available for beta testing. 
 Interested? We have made more details available in our documentation. 
 Tile card gets features 
 In the last release, we introduced the Tile card.
Today we extend the Tile card by adding support for ���features���. 
 For the Tile card, ���features��� are additional extras that can be added to a Tile
card. For example, they can provide additional controls or information for
the entity the Tile card displays. 

 Multiple usable Tile features have been added: 
 
 Command buttons for vacuum cleaners 
 Brightness slider for lights 
 Controls for opening/closing and tilting covers 
 
 Checkout the documentation for more information about Tile features 
 But that is not all! The Tile card also got colors! ���� 
 Based on the entity���s state, the card will get different colors. This color
provides an additional visual indication of the entity���s state. 

 Shiny new state colors! 
 Those lovely new state colors added to the Tile card, as shown above, are not
just added to the tile card. This same color logic has now also been applied to
the state history and the logbook! 

 Previously, these colors would be random. Now they are predictable, recognizable
and, above all: just look a lot better ���� 
 This same experience will also be visible on the dedicated Logbook and History
pages of course. 
 Local calendar 
 This is one of the longer outstanding and bigger requested features
of Home Assistant: A local calendar! 
 Building a calendar isn���t easy, but Allen Porter did it! And it is not
just a calendar with dates and descriptions��� oh no! Allen went all in! 

 We now have a full blown, local, built-in calendar, which can do all-day event
or recurring ones tuned to your liking. Even multiple different local calendars
are supported! 

  
 Bluetooth proxy using Shelly devices 
 In the September release, we brought Bluetooth everywhere,
by adding Bluetooth proxy support, allowing any ESPHome device in your home
to relay Bluetooth traffic across your home. 
 This release adds support for using Shelly devices as a remote Bluetooth
adapter as well! 
 It works with all second-generation Shelly devices that use firmware 12.0 or
later. Those are able to forward Bluetooth advertisements to Home Assistant���s
Bluetooth integration. Home Assistant is not able
to use Shelly devices to connect to devices, something that is necessry to
control devices via Bluetooth. For that, use our Bluetooth Proxies. 
 This can greatly help with extending the range of your Bluetooth network to
help with things like Bluetooth temperature or plant sensors in your home. 
 In other Bluetooth news: The performance of Bluetooth has, again, been improved
this release, and the memory usage should be lower. Always good! 
 New entity: text 
 Say hello to a new entity: text! The text entity is very similar to the
Text helper (also known as input_text). 
 The difference is that the helper is configured and managed by you, while the
new text entities are provided by integrations. This means integration can now
provide entities that ask for a textual input in the UI. 

 The first integrations that can now provide text entities as of this release are
KNX and MQTT. 
 Summing entities without templates 
 Let���s say you have two numeric sensor entities, and you like to have an
entity that shows the sum of those two; how would you do that? Creating a
template entity, right? Nope! ���� 
 You can now create a new helper entity that sums the values of two (or more)
sensor entities into a brand-new entity. 
 When creating a new helper, select ���Combine the state of several sensors���,
pick the sensor you���d like to sum, and select ���Sum��� for the statistic
characteristic. Voila! 

  
 You might have noticed that this looks like the ���Min/Max��� helper. True!
We have renamed ���Min/Max��� to ���Combine the state of several sensors���,
to make it more descriptive as it gets more features. 
 Other noteworthy changes 
 There is much more juice in this release; here are some of the other
noteworthy changes this release: 
 
 You can now set your country and default language Home Assistant should use
in the general settings. These new options allow
Home Assistant to consider those in future features. 
 Using Twinkly in your Christmas tree? ���� You can now control the effects!
Right on time! Thanks, @Olen! 
 MQTT reached the gold level on the integration quality scale! Nice work @jbouwh!
But that is not all; it now supports MQTT v5 and WebSocket connections too! 
 NO2 and VOC sensor entities are now working with HomeKit. Thanks, @stackia! 
 Shelly is now a platinum integration! Thanks, @thecode, @bieniu,
and @chemelli74 for your hard work on this integration ���� 
 ZHA now supports the new Aqara c1 pet feeder. Thanks @dmulcahey for
adding it, and thanks @kirovilya figuring out the communication! 
 The humidifier card, now has on/off controls. Thanks, @Shulyaka 
 Amazon Alexa now supports humidifiers. Thanks, @jbouwh! 
 BTHome version 2 has been released and Home Assistant now supports it!
Thanks, @Ernst79! 
 Slack now has a Do Not Disturb sensor you could automate on. Thanks, @tkdrob! 
 Support for IP-Secure routing has been added to KNX. Thanks, @farmio! 
 Are you using Picnic for your groceries? You can now add products to your
order straight from Home Assistant. Thanks, @corneyl! 
 
 New Integrations 
 We welcome the following new integrations in this release: 
 
 air-Q, added by @Sibgatulin 
 Aranet, added by @aschmitz 
 LIVISI SmartHome, added by @StefanIacobLivisi 
 Local Calendar, added by @allenporter 
 Matter, added by @marcelveldt, @MartinHjelmare and @agners 
 RuuviTag BLE, added by @akx 
 Sensirion BLE, added by @akx 
 Text, added by @raman325 
 
 Integrations now available to set up from the UI 
 The following integrations are now available via the Home Assistant UI: 
 
 Pushbullet, done by @engrbm87 
 Scrape, done by @gjohansson-ST &amp; @epenet 
 
 Release 2022.12.1 - December 8 
 
 Set connectable as false for sensirion_ble (@chkuendig - #83481) (sensirion_ble docs) 
 Make sure super async_added_to_hass is called (@elupus - #83493) (philips_js docs) 
 Bump simplisafe-python to 2022.12.0 (@bachya - #83497) (simplisafe docs) 
 Bump python-matter-server to 1.0.7 (@marcelveldt - #83507) (matter docs) 
 Bump pyhik to 0.3.2 (@mezz64 - #83517) (hikvision docs) 
 Bump ical to 4.2.2 (@allenporter - #83520) (local_calendar docs) 
 Fix issue with Callable, Union, and Python 3.9 mqtt (@cdce8p - #83547) (mqtt docs) 
 Update frontend to 20221208.0 (@bramkragten - #83551) (frontend docs) 
 Improve local calendar input validation error handling (@allenporter - #83563) (local_calendar docs) 
 Bump pip_check conflicts +1 (@frenck - #83536) 
 Bump intellifire4py to 2.2.2 (@jeeftor - #83589) (intellifire docs) 
 Bump bluetooth-auto-recovery to 0.5.5 (@bdraco - #83597) (bluetooth docs) 
 Disable multi-pan (@balloob - #83603) (homeassistant_yellow docs) (homeassistant_sky_connect docs) (homeassistant_hardware docs) 
 
 Release 2022.12.2 - December 11 
 
 Bump pyrisco to 0.5.7 (@maartenweyns - #83548) (risco docs) 
 Bump pychromecast to 13.0.2 (@emontnemery - #83625) (cast docs) 
 Fix fibaro climate unit (@rappenze - #83659) (fibaro docs) 
 Fix event sensor for UniFi Protect (@AngellusMortis - #83663) (unifiprotect docs) 
 Add missing CONF_SPEED to sensor device_trigger SCHEMA (@SukramJ - #83679) (sensor docs) 
 Bump aioshelly to 5.1.1 (@thecode - #83680) (shelly docs) 
 Fix delay setting up new Yale Access Bluetooth entries (@bdraco - #83683) (yalexs_ble docs) 
 Fix loading of Fritz!Smarthome issues on older Fritz!Box (@mib1185 - #83688) (fritzbox docs) 
 Bump androidtv dependency of androitv component (@chatziko - #83707) (androidtv docs) 
 lifx: bump aiolifx_effects dependency to v0.3.1 (@Djelibeybi - #83730) (lifx docs) 
 Fix IPv6 sensor is only loaded when Fritz!Box is in router mode (@mib1185 - #83757) (fritz docs) 
 Fix scan_interval in Scrape (@gjohansson-ST - #83758) (scrape docs) 
 
 Release 2022.12.3 - December 11 
 
 Drop aiohttp to 3.8.1 (@balloob - #83795) 
 
 Release 2022.12.4 - December 12 
 
 Bump bluetooth-auto-recovery to 1.0.0 (@bdraco - #83800) (bluetooth docs) 
 Update frontend to 20221212.0 (@bramkragten - #83842) (frontend docs) 
 Bump version of ZHA quirks to 0.0.89 (@dmulcahey - #83848) (zha docs) 
 Bump pychromecast to 13.0.3 (@emontnemery - #83861) (cast docs) 
 Move template check into fritzbox entry setup (@mib1185 - #83863) (fritzbox docs) 
 Use the async_migrate_paypal_agreement function to get the migration URL (@ludeeus - #83469) (cloud docs) 
 Fix issue on Overkiz Domestic Hot water heater entities with away mode (@nyroDev - #83684) (overkiz docs) 
 Bump pyoverkiz to 1.7.2 (@nyroDev - #83866) (overkiz docs) 
 Fix bleak-retry-connector get_device hang with HAOS 9.4 and only proxies (@bdraco - #83879) (bluetooth docs) 
 Fix HomeKit media players when entity has duplicate sources (@bdraco - #83890) (homekit docs) 
 
 Release 2022.12.5 - December 13 
 
 Fix Just Nimbus error codes (@kvanzuijlen - #83856) (justnimbus docs) 
 Fix saving options with missing ignored sources in BraviaTV (@Drafteed - #83891) (braviatv docs) 
 Bump pychromecast to 13.0.4 (@emontnemery - #83896) (cast docs) 
 Update frontend to 20221213.0 (@bramkragten - #83940) (frontend docs) 
 
 Release 2022.12.6 - December 14 
 
 Do not add a Content-Type header to ingress (@zeehio - #83425) (hassio docs) 
 Bump lupupy dependency to v0.2.3 (@majuss - #83765) (lupusec docs) 
 Bump aioshelly to 5.1.2 to fix state updates not firing after reconnect (@bdraco - #83950) (shelly docs) 
 Bump aioesphomeapi to 13.0.2 to fix reconnects after bad protobuf message (@bdraco - #83951) (esphome docs) 
 Ignore certain device trigger validation errors (@emontnemery - #83972) (device_automation docs) 
 
 Release 2022.12.7 - December 17 
 
 Bump pySwitchbot to 0.23.2 (@bdraco - #84002) (switchbot docs) 
 Re-add missing Growatt TLX values (@muppet3000 - #84040) (growatt_server docs) 
 Update frontend to 20221213.1 (@bramkragten - #84058) (frontend docs) 
 Bump govee-ble to 0.19.3 (@bdraco - #84062) (govee_ble docs) 
 Update Tibber lib, improve realtime streaming (@Danielhiversen - #84065) (tibber docs) 
 Bump bluetooth-auto-recovery to 1.0.3 (@bdraco - #84075) (bluetooth docs) 
 Make sure philips_hs remote entity calls parent added (@elupus - #84082) (philips_js docs) 
 Bump ical to 4.2.3 (@allenporter - #84104) (local_calendar docs) 
 Fix check if Surveillance Station is available in Synology DSM (@mib1185 - #84140) (synology_dsm docs) 
 Fix KNX ConfigFlow for manual secure tunnel keys (@farmio - #84155) (knx docs) 
 
 Release 2022.12.8 - December 21 
 
 Add missing preset for Overkiz atlantic electrical heater (@nyroDev - #84080) (overkiz docs) 
 Fix connectable Bluetooth devices not going available after scanner recovers (@bdraco - #84172) (bluetooth docs) 
 Bump ical to 4.2.4 (@allenporter - #84248) (local_calendar docs) 
 Bump bluetooth-data-tools to 0.3.1 (@bdraco - #84258) (bluetooth docs) (led_ble docs) 
 Skip client metadata values that are None (@ludeeus - #84293) (cloud docs) 
 Improve Tibber rt Pulse streaming (@Danielhiversen - #84313) (tibber docs) 
 Fix attribute check in prometheus exporter (@mib1185 - #84321) (prometheus docs) 
 
 Release 2022.12.9 - January, 2 
 
 Handle not available add-on in hassio add-on manager (#84943 - @MartinHjelmare) 
 Fix failing HomeKit Controller diagnostics tests (#84936 - @bdraco) 
 
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

 
   
    
      Cloudflare 
       
      
      
       
    
     
 The Cloudflare integration no longer relies on ipify.org to determine your IP,
but instead is using the whoami service. 
 This means that if you have configured your network only to allow traffic there,
you would need to adjust it to allow for the new situation. 
 (@ludeeus - #81714) (documentation) 
 
   
 

 
   
    
      Elexa Guardian 
       
      
      
       
    
     
 The previously deprecated guardian.disable_ap and guardian.enable_ap service
and the corresponding binary sensor have now been removed. 
 (@bachya - #81056) (documentation) 
 
   
 

 
   
    
      Glances 
       
      
      
       
    
     
 The scan interval (scan_interval) option in the Glances configuration is
removed, and the update interval will use the default value (60 seconds). 
 If you have already configured Glances integrations, the previously saved interval
option will still be used. To revert to the default update interval,
you need to re-add the integration. 
 You can use the homeassistant.update_entity service in an automation
for custom update intervals. 
 (@engrbm87 - #72748) (documentation) 
 
   
 

 
   
    
      Groups 
       
      
      
       
    
     
 Media player groups containing players that provide an invalid media player
entity state, will now report a ���Unknown��� group state. 
 The list of valid media player states is available in our
developer documentation. 
 (@epenet - #78465) (documentation) 
 
   
 

 
   
    
      HERE Travel Time 
       
      
      
       
    
     
 The HERE Travel Time integration now uses the HERE API v8.
Travelmode publicTransportTimeTable has been merged into publicTransport.
Your configuration will be migrated automatically;
no manual interaction is necessary. 
 (@eifinger - #80892) (documentation) 
 
 The unit system is no longer controlled by an options setting of the HERE
Traveltime integration but uses the built-in custom units configurable per
entity. 
 The distance sensor now uses kilometers as a default and must be manually
configured if it was previously using the imperial system. 
 (@eifinger - #79159) (documentation) 
 
   
 

 
   
    
      Hikvision 
       
      
      
       
    
     
 The videoloss event has been removed from the supported list. The event has
always been used as a keep-alive for most Hikvision devices, and the library
uses it internally. Leaving it enabled as an option causes everything to break
if the event is actually processed, so it was removed to eliminate confusion. 
 Any customized options specified in the YAML configuration for a videoloss
event will need to be removed, and videoloss entities will no longer be
generated by the integration. 
 If you used any of these entities in your automations or scripts, you will
need to update those to remove the use of these entities. 
 (@mezz64 - #81173) (documentation) 
 
   
 

 
   
    
      HomeKit 
       
      
      
       
    
     
 The HomeKit Air quality PM10 mappings between Home Assistant and HomeKit,
have been updated to the latest US AQI standard. 
 (@stackia - #81217) (documentation) 
 
   
 

 
   
    
      Logitech Harmony Hub 
       
      
      
       
    
     
 The PowerOff state of the select entity will be changed to power_off. 
 If you relied on this state value in your automations or script,
you must adjust to this change. 
 (@bieniu - #77491) (documentation) 
 
   
 

 
   
    
      Mobile Apps 
       
      
      
       
    
     
 The events fired when the mobile app scanned a Tag had an incorrect device ID;
This has been corrected. 
 As a result, the evens now contain a different but correct device ID. If you
relied on the device ID in your automations, you might need to adjust those
with the new device ID. 
 (@balloob - #82820) (documentation) 
 
   
 

 
   
    
      Modbus 
       
      
      
       
    
     
 The name of the mapping keys used for defining HVAC modes in the Modbus
climate integration (introduced in 2022.11) has changed. This was needed
to fix an issue with the off key, which has a different meaning in YAML. 
 Instead of: 
   hvac_mode_register:
  address: ...
  values:
    off: 0
    heat: 1
    cool: 2
   
 You now have to use: 
   hvac_mode_register:
  address: ...
  values:
    state_off: 0
    state_heat: 1
    state_cool: 2
   
 (@avishorp - #81749) (documentation) 
 
   
 

 
   
    
      MQTT 
       
      
      
       
    
     
 YAML configuration of MQTT entities under the platform key (e.g., light),
which was deprecated in Home Assistant Core 2022.6, is no longer supported.
The configuration must instead be done under the mqtt key. 
 The legacy MQTT device tracker is no longer supported. See
the documentation for the supported MQTT
device tracker configuration. 
 As of this release, you should now use the modern configuration schema for all
manually configured MQTT entities. Please note that this does not impact
MQTT discovery, for example, Zigbee2MQTT. 
 (@jbouwh - #82102) (documentation) 
 
 The encoding configuration option for the MQTT camera set to b64
was previously deprecated and has now become an invalid configuration. 
 The new image_encoding configuration option is now used to set Base64 encoding.
Please use the new image_encoding config parameter (set to b64) instead. 
 (@jbouwh - #82244) (documentation) 
 
   
 

 
   
    
      OpenUV 
       
      
      
       
    
     
 The previously deprecated openuv.update, openuv.update_uv_index,
and openuv.update_protection_data services have now be removed. 
 (@bachya - #81055) (documentation) 
 
   
 

 
   
    
      Radarr 
       
      
      
       
    
     
 The previously deprecated YAML configuration of the Radarr
integration has been removed. 
 Radarr is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files. 
 (@tkdrob - #81210) (documentation) 
 
   
 

 
   
    
      RainMachine 
       
      
      
       
    
     
 The previously deprecated extra_water_on_hot_days  and freeze_protection
binary sensors, and freeze_protection_temperature sensor have now been removed. 
 (@bachya - #81053) (documentation) 
 
   
 

 
   
    
      Renault 
       
      
      
       
    
     
 The unit of measurement for the charging power sensor has been corrected.
As the unit has changed, it will create a long-term statistics warning
that you need to resolve in the statistics developers tools manually. 
  
 (@epenet - #81412) (documentation) 
 You will need to resolve the analytics warning by adjusting the previous unit. 
 
   
 

 
   
    
      Risco 
       
      
      
       
    
     
 The bypassed attribute in Risco zones has been removed and replaced with
a switch. The matching services have also been removed, and you can bypass
and un-bypass a zone using the regular switch services
(turn_on and turn_off respectively). 
 For example, if you had a call to: 
   service: risco.bypass_zone
target:
  entity_id: binary_sensor.motion_bedroom
   
 You can replace it with: 
   service: switch.turn_on
target:
  entity_id: switch.motion_bedroom_bypassed
   
 (@OnFreund - #81137) (documentation) 
 
   
 

 
   
    
      SimpliSafe 
       
      
      
       
    
     
 The previously deprecated simplisafe.clear_notifications service
has now been removed. 
 (@bachya - #81054) (documentation) 
 
   
 

 
   
    
      Statistics 
       
      
      
       
    
     
 The quantiles statistics sensor characteristic has been removed and
replaced by the more versatile percentile characteristic. 
 If you use the quantiles characteristic, you will need to adapt your sensor
configuration to recreate identical values with the percentile characteristic. 
 (@ThomDietrich - #81749) (documentation) 
 
 The configuration of statistics sensors has changed: 
 The state_characteristic configuration setting is now mandatory. 
 The sampling_size configuration setting is now optional and no longer
defaults to the arbitrary value 20. You can now define sampling_size,
max_age, or both depending on your use case. Existing sensors won���t behave
differently by the change. However, you might want to check whether your
currently defined sensors have a meaningful sampling_size configured or if
you wish to remove this setting altogether. 
 (@ThomDietrich - #81749) (documentation) 
 
   
 

 
   
    
      Subaru 
       
      
      
       
    
     
 The Subaru API has changed and no longer returns values required by two sensors: 
 
 External temp 
 12V battery voltage 
 
 These sensors have been removed from the Subaru integration. 
 (@G-Two - #83213) (documentation) 
 
   
 

 
   
    
      UniFi Network 
       
      
      
       
    
     
 As new PoE entities were introduced with 2022.11, this release, the old
troublesome PoE client implementation that these entities replaced,
has been removed. Upgrading will automatically remove the old entities. 
 Please note that the new PoE entities are disabled by default and represent
each PoE-capable port without mapping it to a client. 
 (@Kane610 - #81749) (documentation) 
 
   
 
 If you are a custom integration or theme developer and want to learn about
breaking changes and new features available for your integration: Be sure to
follow our developer blog.
The following are the most notable for this release: 
 
 Add more unit enumerators 
 Changes to long term statistics APIs 
 Entity state color changes 
 Introducing new unit enumerators 
 Summary of unit system related changes 
 
 Farewell to the following 
 The following integrations are also no longer available as of this release: 
 
 Google Chat has been removed. It relied on the Google Hangouts APIs,
which have been shut down, rendering the integration unusable. 
 
 All changes 
 Of course, there is a lot more in this release. You can find a list of
all changes made here: Full changelog for Home Assistant Core 2022.12 
"
link: "https://www.home-assistant.io/blog/2022/12/07/release-202212/"
category:
---
