import '../scss/main.scss';

// uncomment the lines below to enable PWA
import { registerSW } from './pwa.js';
registerSW();

/* place your code below */

let glassCounter = document.createElement('div');
let counter = 0;

const container = document.querySelector('.app__glass');
const addGlassButton = document.querySelector('.app__increment--js');
const decrementGlassButton = document.querySelector('.app__decrement--js');

const key = new Date().toISOString().slice(0, 10);
console.log(key);

function addGlass() {
  console.log(counter);
  return counter++;
}

function reduceGlass() {
  return counter--;
}

function handleIncrementCounterButton() {
  addGlass();
}

function handledecrementCounterButton() {
  reduceGlass();
}

function styleCounter(counter) {
  glassCounter.innerHTML = counter;
  glassCounter.classList.add('app__counter');
}

function appendCounterToContainer() {
  container.appendChild(glassCounter);
}

styleCounter();
appendCounterToContainer();

addGlassButton.addEventListener('click', handleIncrementCounterButton);
decrementGlassButton.addEventListener('click', handledecrementCounterButton);
