/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable indent */
export default class PhotographerCard {

	constructor (photographer) {
		this.photographer = photographer
	}

	createPhotographerCard () {
		const articles = document.createElement('article')

		articles.innerHTML = `<a href='photographers.html?id=${this.photographer.id}'>
                                             <img src="../../assets/photographers/${this.photographer.portrait}" />
                                             <h2>${this.photographer.name}</h2>
                                             <p>${this.photographer.city}, ${this.photographer.country}</p>
                                             <p>${this.photographer.tagline}</p>
                                             <p>${this.photographer.price}€/jour</p>
                                        </a>`
		return articles
	}

}
