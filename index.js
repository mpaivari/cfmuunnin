const input=document.querySelector('input');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const spanCels=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
    
    console.log(fahAsteet);
    
  }
  
button.addEventListener('click', muunna);
