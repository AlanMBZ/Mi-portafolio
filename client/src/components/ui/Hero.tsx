import { Download, Send, Code2, LucideNetwork } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      
      className="flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-8 max-w-6xl mx-auto"
    >
      
      
      <div className="bg-card p-10 md:p-12 rounded-2xl border border-neutral-800 shadow-2xl w-full md:w-3/5 flex flex-col justify-center">
        
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden border-2 border-neon">
            <span className="text-3xl"><img src="logo.png" alt="Profile_picture" /></span>
          </div>
          <div>
            <p className="text-gray-400 font-mono text-sm mb-1">Hola,</p>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Soy Alan
            </h1>
            <h2 className="text-neon font-medium mt-1">Full-Stack Developer</h2>
          </div>
        </div>

        <p className="text-gray-400 mb-10 leading-relaxed text-base text-justify">
          Desarrollador Full-Stack especializado en arquitecturas web eficientes (Node.js, React, PostgreSQL), 
          con la agilidad técnica para adaptarme rápidamente a ecosistemas móviles o de escritorio. Mi enfoque 
          va más allá del código: me involucro en todo el ciclo de vida del software, desde la definición de 
          requerimientos técnicos y diseño de interfaces, hasta la evaluación de riesgos y el despliegue a producción. 
          Me defino como un solucionador de problemas resiliente con una mentalidad de 'cómo sí hacerlo'. 
          Disfruto potenciar el trabajo en equipo mediante una comunicación clara, asegurando que cada fase del 
          proyecto aporte valor real al negocio.
        </p>

      
        <div className="grid grid-cols-2 gap-4 w-full sm:max-w-lg">
          
          <a 
            href="/CV Alan Misael Bazan Zenil.pdf" 
            download="CV_Alan_Misael_Bazan_Zenil.pdf"
            className="flex items-center justify-center gap-2 bg-neon text-dark px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-cyan-400 transition-colors whitespace-nowrap"
          >
            <Download size={18} />
            Descargar CV
          </a>

          <a 
            href="https://wa.me/525585974292"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:border-neon hover:text-neon transition-colors whitespace-nowrap"
          >
            <Send size={18} />
            Hablemos
          </a>

          <a 
            href="https://www.linkedin.com/in/alan-misael-bazan-zenil-92a8b634b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-gray-300 px-4 py-2.5 rounded-lg font-medium text-sm hover:border-neon hover:text-neon transition-colors whitespace-nowrap"
          >
            <LucideNetwork size={18} />
            LinkedIn
          </a>

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

      <div className="w-full md:w-2/5 flex justify-center items-center text-center">
        <div className="text-7xl lg:text-9xl font-mono text-neutral-800/40 select-none animate-pulse">
          &lt;Dev/&gt;
        </div>
      </div>
    </section>
  );
}