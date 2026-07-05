import Link from "next/link";
import { FloatingChat, Footer, Header } from "../components/storefront";

const pillars = [
  {
    title: "Curated with intention",
    text: "We hand-pick pieces that feel elevated, effortless, and meaningful for everyday dressing.",
  },
  {
    title: "Crafted to last",
    text: "Every material and finish is chosen for durability, softness, and a refined sense of comfort.",
  },
  {
    title: "Made for self-expression",
    text: "From bold accessories to timeless staples, our range helps your style feel complete at every moment.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f8] pt-24 text-[#1c1b1b]">
      <Header />
      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#994700]">
              About CompleteMe
            </p>
            <h1 className="font-display mt-3 text-4xl font-bold leading-tight text-[#003f87] md:text-5xl">
              We create a fuller way to dress, gather, and express yourself.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#424752]">
              CompleteMe is a modern lifestyle brand shaped by thoughtful design, premium essentials, and the feeling that every piece should make life a little more polished. We blend timeless character with relevant style so your everyday wardrobe feels elevated and personal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-full bg-[#fb7800] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#de6500]" href="/products">
                Explore pieces
              </Link>
              <Link className="rounded-full border border-[#c2c6d4] px-5 py-3 text-sm font-semibold text-[#003f87] transition hover:border-[#003f87] hover:text-[#fb7800]" href="/contact">
                Visit our story
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e7e0db] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#994700]">
              Our promise
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#fdf7f0] p-4">
                <p className="text-sm font-semibold text-[#003f87]">Premium essentials</p>
                <p className="mt-1 text-sm leading-7 text-[#424752]">Thoughtful silhouettes, rich textures, and details you notice the moment you wear them.</p>
              </div>
              <div className="rounded-2xl bg-[#f5f8ff] p-4">
                <p className="text-sm font-semibold text-[#003f87]">Everyday confidence</p>
                <p className="mt-1 text-sm leading-7 text-[#424752]">A polished look that feels easy to wear, easy to love, and easy to return to.</p>
              </div>
              <div className="rounded-2xl bg-[#f8f5f2] p-4">
                <p className="text-sm font-semibold text-[#003f87]">Rooted in storytelling</p>
                <p className="mt-1 text-sm leading-7 text-[#424752]">We celebrate craft, culture, and the feeling of owning pieces with a deeper sense of meaning.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div className="rounded-[24px] border border-[#e7e0db] bg-white p-6 shadow-sm" key={pillar.title}>
              <h2 className="text-xl font-semibold text-[#003f87]">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#424752]">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <FloatingChat />
    </main>
  );
}
