/*document.formjs.onsubmit = e => {
  e.preventDefault()
  alert('Será que vai?')
}*/

formjs.addEventListener('click', e => {
  e.preventDefault()
  console.log(e)
  let email = document.getElementById('preencher').value
  console.log(email)
  let data = {
    email
  }
  let convertData = JSON.stringify(data)

  localStorage.setItem('lead', convertData)
})
