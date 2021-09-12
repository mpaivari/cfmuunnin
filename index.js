const input=document.querySelector('#input');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const spanCels=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
    fahrenheit.textContent = fahAsteet;
 
    console.log('abcd');
  }
  
button.addEventListener('click', muunna);
