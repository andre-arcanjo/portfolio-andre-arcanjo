import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
    return (
        <>
            <section id="projects" className="text-[#E5E7E8]">
                <h1 className="text-center text-4xl font-bold mb-20">Projetos</h1>
                <div className="min-h-[80vh] flex flex-wrap gap-5 items-center justify-center">
                    <ProjectCard />
                </div>
            </section>
        </>
    )
}