"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../data/mock-store";

type CartContextValue = {
  items: Product[];
  itemCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (title: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "will-shop-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      try {
        setItems(JSON.parse(stored) as Product[]);
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, JSON.stringify(items));
    }
  }, [items]);

  const addToCart = useCallback((product: Product) => {
    setItems((currentItems) => {
      if (currentItems.some((item) => item.title === product.title)) {
        return currentItems;
      }
      return [...currentItems, product];
    });
  }, []);

  const removeFromCart = useCallback((title: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.title !== title));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const value = useMemo(
    () => ({
      items,
      itemCount: items.length,
      addToCart,
      removeFromCart,
      clearCart,
    }),
    [addToCart, clearCart, items, removeFromCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
