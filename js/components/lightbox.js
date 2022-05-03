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
		const next = document.querySelector('.carousel__button--next')
		next.addEventListener('click', () => {
			console.log('coucou')
		})
		const carousel = document.querySelector('.carousel')

		this.data.forEach((media) => {
			this.mediaImage = Object.prototype.hasOwnProperty.call(media, 'image')
			this.mediaVideo = Object.prototype.hasOwnProperty.call(media, 'video')
			if (this.mediaImage) {
				this.img = document.createElement('img')
				this.img.setAttribute('src', ` ../../assets/medias/${media.image}`)
				console.log('coucou')
				return carousel.appendChild(this.img)
			} else if (this.mediaVideo) {
				this.video = document.createElement('video')
				this.video.setAttribute('src', ` ../../assets/medias/${media.video}`)
				return carousel.appendChild(this.video)
			}
		})
		return this._lightbox
	}

}

class LightboxTemplate {

	lightboxTemplate () {
		return ` 
			<button type="button" class="close">X</button>
			<div class="carousel-wrapper">
  				<div class="carousel">
					<div class="carousel__button--next"></div>
    					<div class="carousel__button--prev"></div>
				</div>
			</div>
			`

	}

}
