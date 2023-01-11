export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao); // O método push() é usado para adicionar um elemento ao final do array. Neste caso, irá adicionar no final do array Negociacao 
    }
    lista() {
        return this.negociacoes;
    }
}
const list = [];
