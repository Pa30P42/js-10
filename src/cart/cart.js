// import * as basicLightbox from 'basiclightbox';
// import dishes from '../menu.json';
// const cartRef = document.querySelector('.cart');

// // const instance = basicLightbox.create(document.querySelector('template'));
// // const cartRef = document.querySelector('.cart');
// // cartRef.addEventListener('click', instance.show);
// const name = 'Ismayil';

// const instance = basicLightbox.create(
//   `
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <p>${name}</p>
//         <a class="closeBtn">Close</a>
//     </div>
// `,
//   {
//     onShow: instance => {
//       instance.element().querySelector('a').onclick = instance.close;
//     },
//   },
// );

// cartRef.addEventListener('click', instance.show);

// //======addProduct

// const addToCartRef = document.querySelector('.card__button');

// const menuRef = document.querySelector('.menu');

// menuRef.addEventListener('click', addToCartFn);

// const cart = {
//   products: [],
// };
// let newProduct = {
//   name: '',
//   price: 0,
//   id: '',
//   quantity: 0,
// };

// function addToCartFn(e) {
//   const dishId = e.target.previousElementSibling.dataset.id;

//   const chosenDish = dishes.find(dish => dish.id === dishId);

//   for (let prod of cart.products) {
//     if (prod.id !== dishId) {
//       newProduct = {
//         name: chosenDish.name,
//         price: chosenDish.price,
//         id: chosenDish.id,
//         quantity: 1,
//       };
//     } else {
//       const newCartProducts = cart.products.map(prod => (prod.quantity += 1));
//       console.log(newCartProducts);
//     }
//   }
//   cart.products = [newProduct, ...cart.products];

//   // console.log(cart.products);
// }
