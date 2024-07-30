import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Damola | Personal Portfolio",
  description:
    "Explore Damola Kevwe's professional portfolio showcasing skills, projects, and achievements.",
  viewport: {
    width: "device-width",
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
      <Head>
        <meta
          property="og:image"
          content="https://damolakevwe.com/_next/image?url=%2Fwebsite-preview.webp&w=640&q=85"
        />
      </Head>

      <body className="bg-white text-gray-950 relative max-h-[100vh] w-full max-w-[100vw] overflow-x-hidden">
        <ActiveSectionContextProvider>
          <Header />
          <main className="pt-14 lg:pt-20">{children}</main>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
