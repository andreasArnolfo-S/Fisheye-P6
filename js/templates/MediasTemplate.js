/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable indent */

import Like from '../components/Like'

export default class PhotographerMedia {

	constructor (data) {
		this.media = data
	}

	createPhotographerMedia () {
		const documentFragment = document.createDocumentFragment()
		const article = document.createElement('article')
		const img = document.createElement('img')
		const video = document.createElement('video')
		const like = new Like(this.media)
		documentFragment.appendChild(article)
		article.appendChild(like.createLikeTemplates())
		const mediaImage = Object.prototype.hasOwnProperty.call(this.media, 'image')
		const mediaVideo = Object.prototype.hasOwnProperty.call(this.media, 'video')

		if (mediaImage) {
			img.setAttribute('src', ` ../../assets/medias/${this.media.image}`)
			// img.addEventListener('click', () => {
			//   const lightbox = new LightboxMedia(this._media.image)
			//   return lightbox.openLightbox()
			// })
			article.appendChild(img)
		} else if (mediaVideo) {
			video.setAttribute('src', ` ../../assets/medias/${this.media.video}`)
			article.appendChild(video)
		}
		return article
	}

}
