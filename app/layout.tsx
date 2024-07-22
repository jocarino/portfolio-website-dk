import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Damola | Personal Portfolio",
  description: "Damola is a creative storyteller.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth font-ClashDisplay-Variable">
      <body className="bg-white text-gray-950 relative max-h-[100vh] w-full max-w-[100vw] overflow-x-hidden">
        <ActiveSectionContextProvider>
          <Header />
          <main className="pt-14 sm:pt-20">
            {children}
          </main>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}