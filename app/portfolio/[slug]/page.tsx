import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LightboxGallery } from '@/components/lightbox-gallery';
import { portfolioItems } from '@/data/portfolio';
import { formatDate } from '@/lib/utils';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = portfolioItems.find((entry) => entry.slug === params.slug);
  if (!item) return { title: 'Projeto não encontrado' };

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [item.coverImage]
    }
  };
}

export default function PortfolioSlugPage({ params }: Props) {
  const item = portfolioItems.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <section className="container-wide space-y-10 pb-20">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">{item.category}</p>
        <h1 className="text-4xl font-semibold">{item.title}</h1>
        <p className="max-w-2xl text-foreground/75">{item.description}</p>
        <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
          <p>
            <strong>Local:</strong> {item.location}
          </p>
          <p>
            <strong>Data:</strong> {formatDate(item.date)}
          </p>
        </div>
      </header>
      <LightboxGallery images={item.images} title={item.title} />
    </section>
  );
}
