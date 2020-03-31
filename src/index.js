/* eslint-disable no-return-assign */
import footer from './footer';
import header from './header';
import imageSection from './images-section';
import displayMenu from './menu';
import contactSection from './contact';
import locationSection from './location';


const header1 = document.getElementsByTagName('header')[0];
const content = document.getElementById('content');
header1.appendChild(header());
content.appendChild(imageSection());
content.appendChild(footer());


const UI = () => {
  const showSection = (buttonToClick, sectionToDisplay) => {
    const button = document.getElementById(buttonToClick);
    button.addEventListener('click', (e) => {
      const sectionToRemove = document.querySelector('.display-section');
      sectionToRemove.remove();
      const section = content.insertBefore(sectionToDisplay, content.lastChild);
      section.classList.add('display-section');
      e.preventDefault();
    });
  };

  const displayImage = () => {
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
  };

  const displayTheMenu = () => {
    showSection('menu-navbar', displayMenu());
  };

  const displayTheLocation = () => {
    showSection('location-navbar', locationSection());
  };

  const displayTheContact = () => {
    showSection('contact-navbar', contactSection());
  };

  const returnToMainMenu = () => {
    showSection('logo-navbar', imageSection());
  };

  return {
    displayImage, displayTheMenu, returnToMainMenu, displayTheContact, displayTheLocation,

  };
};

const ui = UI();
ui.displayImage();
ui.displayTheMenu();
ui.returnToMainMenu();
ui.displayTheContact();
ui.displayTheLocation();
