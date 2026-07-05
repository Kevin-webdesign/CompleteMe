import { CollectionGrid, FloatingChat, Footer, Header, ProductGrid } from "../components/storefront";
import { arrivals, collections } from "../data/mock-store";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fcf9f8] pt-16 text-[#1c1b1b]">
      <Header />
      <CollectionGrid collections={collections} />
      <ProductGrid products={arrivals} />
      <Footer />
      <FloatingChat />
    </main>
  );
}
