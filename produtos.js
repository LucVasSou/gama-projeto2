document.getElementById('formjs').addEventListener('click', function (e) {
  console.log(formjs)
  e.preventDefault()

  let nome = document.getElementById('name').value
  console.log(nome)

  let genero = document.getElementsByName('genero').value
  console.log(genero)
  let marca = document.getElementById('marca').value
  console.log(marca)
  let modelo = document.getElementById('modelo').value
  console.log(modelo)
  let descricao = document.getElementById('descricao').value
  console.log(descricao)
  let imagem = document.getElementById('imagem').value
  console.log(imagem)

  let valores = {
    nome,

    genero,
    marca,
    modelo,
    descricao,
    imagem
  }
  let convertData = JSON.stringify(valores)

  localStorage.setItem('lead', convertData)
})
