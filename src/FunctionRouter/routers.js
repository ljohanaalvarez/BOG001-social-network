import { createWellcomePage } from '../Views/home.js';
import { publicationsPage } from '../../Views/publications.js';
import { myPublicationsPage } from '../../Views/mypublications.js';
import { createPublicationsPage } from '../../Views/createpublications.js';
// aqui exportaras las funciones que necesites
let root = document.querySelector("#root");

export const router = (route) => {
  root.innerHTML= '';
  switch(route) {
    case '#/home':
      root.appendChild(createWellcomePage());
    break;
      case '#/publicaciones':
      root.appendChild(publicationsPage());
    break;
    case '#/mispublicaciones':
      root.appendChild(myPublicationsPage());
    break;
    case '#/crearpublicacion':
      root.appendChild(createPublicationsPage());
    break;
    default: 
      root.appendChild(createWellcomePage());
    
  };
};
