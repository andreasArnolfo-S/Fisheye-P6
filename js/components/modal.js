/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

export default class Modal {

	constructor (data) {
		this._modal = document.querySelector('.contact_modal')
		this._btnModal = document.querySelector('.buttonModal')
		this._data = data[0]
	}

	createModalTemplate () {
		const modal = document.createElement('div')
		modal.setAttribute('role', 'dialog')
		modal.setAttribute('aria-hidden', 'true')
		modal.classList.add('contact_modal')

		modal.innerHTML = ` <div class="modal">
                                            <div class="modal-header">
                                                <div>
                                                  <h2>Contactez-moi</h2>
                                                  <h2>${this._data.name}</h2>
                                                </div>
                                                  <img src="./assets/icons/close.svg" class="closeModal" />
                                              </div>
                                              <form>
                                                  <div class="data-form">
                                                      <label>Prénom</label>
                                                      <input />
                                                  </div>
                                                  <div class="data-form">
                                                      <label>Nom</label>
                                                      <input />
                                                  </div>
                                                  <div class="data-form">
                                                      <label>Email</label>
                                                      <input />
                                                  </div>
                                                  <div class="data-form">
                                                      <label>Votre message</label>
                                                      <textarea>Message...</textarea>
                                                  </div>
                                                  <button type='submit' class="contact_button">Envoyer</button>
                                              </form>
                                        </div>
                                                 `
		this._btnCloseModal = document.querySelectorAll('.closeModal')

		this._btnModal.addEventListener('click', () => {
			modal.style.display = 'block'
		})

		return modal
	}

}
