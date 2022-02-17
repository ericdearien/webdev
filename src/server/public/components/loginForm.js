class LoginForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="form-container">
            <p class="form-title">Log In</p>
            <hr>
            <br>
            <form class="form">
                <input type="text" placeholder="email" required />
                <input type="password" placeholder="password" required />
                <button>login</button>
                <p class="message">Not registered? <a href="/register">Create an account</a></p>
            </form>
        </div>
        `;
    }
}

customElements.define("logform-component", LoginForm)