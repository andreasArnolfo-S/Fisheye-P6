/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-tabs */

export class PhotographerFactory {

     constructor (data) {
          this.PHname = this.createElement('h1', 'class', 'ph_name', ` ${data.name}`)
          this.PHcity = this.createElement('h2', 'class', 'ph_city', ` ${data.city + ', ' + data.country}`)
          this.PHtagline = this.createElement('p', 'class', 'ph_tagline', ` ${data.tagline}`)
          this.PHportrait = this.createElement('img', 'src', `../../assets/photographers/${data.portrait}`)
          this.PHportrait.setAttribute('class', 'photographer-portrait')
          this.PHprice = this.createElement('p', 'class', 'ph_price', ` ${data.price}$/jour`)
          this.link = this.createElement('a', 'href', `photographers.html?id=${data.id}`)
          this.link.setAttribute('class', 'links')
     }

     /**
      * Cette fonction crée un élément d'article, y ajoute un élément de lien, puis ajoute le portrait, le
      * nom, la ville, le slogan et le prix du photographe à l'élément de lien.
      * @returns L'élément article avec tous les éléments enfants.
      */
     homePage () {
          const articles = this.createElement('article', 'class', 'photographerCard')
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
          const section = this.createElement('section', 'class', 'Photographer-flex')
          const divText = this.createElement('div', 'class', 'div-txt')
          const divButton = this.createElement('div', 'class', 'divBtn')
          const divPortrait = this.createElement('div', 'class', 'div-portrait')
          const btnModal = this.createElement('button', 'class', 'buttonModal', 'openModal')

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
