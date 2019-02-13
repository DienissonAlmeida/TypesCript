class MensagemView extends BaseView {
    update(model) {
        this._element.innerHTML = this.template(model);
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p> `;
    }
}
