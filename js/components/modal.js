import { CreateElement } from '../utils/CreateElement'

/* Il crée une fenêtre modale avec un formulaire pour me contacter */
export default class Modal {

	constructor (data) {
		this._modal = document.querySelector('.contact_modal')
		this._btnModal = document.querySelector('.buttonModal')
		this._data = data[0]
        this._btnModal.setAttribute('aria-label', `Bouton qui ouvre le formulaire de contact de ${this._data.name}`)
	}

    /* Création d'une fenêtre modale avec un formulaire pour me contacter. */
	createModalTemplate () {
		const modal = CreateElement('div', {
            role: 'dialog',
            class: 'contact_modal',
            innerHtml: ` <div class="modal">
            <div class="modal-header">
                <div>
                  <h2>Contactez-moi</h2>
                  <h2>${this._data.name}</h2>
                </div>
                  <img src="./assets/icons/close.svg" class="closeModal" alt="image pour fermer la modal" />
              </div>
              <form action="" method="get" id="contact-form">
                  <div class="data-form">
                      <label for="firstname">Prénom :</label>
                        <input type="text" name="firstname" id="firstname" >
                  </div>
                  <div class="data-form">
                      <label for="lastname">Nom</label>
                      <input type="text" name="lastname" id="lastname">
                  </div>
                  <div class="data-form">
                      <label for="email">Email</label>
                      <input type="email" name="email" id="email">
                  </div>
                  <div class="data-form">
                      <label for="message">Votre message</label>
                      <textarea type="text" id="message"></textarea>
                  </div>
                  <button type='submit' class="contact_button">Envoyer</button>
              </form>
        </div>
                 `
        })
		modal.setAttribute('aria-hidden', 'true')
		this._btnModal.addEventListener('click', () => {
			modal.style.display = 'block'
        })

		return modal
	}

    /**
     * C'est une fonction qui ferme le modal lorsque l'utilisateur clique sur le bouton de fermeture ou
     * appuie sur la touche d'échappement.
     */
    closeModal () {
		const btnCloseModal = document.querySelector('.closeModal')
		const modal = document.querySelector('.contact_modal')

		btnCloseModal.addEventListener('click', () => {
			modal.style.display = 'none'
		})
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				modal.style.display = 'none'
			}
		})
    }

}
