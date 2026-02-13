export const Hero = () => {
    return (
        <>
                <section className="min-h-[80vh] text-[#E5E7E8] flex flex-col-reverse md:flex-row gap-10 items-center justify-around text-center md:text-left">
                    <div className="max-w-90 md:max-w-120 text-content space-y-8">
                        <div className="space-y-5">
                            <h1 className="text-3xl md:text-4xl font-bold">André Arcanjo</h1>
                            <h2 className="text-2xl md:text-3xl font-medium">Desenvolvedor Front-End</h2>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm md:text-base">Criando interfaces modernas e responsivas com JavaScript e React.</h3>
                            <h3 className="text-sm md:text-base">Buscando minha primeira oportunidade como desenvolvedor.</h3>
                        </div>
                        <div className="flex gap-10 font-medium justify-center md:justify-normal">
                            <a href="#projetos" target="_blank" rel="noopener noreferrer" className="h-9 w-28 md:h-10 md:w-32 flex items-center justify-center bg-[#7C3AED] rounded-lg hover:bg-[#A78BFA] hover:scale-105 transition-all">Ver Projetos</a>
                            <a href="https://github.com/andre-arcanjo" target="_blank" rel="noopener noreferrer" className="h-9 w-28 md:h-10 md:w-32 flex items-center justify-center bg-[#7C3AED] rounded-lg hover:bg-[#A78BFA] hover:scale-105 transition-all">GitHub</a>
                        </div>
                    </div>
                    <div>
                        <div className="h-40 md:h-60 w-40 md:w-60 rounded-full bg-[#A78BFA]"></div>
                    </div>
                </section>
        </>
    )
}