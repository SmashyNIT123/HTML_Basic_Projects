let div = document.createElement('div');
div.id = 'container';
const h1 = document.createElement('h1');
h1.innerText = 'Otp Generator';
div.appendChild(h1);

const button = document.createElement('button');
button.id='btn';
button.innerHTML = 'Generate OTP';
const input = document.createElement('input');
input.id = 'otp';
input.type= 'number';
input.placeholder = 'Enter OTP';
div.appendChild(input);
div.appendChild(button);
document.body.appendChild(div);
//Interaction of otp

const button1 = document.getElementById('btn');
button1.addEventListener('click',function(){
    const number = Math.floor(Math.random()*1000000);
    const inputValue = document.getElementById('otp');
    const p = document.createElement('p');
    p.id='value';
    p.innerHTML = 'Generated OTP is :' + number;
    div.appendChild(p);
    
})

