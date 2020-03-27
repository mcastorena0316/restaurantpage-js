import footer from './footer';
import header from './header';
import imageSection from './images-section';


const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(imageSection());
content.appendChild(footer());
