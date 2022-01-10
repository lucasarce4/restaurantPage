import './styles/header.css';
import './styles/menu.css';
import './styles/home.css';
import './styles/contact.css';
import homePage from "./pages/home";
import menuPage from './pages/menu';
import header from "./pages/header";
import contactPage from "./pages/contact";

header();

const pageContainer = document.createElement('div');
pageContainer.classList.add('pageContainer')
document.querySelector('#content').appendChild(pageContainer)

document.querySelector('body').setAttribute('onload',contactPage());

const buttons = document.querySelectorAll('.buttons'); 
buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        while(document.querySelector('.pageContainer').firstChild){
            document.querySelector('.pageContainer').lastChild.remove();
        }
    })
})

document.querySelector('.Home').addEventListener('click',()=> homePage());
document.querySelector('.Menu').addEventListener('click',()=> menuPage());
document.querySelector('.Contact').addEventListener('click',()=>contactPage());



