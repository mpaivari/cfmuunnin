const input=document.querySelector('input');
const select=document.querySelector('#selectMuunnos');
const fahrenheit=document.querySelector('#fahrenheit');
const button =document.querySelector('button');
const celsius=document.querySelector('#celsius');

function muunna() {
    fahAsteet = input.value;
     
    console.log(select.value);
    
    if (select.value = 'FC')  
    {
      fahrenheit.textContent = fahAsteet;
      celsius.textContent = Math.round((fahAsteet-32)/1.8*100)/100;
    } else {
      fahrenheit.textContent = fahAsteet;
      celsius.textContent = Math.round((fahAsteet*9/5)+32);    
    }
  }
  
button.addEventListener('click', muunna);
