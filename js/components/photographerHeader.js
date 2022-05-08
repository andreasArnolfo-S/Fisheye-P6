/* eslint-disable indent */
/* eslint-disable no-tabs */

export class PhotographerHeader {
	constructor (data) {
		this._photographer = data[0]
	}

	/**
      * Il crée un élément de section, y ajoute une classe, puis y ajoute du HTML.
      * @returns La section photographe est en cours de retour.
      */
     createPhotographerHeader () {
		const photographerSection = document.createElement('section')
		photographerSection.classList.add('Photographer-flex')

		photographerSection.innerHTML = ` <div>
                                                                      <h1>${this._photographer.name}</h1>
                                                                      <h2>${this._photographer.city}, ${this._photographer.country}</h2>
                                                                      <p>${this._photographer.tagline}</p>
                                                                 </div>
                                                                 <div>
                                                                      <button class='buttonModal'>Contactez-moi</button>
                                                                 </div>
                                                                 <div>
                                                                      <img class='photographer-portrait' src="../../assets/photographers/${this._photographer.portrait}" alt="Portrait de ${this._photographer.name}" />
                                                                 </div>       
`
		return photographerSection
	}
}
