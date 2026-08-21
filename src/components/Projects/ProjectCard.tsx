import { projects } from '../../data/projects';

export const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.title}
          className="h-112.5 w-[90%] shrink-0 md:shrink md:w-130 md:h-130 flex flex-col items-center justify-center max-w-lg space-y-5 border rounded-md hover:scale-105 transition-transform snap-center"
        >
          <h3 className="text-center font-semibold">{project.title}</h3>
          <div className="flex justify-center">
            <img
              src={project.image}
              className="h-35 w-70 md:h-50 md:w-100 rounded-md"
              alt={`Screenshot do projeto ${project.title}`}
            />
          </div>
          <p className="text-center text-sm md:text-base max-w-64">
            {project.description}
          </p>
          <div className="text-sm md:text-base text-center">
            <p className="mb-2">Tecnologias Utilizadas:</p>
            <div className="flex flex-wrap justify-center gap-2 px-4">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="px-3 py-1 text-sm border rounded-full"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-center gap-3 px-4 font-medium mb-8">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 md:h-10 flex flex-1 min-w-0 max-w-32 items-center justify-center bg-button rounded-lg hover:bg-hover-button transition-all text-sm md:text-base"
            >
              Demo
            </a>
            <a
              href={project.frontendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 md:h-10 flex flex-1 min-w-0 max-w-32 items-center justify-center bg-button rounded-lg hover:bg-hover-button transition-all text-sm md:text-base"
            >
              {project.backendLink ? 'Front-End' : 'GitHub'}
            </a>
            {project.backendLink && (
              <a
                href={project.backendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 md:h-10 flex flex-1 min-w-0 max-w-32 items-center justify-center bg-button rounded-lg hover:bg-hover-button transition-all text-sm md:text-base"
              >
                Back-End
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
