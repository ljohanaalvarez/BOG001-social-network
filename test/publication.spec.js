const firebasemock = require ('firebase-mock');
const mockauth =  new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
global.firebase = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => {
    return null;
  },
  // use null if your code does not use AUTHENTICATION
  () => {
    return mockauth;
  },
  // use null if your code does not use FIRESTORE
  () => {
    return mockfirestore;
  },
  // use null if your code does not use STORAGE
  () => {
    return null;
  },
  // use null if your code does not use MESSAGING
  () => {
    return null;
  }
);

import {addOrRemoveLike} from '../src/Views/publications.js';

global.localStorage = {
    getItem(id){
        return JSON.stringify({
            userLikes:[],
            counterLikes: 0,
        })
    }
}

describe('addOrRemoveLike', () => {
    it('debería ser una función', () => {
      expect(typeof addOrRemoveLike).toBe('function');
    });
    
    it('Probando el primer branch, agregar like', () => {
        const eventMock = {
            target: {
                className: 'fas fa-thumbs-up likeDown',
                classList:{
                    remove(type){
                        expect(type).toBe('likeDown');
                    },
                    add(type){
                        expect(type).toBe('likeUp');
                    }
                },
                dataset:{
                    id:'abc123'
                }
            }
        }
        addOrRemoveLike(eventMock);
        console.log(firebase.firestore().collection('posts').doc(id).get());

    })

})