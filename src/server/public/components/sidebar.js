class Sidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class='sidebar'>
                
            </div>
        `;
    }
}

customElements.define("sidebar-component", Sidebar)