const submitButtion = document.querySelector('#submit-button')
const form = document.querySelector('form')

submitButtion.addEventListener('click', function onSubmitButtonClicked(event) {
  form.classList.add('was-validated')
})

form.addEventListener('submit', function onformSubmitted(event) {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
})
