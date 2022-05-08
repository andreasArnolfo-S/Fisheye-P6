/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

/**
 * @file lightbox est mon ficher qui gere la lightbox
 * @author Andreas Arnolfo
 * @module lightbox module
 */

export class LightboxMedia {

	constructor (data) {
		this.data = data
		this.body = document.querySelector('body')
	}

	async openLightbox (n) {
		const mediasData = await this.data
		this._lightbox = this.createElement('div', 'class', 'lightbox')
		this._close = this.createElement('button', 'class', 'close')
		this._close.innerHTML = 'x'
		this._carousel = this.createElement('div', 'class', 'carousel')
		this._buttonNext = this.createElement('button', 'class', 'next')
		this._buttonNext.innerHTML = '>'
		this._buttonPrev = this.createElement('button', 'class', 'prev')
		this._buttonPrev.innerHTML = '<'

		mediasData.forEach((el, index) => {
			this.mediaImage = Object.prototype.hasOwnProperty.call(el, 'image')
			this.mediaVideo = Object.prototype.hasOwnProperty.call(el, 'video')
			this._slides = this.createElement('div', 'class', 'slides')
			this._slides.setAttribute('slide-index', index)
			if (this.mediaImage) {
				this._img = this.createElement('img', 'src', `../../assets/medias/${el.image}`)
				this._slides.appendChild(this._img)
			} else if (this.mediaVideo) {
				this._video = this.createElement('video', 'src', ` ../../assets/medias/${el.video}`)
				this._slides.appendChild(this._video)
			}
			this._carousel.appendChild(this._slides)
		})

		this._carousel.appendChild(this._buttonNext)
		this._carousel.appendChild(this._buttonPrev)
		this._lightbox.style.display = 'block'
		this._lightbox.appendChild(this._close)
		this._lightbox.appendChild(this._carousel)
		this.body.appendChild(this._lightbox)
		console.log(this._lightbox)

		this._close.addEventListener('click', () => {
			this.body.removeChild(this._lightbox)
		})
		this._slideIndex = n + 1
		this.showSlides(this._slideIndex)
		this._buttonNext.addEventListener('click', () => {
			this.showSlides(this._slideIndex += 1)
		})
		this._buttonPrev.addEventListener('click', () => {
			this.showSlides(this._slideIndex -= 1)
		})
		document.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight') {
				this.showSlides(this._slideIndex += 1)
			} else if (e.key === 'ArrowLeft') {
				this.showSlides(this._slideIndex -= 1)
			} else if (e.key === 'Escape') {
				this.body.removeChild(this._lightbox)
			}
		})
		return this._lightbox
	}

	/**
	 * Il prend un numéro et affiche la diapositive qui correspond à ce numéro.
	 * @param n - le numéro de la diapositive à afficher
	 */
	async showSlides (n) {
		let i
		this.slide = document.querySelectorAll('.slides')
		if (n > this.slide.length) {
			this._slideIndex = 1
		}
		if (n < 1) {
			this._slideIndex = this.slide.length
		}
		for (i = 0; i < this.slide.length; i++) {
			this.slide[i].style.display = 'none'
		}
		this.slide[this._slideIndex - 1].style.display = 'block'
	}

	/**
	 * Il crée un élément, définit un attribut et renvoie l'élément.
	 * @param element - L'élément que vous voulez créer.
	 * @param attr - L'attribut que vous souhaitez définir.
	 * @param attrValue - la valeur de l'attribut.
	 * @returns L'élément qui a été créé.
	 */
	createElement (element, attr, attrValue) {
		const e = document.createElement(element)
		e.setAttribute(attr, attrValue)
		return e
	}

}
