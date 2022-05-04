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
            <form class="form"onsubmit='register()'>
                <label for="username">Email</label>
                <input type="text" placeholder="example@gmail.com" required id='username' name="username"/>
                <label for="password">Password</label>
                <input type="password" placeholder="12345..." required id='password' name="password"/>
                <label for="repassword">Repeat Password</label>                
                <input type="password" placeholder="12345..." required name="repassword"/>
                <label for="dob">Date of Birth</label>
                <input type="date" name="dob" required/>
                <button>Register</button>
                <p class="message">Already Registered? <a href="/loginPage">Sign in</a></p>
            </form>
        </div>
        `;
    }
}

customElements.define("regform-component", RegistrationForm)