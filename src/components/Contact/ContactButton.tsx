import { contacts } from '../../data/contact';

export const ContactButton = () => {
  return (
    <>
      {contacts.map((contact) => {
        const Icon = contact.icon;

        return (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 flex items-center justify-center gap-2 bg-button px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-hover-button hover:scale-105 transition-all"
          >
            <Icon className="text-base md:text-xl" />
            {contact.name}
          </a>
        );
      })}
    </>
  );
};
