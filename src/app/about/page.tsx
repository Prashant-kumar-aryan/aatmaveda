import Link from "next/link";

const stats = [
  { value: "15+", label: "Years of care" },
  { value: "12k+", label: "Happy patients" },
  { value: "100%", label: "Personalized plans" },
];

const pillars = [
  {
    title: "Rooted in Ayurveda",
    text: "We combine classical Ayurvedic wisdom with modern clinical understanding to restore balance, vitality, and long-term wellness.",
  },
  {
    title: "Whole-person care",
    text: "Every consultation looks beyond symptoms to understand your lifestyle, digestion, stress, sleep, and emotional wellbeing.",
  },
  {
    title: "Natural, gentle therapies",
    text: "Our treatments focus on herbal care, detoxification, nutrition, and mindful routines that support sustainable healing.",
  },
  {
    title: "Modern wellness support",
    text: "We guide you with practical routines for stress relief, immunity, gut health, skin clarity, and everyday energy.",
  },
];

const values = [
  "Personalized treatment plans",
  "Natural herbs and evidence-based guidance",
  "Preventive and restorative care",
  "Compassionate support for every stage of healing",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e6] text-[#17382d]">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-[#183a2d]/20 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#17382d] text-lg font-black text-[#dff5e8]">
              A
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#2f6d4f]">
                Aatmaveda
              </p>
              <p className="text-xs text-[#17382d]/70">Ayurvedic Wellness</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#17382d]/80 md:flex">
            <Link href="/" className="transition hover:text-[#2f6d4f]">
              Home
            </Link>
            <Link href="/products" className="transition hover:text-[#2f6d4f]">
              Treatments
            </Link>
            <Link href="/about" className="transition hover:text-[#2f6d4f]">
              Our Story
            </Link>
            <Link href="/contact" className="transition hover:text-[#2f6d4f]">
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-[#17382d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#224f3d]"
          >
            Book consult
          </Link>
        </header>

        <div className="grid items-center gap-12 pb-12 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#2f6d4f]">
              About us
            </p>
            <h1 className="mt-6 max-w-xl text-4xl font-black uppercase leading-[0.92] tracking-tighter text-[#17382d] sm:text-5xl lg:text-7xl">
              Wellness rooted in
              <span className="block text-[#2f7d4c]">nature.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#17382d]/75 sm:text-lg">
              We help people live in balance through Ayurvedic healing, mindful
              lifestyle guidance, and natural care that supports the body, mind,
              and spirit.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#2f7d4c] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(47,125,76,0.22)] transition hover:bg-[#245d3d]"
              >
                Book an appointment
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#17382d]/20 bg-white/60 px-6 py-3 text-sm font-semibold text-[#17382d] transition hover:border-[#17382d]/40 hover:bg-white"
              >
                Explore therapies
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#17382d]/10 bg-white/70 p-4 backdrop-blur-sm"
                >
                  <div className="text-2xl font-black text-[#17382d]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#17382d]/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-[#cfe9d5] blur-3xl" />
            <div className="absolute -right-10 bottom-2 h-44 w-44 rounded-full bg-[#d8efdd] blur-3xl" />

            <div className="relative overflow-hidden rounded-4xl border border-[#17382d]/10 bg-[#17382d] p-4 shadow-[0_30px_80px_rgba(23,56,45,0.18)]">
              <div className="rounded-3xl bg-[#f3f9f3] p-4 text-[#17382d]">
                <div className="flex items-center justify-between border-b border-[#17382d]/10 pb-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2f7d4c]">
                      Balanced living
                    </p>
                    <h2 className="mt-2 text-2xl font-black uppercase tracking-tighter">
                      Aatmaveda
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#17382d] text-lg text-[#dff5e8]">
                    ✦
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="overflow-hidden rounded-3xl bg-linear-to-br from-[#dff3e4] via-[#9ec9a7] to-[#1b4b38] p-4">
                    <div className="flex h-full min-h-70 flex-col justify-between rounded-2xl border border-white/20 bg-[#113528]/10 p-4 text-white backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.3em] text-white/85">
                        since 2010
                      </div>
                      <div>
                        <p className="text-3xl font-black uppercase tracking-tighter">
                          Natural
                        </p>
                        <p className="mt-1 text-3xl font-black uppercase tracking-tighter">
                          healing
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-[#e9f6ec] p-4">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#2f7d4c]">
                        Focus
                      </p>
                      <p className="mt-2 text-xl font-black uppercase tracking-tighter">
                        Detox & immunity
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#17382d] p-4 text-white">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#dff5e8]">
                        Approach
                      </p>
                      <p className="mt-2 text-xl font-black uppercase tracking-tighter">
                        Mind-body care
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#17382d]/10 bg-[#f8faf8] p-4">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#2f7d4c]">
                        Belief
                      </p>
                      <p className="mt-2 text-lg font-bold leading-6 text-[#17382d]">
                        Health is built through daily rhythm, nourishment, and
                        balance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#17382d]/10 bg-[#edf6ee]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#2f7d4c]">
              Our philosophy
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tighter text-[#17382d] sm:text-5xl">
              Whole-person care for modern living.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-[#17382d]/10 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#dff5e8] text-lg text-[#17382d]">
                  ✓
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter text-[#17382d]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#17382d]/72">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-[#17382d]/10 bg-[#17382d] p-6 text-white shadow-[0_30px_80px_rgba(23,56,45,0.14)] sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#dff5e8]">
                Why choose us
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tighter text-white sm:text-5xl">
                Care that feels personal, natural, and lasting.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-[#eef8f0]"
                >
                  <span className="mr-2 text-[#8fe0a8]">•</span>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-[#17382d]/10 bg-[#f9faf7] p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#2f7d4c]">
                Begin your journey
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase tracking-tighter text-[#17382d]">
                Feel better, naturally.
              </h3>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-[#2f7d4c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#245d3d]"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
