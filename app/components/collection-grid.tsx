/* eslint-disable @next/next/no-img-element */

import type { Collection } from "../data/mock-store";
import { SectionHeading } from "./section-heading";

export function CollectionGrid({ collections }: { collections: Collection[] }) {
  return (
    <section id="collections" className="mx-auto max-w-[1280px] px-5 py-12 md:px-16">
      <SectionHeading title="Curated Collections" action="View all" />
      <div className="grid auto-rows-[190px] gap-6 md:grid-cols-4 md:auto-rows-[285px]">
        {collections.map((collection) => (
          <article className={`group relative overflow-hidden rounded-md bg-[#e5e2e1] ${collection.span ?? ""}`} key={collection.title}>
            <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={collection.image} alt={collection.title} />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/65 to-transparent p-6 text-white">
              <p className="text-[9px] font-bold uppercase tracking-wider text-white/80">{collection.label}</p>
              <h3 className="font-display mt-1 text-xl font-bold">{collection.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
