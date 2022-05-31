import { CreateElement } from './../utils/CreateElement'

/* C'est une classe qui crée un objet média avec un titre, des likes, une image ou une vidéo. */
export default class Media {

     constructor (title, likes, image, video) {
          if (image !== undefined) {
               this.img = CreateElement('img', {
                    src: ` ../../assets/medias/${image}`,
                    alt: `image ${title}`,
                    tabindex: '0'
               })
          }
          if (video !== undefined) {
               this.video = CreateElement('video', {
                    innerHTML: `<source src="../../assets/medias/${video}" type="video/mp4">`,
                    alt: `video ${title}`,
                    tabindex: '0'
               })
          }
          this.title = CreateElement('h2', {
               class: 'photo-title',
               innerHTML: title,
               ariaLabel: `le titre de cette photo est ${title}`,
               tabindex: '0'
          })

          this.button = CreateElement('button', {
               class: 'likeBtn',
               innerHTML: `<span aria-label='il y'a ${likes} sur cette photo' class="num-likes">${likes}</span>
			<span class="icon"><i  class="fa-regular fa-heart"></i></span>`,
               ariaLabel: `cette photo a actuellement ${likes} like ! en appuyant sur entré vous ajouterz un like`
          })
     }
}
