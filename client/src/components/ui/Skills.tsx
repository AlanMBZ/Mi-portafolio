import { Code2, Smartphone, Server } from 'lucide-react';

export default function Skills() {
  return (
    <section id="habilidades" className="py-16 px-8 max-w-5xl mx-auto border-t border-neutral-800 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Habilidades Técnicas</h2>
        <p className="text-gray-400 text-sm">Tecnologías con las que construyo soluciones de extremo a extremo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tarjeta de Backend & Base de Datos */}
        <div className="bg-card p-6 rounded-xl border border-neutral-800 hover:border-neon transition-colors duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Server className="text-neon" size={24} />
            <h3 className="text-xl font-bold text-white">Backend & DB</h3>
          </div>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><span>⚡</span> Node.js & Express</li>
            <li className="flex items-center gap-2"><span>🐘</span> PostgreSQL</li>
            <li className="flex items-center gap-2"><span>🔗</span> Prisma ORM</li>
            <li className="flex items-center gap-2"><span>🔐</span> JWT & bcrypt</li>
          </ul>
        </div>

        {/* Tarjeta de Frontend & Mobile */}
        <div className="bg-card p-6 rounded-xl border border-neutral-800 hover:border-neon transition-colors duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="text-neon" size={24} />
            <h3 className="text-xl font-bold text-white">Frontend & Mobile</h3>
          </div>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><span>⚛️</span> React & Vite</li>
            <li className="flex items-center gap-2"><span>📱</span> React Native & Expo</li>
            <li className="flex items-center gap-2"><span>🎨</span> Tailwind CSS</li>
            <li className="flex items-center gap-2"><span>📐</span> Figma</li>
          </ul>
        </div>

        {/* Tarjeta de Herramientas */}
        <div className="bg-card p-6 rounded-xl border border-neutral-800 hover:border-neon transition-colors duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="text-neon" size={24} />
            <h3 className="text-xl font-bold text-white">Herramientas</h3>
          </div>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><span>🟦</span> TypeScript</li>
            <li className="flex items-center gap-2"><span>📦</span> pnpm</li>
            <li className="flex items-center gap-2"><span>🗃️</span> VS Code DB Client</li>
            <li className="flex items-center gap-2"><span>🐚</span> PowerShell</li>
          </ul>
        </div>

      </div>
    </section>
  );
}