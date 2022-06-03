import { CreateElement } from '../utils/CreateElement'
import { TotalLikes } from './../components/TotalLike'
import Media from './media'
import { LightboxMedia } from './../components/lightbox'
/* Il crée un élément média (image ou vidéo) avec un bouton like et un titre */
export class PhotographerMedia extends Media {
	constructor (data, allmedia) {
		super(data.title, data.likes, data.image, data.video, data.id)
		this.media = data
		this.allmedia = allmedia
	}

	createPhotographerMedia (index) {
		const article = CreateElement('article', {
			class: 'article',
			tabindex: '-1'
		})
		const likecontent = CreateElement('div', {
			class: 'like-content'
		})

		likecontent.appendChild(this.title)
		likecontent.appendChild(this.button)
		likecontent.appendChild(this.id)

		article.appendChild(likecontent)
		this.mediaImage = Object.prototype.hasOwnProperty.call(this.media, 'image')
		this.mediaVideo = Object.prototype.hasOwnProperty.call(this.media, 'video')

		if (this.mediaImage) {
			article.appendChild(this.img)
			this.img.addEventListener('click', () => {
				const lightbox = new LightboxMedia(this.allmedia, this.media)
				return lightbox.openLightbox(index)
			})
		} else if (this.mediaVideo) {
			article.appendChild(this.video)
			this.video.addEventListener('click', () => {
				const lightbox = new LightboxMedia(this.allmedia)
				return lightbox.openLightbox(index)
			})
		}

		this.like()
		return article
	}

	/**
	 * La fonction est appelée lorsque l'utilisateur clique sur le bouton J'aime. Si l'utilisateur n'a pas
	 * cliqué sur le bouton, le bouton sera cliqué et le nombre de likes sera incrémenté de un. Si
	 * l'utilisateur a déjà cliqué sur le bouton, le bouton sera décoché et le nombre de likes sera
	 * décrémenté de un.
	 */
     like () {
          let clicked = false
          /* Ajout d'un écouteur d'événement au bouton. */
          this.button.addEventListener('click', () => {
               this.a = this.media.likes + 1
               this.b = this.a - 1
               if (!clicked) {
                    clicked = true
                    this.button.innerHTML = `<span aria-label='il y'a ${this.a} sur cette photo' class="num-likes">${this.a}</span>
				<span class="icon"><i  class="fa-solid fa-heart"></i></span>`
                    new TotalLikes().likecounter()
                    return this.button
               } else {
                    clicked = false
                    this.button.innerHTML = `<span aria-label='il y'a ${this.a} sur cette photo' class="num-likes">${this.b}</span>
				<span class="icon"><i  class="fa-regular fa-heart"></i></span>`
                    new TotalLikes().likecounter()
                    return this.button
               }
          })
     }
}
