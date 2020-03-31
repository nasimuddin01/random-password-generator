clipboardButton = document.querySelector('#clipboard')
quitButton = document.querySelector('.quit')
container = document.querySelector('.container')
popup = document.querySelector('.popup')

// password copy function
clipboardButton.addEventListener('click', function() {
  const el = document.createElement('textarea')
  el.value = document.querySelector('#password').innerHTML
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  container.classList.add('hide')
  popup.classList.remove('hide')
})

// popup close function
quitButton.addEventListener('click', function() {
  container.classList.remove('hide')
  popup.classList.add('hide')
})
