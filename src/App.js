import Header from "./components/Header";
import Somos from "./components/Somos";
import Principios from "./components/Principios";
import Servicios from "./components/Servicios";
import Brochure from "./components/Brochure";
import Conversemos from "./components/Conversemos";
import Industrias from "./components/Industrias";
import Footer from "./components/Footer";
import ReactGA from "react-ga4";

ReactGA.initialize("G-C1ZWTYEQMR");
ReactGA.send("pageview");

function App() {
  return (
    <div className="w-full font-roboto scroll-smooth">
      <Header />
      <Somos />
      <Servicios />
      <Brochure />
      <Principios />
      <Industrias />
      <Conversemos />
      <Footer />
    </div>
  );
}

export default App;
