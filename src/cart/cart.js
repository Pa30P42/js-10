import { cartModal } from '../modals/cartModal';

const refs = {
  cartBtn: document.querySelector('.cart'),
};

export const cart = {
  order: [],
  totalSum: 0,
  totalQuantity: 0,
};

export const addToCart = dish => {
  const result = cart.order.find(item => item.name === dish.name);
  if (!result) {
    cart.order = [
      ...cart.order,
      {
        id: dish.id,
        name: dish.name,
        price: dish.price,
        quantity: 1,
      },
    ];
  } else {
    cart.order = cart.order.map(item => {
      if (item.name === dish.name) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
  }
  getTotal();
};

export const removeFromCart = id => {
  cart.order = cart.order.filter(dish => dish.id !== id);
  // getTotal();
};

export const getTotal = () => {
  cart.totalSum = cart.order.reduce((acc, dish) => {
    acc += dish.price * dish.quantity;
    return acc;
  }, 0);
  cart.totalQuantity = cart.order.reduce((acc, dish) => {
    acc += dish.quantity;
    return acc;
  }, 0);
};

refs.cartBtn.addEventListener('click', cartModal);
//====

///====

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

// function addToCartFn(e) {
//   console.log(e.target);
//   const dishId = e.target.previousElementSibling.dataset.id;

//   const chosenDish = dishes.find(dish => dish.id === dishId);

//   for (let prod of cart.products) {
//     if (prod.id === dishId) {
//       prod.quantity += 1;
//       let newArr = [...cart.products];
//       cart.products = newArr;
//       console.log(cart.products);
//     }
//   }
//   const newProduct = {
//     name: chosenDish.name,
//     price: chosenDish.price,
//     id: chosenDish.id,
//     quantity: 1,
//   };
//   cart.products = [newProduct, ...cart.products];

//   //   console.log(cart.products);
// }
