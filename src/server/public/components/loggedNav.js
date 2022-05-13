
class LoggedNav extends HTMLElement {
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
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/viewdecks">My Decks</a>
                </li>   
                <li>
                  <a href="/lessons">Lessons</a>
                </li>   
                <li onclick='logout()'>
                  <a>Logout</a>
                </li>
              </ul>
            </nav>
        `;
  }
}

customElements.define("loggednav-component", LoggedNav)