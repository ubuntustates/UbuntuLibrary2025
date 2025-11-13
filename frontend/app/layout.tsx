// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ubuntu Library",
  description: "A digital library for African knowledge and learning",

  icons: {
    icon: "/favicon.ico", // Default favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-100 font-sans min-h-screen`}
      >
        <Navbar />
        <main className="min-h-screen md:my-0 ">
          <div className="px-6 pt-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>

  );
}
