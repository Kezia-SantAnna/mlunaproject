import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
        alert("✅ E-mail enviado com sucesso!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        alert("❌ Erro ao enviar: " + JSON.stringify(errorData));
      }
    } catch (error) {
      alert("❌ Falha na requisição: " + error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
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
    </form>
  );
}
