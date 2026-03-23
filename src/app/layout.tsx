import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AI & IT Literacy School | AI時代に正しいリテラシーを",
  description: "プログラミングやAI、セキュリティなどのITリテラシーを学ぶスクール。AI時代に潜む罠に対する防衛策を身につけます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
