import {
  CollectionGrid,
  FloatingChat,
  Footer,
  Header,
  HeroSection,
  ItemGrid,
  Newsletter,
  ProductGrid,
  StorySection,
} from "./components/storefront";
import {
  admired,
  arrivals,
  collections,
  hero,
  storyImage,
  wishlist,
} from "./data/mock-store";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#fcf9f8] pt-16 text-[#1c1b1b]">
      <Header />
      <HeroSection image={hero.image} detailImage={hero.detailImage} />
      <CollectionGrid collections={collections} />
      <ProductGrid products={arrivals} />
      <ItemGrid
        title="Wishlist"
        description="Items saved for later. Ready to bring them home?"
        items={wishlist}
        largeImages
      />
      <ItemGrid title="You May Also Admire" items={admired} />
      <StorySection image={storyImage} />
      <Newsletter />
      <Footer />
      <FloatingChat />
    </main>
  );
}
