import type { Metadata } from "next";
import "./globals.css";

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
    icon: [{ url: "/sikalink-main.png", type: "image/png" }],
    shortcut: "/sikalink-main.png",
    apple: "/sikalink-main.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
