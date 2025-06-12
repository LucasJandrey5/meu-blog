# 📝 Blog do Lucas Jandrey

## Sobre o Projeto

Este blog pessoal é o lugar onde compartilho meus materiais de estudo, anotações e descobertas do mundo da programação e tecnologia.

**Meu objetivo** é simples: ao ensinar e compartilhar conhecimento, eu também aprendo. Acredito que explicar conceitos para outros é uma das melhores formas de consolidar o próprio aprendizado.

Aqui você encontrará:

- 📚 Artigos sobre desenvolvimento web
- 💻 Tutoriais e dicas de programação
- 🚀 Experiências com novas tecnologias
- 🧠 Conceitos fundamentais da computação

**Visite meu site principal:** [www.lucasjandrey.com.br](https://www.lucasjandrey.com.br)

## 🛠️ Tecnologias

- **Next.js 15** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **MDX** - Markdown com suporte a componentes React
- **Tailwind CSS** - Framework CSS utilitário
- **Syntax Highlighting** - Para blocos de código

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Compilar para produção
npm run build
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📁 Estrutura do Projeto

src/
├── app/ # App Router do Next.js
├── components/ # Componentes React
├── lib/ # Utilitários e configurações
├── pages/ # Pages Router (posts)
├── posts/ # Arquivos MDX dos posts
└── types/ # Definições de tipos TypeScript

## ✍️ Criando um Post

Crie um arquivo `.mdx` na pasta `src/posts/` com o frontmatter:

```mdx
---
title: "Título do Post"
date: "2024-01-15"
description: "Descrição breve"
image_url: "imagem.jpg"
reading_time: 5
tags: ["React", "JavaScript"]
---

# Conteúdo do post aqui...
```

---

💡 **Dica:** Se você encontrar algum erro ou tiver sugestões, fique à vontade para abrir uma issue!
