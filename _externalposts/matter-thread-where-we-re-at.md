---
title: "Matter & Thread - where we---re at"
date: 2023-02-08 00:00:00 +0000
dateadded: 2023-02-09 21:16:49 +0100
description: "<p>A lot is happening in Home Assistant around Matter and Thread. It can be hard to keep track of it all, so we wanted to take a moment to write an update on the current state, and what we’re planning next.</p>
<p>Summary:</p>
<ul>
<li>Matter works, including Thread devices via Thread border routers from Apple and Google.</li>
<li>The Thread border router in Home Assistant is operational but not integrated until the next release, Home Assistant 2023.3.</li>
<li>We’ve expanded the documentation for Matter and Thread to cover most asked questions and include videos on how to add Matter devices to Home Assistant.</li>
<li>Users using a <a href="http://www.home-assistant.io/yellow">Home Assistant Yellow</a> hub can enable an experimental Thread border router.</li>
<li>Users on other systems can get a Thread Border Router using a <a href="http://www.home-assistant.io/skyconnect">Home Assistant SkyConnect</a>.</li>
<li>Announcing <a href="https://github.com/NabuCasa/sl-web-tools">SL Web Tools</a>. It allows users to use their browser to update Zigbee/Thread sticks based on SiLabs chips, like the Home Assistant SkyConnect.</li>
<li>We’re open sourcing our <a href="https://github.com/NabuCasa/silabs-firmware-builder">automated build scripts</a> to create reproducible firmware builds for Zigbee/Thread sticks based on SiLabs chips.</li>
</ul>
<p><lite-youtube videoid="8y79Kq3QfCQ" videotitle="Add Matter device via iOS app in Home Assistant"></lite-youtube></p>
<h2>Matter</h2>
<p><a href="http://www.home-assistant.io/integrations/matter">Matter</a> is a new smart home standard which works locally. Its first release was at the end of last year, and is in the process of being adopted throughout the industry. We’ve been working hard on making it work with Home Assistant.</p>
<p>Today Home Assistant can control the basic operation of most Matter devices. You can add both Wi-Fi and Thread based devices, and the most common device types work. Matter bridges do not work yet – this will be added in Home Assistant 2023.3.</p>
<!--more-->
<p>The Matter implementation in Home Assistant is built on-top of the open source Matter SDK developed by members of the Connectivity Standards Alliance (CSA). This is the same SDK that powers Matter for Google and Apple products. As a member of this alliance, we are collaborating to further improve this Matter SDK making it a solid base for our Matter support.</p>
<p>Together with this blog post, we’ve released a big update to <a href="http://www.home-assistant.io/integrations/matter">our Matter documentation</a>. We have added instructions with accompanying videos on how to pair Matter devices with Home Assistant and how to share Matter devices from Apple Home/Google Home to Home Assistant.</p>
<p><lite-youtube videoid="-B4WWevd2JI" videotitle="Share Matter device from Google Home to Home Assistant"></lite-youtube></p>
<h2>Thread</h2>
<p><a href="http://www.home-assistant.io/integrations/thread">Thread</a> is a low-power mesh networking standard which allows users to connect their devices within a home network. It uses the same RF technology as Zigbee but provides IP connectivity similar to Wi-Fi. Matter supports Thread as a connectivity option for low-power and battery-operated devices.</p>
<p>Together with this blog post, we’ve released an update to <a href="http://www.home-assistant.io/integrations/thread">our Thread documentation</a>. We explain the different parts that make up a Thread network and how you can create one at home.</p>
<p class='img'>
<img src='http://www.home-assistant.io/images/blog/2023-02-08-state-of-matter-and-thread/android-thread.png' alt='Screenshot of a Google prompt if Home Assistant can access network credentials.'>
Google Android asks if you want to share their Google Thread credentials with Home Assistant.
</p>
<p>As users acquire more products with Thread in their home, they might end up with multiple Thread networks. Since a Thread device can only communicate with a single Thread network, it is important to be able to unify your Thread networks.</p>
<p>The goal of the upcoming Home Assistant Thread panel is to allow you to manage your Thread networks and help you to merge them into a single one. This is done in collaboration with the Home Assistant Companion apps, allowing us to synchronize Thread networks between Apple/Google and Home Assistant.</p>
<p>We’ve created a mockup of this panel that you can <a href="https://www.figma.com/proto/DDz0MNwzzxjJdeEHCamQi1/Thread?node-id=68:2863&amp;scaling=scale-down&amp;page-id=68:2862&amp;starting-point-node-id=68:2863">try out here</a>.</p>
<p class='img'>
<a href="https://www.figma.com/proto/DDz0MNwzzxjJdeEHCamQi1/Thread?node-id=68:2863&scaling=scale-down&page-id=68:2862&starting-point-node-id=68:2863" target="_blank"><img src='http://www.home-assistant.io/images/blog/2023-02-08-state-of-matter-and-thread/thread-mockup.png' alt='Screenshot of a Thread panel mockup.'></a>
Screenshot of the mockup for the Thread panel. <a href="https://www.figma.com/proto/DDz0MNwzzxjJdeEHCamQi1/Thread?node-id=68:2863&scaling=scale-down&page-id=68:2862&starting-point-node-id=68:2863" target="_blank">Open mockup</a>
</p>
<h2>Hardware to use Thread &amp; Matter</h2>
<p>Both Matter and Thread are technologies that are entering mainstream markets. There are a lot of moving parts in both technologies. We’ve been relying heavily on the work done by Google, Apple, and other members of the CSA to make these technologies accessible to Home Assistant users (thanks!).</p>
<p>Google and Apple updated their products to support Matter and Thread. However, it is important that we can operate independently. Home Assistant Yellow and Home Assistant SkyConnect include radio chips that are capable of running Zigbee and Thread at the same time. We are working on making this multiprotocol support available to all Home Assistant users.</p>
<h3>Home Assistant Yellow</h3>
<p><a href="http://www.home-assistant.io/yellow">Home Assistant Yellow</a> is our take on a perfect home automation hub. It’s powered by a Raspberry Pi Compute Module 4 (CM4), which you can upgrade if you want more memory. And if you run out of storage, it has space to plug in a hard drive. <a href="https://yellow.home-assistant.io/documentation/">And it’s open hardware.</a></p>
<p class='img'>
<img src='http://www.home-assistant.io/images/blog/2021-09-home-assistant-yellow/overview.png' alt='Overview of Home Assistant Yellow features.'>
</p>
<p>For radio connectivity, it includes a module by Silicon Labs, which is set up out of the box, to provide Zigbee. With the latest Home Assistant 2023.2 release, it is possible to turn your Home Assistant Yellow into a Thread border router. This can be done by enabling our experimental multiprotocol support in <a href='https://my.home-assistant.io/redirect/hardware' class='my' target='_blank'>Settings -&gt; Hardware</a> and by clicking Configure.</p>
<p>Currently, it is not possible to disable multiprotocol support once enabled. We will be offering a way to disable multiprotocol support soon, allowing users to rollback if they run into issues.</p>
<p>The Home Assistant Yellow was originally crowd funded in October 2021. We’ve been busy with production and last month have fulfilled all original backers and most of the pre-orders.</p>
<p>That’s why today, we’re happy to announce that RaspberryPi.dk will be our first distributor, outside of Crowd Supply, to start selling the Home Assistant Yellow. They have already been produced and are currently on a boat on their way to them. All variants can be <a href="https://raspberrypi.dk/en/?s=home+assistant+yellow&amp;post_type=product">pre-ordered on their website</a>.</p>
<p>More distributors will follow as soon as the chip shortage allows!</p>
<h3>Home Assistant SkyConnect</h3>
<p>Home Assistant is about choice. You’re not limited to running it on official hardware, you can bring your own. In fact, Raspberry Pi devices are by far the most popular platform to run Home Assistant on, but there is a catch: they lack any smart home radio connectivity.</p>
<p>We created the <a href="http://www.home-assistant.io/skyconnect">Home Assistant SkyConnect</a> to provide the missing smart home connectivity. It contains a chip from the same family as the Home Assistant Yellow. It is set out of the box to provide Zigbee. With the latest Home Assistant 2023.2 and when using Home Assistant OS, it is possible to turn your Home Assistant SkyConnect into a Thread border router. This can be done by enabling our experimental multiprotocol support in <a href='https://my.home-assistant.io/redirect/hardware' class='my' target='_blank'>Settings -&gt; Hardware</a> and by clicking Configure.</p>
<p class='img'>
<img src='http://www.home-assistant.io/images/skyconnect/skyconnect_isometric.png' alt='Picture of a Home Assistant SkyConnect.'>
</p>
<p>Home Assistant SkyConnect was introduced at the end of 2022 via our distributor network (hit “buy” on <a href="http://www.home-assistant.io/skyconnect">our website</a>). Many distributors sold out right away but most should be receiving new stock soon.</p>
<p>Together with today’s blog post, we’ve pushed a big update to <a href="https://skyconnect.home-assistant.io">the SkyConnect documentation website</a>, including tutorials on how to migrate from a different Zigbee stick.</p>
<h2>SiLabs multi-flasher &amp; SL Web Tools</h2>
<p>It’s our mission to build the Open Home: a smart home that offers privacy, choice, and durability. Part of our efforts is to build tooling that helps other creators to make projects and products to help further the Open Home cause.</p>
<p>As part of this effort, two years ago, we built ESP Web Tools. It revolutionized the DIY firmware world by allowing any ESP32/ESP8266 project to offer an easy web installer on their homepage, allowing users to get started directly from their browser. It has been adopted by all the great projects, including <a href="https://tasmota.github.io/install/">Tasmota</a>, <a href="https://install.wled.me/">WLED</a>, and <a href="https://espresense.com/firmware">ESPresense</a>. Ever since the introduction of ESP Web Tools, we have wanted to expand this to more devices.</p>
<p>Today we’re announcing <a href="https://github.com/NabuCasa/sl-web-tools">SL Web Tools</a>. It allows users to manage the firmware on Zigbee/Thread sticks using SiLabs chips directly from their browser, no terminals or compilation necessary. This allows any creator to offer easy firmware updates to their users and make experimental updates available to test bug fixes quickly.</p>
<p>To see it in action, SL Web Tools has been added to <a href="https://skyconnect.home-assistant.io">the Home Assistant SkyConnect documentation</a>.</p>
<p>SL Web Tools is powered by our new open source Python package <a href="https://github.com/NabuCasa/universal-silabs-flasher"><code>silabs-universal-flasher</code></a>. We run this in the browser using <a href="https://pyodide.org/en/stable/">Pyodide</a>.</p>
<p><lite-youtube videoid="-88K23e8XYw" videotitle="SL Web Tools: upgrading Zigbee firmware in the browser"></lite-youtube></p>
<h2>Building firmware for Silicon Labs chips</h2>
<p>It can be a pain to compile firmware for SiLabs chips. It’s hard to track different versions, your patch sets, and different chips. We’re fans of automation, so we have created an automated build system to create reproducible firmware builds for the Home Assistant Yellow and Home Assistant SkyConnect.</p>
<p>We’re open sourcing this to make it easier for other creators to provide their users with up-to-date firmware. In combination with SL Web Tools, we offer a complete package that empowers other creators to provide their users with the latest firmware updates.</p>
<p><a href="https://github.com/NabuCasa/silabs-firmware-builder">Find the repository on GitHub.</a></p>
"
link: "https://www.home-assistant.io/blog/2023/02/08/state-of-matter-and-thread/"
category:
---
