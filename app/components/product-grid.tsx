import type { Product } from "../data/mock-store";
import { ProductCard } from "./product-card";
import { SectionHeading } from "./section-heading";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section id="shop" className="bg-[#f6f3f2] py-12">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        <SectionHeading title="New Arrivals" description="Handpicked gems from our latest seasonal drop." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
