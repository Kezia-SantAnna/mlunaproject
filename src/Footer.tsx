import { BsEnvelopeAt } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <p>Marta luna / CRN: 25105241/P</p>
        <a href="https://maps.app.goo.gl/vBsn1tqdc2mLNQ9Q7" target="_blank">
          Avenida Governador Roberto Silveira, 470 - Centro - Nova Iguaçu
        </a>
        <p>Presencial e Online</p>
      </div>
      <div className="box-footer">
        <div className="container-footer">
          <a
            className="button-footer"
            href="https://www.facebook.com/profile.php"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a className="button-footer">
            <FaTelegram />
          </a>
          <a
            className="button-footer"
            href="https://www.instagram.com/nutri_martaluna"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="button-footer"
            href="mailto:nutri.martaluna@gmail.com"
            target="_blank"
          >
            <BsEnvelopeAt />
          </a>
          <a
            className="button-footer"
            href="https://wa.me/5521983003559/?text=Quero%20agendar%20uma%20consulta."
          >
            <FaWhatsapp />
          </a>
        </div>
        <img
          className="img-Footer"
          src="../public/assets/branco_prancheta.png"
          alt="assinatura em imagem"
        />
      </div>
    </footer>
  );
}

export default Footer;
