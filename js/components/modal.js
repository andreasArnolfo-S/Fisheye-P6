import { CreateElement } from '../utils/CreateElement'
import FormValidation from '../utils/formValidation'
import { NavigatePH } from '../utils/navigate'

/* Il crée une fenêtre modale avec un formulaire pour me contacter */
export default class Modal {

    constructor (data) {
        this._modal = document.querySelector('.contact_modal')
        this._btnModal = document.querySelector('.buttonModal')
        this._data = data[0]
        this._btnModal.setAttribute('aria-label', `Bouton qui ouvre le formulaire de contact de ${this._data.name}`)
        this.photographerHeader = document.querySelector('.photograph-header')
        this.photographerMedia = document.querySelector('.media-content')
    }

    /* Création d'une fenêtre modale avec un formulaire pour me contacter. */
    createModalTemplate () {
        const modal = CreateElement('div', {
            role: 'dialog',
            class: 'contact_modal',
            innerHtml: `<div class="modal" aria-hidden='true'>
            <div class="modal-header">
                <div>
                  <h2>Contactez-moi</h2>
                  <h2>${this._data.name}</h2>
                </div>
                  <img src="./assets/icons/close.svg" class="closeModal" alt="image pour fermer la modal" />
              </div>
              <form action="" method="get" id="contact-form">

                    <label tabindex='0' for="firstname">Prénom :</label>
                    <input tabindex='0' type="text" name="firstname" id="firstname" >

                    <label tabindex='0' for="lastname">Nom</label>
                    <input tabindex='0' type="text" name="lastname" id="lastname">

                    <label tabindex='0' for="email">Email</label>
                    <input tabindex='0' type="email" name="email" id="email">

                    <label tabindex='0' for="message">Votre message</label>
                    <textarea tabindex='0' type="text" id="message"></textarea>

                  <button tabindex='0' type='submit' class="contact_button">Envoyer</button>
                <div tabindex='0' class="error-message" style="visibility: hidden;">
                  <p tabindex='0'>Une erreur est survenue veuiller verifier vos informations : <ul><li>Veuillez entrer un prénom comportant 2 caractères ou plus</li><li>Veuillez entrer un nom comportant 2 caractères ou plus</li><li>Une addresse email valide</li></ul></p>
                </div>
              </form>

        </div>`
        })
        modal.setAttribute('class', 'modalParent contact_modal')
        return modal
    }

    openModal () {
        const modal = document.querySelector('.contact_modal')
        const btnCloseModal = document.querySelector('.closeModal')
        const form = document.querySelector('#contact-form')

        this.i = 0
        this.open = false
        this._btnModal.addEventListener('click', () => {
            modal.classList.remove('contact_modal')
            modal.classList.add('open-modal')
            this.open = true
        })
        btnCloseModal.addEventListener('click', () => {
            modal.classList.add('contact_modal')
            modal.classList.remove('open-modal')
            this.open = false
        })

        document.addEventListener('keydown', (e) => {
            if (this.open === true) {
                if (e.key !== 'Tab' && e.key !== 'Escape') return
                e.preventDefault()
                switch (e.key) {
                    case 'Escape':
                        modal.classList.add('contact_modal')
                        modal.classList.remove('open-modal')
                        this.open = false
                        e.stopPropagation()
                        break
                    case 'Tab':
                        this.i++
                        if (this.i > form.childNodes.length) {
                            this.i = 0
                        }
                        form.childNodes[this.i].focus()
                        break
                }

            } else {
                new NavigatePH().navigate()
            }
        })

    }

    /**
     * Il valide le formulaire et si le formulaire est valide, il pousse les valeurs des entrées dans un
     * tableau
     */
    OnSubmit () {
        this.firstname = document.querySelector('#firstname')
        this.lastname = document.querySelector('#lastname')
        this.email = document.querySelector('#email')
        this.message = document.querySelector('#message')
        const form = document.querySelector('#contact-form')

        this.array = []

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const valide = new FormValidation()
            console.log(valide.validate())
            if (valide.validate() === true) {
                this.array.push(this.firstname.value, this.lastname.value, this.email.value, this.message.value)
                document.querySelector('.error-message').style.visibility = 'hidden'
                form.reset()
                return console.log(this.array)
            } else {
                document.querySelector('.error-message').style.visibility = 'visible'
                return console.log('une erreur est survenue veuiller verifier vos informations')
            }
        })
    }

}
