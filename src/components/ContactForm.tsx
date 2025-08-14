import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [emailResponse, setEmailResponse] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const data = {
      service_id: import.meta.env.VITE_SERVICE_ID,
      template_id: import.meta.env.VITE_TEMPLATE_ID,
      user_id: import.meta.env.VITE_USER_ID,
      template_params: form,
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setEmailResponse("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error(errorData);

        setEmailResponse("error");
      }
    } catch (error) {
      console.error(error);

      setEmailResponse("error");
    } finally {
      setTimeout(() => {
        setEmailResponse("");
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      // TODO: BORDA VERMELHA QUANDO A MENSAGEM FOR ERROR
      style={{  border: emailResponse === "error" ? "solid 2px #972822b9" : "none", display: "flex", flexDirection: "column" }}
      className="section-contact box-message"
    >
      <h2>Envie uma mensagem</h2>
      <p>Preencha o formulário a seguir para entrar em contato comigo</p>
      <div className="input-group">
        <p>Nome Completo</p>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome e Sobrenome"
          required
        />
      </div>
      <div className="input-group">
        <p>Email</p>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Seu Email"
          required
        />
      </div>
      <div className="input-group">
        <p>Assunto</p>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Sobre o que quer falar?"
          required
        />
      </div>
      <div className="input-group">
        <p>Mensagem</p>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Sua mensagem"
          required
        />
      </div>
      <button type="submit" style={{ alignSelf: "center" }}>
        Enviar Mensagem
      </button>
      {emailResponse ? (
        <span
          style={{
            padding: 8,
            background: emailResponse === "success" ? "#5b741c9d" : "#97282296"
          }}
        >
          {emailResponse === "success"
            ? "✅ E-mail enviado com sucesso!"
            : "❌ Erro! Tente mais tarde ou use outra forma de contato."}
        </span>
      ) : null}
    </form>
  );
}
