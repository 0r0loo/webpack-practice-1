import './main.css';
import logo from './1.png';
import google from './google.png';
const root = document.querySelector('#root');

const img = document.createElement('img');
img.setAttribute('src', logo);

const img2 = document.createElement('img');
img2.setAttribute('src', google);
root.append(img);
root.append(img2);

const arrowFunc = (a, b) => a + b;
