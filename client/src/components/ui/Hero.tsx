import { Download, Send, Code2, LucideNetwork } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-8 max-w-5xl mx-auto"
    >
      
      <div className="bg-card p-8 rounded-2xl border border-neutral-800 shadow-2xl w-full md:w-1/2">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden border-2 border-neon">
            
            <span className="text-3xl">👨</span>
          </div>
          <div>
            <p className="text-gray-400 font-mono text-sm mb-1">Hola,</p>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Soy Alan
            </h1>
            <h2 className="text-neon font-medium mt-1">Full-Stack Developer</h2>
          </div>
        </div>

        <p className="text-gray-400 mb-8 leading-relaxed text-sm">
          Construyo aplicaciones eficientes y escalables. Especializado en
          diseñar arquitecturas de backend sólidas con Node.js, Express, Prisma
          y PostgreSQL, integradas con interfaces modernas e interactivas.
        </p>
{/* Contenedor Grid: 2 columnas, 2 filas. Alineación perfecta. */}
        <div className="grid grid-cols-2 gap-3 w-full sm:max-w-md">
          
          {/* Fila 1 - Botón Principal: CV */}
          <a 
            href="/CV Alan Misael Bazan Zenil.pdf" 
            download="CV_Alan_Misael_Bazan_Zenil.pdf"
            className="flex items-center justify-center gap-2 bg-neon text-dark px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-cyan-400 transition-colors whitespace-nowrap"
          >
            <Download size={18} />
            Descargar CV
          </a>

          {/* Fila 1 - Botón Secundario: WhatsApp */}
          <a 
            href="https://wa.me/525585974292"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:border-neon hover:text-neon transition-colors whitespace-nowrap"
          >
            <Send size={18} />
            Hablemos
          </a>

          {/* Fila 2 - Botón: LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/alan-misael-bazan-zenil-92a8b634b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-gray-300 px-4 py-2.5 rounded-lg font-medium text-sm hover:border-neon hover:text-neon transition-colors whitespace-nowrap"
          >
            <LucideNetwork size={18} />
            LinkedIn
          </a>

          {/* Fila 2 - Botón: GitHub */}
          <a 
            href="https://github.com/AlanMBZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-gray-300 px-4 py-2.5 rounded-lg font-medium text-sm hover:border-neon hover:text-neon transition-colors whitespace-nowrap"
          >
            <Code2 size={18} />
            GitHub
          </a>
        </div>
      </div>

      {/* Decoración visual de la plantill*/}
      <div className="w-full md:w-1/2 flex justify-center items-center text-center">
        <div className="text-9xl font-mono text-neutral-800/40 select-none animate-pulse">
          &lt;Alan/&gt;
        </div>
      </div>
    </section>
  );
}
