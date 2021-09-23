const input=document.querySelector('input');
const radioMuunnos=document.querySelector('input[name="radioMuunnos"]:checked');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const celsius=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
    console.log(fahAsteet);
    
    if (radioMuunnos.value = 'FC')  
    {
       console.log(radioMuunnos.value);
      fahrenheit.textContent = fahAsteet;
      celsius.textContent = Math.round((fahAsteet-32)/1.8*100)/100;
    }     
    if (radioMuunnos.value = 'CF')  
    {
        console.log(radioMuunnos.value);
      fahrenheit.textContent = fahAsteet;
      celsius.textContent = Math.round((fahAsteet*9/5)+32);    
    }
  }
  
button.addEventListener('click', muunna);
