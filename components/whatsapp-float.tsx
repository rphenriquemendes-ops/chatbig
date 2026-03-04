import { siteConfig } from '@/data/site';

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
    >
      WhatsApp
    </a>
  );
}
