/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/api/api.js":
/*!***********************!*\
  !*** ./js/api/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographersApi)\n/* harmony export */ });\n/* eslint-disable padded-blocks */\r\n/* eslint-disable no-tabs */\r\n/* eslint-disable indent */\r\nclass Api {\r\n\r\n\tconstructor (url) {\r\n\t\tthis.url = url\r\n\t}\r\n\r\n\tasync get () {\r\n\t\treturn fetch(this.url)\r\n\t\t\t.then((res) => res.json())\r\n\t\t\t.then((res) => res)\r\n\t\t\t.catch((err) =>\r\n\t\t\t\tconsole.log('une erreur est survenue :', err)\r\n\t\t\t)\r\n\t}\r\n\r\n}\r\n\r\nclass PhotographersApi extends Api {\r\n\r\n\tasync getPhotographers () {\r\n\t\treturn await this.get()\r\n\t}\r\n\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/api/api.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ \"./js/api/api.js\");\n/* harmony import */ var _templates_HomeTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/HomeTemplate */ \"./js/templates/HomeTemplate.js\");\n/* harmony import */ var _templates_PhotograherTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/PhotograherTemplate */ \"./js/templates/PhotograherTemplate.js\");\n/* harmony import */ var _templates_MediasTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/MediasTemplate */ \"./js/templates/MediasTemplate.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal */ \"./js/components/modal.js\");\n/* eslint-disable eqeqeq */\r\n/* eslint-disable padded-blocks */\r\n/* eslint-disable no-tabs */\r\n/* eslint-disable indent */\r\n/** =======================\r\n * *      Imports\r\n *========================* */\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n\r\n\tconstructor () {\r\n\t\t//   DOM elements\r\n\t\tthis.$main = document.querySelector('main')\r\n\t\tthis.$photographerSection = document.querySelector('.photographer_section')\r\n\t\tthis.$photographerHeader = document.querySelector('.photograph-header')\r\n\t\tthis.$photographerMedia = document.querySelector('.photograph-medias')\r\n\t\t// JSON url\r\n\t\tthis.datas = new _api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('../../data/photographers.json')\r\n\t}\r\n\r\n\t/** =======================\r\n\t* *      Page Home\r\n\t*========================**/\r\n\tasync home () {\r\n\r\n\t\tconst photographersData = await this.datas.getPhotographers()\r\n\r\n\t\tthis.photographers = photographersData.photographers\r\n\r\n\t\tthis.photographers.forEach((photographer) => {\r\n\t\t\tconst template = new _templates_HomeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](photographer)\r\n\t\t\tthis.$photographerSection.appendChild(template.createPhotographerCard())\r\n\t\t})\r\n\r\n\t}\r\n\r\n\t/** =======================\r\n\t* *      Page Photographer\r\n\t*========================**/\r\n\tasync photographer () {\r\n\r\n\t\tconst photographerData = await this.datas.getPhotographers()\r\n\t\tthis.photographers = photographerData.photographers\r\n\t\tthis.medias = photographerData.media\r\n\t\tconst id = window.location.search.split('id=')[1]\r\n\t\tconst media = !id ? this.medias : this.medias.filter((e) => e.photographerId == id)\r\n\t\tconst photographer = !id ? this.photographers : this.photographers.filter((e) => e.id == id)\r\n\t\tconst mediasConteneur = document.createElement('div')\r\n\t\tmediasConteneur.classList.add('media-content')\r\n\t\tthis.$photographerMedia.appendChild(mediasConteneur)\r\n\r\n\t\t/** =======================\r\n\t\t* *      Photographer header\r\n\t\t*========================**/\r\n\t\tconst templatedeux = new _templates_PhotograherTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"](photographer)\r\n\t\tthis.$photographerHeader.appendChild(\r\n\t\t\ttemplatedeux.createPhotographerHeader()\r\n\t\t)\r\n\t\t/** =======================\r\n\t\t* *      Photographer Medias\r\n\t\t*========================**/\r\n\t\tmedia.forEach((element) => {\r\n\t\t\tconst templateMedia = new _templates_MediasTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"](element)\r\n\t\t\tmediasConteneur.appendChild(templateMedia.createPhotographerMedia())\r\n\t\t})\r\n\t\t/** =======================\r\n\t\t* *      Modal\r\n\t\t*========================**/\r\n\t\tconst modalTemplate = new _components_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.photographers)\r\n\t\tthis.$main.appendChild(modalTemplate.createModalTemplate())\r\n\t\t// Close modal\r\n\t\tconst btnCloseModal = document.querySelector('.closeModal')\r\n\t\tconst modal = document.querySelector('.contact_modal')\r\n\t\tbtnCloseModal.addEventListener('click', () => {\r\n\t\t\tmodal.style.display = 'none'\r\n\t\t})\r\n\r\n\t}\r\n\r\n}\r\n\r\nconst app = new App()\r\n\r\napp.home()\r\n\r\napp.photographer()\r\n\n\n//# sourceURL=webpack://fisheye/./js/app.js?");

/***/ }),

/***/ "./js/components/Like.js":
/*!*******************************!*\
  !*** ./js/components/Like.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Like)\n/* harmony export */ });\n/* eslint-disable padded-blocks */\r\n/* eslint-disable no-tabs */\r\n/* eslint-disable indent */\r\n\r\nclass Like {\r\n\r\n    constructor (data) {\r\n        this.data = data\r\n    }\r\n\r\n    createLikeTemplates () {\r\n        this.heart = document.createElement('div')\r\n        this.heart.classList.add('like-content')\r\n        this.heart.innerHTML = `<div class=\"like\">\r\n                                                    <h2 class=\"photo-title\">${this.data.title}</h2>\r\n                                                    <h2 class=\"num-likes\">${this.data.likes}<i class=\"fa-solid fa-heart\"></i></h2>\r\n                                                </div>`\r\n        return this.heart\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/components/Like.js?");

/***/ }),

/***/ "./js/components/modal.js":
/*!********************************!*\
  !*** ./js/components/modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* eslint-disable padded-blocks */\r\n/* eslint-disable no-tabs */\r\n/* eslint-disable indent */\r\n\r\nclass Modal {\r\n\r\n\tconstructor (data) {\r\n\t\tthis._modal = document.querySelector('.contact_modal')\r\n\t\tthis._btnModal = document.querySelector('.buttonModal')\r\n\t\tthis._data = data[0]\r\n\t}\r\n\r\n\tcreateModalTemplate () {\r\n\t\tconst modal = document.createElement('div')\r\n\t\tmodal.setAttribute('role', 'dialog')\r\n\t\tmodal.setAttribute('aria-hidden', 'true')\r\n\t\tmodal.classList.add('contact_modal')\r\n\r\n\t\tmodal.innerHTML = ` <div class=\"modal\">\r\n                                            <div class=\"modal-header\">\r\n                                                <div>\r\n                                                  <h2>Contactez-moi</h2>\r\n                                                  <h2>${this._data.name}</h2>\r\n                                                </div>\r\n                                                  <img src=\"./assets/icons/close.svg\" class=\"closeModal\" />\r\n                                              </div>\r\n                                              <form>\r\n                                                  <div class=\"data-form\">\r\n                                                      <label>Prénom</label>\r\n                                                      <input />\r\n                                                  </div>\r\n                                                  <div class=\"data-form\">\r\n                                                      <label>Nom</label>\r\n                                                      <input />\r\n                                                  </div>\r\n                                                  <div class=\"data-form\">\r\n                                                      <label>Email</label>\r\n                                                      <input />\r\n                                                  </div>\r\n                                                  <div class=\"data-form\">\r\n                                                      <label>Votre message</label>\r\n                                                      <textarea>Message...</textarea>\r\n                                                  </div>\r\n                                                  <button type='submit' class=\"contact_button\">Envoyer</button>\r\n                                              </form>\r\n                                        </div>\r\n                                                 `\r\n\t\tthis._btnCloseModal = document.querySelectorAll('.closeModal')\r\n\r\n\t\tthis._btnModal.addEventListener('click', () => {\r\n\t\t\tmodal.style.display = 'block'\r\n\t\t})\r\n\r\n\t\treturn modal\r\n\t}\r\n\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/components/modal.js?");

/***/ }),

/***/ "./js/templates/HomeTemplate.js":
/*!**************************************!*\
  !*** ./js/templates/HomeTemplate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographerCard)\n/* harmony export */ });\n/* eslint-disable padded-blocks */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-tabs */\r\n/* eslint-disable indent */\r\nclass PhotographerCard {\r\n\r\n\tconstructor (photographer) {\r\n\t\tthis.photographer = photographer\r\n\t}\r\n\r\n\tcreatePhotographerCard () {\r\n\t\tconst articles = document.createElement('article')\r\n\r\n\t\tarticles.innerHTML = `<a href='photographers.html?id=${this.photographer.id}'>\r\n                                             <img src=\"../../assets/photographers/${this.photographer.portrait}\" />\r\n                                             <h2>${this.photographer.name}</h2>\r\n                                             <p>${this.photographer.city}, ${this.photographer.country}</p>\r\n                                             <p>${this.photographer.tagline}</p>\r\n                                             <p>${this.photographer.price}€/jour</p>\r\n                                        </a>`\r\n\t\treturn articles\r\n\t}\r\n\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/templates/HomeTemplate.js?");

/***/ }),

/***/ "./js/templates/MediasTemplate.js":
/*!****************************************!*\
  !*** ./js/templates/MediasTemplate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographerMedia)\n/* harmony export */ });\n/* harmony import */ var _components_Like__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Like */ \"./js/components/Like.js\");\n/* eslint-disable padded-blocks */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-tabs */\r\n/* eslint-disable indent */\r\n\r\n\r\n\r\nclass PhotographerMedia {\r\n\r\n\tconstructor (data) {\r\n\t\tthis.media = data\r\n\t}\r\n\r\n\tcreatePhotographerMedia () {\r\n\t\tconst documentFragment = document.createDocumentFragment()\r\n\t\tconst article = document.createElement('article')\r\n\t\tconst img = document.createElement('img')\r\n\t\tconst video = document.createElement('video')\r\n\t\tconst like = new _components_Like__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.media)\r\n\t\tdocumentFragment.appendChild(article)\r\n\t\tarticle.appendChild(like.createLikeTemplates())\r\n\r\n\t\tif (this.media.hasOwnProperty('image')) {\r\n\t\t\timg.setAttribute('src', ` ../../assets/medias/${this.media.image}`)\r\n\t\t\t// img.addEventListener('click', () => {\r\n\t\t\t//   const lightbox = new LightboxMedia(this._media.image)\r\n\t\t\t//   return lightbox.openLightbox()\r\n\t\t\t// })\r\n\t\t\tarticle.appendChild(img)\r\n\t\t} else if (this.media.hasOwnProperty('video')) {\r\n\t\t\tvideo.setAttribute('src', ` ../../assets/medias/${this.media.video}`)\r\n\t\t\tarticle.appendChild(video)\r\n\t\t}\r\n\t\treturn article\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/templates/MediasTemplate.js?");

/***/ }),

/***/ "./js/templates/PhotograherTemplate.js":
/*!*********************************************!*\
  !*** ./js/templates/PhotograherTemplate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographerHeader)\n/* harmony export */ });\nclass PhotographerHeader {\r\n  constructor (data) {\r\n    this._photographer = data[0]\r\n  }\r\n\r\n  createPhotographerHeader () {\r\n    const photographerSection = document.createElement('section')\r\n    photographerSection.classList.add('Photographer-flex')\r\n\r\n    photographerSection.innerHTML = `  <div>\r\n                                                                      <h1>${this._photographer.name}</h1>\r\n                                                                      <h4>${this._photographer.city}, ${this._photographer.country}</h4>\r\n                                                                      <p>${this._photographer.tagline}</p>\r\n                                                                 </div>\r\n                                                                 <div>\r\n                                                                      <button class='buttonModal'>Contactez-moi</button>\r\n                                                                 </div>\r\n                                                                 <div>\r\n                                                                      <img class='photographer-portrait' src=\"../../assets/photographers/${this._photographer.portrait}\" />\r\n                                                                 </div>       \r\n`\r\n\r\n    return photographerSection\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/templates/PhotograherTemplate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;