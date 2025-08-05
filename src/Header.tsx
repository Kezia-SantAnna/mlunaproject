import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-router";

function Header() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="default-header">
      <div className="dropdown">
        <Link to="/" className="dropbtn" onClick={scrollTop}>
          Sobre mim <FaAnglesDown />
        </Link>
        <div className="dropdown-content">
          <Link to="/" onClick={() => scrollTo("who-section")}>
            Quem sou eu
          </Link>
          <Link to="/" onClick={() => scrollTo("mission-section")}>
            Missão
          </Link>
          <Link to="/" onClick={() => scrollTo("vision-section")}>
            Visão
          </Link>
        </div>
      </div>
      <Link to="/ebook">Ebook</Link>
      <a>Eventos</a>
      <Link to="/contact">Contatos</Link>
    </nav>
  );
}

export default Header;
