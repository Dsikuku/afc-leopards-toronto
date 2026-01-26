import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import PageWrapper from "@/components/PageWrapper";
import NewsletterModal from "@/components/NewsletterModal";
import { CartProvider } from "@/context/CartContext"; // Add this

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ingwe Toronto Chapter",
  description: "Official AFC Leopards Toronto Chapter platform",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-ingwe-dark text-white selection:bg-ingwe-blue selection:text-white`}>
        <CartProvider> {/* Wrap the app */}
          <Navbar /> {/* prop removed, now handled by context */}
          <NewsletterModal />
          <PageWrapper>
            <main className="pt-24 min-h-screen">
              {children}
            </main>
          </PageWrapper>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}