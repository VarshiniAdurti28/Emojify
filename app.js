let inp = document.querySelector('.emojiInp');
let voiceBtn = document.querySelector('.voice');
//let gen = document.querySelector('.generate');
let emojiOut = document.querySelector('.emojiOut');
let emojiData;

//webkitSpeechRecognition for Chrome or Safari and SpeechRecognition for other browsers 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function provokeTranslate(){
  let inpWords = inp.value.toLowerCase().split(/[\s,-]+/);
  Translate(inpWords);
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


//Function using the promise to acess and work on emojiData fetched


let emojiMatches= {};

async function Translate(inpWords){
  emojiOut.innerHTML="";
  emojiData = await fetchData;
  // console.log(emojiData);

  emojiMatches={};

  for(let word of inpWords){
    let count =0;
    emojiMatches[word] =[];
    for (let [key, value] of Object.entries(emojiData)) {
      
      
      value = value.map(word => word.toLowerCase());
      if(value.includes(word)){
          count++;
          let newEmoji = document.createElement('div');
          newEmoji.classList.add('emoji');
          newEmoji.innerHTML= `${key}`;

          if(count==1){
            
            emojiOut.append(newEmoji);
          }
      
          emojiMatches[word].push(key);
      }

    
    }
  }



  await emojiChange();







};


function emojiChange(){
  console.log(emojiMatches);
}










    



