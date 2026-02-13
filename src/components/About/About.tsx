export const About = () => {
    return (
        <>
            <section id="about" className="min-h-screen py-26 flex justify-center items-center text-[#E5E7E8]">
                <div className="max-w-90 md:max-w-120 flex flex-col items-center text-center space-y-15">
                    <h2 className="text-3xl md:text-4x1 font-bold">Sobre</h2>
                    <div className="space-y-4">
                        <p className="text-sm md:text-base">Sou desenvolvedor Front-End em transição de carreira, formado em contabilidade e apaixonado por tecnologia desde cedo. Em 2024 decidi seguir o caminho da programação de forma profissional, iniciando meus estudos e desenvolvimento de projetos próprios.</p>
                        <p className="text-sm md:text-base">Atualmente estudo JavaScript, React e boas práticas de desenvolvimento Front-End, sempre buscando criar interfaces modernas, funcionais e responsivas. Acredito no aprendizado contínuo e na prática como principal forma de evolução.</p>
                        <p className="text-sm md:text-base">Busco minha primeira oportunidade na área para aplicar meus conhecimentos, ganhar experiência e contribuir em projetos reais.</p>
                    </div>
                    <div className="text-center flex flex-col">
                        <h3 className="font-medium">
                            Skills principais
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>Tailwind</p>
                            <p>Git & GitHub</p>
                            <p>Consumo de APIs</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}