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

/* email */

const contactoForm = document.getElementById('contacto-form')
const contactoMensaje = document.getElementById('contacto-mensaje')

const enviarEmail = (e) => {
    e.preventDefault()

    //servicio emailjs
    emailjs.sendForm('service_jrx2cz', 'template_dro35qi', '#contacto-form', 'V9rfKLoBCxCkSoDyi')
    .then(() =>{
        //indicamos que se envio bien
        contactoMensaje.textContent = 'Mensaje enviado correctamente ✅'

        //lo quitamos tras 5 s
        setTimeout(() =>{

            contactoMensaje.textContent= ''}, 5000)
            //quitamos parametros
        contactoForm.reset()
    }, ()=>{
        contactoMensaje.textContent= 'El mensaje no se ha podido enviar (Error en el servicio) ❌'

        setTimeout(() =>{

            contactoMensaje.textContent= ''}, 5000)
    })
    
}

contactoForm.addEventListener('submit', enviarEmail)

/* mostrar boton de volver a inicio */

const volverInicio = () =>{
    const scroll = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scroll.classList.add('mostrar-scroll')
                        : scroll.classList.remove('mostrar-scroll')
}

window.addEventListener('scroll', volverInicio)
