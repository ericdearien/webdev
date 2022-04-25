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
            <form class="form" method="POST" action="/register">
                <label for="username">Email</label>
                <input type="text" placeholder="example@gmail.com" required name="username"/>
                <label for="password">Password</label>
                <input type="password" placeholder="12345..." required name="password"/>
                <label for="repassword">Repeat Password</label>                
                <input type="password" placeholder="12345..." required name="repassword"/>
                <label for="dob">Date of Birth</label>
                <input type="date" name="dob" required/>
                <button onclick="fetchdata('/register', [], 'post')">Register</button>
                <p class="message">Already Registered? <a href="/login">Sign in</a></p>
            </form>
        </div>
        `;
    }
}

customElements.define("regform-component", RegistrationForm)