const $formField = document.getElementById('form__field'),
  $formInput = document.getElementById('form__input'),
  pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

$formInput.addEventListener('input', () => {
  if ($formInput.value.match(pattern)) {
    $formField.classList.add('valid')
    $formField.classList.remove('invalid')
  } else {
    $formField.classList.add('invalid')
    $formField.classList.remove('valid')
  }

  if ($formInput.value == '') {
    $formField.classList.remove('invalid')
    $formField.classList.remove('valid')
  }
})
