import { Download, Send } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-8 max-w-5xl mx-auto"
    >
      {/* Tarjeta Principal al estilo de tu plantilla */}
      <div className="bg-card p-8 rounded-2xl border border-neutral-800 shadow-2xl w-full md:w-1/2">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden border-2 border-neon">
            {/* Aquí irá tu fotografía o avatar más adelante */}
            <span className="text-3xl">👨‍💻</span>
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

        <div className="flex flex-wrap gap-4">
          <a
            href="/CV Alan Misael Bazan Zenil.pdf"
            download="CV_Alan_Misael_Bazan_Zenil.pdf"
            className="flex items-center gap-2 bg-neon text-dark px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-cyan-400 transition-colors"
          >
            <Download size={18} />
            Descargar CV
          </a>
          <a
            href="https://wa.me/525585974292"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent border border-gray-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:border-neon hover:text-neon transition-colors"
          >
            <Send size={18} />
            Hablemos
          </a>
        </div>
      </div>

      {/* Decoración visual de la plantilla (Simulando el fondo con código o íconos grandes) */}
      <div className="w-full md:w-1/2 flex justify-center items-center text-center">
        <div className="text-9xl font-mono text-neutral-800/40 select-none animate-pulse">
          &lt;/&gt;
        </div>
      </div>
    </section>
  );
}
