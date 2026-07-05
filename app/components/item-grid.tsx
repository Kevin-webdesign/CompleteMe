/* eslint-disable @next/next/no-img-element */

import type { WishlistItem } from "../data/mock-store";
import { SectionHeading } from "./section-heading";

export function ItemGrid({
  title,
  description,
  items,
  largeImages = false,
}: {
  title: string;
  description?: string;
  items: WishlistItem[];
  largeImages?: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1280px] border-t border-[#c2c6d4] px-5 py-12 md:px-16">
      <SectionHeading title={title} description={description} action={largeImages ? "View full wishlist" : undefined} />
      <div className={`grid gap-7 ${largeImages ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
        {items.map((item) => (
          <article className={largeImages ? "overflow-hidden rounded-sm border border-[#c2c6d4] bg-white" : ""} key={item.title}>
            <img className={`${largeImages ? "aspect-[4/5]" : "aspect-square rounded-sm"} w-full object-cover`} src={item.image} alt={item.title} />
            <div className={largeImages ? "p-5" : ""}>
              <h3 className="font-display mt-5 text-xl font-medium">{item.title}</h3>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-[#003f87]">{item.price}</p>
                {largeImages ? <button className="rounded-sm bg-[#003f87] px-4 py-3 text-sm font-bold text-white">Move to Cart</button> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
