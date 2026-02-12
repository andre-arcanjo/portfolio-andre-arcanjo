import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"

export const Contact = () => {
    return (
        <>
            <section id="contact" className="text-[#E5E7E8] min-h-screen space-y-24 flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl">Contato</h1>
                <div className="text-center max-w-xl space-y-2">
                    <p>Estou em busca da minha primeira oportunidade como desenvolvedor Front-End.</p>
                    <p>Se quiser conversar sobre vagas ou projetos, será um prazer falar com você!</p>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    <a className="flex items-center gap-2 bg-[#7C3AED] px-4 py-2 rounded-lg hover:bg-[#A78BFA] hover:scale-105 transition-all" href="mailto:andrearcanjosouza@hotmail.com">
                        <FaEnvelope size={20} />
                        Email
                    </a>
                    <a className="flex items-center gap-2 bg-[#7C3AED] px-4 py-2 rounded-lg hover:bg-[#A78BFA] hover:scale-105 transition-all" href="https://www.linkedin.com/in/andre-arcanjo-7100as/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} />
                        Linkedin
                    </a>
                    <a className="flex items-center gap-2 bg-[#7C3AED] px-4 py-2 rounded-lg hover:bg-[#A78BFA] hover:scale-105 transition-all" href="https://github.com/andre-arcanjo" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                        GitHub
                    </a>
                    <a className="flex items-center gap-2 bg-[#7C3AED] px-4 py-2 rounded-lg hover:bg-[#A78BFA] hover:scale-105 transition-all" href="https://wa.me/5537999484258" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={20} />
                        WhatsApp
                    </a>
                </div>
            </section>
        </>
    )
}