import '../../css/style.scss'
import { AllPhotographersApi } from '../Api/api'
import { NavigateHome } from '../utils/navigate'
import { PhotographeFactory } from './../factory/photographeFactory'

/* C'est une classe qui récupère tous les photographes de la base de données et les affiche sur la page
d'accueil */
export class HomePage {

     constructor () {
          this.photographersApi = new AllPhotographersApi()
          this.photographerSection = document.querySelector('.photographer_section')
          this.body = document.querySelector('body')
     }

     async home () {
          const photographersData = await this.photographersApi.getPhotographers()

          for (const photographer of photographersData) {
               this.photographerSection.appendChild(new PhotographeFactory(photographer, 'home'))
          }

          const navigate = new NavigateHome()
          navigate.navigate()
     }

}

const home = new HomePage()
home.home()
