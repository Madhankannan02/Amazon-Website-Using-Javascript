import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe ('test Suite: addToCart()',()=>{
 it ('add an existing product to cart', ()=>{
  spyOn(localStorage,'setItem');
  spyOn(localStorage, 'getItem').and.callFake(()=>{
   return JSON.stringify([{
    productId: '5968897c-4d27-4872-89f6-5bcb052746d7',
    quantity: 1,
    deliveryOptionId: '1'
   }]);
  });
  loadFromStorage();

  addToCart('5968897c-4d27-4872-89f6-5bcb052746d7');
  expect(cart.length).toEqual(1);
  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(cart[0].productId).toEqual('5968897c-4d27-4872-89f6-5bcb052746d7');
  expect(cart[0].quantity).toEqual(2);

 });



 it ('adds a new product to the cart', ()=>{
  spyOn(localStorage,'setItem');

  spyOn(localStorage, 'getItem').and.callFake(()=>{
   return JSON.stringify([]);
  });
  loadFromStorage();

  addToCart('5968897c-4d27-4872-89f6-5bcb052746d7');
  expect(cart.length).toEqual(1);
  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(cart[0].productId).toEqual('5968897c-4d27-4872-89f6-5bcb052746d7');
  expect(cart[0].quantity).toEqual(1);
 });
});