import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"

export const Contact = () => {
    return (
        <>
            <section id="contact" className="text-[#E5E7E8] min-h-screen space-y-16 md:space-y-24 flex flex-col justify-center items-center">
                <h2 className="font-bold text-3xl md:text-4xl">Contato</h2>
                <div className="text-center text-sm md:text-base max-w-90 md:max-w-120 space-y-2">
                    <p>Estou em busca da minha primeira oportunidade como desenvolvedor Front-End.</p>
                    <p>Se quiser conversar sobre vagas ou projetos, será um prazer falar com você!</p>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    <a className="w-32 flex items-center justify-center gap-2 bg-[#7C3AED] px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-[#A78BFA] hover:scale-105 transition-all" href="mailto:andrearcanjosouza@hotmail.com">
                        <FaEnvelope className="text-base md:text-xl" />
                        Email
                    </a>
                    <a className="w-32 flex items-center justify-center gap-2 bg-[#7C3AED] px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-[#A78BFA] hover:scale-105 transition-all" href="https://www.linkedin.com/in/andre-arcanjo-7100as/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-base md:text-xl" />
                        Linkedin
                    </a>
                    <a className="w-32 flex items-center justify-center gap-2 bg-[#7C3AED] px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-[#A78BFA] hover:scale-105 transition-all" href="https://github.com/andre-arcanjo" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-base md:text-xl" />
                        GitHub
                    </a>
                    <a className="w-32 flex items-center justify-center gap-2 bg-[#7C3AED] px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-[#A78BFA] hover:scale-105 transition-all" href="https://wa.me/5537999484258" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-base md:text-xl" />
                        WhatsApp
                    </a>
                </div>
            </section>
        </>
    )
}