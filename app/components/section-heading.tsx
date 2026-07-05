import Link from "next/link";

export function SectionHeading({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-6">
      <div>
        <h2 className="font-display text-2xl font-semibold">{title}</h2>
        {description ? <p className="mt-1 text-sm text-[#424752]">{description}</p> : null}
        <div className="mt-2 h-0.5 w-12 bg-[#994700]" />
      </div>
      {action ? (
        <Link className="text-[11px] font-bold uppercase tracking-wider text-[#003f87]" href="/shop_clothing_ikaru">
          {action}
        </Link>
      ) : null}
    </div>
  );
}
