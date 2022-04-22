import { PhotographersApi } from './api/api.js'
import { PhotographerCard } from './templates/HomeTemplate.js'
import { PhotographerHeader } from './templates/PhotograherTemplate.js'
import { PhotographerMedia } from './templates/MediasTemplate.js'
class App {
  constructor () {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.$photographerHeader = document.querySelector('.photograph-header')
    this.$photographerMedia = document.querySelector('.photograph-medias')
    this.datas = new PhotographersApi('../../data/photographers.json')
  }

  async home () {
    const photographersData = await this.datas.getPhotographers()
    this._photographers = photographersData.photographers

    this._photographers.forEach(photographer => {
      const template = new PhotographerCard(photographer)
      this.$photographerSection.appendChild(template.createPhotographerCard())
    })
  }

  async photographer () {
    const photographerData = await this.datas.getPhotographers()
    this._photographers = photographerData.photographers
    this._medias = photographerData.media
    const mediasConteneur = document.createElement('div')
    mediasConteneur.classList.add('media-content')
    this.$photographerMedia.appendChild(mediasConteneur)
    const id = window.location.search.split('id=')[1]
    // eslint-disable-next-line eqeqeq
    const media = !id ? this._medias : this._medias.filter((media) => media.photographerId == id)
    media.forEach(element => {
      const templateMedia = new PhotographerMedia(element)
      mediasConteneur.appendChild(templateMedia.createPhotographerMedia())
    })
    const templatedeux = new PhotographerHeader(this._photographers)
    this.$photographerHeader.appendChild(templatedeux.createPhotographerHeader())
  }
}

const app = new App()
app.home()
app.photographer()
