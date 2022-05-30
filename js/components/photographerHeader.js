import { CreateElement } from './../utils/CreateElement'
import Photographe from './../factory/photographe'

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
