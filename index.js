const input=document.querySelector('#input');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const celsius=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
    fahrenheit.textContent = fahAsteet;
 
    celsius.textContent = fahAsteet;
    console.log('abcd');
  }
  
button.addEventListener('click', muunna);
