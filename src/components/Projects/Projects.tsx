import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
    return (
        <>
            <section id="projects" className="text-[#E5E7E8]">
                <h2 className="text-center text-3xl md:text-4x1 font-bold mb-20">Projetos</h2>
                <div className="min-h-[80vh] flex flex-wrap gap-5 items-center justify-center">
                    <ProjectCard />
                </div>
            </section>
        </>
    )
}