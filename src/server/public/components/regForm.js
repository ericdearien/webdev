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
                <label for="email">Email</label>
                <input type="text" placeholder="example@gmail.com" required name="email"/>
                <label for="pword">Password</label>
                <input type="password" placeholder="12345..." required name="pword"/>
                <label for="repassword">Repeat Password</label>                
                <input type="password" placeholder="12345..." required name="repassword"/>
                <label for="dob">Date of Birth</label>
                <input type="date" name="dob" required/>
                <button>Register</button>
                <p class="message">Already Registered? <a href="/login">Sign in</a></p>
            </form>
        </div>
        `;
    }
}

customElements.define("regform-component", RegistrationForm)