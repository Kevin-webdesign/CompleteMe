import type { AdminRecord, AdminStat } from "../data/mock-store";
import Link from "next/link";

const nav = [
  ["Overview", "/dashboard/overview"],
  ["Products", "/dashboard/manage_products"],
  ["Categories", "/dashboard/manage_categories"],
  ["Orders", "/dashboard/manage_orders"],
  ["Reviews", "/dashboard/manage_reviews"],
  ["Customers", "/dashboard/manage_customers"],
  ["Settings", "/dashboard/general_settings"],
];

export function AdminPage({
  title,
  eyebrow,
  records,
  stats,
}: {
  title: string;
  eyebrow: string;
  records: AdminRecord[];
  stats?: AdminStat[];
}) {
  return (
    <main className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b]">
      <aside className="fixed bottom-0 left-0 top-0 hidden w-64 border-r border-[#c2c6d4] bg-white lg:block">
        <div className="p-6">
          <Link className="font-display text-2xl font-extrabold text-[#003f87]" href="/">
            CompleteMe
          </Link>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#727784]">
            Admin Dashboard
          </p>
        </div>
        <nav className="space-y-1 px-4">
          {nav.map(([label, href]) => (
            <a
              className="block rounded-sm px-4 py-3 text-sm font-semibold text-[#424752] hover:bg-[#f0eded] hover:text-[#003f87]"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>

      <section className="lg:ml-64">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[#c2c6d4] bg-white px-5 md:px-16">
          <div className="rounded-sm border border-[#c2c6d4] bg-[#f6f3f2] px-4 py-2 text-sm text-[#727784]">
            Search dashboard...
          </div>
          <Link className="font-semibold text-[#003f87]" href="/">
            View Store
          </Link>
        </header>

        <div className="px-5 py-10 md:px-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#994700]">
            {eyebrow}
          </p>
          <h1 className="font-display mt-2 text-[42px] font-bold text-[#003f87]">{title}</h1>

          {stats ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <article className="rounded-sm border border-[#c2c6d4] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]" key={stat.label}>
                  <p className="text-sm text-[#727784]">{stat.label}</p>
                  <p className="font-display mt-2 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-[#003f87]">{stat.change}</p>
                </article>
              ))}
            </div>
          ) : null}

          <div className="mt-8 overflow-hidden rounded-sm border border-[#c2c6d4] bg-white">
            {records.map((record) => (
              <article
                className="grid gap-3 border-b border-[#e5e2e1] p-5 last:border-b-0 md:grid-cols-[1fr_160px_140px]"
                key={`${record.name}-${record.value}`}
              >
                <div>
                  <h2 className="font-display text-xl font-semibold">{record.name}</h2>
                  <p className="mt-1 text-sm leading-6 text-[#424752]">{record.detail}</p>
                </div>
                <span className="h-max rounded-full bg-[#d7e2ff] px-3 py-1 text-sm font-bold text-[#003f87]">
                  {record.status}
                </span>
                <p className="font-display text-xl font-bold text-[#003f87]">{record.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
