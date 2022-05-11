/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */

import { CreateElement } from './CreateElement'

/* eslint-disable indent */
export default class Modal {

	constructor (data) {
		this._modal = document.querySelector('.contact_modal')
		this._btnModal = document.querySelector('.buttonModal')
		this._data = data[0]
	}

    /**
     * It creates a modal template, adds a click event listener to the button that opens the modal, and
     * returns the modal.
     * @returns The modal is being returned.
     */
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

}
