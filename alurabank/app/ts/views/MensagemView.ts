import { BaseView } from './BaseView'
export class MensagemView extends BaseView<string> {

    update(model: string): void {
        this._element.innerHTML = this.template(model);
    }

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p> `;
    }
}
