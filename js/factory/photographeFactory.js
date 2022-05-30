import { PhotographerHome } from './../components/photographerHome'
import { PhotographerHeader } from './../components/photographerHeader'

export class PhotographeFactory {

     constructor (data, type) {
          this.data = data

          switch (type) {
               case 'home':
                    return new PhotographerHome(this.data).render()
               case 'photographer':
                    return new PhotographerHeader(this.data).render()
               default:
                    return console.log('Erreur de type de media')
          }

     }

}
