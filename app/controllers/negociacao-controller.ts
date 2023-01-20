import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from './../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MensagemView } from '../views/mensagem-view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView')

    constructor() { // chama na inicializacao
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.update(this.negociacoes) // recebe como parâmetro o array de negociações
    }
    adiciona(): void{ // void nao retorna nada
        const negociacao = this.criaNegociacao()
        if (!this.ehDiaUtil(negociacao.data)) // retorna verdadeiro se o valor estiver entre 1 a 5, já que está buscando a negação
        {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas')
            return
        }
        this.negociacoes.adiciona(negociacao)
        this.limparFormulario()
        this.atualizaView()
    }

    private ehDiaUtil(data: Date)
    {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }


    private criaNegociacao(): Negociacao{
        const exp = /-/g // encontra todos os simbolos de "/"
        const date = new Date(this.inputData.value.replace(exp, ',')) // o método replace substitui as "/" pela ","
        const quantidade = parseInt(this.inputQuantidade.value) // o metodo parseInt converte para inteiro
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(date, quantidade, valor);
    }

    private limparFormulario(): void{
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus() // focar no input data, neste caso o tscript ja reconhece que o inputdata é um elemento do html, entao dessa forma, disponibiliza o método focus
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociação adicionada com sucesso!')
    }
}