import '../scss/main.scss';

// uncomment the lines below to enable PWA
import { registerSW } from './pwa.js';
registerSW();

/* place your code below */

const container = document.querySelector('.app__glass');
let glassCounter = document.createElement('div');

const key = new Date().toISOString().slice(0, 10);
let counter = key ? localStorage.getItem(key) : 0;

const addGlassButton = document.querySelector('.app__increment--js');
const decrementGlassButton = document.querySelector('.app__decrement--js');

glassCounter.classList.add('app__counter');
!localStorage.getItem(key)
  ? (glassCounter.innerHTML = localStorage.getItem(key))
  : 0;

function handleIncrementCounterButton() {
  counter++;
  key ? localStorage.setItem(key, counter) : null;
  glassCounter.innerHTML = localStorage.getItem(key);
}

function handledecrementCounterButton() {
  counter--;
  if (counter < 0) counter = 0;
  key ? localStorage.setItem(key, counter) : null;
  glassCounter.innerHTML = localStorage.getItem(key);
}

function appendCounterToContainer() {
  container.appendChild(glassCounter);
}

appendCounterToContainer();
glassCounter.innerHTML = localStorage.getItem(key);

addGlassButton.addEventListener('click', handleIncrementCounterButton);
decrementGlassButton.addEventListener('click', handledecrementCounterButton);
