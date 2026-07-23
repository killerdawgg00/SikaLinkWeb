import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SikaLink — Money without borders",
  description: "Hold, convert, send and receive money between Ghana and the world with transparent rates and one beautifully simple wallet.",
  metadataBase: new URL("https://sikalink-ghana.sites.openai.com"),
  openGraph: {
    title: "SikaLink — Money without borders",
    description: "Hold, convert, send and receive money between Ghana and the world.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SikaLink — Money without borders",
    description: "Hold, convert, send and receive money between Ghana and the world.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
