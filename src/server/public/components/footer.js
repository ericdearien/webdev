class StandardFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
              
            </footer>
        `;
    }
}

customElements.define("footer-component", StandardFooter)