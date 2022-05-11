/* eslint-disable padded-blocks *//* eslint-disable no-tabs *//* eslint-disable indent */

import { HomePage } from './Vue/Home'
import { PhotographerPage } from './Vue/Photographers'
import '../css/style.scss'

/* La classe App est la classe principale qui sera utilisée pour lancer la page d'accueil et la page du
photographe. */
class App {

	constructor () {
		this.homePage = new HomePage()
		this.photographerPage = new PhotographerPage()

	}

	lauchPage () {
		const url = window.location.pathname

		if (url === '/index.html' || url === '/') {
			this.homePage.home()
		} else if (url === '/photographers.html') {
			this.photographerPage.photographer()
		}

	}

}

const app = new App()

app.lauchPage()
