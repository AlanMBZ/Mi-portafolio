import Navbar from './components/layout/Navbar';
import Hero from './components/ui/Hero';
import Projects from './components/ui/Projects'; 
import Skills from './components/ui/Skills';
import Contact from './components/ui/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <Projects /> 
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;