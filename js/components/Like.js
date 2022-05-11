/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */
import { CreateElement } from './CreateElement'
export class Like {

	constructor (data) {
		this.data = data
	}

	/**
	 * La fonction crée un élément de bouton, lui ajoute une classe, puis lui ajoute un écouteur
	 * d'événement.
	 * L'écouteur d'événement est un événement de clic qui modifie l'innerHTML de l'élément icon.
	 * La fonction renvoie l'élément bouton.
	 * @returns L'élément bouton
	 */
	manage () {
		const template = new LikeTemplate(this.data)
		this.heart = CreateElement('button', {
			class: 'likBtn',
			innerHtml: template.createLikeTemplates()
		})

		let clicked = false
		this.heart.addEventListener('click', () => {
			const icon = document.querySelector('.icon')
			if (!clicked) {
				clicked = true
				icon.innerHTML = '<i  class="fa-solid fa-heart"></i>'

			} else {
				clicked = false
				icon.innerHTML = '<i class="fa-regular fa-heart"></i>'
			}
		})

		return this.heart
	}

}

/* Il prend un objet de données et renvoie une chaîne de caractères HTML. */
class LikeTemplate {

	constructor (data) {
		this.data = data
	}

	/**
	 * Il crée un modèle pour le nombre de likes et l'icône du cœur.
	 * @returns Le modèle littéral est renvoyé.
	 */
	createLikeTemplates () {
		return `<span class="num-likes">${this.data.likes}</span>
				<span class="icon"><i  class="fa-regular fa-heart"></i></span>`
	}

}
