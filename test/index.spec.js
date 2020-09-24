// importamos la funcion que vamos a testear
import { publicationsPage } from '../src/Views/publications.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});