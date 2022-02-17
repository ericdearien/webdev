class RegistrationForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="form-container">
            <p class="form-title">Register an Account</p>
            <hr>
            <br>
            <form class="form">
                <input type="text" placeholder="email" required />
                <input type="password" placeholder="password" required />
                <input type="repassword" placeholder="repeat password" required />
                <input type="date" name="dob" required />
                <button>Register</button>
                <p class="message">Already Registered? <a href="/login">Sign in</a></p>
            </form>
        </div>
        `;
    }
}

customElements.define("regform-component", RegistrationForm)