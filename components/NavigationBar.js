class Navigation extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light w-100">
      <div class="container-fluid p-0 ">
        <img
          class="navbar-brand"
          href="#"
          src="${this.getAttribute('logo')}images/AMDT-School-of-Creativity-logo.png"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="${this.getAttribute('home')}index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${this.getAttribute('quiz')}quize.html">AMDT QUIZ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${this.getAttribute('mycreative')}mycreativepage.html">My Creative Page</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${this.getAttribute('developer')}aboutdeveloper.html">About the Developer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${this.getAttribute('contact')}contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
  }
}

window.customElements.define('navigation-bar', Navigation)
