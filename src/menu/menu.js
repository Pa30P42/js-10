import dishesTemplate from '../templates/menuItems.hbs';
import dishes from '../menu.json';

const menRef = document.querySelector('.menu');
const markup = dishesTemplate(dishes);

menRef.insertAdjacentHTML('afterbegin', markup);
