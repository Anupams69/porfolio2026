import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Syne } from "next/font/google";
import Script from "next/script";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Anupam Shrivastava — Full Stack Developer",
  description:
    "Full Stack Developer in Bengaluru. MERN, Next.js, REST APIs, AWS. Experience across compliance, e-commerce, EdTech, and AI tooling.",
  openGraph: {
    title: "Anupam Shrivastava — Full Stack Developer",
    description:
      "Performance-driven Full Stack Developer — MongoDB, Express, React, Next.js, Node.js.",
    type: "website",
  },
};

const themeInit = `
(function(){
  try {
    var k = ${JSON.stringify(THEME_STORAGE_KEY)};
    var t = localStorage.getItem(k);
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
      return;
    }
    document.documentElement.setAttribute('data-theme', 'dark');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${syne.variable} ${manrope.variable} ${jetbrains.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        {children}
      </body>
    </html>
  );
}
