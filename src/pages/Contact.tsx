import type { JSX } from "react";
import { BsEnvelopeAt } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  // FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import ContactForm from "../components/ContactForm";

interface CardProps {
  icon: JSX.Element;
  title: string;
  link: string;
  label: string;
}

function ContactCard({ icon, label, link, title }: CardProps) {
  return (
    <div className="box-contact box-message">
      {icon}
      <div>
        <h2>{title}</h2>
        <a href={link} target="_blank">
          {label}
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <main className="main-contact">
      <h1>Contato</h1>
      <div className="div-contact">
        <section className="section-contact">
          <article>
            <h2>🥑 Fale comigo!</h2>
            <p className="contact-subtitle">
              Se você tem dúvidas, deseja agendar uma consulta ou quer saber
              mais sobre como a nutrição pode transformar sua vida, estou aqui
              para ajudar. Preencha o formulário abaixo ou entre em contato
              pelas redes sociais. Será um prazer conversar com você!
            </p>
          </article>
          <ContactCard
            icon={<BsEnvelopeAt />}
            label="nutri.martaluna@gmail.com"
            link="mailto:nutri.martaluna@gmail.com"
            title="Email"
          />
          <ContactCard
            icon={<FaWhatsapp />}
            label="(21)9830-03559"
            link="https://wa.me/5521983003559/?text=Quero%20agendar%20uma%20consulta."
            title="Telefone p/ contato"
          />
          <ContactCard
            icon={<SiGooglemaps />}
            label="Avenida Governador Roberto Silveira, 470 - Centro - Nova Iguaçu"
            link="https://maps.app.goo.gl/vBsn1tqdc2mLNQ9Q7"
            title="Localização"
          />

          <div className="box-contact box-message">
            <h2>Me siga nas redes sociais</h2>
            <a
              className="social-item"
              href="https://www.facebook.com/profile.php?id=61574643815081"
              target="_blank"
            >
              <FaFacebook />
            </a>
            {/* <a className="social-item">
              <FaTelegram />
            </a> */}
            <a
              className="social-item"
              href="https://www.instagram.com/nutri_martaluna"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </section>
        <ContactForm />
      </div>
    </main>
  );
}
export default Contact;
