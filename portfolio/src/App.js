import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
