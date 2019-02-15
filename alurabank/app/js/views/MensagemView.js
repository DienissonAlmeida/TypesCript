System.register(["./BaseView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseView_1, MensagemView;
    return {
        setters: [
            function (BaseView_1_1) {
                BaseView_1 = BaseView_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends BaseView_1.BaseView {
                update(model) {
                    this._element.innerHTML = this.template(model);
                }
                template(model) {
                    return `<p class="alert alert-info">${model}</p> `;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
