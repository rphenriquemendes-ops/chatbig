'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark');
    setIsDark(dark);
    setReady(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-foreground/20 px-3 py-1 text-sm transition hover:bg-foreground hover:text-background"
      aria-label="Alternar tema"
      type="button"
    >
      {ready ? (isDark ? '☀️ Claro' : '🌙 Escuro') : 'Tema'}
    </button>
  );
}
