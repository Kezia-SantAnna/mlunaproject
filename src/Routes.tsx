import { Route, Routes } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Ebook from "./pages/Ebook";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/ebook" element={<App />}>
        <Route index element={<Ebook />} />
      </Route>

      <Route path="/contact" element={<App />}>
        <Route index element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default MyRouter;
