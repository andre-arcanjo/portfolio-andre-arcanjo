type Project = {
  title: string;
  description: string;
  tech: string;
  demoLink: string;
  githubLink: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: 'Syntaxwear - E-commerce Full Stack',
    description: 'E-commerce Full Stack com autenticação, carrinho, checkout e gerenciamento de pedidos.',
    tech: 'React • TypeScript • Node.js • Fastify • Prisma',
    demoLink: 'https://syntax-wear-app-mauve.vercel.app/',
    githubLink: 'https://github.com/andre-arcanjo/syntax-wear-app',
    image: 'ecommerce-img.png',
  },
  {
    title: 'Pokedex',
    description:
      'Pokédex com consumo de API, listagem de Pokémon e tema dark/light.',
    tech: 'React • JavaScript • API REST • Tailwind',
    demoLink: 'https://andre-arcanjo.github.io/pokedex/',
    githubLink: 'https://github.com/andre-arcanjo/pokedex',
    image: 'pokedex-img.png',
  },
  {
    title: 'Jogo da Memória',
    description: 'Jogo da memória com sistema de cartas.',
    tech: 'React • JavaScript • Tailwind • Lógica de Programação',
    demoLink: 'https://andre-arcanjo.github.io/jogo-da-memoria/',
    githubLink: 'https://github.com/andre-arcanjo/jogo-da-memoria',
    image: 'jogo-memoria.png',
  },
  {
    title: 'Calculadora de Impostos',
    description: 'Calculadora de IRPJ e CSLL com base em receitas mensais.',
    tech: 'JavaScript • HTML • CSS • Lógica de Programação',
    demoLink:
      'https://andre-arcanjo.github.io/calculadora-IRPJ-CSLL-lucro-presumido/',
    githubLink:
      'https://github.com/andre-arcanjo/calculadora-IRPJ-CSLL-lucro-presumido',
    image: 'calculadora-img.png',
  }
];
