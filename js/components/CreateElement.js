/* eslint-disable no-useless-call */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/**
 * Il crée un élément du type que vous spécifiez, puis lui ajoute les attributs que vous spécifiez.
 * @param type - Le type d'élément que vous souhaitez créer.
 * @param attributes - {
 * @param inHtml - L'innerHTML de l'élément.
 * @returns l'élément.
 */
export function CreateElement (type, attributes) {
     const element = document.createElement(type)
     for (const key in attributes) {
          if (key === 'class') {
               element.classList.add.call(element.classList, attributes[key])
          } else if (key === 'innerHtml') {
               element.innerHTML = attributes[key]
          } else {
               element[key] = attributes[key]
          }
     }

     return element
}
