class LoginForm extends HTMLElement {
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

customElements.define("LoginForm", LoginForm)