import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController
const form = document.querySelector('.form') // selecao para o formulario inteiro
form.addEventListener('submit', event => { // é um evento do tipo submit
    event.preventDefault() // faz o auto carregamento da pagina (auto compit)
    controller.adiciona()
})