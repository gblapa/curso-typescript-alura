import { Negociacao } from './negociacao.js';


export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao) // O método push() é usado para adicionar um elemento ao final do array. Neste caso, irá adicionar no final do array Negociacao 
    }

    lista(): ReadonlyArray<Negociacao>{ // este tipo 'ReadonlyArray' define que nao será permitido por exemplo adicionar o metodo pop que faz a remocao de atributos do array. Este tipo faz somente leitura dos atributos do array e nao realiza modificacao no array
        return this.negociacoes
    }
}

const list = []