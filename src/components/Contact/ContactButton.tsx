import { contactsLinks } from '../../data/contactLinks';

export const ContactButton = () => {
  return (
    <>
      {contactsLinks.map((contactLink) => {
        const Icon = contactLink.icon;

        return (
          <a
            key={contactLink.name}
            href={contactLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 flex items-center justify-center gap-2 bg-button px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-hover-button hover:scale-105 transition-all"
          >
            <Icon className="text-base md:text-xl" />
            {contactLink.name}
          </a>
        );
      })}
    </>
  );
};
