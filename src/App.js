import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Servicios from "./components/Servicios";
function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Home />
        <About />
        <Servicios />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
