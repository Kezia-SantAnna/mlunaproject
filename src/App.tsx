import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
    </div>
  );
}

export default App;
