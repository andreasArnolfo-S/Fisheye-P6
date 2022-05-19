import { PhotographeFactory } from '../factory/photographeFactory'
import { CreateElement } from './../utils/createElement'

export class PhotographerHome extends PhotographeFactory {

     constructor (data) {
          super(data.name, data.city, data.country, data.tagline, data.portrait, data.price, data.id)
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
