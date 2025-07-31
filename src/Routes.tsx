import { Route, Routes } from "react-router";
import App from "./App";
import HomePage from "./HomePage";
import Contact from "./Contact";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default MyRouter;
