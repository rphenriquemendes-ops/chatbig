import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-8">
      <div className="container-wide flex flex-col items-center justify-between gap-4 text-sm text-foreground/70 md:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.brandName}. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">
            Instagram
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
            Email
          </a>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
