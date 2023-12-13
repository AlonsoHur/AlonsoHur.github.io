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
