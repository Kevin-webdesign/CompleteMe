import type { Metadata } from "next";
import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "./context/cart-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompleteMe",
  description: "CompleteMe is a modern fashion and lifestyle brand helping people express their style with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
