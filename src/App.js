import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
// import components
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// Pages
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Login from "./pages/Login";

AOS.init();

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
