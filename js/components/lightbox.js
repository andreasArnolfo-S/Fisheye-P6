/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */
import { CreateElement } from './CreateElement'

export class LightboxMedia {

	constructor (data) {
		this.data = data
		this.body = document.querySelector('body')
	}

	async openLightbox (n) {
		const mediasData = await this.data
		this._lightbox = CreateElement('div', {
			class: 'lightbox'
		})
		this._close = CreateElement('button', {
			class: 'close',
			innerHtml: 'X'
		})
		this._carousel = CreateElement('div', {
			class: 'carousel'
		})
		this._buttonNext = CreateElement('button', {
			class: 'next',
			innerHtml: '>'
		})
		this._buttonPrev = CreateElement('button', {
			class: 'prev',
			innerHtml: '<'
		})

		/* Créer un div avec les diapositives de la classe et l'ajouter au carrousel. */
		mediasData.forEach((el, index) => {
			this.mediaImage = Object.prototype.hasOwnProperty.call(el, 'image')
			this.mediaVideo = Object.prototype.hasOwnProperty.call(el, 'video')
			this.title = CreateElement('h1', {
				class: 'title',
				innerHtml: `${el.title}`
			})
			this._slides = CreateElement('div', {
				class: 'slides',
				slideIndex: index
			})
			if (this.mediaImage) {
				this._img = CreateElement('img', {
					src: `../../assets/medias/${el.image}`,
					alt: `${el.title}`
				})
				this._slides.appendChild(this._img)
			} else if (this.mediaVideo) {
				this._video = CreateElement('video', {
					src: ` ../../assets/medias/${el.video}`,
					alt: `${el.title}`
				})
				this._slides.appendChild(this._video)
			}
			this._slides.appendChild(this.title)

			this._carousel.appendChild(this._slides)

		})

		this._carousel.appendChild(this._buttonNext)
		this._carousel.appendChild(this._buttonPrev)
		this._lightbox.style.display = 'block'
		this._lightbox.appendChild(this._close)
		this._lightbox.appendChild(this._carousel)
		this.body.appendChild(this._lightbox)

		/* Écouter un événement de clic sur le bouton de fermeture, puis supprime la lightbox du corps. */
		this._close.addEventListener('click', () => {
			this.body.removeChild(this._lightbox)
		})
		/* Ajout d'un écouteur d'événement aux boutons suivant et précédent. */
		this._slideIndex = n + 1
		this.showSlides(this._slideIndex)
		this._buttonNext.addEventListener('click', () => {
			this.showSlides(this._slideIndex += 1)
		})
		this._buttonPrev.addEventListener('click', () => {
			this.showSlides(this._slideIndex -= 1)
		})
		/* Écoute les événements keydown, puis vérifie si la touche est ArrowRight, ArrowLeft ou Escape. Si
		c'est ArrowRight, il appellera la fonction showSlides avec le slideIndex + 1. Si c'est ArrowLeft, il
		appellera la fonction showSlides avec le slideIndex - 1. Si c'est Escape, il supprimera la lightbox
		du corps. */
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

}
