import { CreateElement } from './../utils/createElement'
import { LightboxMedia } from './lightbox'

export class ImageTemplate {

     constructor (index, data, alldata) {
          this.index = index
          this.media = data
          this.allmedia = alldata
     }

     image () {
          const img = CreateElement('img', {
               src: ` ../../assets/medias/${this.media.image}`,
               alt: `image ${this.media.title}`
          })
          img.setAttribute('tabindex', '0')
          img.addEventListener('click', () => {
               const lightbox = new LightboxMedia(this.allmedia, this.media)
               return lightbox.openLightbox(this.index)
          })
          return img
     }

}
