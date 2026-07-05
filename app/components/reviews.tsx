import type { Review } from "../data/mock-store";

export function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <section className="mx-auto max-w-[1280px] border-t border-[#c2c6d4] px-5 py-12 md:px-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-[#003f87]">Artisan and Customer Stories</h2>
          <p className="mt-2">
            <span className="text-4xl font-bold">4.8</span>{" "}
            <span className="text-xs text-[#424752]">Based on 48 verified reviews</span>
          </p>
        </div>
        <button className="hidden rounded-sm border border-[#003f87] px-6 py-3 text-sm font-semibold text-[#003f87] md:block">
          Write a Review
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <article className="rounded-sm border border-[#c2c6d4] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]" key={review.name}>
            <div className="flex justify-between">
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-xs text-[#424752]">{review.meta}</p>
              </div>
              <p className="text-sm text-[#994700]">Five stars</p>
            </div>
            <p className="mt-5 italic leading-7 text-[#424752]">{review.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
