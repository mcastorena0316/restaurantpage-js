/* eslint-disable no-return-assign */
import footer from './footer';
import header from './header';
import imageSection from './images-section';
import displayMenu from './menu';
import contactSection from './contact';
import locationSection from './location';

const newPage = () => {
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(imageSection());
  content.insertBefore(displayMenu(), content.lastChild);
  content.insertBefore(contactSection(), content.lastChild);
  content.insertBefore(locationSection(), content.lastChild);
  content.appendChild(footer());
};

const UI = () => {
  const showSection = (buttonToClick, sectionToDisplay) => {
    const allSections = document.querySelectorAll('.display-section');
    const button = document.getElementById(buttonToClick);
    button.addEventListener('click', (e) => {
      for (let i = 0; i < allSections.length; i += 1) {
        const id = allSections[i];
        if (id.className.split(' ')[0] === sectionToDisplay) {
          allSections[i].style.display = 'flex';
        } else {
          allSections[i].style.display = 'none';
        }
      }
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

  const displayMenu = () => {
    showSection('menu-navbar', 'menu-section');
  };

  const displayLocation = () => {
    showSection('location-navbar', 'location-section');
  };

  const displayContact = () => {
    showSection('contact-navbar', 'form-section');
  };

  const returnToMainMenu = () => {
    showSection('logo-navbar', 'images-sections');
  };

  return {
    displayImage, displayMenu, returnToMainMenu, displayContact, displayLocation,

  };
};

newPage();

const ui = UI();
ui.displayImage();
ui.displayMenu();
ui.returnToMainMenu();
ui.displayContact();
ui.displayLocation();
