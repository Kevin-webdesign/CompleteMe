/* eslint-disable @next/next/no-img-element */

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FloatingChat, Footer, Header } from "../components/storefront";
import { arrivals, type Product } from "../data/mock-store";

type SortOption = "Random" | "Newest" | "Price: Low to High" | "Price: High to Low" | "Rating";

const sortOptions: SortOption[] = ["Random", "Newest", "Price: Low to High", "Price: High to Low", "Rating"];

function SearchIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.2-4.2" />
    </svg>
  );
}

function ChevronIcon({ open = false }: { open?: boolean }) {
  return (
    <svg className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24">
      <path d="M12 20s-6.4-4.3-8.2-8.1A4.9 4.9 0 0 1 8 4.8c1.5 0 2.8.8 3.5 2.1A4.2 4.2 0 0 1 15 4.8a4.9 4.9 0 0 1 4.2 7.1C18.4 15.7 12 20 12 20Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function getPriceValue(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function formatPrice(price: string) {
  const amount = getPriceValue(price);

  if (!amount) {
    return price;
  }

  return `RWF ${Math.round(amount * 100).toLocaleString("en-US")}`;
}

function ProductTile({ product }: { product: Product }) {
  return (
    <article className="group rounded-lg border border-[#ececf0] bg-white p-5 shadow-[0_5px_18px_rgba(18,24,38,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(18,24,38,0.12)]">
      <div className="relative">
        <Link className="block" href={`/product_details/${slugify(product.title)}`}>
          <div className="aspect-square overflow-hidden rounded-md bg-[#f4f5f7]">
            <img className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={product.image} alt={product.title} />
            <span className="absolute left-3 top-3 rounded-md bg-[#ff7900] px-3 py-1 text-xs font-extrabold text-white shadow-[0_6px_14px_rgba(251,120,0,0.3)]">
              {formatPrice(product.price)}
            </span>
          </div>
        </Link>
        <button
          aria-label={`Add ${product.title} to wishlist`}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-[#15171d] shadow-[0_4px_12px_rgba(18,24,38,0.16)] transition hover:text-[#ff7900]"
          type="button"
        >
          <HeartIcon />
        </button>
      </div>
      <Link className="block" href={`/product_details/${slugify(product.title)}`}>
        <h2 className="mt-4 truncate text-lg font-extrabold text-[#081225]">{product.title}</h2>
      </Link>
    </article>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("Random");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categories = useMemo(() => {
    const productCategories = arrivals.map((product) => product.category).filter((category): category is string => Boolean(category));
    return ["All", ...Array.from(new Set(productCategories))];
  }, []);

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = arrivals.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = !normalizedQuery || `${product.title} ${product.detail} ${product.category ?? ""}`.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });

    const sorted = [...filtered];

    if (sortBy === "Newest") {
      sorted.reverse();
    }

    if (sortBy === "Price: Low to High") {
      sorted.sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
    }

    if (sortBy === "Price: High to Low") {
      sorted.sort((a, b) => getPriceValue(b.price) - getPriceValue(a.price));
    }

    return sorted;
  }, [activeCategory, query, sortBy]);

  return (
    <main className="min-h-screen bg-[#fafafa] pt-32 text-[#101318] md:pt-36">
      <Header />

      <section className="mx-auto grid max-w-[1280px] gap-6 px-5 pb-14 md:px-12 lg:grid-cols-[320px_1fr]">
        <aside className="h-fit rounded-xl border border-[#dfe5ee] bg-white p-6 shadow-[0_2px_8px_rgba(16,24,40,0.08)]">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-extrabold text-[#15171d]">Filters</h1>
            <button
              className="text-sm font-semibold text-[#ff7900] transition hover:text-[#d86300]"
              onClick={() => {
                setActiveCategory("All");
                setQuery("");
                setSortBy("Random");
              }}
              type="button"
            >
              Clear All
            </button>
          </div>

          <div className="mt-8 border-t border-transparent">
            <button
              className="flex w-full items-center justify-between text-left text-lg font-semibold text-[#15171d]"
              onClick={() => setIsCategoryOpen((current) => !current)}
              type="button"
            >
              Categories
              <ChevronIcon open={isCategoryOpen} />
            </button>

            <div className={`grid transition-all duration-200 ${isCategoryOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="space-y-2">
                  {categories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                      <button
                        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition ${
                          isActive ? "bg-[#fff3e8] text-[#ff7900]" : "text-[#3b4250] hover:bg-[#f6f7f9]"
                        }`}
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        type="button"
                      >
                        {category}
                        {isActive ? <CheckIcon /> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="rounded-xl border border-[#dfe5ee] bg-white p-6 shadow-[0_2px_8px_rgba(16,24,40,0.08)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <label className="flex h-10 w-full items-center gap-3 rounded-md border border-[#dfe5ee] bg-[#f8fafc] px-3 text-[#98a2b3] shadow-sm md:max-w-xs">
                <SearchIcon />
                <input
                  className="w-full bg-transparent text-sm text-[#101318] outline-none placeholder:text-[#7c828d]"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products..."
                  type="search"
                  value={query}
                />
              </label>

              <div className="relative w-full md:w-48">
                <button
                  className="flex h-10 w-full items-center justify-between rounded-md border border-[#e1e4ea] bg-white px-3 text-left text-sm font-medium text-black shadow-sm"
                  onClick={() => setIsSortOpen((current) => !current)}
                  type="button"
                >
                  {sortBy}
                  <ChevronIcon open={isSortOpen} />
                </button>

                {isSortOpen ? (
                  <div className="absolute right-0 top-full z-20 mt-1 w-full rounded-md border border-[#e1e4ea] bg-white py-2 shadow-[0_12px_26px_rgba(16,24,40,0.14)]">
                    {sortOptions.map((option) => {
                      const isActive = sortBy === option;
                      return (
                        <button
                          className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-[#20242c] transition hover:bg-[#f6f7f9]"
                          key={option}
                          onClick={() => {
                            setSortBy(option);
                            setIsSortOpen(false);
                          }}
                          type="button"
                        >
                          {option}
                          {isActive ? <CheckIcon /> : null}
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductTile key={product.title} product={product} />
            ))}
          </div>

          {visibleProducts.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-[#d0d5dd] bg-white p-10 text-center text-sm font-semibold text-[#667085]">
              No products match your filters.
            </div>
          ) : null}
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </main>
  );
}
