function Ebook() {
  return (
    <main>
      <article className="title-ebook">
        <h1>Confira os Ebooks que preparei para você</h1>
        <p>
          Conteúdos práticos, dicas saudáveis e orientações nutricionais para te
          ajudar a transformar sua alimentação de forma leve e consciente.
        </p>
      </article>
      <section className="card">
        <div className="card-text">
          <img className="img-ebook" src="assets/guiadecompras.jpeg" />
          <article>
            <h2>Guia de Compras Saudaveis</h2>
            <p>
              Organize sua ida ao mercado e faça escolhas mais conscientes e
              nutritivas.
            </p>
            <button>Quero este ebook</button>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Ebook;
