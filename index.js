const input=document.querySelector('input');
const fahrenheit=document.querySelector('#fahrenheit');
const celsius=document.querySelector('#celsius');
const button =document.querySelector('button');

function muunna() {
    let syote = fahrenheitSyote.value;
    fahrenheitTuloste.textContent = syote;

    celsiusTuloste.textContent = syote;
  }
  
button.addEventListener('click', muunna);
