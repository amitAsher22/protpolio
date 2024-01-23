import "./App.css";
import NavBar from "../src/components/NavBar";
import Banner from "../src/components/Banner";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
