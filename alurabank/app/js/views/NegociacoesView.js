System.register(["./BaseView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseView_1, NegociacoesView;
    return {
        setters: [
            function (BaseView_1_1) {
                BaseView_1 = BaseView_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends BaseView_1.BaseView {
                update(model) {
                    this._element.innerHTML = this.template(model);
                }
                template(model) {
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
            ${model.paraArray().map(ng => `
                <tr>
                    <td>${ng.data.getDate()}/${ng.data.getMonth() + 1}/${ng.data.getFullYear()}</td>
                    <td>${ng.quantidade}</td>
                    <td>${ng.valor}</td>
                    <td>${ng.volume}</td>
                </tr>
                `).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
            `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
