const token='1710185251:AAHBDFBTdSj9UyZhvboQLWH_WW0To0i6NK0';
const chat='-590631909'

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.querySelector('#name');
  const phone = document.querySelector('#phone');
  if(!name.value || !phone.value){
    alert('не заполнены поля!');
    return;
  }
  const txt = `заявка от ${name.value}. указанный номер телефона: ${phone.value}`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${txt}`)
    .then(res =>{
      alert('заявка успешно отправлена')
      name.value=phone.value='';
    })
    .catch((e) => {
      alert('что-то пошло не так. попробуйте еще раз')
    })
})

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};
