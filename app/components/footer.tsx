export function Footer() {
  return (
    <footer className="border-t border-[#c2c6d4] bg-[#f6f3f2]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-10 md:grid-cols-4 md:px-16">
        <div>
          <h2 className="font-display text-2xl font-bold text-[#003f87]">CompleteMe</h2>
          <p className="mt-5 text-sm leading-6 text-[#424752]">Contemporary Rwandan heritage. Authentic, premium, reliable.</p>
        </div>
        <FooterLinks title="Discover" items={["About Us", "Artisan Stories", "Impact Report"]} />
        <FooterLinks title="Support" items={["Shipping Policy", "Contact Support", "Terms of Service"]} />
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#003f87]">Join the Heritage</h3>
          <div className="mt-4 flex">
            <input className="min-w-0 flex-1 border border-[#c2c6d4] px-4 py-3" placeholder="Email address" />
            <button className="bg-[#003f87] px-5 text-white">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e5e2e1] px-5 py-5 text-center text-xs text-[#424752]">
        (c) 2026 CompleteMe. Crafted for confident style.
      </div>
    </footer>
  );
}

function FooterLinks({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#003f87]">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
