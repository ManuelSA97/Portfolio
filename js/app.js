

// Abrir y cerrar menu "hamburguesa"
const nav = document.querySelector('#nav');
const abrir = document.querySelector('#open-icon');
const cerrar = document.querySelector('#close-icon');
const btnAbrir = document.querySelector('#open-icon')

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
    btnAbrir.classList.add('ocultar');

});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
    btnAbrir.classList.remove('ocultar');
});

// Fin del menu hamburguesa
//-------------------------------------------------------------

// Animacion imagen de fondo del header

const imagen = document.querySelectorAll('.header__imagen')
    console.log(imagen);

window.addEventListener('scroll', () => {
    const scroll = this.scrollY / 2;

    imagen.forEach((imagen) => {
        imagen.style.backgroundPositionY = `${scroll}px`;
    })
});

// Fina animacion hero header
// ---------------------------------------------------------------

// Pegar menu de nav en otras secciones


const stickyHeader = function () {

    const hdr = document.querySelector('.nav__contenedor');
    const hero = document.querySelector('#hcontenido');
    let triggerHeight;

    if (!(hdr && hero)) return;

    setTimeout(function(){
        triggerHeight = hero.offsetHeight - 170;
    }, 300);

    window.addEventListener('scroll', function () {

        let loc = window.scrollY;
       

        if (loc > triggerHeight) {
            hdr.classList.add('sticky');
        } else {
            hdr.classList.remove('sticky');
        }

        if (loc > triggerHeight + 20) {
            hdr.classList.add('offset');
        } else {
            hdr.classList.remove('offset');
        }

        if (loc > triggerHeight) {
            hdr.classList.add('scrolling');
        } else {
            hdr.classList.remove('scrolling');
        }

    });
}; 
// Final sticky nav
//----------------------------------------------------------

// Smoothscroll
const smoothScroll = function(){
    document.addEventListener('DOMContentLoaded', function() {
        // Selecciona todos los enlaces de la barra de navegación
        const links = document.querySelectorAll('.nav__link');
    
        // Añade un evento de clic a cada enlace
        links.forEach(link => {
        link.addEventListener('click', smoothScroll);
        });
    
        // Función para desplazamiento suave
        function smoothScroll(event) {
        event.preventDefault();
    
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
    
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
        }
    });
};

// Fin smoothscroll
//--------------------------------------------------------------------------------
  


stickyHeader();
smoothScroll();

