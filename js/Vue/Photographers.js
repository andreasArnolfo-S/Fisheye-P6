/* eslint-disable eqeqeq */
/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

import { PhotographerApi, MediaApi } from '../api/api'
import { LightboxMedia } from '../components/lightbox'
import Like from '../components/Like'
import Modal from '../components/modal'

export class PhotographerPage {

	constructor () {
		this.mediasApi = new MediaApi().getMedia()
		this.photographerApi = new PhotographerApi().getPhotographer()
		this.$photographerHeader = document.querySelector('.photograph-header')
		this.$photographerMedia = document.querySelector('.media-content')
		this.$main = document.querySelector('body')
	}

	async photographer () {
		const mediasData = await this.mediasApi
		const photographerData = await this.photographerApi
		const templatedeux = new PhotographerHeader(photographerData)
		this.$photographerHeader.appendChild(templatedeux.createPhotographerHeader())

		mediasData.forEach((element) => {
			const templateMedia = new PhotographerMedia(element)
			this.$photographerMedia.appendChild(templateMedia.createPhotographerMedia())
		})

		const modalTemplate = new Modal(photographerData)
		this.$main.appendChild(modalTemplate.createModalTemplate())
		// Close modal
		const btnCloseModal = document.querySelector('.closeModal')
		const modal = document.querySelector('.contact_modal')
		btnCloseModal.addEventListener('click', () => {
			modal.style.display = 'none'
		})
	}

}

class PhotographerHeader {

	constructor (data) {
		this._photographer = data[0]
	}

	createPhotographerHeader () {
		const photographerSection = document.createElement('section')
		photographerSection.classList.add('Photographer-flex')

		photographerSection.innerHTML = ` <div>
                                                                      <h1>${this._photographer.name}</h1>
                                                                      <h4>${this._photographer.city}, ${this._photographer.country}</h4>
                                                                      <p>${this._photographer.tagline}</p>
                                                                 </div>
                                                                 <div>
                                                                      <button class='buttonModal'>Contactez-moi</button>
                                                                 </div>
                                                                 <div>
                                                                      <img class='photographer-portrait' src="../../assets/photographers/${this._photographer.portrait}" />
                                                                 </div>       
`
		return photographerSection
	}

}

class PhotographerMedia {

	constructor (data) {
		this.media = data
		this.mediaImage = Object.prototype.hasOwnProperty.call(this.media, 'image')
		this.mediaVideo = Object.prototype.hasOwnProperty.call(this.media, 'video')
	}

	createPhotographerMedia () {
		const documentFragment = document.createDocumentFragment()
		const article = document.createElement('article')
		const img = document.createElement('img')
		const video = document.createElement('video')
		const like = new Like(this.media)
		documentFragment.appendChild(article)
		article.appendChild(like.createLikeTemplates())

		if (this.mediaImage) {
			img.setAttribute('src', ` ../../assets/medias/${this.media.image}`)
			img.addEventListener('click', () => {
				const lightbox = new LightboxMedia(this.media)

				return lightbox.openLightbox()
			})
			article.appendChild(img)
		} else if (this.mediaVideo) {
			video.setAttribute('src', ` ../../assets/medias/${this.media.video}`)
			article.appendChild(video)
		}
		return article
	}

}
