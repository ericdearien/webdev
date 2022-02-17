class UnregisteredNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="stanNav">
              <ul>
                <li class="left">
                  <brand-component></brand-component>
                </li>
                <li class="right">
                  <a href="/login">Login</a>
                </li>
              </ul>
            </nav>
        `;
    }
}

customElements.define("unregisterednav-component", UnregisteredNav)