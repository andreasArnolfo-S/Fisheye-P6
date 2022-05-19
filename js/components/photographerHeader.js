import { PhotographeFactory } from '../factory/photographeFactory'
import { CreateElement } from './../utils/createElement'

export class PhotographerHeader extends PhotographeFactory {

     constructor (data) {
          super(data.name, data.city, data.country, data.tagline, data.portrait, data.price, data.id)
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
