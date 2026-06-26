import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <>
      <section id="projects" className=" flex flex-col justify-center min-h-screen">
        <h2 className="text-center text-3xl md:text-4x1 font-bold mb-20">
          Projetos
        </h2>
        <div className="flex md:flex-wrap overflow-x-auto scroll-smooth scrollbar-hide md:overflow-visible gap-5 items-center md:justify-center snap-x snap-mandatory px-4">
          <ProjectCard />
        </div>
      </section>
    </>
  );
};
