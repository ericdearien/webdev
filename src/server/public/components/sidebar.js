class Sidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div>

            </div>
        `;
    }
}

customElements.define("sidebar-component", Sidebar)