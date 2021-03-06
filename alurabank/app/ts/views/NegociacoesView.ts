import { BaseView } from './BaseView';
import { Negociacoes } from '../models/Neogociacoes';

export class NegociacoesView extends BaseView<Negociacoes> {

    update(model: Negociacoes): void {
        this._element.innerHTML = this.template(model);
    }

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            ${model.paraArray().map(ng =>
            `
                <tr>
                    <td>${ng.data.getDate()}/${ng.data.getMonth() + 1}/${ng.data.getFullYear()}</td>
                    <td>${ng.quantidade}</td>
                    <td>${ng.valor}</td>
                    <td>${ng.volume}</td>
                </tr>
                `
        ).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
            `;
    }
}