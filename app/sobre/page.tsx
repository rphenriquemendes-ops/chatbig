import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça o fotógrafo Henrique Mendes, seus serviços e cidades atendidas.'
};

export default function SobrePage() {
  return (
    <section className="container-wide grid gap-10 pb-20 md:grid-cols-[1fr_1.2fr]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <Image src="/placeholder/p03.svg" alt="Fotógrafo" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold">Sobre</h1>
        <p className="text-foreground/75">
          Sou Henrique Mendes, fotógrafo especializado em narrativas visuais com estética minimalista. Trabalho com direção leve,
          sensibilidade e foco nos detalhes que tornam cada história única.
        </p>
        <div>
          <h2 className="text-xl font-semibold">Serviços</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/75">
            <li>Casamentos e mini weddings</li>
            <li>Retratos pessoais e corporativos</li>
            <li>Cobertura de eventos</li>
            <li>Fotografia de produtos e campanhas</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Cidades atendidas</h2>
          <p className="mt-2 text-foreground/75">Belo Horizonte, Contagem, Nova Lima, Betim e atendimento em todo Brasil sob consulta.</p>
        </div>
      </div>
    </section>
  );
}
