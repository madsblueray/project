import type { Metadata } from "next";
import "./globals.css";

import { Open_Sans, Sono  } from 'next/font/google'
import { twMerge } from "tailwind-merge";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans"});
const sono = Sono({ subsets: ["latin"], variable: "--font-sono"});

export const metadata: Metadata = {
  title: "madison holmes' site",
  description: "my totally awesome website that will forsure get me hired...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge("[perspecitve:500px] overflow-x-hidden",openSans.variable, sono.variable)}>
        {children}
      </body>
    </html>
  );
}
