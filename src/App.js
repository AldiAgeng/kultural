import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

import AOS from "aos";
import "aos/dist/aos.css";

import RouterPages from "./routes";

AOS.init();

function App() {
  return <RouterPages />;
}

export default App;
