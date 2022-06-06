import { CreateElement } from '../utils/CreateElement'
import Photographe from '../factory/photographe'

/* C'est une classe qui crée une carte pour chaque photographe. */
export class PhotographerHome extends Photographe {

     constructor (data) {
          super(data.name, data.city, data.country, data.tagline, data.price, data.portrait, data.id)
          this.data = data
     }

     render () {

          const articles = CreateElement('article', {
               class: 'photographerCard'
          })
          articles.append(this.PHportrait, this.PHname, this.PHcity, this.PHtagline, this.PHprice)

          articles.addEventListener('click', () => {
               window.location.href = (`photographers.html?id=${this.data.id}`)
          })
          return articles
     }

}
