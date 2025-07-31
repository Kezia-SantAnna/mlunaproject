// import { useState } from "react";
import "./App.css";

import Header from "./Header";
// import HomePage from "./HomePage";
import Footer from "./Footer";
import { Outlet } from "react-router";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="box">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
