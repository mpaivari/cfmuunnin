const input=document.querySelector('#input');
const fahrenheit=document.querySelector('#fahrenheit');
const celsius=document.querySelector('#celsius');
const button =document.querySelector('button');

function muunna() {
    fahAsteet = input.value;
    fahrenheit.textContent = fahAsteet;

    celsius.textContent = fahAsteet;
    console.log('abcd');
  }
  
button.addEventListener('click', muunna);
