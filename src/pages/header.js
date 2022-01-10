import menuPage from "./menu";
import homePage from "./home";

const header = ()=>{
    const content = document.querySelector('#content');
    const headerDiv = document.createElement('div');
    content.appendChild(headerDiv);
    headerDiv.className= 'header';


    const linkContainer = document.createElement('div');
    headerDiv.appendChild(linkContainer);
    linkContainer.className = 'linkContainer';

    function createLinks(textContent){
        const button = document.createElement('button');
        button.classList.add('buttons',textContent);
        button.textContent = textContent;
        linkContainer.appendChild(button);
    }
    createLinks('Home');
    createLinks('Menu');
    createLinks('Contact');

}

export default header;