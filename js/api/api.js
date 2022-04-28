/* eslint-disable eqeqeq */
/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

/** ------------------------------------------------------------------------
 * *                           				API
 * ! Desciption des class :
 * ? Api => global Json
 * ? AllPhotographersApi => tous les photographes sans les medias
 * ? AllMediasApi => tous les medias sans les photographes
 * ? PhotographerApi => photographe correspondant a l'id passer dans l'url
 * ? MediaApi => media correspondant a l'id du photographe passer dans l'url
 *------------------------------------------------------------------------**/
class Api {

	constructor () {
		this.url = '../../data/photographers.json'
	}

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

	async getPhotographers () {
		this.photographersData = await this.get()
		this.photographers = this.photographersData.photographers

		return this.photographers
	}

}

export class PhotographerApi extends AllPhotographersApi {

	async getPhotographer () {
		this.photographerData = await this.getPhotographers()
		const params = (new URL(document.location)).searchParams
		const id = params.get('id')
		this.photographer = this.photographerData.filter((e) => e.id == id)

		return this.photographer
	}

}

export class AllMediasApi extends Api {

	async getMedias () {
		this.mediasData = await this.get()
		this.medias = this.mediasData.media

		return this.medias
	}

}

export class MediaApi extends AllMediasApi {

	async getMedia () {
		this.medias = await this.getMedias()
		const params = (new URL(document.location)).searchParams
		const id = params.get('id')
		this.media = this.medias.filter((e) => e.photographerId == id)

		return this.media
	}

}
