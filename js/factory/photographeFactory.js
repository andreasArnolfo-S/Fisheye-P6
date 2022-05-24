import { CreateElement } from '../utils/CreateElement'

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
               innerHtml: `${this.name}`,
               tabindex: '0',
               ariaLabel: `nom : ${this.name}`
          })
          this.PHcity = CreateElement('h2', {
               class: 'ph_city',
               innerHtml: ` ${this.city + ', ' + this.country}`,
               tabindex: '0',
               ariaLabel: `${this.name} vie a ${this.city} en ${this.country}`
          })
          this.PHtagline = CreateElement('p', {
               class: 'ph_tagline',
               innerHtml: ` ${this.tagline}`,
               tabindex: '0',
               ariaLabel: ` le slogan de ${this.name} est ${this.tagline} `
          })
          this.PHportrait = CreateElement('img', {
               src: `../../assets/photographers/${this.portrait}`,
               class: 'photographer-portrait',
               alt: ` portrait de ${this.name}`,
               tabindex: '0',
               ariaLabel: `portrait de ${this.name}`
          })
          this.PHprice = CreateElement('p', {
               class: 'ph_price',
               innerHtml: ` ${this.price}$/jour`,
               tabindex: '0',
               ariaLabel: `${this.name} facture ${this.price}$ par jour`
          })
          this.link = CreateElement('a', {
               href: `photographers.html?id=${this.id}`,
               class: 'links',
               ariaLabel: `renvoie a la page personnel de ${this.name}`
          })
     }

}
