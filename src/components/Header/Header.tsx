export const Header = () => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-[#0B0F19] Z-50">
                <nav className="text-[#E5E7EB] flex flex-col justify-between items-center p-10 md:flex-row">
                    <a className="hover:text-[#A78BFA] transition-all" href="/">André Arcanjo</a>
                    <ul className="flex gap-5 mt-4 md:mt-0">
                        <li><a className="hover:text-[#A78BFA] transition-all" href="#about">Sobre</a></li>
                        <li><a className="hover:text-[#A78BFA] transition-all" href="#projects">Projetos</a></li>
                        <li><a className="hover:text-[#A78BFA] transition-all" href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}