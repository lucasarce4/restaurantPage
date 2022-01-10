const contactPage=()=>{
    const content = document.querySelector('.pageContainer');
    const contact = document.createElement('div');
    contact.classList.add('contact','page');
    content.appendChild(contact);
    contact.style.backgroundImage = "url('/assets/background.jpg')";

    const container = document.createElement('div')
    container.classList.add('container');
    contact.appendChild(container)

    const contactUsText = document.createElement('div')
    contactUsText.classList.add('contactUs');
    contactUsText.textContent = 'Contact Us'
    container.appendChild(contactUsText)

    const phone = document.createElement('div')
    phone.classList.add('phone')
    phone.textContent = '123 465 789'
    container.appendChild(phone)

    const adress = document.createElement('div');
    adress.classList.add('adress')
    adress.textContent = 'Fake street 123'
    container.appendChild(adress)

    const map = document.createElement('div');
    container.appendChild(map)
    map.id='map'

    map.innerHTML = '<img src="/assets/map.jpg">'
}

export default contactPage;