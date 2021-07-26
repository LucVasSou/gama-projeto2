document.getElementById('formjs').addEventListener('click', function (e) {
  console.log(formjs)
  e.preventDefault()

  let nome = document.getElementById('name').value
  console.log(nome)

  let data = document.getElementById('data').value
  console.log(data)
  let genero = document.getElementsByName('genero').value
  console.log(genero)
  let telefone = document.getElementById('telefone').value
  console.log(telefone)
  let email = document.getElementById('email').value
  console.log(email)
  let cidade = document.getElementById('cidade').value
  console.log(cidade)
  let estado = document.getElementById('estado').value
  console.log(estado)
  let endereco = document.getElementById('endereco').value
  console.log(endereco)
  let valores = {
    nome,
    data,
    genero,
    telefone,
    email,
    cidade,
    estado,
    endereco
  }
  let convertData = JSON.stringify(valores)

  localStorage.setItem('lead', convertData)
})

// document.getElementById('submit').addEventListener('mouseover', function (e) {
//   alert('funcionou')
// })
