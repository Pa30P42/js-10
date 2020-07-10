import * as basicLightbox from 'basiclightbox';
import { cart } from '../cart/cart';
import template from '../cart/cartTemplate.hbs';

export const cartModal = () => {
  const markup = template(cart.order);
  console.log(markup);
  const instance = basicLightbox.create(
    `
    <div class="modal">
    <div class="modal__form-wrapper"><h2 class="modal__form-title">Cart</h2>
    ${cart.order.length > 0 ? `<ul>${markup}</ul>` : `<p>Cart is empty</p>`}
    <hr>
    <div class="cart-order-total">
    <span><b>All products in cart: </b>${cart.totalQuantity}</span>
    <span><b>Summary: </b>${cart.totalSum}</span>
    </div>
    ${
      cart.order.length > 0
        ? "<button class='orderButton'>Confirm Order</button>"
        : ''
    }
    <button class="modalBtn">close</button>
    </div>
    </div>
    `,
    {
      onShow: instance => {
        instance.element().querySelector('.modalBtn').onclick = instance.close;
      },
    },
  );

  instance.show();

  //   const templateModal = document.querySelector('#modal');
  //   const instance = basicLightbox.create(templateModal, {
  //     onShow: instance => {
  //       instance.element().querySelector('.modalBtn').onclick = instance.close;
  //     },
  //   });
  //   instance.show();
  //   const cartList = templateModal.querySelector('.order-list');
  //   console.log(cartList);
};
