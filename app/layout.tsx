import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";

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
      <body
        className={`bg-white text-gray-950 relative pt-14 sm:pt-[5rem]`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
          {/* <Footer /> */}

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
