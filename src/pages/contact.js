const contactPage=()=>{
    const content = document.querySelector('.pageContainer');
    const contact = document.createElement('div');
    contact.classList.add('contact','page');
    content.appendChild(contact);
    contact.style.backgroundImage = "url('assets/background.jpg')";

    const container = document.createElement('div')
    container.classList.add('container');
    contact.appendChild(container)

    const contactUsText = document.createElement('div')
    contactUsText.classList.add('contactUs');
    contactUsText.textContent = 'Contact Us'
    container.appendChild(contactUsText)

    const phone = document.createElement('div')
    phone.classList.add('phone')
    phone.innerHTML = '<img src="assets/phone.png"> 123 465 789'
    container.appendChild(phone)

    const adress = document.createElement('div');
    adress.classList.add('adress')
    adress.innerHTML = '<img src="assets/adress.png"> Fake street 123'
    container.appendChild(adress)

    const map = document.createElement('div');
    container.appendChild(map)
    map.id='map'

    map.innerHTML = `<iframe width="440" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=corrientes%201480,rosario+(Mi%20nombre%20de%20egocios)
    &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    <a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a>
    </iframe>`
}

export default contactPage;