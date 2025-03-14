import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { LanguageProvider } from './contexts/LanguageContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LogiTech - Your Trusted Logistics Partner",
  description: "Professional logistics and supply chain solutions for businesses worldwide. We offer sea freight, air freight, land transport, and warehousing services.",
  keywords: "logistics, supply chain, transportation, warehousing, freight, shipping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
