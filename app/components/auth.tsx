"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { useAuth } from "../context/auth-context";
import { authHeroImage } from "../data/mock-store";

type AuthMode = "login" | "register";

export function AuthPage({ mode = "login" }: { mode?: AuthMode }) {
  const router = useRouter();
  const { demoUsers, login, register } = useAuth();
  const [email, setEmail] = useState(mode === "login" ? demoUsers[0].email : "");
  const [password, setPassword] = useState(mode === "login" ? demoUsers[0].password : "");
  const [name, setName] = useState("");
  const isRegister = mode === "register";

  const activeUser = useMemo(
    () => demoUsers.find((user) => user.email === email) ?? demoUsers[0],
    [demoUsers, email],
  );

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isRegister) {
      register({
        name: name || "New Collector",
        email: email || "collector@heritage.rw",
        password: password || "demo1234",
      });
    } else {
      login(email, password);
    }
    router.push("/");
  }

  function fillDemoUser(emailAddress: string) {
    const nextUser = demoUsers.find((user) => user.email === emailAddress);
    if (!nextUser) return;
    setName(nextUser.name);
    setEmail(nextUser.email);
    setPassword(nextUser.password);
  }

  return (
    <main className="min-h-screen bg-white text-[#1c1b1b]">
      <section className="grid min-h-screen lg:grid-cols-[1.45fr_1fr]">
        <div className="relative min-h-[560px] overflow-hidden bg-[#003f87] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${authHeroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#003f87]/20 to-[#003f87]/95" />
          <div className="relative flex h-full min-h-[560px] flex-col justify-end px-8 pb-16 md:px-16">
            <h1 className="font-display max-w-4xl text-[42px] font-extrabold leading-tight md:text-[64px]">
              Complete Your Style.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90">
              Discover fashion and lifestyle essentials that help you express your unique identity with confidence.
            </p>
          </div>
        </div>

        <div className="flex items-center px-6 py-12 md:px-16">
          <div className="mx-auto w-full max-w-xl">
            <div className="mb-9 grid grid-cols-2 border-b border-[#c2c6d4]">
              <Link
                className={`py-4 text-center font-display text-3xl font-bold ${
                  !isRegister ? "border-b-4 border-[#994700] text-[#003f87]" : "text-[#424752]"
                }`}
                href="/login"
              >
                Login
              </Link>
              <Link
                className={`py-4 text-center font-display text-3xl font-bold ${
                  isRegister ? "border-b-4 border-[#994700] text-[#003f87]" : "text-[#424752]"
                }`}
                href="/register"
              >
                Register
              </Link>
            </div>

            <form className="grid gap-5" onSubmit={submit}>
              {isRegister ? (
                <Field
                  label="Full Name"
                  onChange={setName}
                  placeholder="e.g. Marie Uwase"
                  value={name}
                />
              ) : null}
              <Field
                label="Email Address"
                onChange={setEmail}
                placeholder="name@heritage.rw"
                type="email"
                value={email}
              />
              <Field
                label="Password"
                onChange={setPassword}
                placeholder="Enter password"
                type="password"
                value={password}
              />

              {!isRegister ? (
                <div className="-mt-3 text-right">
                  <a className="text-sm font-bold text-[#003f87]" href="mailto:support@heritage.rw">
                    Forgot Password?
                  </a>
                </div>
              ) : null}

              <button className="mt-1 rounded-md bg-[#fb7800] py-5 text-3xl font-bold text-white shadow-xl shadow-orange-900/15">
                {isRegister ? "Create Account" : "Sign In"}
              </button>
            </form>

            <div className="my-8 flex items-center gap-5">
              <div className="h-px flex-1 bg-[#c2c6d4]" />
              <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#424752]">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-[#c2c6d4]" />
            </div>

            <button
              className="flex w-full items-center justify-center gap-3 rounded-md border border-[#c2c6d4] py-4 text-xl font-semibold"
              onClick={() => fillDemoUser(activeUser.email)}
              type="button"
            >
              <span className="font-bold text-[#4285F4]">G</span>
              Google Account
            </button>

            <div className="mt-7 rounded-md border border-[#c2c6d4] bg-[#fcf9f8] p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#994700]">
                Demo Users
              </p>
              <div className="mt-3 grid gap-2">
                {demoUsers.map((user) => (
                  <button
                    className="flex items-center justify-between rounded-sm border border-[#e5e2e1] bg-white px-3 py-2 text-left text-sm hover:border-[#003f87]"
                    key={user.id}
                    onClick={() => fillDemoUser(user.email)}
                    type="button"
                  >
                    <span>
                      <strong>{user.name}</strong>
                      <span className="block text-[#727784]">{user.email}</span>
                    </span>
                    <span className="font-bold uppercase text-[#003f87]">{user.role}</span>
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-center text-sm">
              Need help?{" "}
              <a className="font-bold text-[#994700] underline" href="mailto:artisan@heritage.rw">
                Chat with an Artisan
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function AuthNav() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#c2c6d4] bg-white px-5 md:px-16">
      <Link className="font-display text-2xl font-extrabold text-[#003f87]" href="/">
        IMIGONGO HERITAGE
      </Link>
      <nav className="hidden items-center gap-9 text-lg md:flex">
        <Link href="/shop_clothing_ikaru">Handbags</Link>
        <Link href="/shop_clothing_ikaru">Totes</Link>
        <Link href="/shop_clothing_ikaru">Clutches</Link>
        <Link href="/explore_categories">Accessories</Link>
      </nav>
      <div className="flex gap-5 text-[#003f87]">
        <Link href="/wishlist">Wish</Link>
        <Link href="/cart">Bag</Link>
        <Link className="border-b-2 border-[#994700] text-[#994700]" href="/">
          User
        </Link>
      </div>
    </header>
  );
}

function Field({
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  value: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#424752]">
        {label}
      </span>
      <input
        className="rounded-sm border border-[#727784] bg-white px-5 py-4 text-lg outline-none focus:border-[#003f87]"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </label>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-[#003f87]">{title}</h3>
      <ul className="mt-5 space-y-3 text-lg text-[#1c1b1b]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
