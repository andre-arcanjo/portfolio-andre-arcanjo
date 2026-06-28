import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col-reverse md:flex-row gap-10 items-center justify-around text-center md:text-left"
    >
      <div className="max-w-90 md:max-w-120 text-content space-y-8">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent leading-tight">
            <TypeAnimation
              sequence={['André Arcanjo']}
              speed={30}
              cursor={false}
              repeat={0}
            />
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium">
            <TypeAnimation
              sequence={[2000, 'Desenvolvedor Front-End']}
              speed={30}
              cursor={true}
              repeat={0}
            />
          </h2>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm md:text-base">
            Criando interfaces modernas e responsivas com JavaScript e React.
          </h3>
          <h3 className="text-sm md:text-base">
            Buscando minha primeira oportunidade como desenvolvedor.
          </h3>
        </div>
        <div className="flex gap-10 font-medium justify-center md:justify-normal">
          <a
            href="#projects"
            rel="noopener noreferrer"
            className="h-9 w-28 md:h-10 md:w-32 flex items-center justify-center bg-button rounded-lg hover:bg-hover-button hover:scale-105 transition-all"
          >
            Ver Projetos
          </a>
          <a
            href="https://github.com/andre-arcanjo"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 w-28 md:h-10 md:w-32 flex items-center justify-center bg-button rounded-lg hover:bg-hover-button hover:scale-105 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
      <div>
        <img
          src="Foto-Perfil.jpeg"
          className="h-40 md:h-58 w-40 md:w-58 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
        />
      </div>
    </section>
  );
};
