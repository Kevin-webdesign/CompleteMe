import { FloatingChat, Footer, Header, ItemGrid } from "../components/storefront";
import { wishlist } from "../data/mock-store";

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f8] pt-24 text-[#1c1b1b]">
      <Header />
      <section className="mx-auto max-w-[1280px] px-5 py-12 md:px-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#994700]">
          Wishlist
        </p>
        <h1 className="font-display mt-2 text-4xl font-bold text-[#003f87] md:text-5xl">
          Your saved favorites
        </h1>
      </section>
      <ItemGrid title="Saved for later" description="Keep track of pieces you love." items={wishlist} largeImages />
      <Footer />
      <FloatingChat />
    </main>
  );
}
