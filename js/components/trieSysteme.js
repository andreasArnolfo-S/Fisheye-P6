import { CreateElement } from '../utils/CreateElement'

/* Il crée un menu déroulant avec trois options. */
export class TrieSysteme {

     trieSysteme () {
          const content = CreateElement('div', {
               class: 'trieContainer'
          })
          const txt = CreateElement('p', {
               class: 'trieText',
               innerHTML: 'Trier par :'
          })
          const dropCtn = CreateElement('select', {
               class: 'dropdown-content',
               ariaLabel: 'Trier par'
          })
          const alpha = CreateElement('option', {
               class: 'titleDrop',
               innerHtml: 'Titre',
               value: 'title'
          })
          const popular = CreateElement('option', {
               class: 'popDrop',
               innerHtml: 'Popularité',
               value: 'popular'
          })
          const date = CreateElement('option', {
               class: 'dateDrop',
               innerHtml: 'Date',
               value: 'date'
          })
          const separator = CreateElement('hr', {
               class: 'separator'
          })
          const separator2 = CreateElement('hr', {
               class: 'separator'
          })

          dropCtn.append(alpha, separator, popular, separator2, date)
          content.append(txt, dropCtn)

          return content
     }

}
