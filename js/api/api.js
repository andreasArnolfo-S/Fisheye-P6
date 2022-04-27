/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */
class Api {

	constructor (url) {
		url = '../../data/photographers.json'
		this.url = url

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

export class PhotographersApi extends Api {

	async getPhotographers () {
		this.photographersData = await this.get()
		this.photographers = this.photographersData.photographers

		return this.photographers
	}

}

export class MediasApi extends Api {

	async getMedias () {
		this.mediasData = await this.get()
		this.medias = this.mediasData.media

		return this.medias
	}

}
