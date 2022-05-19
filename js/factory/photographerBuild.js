import { PhotographerHeader } from '../components/photographerHeader'
import { PhotographerHome } from '../components/photographerHome'

export class PhotographerBuilder {
     constructor (data) {
          this.data = data
     }

     display (type) {
          this.home = new PhotographerHome(this.data)
          this.phPage = new PhotographerHeader(this.data)
          switch (type) {
               case 'home':
                    return this.home.render()
               case 'photographer':
                    return this.phPage.render()
          }
     }

}
