import { CreateElement } from './../utils/createElement'

export class PhotographeFactory {

     constructor (name, city, country, tagline, portrait, price, id) {
          this.name = name
          this.city = city
          this.country = country
          this.tagline = tagline
          this.portrait = portrait
          this.price = price
          this.id = id

          this.PHname = CreateElement('h1', {
               class: 'ph_name',
               innerHtml: `${this.name}`
          })
          this.PHname.setAttribute('tabindex', '0')
          this.PHcity = CreateElement('h2', {
               class: 'ph_city',
               innerHtml: ` ${this.city + ', ' + this.country}`
          })
          this.PHcity.setAttribute('tabindex', '0')
          this.PHtagline = CreateElement('p', {
               class: 'ph_tagline',
               innerHtml: ` ${this.tagline}`
          })
          this.PHtagline.setAttribute('tabindex', '0')
          this.PHportrait = CreateElement('img', {
               src: `../../assets/photographers/${this.portrait}`,
               class: 'photographer-portrait',
               alt: ` portrait de ${this.name}`
          })
          this.PHportrait.setAttribute('tabindex', '0')
          this.PHprice = CreateElement('p', {
               class: 'ph_price',
               innerHtml: ` ${this.price}$/jour`
          })
          this.PHprice.setAttribute('tabindex', '0')
          this.link = CreateElement('a', {
               href: `photographers.html?id=${this.id}`,
               class: 'links'
          })
     }

}
