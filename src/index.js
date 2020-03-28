/* eslint-disable no-return-assign */
import footer from './footer';
import header from './header';
import imageSection from './images-section';


const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(imageSection());
content.appendChild(footer());

const images = document.querySelectorAll('.image');


function biggerImageandText() {
  if (document.querySelectorAll('.open-img').length === 0) {
    this.classList.toggle('open-img');
  } else {
    const els = document.querySelectorAll('.open-img');
    console.log(els)
    for (let i = 0; i < els.length; i += 1) {
      els[i].classList.remove('open-img');
    }
  }
}


images.forEach(image => image.addEventListener('click', biggerImageandText));
