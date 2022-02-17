class RegistrationForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div>
            <form>

            </form>
        </div>
        `;
    }
}

customElements.define("RegistrationForm", RegistrationForm)