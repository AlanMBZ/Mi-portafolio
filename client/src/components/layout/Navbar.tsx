import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-5 px-8 bg-dark/80 backdrop-blur-md border-b border-neutral-800">
      <div className="flex items-center gap-2 text-neon font-mono text-xl font-bold">
        {/* Un ícono de terminal le da un gran toque técnico */}
        <Terminal size={24} />
        <span>&lt;Alan Misael Bazan Zenil /&gt;</span>
      </div>
      
      <ul className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
        <li><a href="#inicio" className="hover:text-neon transition-colors">Inicio</a></li>
        <li><a href="#proyectos" className="hover:text-neon transition-colors">Proyectos</a></li>
        <li><a href="#habilidades" className="hover:text-neon transition-colors">Habilidades</a></li>
      </ul>

      <a href="#contacto" className="bg-card text-white px-5 py-2 rounded-md hover:bg-neutral-800 transition-colors border border-neutral-700 text-sm font-medium block">
        Contactar
      </a>

    </nav>
  );
}