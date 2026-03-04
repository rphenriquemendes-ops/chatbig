export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-8">
      <div className="container-wide flex flex-col items-center justify-between gap-4 text-sm text-foreground/70 md:flex-row">
        <p>© {new Date().getFullYear()} Lume Foto. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground">
            Instagram
          </a>
          <a href="mailto:contato@lumefoto.com" className="hover:text-foreground">
            Email
          </a>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" className="hover:text-foreground">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
