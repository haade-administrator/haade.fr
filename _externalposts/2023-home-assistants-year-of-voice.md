---
title: "2023 - Home Assistant's year of Voice"
date: 2022-12-20 00:00:00 +0000
dateadded: 2023-01-31 09:17:01 +0100
description: " TL;DR: It is our goal for 2023 to let users control Home Assistant in their own language. Mike Hansen, creator of Rhasspy, has joined Nabu Casa to lead this effort. We���re starting off by building a collection of intent matching sentences in every language. 
 Usually, the month of December is meant to reflect back. However, we already did that last month when we hosted the State of the Open Home 2022. We didn���t only reflect, we also announced our focus for next year: 2023 is going to be the year of voice. 
 It is our goal for 2023 to let users control Home Assistant in their own language. 
 It���s a big and bold goal, but achievable given the right constraints. The amount of work laid out for us can be summarised as follows: 

 
 Our #1 priority is supporting different languages. There are enough projects out there trying to create an English voice assistant. But for us, that just doesn���t cut it. People need to be able to speak in their own language, as that is the most accessible and only acceptable language for a voice assistant for the smart home. 

 To keep the amount of work ahead of us manageable, we���re going to limit the number of possible actions and focus on the basics of interacting with your smart home. No web searches, making calls, or voice games. And definitely no ���by the way���s! 
 We are going to start with a few actions and build up the language models around that. Home Assistant supports 62 different languages in its user interface. And it���s our goal to support all these languages with voice. We think that we can achieve that by leveraging Home Assistant���s strongest asset: our community. 
 Our history with voice assistants 
 If you follow the news, it might sound like voice assistants have failed. Amazon is set to lose $10 billion on Alexa this year and is planning layoffs. Google too, is reducing its support for Google Assistant as it���s trying to cut costs. The truth is that voice, as the next computing platform that drives billions of dollars of extra revenue, has failed. Instead, users mainly use their voice assistants to manage shopping lists, set timers, play music, and control their homes. Voice has failed being a source of revenue, it has not failed its users. 
 With Home Assistant we���ve always been interested in voice. We used to work with Snips back in the day, but they got acquired and shut down. We worked with Stanford on their Almond/Genie platform, but it is a research driven project that never got production ready. And yes, you can use Home Assistant to send all your data to the clouds of Google and Amazon to leverage their voice assistants, but you shouldn���t have to give up your privacy to turn on the lights by voice. 
 The most promising project out there is Rhasspy, created by Mike Hansen. A project that allows people to build their own local voice assistant, which can also tie into Home Assistant. Rhasspy stands out from other open source voice projects because Mike doesn���t focus on just English. Instead, his goal is to make it work for everyone. This is going great as Rhasspy supports already 16 different languages today. 
 With Home Assistant we want to make a privacy and locally focused smart home available to everyone. Mike���s approach with Rhasspy aligns with Home Assistant, and so we���re happy to announce that Mike has joined Nabu Casa to work full-time on voice in Home Assistant. 
 Iterating in the open 
 With Home Assistant we prefer to get the things we���re building in the user���s hands as early as possible. Even basic functionality allows users to find things that work and don���t work, allowing us to address the direction if needed. 
 A voice assistant has a lot of different parts: hot word detection, speech to text, intent recognition, intent execution, text to speech. Making each work in every language is a lot of work. The most important part is the intent recognition and intent execution. We need to be able to understand your commands and execute them. 
 We started gathering these command sentences in our new intents repository. It will soon power the existing conversation integration in Home Assistant, allowing you to use our app to write and say commands. 
 The conversation integration is exposed in Home Assistant via a service call and is also available via an API to external applications or scripts. This allows developers to experiment with sending commands from various sources, like a telegram chatbot. 
  
 How you can help 
 For each language we���re collecting sentences of commands that control your smart home in our intents repository. Each sentence will need to be annotated with its intention. 
 Take for example the sentence: Turn on the bedroom lights. Write it up like Turn on the {area} lights and it becomes a generic command to turn on all the lights in a specific area. Now we need to collect all the other variations too. 
 We���ve created a YAML-based format to declare and test these sentences. The next step is that we need you ���� 
 For each language we���re going to need one or more language leaders. Language leaders are responsible for reviewing the contributions in their language and making sure that they are grammatically correct. If you want to apply to be a language leader, join us in #devs_voice on Discord or open an issue in our intents repository. 
 We also need people that want to contribute sentences to their language to help build out our collection. See our intents repository on how to get started. 
"
link: "https://www.home-assistant.io/blog/2022/12/20/year-of-voice/"
category:
---
