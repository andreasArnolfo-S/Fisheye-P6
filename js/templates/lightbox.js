export class LightboxMedia {
  constructor (data) {
    this.data = data
    this._lightbox = document.querySelector('.lightbox')
    this._close = document.querySelector('.close')
  }

  openLightbox () {
    console.log('coucou')
    this._lightbox.style.display = 'block'
    this._close.addEventListener('click', () => { this._lightbox.style.display = 'none' })
  }
}
