/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

export default class Like {

    constructor (data) {
        this.data = data
    }

    createLikeTemplates () {
        this.heart = document.createElement('div')

        this.heart.classList.add('like-content')
        this.heart.innerHTML = `<div class="like">
                                                    <h2 class="photo-title">${this.data.title}</h2>
                                                    <h2 class="num-likes">${this.data.likes}<i  class="fa-regular fa-heart icon"></i></h2>
                                                </div>`
        return this.heart
    }

}

