'use client';

import Link from "next/link";
import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "917488931899";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.service) {
      setError("Please fill in the required fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.error || "We could not send your request right now. Please try again.",
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not send your request right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Aatmaveda, I would like to book a consultation.",
  )}`;

  const phoneLink = "tel:+917488931899";
  const emailLink = "mailto:hello@aatmaveda.com";

  return (
    <main className="min-h-screen bg-[#f5f0e6] px-4 py-10 text-[#17382d] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between border-b border-[#17382d]/10 pb-5">
          <Link href="/about" className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f7d4c]">
            Aatmaveda
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-[#17382d]/20 px-4 py-2 text-sm font-semibold text-[#17382d] transition hover:bg-white"
          >
            Back to About
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-4xl bg-[#17382d] p-7 text-white shadow-[0_25px_60px_rgba(23,56,45,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#dff5e8]">
              Consultation
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-tighter">
              Book your visit
            </h1>
            <p className="mt-5 text-base leading-7 text-white/80">
              Share your needs and we will contact you to schedule a personalized Ayurvedic consultation.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/80">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#9fe1b0]">Call</p>
                <a href={phoneLink} className="mt-1 block font-semibold text-white transition hover:text-[#9fe1b0]">
                  +91 74889 31899
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#9fe1b0]">Email</p>
                <a href={emailLink} className="mt-1 block font-semibold text-white transition hover:text-[#9fe1b0]">
                  hello@aatmaveda.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#9fe1b0]">WhatsApp</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block font-semibold text-white transition hover:text-[#9fe1b0]"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#9fe1b0]">Hours</p>
                <p className="mt-1 font-semibold text-white">Mon-Sat • 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </section>

          <section className="rounded-4xl border border-[#17382d]/10 bg-white p-6 shadow-[0_18px_50px_rgba(23,56,45,0.06)] sm:p-8">
            {submitted ? (
              <div className="rounded-2xl border border-[#2f7d4c]/20 bg-[#edf8f0] p-6 text-[#17382d]">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2f7d4c]">
                  Request received
                </p>
                <h2 className="mt-3 text-2xl font-black uppercase tracking-tighter">
                  Thank you
                </h2>
                <p className="mt-3 leading-7 text-[#17382d]/75">
                  Your consultation request has been noted. Our team will contact you shortly to confirm the time and treatment plan.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="inline-block rounded-full bg-[#2f7d4c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#245d3d]"
                  >
                    Return home
                  </Link>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full border border-[#17382d]/15 bg-[#f5f7f4] px-5 py-3 text-sm font-semibold text-[#17382d] transition hover:bg-white"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#17382d]">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-[#17382d]/15 bg-[#f8faf7] px-4 py-3 text-sm text-[#17382d] outline-none transition focus:border-[#2f7d4c]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#17382d]">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-[#17382d]/15 bg-[#f8faf7] px-4 py-3 text-sm text-[#17382d] outline-none transition focus:border-[#2f7d4c]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#17382d]">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full rounded-2xl border border-[#17382d]/15 bg-[#f8faf7] px-4 py-3 text-sm text-[#17382d] outline-none transition focus:border-[#2f7d4c]"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-semibold text-[#17382d]">
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                    className="w-full rounded-2xl border border-[#17382d]/15 bg-[#f8faf7] px-4 py-3 text-sm text-[#17382d] outline-none transition focus:border-[#2f7d4c]"
                  >
                    <option value="" disabled>
                      Select a treatment
                    </option>
                    <option>Panchakarma</option>
                    <option>Ayurvedic Consultation</option>
                    <option>Detox Therapy</option>
                    <option>Skin &amp; Hair Care</option>
                    <option>Weight Management</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#17382d]">
                    Tell us about your concern
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share your health goals or symptoms..."
                    className="w-full rounded-2xl border border-[#17382d]/15 bg-[#f8faf7] px-4 py-3 text-sm text-[#17382d] outline-none transition focus:border-[#2f7d4c]"
                  />
                </div>

                {error ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-[#2f7d4c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245d3d] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending request..." : "Submit consultation request"}
                </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
