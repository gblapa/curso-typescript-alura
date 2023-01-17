export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); // basicamente, o seletor recebido como string passa a ser um elemento do DOM
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template; // o método innerHTML transforma a string em elemento do dom (elemento HTML)
    }
}
