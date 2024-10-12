# Emojify


## Problem Statement:
Develop a fun and interactive app where users input text, and it automatically translates the message into emoji-based sentences. The app will primarily use a predefined dictionary to map words or phrases to corresponding emojis. Users will also have the ability to tweak the emoji translations manually by selecting from a list of alternative emojis.

Because sometimes, the right emoji speaks louder than words!

Follow the steps below to complete this challenge:
Develop a simple user interface (UI) that allows users to input text (e.g., a sentence or phrase)
Create a predefined dictionary that maps common words or phrases to emojis
Once the user enters a sentence, break it down into individual words and replace the words that have corresponding emojis with the emojis
After the initial translation, allow users to manually tweak the suggested emojis by selecting from a list of alternative options
Also add a Voice-to-Emoji Translation with integrated voice recognition so that users can speak their sentences, and the app translates them into emojis in real-time. This will add a fun element to the app

## Languages/Frameworks Used:

HTML, CSS, Javascript


## NOTE:
- the main files are app.html , app.css, app.js and app.json
- app.json includes the emoji codes along with the words associated with them. This is just a initial sample json (with limited emojis) . Can be extended later on.
The other files in trial are:
- RecognitionSpeech.py: I tried using pyaudio to recognise speech and this is the python script for the same. Due to errors in achieving this, I switched to use WebKit Speech Recognition for the same.
  

## Installation steps:

- Clone this repository on your machine and open it
- Open app.html file to start Emojifying your sentences!
- Check out the video in video-link folder for a quick demo of the page

- One can also skip all of these and try out the Vercel Deployment to check out a quick demo of the page!

  
## Deployment on Vercel: 



## Features:

- Responsive Web Design which adjusts accordingly on all devices.
- Properly Aligned Styling
- Voice Recognition using WebKit Speech Recognition: Click on Start Speaking! button to enable voice capture and clearly speak out the sentence you wish to convert to emojis. (You can also retry until the input is correct according to you)



## Resources Used:
- WebKit Speech Recognition: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
- Emoji Data: https://unicode.org/emoji/charts/full-emoji-list.html
- HTML CSS reference: https://www.w3schools.com/
- JS reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript


## Experience Gained:

- 

