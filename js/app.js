/* eslint-disable eqeqeq */
/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable indent */

import { HomePage } from './Vue/Home'
import { PhotographerPage } from './Vue/Photographers'
import '../css/style.scss'
class App {

     constructor () {
          this.homePage = new HomePage()
          this.photographerPage = new PhotographerPage()
     }

     async lauchPage () {
          this.homePage.home()
          this.photographerPage.photographer()
     }

}

const app = new App()

app.lauchPage()
