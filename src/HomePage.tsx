import { BsEnvelopeAt } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

function HomePage() {
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
          <img className="logo" src="assets/CAPA.png" alt="logo-page" />
        </div>
        <div className="principal-buttons">
          <div>
            <a
              className="social-item"
              href="https://www.facebook.com/profile.php"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a className="social-item">
              <FaTelegram />
            </a>
            <a
              className="social-item"
              href="https://www.instagram.com/nutri_martaluna"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="social-item"
              href="mailto:nutri.martaluna@gmail.com"
              target="_blank"
            >
              <BsEnvelopeAt />
            </a>
            <a
              className="social-item"
              href="https://wa.me/5521983003559/?text=Quero%20agendar%20uma%20consulta."
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a
              className="social-item"
              href="https://maps.app.goo.gl/QyjrDttaeVnQz9Bc8"
              target="_blank"
            >
              <SiGooglemaps />
            </a>
          </div>
          <button className="button-agenda">Agendar Consulta</button>
        </div>
      </section>
      <section className="box-about-me">
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
          <img src="../public/assets/marca dagua-02.png" />
          <button className="button-agenda">Agendar Consulta</button>
        </div>
      </section>
      <section className="box-about-me">
        <img src="../public/assets/marca dagua-02.png" />
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
      <section className="box-about-me">
        <article className="about-me">
          <h1>Visão</h1>
          <p>
            Ser referência em nutrição feminina personalizada e acolhedora,
            promovendo saúde real e sustentável para mulheres que desejam viver
            com mais leveza, consciência e autonomia.
          </p>
          <button style={{ alignSelf: "flex-start" }}>Agendar Consulta</button>
        </article>
        <img src="../public/assets/marca dagua-02.png" />
      </section>
    </main>
  );
}

export default HomePage;
