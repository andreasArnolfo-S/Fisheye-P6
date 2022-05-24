import { CreateElement } from './../utils/CreateElement'
import { LightboxMedia } from './lightbox'

export class VideoTemplate {
     constructor (index, data, alldata) {
          this.index = index
          this.media = data
          this.allmedia = alldata
     }

     video () {
          const video = CreateElement('video', {
               src: ` ../../assets/medias/${this.media.video}`,
               alt: `video ${this.media.title}`
          })
          video.setAttribute('tabindex', '0')
          video.addEventListener('click', () => {
               const lightbox = new LightboxMedia(this.allmedia)
               return lightbox.openLightbox(this.index)
          })
          return video
     }

}
