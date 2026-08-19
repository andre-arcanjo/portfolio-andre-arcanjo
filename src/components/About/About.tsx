export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-26 flex justify-center items-center"
    >
      <div className="max-w-90 md:max-w-120 flex flex-col items-center text-center space-y-15">
        <h2 className="text-3xl md:text-4xl font-bold">Sobre</h2>
        <div className="space-y-4">
          <p className="text-sm md:text-base">
            Sou desenvolvedor Full Stack em transição de carreira, formado em
            Contabilidade e apaixonado por tecnologia. Em 2024 decidi
            transformar esse interesse em uma nova carreira e comecei a estudar
            desenvolvimento web de forma mais aprofundada.
          </p>
          <p className="text-sm md:text-base">
            Atualmente desenvolvo aplicações utilizando React, TypeScript e
            tecnologias do ecossistema Node.js, trabalhando tanto na construção
            de interfaces quanto no desenvolvimento de APIs, integração com
            banco de dados, autenticação e regras de negócio.
          </p>
          <p className="text-sm md:text-base">
            Tenho buscado evoluir principalmente através da prática,
            desenvolvendo projetos cada vez mais completos. Entre eles está o
            SyntaxWear, um e-commerce Full Stack que reúne grande parte dos
            conhecimentos que adquiri durante meus estudos.
          </p>
          <p className="text-sm md:text-base">
            Busco minha primeira oportunidade profissional como desenvolvedor,
            onde possa continuar evoluindo, contribuir com projetos reais e
            aprender junto a outros desenvolvedores.
          </p>
        </div>
        <div className="text-center flex flex-col">
          <h3 className="font-medium">Skills principais</h3>
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
  );
};
