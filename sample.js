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

voiceBtn.addEventListener("click", async () => {
  inp.value="";
  emojiOut.innerHTML="";
 // recognition.start();
  
  
await fetch("http://127.0.0.1:5000/recognize_speech", {
  method: "POST"
})
.then(response => response.json())
.then(data => {
  if (data.recognized_text) {
      inp.value+=data.recognized_text;
  } else {
      alert("Not recognisable!");
  }
})
.catch(error => {
  alert("Error");
  console.log(error);
})


await provokeTranslate();
  
  
});


inp.addEventListener('input', ()=>{
  provokeTranslate();
})


//A promise to fetch your data
let fetchData = fetch('./app.json')
    .then((response)=>response.json())
    .catch((e)=>{console.log(e)});


//Function using the promise to acess and work on emojiData fetched

async function Translate(inpWords){
  emojiOut.innerHTML="";
  emojiData = await fetchData;
  // console.log(emojiData);

  for(let word of inpWords){
    for (let [key, value] of Object.entries(emojiData)) {

      value = value.map(word => word.toLowerCase());
      if(value.includes(word)){
          emojiOut.innerHTML+=`${key}`;
          break;
      }
    }
  }

};






    



