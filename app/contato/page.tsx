import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Envie sua mensagem, solicite orçamento e fale por WhatsApp, Instagram ou e-mail.'
};

export default function ContatoPage() {
  return (
    <section className="container-wide grid gap-8 pb-20 md:grid-cols-2">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold">Contato</h1>
        <p className="text-foreground/75">Conte um pouco sobre seu projeto e retornarei com proposta personalizada.</p>
        <div className="flex flex-wrap gap-3">
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-green-500 px-5 py-3 text-sm font-medium text-white">
            WhatsApp
          </a>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="rounded-full border border-foreground/20 px-5 py-3 text-sm font-medium">
            Instagram
          </a>
          <a href={`mailto:${siteConfig.email}`} className="rounded-full border border-foreground/20 px-5 py-3 text-sm font-medium">
            Email
          </a>
        </div>
        <div className="mt-6 rounded-2xl border border-dashed border-foreground/30 p-8 text-sm text-foreground/60">
          [Placeholder de mapa embed]
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
