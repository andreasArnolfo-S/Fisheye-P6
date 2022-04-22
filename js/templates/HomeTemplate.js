export class PhotographerCard {
  constructor (photographer) {
    this._photographer = photographer
  }

  createPhotographerCard () {
    const articles = document.createElement('article')

    articles.innerHTML = `<a href='photographers.html?id=${this._photographer.id}'>
                                             <img src="../../assets/photographers/${this._photographer.portrait}" />
                                             <h2>${this._photographer.name}</h2>
                                             <p>${this._photographer.city}, ${this._photographer.country}</p>
                                             <p>${this._photographer.tagline}</p>
                                             <p>${this._photographer.price}€/jour</p>
                                        </a>`
    return articles
  }
}
