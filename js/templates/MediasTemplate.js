// import { LightboxMedia } from './lightbox.js'

export class PhotographerMedia {
  constructor (data) {
    this._media = data
  }

  createPhotographerMedia () {
    const article = document.createElement('article')
    const img = document.createElement('img')
    const video = document.createElement('video')

    if (this._media.hasOwnProperty('image')) {
      img.setAttribute('src', ` ../../assets/medias/${this._media.image}`)
      // img.addEventListener('click', () => {
      //   const lightbox = new LightboxMedia(this._media.image)
      //   return lightbox.openLightbox()
      // })
      article.appendChild(img)
    } else if (this._media.hasOwnProperty('video')) {
      video.setAttribute('src', ` ../../assets/medias/${this._media.video}`)
      article.appendChild(video)
    }
    return article
  }
}
