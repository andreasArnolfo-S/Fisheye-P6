/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import { CreateElement } from './CreateElement'
export class PhotographerFactory {
     constructor (data) {
          this.PHname = CreateElement('h1', {
               class: 'ph_name',
               innerHtml: ` ${data.name}`
          })

          this.PHcity = CreateElement('h2', {
               class: 'ph_city',
               innerHtml: ` ${data.city + ', ' + data.country}`
          })

          this.PHtagline = CreateElement('p', {
               class: 'ph_tagline',
               innerHtml: ` ${data.tagline}`
          })

          this.PHportrait = CreateElement('img', {
               src: `../../assets/photographers/${data.portrait}`,
               class: 'photographer-portrait'
          })

          this.PHprice = CreateElement('p', {
               class: 'ph_price',
               innerHtml: ` ${data.price}$/jour`
          })

          this.link = CreateElement('a', {
               href: `photographers.html?id=${data.id}`,
               class: 'links'
          })
     }

     /**
      * @param type - Le type de page que vous souhaitez créer.
      * @returns La valeur de retour de la fonction est la valeur de retour de la dernière instruction de la
      * fonction.
      */
     factory (type) {
          switch (type) {
               case 'home':
                    return this.homePage()
               case 'photographer':
                    return this.PhotographerPage()
          }
     }

     /**
      * Cette fonction crée un élément d'article, y ajoute un élément de lien, puis ajoute le portrait, le
      * nom, la ville, le slogan et le prix du photographe à l'élément de lien.
      * @returns L'élément article avec tous les éléments enfants.
      */
     homePage () {
          const articles = CreateElement('article', {
               class: 'photographerCard'
          })
          articles.appendChild(this.link)
          this.link.appendChild(this.PHportrait)
          this.link.appendChild(this.PHname)
          this.link.appendChild(this.PHcity)
          this.link.appendChild(this.PHtagline)
          this.link.appendChild(this.PHprice)

          return articles
     }

     /**
      * @returns L'élément section.
      */
     PhotographerPage () {
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
               innerHtml: 'openModal'
          })

          divText.appendChild(this.PHname)
          divText.appendChild(this.PHcity)
          divText.appendChild(this.PHtagline)
          console.log(this.PHname)
          divButton.appendChild(btnModal)

          divPortrait.appendChild(this.PHportrait)

          section.appendChild(divText)
          section.appendChild(divButton)
          section.appendChild(divPortrait)

          return section
     }

}
