import './style.css'
import './quote.css'

// import * as fun from 'everyday-fun';
import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

import ConfettiGenerator from "confetti-js";
import 'cors'

import Quotes from './quotes';
// import Jokes from './quotes';
import LoveCounter from './love-counter';
import Authentication from './script'

// document.querySelector('#app').innerHTML = "I 💚 Alpine JS!"

Alpine.plugin(persist)

window.Alpine = Alpine

Alpine.data('loveCounter', LoveCounter);
Alpine.data('quoteApp', Quotes)
Alpine.data('jokeApp', Quotes)
Alpine.data('users', Authentication)
Alpine.start()
