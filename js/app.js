
// Abrir y cerrar menu "hamburguesa"
const nav = document.querySelector('#nav');
const abrir = document.querySelector('#open-icon');
const cerrar = document.querySelector('#close-icon');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});

// Fin del menu hamburguesa
//-------------------------------------------------------------

