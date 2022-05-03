/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */
export class Like {

	constructor (data) {
		this.data = data
	}

	manage () {

		this.heart = document.createElement('button')
		this.heart.setAttribute('type', 'button')
		this.heart.classList.add('likeBtn')
		const template = new LikeTemplate(this.data)
		this.heart.innerHTML = template.createLikeTemplates()

		let clicked = false
		this.heart.addEventListener('click', () => {
			const icon = document.querySelector('.icon')
			if (!clicked) {
				clicked = true
				icon.innerHTML = '<i  class="fa-solid fa-heart"></i>'

			} else {
				clicked = false
				icon.innerHTML = '<i class="fa-regular fa-heart"></i>'
			}
		})

		return this.heart
	}

}

class LikeTemplate {

	constructor (data) {
		this.data = data
	}

	createLikeTemplates () {
		return `<span class="num-likes">${this.data.likes}</span>
				<span class="icon"><i  class="fa-regular fa-heart"></i></span>`
	}

}
