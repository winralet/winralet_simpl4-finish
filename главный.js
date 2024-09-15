const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const surname = params.get('surname');
const email = params.get('email');
const phone = params.get('phone');
const services = params.get('services');

document.getElementById('name').innerText = `Добро пожаловать на свой сайт, ${name} ${surname}!`;
document.getElementById('email').innerText = `Свяжитесь с нами по электронной почте: ${email} или по номеру телефона: ${phone}.`;
document.getElementById('phone').innerText = `© 2024 сайт ${name}. Все права защищены.`;
document.getElementById('services').innerText = services; // Отображаем услуги