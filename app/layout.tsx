"use client";

import { Be_Vietnam_Pro } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} antialiased`} suppressHydrationWarning>
        {/* Skip navigation link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-medifind-red focus:text-white focus:rounded-button focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medifind-red"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
