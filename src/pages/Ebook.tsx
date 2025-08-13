import { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

function Ebook() {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <main className="main-card">
      <article className="title-ebook">
        <h1>Confira os Ebooks que preparei para você</h1>
        <p>
          Conteúdos práticos, dicas saudáveis e orientações nutricionais para te
          ajudar a transformar sua alimentação de forma leve e consciente.
        </p>
      </article>
      <section className="card-section">
        <div className="card">
          <img className="img-ebook" src="assets/guiadecompras.jpeg" />
          <article>
            <h2>Guia de Compras Saudaveis</h2>
            <p>
              Organize sua ida ao mercado e faça escolhas mais conscientes e
              nutritivas.
              <br />
              {seeMore ? (
                <p>
                  Este mini e-book foi desenvolvido para ajudar você a fazer
                  compras com consciência, economia e saúde! Escolher melhor =
                  comer melhor + gastar menos + desperdiçar menos..
                </p>
              ) : (
                ""
              )}
              <p
                className="see-more"
                onClick={() => {
                  setSeeMore(!seeMore);
                }}
              >
                {seeMore ? (
                  <>
                    Ver Menos <FaAngleDoubleUp />
                  </>
                ) : (
                  <>
                    Ver Mais <FaAngleDoubleDown />
                  </>
                )}
              </p>
            </p>
            <a
              href="https://wa.me/5521983003559/?text=%20Ebook%20Guia%20de%20compras."
              target="_blank"
            >
              <button>Quero este ebook</button>
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Ebook;
