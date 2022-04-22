import { PhotographersApi } from './api/api.js'
import { PhotographerCard } from './templates/HomeTemplate.js'
import { PhotographerHeader } from './templates/PhotograherTemplate.js'

import '../css/style.scss'

class App {
  constructor () {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.$photographerHeader = document.querySelector('.photograph-header')
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
    this._media = photographerData.medias

    const templatedeux = new PhotographerHeader(this._photographers)
    this.$photographerHeader.appendChild(templatedeux.createPhotographerHeader())
  }
}

const app = new App()
app.home()
app.photographer()
