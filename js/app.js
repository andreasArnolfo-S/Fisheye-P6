/* eslint-disable eqeqeq */
/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */
/** =======================
 * *      Imports
 *========================* */
import PhotographersApi from './api/api'
import PhotographerCard from './templates/HomeTemplate'
import PhotographerHeader from './templates/PhotograherTemplate'
import PhotographerMedia from './templates/MediasTemplate'
import Modal from './components/modal'
import '../css/style.scss'

class App {

	constructor () {
		//   DOM elements
		this.$main = document.querySelector('main')
		this.$photographerSection = document.querySelector('.photographer_section')
		this.$photographerHeader = document.querySelector('.photograph-header')
		this.$photographerMedia = document.querySelector('.photograph-medias')
		// JSON url
		this.datas = new PhotographersApi('../../data/photographers.json')
	}

	/** =======================
	* *      Page Home
	*========================**/
	async home () {

		const photographersData = await this.datas.getPhotographers()

		this.photographers = photographersData.photographers

		this.photographers.forEach((photographer) => {
			const template = new PhotographerCard(photographer)
			this.$photographerSection.appendChild(template.createPhotographerCard())
		})

	}

	/** =======================
	* *      Page Photographer
	*========================**/
	async photographer () {

		const photographerData = await this.datas.getPhotographers()
		this.photographers = photographerData.photographers
		this.medias = photographerData.media
		const id = window.location.search.split('id=')[1]
		const media = !id ? this.medias : this.medias.filter((e) => e.photographerId == id)
		const photographer = !id ? this.photographers : this.photographers.filter((e) => e.id == id)

		/** =======================
		* *      Photographer header
		*========================**/
		const templatedeux = new PhotographerHeader(photographer)
		this.$photographerHeader.appendChild(
			templatedeux.createPhotographerHeader()
		)
		/** =======================
		* *      Photographer Medias
		*========================**/
		const mediasConteneur = document.createElement('div')
		mediasConteneur.classList.add('media-content')
		this.$photographerMedia.appendChild(mediasConteneur)

		media.forEach((element) => {
			const templateMedia = new PhotographerMedia(element)
			mediasConteneur.appendChild(templateMedia.createPhotographerMedia())
		})
		/** =======================
		* *      Modal
		*========================**/
		const modalTemplate = new Modal(this.photographers)
		this.$main.appendChild(modalTemplate.createModalTemplate())
		// Close modal
		const btnCloseModal = document.querySelector('.closeModal')
		const modal = document.querySelector('.contact_modal')
		btnCloseModal.addEventListener('click', () => {
			modal.style.display = 'none'
		})

	}

}

const app = new App()

app.home()

app.photographer()
