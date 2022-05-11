/* eslint-disable no-return-assign */
/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */
import { PhotographerApi, MediaApi } from '../api/api'
import { TotalLikes } from '../components/TotalLike'
import { PhotographerFactory } from '../components/PhotographerFactory'
import { PhotographerMedia } from '../components/photographerMedia'
import { TrieSysteme } from '../components/trieSysteme'
import Modal from '../components/modal'

export class PhotographerPage {

	constructor () {
          /* Il obtient l'identifiant de l'url. */
		const params = (new URL(document.location)).searchParams
		this.id = params.get('id')
		this.mediasApi = new MediaApi()
		this.photographerApi = new PhotographerApi()
		this.$photographerHeader = document.querySelector('.photograph-header')
		this.$photographerMedia = document.querySelector('.media-content')
		this.$main = document.querySelector('body')
	}

	async photographer () {
		const photographerData = await this.photographerApi.getPhotographer(this.id)
		const templatedeux = new PhotographerFactory(photographerData[0])
		this.$photographerHeader.appendChild(templatedeux.factory('photographer'))
		const trie = new TrieSysteme()
		this.$photographerMedia.appendChild(trie.trieSysteme())
		this.mediasData = await this.trie()
		console.log(this.mediasData)
		/* C'est une boucle qui créera une nouvelle instance de PhotographerMedia pour chaque élément du
		tableau. */

		const totalLike = new TotalLikes(photographerData)
		this.$main.appendChild(totalLike.templates())
		const modalTemplate = new Modal(photographerData)
		this.$main.appendChild(modalTemplate.createModalTemplate())

		/* C'est une fonction qui ferme le modal lorsque vous cliquez sur le bouton. */
		const btnCloseModal = document.querySelector('.closeModal')
		const modal = document.querySelector('.contact_modal')
		btnCloseModal.addEventListener('click', () => {
			modal.style.display = 'none'
		})

		const form = document.querySelector('#contact-form')

		/* Écoute de l'événement submit du formulaire. */
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			const firstname = document.querySelector('#firstname')
			const lastname = document.querySelector('#lastname')
			const email = document.querySelector('#email')
			const message = document.querySelector('#message').value
			const lastNameRegex = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}[-]?([\w]+)?([-\d])?/.test(lastname.value)
			const firstNameRegex = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}[-]?([\w]+)?([-\d])?/.test(firstname.value)
			// eslint-disable-next-line no-useless-escape
			const emailRegex = /^(\w[-\.]?)*@[\w]{1,}(\.\w{2,3}){1,2}$/.test(email.value)

			this.array = []
			/* C'est une condition qui vérifie si le formulaire est valide. S'il est valide, il pousse les
			valeurs du formulaire dans un tableau. S'il n'est pas valide, il affiche un message d'erreur. */
			if (lastNameRegex === true && firstNameRegex === true && emailRegex === true && message !== '') {
				this.array.push(firstname.value, lastname.value, email.value, message)
				form.reset()
			} else {
				const errorMesage = document.createElement('p')
				errorMesage.classList.add('error-message')
				errorMesage.innerHTML = 'Une erreur est survenue veuiller verifier vos informations : <ul><li>Veuillez entrer un prénom comportant 2 caractères ou plus</li><li>Veuillez entrer un nom comportant 2 caractères ou plus</li><li>Une addresse email valide</li></ul>'
				form.appendChild(errorMesage)
				console.log('une erreur est survenue veuiller verifier vos imformations')
			}
			console.log(this.array)
		})
	}

	/**
	 * trier les données par Likes, date ou titre, puis de recharger la page
	 * @returns la valeur de la variable mediasData.
	 */
	async trie () {
		this.mediasData = await this.mediasApi.getMedia(this.id)
		const popular = document.querySelector('.popDrop')
		const date = document.querySelector('.dateDrop')
		const title = document.querySelector('.titleDrop')

		popular.addEventListener('click', () => {
			this.replaceArticle()
			this.mediasData.sort((a, b) => b.likes - a.likes)
			this.displayMedia()
		})
		date.addEventListener('click', () => {
			this.replaceArticle()
			this.mediasData.sort((o) => { return new Date(o.date) })
			this.displayMedia()
		})
		title.addEventListener('click', () => {
			this.replaceArticle()
			this.mediasData.sort((a, b) => a.title.localeCompare(b.title))
			this.displayMedia()
		})
		this.displayMedia()

		return this.mediasData
	}

	replaceArticle () {
		const article = document.querySelectorAll('article')
		article.forEach((e) => {
			this.$photographerMedia.removeChild(e)
		})
	}

	displayMedia () {
		this.mediasData.forEach((element, index) => {
			this.templateMedia = new PhotographerMedia(element, this.mediasData)
			this.$photographerMedia.appendChild(this.templateMedia.createPhotographerMedia(index))
		})
	}

}
