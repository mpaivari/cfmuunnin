const input=document.querySelector('input');
const fahrenheit=document.querySelector('fahrenheit');
const celsius=document.querySelector('#celsius');
const button =document.querySelector('button');

function fahCelsius(fahAsteet) {
    let celsius = fahAsteet;
    
    celsius = 2.5  * celsius;

    fahrenheit.textContent = celsius;

    return celsius;
  }
  
button.addEventListener('click', muunna);
