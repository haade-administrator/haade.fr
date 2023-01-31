---
title: "Year of the Voice - Chapter 1 - Assist"
date: 2023-01-26 00:00:00 +0000
dateadded: 2023-01-31 09:17:01 +0100
description: " This year is Home Assistant���s year of the voice. It is our goal for 2023 to let users control Home Assistant in their own language. Today, one month into 2023, we start our first chapter. 
 At Home Assistant we believe that technology is meant to be played with, and projects should be usable as soon as possible. Together with the community we can then iterate and refine. That���s why today, we���re delivering a basic experience for 22 languages to interact with Home Assistant. Oh, and we are also releasing some fun stuff that we cooked up along the way. 
 To watch the video presentation of this blog post, including live demos, check the recording of our live stream. 
 Intentions 
 The core of a voice assistant is to be able to understand the intention of a spoken sentence. What is it the user wants to do? To extract these intentions we created our own template sentence matching format and intent recognizer named Hassil. 
 This new format is used by our new Home Assistant Intents project. The goal of this project is to collect home automation sentences in every possible language. Since it���s start a month ago, we have had 112 people contribute. The project now supports 22 languages and 14 more are in progress. 
 Assist 
 We have added a new feature to Home Assistant:  Assist. It allow users to use natural language to control Home Assistant. It is powered by Hassil and the sentences from the Home Assistant Intent project. 

 We want Assist to be as accessible to as many people as possible. To do this, we made it work without requiring extra hardware ��� just update to Home Assistant 2023.2 and you can start! Through a combination of smart algorithms combined with sheer brute force (we are collecting a lot of sentences), we have been able to make a system that works for most common sentences. Support for more powerful, AI-powered, intent recognizers might come in the future as an opt-in feature. 
 Assist is enabled by default in the Home Assistant 2023.2 release. Tap the new Assist icon  at the top right of the dashboard to use it. 
 Assist documentation. 

 Assist on Android Wear 
 We want to make it as easy as possible to use Assist. To enable this for Android users, we have added a new tile to the Android Wear app. A simple swipe from the clock face will show the assist button and allows you to send voice commands. 
 Assist on Android Wear documentation. 
 The new tile is currently available in the Android beta and will be part of the next Android release. 
  
 Assist via Siri and Apple Shortcuts 
 For Apple devices we have been able to create a fully hands-free experience by integrating with Siri. This is powered by a new Apple Shortcut action called Assist, which is part of the Home Assistant app. This shortcut action can also be manually triggered from your Mac taskbar, iPhone home screen or Apple Watch complication. We have two ready-made shortcuts that users can import from the documentation with a single tap to unlock these features. 
 Assist via Siri and Apple Shortcuts documentation. 
 The Assist shortcut will be available in the Mac and iOS beta channel today and will be part of the next release for iOS and Mac. 
  
 Custom Sentences 
 With Home Assistant we believe that every home is uniquely yours and that technology should adapt to you, not the other way around. That���s why we have architected Home Assistant to allow users to extensively customize their experience. Our Assist feature is no different. 
 
 Are you into Game of Thrones and want every response to be ���hodor���? 
 Want to turn on lights in rooms by saying ���Hocus pocus living room���? 
 Want to trigger your party mode script using a custom sentence? 
 
 Assist includes support for custom sentences, responses and intents, allowing you to achieve all of the above, and more. We���ve designed the custom sentence format in a way that it can be easily shared with the community. 
 Read the documentation on how to get started. 
 In a future release we���re planning on adding a user interface to customize and import sentences. 
 Custom Assist engines 
 By default Assist is powered by our own intent recognizer. It is local but it���s limited to controlling devices. Maybe you want to be able to ask more wide-range queries or you are looking for a conversational AI that will make up responses and present it as the truth. For such cases the Assist feature supports swapping out its engine that handles all Assist interactions. 
 The Home Assistant 2023.2 release includes two alternative Assist engines that you can enable: Google Assistant and OpenAI GPT-3. 
 The Google Assistant Assist engine is able to control your devices if you have linked up your Home Assistant instance to Google Assistant. 
 All ways to intereact with Assist will work, as they are not bound to the the Assist engine that is being used. So if you ever wanted to use Google Assistant on your HomePod, now you can ���� 
  
 The OpenAI GPT-3 Assist engine will process all your interactions using GPT-3, a sibling of the infamous ChatGPT. It is not able to control your house or help you automate your house. Anything you ask it may or may not be factually correct. But it can be fun! 
 In a future release we���re planning to make it possible to configure multiple Assist engines to handle interactions. 
 What���s next 
 For Year of the Voice - Chapter 1 we focused on building intent recognition into Home Assistant while relying on Google and Apple to do the hard parts (speech recognition). This allowed us the fastest path to get something to the community to play with. 
 We will continue collecting home automation sentences for all languages (anyone can help!). Updates will be included with every major release of Home Assistant. 
 Our next step is integrating Speech-to-Text and Text-to-Speech with Assist. We don���t have a timeline yet when that will be ready. Stay tuned! 
 Credits 
 A lot of people have worked very hard to make all of the above possible. 
 Technology:
Mike Hansen, Paulus Schoutsen, Daniel Shokouhi, Zac West, Rosemary Orchard, Tronikos 
 Language Leaders:
@AalianKhan, @Ahmed-farag36, @alpdmrel, @arunshekher, @auanasgheps, @benjaminlecouteux, @bluefoxlee, @cibernox, @cvladan, @davefx, @dinhchinh82, @dsimop, @duhow, @easterapps, @ErnestStaug, @fadamsen, @flexy2dd, @gabimarchidan, @haim-b, @halecivo, @HepoH3, @hertzg, @hristo-atanasov, @huusissa, @joaorgoncalves, @larsdunemark, @leranp, @LubosKadasi, @makstech, @mojikosu, @MTrab, @nagyrobi, @schizza, @Scorpoon, @skynetua, @spuljko, @tetele, @TheFes, @Uriziel01, @xraver, @zubir2k 
 Voice Community:
@Alexivia, @Atalonica, @AwesomeGuy000, @BossNeo, @CedricFinance, @Davidsoff, @EmilZackrisson, @FragMenthor, @InfiniteBed, @Kalma-House, @Licmeth, @Marlo461, @N3rdix, @Nismonx, @Robin-St, @TaQuangTien, @ThomDietrich, @TomaszPilch, @Wojciechgc, @alessandroias, @bemble, @berendhaan, @dejan2101, @dependabot[@bot], @dobromir-hristov, @frenck, @hugovsky, @iddiek, @jfisbein, @jharrvis, @jorclaret, @kamildoleglo, @kblin, @khymmera, @kroimon, @lellky, @ludeeus, @lukahra, @lunmay, @mardito, @martindybal, @mib1185, @michaelmior, @orrc, @pckahrs, @piitaya, @pmentis, @poltalashka, @rPonuganti, @rechin304, @relust, @rickydg, @rpochot, @rrakso, @rumbu13, @sanyatuning, @tasmin, @thecode, @waltlillyman, @witold-gren, @x15pa3ck15x, @yuvalabou 
"
link: "https://www.home-assistant.io/blog/2023/01/26/year-of-the-voice-chapter-1/"
category:
---
