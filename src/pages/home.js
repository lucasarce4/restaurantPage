import background from '../assets/background.jpg'
import pizza from '../assets/pizza.png'
import burger from '../assets/burger.png'

const homePage=()=>{
    const content = document.querySelector('.pageContainer');
    const home = document.createElement('div');
    home.classList.add('home','page');
    content.appendChild(home);

    home.style.backgroundImage = `url(${background})`;

    const logoCont = document.createElement('div');
    logoCont.classList.add('logoCont')
    home.appendChild(logoCont)

   const logoImgPizza = document.createElement('div');
   logoImgPizza.classList.add('pizzaImg')
   logoCont.appendChild(logoImgPizza);
   const imgPizza = document.createElement('img')
   imgPizza.src = pizza;
   logoImgPizza.appendChild(imgPizza);

   const logoImgHamb = document.createElement('div');
   logoImgHamb.classList.add('hambImg')
   logoCont.appendChild(logoImgHamb);
   const imgHamb = document.createElement('img')
   imgHamb.src = burger;
   logoImgHamb.appendChild(imgHamb);

   const name = document.createElement('div')
   name.classList.add('name');
   logoCont.appendChild(name)
    const firstHalf = document.createElement('div');
    firstHalf.classList.add('firstHalf')
    firstHalf.textContent = 'Best of'
    const secondHalf = document.createElement('div');
    secondHalf.textContent = 'Two Worlds'
    secondHalf.classList.add('secondHalf');
    name.appendChild(firstHalf);
    name.appendChild(secondHalf)


}
  


export default homePage;