/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */
class Api {

	constructor (url) {
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

export default class PhotographersApi extends Api {

	async getPhotographers () {
		return await this.get()
	}

}
