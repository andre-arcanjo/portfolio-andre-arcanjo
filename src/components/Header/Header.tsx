import { HeaderNav } from './HeadersNavs';

export const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#0B0F19] z-50">
        <nav className="lg:text-[20px] flex flex-col justify-between items-center px-30 py-10 md:flex-row">
          <a className="hover:text-hover-button transition-all" href="#hero">
            André Arcanjo
          </a>
          <ul className="flex gap-5 mt-4 md:mt-0">
            <HeaderNav />
          </ul>
        </nav>
      </header>
    </>
  );
};
