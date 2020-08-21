const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

// add an event listern to the burger
burger.addEventListener('click', ()=>{
    //check if it contains hidden class
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
});