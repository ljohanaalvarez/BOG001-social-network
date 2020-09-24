// importamos las funciones que vamos a testear
//import mockFirebase from '../_mocks_/firebase-mock.js';
//global.firebase = mockFirebase();
//global.fs = firebase.firestore();
//global.auth = firebase.auth();
//global.user = "L5fvLCTpCPa1lorntAVmFzHl1Dl1";
import { publicationsPage, userOptions } from '../src/Views/publications.js';
import { savePost, saveUser, getUsers } from '../src/functionsFirebase.js';


/*describe('publicationsPage', () => {
  it('debería ser una función', () => {
    expect(typeof publicationsPage).toBe('function');
  });
});*/

jest.mock('../src/functionsFirebase.js', () => ({
  onGetPosts: () => {},
  upDatePosts: () => {},
}));

describe('publicationsPage', () => {
  it('debería ser una función', () => {
    expect(typeof publicationsPage).toBe('function');
  });
  
  it('debería retornar un HTMLElement', () => {
    expect(publicationsPage() instanceof HTMLElement).toBe(true);
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



 