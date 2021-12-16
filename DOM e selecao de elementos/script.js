// os comentários são as tarefas dadas, os códigos foram meu desenvolvimento. Caso eu tenha errado ou não tenha conseguido finalizar a tarefa, deixarei um comentário na questão explicando o que ocorreu.

// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href)

// Seleciona o primeiro elemento da página que possua a classe ativo
console.log(document.getElementsByClassName('ativo')[0])

// Retorne a linguagem do navegador
console.log(window.navigator.language)

// Retorne a largura da janela
console.log(window.innerWidth)

// Retorne no console todas as imagens do site
const Todasimagens = document.getElementsByTagName('img')
console.log(Todasimagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgimagem = document.querySelectorAll('[src^="img/imagem"]')
console.log(imgimagem)

// Selecione todos os links internos (onde o href começa com #)
const Linksinternos = document.querySelectorAll('[href^="#"]')
console.log(Linksinternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2')
console.log(primeiroh2)

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length - 1])
