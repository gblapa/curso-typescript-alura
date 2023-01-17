import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MensagemView } from '../views/mensagem-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.DOMINGO = 0; // readonly, somente leitura e nao aceita modificacoes
        this.SABADO = 6;
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes); // recebe como parâmetro o array de negociações
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) // negacao
         {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDay() > this.DOMINGO && data.getDay() < this.SABADO;
    }
    criaNegociacao() {
        const exp = /-/g; // encontra todos os simbolos de "/"
        const date = new Date(this.inputData.value.replace(exp, ',')); // o método replace substitui as "/" pela ","
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
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
