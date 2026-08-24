import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 bg-dark border-b border-card">
      <div className="flex items-center gap-2 text-neon font-mono text-xl font-bold">
        {/* Un ícono de terminal le da un gran toque técnico */}
        <Terminal size={24} />
        <span>&lt;Alan Misael Bazan Zenil /&gt;</span>
      </div>
      
      <ul className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
        <li className="hover:text-neon cursor-pointer transition-colors">Inicio</li>
        <li className="hover:text-neon cursor-pointer transition-colors">Proyectos</li>
        <li className="hover:text-neon cursor-pointer transition-colors">Habilidades</li>
      </ul>

      <button className="bg-card text-white px-5 py-2 rounded-md hover:bg-neutral-800 transition-colors border border-neutral-700 text-sm font-medium">
        Contactar
      </button>
    </nav>
  );
}