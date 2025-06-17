import Hero from "../components/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
