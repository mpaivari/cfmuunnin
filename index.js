const input=document.querySelector('input');
const radioMuunnos=document.querySelector('input[name="radioMuunnos"]');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const celsius=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
    console.log(fahAsteet + radioMuunnos.value);
    
    if (radioMuunnos.value = 'FC')  
    {
      fahrenheit.textContent = fahAsteet;
      celsius.textContent = Math.round((fahAsteet-32)/1.8*100)/100;
    }     
    if (radioMuunnos.value = 'CF')  
    {
      fahrenheit.textContent = fahAsteet;
      celsius.textContent = Math.round((fahAsteet*9/5)+32);    
    }
  }
  
button.addEventListener('click', muunna);
