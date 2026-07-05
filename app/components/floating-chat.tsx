import Link from "next/link";

export function FloatingChat() {
  return (
    <Link className="fixed bottom-8 right-8 z-50 rounded-md bg-[#25D366] px-5 py-4 text-sm font-bold text-white shadow-2xl" href="/ikaru_contemporary_rwandan_artisans">
      Chat with an Artisan
    </Link>
  );
}
