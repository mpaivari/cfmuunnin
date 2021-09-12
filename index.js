const input=document.querySelector('#input');
const spanFahr=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const spanCels=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
    spanFahr.textContent = fahAsteet;
 
    console.log('abcd');
  }
  
button.addEventListener('click', muunna);
