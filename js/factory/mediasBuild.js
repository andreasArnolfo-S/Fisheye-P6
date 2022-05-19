import { ImageTemplate } from './../components/mediasImg'
import { VideoTemplate } from './../components/mediasVideo'

export class MediaBuild {

     constructor (media, allmedia) {
          this.media = media
          this.allmedia = allmedia
     }

     factory (type, index) {

          switch (type) {
               case 'image':
                    return new ImageTemplate(index, this.media, this.allmedia).image()
               case 'video':
                    return new VideoTemplate(index, this.media, this.allmedia).video()
          }
     }

}
