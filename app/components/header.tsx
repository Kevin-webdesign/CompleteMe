"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { arrivals } from "../data/mock-store";
import { useAuth } from "../context/auth-context";
import { useCart } from "../context/cart-context";

const searchableProducts = arrivals.map((product) => ({
  ...product,
  slug: product.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
}));

function SearchIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.2-4.2" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M12 20s-6.4-4.3-8.2-8.1A4.9 4.9 0 0 1 8 4.8c1.5 0 2.8.8 3.5 2.1A4.2 4.2 0 0 1 15 4.8a4.9 4.9 0 0 1 4.2 7.1C18.4 15.7 12 20 12 20Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
      <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L17 8H7" />
    </svg>
  );
}

export function Header() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const [query, setQuery] = useState("");
  const [isTop, setIsTop] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isAuthenticated = Boolean(user);
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsTop(window.scrollY < 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return searchableProducts
      .filter((product) => `${product.title} ${product.detail}`.toLowerCase().includes(normalizedQuery))
      .slice(0, 5);
  }, [query]);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const normalizedQuery = query.trim();
    if (!normalizedQuery) {
      return;
    }

    const match = filteredResults[0] ?? searchableProducts.find((product) => product.title.toLowerCase().includes(normalizedQuery.toLowerCase()));

    if (match) {
      router.push(`/product_details/${match.slug}`);
    } else {
      router.push("/products");
    }

    setShowResults(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#c2c6d4] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <div className={`overflow-hidden border-b border-[#ece7e5] bg-[#003f87] text-white transition-all duration-300 ${isTop ? "max-h-16 opacity-100" : "max-h-0 border-0 opacity-0"}`}>
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-2 text-sm md:px-16">
          <p className="hidden md:block">Crafted essentials • Free shipping over $150</p>
          <div className="flex items-center gap-4">
            {!isMounted ? (
              <>
                <span className="font-semibold opacity-70">Sign In</span>
                <span className="font-semibold opacity-70">Sign Up</span>
              </>
            ) : !isAuthenticated ? (
              <>
                <Link className="font-semibold transition hover:text-[#ffd7a8]" href="/login">
                  Sign In
                </Link>
                <Link className="font-semibold transition hover:text-[#ffd7a8]" href="/register">
                  Sign Up
                </Link>
              </>
            ) : (
              <button className="font-semibold transition hover:text-[#ffd7a8]" onClick={logout} type="button">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-16">
        <Link className="font-display text-[24px] font-extrabold tracking-tight text-[#003f87]" href="/">
          CompleteMe
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#1c1b1b] md:gap-5">
          <Link className="flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-[#fff5eb] hover:text-[#fb7800]" href="/">
            <span className="text-[#003f87]">⌂</span>
            Home
          </Link>
          <Link className="flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-[#fff5eb] hover:text-[#fb7800]" href="/products">
            <span className="text-[#003f87]">◫</span>
            Products
          </Link>
          <Link className="flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-[#fff5eb] hover:text-[#fb7800]" href="/about">
            <span className="text-[#003f87]">✦</span>
            About
          </Link>
          {isAdmin ? (
            <Link className="flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-[#fff5eb] hover:text-[#fb7800]" href="/dashboard">
              <span className="text-[#003f87]">▤</span>
              Dashboard
            </Link>
          ) : null}
        </nav>

        <div className="flex flex-1 flex-col gap-3 md:items-end">
          <div className="flex w-full items-center gap-3 md:max-w-xl">
            <form className="relative flex-1" onSubmit={handleSearchSubmit}>
              <label className="flex h-11 items-center gap-2 rounded-full border border-[#c2c6d4] bg-[#f8f5f2] px-4 text-sm text-[#727784] shadow-sm">
                <SearchIcon />
                <input
                  className="w-full bg-transparent outline-none placeholder:text-[#9aa0ab]"
                  onBlur={() => setTimeout(() => setShowResults(false), 120)}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setShowResults(Boolean(event.target.value.trim()));
                  }}
                  onFocus={() => setShowResults(Boolean(query.trim()))}
                  placeholder="Search bags, apparel, essentials..."
                  type="text"
                  value={query}
                />
              </label>

              {showResults && filteredResults.length > 0 ? (
                <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-2xl border border-[#e8e1dc] bg-white p-2 shadow-xl">
                  {filteredResults.map((product) => (
                    <button
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition hover:bg-[#fff5eb]"
                      key={product.slug}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => {
                        setQuery(product.title);
                        setShowResults(false);
                        router.push(`/product_details/${product.slug}`);
                      }}
                      type="button"
                    >
                      <img alt={product.title} className="h-10 w-10 rounded-lg object-cover" src={product.image} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-[#1c1b1b]">{product.title}</p>
                        <p className="truncate text-xs text-[#727784]">{product.detail}</p>
                      </div>
                      <span className="text-sm font-semibold text-[#fb7800]">{product.price}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </form>

            <Link
              aria-label="Wishlist"
              className="flex items-center gap-2 rounded-full border border-[#c2c6d4] bg-white px-3 py-2 text-sm font-semibold text-[#003f87] transition hover:border-[#003f87] hover:text-[#fb7800]"
              href="/wishlist"
            >
              <HeartIcon />
              Wishlist
            </Link>
            <Link
              aria-label="Cart"
              className="relative flex items-center gap-2 rounded-full bg-[#fb7800] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#de6500]"
              href="/cart"
            >
              <CartIcon />
              Cart
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-[#fb7800]">
                {itemCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
