'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { categories, type PortfolioItem } from '@/data/portfolio';

type Props = {
  items: PortfolioItem[];
  withLoadMore?: boolean;
};

export function PortfolioGrid({ items, withLoadMore = false }: Props) {
  const [activeCategory, setActiveCategory] = useState<'Todos' | (typeof categories)[number]>('Todos');
  const [visible, setVisible] = useState(8);

  const filtered = useMemo(
    () => (activeCategory === 'Todos' ? items : items.filter((item) => item.category === activeCategory)),
    [activeCategory, items]
  );

  const shownItems = withLoadMore ? filtered.slice(0, visible) : filtered;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {['Todos', ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setActiveCategory(category as 'Todos' | (typeof categories)[number]);
              setVisible(8);
            }}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeCategory === category ? 'bg-foreground text-background' : 'bg-muted hover:opacity-80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shownItems.map((item) => (
          <Link key={item.id} href={`/portfolio/${item.slug}`} className="group space-y-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground/60">{item.category}</p>
              <h3 className="text-lg font-medium">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      {withLoadMore && visible < filtered.length && (
        <div className="text-center">
          <button
            type="button"
            onClick={() => setVisible((prev) => prev + 4)}
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            Carregar mais
          </button>
        </div>
      )}
    </div>
  );
}
