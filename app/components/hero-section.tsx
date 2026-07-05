/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export function HeroSection({
  image,
  detailImage,
}: {
  image: string;
  detailImage: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[540px] max-w-[1280px] items-center gap-8 px-5 py-16 md:grid-cols-2 md:px-16">
        <div>
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#994700]">
            Limited Collection
          </p>
          <h1 className="font-display max-w-md text-[32px] font-bold leading-[1.12] text-black md:text-[48px]">
            Contemporary Rwandan Heritage
          </h1>
          <p className="mt-5 max-w-[470px] text-[15px] leading-7 text-[#424752]">
            Bridging modern essentials with elevated self-expression. Each CompleteMe piece is
            a testament to the artisan touch and the spirit of Rwanda.
          </p>
          <div className="mt-8 flex gap-4">
            <Link className="rounded-sm bg-[#003f87] px-7 py-3 text-[11px] font-bold uppercase tracking-wider text-white" href="/shop_clothing_ikaru">
              Shop Bags
            </Link>
            <Link className="rounded-sm border border-[#003f87] px-7 py-3 text-[11px] font-bold uppercase tracking-wider text-[#003f87]" href="/explore_categories">
              Explore Apparel
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[445px]">
          <div className="aspect-[4/5] rotate-2 overflow-hidden rounded-md bg-[#e5e2e1] shadow-[0_14px_38px_rgba(0,0,0,0.14)]">
            <img className="h-full w-full object-cover" src={image} alt="CompleteMe fashion piece on a pedestal" />
          </div>
          <div className="absolute -bottom-6 left-0 hidden w-36 -rotate-6 rounded bg-white p-2 shadow-xl md:block">
            <img className="aspect-square w-full rounded-sm object-cover" src={detailImage} alt="Woven textile detail" />
          </div>
        </div>
      </div>
    </section>
  );
}
