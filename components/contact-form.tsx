'use client';

import { useState } from 'react';

export function ContactForm() {
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const nextErrors: typeof errors = {};
    if (name.length < 2) nextErrors.name = 'Informe um nome válido.';
    if (!email.includes('@')) nextErrors.email = 'Informe um e-mail válido.';
    if (message.length < 10) nextErrors.message = 'A mensagem deve ter ao menos 10 caracteres.';

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);

    if (Object.keys(nextErrors).length === 0) {
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-muted p-6">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Nome
        </label>
        <input id="name" name="name" className="w-full rounded-lg border border-foreground/20 bg-background p-3" />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input id="email" name="email" type="email" className="w-full rounded-lg border border-foreground/20 bg-background p-3" />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Mensagem
        </label>
        <textarea id="message" name="message" rows={5} className="w-full rounded-lg border border-foreground/20 bg-background p-3" />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      <button type="submit" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
        Enviar mensagem
      </button>
      {submitted && <p className="text-sm text-green-600">Mensagem enviada com sucesso (simulação).</p>}
    </form>
  );
}
