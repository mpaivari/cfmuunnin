const input=document.querySelector('input');
const radioMuunnos=document.querySelector('input[name="radioMuunnos"]');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const celsius=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
    
    if (radioMuunnos.value = 'FC')  
    {
       console.log(radioMuunnos.value);
      fahrenheit.textContent = fahAsteet;
      celsius.textContent = Math.round((fahAsteet-32)/1.8*100)/100;
    } else {
        console.log(radioMuunnos.value);
      fahrenheit.textContent = fahAsteet;
      celsius.textContent = Math.round((fahAsteet*9/5)+32);    
    }
  }
  
button.addEventListener('click', muunna);
