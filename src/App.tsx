import "./styles/App.css";
import "./styles/Components.css";
import "./styles/Header.css";

import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function App() {

  return (
    <div className="box">
      <Header />
      <MobileHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
