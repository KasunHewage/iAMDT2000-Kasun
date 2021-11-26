class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 f-left">
              <img
                src="${this.getAttribute('logo')}images/AMDT-School-of-Creativity-logo.png"
                class="footer-logo"
              />
              <p class="footer-about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi maxime illo incidunt! Impedit consectetur ex repellat
                similique minima eaque vel et, cupiditate corrupti rerum
                assumenda quos ipsam reprehenderit quod natus!
              </p>
            </div>
            <div class="col-md-4 f-middle">
              <h5>Contact</h5>
              <span>
                <h6>Address</h6>
                <p>317A, Galle Road, Colombo 04, Sri Lanka</p>
              </span>
              <span>
                <h6>Phone</h6>
                <p>+94 114381981</p>
              </span>
              <span>
                <h6>Chat services</h6>
                <p>+94 114381981</p>
                <p>Facebook m.me/AMDTSriLanka</p>
              </span>
            </div>
            <div class="col-md-4 f-right">

                <h5>Join our newletter</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis quam nisi omnis quae. Dignissimos.
                </p>
                <span>
                  <input type="text">
                  <button>Send</button>
                </span>
            </div>
          </div>
        </div>
    </footer>
    `;
  }
}

window.customElements.define("footer-container", Footer);
