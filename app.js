let inp = document.querySelector('.emojiInp');
let voiceBtn = document.querySelector('.voice');
//let gen = document.querySelector('.generate');
let emojiOut = document.querySelector('.emojiOut');
let emojiData;


let emojimatch=[];

//webkitSpeechRecognition for Chrome or Safari and SpeechRecognition for other browsers 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

async function provokeTranslate(){
  let inpWords = inp.value.toLowerCase().split(/[\s,-]+/);
  await Translate(inpWords);
  emojiPrev(inpWords);
 
}

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  inp.value = transcript;
  provokeTranslate();
  
  
};

voiceBtn.addEventListener("click", () => {
  inp.value="";
  emojiOut.innerHTML="";
  recognition.start();
  
  
 
});


inp.addEventListener('input', ()=>{
  provokeTranslate();
})


//A promise to fetch your data
let fetchData = fetch('./app.json')
    .then((response)=>response.json())
    .catch((e)=>{console.log(e)});


//Function using the promise to access and work on emojiData fetched



async function Translate(inpWords) {
  emojiOut.innerHTML = "";  
  emojiData = await fetchData;

  await emojiPrev(inpWords);

  for (let i = 0; i < inpWords.length; i++) {
    const word = inpWords[i].toLowerCase();
    const match = emojimatch[i];

    if (match.length > 0) { 
      //Some match might still be empty so checking for length
      
      let newEmoji = document.createElement('div');
      newEmoji.classList.add('emoji');
      newEmoji.innerHTML = match[0];
      emojiOut.append(newEmoji);


      let prevPane = document.createElement('div');
      prevPane.classList.add('emojiPreview');
      prevPane.style.display = "none";  // hidden but will display later on hovering

      //The fist emoji is appended to the emojiOut,
      //Preview must contain the remaining matching emojis
      match.slice(1).forEach(emoji => {
        let altEmoji = document.createElement('div');
        altEmoji.classList.add('emoji');
        altEmoji.innerHTML = emoji;
        prevPane.append(altEmoji);

        altEmoji.addEventListener('click', ()=>{
          let temp= '';
          //swap the emojis,
          temp = altEmoji.innerText;
          altEmoji.innerText= newEmoji.innerText;
          newEmoji.innerText= temp;

        })
      });


      newEmoji.append(prevPane);

      //Adding event listeners for each of the words in inpWords

      // Displaying prevPane on hovering causes it to glitch, 
      //giving a bad user experience
      //Hence, displaying the preview Pane on click is a much better option
      newEmoji.addEventListener('click', () => {
        //toggling display of prevPane accordingly

        if(prevPane.style.display=="none"){
          prevPane.style.display = "inline";
        }

        else{
          prevPane.style.display = "none";
        }
        
      });


    }
  }
}


async function emojiPrev(inpWords){
  emojiData = await fetchData;
  // console.log(emojiData);
  

  for (let i = 0; i < inpWords.length; i++) {
    const word = inpWords[i].toLowerCase();  
    emojimatch[i] = [];

   
    for (let [key, value] of Object.entries(emojiData)) {
      value = value.map(word => word.toLowerCase());  

      
      if (value.includes(word)) {
        emojimatch[i].push(key);
      }
    }
  }

   
}


















    



