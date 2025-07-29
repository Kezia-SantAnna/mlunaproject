// import { useState } from "react";
import "./App.css";

import Header from "./header";
import HomePage from "./HomePage";
import Footer from "./Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="box">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
