/* eslint-disable indent */
/* eslint-disable no-tabs */
import { LightboxMedia } from './lightbox'
import { TotalLikes } from './TotalLike'

/* Il crée un élément média (image ou vidéo) avec un bouton like et un titre */
export class PhotographerMedia {
	constructor (data, allmedia) {
		this.media = data
		this.allmedia = allmedia
		this.mediaImage = Object.prototype.hasOwnProperty.call(this.media, 'image')
		this.mediaVideo = Object.prototype.hasOwnProperty.call(this.media, 'video')
	}

	createPhotographerMedia (index) {
		const article = this.createElement('article', 'class', 'article')
		const img = document.createElement('img')
		const video = document.createElement('video')
		const likecontent = this.createElement('div', 'class', 'like-content')
		const title = this.createElement('h2', 'class', 'photo-title', this.media.title)
		const button = this.createElement('button', 'class', 'likeBtn')

		button.innerHTML = `<span class="num-likes">${this.media.likes}</span>
		<span class="icon"><i  class="fa-regular fa-heart"></i></span>`

		likecontent.appendChild(title)
		likecontent.appendChild(button)

		article.appendChild(likecontent)

		if (this.mediaImage) {
			img.setAttribute('src', ` ../../assets/medias/${this.media.image}`)
			img.setAttribute('alt', `image ${this.media.title}`)
			img.addEventListener('click', () => {
				const lightbox = new LightboxMedia(this.allmedia, this.media)
				return lightbox.openLightbox(index)
			})
			article.appendChild(img)
		} else if (this.mediaVideo) {
			video.setAttribute('src', ` ../../assets/medias/${this.media.video}`)
			video.setAttribute('alt', `video ${this.media.title}`)
			video.addEventListener('click', () => {
				const lightbox = new LightboxMedia(this.allmedia)
				return lightbox.openLightbox(index)
			})
			article.appendChild(video)
		}

		let clicked = false
		/* Ajout d'un écouteur d'événement au bouton. */
		button.addEventListener('click', () => {
			this.a = this.media.likes + 1
			this.b = this.a - 1
			if (!clicked) {
				clicked = true
				button.innerHTML = `<span class="num-likes">${this.a}</span>
				<span class="icon"><i  class="fa-solid fa-heart"></i></span>`
				new TotalLikes().counter()
				return button
			} else {
				clicked = false
				button.innerHTML = `<span class="num-likes">${this.b}</span>
				<span class="icon"><i  class="fa-regular fa-heart"></i></span>`
				new TotalLikes().counter()
				return button
			}
		})

		return article
	}

	/**
	  * Il crée un élément, définit un attribut et renvoie l'élément.
	  * @param el - l'élément que vous voulez créer
	  * @param attr - l'attribut que vous souhaitez définir
	  * @param attrValue - La valeur de l'attribut que vous souhaitez définir.
	  * @param htmlelValue - La valeur de l'élément.
	  * @returns l'élément qui a été créé.
	  */
	createElement (el, attr, attrValue, htmlelValue) {
		const a = document.createElement(el)
		a.setAttribute(attr, attrValue)
		if (htmlelValue !== undefined) {
			a.innerHTML = htmlelValue
		}

		return a
	}
}
