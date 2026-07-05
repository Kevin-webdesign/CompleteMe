import { FloatingChat, Footer, Header, ItemGrid, ProductDetail, Reviews } from "../../components/storefront";
import { admired, arrivals, hero, reviews, wishlist } from "../../data/mock-store";

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { slug } = await params;
  const product = arrivals.find((item) => item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug) ?? arrivals[0];

  return (
    <main className="min-h-screen bg-[#fcf9f8] pt-16 text-[#1c1b1b]">
      <Header />
      <ProductDetail
        product={product}
        thumbnails={[hero.image, product.image, wishlist[0].image, wishlist[1].image]}
      />
      <Reviews reviews={reviews} />
      <ItemGrid title="You May Also Admire" items={admired} />
      <Footer />
      <FloatingChat />
    </main>
  );
}
