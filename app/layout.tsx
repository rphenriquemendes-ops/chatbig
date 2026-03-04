import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Lume Foto | Portfólio Fotográfico',
    template: '%s | Lume Foto'
  },
  description: 'Portfólio fotográfico minimalista com ensaios de casamentos, retratos, eventos, natureza e produtos.',
  openGraph: {
    title: 'Lume Foto | Portfólio Fotográfico',
    description: 'Fotografia autoral com estética elegante e foco em narrativa visual.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
