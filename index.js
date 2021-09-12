const input=document.querySelector('#input');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');

function muunna() {
    fahAsteet = input.value;
    fahrenheit.textContent = fahAsteet;
 
    celsius=document.querySelector('#celsius');
    celsius.textContent = fahAsteet;
    console.log('abcd');
  }
  
button.addEventListener('click', muunna);
