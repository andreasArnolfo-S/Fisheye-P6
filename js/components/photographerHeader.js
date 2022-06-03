import { CreateElement } from './../utils/CreateElement'
import Photographe from './../factory/photographe'

/* C'est une classe qui étend la classe Photographe et rend une section avec un div contenant le nom,
la ville et le slogan du photographe, un div contenant un bouton et un div contenant le portrait du
photographe. */
export class PhotographerHeader extends Photographe {

     constructor (data) {
          super(data.name, data.city, data.country, data.tagline, data.price, data.portrait, data.id)
     }

     render () {
          const section = CreateElement('section', {
               class: 'Photographer-flex'
          })
          const divText = CreateElement('div', {
               class: 'div-txt'
          })
          const divButton = CreateElement('div', {
               class: 'divBtn'
          })
          const divPortrait = CreateElement('div', {
               class: 'div-portrait'
          })
          const btnModal = CreateElement('button', {
               class: 'buttonModal',
               innerHtml: 'Contactez-moi'
          })

          divText.append(this.PHname, this.PHcity, this.PHtagline)

          divButton.appendChild(btnModal)

          divPortrait.appendChild(this.PHportrait)

          section.append(divText, divButton, divPortrait)

          return section
     }
}
