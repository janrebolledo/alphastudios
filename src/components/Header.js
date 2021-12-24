import "../styles/Header.css";
import Logo from "../assets/logo.png";

function Header() {
  function mobileNavMenu() {
    const nav = document.getElementById("nav");
    const button =  document.getElementById("mobileNavButton");

    if (nav.classList.contains("mobile-nav-open")) {
      nav.classList.remove("mobile-nav-open");
      button.innerHTML = "menu"
    }
    else {
      nav.classList.add("mobile-nav-open");
      button.innerHTML = "close"
    }
  }
  return (
    <>
      <header>
        <div className="header-container">
        <a href="/" className="header-logo-link">
          <img src={Logo} className="header-logo" alt="Header Logo" />
        </a>
        <div className="header-links" id="nav">
          <a className="header-link" href="/">HOME</a>
          <a className="header-link" href="/work">WORK</a>
          <a className="header-link" href="/about">ABOUT</a>
          <a className="header-link" href="/shop">SHOP</a>
          <a className="header-link-button header-link" href="/contact">CONTACT</a>
        </div>
        <span className="material-icons header-menu-icon" onClick={mobileNavMenu} id="mobileNavButton">menu</span>
        </div>
      </header>
    </>
  );
}

export default Header;
