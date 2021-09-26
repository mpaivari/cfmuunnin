const input=document.querySelector('#asteet');
const muunnosCF=document.querySelector('input[id="radioCF"]');
const muunnosFC=document.querySelector('input[id="radioFC"]');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const celsius=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
    console.log(fahAsteet);
    
    if (muunnosFC.checked)  
    {
        fahrenheit.textContent = fahAsteet + ' °F';
        celsius.textContent = Math.round((fahAsteet-32)/1.8*100)/100 + ' °C';
    }   
    if (muunnosCF.checked)  
    {  
        fahrenheit.textContent = fahAsteet + ' °C';
        celsius.textContent = Math.round((fahAsteet*9/5)+32) + ' °F';  
    }
  }
  
button.addEventListener('click', muunna);
