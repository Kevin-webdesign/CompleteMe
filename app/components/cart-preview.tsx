/* eslint-disable @next/next/no-img-element */

import type { Product } from "../data/mock-store";

export function CartPreview({ items }: { items: Product[] }) {
  return (
    <section id="bag" className="mx-auto max-w-[1280px] px-5 py-16 md:px-16">
      <h2 className="font-display text-[44px] font-bold leading-tight md:text-[64px]">Your Shopping Bag</h2>
      <p className="mt-3 text-lg text-[#424752]">Review your selections and proceed to secure checkout.</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-5">
          {items.map((item) => (
            <article className="grid gap-5 rounded-sm border border-[#c2c6d4] bg-white p-4 md:grid-cols-[140px_1fr_130px]" key={item.title}>
              <img className="aspect-square w-full rounded-sm object-cover" src={item.image} alt={item.title} />
              <div className="self-center">
                <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.22em]">{item.detail}</p>
                <div className="mt-3 flex gap-5 text-sm">
                  <button>Remove</button>
                  <button>Move to Wishlist</button>
                </div>
              </div>
              <div className="flex items-center justify-between md:block md:text-right">
                <div className="inline-flex border border-[#c2c6d4]">
                  <button className="h-10 w-10">-</button>
                  <span className="grid h-10 w-10 place-items-center">1</span>
                  <button className="h-10 w-10">+</button>
                </div>
                <p className="mt-3 text-xl font-bold text-[#003f87]">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
        <aside className="h-max rounded-sm border border-[#c2c6d4] bg-[#f6f3f2] p-8">
          <h3 className="font-display text-2xl font-semibold">Order Summary</h3>
          <div className="mt-6 space-y-5 text-lg">
            <div className="flex justify-between"><span>Subtotal</span><span>$430.00</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Calculated at next step</span></div>
            <div className="flex justify-between"><span>Tax</span><span>$0.00</span></div>
            <div className="border-t border-[#c2c6d4] pt-5 font-bold">
              <div className="flex justify-between"><span>Total</span><span className="text-[#003f87]">$430.00</span></div>
            </div>
          </div>
          <button className="mt-8 w-full rounded-sm bg-[#fb7800] py-5 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-xl shadow-orange-900/15">
            Checkout Now
          </button>
          <p className="mt-6 text-center text-sm">Secure SSL Encryption</p>
        </aside>
      </div>
    </section>
  );
}
