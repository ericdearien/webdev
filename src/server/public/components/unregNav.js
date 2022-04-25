class UnregisteredNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="stanNav">
              <ul>
                <li>
                  <brand-component></brand-component>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/loginPage">Login</a>
                </li>
              </ul>
            </nav>
        `;
    }
}

customElements.define("unregisterednav-component", UnregisteredNav)