import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aatmaveda | Ayurvedic Wellness",
  description: "Modern Ayurvedic wellness with personalized natural care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const whatsappLink =
    "https://wa.me/917488931899?text=" +
    encodeURIComponent("Hello Aatmaveda, I would like to book a consultation.");

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-lg font-black text-white shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition hover:scale-105"
        >
          WA
        </a>
      </body>
    </html>
  );
}
