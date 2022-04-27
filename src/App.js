import Header from "./components/Header";
import Somos from "./components/Somos";
import Principios from "./components/Principios";
import Servicios from "./components/Servicios";
import Conversemos from "./components/Conversemos";
import Industrias from "./components/Industrias";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full font-roboto scroll-smooth">
      <Header />
      <Somos />
      <Servicios />
      <Principios />
      <Industrias />
      <Conversemos />
      <Footer />
    </div>
  );
}

export default App;