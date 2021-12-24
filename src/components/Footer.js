import "../styles/Footer.css";
import Logo from "../assets/logo.png";

import Twitter from "../assets/Social Media Icons/Twitter.png"
import Instagram from "../assets/Social Media Icons/Instagram.png"
import Email from "../assets/Social Media Icons/Email.png"

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-blocks">
            <img src={Logo} className="footer-logo" alt="Logo" />
            <div className="footer-list">
              <a className="footer-link" href="/">HOME</a>
              <a className="footer-link" href="/work">WORK</a>
              <a className="footer-link" href="/about">ABOUT</a>
              <a className="footer-link" href="/shop">SHOP</a>
              <a className="footer-link" href="/contact">CONTACT</a>
            </div>
            <div className="footer-list footer-social-list">
              <a className="footer-social-link" href="https://www.instagram.com/BlackoutHQ_/">
                  <img alt="Instagram" src={Instagram} className="footer-social-logo" />
              </a>
              <a className="footer-social-link" href="https://twitter.com/BlackoutHQ_">
                  <img alt="Twitter" src={Twitter} className="footer-social-logo" />
              </a>
              <a className="footer-social-link" href="mailto:alphastudios.business@gmail.com">
                  <img alt="Email" src={Email} className="footer-social-logo" />
              </a>
            </div>
          </div>
          <p className="footer-cr">Copyright © 2021 <b>Blackout</b>. Digital Experience by <a href="https://janrebolledo.com">Jan Rebolledo</a>.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
