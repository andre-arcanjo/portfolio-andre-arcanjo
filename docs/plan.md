# Portfolio Improvement Plan

Este documento contém as próximas melhorias planejadas para o portfólio.

## Regras para implementação

* Implementar apenas um item por vez.
* Não alterar partes do projeto que não estejam relacionadas ao item solicitado.
* Manter o padrão atual de componentes e estilização do projeto.
* Utilizar TypeScript corretamente.
* Manter o layout responsivo.
* Não realizar commits automaticamente.
* Após concluir cada item, informar quais arquivos foram alterados e resumir as mudanças realizadas.

---

## Item 1 — Refatorar tecnologias dos projetos

### Objetivo

Alterar a propriedade `tech` dos projetos para utilizar um array de strings em vez de uma única string.

Isso permitirá renderizar cada tecnologia individualmente no card e facilitar futuras alterações.

### Arquivos principais

* `src/data/projects.ts`
* `src/components/Projects/ProjectCard.tsx`

### Alterações

Alterar o tipo:

```ts
tech: string;
```

para:

```ts
tech: string[];
```

Atualizar todos os projetos.

Exemplo:

```ts
tech: [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Fastify',
  'Prisma',
],
```

No `ProjectCard`, renderizar as tecnologias individualmente utilizando `.map()`.

Criar uma apresentação visual simples para cada tecnologia, preferencialmente utilizando pequenos badges.

Exemplo de estrutura:

```tsx
<div className="flex flex-wrap justify-center gap-2">
  {project.tech.map((technology) => (
    <span
      key={technology}
      className="px-3 py-1 text-sm border rounded-full"
    >
      {technology}
    </span>
  ))}
</div>
```

### Critérios de conclusão

* Todos os projetos utilizam `tech: string[]`.
* Não existem erros de TypeScript.
* Todas as tecnologias aparecem corretamente nos cards.
* Os badges permanecem organizados em telas menores.
* Nenhuma outra funcionalidade do card deve ser alterada.

### Commit sugerido

```bash
git commit -m "refactor: improve project technologies structure"
```

---

## Item 2 — Adicionar links separados de Front-End e Back-End

### Objetivo

Permitir que projetos Full Stack, principalmente o SyntaxWear, possuam links separados para os repositórios Front-End e Back-End.

Os demais projetos devem continuar utilizando apenas um botão de GitHub.

### Arquivos principais

* `src/data/projects.ts`
* `src/components/Projects/ProjectCard.tsx`

### Alterações

Adicionar uma propriedade opcional ao tipo `Project`:

```ts
backendLink?: string;
```

O SyntaxWear deverá possuir:

```ts
githubLink: 'LINK_DO_REPOSITORIO_FRONTEND',
backendLink: 'LINK_DO_REPOSITORIO_BACKEND',
```

Quando `backendLink` existir, os botões do projeto deverão ser:

```text
Demo
Front-End
Back-End
```

Quando `backendLink` não existir, manter:

```text
Demo
GitHub
```

A implementação deve ser dinâmica, sem criar lógica específica verificando o nome do SyntaxWear.

Utilizar a existência de `backendLink` para determinar o comportamento.

### Critérios de conclusão

* SyntaxWear possui botões separados para Front-End e Back-End.
* Outros projetos continuam exibindo `Demo` e `GitHub`.
* Os links devem abrir em uma nova aba.
* Manter `rel="noopener noreferrer"`.
* Os três botões do SyntaxWear devem funcionar corretamente em desktop e mobile.
* Não duplicar componentes desnecessariamente.

### Commit sugerido

```bash
git commit -m "feat: add separate frontend and backend links to projects"
```

---

## Item 3 — Adicionar currículo ao Hero

### Observação

Executar este item somente após o currículo ter sido atualizado para o perfil Full Stack.

### Objetivo

Disponibilizar o currículo diretamente na seção Hero do portfólio.

Atualmente existem os botões:

```text
Ver Projetos
GitHub
```

Alterar para:

```text
Ver Projetos
Currículo
```

O GitHub continuará disponível na seção de contatos.

### Arquivos principais

* `src/components/Hero/Hero.tsx`
* `public/`

### Alterações

Adicionar o currículo atualizado à pasta `public`.

Sugestão de nome:

```text
andre-arcanjo-curriculo.pdf
```

Alterar o segundo botão do Hero para abrir o currículo.

Exemplo:

```tsx
<a
  href="/andre-arcanjo-curriculo.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Currículo
</a>
```

Manter o mesmo estilo visual utilizado atualmente nos botões do Hero.

### Critérios de conclusão

* O botão `Currículo` substitui o botão `GitHub`.
* O currículo abre corretamente em uma nova aba.
* O botão `Ver Projetos` continua funcionando normalmente.
* O GitHub continua disponível na seção de contato.
* O layout do Hero permanece responsivo.

### Commit sugerido

```bash
git commit -m "feat: add resume link to hero section"
```

---

## Item 4 — Revisar apresentação do SyntaxWear como projeto principal

### Objetivo

Depois das alterações anteriores, revisar a seção de projetos e avaliar se o SyntaxWear precisa receber maior destaque visual por ser o projeto Full Stack mais completo do portfólio.

Este item deve ser tratado como uma melhoria separada e não deve ser executado junto aos itens anteriores.

### Possível solução

Criar uma área de:

```text
Projeto em destaque
```

para o SyntaxWear.

Abaixo dela, manter:

```text
Outros projetos
```

com:

* Pokédex
* Jogo da Memória
* Calculadora de Impostos

### Importante

Antes de implementar uma grande mudança de layout, analisar a estrutura atual e propor uma solução simples que reutilize os componentes existentes sempre que possível.

Evitar reescrever toda a seção de projetos apenas para destacar o SyntaxWear.

### Critérios de conclusão

* SyntaxWear recebe maior destaque visual.
* Os outros projetos continuam facilmente acessíveis.
* A seção permanece responsiva.
* A mudança não deve gerar duplicação desnecessária de dados.
* Manter a identidade visual atual do portfólio.

### Commit sugerido

```bash
git commit -m "style: highlight featured project"
```

---

# Ordem recomendada

Executar os itens nesta ordem:

1. Refatorar `tech` para array.
2. Adicionar links separados Front-End e Back-End.
3. Revisar o resultado geral da seção de projetos.
4. Avaliar e implementar o destaque do SyntaxWear.
5. Atualizar o currículo.
6. Adicionar o currículo ao Hero.

Não executar mais de um item sem solicitação explícita.
