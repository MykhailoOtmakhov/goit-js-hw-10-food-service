import './styles.css'
import dishes from './menu.json'
import menuCardsTpl from './templates/menuCards.hbs'
const menuRef = document.querySelector('.js-menu');
const markup = menuCardsTpl(dishes);
menuRef.insertAdjacentHTML('beforeend', markup);

import './theme-swither';










