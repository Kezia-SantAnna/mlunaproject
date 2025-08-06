function Ebook() {
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
              nutritivas.<br/>
              <a>saiba mais.</a>
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
