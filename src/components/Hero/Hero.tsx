export const Hero = () => {
    return (
        <>
                <section className="min-h-[80vh] text-[#E5E7E8] flex items-center justify-around">
                    <div className="max-w-120 text-content space-y-8">
                        <div className="space-y-5">
                            <h1 className="text-4xl font-bold">André Arcanjo</h1>
                            <h2 className="text-3xl font-medium">Desenvolvedor Front-End</h2>
                        </div>
                        <div className="space-y-2">
                            <h3>Criando interfaces modernas e responsivas com JavaScript e React.</h3>
                            <h3>Buscando minha primeira oportunidade como desenvolvedor.</h3>
                        </div>
                        <div className="flex gap-10 font-medium">
                            <a href="#projetos" target="_blank" rel="noopener noreferrer" className="h-10 w-32 flex items-center justify-center bg-[#7C3AED] rounded-lg hover:bg-[#A78BFA] transition-all">Ver Projetos</a>
                            <a href="https://github.com/andre-arcanjo" target="_blank" rel="noopener noreferrer" className="h-10 w-32 flex items-center justify-center bg-[#7C3AED] rounded-lg hover:bg-[#A78BFA] transition-all">GitHub</a>
                        </div>
                    </div>
                    <div>
                        <div className="h-60 w-60 rounded-full bg-[#A78BFA]"></div>
                    </div>
                </section>
        </>
    )
}