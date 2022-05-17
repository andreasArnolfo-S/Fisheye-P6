/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import { TotalLikes } from './TotalLike'
import { CreateElement } from './CreateElement'
import { MediaFactory } from './mediaFactory'
/* Il crée un élément média (image ou vidéo) avec un bouton like et un titre */
export class PhotographerMedia {
	constructor (data, allmedia) {
		this.media = data
		this.allmedia = allmedia
	}

	createPhotographerMedia (index) {
		const article = CreateElement('article', {
			class: 'article'
		})
		article.setAttribute('tabindex', '0')
		const likecontent = CreateElement('div', {
			class: 'like-content'
		})
		const title = CreateElement('h2', {
			class: 'photo-title',
			innerHTML: this.media.title
		})
		this.button = CreateElement('button', {
			class: 'likeBtn',
			innerHTML: `<span class="num-likes">${this.media.likes}</span>
			<span class="icon"><i  class="fa-regular fa-heart"></i></span>`
		})

		likecontent.appendChild(title)
		likecontent.appendChild(this.button)

		article.appendChild(likecontent)
		this.mediaImage = Object.prototype.hasOwnProperty.call(this.media, 'image')
		this.mediaVideo = Object.prototype.hasOwnProperty.call(this.media, 'video')

		if (this.mediaImage) {
			const image = new MediaFactory(this.media, this.allmedia)
			article.appendChild(image.factory('image', index))
		} else if (this.mediaVideo) {
			const video = new MediaFactory(this.media, this.allmedia)
			article.appendChild(video.factory('video', index))
		}
		this.like()
		return article
	}

	like () {
		let clicked = false
		/* Ajout d'un écouteur d'événement au bouton. */
		this.button.addEventListener('click', () => {
			this.a = this.media.likes + 1
			this.b = this.a - 1
			if (!clicked) {
				clicked = true
				this.button.innerHTML = `<span class="num-likes">${this.a}</span>
				<span class="icon"><i  class="fa-solid fa-heart"></i></span>`
				new TotalLikes().counter()
				return this.button
			} else {
				clicked = false
				this.button.innerHTML = `<span class="num-likes">${this.b}</span>
				<span class="icon"><i  class="fa-regular fa-heart"></i></span>`
				new TotalLikes().counter()
				return this.button
			}
		})
	}
}
