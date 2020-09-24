// importamos las funciones que vamos a testear
//import mockFirebase from '../_mocks_/firebase-mock.js';
//global.firebase = mockFirebase();
//global.fs = firebase.firestore();
//global.auth = firebase.auth();
//global.user = "L5fvLCTpCPa1lorntAVmFzHl1Dl1";
import { publicationsPage, userOptions, printPosts } from '../src/Views/publications.js';
import { savePost, saveUser, getUsers, onGetPosts } from '../src/functionsFirebase.js';


/*describe('publicationsPage', () => {
  it('debería ser una función', () => {
    expect(typeof publicationsPage).toBe('function');
  });
});*/

jest.mock('../src/functionsFirebase.js', () => ({

  upDatePosts: jest.fn(),
  deletePost: jest.fn(),

}));

import {onGetPosts, upDatePosts, deletePost} from '../src/functionsFirebase.js'

describe('publicationsPage', () => {
  it('debería ser una función', () => {
    expect(typeof publicationsPage).toBe('function');
  });
  
  it('debería retornar un HTMLElement', () => {
    expect(publicationsPage() instanceof HTMLElement).toBe(true);
  });

  it.only('debería poder borrar un post al dar un click', () => {
    const el = publicationsPage();
    const btnDelete = el.querySelector('.button btnDelete');
    console.log(btnDelete);
    //expect(container instanceof HTMLDivElement).toBe(true);
    expect(btnDelete.tagName).toBe('BUTTON');
    btnDelete.dispatchEvent(new Event('click'));
  });

});

describe('userOptions', () => {
  it('debería ser una función', () => {
    expect(typeof userOptions).toBe('function');
  });
});

/*describe('savePost', () =>{
  it('debería poder crear collección de post', () => {
    return savePost('Posts').then((data) => {
      expect(data).toBe('Pude crear una collección');
    });
  });
});*/

/*describe('saveUser', () =>{
  it('debería poder crear collección de usuarios', () => {
    return saveUser('users').then((data) => {
      expect(data).toBe('Pude crear una collección');
    });
  });
});*/    



 