export class Negociacao {
    constructor(// no construtor basicamente, sao os valores que obrigatoriamente a classe tera que receber como parâmetro
    _data, // o readonly faz a leitura e dessa forma, dispensa o uso do metodo get para realizar a leitura. O único caso que será valido é no volume
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); // o get time basicamente, clonou o que se atribuiu a data e dessa forma, atribui e retorna essa clonagem de forma que nao haja a modificacao da data pelos métodos disponiveis que permitem essa alteracao
        return data;
    }
    // get quantidade() : number{
    //     return this.quantidade
    // }
    // get valor() :number {
    //     return this.valor
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
}
