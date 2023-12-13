/* mostrar menu */

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/* Esconder o enseñar el menu*/
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

const linkAction = () => {
    navMenu.classList.remove('show-menu')

}

navClose.addEventListener('click', () => {
    linkAction()
})
/* Esconder menu si se selecciona alguna opcion del mismo */

const navLinks = document.querySelectorAll('.nav_link')
navLinks.forEach (n => n.addEventListener('click', linkAction))

/* cambiar el fondo de la cabecera */
const shadowCabecera = () =>{
    const cabecera = document.getElementById('header')
    //si el escroll es mas que el la altura de viewport en 50, se añade la clase shadow cabecera al tag de cabecera
    this.scrollY >= 50 ? header.classList.add('shadow-cabecera')
                       : header.classList.remove('shadow-cabecera')
}

window.addEventListener('scroll', shadowCabecera)