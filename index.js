const input=document.querySelector('input');
const fahrenheit=document.getElementById('#fahrenheit');
const celsius=document.querySelector('#celsius');
const button =document.querySelector('button');

function muunna() {
    fahAsteet = fahrenheit.textContent
    celAsteet = 2.5 * fahAsteet;

    fahrenheit.textContent = celAsteet; 
    console.log('abcd');
  }
  
button.addEventListener('click', muunna);
