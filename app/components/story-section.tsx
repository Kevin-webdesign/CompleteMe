/* eslint-disable @next/next/no-img-element */

export function StorySection({ image }: { image: string }) {
  return (
    <section id="story" className="bg-[#313030] text-white">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-16">
        <div className="relative">
          <img className="aspect-[16/9] w-full rounded-md object-cover" src={image} alt="Artisans in a modern Rwandan workshop" />
          <div className="absolute bottom-[-22px] right-8 rounded-sm bg-[#994700] p-5">
            <p className="font-display text-3xl font-bold">120+</p>
            <p className="text-[10px] font-bold uppercase tracking-wider">Artisans Empowered</p>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ffb68b]">The Soul of CompleteMe</p>
          <h2 className="font-display mt-4 text-[42px] font-bold leading-tight">Where Heritage Meets Future</h2>
          <p className="mt-5 max-w-xl leading-7 text-[#ced0d1]">
            Every stitch and weave tells a story of Rwandan resilience and artistic brilliance. We preserve a legacy by bringing it into the modern spotlight.
          </p>
          <button className="mt-8 rounded-sm bg-[#fb7800] px-7 py-3 text-[11px] font-bold uppercase tracking-wider text-white">
            Read Our Story
          </button>
        </div>
      </div>
    </section>
  );
}
