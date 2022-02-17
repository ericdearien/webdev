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
                <label for="email">Email</label>
                <input type="text" placeholder="example@gmail.com" required name="email"/>
                <label for="pword">Password</label>
                <input type="password" placeholder="12345..." required name="pword"/>
                <button>login</button>
                <p class="message">Not registered? <a href="/register">Create an account</a></p>
            </form>
        </div>
        `;
    }
}

customElements.define("logform-component", LoginForm)