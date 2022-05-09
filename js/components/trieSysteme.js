/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-tabs */

export class TrieSysteme {

     trieSysteme () {
          const content = this.createElement('div', 'class', 'trieContainer')
          const dropBtn = this.createElement('button', 'class', 'dropDownBtn contact_button', 'triez par')
          const dropCtn = this.createElement('div', 'class', 'dropdown-content')
          const alpha = this.createElement('p', 'class', 'titleDrop', 'Titre')
          const popular = this.createElement('p', 'class', 'popDrop', 'Popularité')
          const date = this.createElement('p', 'class', 'dateDrop', 'Date')

          content.appendChild(dropBtn)
          dropCtn.appendChild(alpha)
          dropCtn.appendChild(popular)
          dropCtn.appendChild(date)
          content.appendChild(dropCtn)

          dropBtn.addEventListener('click', () => {
               dropCtn.classList.toggle('show')
          })

          return content
     }

     /**
       * Il crée un élément, définit un attribut et renvoie l'élément.
       * @param el - l'élément que vous voulez créer
       * @param attr - l'attribut que vous souhaitez définir
       * @param attrValue - La valeur de l'attribut que vous souhaitez définir.
       * @param htmlelValue - La valeur de l'élément.
       * @returns l'élément qui a été créé.
       */
     createElement (el, attr, attrValue, htmlelValue) {
          const a = document.createElement(el)
          a.setAttribute(attr, attrValue)
          if (htmlelValue !== undefined) {
               a.innerHTML = htmlelValue
          }

          return a
     }
}
