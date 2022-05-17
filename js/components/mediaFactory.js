/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import { CreateElement } from './CreateElement'
import { LightboxMedia } from './lightbox'

export class MediaFactory {

     constructor (media, allmedia) {
          this.media = media
          this.allmedia = allmedia
     }

     /**
      * @param type - Le type de média.
      * @param index - Index de l'élément dans le tableau.
      * @returns La valeur de retour de la fonction est la valeur de retour de la dernière instruction
      * exécutée dans la fonction.
      */
     factory (type, index) {
          switch (type) {
               case 'image':
                    return this.image(index)
               case 'video':
                    return this.video(index)
          }
     }

     /**
      * Il crée un élément image, lui ajoute un écouteur d'événement et renvoie l'élément image.
      * @param index - l'index du média courant dans le tableau
      * @returns L'élément image.
      */
     image (index) {
          const img = CreateElement('img', {
               src: ` ../../assets/medias/${this.media.image}`,
               alt: `image ${this.media.title}`
          })
          img.addEventListener('click', () => {
               const lightbox = new LightboxMedia(this.allmedia, this.media)
               return lightbox.openLightbox(index)
          })
          return img
     }

     /**
      * Il crée un élément vidéo, y ajoute un écouteur d'événement et renvoie l'élément vidéo.
      * @param index - l'index du média courant dans le tableau
      * @returns L'élément vidéo.
      */
     video (index) {
          const video = CreateElement('video', {
               src: ` ../../assets/medias/${this.media.video}`,
               alt: `video ${this.media.title}`
          })
          video.addEventListener('click', () => {
               const lightbox = new LightboxMedia(this.allmedia)
               return lightbox.openLightbox(index)
          })
          return video
     }
}
