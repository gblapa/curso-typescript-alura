import { View } from "./view.js"


export class MensagemView extends View<string> {


    protected template(model: string) : string{ // protected significa que dará acesso a este atributo somente para os arquivos dentro da pasta view (filhos)
        return `
            <p class="alert alert-info">${model}</p>
        
        `
    }

}