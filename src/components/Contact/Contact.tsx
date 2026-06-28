import { ContactButton } from './ContactButton';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen space-y-16 md:space-y-24 flex flex-col justify-center items-center"
    >
      <h2 className="font-bold text-3xl md:text-4xl">Contato</h2>
      <div className="text-center text-sm md:text-base max-w-90 md:max-w-120 space-y-2">
        <p>
          Estou em busca da minha primeira oportunidade como desenvolvedor
          Front-End.
        </p>
        <p>
          Se quiser conversar sobre vagas ou projetos, será um prazer falar com
          você!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <ContactButton />
      </div>
    </section>
  );
};
