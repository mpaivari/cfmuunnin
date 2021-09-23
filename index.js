const inputFah=document.querySelector('inputFah');
const inputCel=document.querySelector('inputCel');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const celsius=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
     
    console.log(fahAsteet);
    
    fahrenheit.textContent = fahAsteet;
    celsius.textContent = Math.round((fahAsteet-32)/1.8*100)/100;
  }
  
button.addEventListener('click', muunna);
