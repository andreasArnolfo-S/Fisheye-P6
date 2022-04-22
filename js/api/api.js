class Api {
  constructor (url) {
    this._url = url
  }

  async get () {
    return fetch(this._url)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) =>
        console.log('une erreur est survenue :', err)
      )
  }
}

export class PhotographersApi extends Api {
  async getPhotographers () {
    return await this.get()
  }
}
