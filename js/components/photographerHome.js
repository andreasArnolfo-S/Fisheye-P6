import { CreateElement } from '../utils/CreateElement'
import Photographe from '../factory/photographe'

export class PhotographerHome extends Photographe {

     constructor (data) {
          super(data.name, data.city, data.country, data.tagline, data.price, data.portrait, data.id)
     }

     render () {

          const articles = CreateElement('article', {
               class: 'photographerCard'
          })

          articles.appendChild(this.link)
          this.link.append(this.PHportrait, this.PHname, this.PHcity, this.PHtagline, this.PHprice)

          return articles
     }

}
