import { FaAnglesDown } from "react-icons/fa6";

function Header() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <nav>
      <div className="dropdown">
        <a className="dropbtn" onClick={scrollTop}>
          Sobre mim <FaAnglesDown />
        </a>
        <div className="dropdown-content">
          <a onClick={() => scrollTo("who-section")}>Quem sou eu</a>
          <a onClick={() => scrollTo("mission-section")}>Missão</a>
          <a onClick={() => scrollTo("vision-section")}>Visão</a>
        </div>
      </div>
      <a>Ebooks</a>
      <a>Eventos</a>
      <a>Contatos</a>
    </nav>
  );
}

export default Header;
