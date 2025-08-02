import { BsEnvelopeAt } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import SocialItem from "./SocialItem";
import { useEffect } from "react";

function HomePage() {
  // JavaScript para aplicar quando o elemento entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      }
      // {
      //   root: null,
      //   threshold: 0,
      // }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }, []);

  return (
    <main>
      <section className="principal">
        <p className="crn">CRN: 25105241/P</p>
        <div className="principal-imgs">
          <img
            className="perfil"
            src="assets/MARTALUNA.jpg"
            alt="foto-perfil"
          />
          <img className="logo" src="assets/CAPA.png" alt="logo-capa" />
        </div>
        <div className="principal-buttons">
          <div>
            <SocialItem
              link="https://www.facebook.com/profile.php?id=61574643815081"
              icon={<FaFacebook />}
            />
            <SocialItem link="" icon={<FaTelegram />} />
            <SocialItem
              link="https://www.instagram.com/nutri_martaluna"
              icon={<FaInstagram />}
            />
            <SocialItem
              link="mailto:nutri.martaluna@gmail.com"
              icon={<BsEnvelopeAt />}
            />
            <SocialItem
              link="https://wa.me/5521983003559/?text=Quero%20agendar%20uma%20consulta."
              icon={<FaWhatsapp />}
            />
            <SocialItem
              link="https://maps.app.goo.gl/QyjrDttaeVnQz9Bc8"
              icon={<SiGooglemaps />}
            />
          </div>
          <button className="button-agenda">Agendar Consulta</button>
        </div>
      </section>
      <section className="box-about-me" id="who-section">
        <article className="about-me">
          <h1>Quem sou eu? - Marta Luna</h1>
          <p>
            Sou a Marta Luna, nutricionista formada com um propósito: ajudar
            mulheres a retomarem o controle da própria saúde, com acolhimento,
            escuta ativa e estratégias personalizadas.
          </p>
          <p>
            Tenho 40+ e, assim como muitas das minhas pacientes, convivo com
            desafios como endometriose, síndrome dos ovários policísticos (SOP)
            e resistência à insulina. Minha jornada na nutrição nasceu da dor e
            da frustração de não encontrar um atendimento que enxergasse o todo
            que compreendesse que cada mulher é única, com sintomas, emoções e
            histórias que precisam ser respeitadas.
          </p>
          <p>
            A nutrição transformou a minha vida. Hoje, minha missão é
            transformar a sua.
          </p>
        </article>
        <div className="logo-page">
          <img src="assets/marca-dagua.png" />
          <button className="button-agenda">Agendar Consulta</button>
        </div>
      </section>
      <section className="box-about-me fade-in" id="mission-section">
        <img src="assets/marca-dagua.png" />
        <article className="about-me">
          <h1>Missão</h1>
          <p>
            Acolher, escutar e cuidar de mulheres 30+ que buscam emagrecimento
            com saúde, equilíbrio e propósito, utilizando a nutrição como
            ferramenta de transformação e empoderamento.
          </p>
          <button style={{ alignSelf: "flex-end" }}>Agendar Consulta</button>
        </article>
      </section>
      <section className="box-about-me fade-in" id="vision-section">
        <article className="about-me ">
          <h1>Visão</h1>
          <p>
            Ser referência em nutrição feminina personalizada e acolhedora,
            promovendo saúde real e sustentável para mulheres que desejam viver
            com mais leveza, consciência e autonomia.
          </p>
          <button style={{ alignSelf: "flex-start" }}>Agendar Consulta</button>
        </article>
        <img src="assets/marca-dagua.png" />
      </section>
    </main>
  );
}

export default HomePage;
