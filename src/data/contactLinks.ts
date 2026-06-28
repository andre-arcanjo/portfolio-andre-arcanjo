import type { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

type ContactLink = {
  name: string;
  href: string;
  icon: IconType;
};

export const contactsLinks: ContactLink[] = [
  {
    name: 'Email',
    href: 'mailto:andrearcanjosouza@hotmail.com',
    icon: FaEnvelope,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/andre-arcanjo-7100as/',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/andre-arcanjo',
    icon: FaGithub,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5537999484258',
    icon: FaWhatsapp,
  },
];
