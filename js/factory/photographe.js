// build class photographe create all element of my phtographer page
import { CreateElement } from '../utils/CreateElement'

export default class Photographe {

     constructor (name, city, country, tagline, price, portrait, id) {

          this.PHname = CreateElement('h1', {
               class: 'ph_name',
               innerHtml: `${name}`,
               tabindex: '0',
               ariaLabel: `nom : ${name}`
          })
          this.PHcity = CreateElement('h2', {
               class: 'ph_city',
               innerHtml: ` ${city + ', ' + country}`,
               tabindex: '0',
               ariaLabel: `${name} vie a ${city} en ${country}`
          })
          this.PHtagline = CreateElement('p', {
               class: 'ph_tagline',
               innerHtml: ` ${tagline}`,
               tabindex: '0',
               ariaLabel: ` le slogan de ${name} est ${tagline} `
          })
          this.PHportrait = CreateElement('img', {
               src: `../../assets/photographers/${portrait}`,
               class: 'photographer-portrait',
               alt: ` portrait de ${name}`,
               tabindex: '0',
               ariaLabel: `portrait de ${name}`
          })
          this.PHprice = CreateElement('p', {
               class: 'ph_price',
               innerHtml: ` ${price}$/jour`,
               tabindex: '0',
               ariaLabel: `${name} facture ${price}$ par jour`
          })
          this.link = CreateElement('a', {
               href: `photographers.html?id=${id}`,
               class: 'links',
               ariaLabel: `renvoie a la page personnel de ${name}`
          })
     }

}
