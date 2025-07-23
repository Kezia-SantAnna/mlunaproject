import { useState } from "react";
import "./App.css";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <nav>
        <a>Sobre mim</a>
        <a>Ebooks</a>
        <a>Eventos</a>
        <a>Contatos</a>
      </nav>
      <main>
        <section className="principal">
          <div className="principal-imgs">
            <img
              className="perfil"
              src="assets/MARTALUNA.jpg"
              alt="foto-perfil"
              height="300px"
            />
            <img className="logo" src="assets/CAPA.png" alt="logo-page" />
          </div>
          <div className="principal-buttons">
            <div>
              <a className="social-item">
                <FaFacebook />
              </a>
              <a className="social-item">
                <FaTelegram />
              </a>
              <a className="social-item">
                <FaInstagram />
              </a>
              <a className="social-item">
                <BsEnvelopeAt />
              </a>
              <a className="social-item">
                <FaWhatsapp />
              </a>
            </div>
            <button className="agenda">Agendar Consulta</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
