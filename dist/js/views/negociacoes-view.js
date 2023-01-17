import { View } from './view.js';
// a pasta views é o lugar da estrutura que permite escrever o html ness forma que irá aparecer na web
export class NegociacoesView extends View {
    template(model) {
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
                                <td>${this.formartar(negociacao.data)}</td> 
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
        // o método join pega cada elemto do array em sua respectiva posicao ex: negociacao[0] e neste caso, coloca um espaço vazio entre eles a fim de separa-los
    }
    formartar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
// ${new Intl.DateTimeFormat().format(negociacao.data)}
