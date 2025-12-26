const btn = document.querySelector('#btnSuscribe')
const emailInput = document.querySelector('#email')
const errorEmail = document.querySelector('.error__message')
const suscribeContainer = document.querySelector('.container__suscribe')
const article = document.querySelector('.article')
const main = document.querySelector('.main')
const btnDismiss = document.querySelector('#dismiss-button')

function validateEmail(email) { 
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLowerCase())
}

btn.addEventListener('click',(event) => {
  event.preventDefault()
  if (validateEmail(emailInput.value) === false) {
    errorEmail.style.display = 'initial'
    emailInput.classList.add('input__email--error')
    return
  } else {
    errorEmail.style.display = 'none'
    emailInput.classList.remove('input__email--error')
    suscribeContainer.classList.add('is-visible')
    main.classList.add('is-hidden')
  }
})

btnDismiss.addEventListener('click', () => {
  suscribeContainer.classList.remove('is-visible')
  main.classList.remove('is-hidden')
  emailInput.value = ''
})
