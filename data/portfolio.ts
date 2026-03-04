export const categories = ['Casamentos', 'Retratos', 'Eventos', 'Natureza', 'Produtos'] as const;

export type Category = (typeof categories)[number];

export type PortfolioItem = {
  id: number;
  title: string;
  slug: string;
  category: Category;
  coverImage: string;
  images: string[];
  location: string;
  date: string;
  description: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Amor em Serra Azul',
    slug: 'amor-em-serra-azul',
    category: 'Casamentos',
    coverImage: '/placeholder/p01.svg',
    images: ['/placeholder/p01.svg', '/placeholder/p02.svg', '/placeholder/p03.svg', '/placeholder/p04.svg'],
    location: 'Serra Azul, SP',
    date: '2024-05-20',
    description: 'Um casamento ao ar livre com luz dourada, cerimônia intimista e festa sob as estrelas.'
  },
  {
    id: 2,
    title: 'Noivos na Praia Branca',
    slug: 'noivos-na-praia-branca',
    category: 'Casamentos',
    coverImage: '/placeholder/p05.svg',
    images: ['/placeholder/p05.svg', '/placeholder/p06.svg', '/placeholder/p07.svg'],
    location: 'Ilhabela, SP',
    date: '2024-07-11',
    description: 'Ensaio pré-wedding com vento suave e tons naturais para um visual elegante.'
  },
  {
    id: 3,
    title: 'Retrato Editorial Ana',
    slug: 'retrato-editorial-ana',
    category: 'Retratos',
    coverImage: '/placeholder/p08.svg',
    images: ['/placeholder/p08.svg', '/placeholder/p09.svg', '/placeholder/p10.svg'],
    location: 'São Paulo, SP',
    date: '2024-03-02',
    description: 'Sessão em estúdio minimalista com foco em expressão e direção de arte limpa.'
  },
  {
    id: 4,
    title: 'Retratos Urbanos Lucas',
    slug: 'retratos-urbanos-lucas',
    category: 'Retratos',
    coverImage: '/placeholder/p11.svg',
    images: ['/placeholder/p11.svg', '/placeholder/p12.svg', '/placeholder/p13.svg'],
    location: 'Belo Horizonte, MG',
    date: '2024-06-10',
    description: 'Narrativa visual em ruas e arquitetura moderna, com luz natural difusa.'
  },
  {
    id: 5,
    title: 'Lançamento Coleção Vértice',
    slug: 'lancamento-colecao-vertice',
    category: 'Eventos',
    coverImage: '/placeholder/p14.svg',
    images: ['/placeholder/p14.svg', '/placeholder/p15.svg', '/placeholder/p16.svg', '/placeholder/p17.svg'],
    location: 'Curitiba, PR',
    date: '2024-08-21',
    description: 'Cobertura dinâmica de evento de moda com bastidores, passarela e detalhes.'
  },
  {
    id: 6,
    title: 'Conferência Criativa 2024',
    slug: 'conferencia-criativa-2024',
    category: 'Eventos',
    coverImage: '/placeholder/p18.svg',
    images: ['/placeholder/p18.svg', '/placeholder/p19.svg', '/placeholder/p20.svg'],
    location: 'Recife, PE',
    date: '2024-09-05',
    description: 'Registro documental de palestras, networking e experiências do público.'
  },
  {
    id: 7,
    title: 'Amanhecer na Mantiqueira',
    slug: 'amanhecer-na-mantiqueira',
    category: 'Natureza',
    coverImage: '/placeholder/p21.svg',
    images: ['/placeholder/p21.svg', '/placeholder/p22.svg', '/placeholder/p23.svg'],
    location: 'Campos do Jordão, SP',
    date: '2024-04-15',
    description: 'Paisagens com neblina leve e composição ampla para destacar escala e textura.'
  },
  {
    id: 8,
    title: 'Marés do Sul',
    slug: 'mares-do-sul',
    category: 'Natureza',
    coverImage: '/placeholder/p24.svg',
    images: ['/placeholder/p24.svg', '/placeholder/p25.svg', '/placeholder/p26.svg'],
    location: 'Florianópolis, SC',
    date: '2024-01-30',
    description: 'Série costeira com contraste entre rochas, oceano e céus em tons frios.'
  },
  {
    id: 9,
    title: 'Linha Essencial Skincare',
    slug: 'linha-essencial-skincare',
    category: 'Produtos',
    coverImage: '/placeholder/p27.svg',
    images: ['/placeholder/p27.svg', '/placeholder/p28.svg', '/placeholder/p29.svg'],
    location: 'São Paulo, SP',
    date: '2024-02-19',
    description: 'Fotografia de produto com iluminação controlada e fundo neutro sofisticado.'
  },
  {
    id: 10,
    title: 'Catálogo Minimal Casa',
    slug: 'catalogo-minimal-casa',
    category: 'Produtos',
    coverImage: '/placeholder/p30.svg',
    images: ['/placeholder/p30.svg', '/placeholder/p31.svg', '/placeholder/p32.svg', '/placeholder/p33.svg'],
    location: 'Porto Alegre, RS',
    date: '2024-10-01',
    description: 'Stills de decoração com estética clean e enfoque em materiais naturais.'
  },
  {
    id: 11,
    title: 'Casamento no Jardim das Oliveiras',
    slug: 'casamento-no-jardim-das-oliveiras',
    category: 'Casamentos',
    coverImage: '/placeholder/p34.svg',
    images: ['/placeholder/p34.svg', '/placeholder/p35.svg', '/placeholder/p36.svg'],
    location: 'Ribeirão Preto, SP',
    date: '2024-11-18',
    description: 'Celebração clássica com cerimônia ao entardecer e detalhes florais refinados.'
  },
  {
    id: 12,
    title: 'Produto Tech Orion',
    slug: 'produto-tech-orion',
    category: 'Produtos',
    coverImage: '/placeholder/p37.svg',
    images: ['/placeholder/p37.svg', '/placeholder/p38.svg', '/placeholder/p39.svg', '/placeholder/p40.svg'],
    location: 'Campinas, SP',
    date: '2024-12-08',
    description: 'Campanha de tecnologia com estética premium, contraste alto e composições geométricas.'
  }
];

export const testimonials = [
  {
    name: 'Camila & Rafael',
    text: 'As fotos captaram cada emoção do nosso casamento. Trabalho impecável e sensível.'
  },
  {
    name: 'Marina Costa',
    text: 'Meu ensaio ficou elegante e natural. A direção durante a sessão foi excelente.'
  },
  {
    name: 'Studio Vértice',
    text: 'Cobertura de evento extremamente profissional, entrega rápida e alta qualidade.'
  }
];
