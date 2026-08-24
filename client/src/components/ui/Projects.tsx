import { ExternalLink, FolderGit2, GitBranch } from 'lucide-react';

export default function Projects() {
  // Lista de proyectos. Más adelante podemos mover esto a un archivo de datos separado.
  const projects = [
    {
      id: 1,
      title: 'TESCO AVISOS',
      description: 'Aplicación móvil diseñada para la gestión y visualización de avisos. Implementa caché offline mediante local storage para acceso sin conexión, base de datos en tiempo real, descarga de documentos PDF y sistema de notificaciones push.',
      tech: ['React Native', 'Firebase Firestore', 'Local Storage'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Motor Backend XOOK',
      description: 'Arquitectura backend robusta y escalable. Configuración de enrutamiento API RESTful, modelado de datos mediante ORM y conexión segura a base de datos relacional. Entorno optimizado gestionado con pnpm.',
      tech: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'pnpm'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section className="py-20 px-8 max-w-5xl mx-auto border-t border-neutral-800" id="proyectos">
      <div className="flex items-center gap-3 mb-12">
        <FolderGit2 className="text-neon" size={28} />
        <h2 className="text-3xl font-bold text-white">Proyectos Destacados</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-card rounded-xl border border-neutral-800 overflow-hidden hover:border-neon transition-all duration-300 group">
            {/* Espacio para la imagen del proyecto (Placeholder por ahora) */}
            <div className="h-48 bg-neutral-900 border-b border-neutral-800 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-80 z-10"></div>
              <span className="text-neutral-700 font-mono text-5xl group-hover:scale-110 transition-transform duration-500">
                &lt; {project.title.split(' ')[0]} /&gt;
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag, index) => (
                  <span key={index} className="bg-neutral-800 text-neon text-xs px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <GitBranch size={18} />
                  Código
                </a>
                <a href={project.demo} className="text-gray-400 hover:text-neon transition-colors flex items-center gap-2 text-sm font-medium">
                  <ExternalLink size={18} />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}