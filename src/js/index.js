import '../scss/main.scss';

// uncomment the lines below to enable PWA
import { registerSW } from './pwa.js';
registerSW();

/* place your code below */

const container = document.querySelector('.app__glass');
const water = document.querySelector('.app__glass_total--water');
let glassCounter = document.createElement('div');

const key = new Date().toISOString().slice(0, 10);
let counter = key ? localStorage.getItem(key) : 0;

const addGlassButton = document.querySelector('.app__increment--js');
const decrementGlassButton = document.querySelector('.app__decrement--js');

glassCounter.classList.add('app__counter');

function updateDisplay() {
  glassCounter.innerHTML = localStorage.getItem(key);
  water.style.opacity = 0.1 * counter;
}

function checkOnLoad() {
  if (localStorage.getItem(key)) {
    updateDisplay();
  }
  if (!localStorage.getItem(key)) {
    glassCounter.innerHTML = 0;
    water.style.opacity = 0;
  }
}

function setNumberOfGlasses() {
  localStorage.setItem(key, counter);
}

function handleIncrementCounterButton() {
  counter++;
  setNumberOfGlasses();
  updateDisplay();
}

function handledecrementCounterButton() {
  counter--;
  if (counter < 0) counter = 0;
  setNumberOfGlasses();
  updateDisplay();
}

checkOnLoad();
container.appendChild(glassCounter);

addGlassButton.addEventListener('click', handleIncrementCounterButton);
decrementGlassButton.addEventListener('click', handledecrementCounterButton);
