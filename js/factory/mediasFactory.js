import { CreateElement } from '../utils/CreateElement'
import { MediaBuild } from './mediasBuild'
import { TotalLikes } from './../components/TotalLike'
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
		article.setAttribute('tabindex', '-1')
		const likecontent = CreateElement('div', {
			class: 'like-content'
		})
		const title = CreateElement('h2', {
			class: 'photo-title',
			innerHTML: this.media.title,
			ariaLabel: `le titre de cette photo est ${this.media.title}`
		})
          title.setAttribute('tabindex', '0')
		this.button = CreateElement('button', {
			class: 'likeBtn',
			innerHTML: `<span aria-label='il y'a ${this.media.likes} sur cette photo' class="num-likes">${this.media.likes}</span>
			<span class="icon"><i  class="fa-regular fa-heart"></i></span>`,
			ariaLabel: `cette photo a actuellement ${this.media.likes} like ! en appuyant sur entré vous ajouterz un like`
		})

		likecontent.appendChild(title)
		likecontent.appendChild(this.button)

		article.appendChild(likecontent)
		this.mediaImage = Object.prototype.hasOwnProperty.call(this.media, 'image')
		this.mediaVideo = Object.prototype.hasOwnProperty.call(this.media, 'video')

		if (this.mediaImage) {
			article.appendChild(new MediaBuild(this.media, this.allmedia).factory('image', index))
		} else if (this.mediaVideo) {
			article.appendChild(new MediaBuild(this.media, this.allmedia).factory('video', index))
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
                    this.button.innerHTML = `<span aria-label='il y'a ${this.a} sur cette photo' class="num-likes">${this.a}</span>
				<span class="icon"><i  class="fa-solid fa-heart"></i></span>`
                    new TotalLikes().counter()
                    return this.button
               } else {
                    clicked = false
                    this.button.innerHTML = `<span aria-label='il y'a ${this.a} sur cette photo' class="num-likes">${this.b}</span>
				<span class="icon"><i  class="fa-regular fa-heart"></i></span>`
                    new TotalLikes().counter()
                    return this.button
               }
          })
     }
}
