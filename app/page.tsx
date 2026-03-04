import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems, testimonials } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Fotografia minimalista para casamentos, retratos, eventos e marcas.'
};

export default function HomePage() {
  const highlights = portfolioItems.slice(0, 6);

  return (
    <div className="space-y-24 pb-20">
      <section className="container-wide text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-foreground/60">Lume Foto</p>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Fotografia autoral para histórias reais</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/70 md:text-lg">
          Casamentos, retratos e projetos visuais com linguagem elegante, luz natural e composição refinada.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/portfolio" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
            Ver Portfólio
          </Link>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium"
          >
            Fale no WhatsApp
          </a>
        </div>
      </section>

      <section className="container-wide space-y-6">
        <h2 className="text-2xl font-semibold">Destaques</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <Link key={item.id} href={`/portfolio/${item.slug}`} className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image src={item.coverImage} alt={item.title} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
            </Link>
          ))}
        </div>
      </section>

      <section className="container-wide space-y-8">
        <h2 className="text-2xl font-semibold">Depoimentos</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-foreground/10 p-6">
              <p className="text-foreground/80">“{testimonial.text}”</p>
              <p className="mt-4 text-sm font-semibold">— {testimonial.name}</p>
            </article>
          ))}
        </div>
        <div className="rounded-2xl bg-muted p-8 text-center">
          <h3 className="text-xl font-semibold">Vamos criar algo memorável?</h3>
          <p className="mt-2 text-foreground/70">Entre em contato e receba uma proposta personalizada para seu ensaio ou evento.</p>
          <Link href="/contato" className="mt-4 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </div>
  );
}
