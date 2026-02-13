import { projects } from "../../data/projects"

export const ProjectCard = () => {
    return (
        <>
            {projects.map((project) => (
                <div key={project.title} className="h-[450px] w-[360px] md:h-[520px] md:w-[520px] flex flex-col items-center justify-center max-w-lg space-y-5 border rounded-md hover:scale-105 transition-transform">
                    <h3 className="text-center font-semibold">{project.title}</h3>
                    <div className="flex justify-center">
                        <img src={project.image} className="h-35 w-70 md:h-50 md:w-100 rounded-md" alt={`Screenshot do projeto ${project.title}`} />
                    </div>
                    <p className="text-center text-sm md:text-base max-w-64">{project.description}</p>
                    <div className="text-sm md:text-base">
                        <p>Tecnologias Utilizadas:</p>
                        <p>{project.tech}</p>
                    </div>
                    <div className="flex gap-10 font-medium mb-8">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="h-9 md:h-10 w-28 md:w-32 flex items-center justify-center bg-[#7C3AED] rounded-lg hover:bg-[#A78BFA] transition-all">Demo</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="h-9 md:h-10 w-28 md:w-32 flex items-center justify-center bg-[#7C3AED] rounded-lg hover:bg-[#A78BFA] transition-all">GitHub</a>
                    </div>
                </div>
            ))}
        </>
    )
}