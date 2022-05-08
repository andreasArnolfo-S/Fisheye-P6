/* eslint-disable padded-blocks *//* eslint-disable no-tabs *//* eslint-disable indent */
/**
 * @file Home est mon ficher qui gere la page d'accueil
 * @author Andreas Arnolfo
 * @module Home module
 */

import { AllPhotographersApi } from '../api/api'
import { PhotographerFactory } from '../components/PhotographerFactory'

/* C'est une classe qui récupère les données d'une API et les affiche ensuite sur la page */
export class HomePage {

     constructor () {
          this.photographersApi = new AllPhotographersApi()
          this.$photographerSection = document.querySelector('.photographer_section')
     }

     /**
      * La fonction home est une fonction asynchrone qui obtient les données de l'API, puis crée une
      * nouvelle instance de la classe PhotographerCard pour chaque photographe dans les données et l'ajoute
      * à la section photographe.
      */
     async home () {
          const photographersData = await this.photographersApi.getPhotographers()

          photographersData.forEach((photographer) => {
               const template = new PhotographerFactory(photographer)
               this.$photographerSection.appendChild(template.homePage())
          })

          /* Une fonction qui permet de naviguer dans les cartes avec les touches fléchées. */
          this.articles = document.querySelectorAll('.links')
          this.i = -1
          document.addEventListener('keydown', (e) => {
               if (e.key === 'ArrowRight') {
                    this.i++
               } else if (e.key === 'ArrowLeft') {
                    this.i--
               }
               if (this.i > this.articles.length - 1) {
                    this.i = 0
               } else if (this.i < 0) {
                    this.i = this.articles.length - 1
               }
               const currentArticle = this.i
               this.articles[currentArticle].focus()

          })
     }

}
