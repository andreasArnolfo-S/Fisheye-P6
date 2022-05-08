/* eslint-disable eqeqeq */
/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

/**
 * @file Api est mon ficher qui gere les datas
 * @author Andreas Arnolfo
 * @module api module
 */

class Api {

	constructor () {
		this.url = '../../data/photographers.json'
	}

	/**
	 * Il renvoie une promesse qui se résout en résultat d'une requête de récupération
	 * @returns La méthode de récupération est renvoyée.
	 */
	async get () {

		return fetch(this.url)
			.then((res) => res.json())
			.then((res) => res)
			.catch((err) =>
				console.log('une erreur est survenue :', err)
			)
	}

}

export class AllPhotographersApi extends Api {
	/**
	 * Il obtient les données des photographes à partir de l'API, puis renvoie les photographes.
	 * @returns Le tableau des photographes.
	 */
	async getPhotographers () {
		this.photographersData = await this.get()
		this.photographers = this.photographersData.photographers

		return this.photographers
	}

}
export class PhotographerApi extends AllPhotographersApi {
	/**
	 * Il obtient les données du photographe à partir de l'API, les filtre en fonction de l'identifiant
	 * transmis et renvoie le photographe.
	 * @param id - L'identifiant du photographe que vous souhaitez obtenir.
	 * @returns L'objet photographe.
	 */
	async getPhotographer (id) {
		this.photographerData = await this.getPhotographers()

		this.photographer = this.photographerData.filter((e) => e.id == id)

		return this.photographer
	}

}
export class AllMediasApi extends Api {
	/**
	 * Il obtient les données multimédias de l'API, puis il définit les données multimédias sur la
	 * propriété multimédia, puis il renvoie la propriété multimédia.
	 * La fonction est asynchrone car elle utilise le mot clé await. Le mot clé await est utilisé pour
	 * attendre qu'une promesse soit résolue ou rejetée.
	 * @returns Le tableau des médias
	 */
	async getMedias () {
		this.mediasData = await this.get()
		this.medias = this.mediasData.media

		return this.medias
	}

}

export class MediaApi extends AllMediasApi {
	/**
	 * Il récupère tous les médias de la base de données, puis les filtre par le photographe Id
	 * @param id - L'identifiant du photographe
	 * @returns Le tableau des médias
	 */
	async getMedia (id) {
		this.medias = await this.getMedias()

		this.media = this.medias.filter((e) => e.photographerId == id)

		return this.media
	}

}
