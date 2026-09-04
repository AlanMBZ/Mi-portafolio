import { useEffect, useState } from 'react';
import { Star, ExternalLink, Code2 } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string;
  fork: boolean;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const misProyectosElegidos = [
          'mi-portafolio',
          'tuc', 
          'calculadora-react-native',
          'autenticacion-demo',
          'sistema-de-notificaciones-singleton-delegation-interface-',
          'testeo-de-mods-',
          'modulo-control-escolar'
          
        ];

        const response = await fetch('https://api.github.com/users/alanmbz/repos?per_page=50');
        
        if (response.ok) {
          const data = await response.json();
          
          const proyectosFiltrados = data.filter((repo: Repo) => 
            !repo.fork && misProyectosElegidos.includes(repo.name.toLowerCase())
          );
          
          setRepos(proyectosFiltrados);
        }
      } catch (error) {
        console.error("Error al cargar los proyectos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <section id="proyectos" className="py-16 px-8 max-w-5xl mx-auto border-t border-neutral-800 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Proyectos Destacados</h2>
        <p className="text-gray-400 text-sm">
          Mi trabajo más reciente, extraído directamente desde mi GitHub.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center text-neon">Cargando proyectos...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div 
              key={repo.id} 
              className="bg-card rounded-xl border border-neutral-800 hover:border-neon hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Contenedor de la Imagen de Vista Previa */}
              <div className="h-48 w-full overflow-hidden border-b border-neutral-800 relative">
                <img
                  // URL dinámica que trae el banner generado por GitHub
                  src={`https://opengraph.githubassets.com/1/alanmbz/${repo.name}`}
                  alt={`Vista previa de ${repo.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Capa oscura semitransparente que se aclara al pasar el mouse */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Contenido (Textos y Botones) */}
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white capitalize line-clamp-1">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>
                  <div className="flex gap-3 text-gray-400">
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="hover:text-neon transition-colors">
                      <Code2 size={20} />
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noreferrer" className="hover:text-neon transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 grow">
                  {repo.description || "Sin descripción proporcionada en el repositorio."}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500 mt-auto pt-4 border-t border-neutral-800">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-neon inline-block"></span>
                    {repo.language || 'Markdown'}
                  </span>
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <Star size={14} />
                    {repo.stargazers_count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
} 