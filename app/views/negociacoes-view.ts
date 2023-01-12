import { Negociacoes } from './../models/negociacoes.js';
// a pasta views é o lugar da estrutura que permite escrever o html ness forma que irá aparecer na web


export class NegociacoesView {
    private elemento: HTMLElement
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }

    template(model: Negociacoes): string { // declara o template da view (automatizacao da tabela html)
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td> 
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `;
        // o método join pega cada elemto do array em sua respectiva posicao ex: negociacao[0] e neste caso, coloca um espaço vazio entre eles a fim de separa-los

    }

    update(model: Negociacoes): void { // redenriza este template em um elemento que capturou no construtor, neste caso como pertencente do DOM (elemento html)
        const template = this.template(model)
        console.log(template)
        this.elemento.innerHTML = template // o método innerHTML transforma a string em elemento do dom (elemento HTML)
    }
}

// ${new Intl.DateTimeFormat().format(negociacao.data)}
