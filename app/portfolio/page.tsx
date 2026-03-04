import type { Metadata } from 'next';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { portfolioItems } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Galeria completa com ensaios de casamento, retratos, eventos, natureza e produtos.'
};

export default function PortfolioPage() {
  return (
    <section className="container-wide space-y-10 pb-20">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">Portfólio</p>
        <h1 className="text-4xl font-semibold">Projetos e ensaios</h1>
      </div>
      <PortfolioGrid items={portfolioItems} withLoadMore />
    </section>
  );
}
