const adviceId = document.getElementById('advice-id')
const adviceText = document.getElementById('advice')
const resetBtn = document.getElementById('dice')
let data = []



resetBtn.addEventListener("click", function(){     
      loadData();
})

async function getAdvice() {    
      
      const response = await fetch('https://api.adviceslip.com/advice');      
      
       checkFetch(response);
   
     return  data = await response.json(); 
     
}

let checkFetch = function(response) {
    if(!response.ok){
       
        throw new Error( `${response.statusText} - ${response.url}`)  
    } 
}

document.addEventListener('DOMContentLoaded', loadData());

async function loadData() {
    try {
     data = await getAdvice();
   } catch (e) {
    console.dir(e)
    getErrMessage();   
   }
    
   try {
    adviceId.innerHTML = `Advice #${data.slip.id}`;
   } catch(e) {
    console.dir(e)
    getErrMessage();
   }
   
   try {
    adviceText.innerHTML = `<h1>"${data.slip.advice}"</h1>`;
   } catch (e) {
    console.dir(e)
    getErrMessage();
   }   
}



function getErrMessage() {
    adviceText.innerText ='Whoops! Something went wrong 😕'
}

