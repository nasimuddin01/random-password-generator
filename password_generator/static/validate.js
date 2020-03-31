form = document.querySelector('form')
container = document.querySelector('.container')
popup = document.querySelector('.popup')
quitButton = document.querySelector('.quit')

form.addEventListener('submit', function(e) {
  uppercase = document.querySelector('#uppercase').checked
  lowercase = document.querySelector('#lowercase').checked
  number = document.querySelector('#number').checked
  symbol = document.querySelector('#symbol').checked
  console.log(uppercase || lowercase || number || symbol)
  if (!(uppercase || lowercase || number || symbol)) {
    e.preventDefault()
    container.classList.add('hide')
    popup.classList.remove('hide')
  }
})

// popup close function
quitButton.addEventListener('click', function() {
  container.classList.remove('hide')
  popup.classList.add('hide')
})
