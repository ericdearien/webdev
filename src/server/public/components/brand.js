class BrandLabel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="brand">
            Junker
        </div>
        `;
    }
}

customElements.define("brand-component", BrandLabel)