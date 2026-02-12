import { projects } from "../../data/projects"

export const ProjectCard = () => {
    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className="h-[520px] w-[520px] flex flex-col items-center justify-center max-w-lg space-y-5 border rounded-md hover:scale-105 transition-transform">
                    <h2 className="text-center font-semibold">{project.title}</h2>
                    <div className="flex justify-center">
                        <img src={project.image} className="h-50 w-100 rounded-md" alt={project.title} />
                    </div>
                    <p className="text-center max-w-64">{project.description}</p>
                    <div>
                        <p>Tecnologias Utilizadas:</p>
                        <p>{project.tech}</p>
                    </div>
                    <div className="flex gap-10 font-medium mb-8">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="h-10 w-32 flex items-center justify-center bg-[#7C3AED] rounded-lg hover:bg-[#A78BFA] transition-all">Demo</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="h-10 w-32 flex items-center justify-center bg-[#7C3AED] rounded-lg hover:bg-[#A78BFA] transition-all">GitHub</a>
                    </div>
                </div>
            ))}
        </>
    )
}