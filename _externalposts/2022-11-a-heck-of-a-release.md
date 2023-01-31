---
title: "2022.11 - A heck of a release!"
date: 2022-11-02 00:00:00 +0000
dateadded: 2023-01-31 09:17:01 +0100
description: "  
 Home Assistant Core 2022.11! ���� 
 This November already feels a lot like Christmas ����, what a heck of a
release! Quite a few suggestions from the Month of ���What the Heck?!���
already landed! Ready to unpack the presents? ���� 
 Talking about the WTH month, it ended. Well, sort of, at least. It is now closed
for new topics/suggestions, but existing ones
remain open for discussion and can be voted on. I���m curious to see more of
these WTHs being resolved in the upcoming releases. 
 This release has so much goodness that I have a hard time picking a favorite.
Water usage, maybe? I���m really not sure, so I���m going to cut this intro short.
Let me know your favorite in the comments below! 
 Enjoy the release! 
 ../Frenck 
 PS: There will be no release party live stream this month,
instead join us at the
State of the Open Home on
Sunday, November 13, 2022 (11:00 AM PST / 20:00 CET). 

 
 Tile card 
 Statistic card 
 Smarter reloading of automation &amp; scripts 
 Getting insights into water usage 
 Color temperatures in Kelvin 
 Long-term statistics in the entity dialogs 
 The first day of the week 
 New templating features 
 Other noteworthy changes 
 New Integrations 
 Integrations now available to set up from the UI 
 Release 2022.11.1 - November 3 
 Release 2022.11.2 - November 8 
 Release 2022.11.3 - November 16 
 Release 2022.11.4 - November 20 
 Release 2022.11.5 - November 30 
 Need help? Join the community! 
 Breaking Changes 
 All changes 
 
 Tile card 
 This release introduces a new Dashboard card: the ���Tile���! 

 The tile card is a lovely little card that provides a quick overview of an
entity. The icon can be tapped to toggle the entity, and the rest of the card
brings up the ���more info��� dialog. 
 Read more about the Tile card in the documentation. 
 This first iteration of the Tile card is one of the first cards added this
release, that brings in a new style of card into Home Assistant. 
 Curious to find out what else will be coming? Join us for the State
of the Open Home live stream. Go to YouTube and click the bell ����
so you get notified when we go live! 
 Statistic card 
 More cards! We already have the Statistics Graph card,
which can be used to display graphs of long-term statistics of an entity.
This release brings the ���Statistic��� card! 
 The ���Statistic��� card, as the name implies, can show a single value of an entity,
based on the long-term statistics stored of that entity. 
 For example, want to display the average temperature of your living room this
week on your dashboard? The average power usage of your home today? The peak
power production of your solar panels today? 
 Yes, all of the above, this card can do! 

 Read more about the Statistic card in the documentation. 
 Smarter reloading of automation &amp; scripts 
 
 WTH do all automations get reloaded when you change any of them? 
 
 Good question! And that WTH topic got over 180+ votes as well! 
 When you change a single automation or script via the editors in the user
interface (or reload your YAML-based ones), they all get reloaded. This
means if they are running, waiting for something (a delay, an event, or for an
entity to be in a certain state for X time), they would all be reset. 
 This release changes this behavior, resolving that WTH! Only automations that
are actually changed are reloaded. All others will remain running and untouched. 
 This works when editing an automation in the UI, and even when reloading your
YAML-based automations in any split YAML setup you might have. 
 Oh, as an added bonus: We applied the exact same for scripts too! 
 Getting insights into water usage 
 Since Home Assistant added energy management, tracking the usage of water����
has been requested quite a bit. It was raised again during this month of WTH,
and with over 370 votes, it is clearly wanted a lot. 
 This release adds the ability to monitor your water usage in the energy dashboard! 
 Although water is not strictly ���energy���, it is still a valuable resource
to track. It is often tightly coupled with energy usage (like gas) when using
hot water, and the gained insight can help you reduce your ecological footprint
by using less water ����. 

 Some integrations, like Flo, Flume, and
HomeWizard Energy, have been adjusted to support
tracking water. Furthermore, you can create your own using templates, MQTT,
or ESPHome (requires ESPHome version 2022.10.1 or newer). 
 Check out the documentation for the hardware options
available to track your water usage or how to build your own water usage
sensors. 
 Color temperatures in Kelvin 
 Another WTH topic
that was voted for almost 150 times! Why doesn���t Home Assistant use Kelvin
for color temperatures? 
 Well, a small piece of history: The Home Assistant story started using Philips
Hue a long, long time ago. And Hue uses mired for its color temperature,
not Kelvin. 
 But today, Kelvin is much more commonly used. It is even on packages of the
bulbs you buy. So, as of today, Home Assistant uses Kelvin too! 

 Kelvin is now the primary color temperature unit. This means all lights
and everything color temperature related shown in the user interface,
are now in Kelvin. 
 We still do support the good old mired. Mireds are still working and
automatically converted when needed, so this is not a breaking change ���� 
 Additionally, integrations can now optionally use Kelvin directly if the
device or service accepts that. HomeKit, Shelly,
AVM FRITZ!SmartHome, and LIFX are all now using Kelvin natively. 
 Long-term statistics in the entity dialogs 
 The ���more info��� dialogs of entities now use long-term statistics for
the graphs shown. It makes those dialogs a lot faster, especially on
mobile devices. 

 The first day of the week 
 The start of the week can differ for many of us. Your week will start on
Saturday, Sunday, or Monday based on where you are, your locale, or maybe
personal preference. As pointed out in
this WTH topic. 
 Home Assistant will try to auto-detect the correct day to start the week
based on information provided by your browser. However, if it cannot detect it,
or in case you have a personal preference, you can now set it on your user profile. 

 You can now set the day to start the week at in your user profile. 
 Setting it means that all date inputs, date range pickers, schedules, calendars,
and even time conditions in automations, will take this into account when
displaying weeks. 
 New templating features 
 We also have some great new advanced features added to templating this release! 
 Originating from this WTH topic:
You can now use the state_attr() and states() functions as a filter,
and the is_state() and is_state_attr() functions can now be used as tests. 
 The average() function now accepts a default value, which can be helpful
if no average can be calculated. 
 Lastly, the config_entry_id() template method has been added, which allows
you to look up native IDs of integration configuration entries using one
of the entities it provides. 
 For more information on these new features and the Home Assistant templating
capabilities in general, check out the documentation. 
 Other noteworthy changes 
 There is much more juice in this release; here are some of the other
noteworthy changes this release: 
 
 The default dashboard theme has been adjusted to move a little closer to the
new Material Design 3 guidelines. Borders around cards are now outlined
(instead of having a shadow), and corners are a little more rounded. 
 The automations and the devices dashboards now have icons on each row, making
them look all nice and shiny. Thanks, @bramkragten &amp; @frenck. 
 The unit of measurement for entities providing Gas can now be changed and
converted from the UI. Thanks, @emontnemery! 
 Home Assistant is now discoverable via UPnP/SSDP, meaning your instance will
show up in your Windows Network. Thanks, @StevenLooman! 
 Shelly Gen2 devices that sleep (battery-powered) are now supported!
Thanks, @thecode! 
 You can now use sensors providing Gigajoule (GJ) with the energy dashboard.
Thanks, @emontnemery! 
 The MQTT integration now has support for update entities! Thanks, @bieniu! 
 Media player support was added to the Jellyfin integration. Thanks, @Ongy! 
 The statistics card now supports ���week��� as a possible period. Thanks, @mib1185! 
 The Sun condition can now handle setting both before &amp; after at the same
time. Thanks, @janick! 
 The ���forked-daapd��� project was renamed to ���Owntone���. The integration was now
renamed Owntone too! Thanks, @uvjustin! 
 Fully Kiosk Browser now provides a service to remotely change URLs on your
wall-mounted tablet. Thanks, @cgarwood! 
 The Xiaomi Miio integration now supports the Xiaomi Purifier 4 Lite and
the Roborock S7 MaxV. Thanks, @alexdrl &amp; @starkillerOG! 
 The UniFi integration now provides individual PoE control per port for
the client and device PoE (switches are disabled by default).
Thanks, @Kane610! 
 The HomeKit Controller integration now supports encrypted Bluetooth
notifications, reducing state change latency and the number of active BLE
connections made to devices. 
 When setting up a new Generic Camera, you will be presented with a preview
of the camera showing you if it works. Nice! Thanks, @davet2001! 
 Support for unique_ids was added to the following (YAML capable) integrations:
 
 Bayesian, added by @HarvsG 
 Min/Max, added by @gjohansson-ST 
 Scrape, added by @epenet 
 
 
 
 New Integrations 
 We welcome the following new integrations in this release: 
 
 Airthings BLE, added by @vincegio 
 Oral-B, added by @bdraco 
 SNOOZ, added by @AustinBrunkhorst 
 
 Integrations now available to set up from the UI 
 The following integrations are now available via the Home Assistant UI: 
 
 APC UPS Daemon, done by @yuxincs 
 Zentralanstalt f��r Meteorologie und Geodynamik (ZAMG), done by @killer0071234 
 
 Release 2022.11.1 - November 3 
 
 Update energyflip-client dependency to 0.2.2 (@dennisschroer - #81426) (huisbaasje docs) 
 Update pysnooz to 0.8.3 (@AustinBrunkhorst - #81428) (snooz docs) 
 Fix eight sleep client creation (@raman325 - #81440) (eight_sleep docs) 
 Skip flume devices with location missing (@bdraco - #81441) (flume docs) 
 Fix SSDP failure to start on missing URLs (@frenck - #81453) (ssdp docs) 
 Bump aiohomekit to 2.2.14 (@bdraco - #81454) (homekit_controller docs) 
 Update cryptography to 38.0.3 (@frenck - #81455) 
 Fix HomeKit thermostat to take priority over fans (@bdraco - #81473) (homekit docs) 
 Bump AIOAladdinConnect to 0.1.47 (@mkmer - #81479) (aladdin_connect docs) 
 
 Release 2022.11.2 - November 8 
 
 Fix scrape scan interval (@epenet - #81763) (scrape docs) 
 Fix ignored upnp discoveries not being matched when device changes its unique identifier (@StevenLooman - #81240) (upnp docs) 
 Align esphome ble client notify behavior to match BlueZ (@bdraco - #81463) (esphome docs) 
 Bump nexia to 2.0.6 (@bdraco - #81474) (nexia docs) 
 Bump oralb-ble to 0.10.1 (@bdraco - #81491) (oralb docs) (dependency) 
 Fix lifx.set_state so it works with kelvin and color_temp_kelvin and color names (@Djelibeybi - #81515) (lifx docs) 
 Add additional coverage for adding multiple elkm1 instances (@bdraco - #81528) (elkm1 docs) 
 Bump oralb-ble to 0.10.2 (@bdraco - #81537) (oralb docs) (dependency) 
 Bump pyairvisual to 2022.11.1 (@bachya - #81556) (airvisual docs) 
 Bump gcal_sync to 4.0.0 (@allenporter - #81562) (google docs) (dependency) 
 Fix Shelly Plus HT missing battery entity (@thecode - #81564) (shelly docs) 
 Fix watermeter issue for old P1 Monitor versions (@klaasnicolaas - #81570) (p1_monitor docs) (dependency) 
 Bump pylitterbot to 2022.11.0 (@natekspencer - #81572) (litterrobot docs) (dependency) 
 Fix HomeKit reset accessory procedure (@bdraco - #81573) (homekit docs) 
 Ensure HomeKit temperature controls appear before fan controls on thermostat accessories (@bdraco - #81586) (homekit docs) 
 Bump ZHA quirks and associated changes (@dmulcahey - #81587) (zha docs) (dependency) 
 Always use Celsius in Shelly integration, part 2 (@bieniu - #81602) (shelly docs) 
 Bump PyXiaomiGateway to 0.14.3 (@syssi - #81603) (dependency) 
 Fix invalid min and max color temp in bad ZHA light devices (@dmulcahey - #81604) (zha docs) 
 Fix repeating SSDP errors by checking address scope_ids and proper hostname (@StevenLooman - #81611) (upnp docs) (yeelight docs) (dlna_dmr docs) (samsungtv docs) (ssdp docs) (dlna_dms docs) (dependency) 
 Bump plugwise to v0.25.7 (@bouwew - #81612) (plugwise docs) (dependency) 
 Fix homekit bridge iid allocations (@bdraco - #81613) (homekit docs) 
 Bump venstarcolortouch to 0.19 to fix API rev 3 devices (@garbled1 - #81614) 
 Ignore unspecified addresses from zeroconf (@bdraco - #81620) (zeroconf docs) 
 Bump aiohomekit to 2.2.16 (@bdraco - #81621) (homekit_controller docs) (dependency) 
 Bump oralb-ble to 0.13.0 (@bdraco - #81622) (oralb docs) (dependency) 
 Fix creating multiple ElkM1 systems with TLS 1.2 (@bdraco - #81627) (elkm1 docs) 
 Fix situation where deCONZ sensor platform setup would fail (@Kane610 - #81629) (deconz docs) 
 Add missing h2 dep to iaqualink (@bdraco - #81630) (iaqualink docs) 
 Bump pyatmo to 7.4.0 (@cgtobi - #81636) (netatmo docs) 
 Fix Bravia TV options flow when device is off (@Drafteed - #81644) (braviatv docs) 
 Bump aiohomekit to 2.2.17 (@bdraco - #81657) (homekit_controller docs) (dependency) 
 Fix missing RainMachine restrictions switches (@bachya - #81673) (rainmachine docs) 
 Bump bluetooth-adapters to 0.7.0 (@bdraco - #81576) (bluetooth docs) (dependency) 
 Bump bleak-retry-connector to 2.8.3 (@bdraco - #81675) (bluetooth docs) (dependency) 
 Bump aioesphomeapi to 11.4.3 (@bdraco - #81676) (esphome docs) (dependency) 
 Bump bleak to 0.19.2 (@bdraco - #81688) (bluetooth docs) (dependency) 
 Restore negative values for shelly power factors (@chemelli74 - #81689) (shelly docs) 
 Bump aiohomekit to 2.2.18 (@bdraco - #81693) (homekit_controller docs) (dependency) 
 Bump aiopyarr to 22.11.0 (@tkdrob - #81694) (sonarr docs) (radarr docs) (lidarr docs) (dependency) 
 Fix flapping logbook tests (@bdraco - #81695) (logbook docs) 
 Adjust REST schema validation (@epenet - #81723) (rest docs) 
 Fix check for duplicate config entry reauth when context is passed or augmented (@bdraco - #81753) 
 Use more efficient async_progress_by_handler call in async_start_reauth (@bdraco - #81757) 
 Partially revert google local sync for search cases (@allenporter - #81761) (google docs) 
 Fix rest import (@epenet - #81784) (rest docs) 
 Update frontend to 20221108.0 (@bramkragten - #81787) (frontend docs) 
 Retry tibber setup (@ztamas83 - #81785) (tibber docs) 
 Fix off by one in HomeKit iid allocator (@bdraco - #81793) (homekit docs) 
 
 Release 2022.11.3 - November 16 
 
 Fix UniFi block client switches on 2022.11.2 (@Kane610 - #81884) (unifi docs) 
 Fix Z-Wave JS cover stop support (@Yukon - #78723) (zwave_js docs) 
 Fix instability with HomeKit trigger accessories (@bdraco - #80703) (homekit docs) 
 Fix accelerator sensor in fibaro integration (@rappenze - #81237) (fibaro docs) 
 Fix Fully Kiosk start application service field (@chpego - #81738) (fully_kiosk docs) 
 Fix ibeacon source attribute not being updated (@multigcs - #81740) (ibeacon docs) 
 Upgrade huawei-lte-api to 1.6.7, fixes empty username issues (@scop - #81751) (huawei_lte docs) (dependency) 
 Change life360 timeouts &amp; retries (@pnbruckner - #81799) (life360 docs) 
 Fix switchbot not becoming available again after unavailable (@bdraco - #81822) (switchbot docs) 
 Fix statistic_during_period for data with holes (@emontnemery - #81847) (recorder docs) 
 Fix rest schema (@epenet - #81857) (rest docs) 
 Bump aiohomekit to 2.2.19 (@bdraco - #81867) (homekit_controller docs) (dependency) 
 Fix homekit_controller climate entity not becoming active when changing modes (@Jc2k - #81868) (homekit_controller docs) 
 Bump oralb-ble to 0.14.1 (@bdraco - #81869) (oralb docs) (dependency) 
 Bump gcal_sync to 4.0.1 to fix Google Calendar config flow (@allenporter - #81873) (google docs) (dependency) 
 Fix ZHA configuration APIs (@dmulcahey - #81874) (zha docs) 
 Revert google calendar back to old API for free/busy readers (@allenporter - #81894) (google docs) 
 Fix bluetooth adapters with missing firmware patch files not being discovered (@bdraco - #81926) (bluetooth docs) 
 Bump aioridwell to 2022.11.0 (@bachya - #81929) (ridwell docs) (dependency) 
 Fix esphome bleak client seeing disconnects too late (@bdraco - #81932) (esphome docs) 
 Bump bleak-retry-connector to 2.8.4 (@bdraco - #81937) (bluetooth docs) (dependency) 
 Bump PySwitchbot to 0.20.3 (@bdraco - #81938) (switchbot docs) (dependency) 
 Fix ONVIF subscription errors (@dgomes - #81965) (onvif docs) 
 Bump ZHA quirks lib to 0.0.86 (@dmulcahey - #81966) (zha docs) (dependency) 
 Increasing device usage update interval for Flume (@jeeftor - #81968) (flume docs) 
 Bump oralb-ble to 0.14.2 (@bdraco - #81969) (oralb docs) (dependency) 
 Bump gcal_sync 4.0.2 (@allenporter - #82017) (google docs) 
 Bump airthings-ble to 0.5.3 (@vincegio - #82033) (airthings_ble docs) (dependency) 
 Make sure the config_flow key is set for brands (@bdraco - #82038) 
 Bump pySwitchbot to 0.20.4 (@bdraco - #82055) (switchbot docs) (dependency) 
 Restore color_temp handling for lifx.set_state (@Djelibeybi - #82067) (lifx docs) 
 Bump growattServer to 1.2.4 (@muppet3000 - #82071) (growatt_server docs) 
 Bump PySwitchbot to 0.20.5 (@bdraco - #82099) (switchbot docs) (dependency) 
 Update sqlalchemy to 1.4.44 (@frenck - #82129) (recorder docs) (sql docs) (dependency) 
 Always update attributes on an update for MQTT update (@jbouwh - #82139) (mqtt docs) 
 Add missing strings in Onvif (@tkdrob - #82141) (onvif docs) 
 Fix Google Sheets formula input (@tkdrob - #82157) (google_sheets docs) 
 Fix Growatt incorrect energy dashboard values for grid import (@muppet3000 - #82163) (growatt_server docs) 
 Fix static version in homekit tests (@bdraco - #82201) (homekit docs) 
 Fix missing await in nexia emergency heat (@bdraco - #82207) (nexia docs) 
 
 Release 2022.11.4 - November 20 
 
 Fix moving average for 0 values (@daanbeverdam - #80476) (filter docs) 
 Solve Modbus reload issue (@janiversen - #82253) (modbus docs) 
 Add kilo watts unit mapping for nibe_heatpump (@elupus - #82284) (nibe_heatpump docs) 
 Bump regenmaschine to 2022.11.0 (@bachya - #82337) (rainmachine docs) 
 Bump pysma to version 0.7.3 (@rklomp - #82343) (sma docs) 
 Bump flux_led to 0.28.34 (@bdraco - #82347) (flux_led docs) 
 Fix invalid configuration_url in Netatmo (@mib1185 - #82372) (netatmo docs) 
 Bump PyViCare to 2.19.0 (@TheJulianJES - #82381) (vicare docs) 
 Bump bleak-retry-connector to 2.8.5 (@bdraco - #82387) (bluetooth docs) 
 Update xknx to 1.2.1 (@marvin-w - #82404) (knx docs) 
 Attempt to fix occasional Flo timeouts (@dmulcahey - #82408) (flo docs) 
 Prevent powerwall from switching addresses if its online (@bdraco - #82410) (powerwall docs) 
 
 Release 2022.11.5 - November 30 
 
 Bump pyotgw to 2.1.3 (@mvn23 - #82430) 
 Bump ZHA dependencies (@puddly - #82509) 
 Ensure esphome client tasks await cancelation (@bdraco - #82547) 
 Bump gcal_sync to 4.0.3 (@allenporter - #82606) 
 Fix iBeacons with infrequent random mac address changes unexpectedly going unavailable (@bdraco - #82668) 
 Fix homekit controller triggers not attaching when integration is setup after startup (@bdraco - #82717) 
 Bump pysensibo to 1.0.21 (@gjohansson-ST - #82023) 
 Bump pysensibo to 1.0.22 (@gjohansson-ST - #82738) 
 Update pyTibber to 0.26.1 (@Danielhiversen - #82787) 
 Add missing SimpliSafe keypad battery sensor (@bachya - #82797) 
 Add missing SimpliSafe alarm states (@bachya - #82813) 
 Bump simplisafe-python to 2022.11.2 (@bachya - #82943) 
 
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
 Below is a listing of the breaking change for this release, per subject or
integration. Click on one of those to read more about the breaking change
for that specific item. 

 
   
    
      Unit: Revolutions per minute (rpm) 
       
      
      
       
    
     
 Multiple integrations provide sensors with the revolutions per minute unit.
Two units have been used throughout Home Assistant to indicate this:
RPM and rpm. 
 This release standardizes all integrations to use the lowercase rpm variant.
The following integrations have been adjusted: 
 
 Big Ass Fans 
 Danfoss Air 
 Glances 
 System Bridge 
 Universal Devices ISY994 
 Vallox 
 
 Home Assistant automatically handles this change of units. However, if you
record history externally (for example, using InfluxDB), you might need to
adjust to this change. 
 (@epenet - #79986 #79987 #79988 #79989 #79990 #79992) 
 
   
 

 
   
    
      Android IP Webcam 
       
      
      
       
    
     
 The previously deprecated YAML configuration of the Android IP Webcam
integration has been removed. 
 Android IP Webcam is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files. 
 (@engrbm87 - #80875) (documentation) 
 
   
 

 
   
    
      Anthem A/V Receivers 
       
      
      
       
    
     
 The previously deprecated YAML configuration of the Anthem A/V Receivers
integration has been removed. 
 Anthem A/V Receivers are now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files. 
 (@gjohansson-ST - #79931) (documentation) 
 
   
 

 
   
    
      APC UPS Daemon 
       
      
      
       
    
     
 The UPS Last Self Test sensor is renamed to UPS Self Test Result and
a new UPS Last Self Test sensor reports time instead of the result. 
 You may need to replace sensor.ups_last_self_test with
sensor.ups_self_test_result in automations and scripts
referencing the sensor.ups_last_self_test entity. 
 (@definitio - #80773) (documentation) 
 
   
 

 
   
    
      Brother Printer 
       
      
      
       
    
     
 The counter and remaining pages attributes of the sensors
drum remaining life, black drum remaining life, cyan drum remaining life,
magenta drum remaining life, and yellow drum remaining life have been
migrated to their own dedicated sensor entities. 
 If you are using these attributes in your automation or script, you will need
to adopt those for this change. 
 (@bieniu - #79932) (documentation) 
 
   
 

 
   
    
      ClickSend TTS 
       
      
      
       
    
     
 
 The caller option from ClickSend TTS notify service has been removed, as
it prevented calls from being actually made. 
 The default name has been changed to clicksend_tts instead of an empty name; otherwise
the service would appear as notify.notify. Now it will, by default, appear
as notify.clicksend_tts. This might impact your automation or script. 
 The recipient���s phone number now must match E.164 format. 
 
 (@CharlieBailly - #76669) (documentation) 
 
   
 

 
   
    
      Coinbase 
       
      
      
       
    
     
 The previously deprecated YAML configuration of the Coinbase
integration has been removed. 
 Coinbase is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files. 
 (@epenet - #80084) (documentation) 
 
   
 

 
   
    
      Dark Sky 
       
      
      
       
    
     
 When Darksky is configured to report in US units, the unit of measurement
for precipitation intensity has been corrected from inches to inches per hour. 
 (@epenet - #80611) (documentation) 
 
   
 

 
   
    
      ecobee 
       
      
      
       
    
     
 Setting up the notify platform of the ecobee integration by a platform section
using YAML configuration is no longer supported. The ecobee platform section
under notify: can be safely removed from your YAML configuration files. 
 The thermostat index can be specified by using the target parameter in the
notify service call instead. 
 (@kevdliu - #78558) (documentation) 
 
   
 

 
   
    
      HERE Travel Time 
       
      
      
       
    
     
 The route sensor has been removed, as it could contain more data than
the Home Assistant state engine is able to hold. Make sure you update any
automations or scripts that use this sensor. 
 (@eifinger - #79211) (documentation) 
 
   
 

 
   
    
      HomeKit 
       
      
      
       
    
     
 HomeKit instance ID assignments are now stable between restarts to comply
with the HomeKit specifications. This prevents accessories from losing
track of services between restarts, and improves stability with using
Siri especially with apple watches. 
 This change may dramatically improve the stability and re-sync times of
media_player entities (all), camera entities (all), fan entities (presets),
remote entities (activity ones), switch entities (power strips)
triggers (all) between restarts which was especially
apparent when the home has many accessories. 
 Because the assignments were previously unstable, it may be necessary to make
a one-time adjustment of accessory room assignments, favorites,
or re-pair camera accessories after upgrading. 
 (@bdraco - #79913) (documentation) 
 
   
 

 
   
    
      HomeKit Controller 
       
      
      
       
    
     
 As older versions did not correctly set service identifier values, it may be
necessary to unpair and re-pair some BLE devices or to delete duplicate
entities manually. 
 If the service identifiers were loaded incorrectly when the device was paired
with an older version, operations might raise StopIteration or RuntimeError
errors. You can correct those by deleting the integration for that device,
and doing a one-time re-pairing. 
 (@bdraco - #80798) (documentation) 
 
   
 

 
   
    
      Hunter Douglas PowerView 
       
      
      
       
    
     
 This change ceases creating battery sensors for hardwired shades.
Existing sensor entities need to be manually deleted. 
 (@kingy444 - #81013) (documentation) 
 
   
 

 
   
    
      IntelliFire 
       
      
      
       
    
     
 The backing unit and the API
of the device itself uses 0-4 as a flame height setting. Through discussion
on the forums the community has decided 1-5 is a much more logical setting
for flame height, and accordingly, this has been implemented. 
 If you set the flame height using automations or scripts, you will  need to
adapt those to this change. 
 (@jeeftor - #79901) (documentation) 
 
   
 

 
   
    
      Logger 
       
      
      
       
    
     
 logger no longer changes the default log level of Home Assistant to debug
if used without a value for default. It
will now only change the default log level of Home Assistant from a
warning to something else if the default is explicitly specified. 
 If you do not specify default and want Home Assistant to have a
default log level of debug, you will need to add this to your YAML configuration: 
   logger:
  default: debug
   
 (@mdegat01 - #80033) (documentation) 
 
   
 

 
   
    
      Open Exchange Rates 
       
      
      
       
    
     
 The previously deprecated YAML configuration of the Open Exchange Rates
integration has been removed. 
 Open Exchange Rates is now configured via the UI, any existing YAML
configuration has been imported in previous releases and can now be safely
removed from your YAML configuration files. 
 (@gjohansson-ST - #79856) (documentation) 
 
   
 

 
   
    
      Scrape 
       
      
      
       
    
     
 Previously, scrape would return the last correct value if an HTTP request
for updating failed. This has been adjusted to now mark the sensor
as unavailable instead. 
 (@epenet - #80593) (documentation) 
 
   
 

 
   
    
      Templates (fan) 
       
      
      
       
    
     
 Template fans no longer change their state to on when set_percentage or
set_preset_mode is called when a value_template has been configured. 
 (@Petro31 - #75656) (documentation) 
 
   
 
 If you are a custom integration developer and want to learn about breaking
changes and new features available for your integration: Be sure to follow our
developer blog. The following are the most notable for this release: 
 
 Add new precipitation intensity units 
 Deprecate IMPERIAL_SYSTEM unit system and linked constants and properties 
 GitHub Commands for Code Owners 
 Introducing new unit enumerators 
 Introducing virtual integrations and differentiating hubs, devices, and services 
 
 All changes 
 Of course, there is a lot more in this release. You can find a list of
all changes made here: Full changelog for Home Assistant Core 2022.11 
"
link: "https://www.home-assistant.io/blog/2022/11/02/release-202211/"
category:
---
