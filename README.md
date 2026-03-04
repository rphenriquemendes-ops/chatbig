# Portfólio Fotográfico (Next.js + Tailwind)

Site completo de portfólio fotográfico de Henrique Mendes com App Router, tema claro/escuro, filtros, lightbox e página dinâmica de ensaio.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## Como trocar placeholders pelas suas fotos

1. Copie suas imagens para `public/placeholder/` (ou outra pasta dentro de `public/`).
2. Abra `data/portfolio.ts`.
3. Em cada ensaio, altere os caminhos de:
   - `coverImage`
   - `images[]`
4. Exemplo:

```ts
coverImage: '/placeholder/meu-ensaio-capa.jpg',
images: ['/placeholder/meu-ensaio-1.jpg', '/placeholder/meu-ensaio-2.jpg']
```

5. Salve e recarregue o navegador.
