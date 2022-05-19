export class NavigateHome {
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

export class NavigatePH {
     navigate () {
          this.articles = document.querySelectorAll('.article')
          this.i = -1
          document.addEventListener('keydown', (e) => {
               if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
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
