form = document.querySelector('form')
container = document.querySelector('.container')
popup = document.querySelector('.popup')
quitButton = document.querySelector('.quit')
footer = document.querySelector('footer')

form.addEventListener('submit', function(e) {
  uppercase = document.querySelector('#uppercase').checked
  lowercase = document.querySelector('#lowercase').checked
  number = document.querySelector('#number').checked
  symbol = document.querySelector('#symbol').checked

  if (!(uppercase || lowercase || number || symbol)) {
    e.preventDefault()
    container.classList.add('hide')
    footer.style.paddingTop = '1rem'
    popup.classList.remove('hide')
  }
})

// popup close function
quitButton.addEventListener('click', function() {
  container.classList.remove('hide')
  footer.style.paddingTop = '0'
  popup.classList.add('hide')
})
