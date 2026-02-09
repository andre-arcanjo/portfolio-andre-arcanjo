export const Header = () => {
    return (
        <>
            <header>
                <nav className="text-[#E5E7EB] flex justify-between p-10">
                    <a className="hover:text-[#A78BFA] transition-all" href="/">André Arcanjo</a>
                    <ul className="flex gap-5">
                        <li><a className="hover:text-[#A78BFA] transition-all" href="#sobre">Sobre</a></li>
                        <li><a className="hover:text-[#A78BFA] transition-all" href="#projetos">Projetos</a></li>
                        <li><a className="hover:text-[#A78BFA] transition-all" href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}