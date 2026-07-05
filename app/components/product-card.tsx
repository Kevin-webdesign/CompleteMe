/* eslint-disable @next/next/no-img-element */

"use client";

import Link from "next/link";
import type { Product } from "../data/mock-store";
import { useCart } from "../context/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="group border border-[#c2c6d4] bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded bg-[#e5e2e1]">
        <img className="h-full w-full object-cover" src={product.image} alt={product.title} />
        {product.badge ? (
          <span className="absolute left-2 top-2 rounded-sm bg-[#994700] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="px-1 pb-2 pt-4">
        <h3 className="text-[13px] font-medium text-[#1c1b1b]">{product.title}</h3>
        <p className="mt-1 text-[10px] text-[#727784]">{product.detail}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-bold text-[#003f87]">{product.price}</span>
          <div className="flex items-center gap-2">
            <Link
              className="text-xs font-semibold text-[#994700] underline"
              href={`/product_details/${product.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              Details
            </Link>
            <button
              className="grid h-8 w-8 place-items-center rounded-sm border border-[#003f87] text-sm font-bold text-[#003f87] transition group-hover:bg-[#003f87] group-hover:text-white"
              onClick={() => addToCart(product)}
              type="button"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
