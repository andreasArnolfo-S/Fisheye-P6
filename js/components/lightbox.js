/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */
export class LightboxMedia {

	constructor (data) {
		this.data = data
		this.body = document.querySelector('body')
	}

	async openLightbox () {
		const mediasData = await this.data
		this._lightbox = document.createElement('div')
		this._lightbox.classList.add('lightbox')
		this.template = new LightboxTemplate(mediasData)
		this._lightbox.innerHTML = this.template.lightboxTemplate()
		this._lightbox.style.display = 'block'
		this.body.appendChild(this._lightbox)
		const close = document.querySelector('.close')
		close.addEventListener('click', () => {
			this.body.removeChild(this._lightbox)
		})
		return this._lightbox
	}

}

class LightboxTemplate {

	constructor (data) {
		this._data = data
	}

	lightboxTemplate () {
		return ` 
			<button type="button" class="close">X</button>
			<img src=" ../../assets/medias/${this._data.image}" role="image" alt="${this._data.title}" />
			`

	}

}
