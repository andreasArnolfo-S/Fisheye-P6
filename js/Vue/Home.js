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
          this.photographerSection = document.querySelector('.photographer_section')
          this.body = document.querySelector('body')
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
               this.photographerSection.appendChild(template.factory('home'))
          })

          this.navigate()
     }

     navigate () {
          /* Une fonction qui permet de naviguer dans les cartes avec les touches fléchées. */
          this.articles = document.querySelectorAll('.links')
          this.i = -1
          document.addEventListener('keydown', (e) => {
               if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
               e.preventDefault()
               switch (e.key) {
                    case 'ArrowRight':
                         this.i++
                         break
                    case 'ArrowLeft':
                         this.i--
                         break
                    case 'ArrowDown':
                         this.i += 3
                         break
                    case 'ArrowUp':
                         this.i -= 3
                         break
               }

               if (this.i > this.articles.length - 1) {
                    this.i = 0
               } else if (this.i < 0) {
                    this.i = this.articles.length - 1
               }
               const currentArticle = this.i
               return this.articles[currentArticle].focus()
          })
     }

}
