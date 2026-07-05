"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FloatingChat, Footer, Header } from "../components/storefront";
import { useCart } from "../context/cart-context";

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();
  const subtotal = items.reduce((sum, item) => sum + parsePrice(item.price), 0);
  const shipping = subtotal > 0 ? 18 : 0;
  const total = subtotal + shipping;
  const whatsappText = encodeURIComponent(
    `Hello CompleteMe! I would like to checkout with these items:\n${items
      .map((item) => `- ${item.title} (${item.price})`)
      .join("\n")}`,
  );

  return (
    <main className="min-h-screen bg-[#f6f3f2] pt-24 text-[#1c1b1b]">
      <Header />
      <section className="mx-auto max-w-[1280px] px-5 py-12 md:px-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#994700]">
              Checkout
            </p>
            <h1 className="font-display mt-2 text-4xl font-bold text-[#003f87] md:text-5xl">
              Review your order
            </h1>
          </div>
          <p className="text-sm text-[#424752]">
            Secure, simple, and ready to continue with the seller.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {items.length === 0 ? (
              <div className="rounded-[24px] border border-[#e7e0db] bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-semibold text-[#003f87]">Your bag is empty</h2>
                <p className="mt-3 text-sm leading-7 text-[#424752]">
                  Add some pieces from the shop to start your checkout flow.
                </p>
                <Link className="mt-6 inline-flex rounded-full bg-[#fb7800] px-5 py-3 text-sm font-semibold text-white" href="/products">
                  Shop now
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div className="flex flex-col gap-4 rounded-[24px] border border-[#e7e0db] bg-white p-4 shadow-sm sm:flex-row sm:items-center" key={item.title}>
                  <img alt={item.title} className="h-28 w-full rounded-[18px] object-cover sm:w-28" src={item.image} />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-[#003f87]">{item.title}</p>
                        <p className="mt-1 text-sm text-[#424752]">{item.detail}</p>
                      </div>
                      <button className="text-sm font-semibold text-[#994700]" onClick={() => removeFromCart(item.title)} type="button">
                        Remove
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#424752]">{item.price}</span>
                      <span className="rounded-full bg-[#f8f5f2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#727784]">
                        Ready for seller
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <aside className="rounded-[28px] border border-[#e7e0db] bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.06)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#994700]">
              Order summary
            </p>
            <div className="mt-5 space-y-3 text-sm text-[#424752]">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex items-center justify-between border-t border-[#ece7e5] pt-3 text-base font-semibold text-[#1c1b1b]">
                <span>Total to pay</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <a
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ea952]"
              href={`https://wa.me/250788000000?text=${whatsappText}`}
              rel="noreferrer"
              target="_blank"
            >
              Continue to WhatsApp
            </a>

            <button className="mt-3 w-full rounded-full border border-[#c2c6d4] px-5 py-3 text-sm font-semibold text-[#003f87]" onClick={clearCart} type="button">
              Clear cart
            </button>

            <div className="mt-6 rounded-[18px] bg-[#f8f5f2] p-4 text-sm leading-7 text-[#424752]">
              <p className="font-semibold text-[#003f87]">Why this works</p>
              <p className="mt-2">
                You can review each item, confirm the amount, and continue the deal directly with the seller on WhatsApp.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
      <FloatingChat />
    </main>
  );
}
