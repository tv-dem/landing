const token='1774086628:AAHSkme8PnEpidfLpDZs2iXlcQI9o6IebZ4';
const chat='-547999288'

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault()
  const textarea = document.querySelector('textarea')
  const message = textarea.value;
  if(!message){
    alert('the message is clear!');
    return;
  }
  textarea.value = '';
  const txt = 'message from site: ' + message;
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${txt}`)
    .then(res =>{
      alert('the message was recived')
  })
    .catch((e) => {
      alert('something was wrong(')
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
