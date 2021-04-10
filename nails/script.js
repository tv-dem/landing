const token='1774086628:AAHSkme8PnEpidfLpDZs2iXlcQI9o6IebZ4';
const chat='-547999288'

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault()
  const textarea = document.querySelector('textarea')
  const contacts = document.querySelector('#contacts');
  const message = textarea.value;
  const contactsMessage = contacts.value;
  if(!contactsMessage){
    alert('оставьте ваши контакты!');
    return;
  }
  textarea.value = '';
  contacts.value='';
  const txt = `kонтактная информация: ${message}   дополнительная информация: ${contactsMessage ? contactsMessage : 'нет'}`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${txt}`)
    .then(res =>{
      if(res.ok)
        alert('сообщение отправлено!')
      else
        throw new Error()
  })
    .catch((e) => {
      alert('сообщение не отправилось')
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
