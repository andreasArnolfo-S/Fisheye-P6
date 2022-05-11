/* eslint-disable indent */
/* eslint-disable no-tabs */
import { LightboxMedia } from './lightbox'
import { TotalLikes } from './TotalLike'
import { CreateElement } from './CreateElement'
/* Il crée un élément média (image ou vidéo) avec un bouton like et un titre */
export class PhotographerMedia {
	constructor (data, allmedia) {
		this.media = data
		this.allmedia = allmedia
		this.mediaImage = Object.prototype.hasOwnProperty.call(this.media, 'image')
		this.mediaVideo = Object.prototype.hasOwnProperty.call(this.media, 'video')
	}

	createPhotographerMedia (index) {
		const article = CreateElement('article', {
			class: 'article'
		})

		const likecontent = CreateElement('div', {
			class: 'like-content'
		})
		const title = CreateElement('h2', {
			class: 'photo-title',
			innerHTML: this.media.title
		})
		const button = CreateElement('button', {
			class: 'likeBtn',
			innerHTML: `<span class="num-likes">${this.media.likes}</span>
			<span class="icon"><i  class="fa-regular fa-heart"></i></span>`
		})

		likecontent.appendChild(title)
		likecontent.appendChild(button)

		article.appendChild(likecontent)

		if (this.mediaImage) {
			const img = CreateElement('img', {
				src: ` ../../assets/medias/${this.media.image}`,
				alt: `image ${this.media.title}`
			})
			img.addEventListener('click', () => {
				const lightbox = new LightboxMedia(this.allmedia, this.media)
				return lightbox.openLightbox(index)
			})
			article.appendChild(img)
		} else if (this.mediaVideo) {
			const video = CreateElement('video', {
				src: ` ../../assets/medias/${this.media.video}`,
				alt: `video ${this.media.title}`
			})
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
}
