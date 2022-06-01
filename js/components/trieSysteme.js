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
          const dropBtn = CreateElement('select', {
               class: 'dropDownBtn',
               innerHtml: 'Trier par'
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

          dropCtn.append(alpha, popular, date)
          content.append(txt, dropCtn)

          dropBtn.addEventListener('click', () => {
               dropCtn.classList.toggle('show')
          })

          return content
     }

}
