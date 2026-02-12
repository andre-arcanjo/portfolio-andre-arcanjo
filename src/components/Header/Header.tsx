export const Header = () => {
    return (
        <>
            <header>
                <nav className="text-[#E5E7EB] flex justify-between p-10">
                    <a className="hover:text-[#A78BFA] transition-all" href="/">André Arcanjo</a>
                    <ul className="flex gap-5">
                        <li><a className="hover:text-[#A78BFA] transition-all" href="#about">Sobre</a></li>
                        <li><a className="hover:text-[#A78BFA] transition-all" href="#projects">Projetos</a></li>
                        <li><a className="hover:text-[#A78BFA] transition-all" href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}