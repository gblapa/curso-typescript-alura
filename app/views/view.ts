export abstract class View<T> {
    protected elemento: HTMLElement // protected significa que dará acesso a este atributo somente para os arquivos dentro da pasta view (filhos)

    constructor(seletor: string ){
        this.elemento = document.querySelector(seletor) // basicamente, o seletor recebido como string passa a ser um elemento do DOM
    }

    update(model: T): void { // redenriza este template em um elemento que capturou no construtor, neste caso como pertencente do DOM (elemento html)
        const template = this.template(model)
        this.elemento.innerHTML = template // o método innerHTML transforma a string em elemento do dom (elemento HTML)
    }

    protected abstract template(model: T) : string; // protected abstract significa que este método template, irá apenas dar contuinuidade de seu desenvolvimento nas pastas filhas deste método template, aqui apenas houve a declaração deste metodo
}