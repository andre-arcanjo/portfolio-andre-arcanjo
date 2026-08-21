import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

export const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="flex flex-col justify-center min-h-screen py-20"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Projetos
      </h2>

      <div className="mb-16">
        <h3 className="text-center text-xl md:text-2xl font-semibold text-hover-button mb-6">
          Projeto em destaque
        </h3>
        <div className="flex justify-center px-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-center text-xl md:text-2xl font-semibold mb-6">
          Outros projetos
        </h3>
        <div className="flex md:flex-wrap overflow-x-auto scroll-smooth scrollbar-hide md:overflow-visible gap-5 items-center md:justify-center snap-x snap-mandatory px-4">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
