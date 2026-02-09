export const About = () => {
    return (
        <>
            <section className="py-24 flex justify-center items-center text-[#E5E7E8]">
                <div className="max-w-120 flex flex-col items-center text-center space-y-15">
                    <h1 className="text-4xl font-bold">Sobre</h1>
                    <div className="space-y-4">
                        <p>Sou desenvolvedor Front-End em transição de carreira, formado em contabilidade e apaixonado por tecnologia desde cedo. Em 2024 decidi seguir o caminho da programação de forma profissional, iniciando meus estudos e desenvolvimento de projetos próprios.</p>
                        <p>Atualmente estudo JavaScript, React e boas práticas de desenvolvimento Front-End, sempre buscando criar interfaces modernas, funcionais e responsivas. Acredito no aprendizado contínuo e na prática como principal forma de evolução.</p>
                        <p>Busco minha primeira oportunidade na área para aplicar meus conhecimentos, ganhar experiência e contribuir em projetos reais.</p>
                    </div>
                    <div className="text-center flex flex-col">
                        <h2 className="font-medium">
                            Skills principais
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
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