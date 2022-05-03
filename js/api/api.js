/* eslint-disable eqeqeq */
/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

/**
 * @file Api est mon ficher qui gere les datas
 * @author Andreas Arnolfo
 * @module api module
 */

/**
 * @class qui fetch mon fichier Json
 */
class Api {

	constructor () {
		this.url = '../../data/photographers.json'
	}

	/**
	 * Function qui fetch mon fichier Json
	 * @property {Function} get obtiens toute les datas
	 * @return response
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
/**
 * Class qui recupere tout les photographes du fichier Json
 * @extends Api
 */
export class AllPhotographersApi extends Api {
	/**
	 * @property {Function} getPhotographers Obtien tout les photographes
	 * @return  tout les photographes
	 */
	async getPhotographers () {
		this.photographersData = await this.get()
		this.photographers = this.photographersData.photographers

		return this.photographers
	}

}

/**
 * Class qui recupere le photographe qui correspond a l'id dans l'url
 * @extends AllPhotographersApi
 */
export class PhotographerApi extends AllPhotographersApi {
	/**
	 * @property {Function} getPhotographer Obtien le photographe qui correspond a l'id dans l'url
	 * @return  le photographe
	 */
	async getPhotographer () {
		this.photographerData = await this.getPhotographers()
		const params = (new URL(document.location)).searchParams
		const id = params.get('id')
		this.photographer = this.photographerData.filter((e) => e.id == id)

		return this.photographer
	}

}
/**
 * Class qui recupere tout les medias
 * @extends Api
 */
export class AllMediasApi extends Api {
	/**
	 * @property {Function} getMedias Obtien tout les medias
	 * @return  les medias
	 */
	async getMedias () {
		this.mediasData = await this.get()
		this.medias = this.mediasData.media

		return this.medias
	}

}

/**
 * Class qui recupere les medias du photographe qui correspond a l'id dans l'url
 * @extends AllMediasApi
 */
export class MediaApi extends AllMediasApi {
	/**
	 * @property {Function} getMedia Obtien le photographe qui correspond a l'id dans l'url
	 * @return  les medias correspondant
	 */
	async getMedia () {
		this.medias = await this.getMedias()
		const params = (new URL(document.location)).searchParams
		const id = params.get('id')
		this.media = this.medias.filter((e) => e.photographerId == id)

		return this.media
	}

}
