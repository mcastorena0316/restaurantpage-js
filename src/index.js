/* eslint-disable no-return-assign */
import footer from './footer';
import header from './header';
import imageSection from './images-section';
import displayMenu from './menu';


const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(imageSection());
content.insertBefore(displayMenu(), content.lastChild);
content.appendChild(footer());


const images = document.querySelectorAll('.image');


function biggerImageandText() {
  if (document.querySelectorAll('.open-img').length === 0) {
    this.classList.toggle('open-img');
  } else {
    const els = document.querySelectorAll('.open-img');
    for (let i = 0; i < els.length; i += 1) {
      els[i].classList.remove('open-img');
    }
  }
}

images.forEach(image => image.addEventListener('click', biggerImageandText));


function showMenu() {
  document.querySelector('.menu-section').style.display = 'block';
  document.querySelector('.images-sections').style.display = 'none';
}

const menu = document.getElementById('menu-navbar');
menu.addEventListener('click', showMenu);

function backToImageSection() {
  document.querySelector('.menu-section').style.display = 'none';
  document.querySelector('.images-sections').style.display = 'flex';
}

const menulogo = document.getElementById('logo-navbar');
menulogo.addEventListener('click', backToImageSection);