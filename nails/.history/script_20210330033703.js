console.log(document.querySelector('#form'))
const token='1774086628:AAHSkme8PnEpidfLpDZs2iXlcQI9o6IebZ4';
const chat='-547999288'

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault()
  const txt = document.querySelector('input').value;
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${txt}`)
})
