const input=document.querySelector('input');
const muunnosCF=document.querySelector('input[name="muunnosCF"]');
const muunnosFC=document.querySelector('input[name="muunnosFC"]');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const celsius=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
    console.log(fahAsteet);
    
    if (muunnosFC.checked)  
    {
        fahrenheit.textContent = fahAsteet;
        celsius.textContent = Math.round((fahAsteet-32)/1.8*100)/100;
    }   
    if (muunnosCF.checked)  
    {  
        fahrenheit.textContent = fahAsteet;
        celsius.textContent = Math.round((fahAsteet*9/5)+32);  
    }
  }
  
button.addEventListener('click', muunna);
