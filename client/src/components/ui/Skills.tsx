export default function Skills() {
  const skills = [
    // Frontend & Mobile
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'React', icon: 'react' },
    { name: 'React Native', icon: 'react' }, // Usa el mismo logo de React
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Android Studio', icon: 'androidstudio' },
    
    // Backend & DB
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express', icon: 'express' },
    { name: 'PHP', icon: 'php' },
    { name: 'Java', icon: 'java' },
    { name: 'PostgreSQL', icon: 'postgres' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'MongoDB', icon: 'mongo' },
    { name: 'SQL Server', icon: 'azure' }, // Alternativa de Microsoft
    { name: 'Prisma ORM', icon: 'prisma' },
    { name: 'Firebase', icon: 'firebase' },
    
    // Herramientas & DevOps
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Docker', icon: 'docker' },
    { name: 'NPM', icon: 'npm' },
    { name: 'pnpm', icon: 'pnpm' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'PowerShell', icon: 'powershell' },
    { name: 'Discord', icon: 'discord' },
  ];

  return (
    <section id="habilidades" className="py-16 px-8 max-w-5xl mx-auto border-t border-neutral-800 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Habilidades Técnicas</h2>
        <p className="text-gray-400 text-sm">
          Mi ecosistema de desarrollo para construir soluciones de extremo a extremo.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-card rounded-xl border border-neutral-800 hover:border-neon hover:-translate-y-1 transition-all duration-300 group"
          >
            <img 
              src={`https://skillicons.dev/icons?i=${skill.icon}`} 
              alt={`Icono de ${skill.name}`} 
              className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-gray-300 text-xs font-medium text-center group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}