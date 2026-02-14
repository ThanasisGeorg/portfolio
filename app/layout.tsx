import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const ralewaySans = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThanasisGeo",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ralewaySans.className} antialiased bg-[#e0e0e0]!`}>
        {children}
      </body>
    </html>
  );
}
