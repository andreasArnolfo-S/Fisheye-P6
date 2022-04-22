
export class PhotographerHeader {
  constructor (data) {
    const id = window.location.search.split('id=')[1]
    // eslint-disable-next-line eqeqeq
    const photographer = !id ? data : data.filter((photographer) => photographer.id == id)
    this._photographer = photographer[0]

    console.log(photographer[0])
  }

  createPhotographerHeader () {
    const photographerSection = document.createElement('section')
    photographerSection.classList.add('Photographer-flex')

    photographerSection.innerHTML = `  <div>
                                                                      <h1>${this._photographer.name}</h1>
                                                                      <h4>${this._photographer.city}, ${this._photographer.country}</h4>
                                                                      <p>${this._photographer.tagline}</p>
                                                                      <p>${this._photographer.price}€/jour</p>
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
