/* eslint-disable no-useless-escape */
export default class FormValidation {
     constructor () {
          this.firstname = document.querySelector('#firstname')
          this.lastname = document.querySelector('#lastname')
          this.email = document.querySelector('#email')
          this.message = document.querySelector('#message').value
     }

     validate () {
          const lastNameRegex = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}[-]?([\w]+)?([-\d])?/.test(this.lastname.value)
          const firstNameRegex = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}[-]?([\w]+)?([-\d])?/.test(this.firstname.value)
          const emailRegex = /^(\w[-\.]?)*@[\w]{1,}(\.\w{2,3}){1,2}$/.test(this.email.value)

          if (lastNameRegex === true && firstNameRegex === true && emailRegex === true && this.message !== '') {
               return true
          } else {
               return false
          }
     }
}
