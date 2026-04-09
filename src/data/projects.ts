type Project = {
  title: string
  description: string
  tech: string
  demoLink: string
  githubLink: string
  image: string
}

export const projects: Project[] = [
    {
    title: "Pokedex",
    description: "Pokédex com consumo de API, listagem de Pokémon e tema dark/light.",
    tech: "React • JavaScript • API REST • Tailwind",
    demoLink: "https://andre-arcanjo.github.io/pokedex/",
    githubLink: "https://github.com/andre-arcanjo/pokedex",
    image: "pokedex-img.png"
    },
    {
    title: "Jogo da Memória",
    description: "Jogo da memória com sistema de cartas.",
    tech: "React • JavaScript • Tailwind • Lógica de Programação",
    demoLink: "https://andre-arcanjo.github.io/jogo-da-memoria/",
    githubLink: "https://github.com/andre-arcanjo/jogo-da-memoria",
    image: "jogo-memoria.png"
    },
    {
    title: "Calculadora de Impostos",
    description: "Calculadora de IRPJ e CSLL com base em receitas mensais.",
    tech: "JavaScript • HTML • CSS • Lógica de Programação",
    demoLink: "https://andre-arcanjo.github.io/calculadora-IRPJ-CSLL-lucro-presumido/",
    githubLink: "https://github.com/andre-arcanjo/calculadora-IRPJ-CSLL-lucro-presumido",
    image: "calculadora-img.png"
    },
    {
    title: "Ecommerce - Syntaxwear",
    description: "Landing page moderna com design responsivo e foco em UX.",
    tech: "HTML • CSS • Responsive Design",
    demoLink: "https://andre-arcanjo.github.io/ecommerce-syntaxwear/",
    githubLink: "https://github.com/andre-arcanjo/ecommerce-syntaxwear",
    image: "ecommerce-img.png"
    }
]