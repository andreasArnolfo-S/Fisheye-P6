/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable padded-blocks */
export default class PhotographerHeader {
	constructor (data) {
		this._photographer = data[0]
	}

	createPhotographerHeader () {
		const photographerSection = document.createElement('section')
		photographerSection.classList.add('Photographer-flex')

		photographerSection.innerHTML = `  <div>
                                                                      <h1>${this._photographer.name}</h1>
                                                                      <h4>${this._photographer.city}, ${this._photographer.country}</h4>
                                                                      <p>${this._photographer.tagline}</p>
                                                                 </div>
                                                                 <div>
                                                                      <button class='buttonModal'>Contactez-moi</button>
                                                                 </div>
                                                                 <div>
                                                                      <img class='photographer-portrait' src="../../assets/photographers/${this._photographer.portrait}" />
                                                                 </div>       
`
		return photographerSection
	}

}
