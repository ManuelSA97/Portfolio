

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

// Final animacion hero header
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

        if (loc > triggerHeight + 150) {
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
  /* Lightbox
    * ------------------------------------------------------ */
  const ssLightbox = function() {

    const folioLinks = document.querySelectorAll('.folio-item a');
    const modals = [];

    folioLinks.forEach(function(link) {
        let modalbox = link.getAttribute('href');
        let instance = basicLightbox.create(
            document.querySelector(modalbox),
            {
                onShow: function(instance) {
                    //detect Escape key press
                    document.addEventListener("keydown", function(evt) {
                        evt = evt || window.event;
                        if(evt.keyCode === 27){
                        instance.close();
                        }
                    });
                }
            }
        )
        modals.push(instance);
    });

    folioLinks.forEach(function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            modals[index].show();
        });
    });

};  // Final ssLightbox

// Traductor 
//----------------------------------------------------------------

function traducirPagina(idioma) {
    const apiKey = '9927e3b743e4478c8cbc32761e239af6';
    const endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + idioma;

    const textos = document.querySelectorAll('[data-translate]');
    const textosTraducidos = [];

    textos.forEach((elemento) => {
      textosTraducidos.push(elemento.textContent);
    });

    const cuerpoTraduccion = {
      'texts': textosTraducidos
    };

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': apiKey
      },
      body: JSON.stringify(cuerpoTraduccion)
    })
    .then(response => response.json())
    .then(data => {
      textos.forEach((elemento, index) => {
        elemento.textContent = data[index].translations[0].text;
      });
    })
    .catch((error) => {
      console.error('Error al traducir:', error);
    });
  }

  //Fin traductor

traducirPagina();
stickyHeader();
smoothScroll();
ssLightbox();
