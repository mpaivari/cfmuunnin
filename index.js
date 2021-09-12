const input=document.querySelector('input');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const celsius=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
    
    console.log(fahAsteet);
    
    fahrenheit.textContent = fahAsteet;
    celsius.textContent = fahAsteet;
  }
  
button.addEventListener('click', muunna);
