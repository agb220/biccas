import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./_components/LayoutWrapper";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biccas",
  description: "We’re here to Increase your Productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interSans.variable} h-full antialiased`}>
      <body className="">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
