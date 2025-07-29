import { FaAnglesDown } from "react-icons/fa6";


function Header() {
  return (
     <nav>
        <div className="dropdown">
          <a className="dropbtn">
            Sobre mim <FaAnglesDown />
          </a>
          {/* <ul className="dropDown-Content">
          <li><a>Quem sou eu?</a></li>
          <li><a>Missão</a></li>
          <li><a>Visão</a></li>
          </ul> */}
        </div>
        <a>Ebooks</a>
        <a>Eventos</a>
        <a>Contatos</a>
      </nav>
  )
}

export default Header;
