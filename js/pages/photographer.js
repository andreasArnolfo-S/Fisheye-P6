import '../../css/style.scss'
import { PhotographerApi, MediaApi } from '../Api/api'
import { TotalLikes } from '../components/TotalLike'
import { TrieSysteme } from '../components/trieSysteme'
import Modal from '../components/modal'
import { PhotographerMedia } from './../factory/mediasFactory'
import { NavigatePH } from '../utils/navigate'
import { PhotographeFactory } from './../factory/photographeFactory'

export class PhotographerPage {
	constructor () {
		const params = (new URL(document.location)).searchParams
		this.id = params.get('id')
		this.photographerHeader = document.querySelector('.photograph-header')
		this.photographerMedia = document.querySelector('.media-content')
		this.main = document.querySelector('body')
		this.logo = document.querySelector('.logo')
	}

	async photographer () {
		const photographerData = await new PhotographerApi().getPhotographer(this.id)

		this.photographerHeader.appendChild(new PhotographeFactory(photographerData[0], 'photographer'))

		/* Créer une nouvelle instance de la classe TrieSysteme et l'ajouter au DOM. */
		this.photographerMedia.appendChild(new TrieSysteme().trieSysteme())
		this.mediasData = await this.trie()

		/* Créer une nouvelle instance de la classe TotalLikes et passer le photographeData en tant que
		paramètre.
		La classe TotalLikes est une classe qui crée un modèle pour chaque objet du tableau.
		Le modèle est ensuite ajouté au DOM. */
		this.main.appendChild(new TotalLikes(photographerData).templates())

		/* Création d'une fenêtre modale. */
		this.main.appendChild(new Modal(photographerData).createModalTemplate())

		new Modal(photographerData).openModal()
		/* Créer une nouvelle instance de la classe Form et appeler la méthode de validation dessus. */
		new Modal(photographerData).OnSubmit()
		new NavigatePH().navigate()

		this.logo.addEventListener('click', () => {
			window.location.href = 'index.html'
		})
	}

	/**
	 * trier les données par Likes, date ou titre, puis de recharger la page
	 * @returns la valeur de la variable mediasData.
	 */
	async trie () {
		this.mediasData = await new MediaApi().getMedia(this.id)
		this.mediasData.sort((a, b) => a.title.localeCompare(b.title))
		const sel = document.querySelector('.dropdown-content')

		sel.addEventListener('click', (e) => {
			e.preventDefault()

			switch (sel.selectedIndex) {
				case 0:
					this.mediasData.sort((a, b) => a.title.localeCompare(b.title))
					this.replaceArticle()
					break
				case 1:
					this.mediasData.sort((a, b) => b.likes - a.likes)
					this.replaceArticle()
					break
				case 2:
					this.mediasData.sort((a, b) => new Date(b.date) - new Date(a.date))
					this.replaceArticle()
					break
				default:
					break
			}
		})

		this.displayMedia()

		return this.mediasData
	}

	/**
	 * Il supprime tous les articles de la div photographeMedia.
	 */
	replaceArticle () {
		const articles = Array.from(document.querySelectorAll('.article'))

		this.mediasData.forEach((element, index) => {

			const node = articles.find((article) => {
				const inputNode = article.querySelector('input').value
				const id = Number.parseInt(inputNode)
				return id === element.id
			})
			if (node) {
				this.photographerMedia.appendChild(node)
			}
		})
	}

	/**
	 * Il parcourt le tableau d'objets et crée une nouvelle instance de la classe PhotographerMedia pour
	 * chaque objet du tableau.
	 */
	displayMedia () {
		this.mediasData.forEach((element, index) => {
			this.photographerMedia.appendChild(new PhotographerMedia(element, this.mediasData).createPhotographerMedia(index))
		})
	}
}

const ph = new PhotographerPage()
ph.photographer()
