export function Newsletter() {
  return (
    <section className="bg-[#fcf9f8] px-5 py-12 md:px-16">
      <div className="mx-auto max-w-[1140px] rounded-md bg-[#003f87] px-8 py-12 text-white md:px-20">
        <h2 className="font-display text-[34px] font-bold">Join the CompleteMe Collective</h2>
        <p className="mt-4 max-w-2xl text-[#d7e2ff]">Subscribe for seasonal collections, artisan stories, and heritage events.</p>
        <form className="mt-8 flex max-w-xl gap-3">
          <input className="min-w-0 flex-1 rounded-sm border border-white/25 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-[#d7e2ff]" placeholder="Enter your email" />
          <button className="rounded-sm bg-[#fb7800] px-7 text-[11px] font-bold uppercase tracking-wider">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
