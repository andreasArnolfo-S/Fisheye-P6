/* eslint-disable no-return-assign */
/* eslint-disable eqeqeq */
/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

import { PhotographerApi, MediaApi } from '../api/api'
import { LightboxMedia } from '../components/lightbox'
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
			const templateMedia = new PhotographerMedia(element, mediasData)
			this.$photographerMedia.appendChild(templateMedia.createPhotographerMedia())
		})
		const totalLike = new TotalLikes(photographerData)
		this.$main.appendChild(totalLike.templates())
		const modalTemplate = new Modal(photographerData)
		this.$main.appendChild(modalTemplate.createModalTemplate())
		// Close modal
		const btnCloseModal = document.querySelector('.closeModal')
		const modal = document.querySelector('.contact_modal')
		btnCloseModal.addEventListener('click', () => {
			modal.style.display = 'none'
		})

		const form = document.querySelector('#contact-form')
		/**
		 * @param   {event}  submit  form au submit
		 * @param  e   e.preventDefault()
		 *
		 * @return  {array}  array avec les valeur des inputs
		 */
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			const firstname = document.querySelector('#firstname').value
			const lastname = document.querySelector('#lastname').value
			const email = document.querySelector('#email').value
			const message = document.querySelector('#message').value

			this.array = []

			this.array.push(firstname, lastname, email, message)

			console.log(this.array)
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
                                                                      <h2>${this._photographer.city}, ${this._photographer.country}</h2>
                                                                      <p>${this._photographer.tagline}</p>
                                                                 </div>
                                                                 <div>
                                                                      <button class='buttonModal'>Contactez-moi</button>
                                                                 </div>
                                                                 <div>
                                                                      <img class='photographer-portrait' src="../../assets/photographers/${this._photographer.portrait}" alt="Portrait de ${this._photographer.name}" />
                                                                 </div>       
`
		return photographerSection
	}

}

class TotalLikes {

	constructor (data) {
		this.data = data
		this.counter()
	}

	templates () {
		const counter = this.createElement('section', 'class', 'static-counter')
		counter.innerHTML = ` 
		<div class='totalLikes'>
			<p class='counter'>${this.sum}</p>
			<i  class="fa-solid fa-heart"></i>
		</div>
		<p>${this.data[0].price}$ / jour</p>`

		return counter
	}

	async counter () {
		this.likes = document.querySelectorAll('.num-likes')
		this.total = document.querySelector('.counter')
		this.likeNumArray = Array.from(this.likes, e => parseFloat(e.innerText))
		this.sum = 0
		for (let i = 0; i < this.likeNumArray.length; i++) {
			this.sum += this.likeNumArray[i]
		}
		this.total.innerHTML = this.sum

		return this.sum
	}

	/**
	 * Default create element
	 *
	 * @param   {string}  element
	 * @param    {string} attr
	 * @param   {string}  className
	 *
	 * @return  {HTMLElement} l'element cree
	 */
	createElement (element, attr, className) {
		this.e = document.createElement(element)
		this.e.setAttribute(attr, className)
		return this.e
	}
}

class PhotographerMedia {

	constructor (data, allmedia) {
		this.media = data
		this.allmedia = allmedia
		this.mediaImage = Object.prototype.hasOwnProperty.call(this.media, 'image')
		this.mediaVideo = Object.prototype.hasOwnProperty.call(this.media, 'video')
	}

	createPhotographerMedia () {
		const article = this.createElement('article', 'class', 'article')
		const img = document.createElement('img')
		const video = document.createElement('video')
		const likecontent = this.createElement('div', 'class', 'like-content')
		const title = this.createElement('h2', 'class', 'photo-title')
		const button = this.createElement('button', 'class', 'likeBtn')

		title.innerHTML = this.media.title

		button.innerHTML = `<span class="num-likes">${this.media.likes}</span>
		<span class="icon"><i  class="fa-regular fa-heart"></i></span>`

		likecontent.appendChild(title)
		likecontent.appendChild(button)

		article.appendChild(likecontent)

		if (this.mediaImage) {
			img.setAttribute('src', ` ../../assets/medias/${this.media.image}`)
			img.setAttribute('alt', `image ${this.media.title}`)
			img.addEventListener('click', () => {
				img.classList.add('active')
				const lightbox = new LightboxMedia(this.media)

				return lightbox.openLightbox()
			})
			article.appendChild(img)
		} else if (this.mediaVideo) {
			video.setAttribute('src', ` ../../assets/medias/${this.media.video}`)
			video.setAttribute('alt', `video ${this.media.title}`)
			article.appendChild(video)
		}

		let clicked = false

		button.addEventListener('click', () => {
			this.a = this.media.likes + 1
			this.b = this.a - 1
			if (!clicked) {
				clicked = true
				button.innerHTML = `<span class="num-likes">${this.a}</span>
				<span class="icon"><i  class="fa-solid fa-heart"></i></span>`
				new TotalLikes().counter()
				return button
			} else {
				clicked = false
				button.innerHTML = `<span class="num-likes">${this.b}</span>
				<span class="icon"><i  class="fa-regular fa-heart"></i></span>`
				new TotalLikes().counter()
				return button
			}
		})

		return article

	}

	/**
	 * Default create element
	 *
	 * @param   {string}  element
	 * @param    {string} attr
	 * @param   {string}  className
	 *
	 * @return  {HTMLElement} l'element cree
	 */
	createElement (element, attr, className) {
		this.e = document.createElement(element)
		this.e.setAttribute(attr, className)
		return this.e
	}

}
