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
            <form class="form" onsubmit='login()'>
                <label for="username">Email</label>
                <input type="text" placeholder="example@gmail.com" required id='username' name="username" />
                <label for="password">Password</label>
                <input type="password" placeholder="12345..." required id='password' name="password"/>
                <button>login</button>
                <p class="message">Not registered? <a href="/registerPage">Create an account</a></p>
            </form>
        </div>
        `;
    }
}

customElements.define("logform-component", LoginForm)