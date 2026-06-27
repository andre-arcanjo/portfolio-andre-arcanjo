import { navItems } from '../../data/navItems';

export const HeaderNav = () => {
  return (
    <>
      {navItems.map((navItem) => (
        <li key={navItem.name}>
          <a className="hover:text-hover-button transition-all" href={navItem.href}>
            {navItem.name}
          </a>
        </li>
      ))}
    </>
  );
};
