'use strict';

const navbar=document.querySelector('.main');
const logo=document.querySelector('.logo');
window.addEventListener('scroll',function(e){
    const navbarpositioning=navbar.offsetTop;
    const windowScrollingposition=window.pageYOffset;
    if(windowScrollingposition>=navbarpositioning){
        navbar.classList.add('sticky');
        logo.classList.add('animation');
    }
    else{
        navbar.classList.remove('sticky');
        logo.classList.remove('animation');
    }
})