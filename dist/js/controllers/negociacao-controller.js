import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.lista();
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g; // encontra todos os simbolos de "/"
        const date = new Date(this.inputData.value.replace(exp, ',')); // o metodo replace substitui as "/" pela ","
        const quantidade = parseInt(this.inputQuantidade.value); // o metodo parseInt converte para inteiro
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); // focar no input data, neste caso o tscript ja reconhece que o inputdata é um elemento do html, entao dessa forma, disponibiliza o método focus
    }
}
