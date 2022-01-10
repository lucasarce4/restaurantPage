const menuPage=()=>{
    const content = document.querySelector('.pageContainer');
    const menu = document.createElement('div');
    menu.classList.add('menu','page');
    content.appendChild(menu);

    menu.style.backgroundImage = "url('assets/background.jpg')";

    const menuItem=(foodName,foodPrice,foodImg,foodDescription)=>{
        const item = document.createElement('div');
        menu.appendChild(item);
        item.className = 'item'
        const name = document.createElement('div');
        name.classList.add('foodName')
        const price = document.createElement('div');
        price.classList.add('foodPrice')
        const img = document.createElement('div');
        img.classList.add('foodImg')
        const description = document.createElement('div');
        description.classList.add('description')

        name.textContent = foodName;
        price.textContent = foodPrice;
        img.innerHTML = `<img src="${foodImg}" alt='food'>`
        description.textContent = foodDescription;

        const textContainer= document.createElement('div')
        textContainer.classList.add('textContainer')
        item.appendChild(textContainer)

        textContainer.appendChild(name)
        textContainer.appendChild(price)
        item.appendChild(img)
        textContainer.appendChild(description)
    }

    menuItem('Pizza burger','10$',"assets/pizzaburger.jpg",'Burger with pizza instead of bread')
    menuItem('Cheddar burger','8$','assets/cheddarBurger.jpg','Cheddar, bacon, onions, and double patty')
    menuItem('Cheese pizza','12$','assets/pizzaClassic.jpg','Classic cheese pizza')
    menuItem('Special pizza','15$','assets/pizzaEspecial.jpg','Cheese, ham,olives,hard boiled egg, and bell peppers')

}

  


export default menuPage;