const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const imgIndex = document.querySelector('.bloc-modale img');

if(window.matchMedia("(min-width: 850px)").matches){ /* au dessus de 850px, on autorise le fait de cliquer sur img, sinon false */ /* matchMedia sert a faire du responsive en js */
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
           imgIndex.src= `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`; 
           modaleEquipement.classList.add('active-modale');
        })
    })
    modaleEquipement.addEventListener('click', () =>{
       modaleEquipement.classList.remove('active-modale'); 
    })
}


const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 30) {
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }
})
