/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */
export class LightboxMedia {

	constructor (data) {
		this.data = data
		this._close = document.querySelector('.close')
	}

	async openLightbox () {
		const mediasData = await this.data
		this._lightbox = document.createElement('div')
		this._lightbox.classList.add('lightbox')

		this._lightbox.innerHTML = ` 
			<button type="button" class="close">X</button>
			<img src=" ../../assets/medias/${mediasData.image}" role="image" alt="${mediasData.title}" />
			`

		this._lightbox.style.display = 'block'
		this._close.addEventListener('click', () => { this._lightbox.style.display = 'none' })
		console.log(mediasData)
		return this._lightbox
	}

}
