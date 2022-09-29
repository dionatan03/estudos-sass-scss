"use strict"

const btnEnviar = document.querySelector('.enviar');
const btnLimpar = document.querySelector('.limpar');

btnLimpar.addEventListener('click', () => {
    window.location.reload();
});

btnEnviar.addEventListener('click', () => {
    const ps = document.querySelectorAll('p');
    
    const styleBody = getComputedStyle(document.body);
    const styleBgColorBody = styleBody.backgroundColor;
    
    for (let p of ps) {
        p.style.backgroundColor = styleBgColorBody;
        p.style.color = '#fff';
        p.style.border = '5px solid red'
        p.style.textAlign = 'center'
    }
});