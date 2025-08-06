import "./Header.css";
import { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

function MobileHeader() {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMainMenuToggle = () => {
    // Se estiver a fechar o menu principal, também fecha o submenu
    if (isOpen) {
      setIsSubMenuOpen(false);
    }
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsSubMenuOpen(false);
  };

  const handleOpenSubMenu = () => {
    if (pathname !== "/") return handleLinkClick();

    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const scrollTo = (id: string) => {
    handleLinkClick();
    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <header className="mobile-header">
        <button
          className={`hamburger-button ${isOpen ? "is-open" : ""}`}
          onClick={handleMainMenuToggle}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className="hamburger-button-line hamburger-button-line-top"></span>
          <span className="hamburger-button-line hamburger-button-line-middle"></span>
          <span className="hamburger-button-line hamburger-button-line-bottom"></span>
        </button>
      </header>

      <div className={`mobile-nav-overlay ${isOpen ? "is-open" : ""}`}>
        <nav>
          <div className="submenu-container">
            <Link
              to="/"
              className={`submenu-toggle ${isSubMenuOpen ? "is-open" : ""}`}
              onClick={handleOpenSubMenu}
            >
              Sobre mim <FaAnglesDown className="arrow" />
            </Link>
            <div className={`submenu ${isSubMenuOpen ? "is-open" : ""}`}>
              <a onClick={() => scrollTo("who-section")}>Quem sou eu</a>
              <a onClick={() => scrollTo("mission-section")}>Missão</a>
              <a onClick={() => scrollTo("vision-section")}>Visão</a>
            </div>
          </div>
          <Link to="/ebook" onClick={handleLinkClick}>
            Ebook
          </Link>
          <a>Eventos</a>
          <Link to="/contact" onClick={handleLinkClick}>
            Contatos
          </Link>
        </nav>
      </div>
    </>
  );
}

export default MobileHeader;
