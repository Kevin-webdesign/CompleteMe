/* eslint-disable @next/next/no-img-element */

"use client";

import type { Product } from "../data/mock-store";
import { useCart } from "../context/cart-context";

export function ProductDetail({
  product,
  thumbnails,
}: {
  product: Product;
  thumbnails: string[];
}) {
  const { addToCart } = useCart();

  return (
    <section id="product" className="mx-auto max-w-[1280px] px-5 py-16 md:px-16">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr]">
        <div>
          <img className="aspect-[4/3] w-full rounded-md object-cover" src={product.image} alt={product.title} />
          <div className="mt-4 flex gap-4">
            {thumbnails.map((image) => (
              <img className="h-20 w-20 rounded-sm border-2 border-[#003f87] object-cover" src={image} alt="Product thumbnail" key={image} />
            ))}
          </div>
        </div>
        <div className="lg:pt-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#994700]">Artisan Series</p>
          <h2 className="font-display mt-3 text-[42px] font-bold leading-tight text-[#003f87] md:text-[52px]">
            Agaseke Signature Leather Tote
          </h2>
          <p className="mt-4 text-sm text-[#994700]">
            Five star rating <span className="text-[#424752]">(48 Reviews)</span>
          </p>
          <p className="mt-3 text-2xl font-bold">$245.00 USD</p>
          <div className="my-6 border-t border-[#c2c6d4]" />
          <p className="text-[16px] leading-7 text-[#424752]">
            Each Signature Leather Tote is a masterpiece of contemporary heritage. Hand-stitched by
            skilled Rwandan artisans, it integrates iconic Agaseke geometric patterns into a modern
            structured silhouette that transcends trends.
          </p>
          <div className="mt-6 border-t border-[#c2c6d4] pt-5">
            <p className="text-[11px] font-bold uppercase tracking-wider">Color: Mahogany Earth</p>
            <div className="mt-3 flex gap-3">
              <span className="h-8 w-8 rounded-full border-2 border-[#003f87] bg-[#24356d]" />
              <span className="h-8 w-8 rounded-full bg-[#1c1b1b]" />
              <span className="h-8 w-8 rounded-full bg-[#5b3829]" />
            </div>
          </div>
          <div className="mt-7 flex gap-4">
            <button
              className="flex-1 rounded-sm bg-[#fb7800] py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-900/15"
              onClick={() => addToCart(product)}
              type="button"
            >
              Add to Cart
            </button>
            <button className="w-14 rounded-sm border border-[#c2c6d4] text-sm font-bold text-[#003f87]">Save</button>
          </div>
        </div>
      </div>
    </section>
  );
}
