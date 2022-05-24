import { CreateElement } from './CreateElement'

export class Form {
  validation () {
    const form = document.querySelector('#contact-form')
    const errorMesage = CreateElement('p', {
      class: 'error-message',
      innerHtml: 'Une erreur est survenue veuiller verifier vos informations : <ul><li>Veuillez entrer un prénom comportant 2 caractères ou plus</li><li>Veuillez entrer un nom comportant 2 caractères ou plus</li><li>Une addresse email valide</li></ul>'
    })
    /* Écoute de l'événement submit du formulaire. */
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const firstname = document.querySelector('#firstname')
      const lastname = document.querySelector('#lastname')
      const email = document.querySelector('#email')
      const message = document.querySelector('#message').value
      const lastNameRegex = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}[-]?([\w]+)?([-\d])?/.test(lastname.value)
      const firstNameRegex = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}[-]?([\w]+)?([-\d])?/.test(firstname.value)
      const emailRegex = /^(\w[-\.]?)*@[\w]{1,}(\.\w{2,3}){1,2}$/.test(email.value)


      form.appendChild(errorMesage)
      this.array = []
      /* C'est une condition qui vérifie si le formulaire est valide. S'il est valide, il pousse les
      valeurs du formulaire dans un tableau. S'il n'est pas valide, il affiche un message d'erreur. */
      if (lastNameRegex === true && firstNameRegex === true && emailRegex === true && message !== '') {
          this.array.push(firstname.value, lastname.value, email.value, message)
          form.reset()
      } else {
            errorMesage.style.visibility = 'visible'
            console.log('une erreur est survenue veuiller verifier vos imformations')
      }
      console.log(this.array)
    })
  }
}
