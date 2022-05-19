import { CreateElement } from '../utils/CreateElement'

/* Il crée un menu déroulant avec trois options. */
export class TrieSysteme {

     trieSysteme () {
          const content = CreateElement('div', {
               class: 'trieContainer'
          })
          const dropBtn = CreateElement('button', {
               class: 'dropDownBtn',
               innerHtml: 'Trier par'
          })
          const dropCtn = CreateElement('div', {
               class: 'dropdown-content'
          })
          const alpha = CreateElement('p', {
               class: 'titleDrop',
               innerHtml: 'Titre'
          })
          const popular = CreateElement('p', {
               class: 'popDrop',
               innerHtml: 'Popularité'
          })
          const date = CreateElement('p', {
               class: 'dateDrop',
               innerHtml: 'Date'
          })

          dropCtn.append(alpha, popular, date)
          content.append(dropBtn, dropCtn)

          dropBtn.addEventListener('click', () => {
               dropCtn.classList.toggle('show')
          })

          return content
     }

}
